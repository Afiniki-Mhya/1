// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Attacher(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v167], secs: v169, time: v168, didSend: v29, from: v166 } = txn1;
  ;
  const v178 = stdlib.add(v168, stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'));
  const v182 = stdlib.protect(ctc1, await interact.termsAccepted(), {
    at: './index.rsh:33:52:application',
    fs: ['at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:13:function exp)'],
    msg: 'termsAccepted',
    who: 'Attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v166, v167, v168, v178, v182],
    evt_cnt: 1,
    funcNum: 1,
    lct: v168,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v184], secs: v186, time: v185, didSend: v38, from: v183 } = txn2;
      
      ;
      const v188 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'), v168);
      const v189 = v188;
      const v190 = false;
      const v191 = v185;
      const v192 = v168;
      const v198 = v167;
      
      if (await (async () => {
        const v202 = stdlib.lt(v192, v189);
        
        return v202;})()) {
        const v209 = stdlib.add(v191, stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'));
        sim_r.isHalt = false;
        }
      else {
        const v248 = v190 ? v183 : v166;
        sim_r.txns.push({
          kind: 'from',
          to: v248,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v178],
    tys: [ctc3, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v166, v167, v168, v178],
      evt_cnt: 0,
      funcNum: 2,
      lct: v168,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v257, time: v256, didSend: v131, from: v255 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v166,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v257, time: v256, didSend: v131, from: v255 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.showCountDown(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9')), {
      at: './index.rsh:22:29:application',
      fs: ['at ./index.rsh:21:9:application call to [unknown function] (defined at: ./index.rsh:21:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:20:28:function exp)', 'at ./index.rsh:37:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'showCountDown',
      who: 'Attacher'
      });
    
    return;
    
    }
  else {
    const {data: [v184], secs: v186, time: v185, didSend: v38, from: v183 } = txn2;
    ;
    const v188 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'), v168);
    let v189 = v188;
    let v190 = false;
    let v191 = v185;
    let v192 = v168;
    let v198 = v167;
    
    while (await (async () => {
      const v202 = stdlib.lt(v192, v189);
      
      return v202;})()) {
      const v209 = stdlib.add(v191, stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'));
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc1],
        timeoutAt: ['time', v209],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v166, v183, v191, v198, v209],
          evt_cnt: 0,
          funcNum: 5,
          lct: v191,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v230, time: v229, didSend: v90, from: v228 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v183,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc3, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v230, time: v229, didSend: v90, from: v228 } = txn4;
        ;
        const v231 = stdlib.addressEq(v183, v228);
        const v232 = stdlib.addressEq(v166, v228);
        const v233 = v231 ? true : v232;
        stdlib.assert(v233, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:50:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
          });
        ;
        stdlib.protect(ctc2, await interact.showCountDown(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9')), {
          at: './index.rsh:22:29:application',
          fs: ['at ./index.rsh:21:9:application call to [unknown function] (defined at: ./index.rsh:21:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:20:28:function exp)', 'at ./index.rsh:50:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'showCountDown',
          who: 'Attacher'
          });
        
        return;
        
        }
      else {
        const {data: [v216], secs: v218, time: v217, didSend: v60, from: v215 } = txn3;
        ;
        const v219 = stdlib.addressEq(v166, v215);
        stdlib.assert(v219, {
          at: './index.rsh:49:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        stdlib.protect(ctc2, await interact.seeOutcome(v216), {
          at: './index.rsh:53:26:application',
          fs: ['at ./index.rsh:52:9:application call to [unknown function] (defined at: ./index.rsh:52:21:function exp)'],
          msg: 'seeOutcome',
          who: 'Attacher'
          });
        
        const v226 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'), v191);
        const v227 = v216 ? v191 : v226;
        const cv189 = v227;
        const cv190 = v216;
        const cv191 = v217;
        const cv192 = v191;
        const cv198 = v198;
        
        v189 = cv189;
        v190 = cv190;
        v191 = cv191;
        v192 = cv192;
        v198 = cv198;
        
        continue;}
      
      }
    const v248 = v190 ? v183 : v166;
    ;
    return;
    }
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v163 = stdlib.protect(ctc0, interact.amount, 'for Deployer\'s interact field amount');
  
  const txn1 = await (ctc.sendrecv({
    args: [v163],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:29:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v163, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v167], secs: v169, time: v168, didSend: v29, from: v166 } = txn1;
      
      sim_r.txns.push({
        amt: v167,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v178 = stdlib.add(v168, stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v167], secs: v169, time: v168, didSend: v29, from: v166 } = txn1;
  ;
  const v178 = stdlib.add(v168, stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: ['time', v178],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v166, v167, v168, v178],
      evt_cnt: 0,
      funcNum: 2,
      lct: v168,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v257, time: v256, didSend: v131, from: v255 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v166,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v257, time: v256, didSend: v131, from: v255 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.showCountDown(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9')), {
      at: './index.rsh:22:29:application',
      fs: ['at ./index.rsh:21:9:application call to [unknown function] (defined at: ./index.rsh:21:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:20:28:function exp)', 'at ./index.rsh:37:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'showCountDown',
      who: 'Deployer'
      });
    
    return;
    
    }
  else {
    const {data: [v184], secs: v186, time: v185, didSend: v38, from: v183 } = txn2;
    ;
    const v188 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'), v168);
    let v189 = v188;
    let v190 = false;
    let v191 = v185;
    let v192 = v168;
    let v198 = v167;
    
    while (await (async () => {
      const v202 = stdlib.lt(v192, v189);
      
      return v202;})()) {
      const v209 = stdlib.add(v191, stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'));
      const v213 = stdlib.protect(ctc1, await interact.getSwitch(), {
        at: './index.rsh:47:63:application',
        fs: ['at ./index.rsh:46:11:application call to [unknown function] (defined at: ./index.rsh:46:15:function exp)'],
        msg: 'getSwitch',
        who: 'Deployer'
        });
      const v214 = v213 ? false : true;
      
      const txn3 = await (ctc.sendrecv({
        args: [v166, v183, v191, v198, v209, v214],
        evt_cnt: 1,
        funcNum: 4,
        lct: v191,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:49:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v216], secs: v218, time: v217, didSend: v60, from: v215 } = txn3;
          
          ;
          
          const v226 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'), v191);
          const v227 = v216 ? v191 : v226;
          const cv189 = v227;
          const cv190 = v216;
          const cv191 = v217;
          const cv192 = v191;
          const cv198 = v198;
          
          await (async () => {
            const v189 = cv189;
            const v190 = cv190;
            const v191 = cv191;
            const v192 = cv192;
            const v198 = cv198;
            
            if (await (async () => {
              const v202 = stdlib.lt(v192, v189);
              
              return v202;})()) {
              const v209 = stdlib.add(v191, stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'));
              sim_r.isHalt = false;
              }
            else {
              const v248 = v190 ? v183 : v166;
              sim_r.txns.push({
                kind: 'from',
                to: v248,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v209],
        tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v166, v183, v191, v198, v209],
          evt_cnt: 0,
          funcNum: 5,
          lct: v191,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v230, time: v229, didSend: v90, from: v228 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v183,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc3, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v230, time: v229, didSend: v90, from: v228 } = txn4;
        ;
        const v231 = stdlib.addressEq(v183, v228);
        const v232 = stdlib.addressEq(v166, v228);
        const v233 = v231 ? true : v232;
        stdlib.assert(v233, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:50:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        ;
        stdlib.protect(ctc2, await interact.showCountDown(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9')), {
          at: './index.rsh:22:29:application',
          fs: ['at ./index.rsh:21:9:application call to [unknown function] (defined at: ./index.rsh:21:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:20:28:function exp)', 'at ./index.rsh:50:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'showCountDown',
          who: 'Deployer'
          });
        
        return;
        
        }
      else {
        const {data: [v216], secs: v218, time: v217, didSend: v60, from: v215 } = txn3;
        ;
        const v219 = stdlib.addressEq(v166, v215);
        stdlib.assert(v219, {
          at: './index.rsh:49:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        stdlib.protect(ctc2, await interact.seeOutcome(v216), {
          at: './index.rsh:53:26:application',
          fs: ['at ./index.rsh:52:9:application call to [unknown function] (defined at: ./index.rsh:52:21:function exp)'],
          msg: 'seeOutcome',
          who: 'Deployer'
          });
        
        const v226 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:19:21:decimal', stdlib.UInt_max, '9'), v191);
        const v227 = v216 ? v191 : v226;
        const cv189 = v227;
        const cv190 = v216;
        const cv191 = v217;
        const cv192 = v191;
        const cv198 = v198;
        
        v189 = cv189;
        v190 = cv190;
        v191 = cv191;
        v192 = cv192;
        v198 = cv198;
        
        continue;}
      
      }
    const v248 = v190 ? v183 : v166;
    ;
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAJAAEFCQJQSDAgJgIBAAAiNQAxGEECgSlkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAECSYEEDEAAukkkDEAAUiQSRCQ0ARJENARJIhJMNAISEUQoZEk1A1cgIDX/gATMmZJcsDIGNAMhBVsPRDT/MQASNANXACAxABIRRLEisgE0AyEGW7III7IQNP+yB7NCAaRIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/gUBbNf5JNQUXNf2ABO7n6CI0/RZRBwhQsDIGNAMhBVsMRDT/MQASRDT/NANXICAlNP4INP40/U00/TIGNP40AyEGW0IA6yEEEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQdbD0SxIrIBNAMhCFuyCCOyEDQDVwAgsgezQgEBSSMMQABQSCM0ARJENARJIhJMNAISEUQoZEk1A4EoWzX/STUFFzX+gAQPv8Y0NP4WUQcIULAyBjQDIQdbDEQ0A1cAIDEAJTT/CCIyBjT/NAMhCFtCAFRIgaCNBogBECI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iADqMgYlCDX+MQA0/xZQMgYWUDT+FlAoSwFXADhnSCM1ATIGNQJCAHI1/zX+Nf01/DX7Nfo1+TT+NPsMQQApNP0lCDX4NPk0+lA0/RZQNP8WUDT4FlAoSwFXAFhnSCQ1ATIGNQJCADOxIrIBNP+yCCOyEDT5NPo0/E2yB7NCAAAxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v167",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v167",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v184",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v216",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v184",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v216",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620010e9380380620010e98339810160408190526200002691620001ff565b60008080554360035560408051602080820183529281528151338152845181850152928401515183830152905190917f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d919081900360600190a16020820151516200009590341460076200012f565b620000a2600943620002a1565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860151518552438085528b51835260019788905590965588518086019690965292518589015290519084015251828401528451808303909301835260a09091019093528051919262000125926002929091019062000159565b5050505062000305565b81620001555760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016790620002c8565b90600052602060002090601f0160209004810192826200018b5760008555620001d6565b82601f10620001a657805160ff1916838001178555620001d6565b82800160010185558215620001d6579182015b82811115620001d6578251825591602001919060010190620001b9565b50620001e4929150620001e8565b5090565b5b80821115620001e45760008155600101620001e9565b60008183036040808212156200021457600080fd5b80518082016001600160401b0380821183831017156200024457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200025e57600080fd5b8351945060208501915084821081831117156200028b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620002c357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002dd57607f821691505b60208210811415620002ff57634e487b7160e01b600052602260045260246000fd5b50919050565b610dd480620003156000396000f3fe60806040526004361061006e5760003560e01c80638e3147691161004b5780638e314769146100c35780639a3e3912146100d6578063a98bf223146100e9578063ab53f2c6146100fc57005b80631e93b0f1146100775780637eea518c1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610b0c565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610b0c565b61029d565b6100756100e4366004610b0c565b610438565b6100756100f7366004610b0c565b6105cb565b34801561010857600080fd5b506101116107b6565b604051610092929190610b2f565b61012f600160005414600d610853565b6101498135158061014257506001548235145b600e610853565b60008080556002805461015b90610b8c565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610b8c565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610bdd565b90506102008160600151431015600f610853565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610231929190610c66565b60405180910390a16102453415600c610853565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610282573d6000803e3d6000fd5b5060008080556001819055610299906002906109c3565b5050565b6102ad6005600054146017610853565b6102c7813515806102c057506001548235145b6018610853565b6000808055600280546102d990610b8c565b80601f016020809104026020016040519081016040528092919081815260200182805461030590610b8c565b80156103525780601f1061032757610100808354040283529160200191610352565b820191906000526020600020905b81548152906001019060200180831161033557829003601f168201915b505050505080602001905181019061036a9190610c9b565b905061037e81608001514310156019610853565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516103af929190610c66565b60405180910390a16103c334156015610853565b60208101516103f7906001600160a01b031633146103ed5781516001600160a01b031633146103f0565b60015b6016610853565b80602001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610282573d6000803e3d6000fd5b6104486001600054146009610853565b6104628135158061045b57506001548235145b600a610853565b60008080556002805461047490610b8c565b80601f01602080910402602001604051908101604052809291908181526020018280546104a090610b8c565b80156104ed5780601f106104c2576101008083540402835291602001916104ed565b820191906000526020600020905b8154815290600101906020018083116104d057829003601f168201915b50505050508060200190518101906105059190610bdd565b905061051881606001514310600b610853565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f49153383604051610549929190610d40565b60405180910390a161055d34156008610853565b610565610a00565b815181516001600160a01b039091169052805133602090910152604082015161058f906009610d5d565b602080830180519290925281516000908201528151436040918201528401518251606001528301519051608001526105c681610878565b505050565b6105db6005600054146012610853565b6105f5813515806105ee57506001548235145b6013610853565b60008080556002805461060790610b8c565b80601f016020809104026020016040519081016040528092919081815260200182805461063390610b8c565b80156106805780601f1061065557610100808354040283529160200191610680565b820191906000526020600020905b81548152906001019060200180831161066357829003601f168201915b50505050508060200190518101906106989190610c9b565b90506106ab816080015143106014610853565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b9433836040516106dc929190610d40565b60405180910390a16106f034156010610853565b8051610708906001600160a01b031633146011610853565b610710610a00565b815181516001600160a01b03918216905260208084015183519216918101919091526107429060408501908501610d83565b61075b576040820151610756906009610d5d565b610761565b81604001515b6020808301519190915261077b9060408501908501610d83565b60208083018051921515929091019190915280514360409182015283015181516060908101919091528301519051608001526105c681610878565b6000606060005460028080546107cb90610b8c565b80601f01602080910402602001604051908101604052809291908181526020018280546107f790610b8c565b80156108445780601f1061081957610100808354040283529160200191610844565b820191906000526020600020905b81548152906001019060200180831161082757829003601f168201915b50505050509050915091509091565b816102995760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151805160609091015110156109675760098260200151604001516108af9190610d5d565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e51890151821688528e890180518e015188525184015185528d5183526005909955436001558b51808901999099529551909516878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926109619260029290910190610a5b565b50505050565b81602001516020015161097c57815151610983565b8151602001515b6001600160a01b03166108fc8360200151608001519081150290604051600060405180830381858888f19350505050158015610282573d6000803e3d6000fd5b5080546109cf90610b8c565b6000825580601f106109df575050565b601f0160209004906000526020600020908101906109fd9190610adf565b50565b60408051608081018252600091810182815260608201929092529081908152602001610a566040518060a00160405280600081526020016000151581526020016000815260200160008152602001600081525090565b905290565b828054610a6790610b8c565b90600052602060002090601f016020900481019282610a895760008555610acf565b82601f10610aa257805160ff1916838001178555610acf565b82800160010185558215610acf579182015b82811115610acf578251825591602001919060010190610ab4565b50610adb929150610adf565b5090565b5b80821115610adb5760008155600101610ae0565b600060408284031215610b0657600080fd5b50919050565b600060408284031215610b1e57600080fd5b610b288383610af4565b9392505050565b82815260006020604081840152835180604085015260005b81811015610b6357858101830151858201606001528201610b47565b81811115610b75576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610ba057607f821691505b60208210811415610b0657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610bd857600080fd5b919050565b600060808284031215610bef57600080fd5b6040516080810181811067ffffffffffffffff82111715610c2057634e487b7160e01b600052604160045260246000fd5b604052610c2c83610bc1565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b80358015158114610bd857600080fd5b6001600160a01b038316815281356020808301919091526060820190610c8d908401610c56565b151560408301529392505050565b600060a08284031215610cad57600080fd5b60405160a0810181811067ffffffffffffffff82111715610cde57634e487b7160e01b600052604160045260246000fd5b604052610cea83610bc1565b8152610cf860208401610bc1565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b80358252610d3560208201610c56565b151560208301525050565b6001600160a01b038316815260608101610b286020830184610d25565b60008219821115610d7e57634e487b7160e01b600052601160045260246000fd5b500190565b600060208284031215610d9557600080fd5b610b2882610c5656fea26469706673582212203cb08481a90172d1073e20663037d6503e2d540ab2c4b3ad08cade07bd1cca7a64736f6c634300080c0033`,
  BytecodeLen: 4329,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:30:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:37:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:63:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:45:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:50:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Attacher": Attacher,
  "Deployer": Deployer
  };
export const _APIs = {
  };
