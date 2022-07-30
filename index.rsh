"reach 0.1";
const common = {
  showCountDown: Fun([UInt], Null),
  seeOutcome: Fun([Bool], Null),
};
export const main = Reach.App(() => {
  const D = Participant("Deployer", {
    amount: UInt,
    getSwitch: Fun([], Bool),
    ...common,
    // Specify Deployer's interact interface here
  });
  const A = Participant("Attacher", {
    // Specify Atttacher's interact interface here
    termsAccepted: Fun([], Bool),
    ...common,
  });
  init();
  const countDown = 9;
  const informTimeout = () => {
    each([D, A], () => {
      interact.showCountDown(countDown);
    });
  };
  // The first one to publish deploys the contract
  D.only(() => {
    const amount = declassify(interact.amount);
  });
  D.publish(amount).pay(amount);
  commit();

  A.only(() => {
    const terms = declassify(interact.termsAccepted());
  });
  // The second one to publish always attaches
  A.publish(terms).timeout(relativeTime(countDown), () =>
    closeTo(D, informTimeout)
  );

  // commit();

  var [countTime, switchValue] = [countDown + lastConsensusTime(), false];
  invariant(balance() == amount, "Deployer's balance is not correct");
  while (lastConsensusTime() < countTime ) {
    commit();
    D.only(() => {
      const shouldContractEnd = !declassify(interact.getSwitch());
    });
    D.publish(shouldContractEnd).timeout(relativeTime(countDown), () =>
      closeTo(A, informTimeout)
    );
    each([A, D], () => {
      interact.seeOutcome(shouldContractEnd);
    });
    [countTime, switchValue] = [
      shouldContractEnd?lastConsensusTime():  countDown + lastConsensusTime(),
      shouldContractEnd,
    ];
    continue;
  }

  transfer(balance()).to(!switchValue ? D : A);
  commit();

  // write your program here
  exit();
});
