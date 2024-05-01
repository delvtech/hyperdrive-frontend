export const BaseTest = {
    abi: [
        {
            "type": "function",
            "name": "IS_TEST",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "createUser",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "excludeArtifacts",
            "inputs": [],
            "outputs": [
                {
                    "name": "excludedArtifacts_",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "excludeContracts",
            "inputs": [],
            "outputs": [
                {
                    "name": "excludedContracts_",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "excludeSenders",
            "inputs": [],
            "outputs": [
                {
                    "name": "excludedSenders_",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "failed",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setUp",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "targetArtifactSelectors",
            "inputs": [],
            "outputs": [
                {
                    "name": "targetedArtifactSelectors_",
                    "type": "tuple[]",
                    "internalType": "struct StdInvariant.FuzzSelector[]",
                    "components": [
                        {
                            "name": "addr",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "selectors",
                            "type": "bytes4[]",
                            "internalType": "bytes4[]"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "targetArtifacts",
            "inputs": [],
            "outputs": [
                {
                    "name": "targetedArtifacts_",
                    "type": "string[]",
                    "internalType": "string[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "targetContracts",
            "inputs": [],
            "outputs": [
                {
                    "name": "targetedContracts_",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "targetSelectors",
            "inputs": [],
            "outputs": [
                {
                    "name": "targetedSelectors_",
                    "type": "tuple[]",
                    "internalType": "struct StdInvariant.FuzzSelector[]",
                    "components": [
                        {
                            "name": "addr",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "selectors",
                            "type": "bytes4[]",
                            "internalType": "bytes4[]"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "targetSenders",
            "inputs": [],
            "outputs": [
                {
                    "name": "targetedSenders_",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "whaleTransfer",
            "inputs": [
                {
                    "name": "whale",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
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
            "name": "whaleTransfer",
            "inputs": [
                {
                    "name": "whale",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "log",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_address",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_array",
            "inputs": [
                {
                    "name": "val",
                    "type": "uint256[]",
                    "indexed": false,
                    "internalType": "uint256[]"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_array",
            "inputs": [
                {
                    "name": "val",
                    "type": "int256[]",
                    "indexed": false,
                    "internalType": "int256[]"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_array",
            "inputs": [
                {
                    "name": "val",
                    "type": "address[]",
                    "indexed": false,
                    "internalType": "address[]"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_bytes",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_bytes32",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_int",
            "inputs": [
                {
                    "name": "",
                    "type": "int256",
                    "indexed": false,
                    "internalType": "int256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_address",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_array",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "uint256[]",
                    "indexed": false,
                    "internalType": "uint256[]"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_array",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "int256[]",
                    "indexed": false,
                    "internalType": "int256[]"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_array",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "address[]",
                    "indexed": false,
                    "internalType": "address[]"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_bytes",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_bytes32",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_decimal_int",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "int256",
                    "indexed": false,
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_decimal_uint",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_int",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "int256",
                    "indexed": false,
                    "internalType": "int256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_string",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_uint",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_string",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_uint",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "logs",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "WhaleBalanceExceeded",
            "inputs": []
        },
        {
            "type": "error",
            "name": "WhaleIsContract",
            "inputs": []
        }
    ],
    bytecode: '0x6080604081905260078054600160ff199182168117909255600b8054909116909117905563f877cb1960e01b90526020608452600f60a4526e1350525393915517d49410d7d55493608a1b60c452737109709ecfa91a80626ff3989d68f67f5b1dd12d63f877cb1960e4600060405180830381865afa15801562000087573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000b1919081019062000195565b602790620000c09082620002f9565b5060405163f877cb1960e01b815260206004820152600f60248201526e14d15413d3125057d49410d7d55493608a1b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f877cb1990606401600060405180830381865afa15801562000131573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200015b919081019062000195565b6028906200016a9082620002f9565b503480156200017857600080fd5b50620003c5565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001a957600080fd5b82516001600160401b0380821115620001c157600080fd5b818501915085601f830112620001d657600080fd5b815181811115620001eb57620001eb6200017f565b604051601f8201601f19908116603f011681019083821181831017156200021657620002166200017f565b8160405282815288868487010111156200022f57600080fd5b600093505b8284101562000253578484018601518185018701529285019262000234565b600086848301015280965050505050505092915050565b600181811c908216806200027f57607f821691505b602082108103620002a057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f457600081815260208120601f850160051c81016020861015620002cf5750805b601f850160051c820191505b81811015620002f057828155600101620002db565b5050505b505050565b81516001600160401b038111156200031557620003156200017f565b6200032d816200032684546200026a565b84620002a6565b602080601f8311600181146200036557600084156200034c5750858301515b600019600386901b1c1916600185901b178555620002f0565b600085815260208120601f198616915b82811015620003965788860151825594840194600190910190840162000375565b5085821015620003b55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61139580620003d56000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806366d9a9a01161008c578063b5508aa911610066578063b5508aa9146101b4578063ba414fa6146101bc578063e20c9f71146101d4578063fa7626d4146101dc57600080fd5b806366d9a9a01461018257806385226c8114610197578063916a17c6146101ac57600080fd5b80633e5e0d26116100c85780633e5e0d26146101345780633e5e3c23146101475780633f7286f41461014f578063507ffba51461015757600080fd5b80630a9254e4146100ef57806310716760146100f95780631ed7831c1461011f575b600080fd5b6100f76101e9565b005b61010c610107366004610f48565b610503565b6040519081526020015b60405180910390f35b610127610586565b6040516101169190610f93565b61010c610142366004610fe0565b6105e8565b610127610856565b6101276108b6565b61016a610165366004611049565b610916565b6040516001600160a01b039091168152602001610116565b61018a610a2e565b60405161011691906110fa565b61019f610b1d565b60405161011691906111fd565b61018a610bed565b61019f610cd3565b6101c4610da3565b6040519015158152602001610116565b610127610ed0565b6007546101c49060ff1681565b61020f60405180604001604052806005815260200164616c69636560d81b815250610916565b601b80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b602082015261025290610916565b601c80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b602082015261029890610916565b601d80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b60208201526102db90610916565b601e80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b602082015261031e90610916565b601f80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260088152673232b83637bcb2b960c11b602082015261036690610916565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b60208201526103ac90610916565b602060006101000a8154816001600160a01b0302191690836001600160a01b031602179055506103ff6040518060400160405280600c81526020016b3332b2a1b7b63632b1ba37b960a11b815250610916565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600e81526d39bbb2b2b821b7b63632b1ba37b960911b602082015261044d90610916565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b602082015261049790610916565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b60208201526104dd90610916565b602580546001600160a01b0319166001600160a01b039290921691909117905542602655565b6040516370a0823160e01b81526001600160a01b03808516600483015260009161057e91869186918216906370a0823190602401602060405180830381865afa158015610554573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610578919061125f565b856105e8565b949350505050565b606060148054806020026020016040519081016040528092919081815260200182805480156105de57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116105c0575b5050505050905090565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa158015610633573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610657919061125f565b90508084111561067a5760405163188c93a560e31b815260040160405180910390fd5b7f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156106d857600080fd5b505af11580156106ec573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0389166004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d92506306447d569150602401600060405180830381600087803b15801561074557600080fd5b505af1158015610759573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a76400006024820152737109709ecfa91a80626ff3989d68f67f5b1dd12d925063c88a5e6d9150604401600060405180830381600087803b1580156107c057600080fd5b505af11580156107d4573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af1158015610827573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084b9190611278565b509295945050505050565b606060168054806020026020016040519081016040528092919081815260200182805480156105de576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116105c0575050505050905090565b606060158054806020026020016040519081016040528092919081815260200182805480156105de576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116105c0575050505050905090565b60008160405160200161092991906112a1565b60408051601f198184030181529082905280516020909101206318caf8e360e31b82529150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c657c7189061097a90849086906004016112b4565b600060405180830381600087803b15801561099457600080fd5b505af11580156109a8573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab24000006024820152737109709ecfa91a80626ff3989d68f67f5b1dd12d925063c88a5e6d9150604401600060405180830381600087803b158015610a1157600080fd5b505af1158015610a25573d6000803e3d6000fd5b50505050919050565b60606019805480602002602001604051908101604052809291908181526020016000905b82821015610b145760008481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015610afc57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411610abe5790505b50505050508152505081526020019060010190610a52565b50505050905090565b60606018805480602002602001604051908101604052809291908181526020016000905b82821015610b14578382906000526020600020018054610b60906112d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8c906112d8565b8015610bd95780601f10610bae57610100808354040283529160200191610bd9565b820191906000526020600020905b815481529060010190602001808311610bbc57829003601f168201915b505050505081526020019060010190610b41565b6060601a805480602002602001604051908101604052809291908181526020016000905b82821015610b145760008481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015610cbb57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411610c7d5790505b50505050508152505081526020019060010190610c11565b60606017805480602002602001604051908101604052809291908181526020016000905b82821015610b14578382906000526020600020018054610d16906112d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610d42906112d8565b8015610d8f5780601f10610d6457610100808354040283529160200191610d8f565b820191906000526020600020905b815481529060010190602001808311610d7257829003601f168201915b505050505081526020019060010190610cf7565b600754600090610100900460ff1615610dc55750600754610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610ecb5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b82840152825180830384018152606083019093526000929091610e53917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611312565b60408051601f1981840301815290829052610e6d91611343565b6000604051808303816000865af19150503d8060008114610eaa576040519150601f19603f3d011682016040523d82523d6000602084013e610eaf565b606091505b5091505080806020019051810190610ec79190611278565b9150505b919050565b606060138054806020026020016040519081016040528092919081815260200182805480156105de576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116105c0575050505050905090565b6001600160a01b0381168114610f4557600080fd5b50565b600080600060608486031215610f5d57600080fd5b8335610f6881610f30565b92506020840135610f7881610f30565b91506040840135610f8881610f30565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b81811015610fd45783516001600160a01b031683529284019291840191600101610faf565b50909695505050505050565b60008060008060808587031215610ff657600080fd5b843561100181610f30565b9350602085013561101181610f30565b925060408501359150606085013561102881610f30565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561105b57600080fd5b813567ffffffffffffffff8082111561107357600080fd5b818401915084601f83011261108757600080fd5b81358181111561109957611099611033565b604051601f8201601f19908116603f011681019083821181831017156110c1576110c1611033565b816040528281528760208487010111156110da57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101561119e57898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b808310156111895783516001600160e01b0319168252928b019260019290920191908b019061115f565b50978a01979550505091870191600101611122565b50919998505050505050505050565b60005b838110156111c85781810151838201526020016111b0565b50506000910152565b600081518084526111e98160208601602086016111ad565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561125257603f198886030184526112408583516111d1565b94509285019290850190600101611224565b5092979650505050505050565b60006020828403121561127157600080fd5b5051919050565b60006020828403121561128a57600080fd5b8151801515811461129a57600080fd5b9392505050565b60208152600061129a60208301846111d1565b6001600160a01b038316815260406020820181905260009061057e908301846111d1565b600181811c908216806112ec57607f821691505b60208210810361130c57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160e01b03198316815281516000906113358160048501602087016111ad565b919091016004019392505050565b600082516113558184602087016111ad565b919091019291505056fea264697066735822122063849a4df04dc697ee37c9e5afb0801bece072f0aaf5a6c7387a5bf1ef2d7c0564736f6c63430008140033',
    methodIdentifiers: {
        "IS_TEST()": "fa7626d4",
        "createUser(string)": "507ffba5",
        "excludeArtifacts()": "b5508aa9",
        "excludeContracts()": "e20c9f71",
        "excludeSenders()": "1ed7831c",
        "failed()": "ba414fa6",
        "setUp()": "0a9254e4",
        "targetArtifactSelectors()": "66d9a9a0",
        "targetArtifacts()": "85226c81",
        "targetContracts()": "3f7286f4",
        "targetSelectors()": "916a17c6",
        "targetSenders()": "3e5e3c23",
        "whaleTransfer(address,address,address)": "10716760",
        "whaleTransfer(address,address,uint256,address)": "3e5e0d26"
    }
};
