export const HyperdriveCheckpointSubrewarder = {
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
    ],
    bytecode: '0x60a06040523480156200001157600080fd5b5060405162001135380380620011358339810160408190526200003491620000d8565b60006200004288826200029a565b50600180546001600160a01b031990811633179091556001600160a01b0396871660805260028054968816968216969096179095556003805494871694861694909417909355600480549290951691909316179092556005556006555062000366565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000d357600080fd5b919050565b600080600080600080600060e0888a031215620000f457600080fd5b87516001600160401b03808211156200010c57600080fd5b818a0191508a601f8301126200012157600080fd5b815181811115620001365762000136620000a5565b604051601f8201601f19908116603f01168101908382118183101715620001615762000161620000a5565b81604052828152602093508d848487010111156200017e57600080fd5b600091505b82821015620001a2578482018401518183018501529083019062000183565b6000848483010152809b50505050620001bd818b01620000bb565b97505050620001cf60408901620000bb565b9450620001df60608901620000bb565b9350620001ef60808901620000bb565b925060a0880151915060c0880151905092959891949750929550565b600181811c908216806200022057607f821691505b6020821081036200024157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200029557600081815260208120601f850160051c81016020861015620002705750805b601f850160051c820191505b8181101562000291578281556001016200027c565b5050505b505050565b81516001600160401b03811115620002b657620002b6620000a5565b620002ce81620002c784546200020b565b8462000247565b602080601f831160018114620003065760008415620002ed5750858301515b600019600386901b1c1916600185901b17855562000291565b600085815260208120601f198616915b82811015620003375788860151825594840194600190910190840162000316565b5085821015620003565787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051610dac620003896000396000818161022e015261051f0152610dac6000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80637b103999116100a2578063e9f4604111610071578063e9f4604114610263578063f24bab6514610295578063f7c618c1146102a8578063f851a440146102bb578063f8cf31cb146102ce57600080fd5b80637b103999146102035780639183219f14610216578063dcc3e06e14610229578063e2f273bd1461025057600080fd5b806354fd4d50116100de57806354fd4d50146101925780635b338e07146101b857806362498576146101cf57806367e828bf146101d857600080fd5b806304baa00b1461011057806306fdde03146101625780631a5da6c81461016a5780632057b1c71461017f575b600080fd5b61014c6040518060400160405280601f81526020017f48797065726472697665436865636b706f696e7453756272657761726465720081525081565b60405161015991906109c1565b60405180910390f35b61014c6102e1565b61017d610178366004610a09565b61036f565b005b61017d61018d366004610a26565b6103e3565b61014c604051806040016040528060078152602001663b18971817189960c91b81525081565b6101c160065481565b604051908152602001610159565b6101c160055481565b6002546101eb906001600160a01b031681565b6040516001600160a01b039091168152602001610159565b6003546101eb906001600160a01b031681565b61017d610224366004610a26565b610440565b6101eb7f000000000000000000000000000000000000000000000000000000000000000081565b61017d61025e366004610a09565b61049d565b610276610271366004610a4d565b610511565b604080516001600160a01b039093168352602083019190915201610159565b61017d6102a3366004610a09565b6106bd565b6004546101eb906001600160a01b031681565b6001546101eb906001600160a01b031681565b61017d6102dc366004610a09565b610731565b600080546102ee90610aa0565b80601f016020809104026020016040519081016040528092919081815260200182805461031a90610aa0565b80156103675780601f1061033c57610100808354040283529160200191610367565b820191906000526020600020905b81548152906001019060200180831161034a57829003601f168201915b505050505081565b6001546001600160a01b03163314610399576040516282b42960e81b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517fd6ceddf6d2a22f21c7c81675c518004eff43bc5c8a6fc32a0b748e69d58671cd90600090a250565b6001546001600160a01b0316331461040d576040516282b42960e81b815260040160405180910390fd5b600581905560405181907faa8ae98398382187f26cba5014456be39e5486e84a5347fc41a234a6c4f03d2590600090a250565b6001546001600160a01b0316331461046a576040516282b42960e81b815260040160405180910390fd5b600681905560405181907fcbfc476043808accf425b48e528723c20dfc23e022fc8b6b63247ba91f9ee39690600090a250565b6001546001600160a01b031633146104c7576040516282b42960e81b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040517f54e4612788f90384e6843298d7854436f3a585b2c3831ab66abf1de63bfa6c2d90600090a250565b600080336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461055c576040516282b42960e81b815260040160405180910390fd5b6000600460009054906101000a90046001600160a01b031690506105e742886001600160a01b031663b0d965806040518163ffffffff1660e01b815260040161026060405180830381865afa1580156105b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105dd9190610b96565b61012001516107a5565b85146105f8579150600090506106b4565b60035460405163062eced560e21b81526001600160a01b038981166004830152909116906318bb3b54906024016040805180830381865afa158015610641573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106659190610c96565b51600114610678579150600090506106b4565b6000846106875760055461068b565b6006545b905080156106ae576002546106ae906001600160a01b03848116911689846107c4565b90925090505b94509492505050565b6001546001600160a01b031633146106e7576040516282b42960e81b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517ff2d025ce2c36cbd78cd7a2dd4607f7c5ef6b207ee59dfceb74aa73b80c1c53ae90600090a250565b6001546001600160a01b0316331461075b576040516282b42960e81b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040517fa5289ba11778999f4dfb9415023783188d42bbb5db0612cbfbe55999069612a090600090a250565b60006107b18284610cfa565b6107bb9084610d1c565b90505b92915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261081e908590610824565b50505050565b60006108396001600160a01b03841683610891565b9050805160001415801561085e57508080602001905181019061085c9190610d3d565b155b1561088c57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606107bb8383600084600080856001600160a01b031684866040516108b79190610d5a565b60006040518083038185875af1925050503d80600081146108f4576040519150601f19603f3d011682016040523d82523d6000602084013e6108f9565b606091505b5091509150610909868383610915565b925050505b9392505050565b60608261092a5761092582610971565b61090e565b815115801561094157506001600160a01b0384163b155b1561096a57604051639996b31560e01b81526001600160a01b0385166004820152602401610883565b508061090e565b8051156109815780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60005b838110156109b85781810151838201526020016109a0565b50506000910152565b60208152600082518060208401526109e081604085016020870161099d565b601f01601f19169190910160400192915050565b6001600160a01b038116811461099a57600080fd5b600060208284031215610a1b57600080fd5b813561090e816109f4565b600060208284031215610a3857600080fd5b5035919050565b801515811461099a57600080fd5b60008060008060808587031215610a6357600080fd5b8435610a6e816109f4565b93506020850135610a7e816109f4565b9250604085013591506060850135610a9581610a3f565b939692955090935050565b600181811c90821680610ab457607f821691505b602082108103610ad457634e487b7160e01b600052602260045260246000fd5b50919050565b604051610200810167ffffffffffffffff81118282101715610b0c57634e487b7160e01b600052604160045260246000fd5b60405290565b8051610b1d816109f4565b919050565b600060808284031215610b3457600080fd5b6040516080810181811067ffffffffffffffff82111715610b6557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102608284031215610ba957600080fd5b610bb1610ada565b610bba83610b12565b8152610bc860208401610b12565b6020820152610bd960408401610b12565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160610c42818501610b12565b90820152610180610c54848201610b12565b908201526101a0610c66848201610b12565b908201526101c0610c78848201610b12565b908201526101e0610c8b85858301610b22565b908201529392505050565b600060408284031215610ca857600080fd5b6040516040810181811067ffffffffffffffff82111715610cd957634e487b7160e01b600052604160045260246000fd5b604052825181526020830151610cee816109f4565b60208201529392505050565b600082610d1757634e487b7160e01b600052601260045260246000fd5b500690565b818103818111156107be57634e487b7160e01b600052601160045260246000fd5b600060208284031215610d4f57600080fd5b815161090e81610a3f565b60008251610d6c81846020870161099d565b919091019291505056fea2646970667358221220ecaa9afcd3a1f444f8821c0f3a51c73d48312288870688a8262caddbb2ba4d4a64736f6c63430008140033',
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
    }
};
