export const HyperdriveCheckpointSubrewarder = {
  name: 'HyperdriveCheckpointSubrewarder' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_rewarder",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_source",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_registry",
        "type": "address",
        "internalType": "contract IHyperdriveRegistry"
      },
      {
        "name": "_rewardToken",
        "type": "address",
        "internalType": "contract IERC20"
      },
      {
        "name": "_minterRewardAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_traderRewardAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "admin",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "kind",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "minterRewardAmount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "processReward",
    "inputs": [
      {
        "name": "_instance",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_claimant",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_checkpointTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_isTrader",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IERC20"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registry",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IHyperdriveRegistry"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rewardToken",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rewarder",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "source",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "traderRewardAmount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updateAdmin",
    "inputs": [
      {
        "name": "_admin",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateMinterRewardAmount",
    "inputs": [
      {
        "name": "_minterRewardAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateRegistry",
    "inputs": [
      {
        "name": "_registry",
        "type": "address",
        "internalType": "contract IHyperdriveRegistry"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateRewardToken",
    "inputs": [
      {
        "name": "_rewardToken",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateSource",
    "inputs": [
      {
        "name": "_source",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateTraderRewardAmount",
    "inputs": [
      {
        "name": "_traderRewardAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "version",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "AdminUpdated",
    "inputs": [
      {
        "name": "admin",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MinterRewardAmountUpdated",
    "inputs": [
      {
        "name": "minterRewardAmount",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RegistryUpdated",
    "inputs": [
      {
        "name": "registry",
        "type": "address",
        "indexed": true,
        "internalType": "contract IHyperdriveRegistry"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RewardTokenUpdated",
    "inputs": [
      {
        "name": "rewardToken",
        "type": "address",
        "indexed": true,
        "internalType": "contract IERC20"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SourceUpdated",
    "inputs": [
      {
        "name": "source",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TraderRewardAmountUpdated",
    "inputs": [
      {
        "name": "traderRewardAmount",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "AddressEmptyCode",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "AddressInsufficientBalance",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "FailedInnerCall",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SafeERC20FailedOperation",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "Unauthorized",
    "inputs": []
  }
] as const,
  bytecode: '0x60a060405234801562000010575f80fd5b50604051620010db380380620010db8339810160408190526200003391620000d3565b5f62000040888262000286565b50600180546001600160a01b031990811633179091556001600160a01b0396871660805260028054968816968216969096179095556003805494871694861694909417909355600480549290951691909316179092556005556006555062000352565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114620000ce575f80fd5b919050565b5f805f805f805f60e0888a031215620000ea575f80fd5b87516001600160401b038082111562000101575f80fd5b818a0191508a601f83011262000115575f80fd5b8151818111156200012a576200012a620000a3565b604051601f8201601f19908116603f01168101908382118183101715620001555762000155620000a3565b81604052828152602093508d8484870101111562000171575f80fd5b5f91505b8282101562000194578482018401518183018501529083019062000175565b5f848483010152809b50505050620001ae818b01620000b7565b97505050620001c060408901620000b7565b9450620001d060608901620000b7565b9350620001e060808901620000b7565b925060a0880151915060c0880151905092959891949750929550565b600181811c908216806200021157607f821691505b6020821081036200023057634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200028157805f5260205f20601f840160051c810160208510156200025d5750805b601f840160051c820191505b818110156200027e575f815560010162000269565b50505b505050565b81516001600160401b03811115620002a257620002a2620000a3565b620002ba81620002b38454620001fc565b8462000236565b602080601f831160018114620002f0575f8415620002d85750858301515b5f19600386901b1c1916600185901b1785556200034a565b5f85815260208120601f198616915b828110156200032057888601518255948401946001909101908401620002ff565b50858210156200033e57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b608051610d69620003725f395f818161022801526105110152610d695ff3fe608060405234801561000f575f80fd5b5060043610610106575f3560e01c80637b1039991161009e578063e9f460411161006e578063e9f460411461025d578063f24bab651461028f578063f7c618c1146102a2578063f851a440146102b5578063f8cf31cb146102c8575f80fd5b80637b103999146101fd5780639183219f14610210578063dcc3e06e14610223578063e2f273bd1461024a575f80fd5b806354fd4d50116100d957806354fd4d501461018c5780635b338e07146101b257806362498576146101c957806367e828bf146101d2575f80fd5b806304baa00b1461010a57806306fdde031461015c5780631a5da6c8146101645780632057b1c714610179575b5f80fd5b6101466040518060400160405280601f81526020017f48797065726472697665436865636b706f696e7453756272657761726465720081525081565b604051610153919061099e565b60405180910390f35b6101466102db565b6101776101723660046109e4565b610366565b005b6101776101873660046109ff565b6103d9565b61014660405180604001604052806007815260200166076312e302e32360cc1b81525081565b6101bb60065481565b604051908152602001610153565b6101bb60055481565b6002546101e5906001600160a01b031681565b6040516001600160a01b039091168152602001610153565b6003546101e5906001600160a01b031681565b61017761021e3660046109ff565b610435565b6101e57f000000000000000000000000000000000000000000000000000000000000000081565b6101776102583660046109e4565b610491565b61027061026b366004610a23565b610504565b604080516001600160a01b039093168352602083019190915201610153565b61017761029d3660046109e4565b6106a6565b6004546101e5906001600160a01b031681565b6001546101e5906001600160a01b031681565b6101776102d63660046109e4565b610719565b5f80546102e790610a73565b80601f016020809104026020016040519081016040528092919081815260200182805461031390610a73565b801561035e5780601f106103355761010080835404028352916020019161035e565b820191905f5260205f20905b81548152906001019060200180831161034157829003601f168201915b505050505081565b6001546001600160a01b03163314610390576040516282b42960e81b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517fd6ceddf6d2a22f21c7c81675c518004eff43bc5c8a6fc32a0b748e69d58671cd905f90a250565b6001546001600160a01b03163314610403576040516282b42960e81b815260040160405180910390fd5b600581905560405181907faa8ae98398382187f26cba5014456be39e5486e84a5347fc41a234a6c4f03d25905f90a250565b6001546001600160a01b0316331461045f576040516282b42960e81b815260040160405180910390fd5b600681905560405181907fcbfc476043808accf425b48e528723c20dfc23e022fc8b6b63247ba91f9ee396905f90a250565b6001546001600160a01b031633146104bb576040516282b42960e81b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040517f54e4612788f90384e6843298d7854436f3a585b2c3831ab66abf1de63bfa6c2d905f90a250565b5f80336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461054e576040516282b42960e81b815260040160405180910390fd5b5f60045f9054906101000a90046001600160a01b031690506105d542886001600160a01b031663b0d965806040518163ffffffff1660e01b815260040161026060405180830381865afa1580156105a7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105cb9190610b61565b610120015161078c565b85146105e55791505f905061069d565b60035460405163062eced560e21b81526001600160a01b038981166004830152909116906318bb3b54906024016040805180830381865afa15801561062c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106509190610c5f565b516001146106625791505f905061069d565b5f8461067057600554610674565b6006545b9050801561069757600254610697906001600160a01b03848116911689846107aa565b90925090505b94509492505050565b6001546001600160a01b031633146106d0576040516282b42960e81b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517ff2d025ce2c36cbd78cd7a2dd4607f7c5ef6b207ee59dfceb74aa73b80c1c53ae905f90a250565b6001546001600160a01b03163314610743576040516282b42960e81b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040517fa5289ba11778999f4dfb9415023783188d42bbb5db0612cbfbe55999069612a0905f90a250565b5f6107978284610cbf565b6107a19084610cde565b90505b92915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261080490859061080a565b50505050565b5f61081e6001600160a01b03841683610875565b905080515f141580156108425750808060200190518101906108409190610cfd565b155b1561087057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606107a183835f845f80856001600160a01b031684866040516108999190610d18565b5f6040518083038185875af1925050503d805f81146108d3576040519150601f19603f3d011682016040523d82523d5f602084013e6108d8565b606091505b50915091506108e88683836108f4565b925050505b9392505050565b6060826109095761090482610950565b6108ed565b815115801561092057506001600160a01b0384163b155b1561094957604051639996b31560e01b81526001600160a01b0385166004820152602401610867565b50806108ed565b8051156109605780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b5f5b8381101561099657818101518382015260200161097e565b50505f910152565b602081525f82518060208401526109bc81604085016020870161097c565b601f01601f19169190910160400192915050565b6001600160a01b0381168114610979575f80fd5b5f602082840312156109f4575f80fd5b81356108ed816109d0565b5f60208284031215610a0f575f80fd5b5035919050565b8015158114610979575f80fd5b5f805f8060808587031215610a36575f80fd5b8435610a41816109d0565b93506020850135610a51816109d0565b9250604085013591506060850135610a6881610a16565b939692955090935050565b600181811c90821680610a8757607f821691505b602082108103610aa557634e487b7160e01b5f52602260045260245ffd5b50919050565b604051610200810167ffffffffffffffff81118282101715610adb57634e487b7160e01b5f52604160045260245ffd5b60405290565b8051610aec816109d0565b919050565b5f60808284031215610b01575f80fd5b6040516080810181811067ffffffffffffffff82111715610b3057634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f6102608284031215610b72575f80fd5b610b7a610aab565b610b8383610ae1565b8152610b9160208401610ae1565b6020820152610ba260408401610ae1565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160610c0b818501610ae1565b90820152610180610c1d848201610ae1565b908201526101a0610c2f848201610ae1565b908201526101c0610c41848201610ae1565b908201526101e0610c5485858301610af1565b908201529392505050565b5f60408284031215610c6f575f80fd5b6040516040810181811067ffffffffffffffff82111715610c9e57634e487b7160e01b5f52604160045260245ffd5b604052825181526020830151610cb3816109d0565b60208201529392505050565b5f82610cd957634e487b7160e01b5f52601260045260245ffd5b500690565b818103818111156107a457634e487b7160e01b5f52601160045260245ffd5b5f60208284031215610d0d575f80fd5b81516108ed81610a16565b5f8251610d2981846020870161097c565b919091019291505056fea2646970667358221220f4b1145022da47caf294d648d4347ec3f42c6c13cdaae0c32add7e23800bc40264736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "admin()": "f851a440",
  "kind()": "04baa00b",
  "minterRewardAmount()": "62498576",
  "name()": "06fdde03",
  "processReward(address,address,uint256,bool)": "e9f46041",
  "registry()": "7b103999",
  "rewardToken()": "f7c618c1",
  "rewarder()": "dcc3e06e",
  "source()": "67e828bf",
  "traderRewardAmount()": "5b338e07",
  "updateAdmin(address)": "e2f273bd",
  "updateMinterRewardAmount(uint256)": "2057b1c7",
  "updateRegistry(address)": "1a5da6c8",
  "updateRewardToken(address)": "f8cf31cb",
  "updateSource(address)": "f24bab65",
  "updateTraderRewardAmount(uint256)": "9183219f",
  "version()": "54fd4d50"
} as const
};
