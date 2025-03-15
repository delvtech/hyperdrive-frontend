export const MockFixedPointMath = {
  name: 'MockFixedPointMath' as const,
  abi: [
  {
    "type": "function",
    "name": "divDown",
    "inputs": [
      {
        "name": "a",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "b",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "divUp",
    "inputs": [
      {
        "name": "a",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "b",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "exp",
    "inputs": [
      {
        "name": "x",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [
      {
        "name": "r",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "ln",
    "inputs": [
      {
        "name": "x",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "mulDivDown",
    "inputs": [
      {
        "name": "x",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "d",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "z",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "mulDivUp",
    "inputs": [
      {
        "name": "x",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "d",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "z",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "mulDown",
    "inputs": [
      {
        "name": "a",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "b",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "mulUp",
    "inputs": [
      {
        "name": "a",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "b",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "pow",
    "inputs": [
      {
        "name": "x",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "updateWeightedAverage",
    "inputs": [
      {
        "name": "_average",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_totalWeight",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_delta",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_deltaWeight",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_isAdding",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "average",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "error",
    "name": "ExpInvalidExponent",
    "inputs": []
  },
  {
    "type": "error",
    "name": "LnInvalidInput",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnsafeCastToInt256",
    "inputs": []
  }
] as const,
  bytecode: '0x608060405234801561000f575f80fd5b506108fe8061001d5f395ff3fe608060405234801561000f575f80fd5b506004361061009b575f3560e01c80639ba5f52e116100635780639ba5f52e14610110578063b67bee0414610123578063cbe8623f14610136578063e46751e314610149578063f3e4f87c1461015c575f80fd5b80630c9b98811461009f57806312bd6ac0146100c45780632e4c697f146100d757806381e5f7c9146100ea5780638e6f2353146100fd575b5f80fd5b6100b26100ad3660046107a9565b61016f565b60405190815260200160405180910390f35b6100b26100d23660046107c9565b610185565b6100b26100e53660046107a9565b61019b565b6100b26100f83660046107f2565b6101a7565b6100b261010b36600461083f565b6101c1565b6100b261011e3660046107a9565b6101d3565b6100b26101313660046107c9565b6101df565b6100b26101443660046107a9565b6101ec565b6100b261015736600461083f565b6101f8565b6100b261016a3660046107a9565b610203565b5f8061017b848461020f565b9150505b92915050565b5f80610192858585610223565b95945050505050565b5f8061017b8484610246565b5f806101b687878787876102b5565b979650505050505050565b5f806101cc83610355565b9392505050565b5f8061017b8484610583565b5f80610192858585610593565b5f8061017b84846105ae565b5f806101cc836105c2565b5f8061017b8484610754565b5f6101cc8383670de0b6b3a7640000610593565b5f825f190484118302158202610237575f80fd5b50910281810615159190040190565b5f815f0361025d5750670de0b6b3a764000061017f565b825f0361026b57505f61017f565b5f61027583610768565b90505f61028961028486610768565b610355565b90508181026102a0670de0b6b3a76400008261086a565b90506102ab816105c2565b9695505050505050565b5f825f036102c4575084610192565b811561031c576102fb6102d784876108a2565b6102e1858761020f565b6102eb888a61020f565b6102f591906108a2565b90610583565b90505f6103088588610795565b905080821015610316578091505b50610192565b82850361032a57505f610192565b6102ab61033784876108b5565b6103418587610754565b61034b888a61020f565b6102f591906108b5565b5f8082136103765760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906104029084901c610768565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f6101cc83670de0b6b3a7640000845b5f825f1904841183021582026105a7575f80fd5b5091020490565b5f6101cc83670de0b6b3a764000084610223565b5f680248ce36a70cb26b3e1982136105db57505f919050565b680755bf798b4a1bf1e58212610604576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906102ab74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610768565b5f6101cc8383670de0b6b3a7640000610223565b5f6001600160ff1b038211156107915760405163396ea70160e11b815260040160405180910390fd5b5090565b5f8183116107a357826101cc565b50919050565b5f80604083850312156107ba575f80fd5b50508035926020909101359150565b5f805f606084860312156107db575f80fd5b505081359360208301359350604090920135919050565b5f805f805f60a08688031215610806575f80fd5b8535945060208601359350604086013592506060860135915060808601358015158114610831575f80fd5b809150509295509295909350565b5f6020828403121561084f575f80fd5b5035919050565b634e487b7160e01b5f52601160045260245ffd5b5f8261088457634e487b7160e01b5f52601260045260245ffd5b600160ff1b82145f198414161561089d5761089d610856565b500590565b8082018082111561017f5761017f610856565b8181038181111561017f5761017f61085656fea2646970667358221220e9a9948213c0830a3cbced12e8a4599d9bf7589c0963e04bcdafe6babf23056064736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "divDown(uint256,uint256)": "9ba5f52e",
  "divUp(uint256,uint256)": "cbe8623f",
  "exp(int256)": "e46751e3",
  "ln(int256)": "8e6f2353",
  "mulDivDown(uint256,uint256,uint256)": "b67bee04",
  "mulDivUp(uint256,uint256,uint256)": "12bd6ac0",
  "mulDown(uint256,uint256)": "0c9b9881",
  "mulUp(uint256,uint256)": "f3e4f87c",
  "pow(uint256,uint256)": "2e4c697f",
  "updateWeightedAverage(uint256,uint256,uint256,uint256,bool)": "81e5f7c9"
} as const
};
