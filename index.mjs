import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = (amt = 100) => stdlib.parseCurrency(amt);
let i = 0;
const showBalance = async (acc) => {
  console.log(
    `The balance is  for  ${!(i % 2) ? "Deployer" : "Attacher"}`,
    stdlib.formatCurrency(await stdlib.balanceOf(acc))
  );
  i++;
};
const accDeployer = await stdlib.newTestAccount(startingBalance(6000));
const accAttacher = await stdlib.newTestAccount(startingBalance());
console.log("Hello, Attacher and Deployer!");

const common = {
  showCountDown: (count) => {
    console.log("Timeout was encountered", parseInt(count));
  },
  seeOutcome: (outcome) => {
    console.log(outcome?"The inheritance was transferred":"The inheritance was not transferred");
  }
};
await showBalance(accDeployer);
await showBalance(accAttacher);
console.log("Launching...");
const ctcDeployer = accDeployer.contract(backend);
const ctcAttacher = accAttacher.contract(backend, ctcDeployer.getInfo());

console.log("Starting backends...");
await Promise.all([
  backend.Deployer(ctcDeployer, {
    amount: stdlib.parseCurrency(5000),
    getSwitch: async () => {
    
      const response = await ask.ask("Are you there", ask.yesno);
      console.log(response);
      console.log(`${response ? "I'm here" : "I'm not here"}`);
    
    return response;
    
    },
    ...stdlib.hasRandom,
    ...common,
    // implement Attacher's interact object here
  }),
  backend.Attacher(ctcAttacher, {
    ...stdlib.hasRandom,
    ...common,
    termsAccepted: () => {
      return true;
    },
    // implement Deployer's interact object here
  }),
]);
await showBalance(accDeployer);
await showBalance(accAttacher);

console.log("Goodbye, Attacher and Deployer!");

process.exit();
