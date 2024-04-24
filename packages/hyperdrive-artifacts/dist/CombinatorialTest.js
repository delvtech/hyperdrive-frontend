export const CombinatorialTest = {
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
            "name": "ExpectedFail",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ExpectedSuccess",
            "inputs": []
        },
        {
            "type": "error",
            "name": "TestFail",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnassignedCatch",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnassignedFail",
            "inputs": []
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
    bytecode: '0x6080604081905260078054600160ff199182168117909255600b8054909116909117905563f877cb1960e01b90526020608452600f60a4526e1350525393915517d49410d7d55493608a1b60c452737109709ecfa91a80626ff3989d68f67f5b1dd12d63f877cb1960e4600060405180830381865afa15801562000087573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000b1919081019062000215565b602a90620000c0908262000379565b5060405163f877cb1960e01b815260206004820152600e60248201526d11d3d154931257d49410d7d5549360921b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f877cb1990606401600060405180830381865afa15801562000130573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200015a919081019062000215565b602b9062000169908262000379565b50602c805461ff0019166101001790556040805160048152602481019091526020810180516001600160e01b031663761b17af60e11b179052602d90620001b1908262000379565b506040805160048152602481019091526020810180516001600160e01b0316631212173760e01b179052602e90620001ea908262000379565b50348015620001f857600080fd5b5062000445565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200022957600080fd5b82516001600160401b03808211156200024157600080fd5b818501915085601f8301126200025657600080fd5b8151818111156200026b576200026b620001ff565b604051601f8201601f19908116603f01168101908382118183101715620002965762000296620001ff565b816040528281528886848701011115620002af57600080fd5b600093505b82841015620002d35784840186015181850187015292850192620002b4565b600086848301015280965050505050505092915050565b600181811c90821680620002ff57607f821691505b6020821081036200032057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200037457600081815260208120601f850160051c810160208610156200034f5750805b601f850160051c820191505b8181101562000370578281556001016200035b565b5050505b505050565b81516001600160401b03811115620003955762000395620001ff565b620003ad81620003a68454620002ea565b8462000326565b602080601f831160018114620003e55760008415620003cc5750858301515b600019600386901b1c1916600185901b17855562000370565b600085815260208120601f198616915b828110156200041657888601518255948401946001909101908401620003f5565b5085821015620004355787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61139f80620004556000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806366d9a9a01161008c578063b5508aa911610066578063b5508aa9146101b4578063ba414fa6146101bc578063e20c9f71146101d4578063fa7626d4146101dc57600080fd5b806366d9a9a01461018257806385226c8114610197578063916a17c6146101ac57600080fd5b80633e5e0d26116100c85780633e5e0d26146101345780633e5e3c23146101475780633f7286f41461014f578063507ffba51461015757600080fd5b80630a9254e4146100ef57806310716760146100f95780631ed7831c1461011f575b600080fd5b6100f76101e9565b005b61010c610107366004610f52565b6101f3565b6040519081526020015b60405180910390f35b610127610276565b6040516101169190610f9d565b61010c610142366004610fea565b6102d8565b610127610546565b6101276105a6565b61016a610165366004611053565b610606565b6040516001600160a01b039091168152602001610116565b61018a61071e565b6040516101169190611104565b61019f61080d565b6040516101169190611207565b61018a6108dd565b61019f6109c3565b6101c4610a93565b6040519015158152602001610116565b610127610bc0565b6007546101c49060ff1681565b6101f1610c20565b565b6040516370a0823160e01b81526001600160a01b03808516600483015260009161026e91869186918216906370a0823190602401602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190611269565b856102d8565b949350505050565b606060148054806020026020016040519081016040528092919081815260200182805480156102ce57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102b0575b5050505050905090565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa158015610323573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103479190611269565b90508084111561036a5760405163188c93a560e31b815260040160405180910390fd5b7f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156103c857600080fd5b505af11580156103dc573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b0389166004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d92506306447d569150602401600060405180830381600087803b15801561043557600080fd5b505af1158015610449573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a76400006024820152737109709ecfa91a80626ff3989d68f67f5b1dd12d925063c88a5e6d9150604401600060405180830381600087803b1580156104b057600080fd5b505af11580156104c4573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af1158015610517573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053b9190611282565b509295945050505050565b606060168054806020026020016040519081016040528092919081815260200182805480156102ce576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116102b0575050505050905090565b606060158054806020026020016040519081016040528092919081815260200182805480156102ce576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116102b0575050505050905090565b60008160405160200161061991906112ab565b60408051601f198184030181529082905280516020909101206318caf8e360e31b82529150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c657c7189061066a90849086906004016112be565b600060405180830381600087803b15801561068457600080fd5b505af1158015610698573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab24000006024820152737109709ecfa91a80626ff3989d68f67f5b1dd12d925063c88a5e6d9150604401600060405180830381600087803b15801561070157600080fd5b505af1158015610715573d6000803e3d6000fd5b50505050919050565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156108045760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156107ec57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116107ae5790505b50505050508152505081526020019060010190610742565b50505050905090565b60606018805480602002602001604051908101604052809291908181526020016000905b82821015610804578382906000526020600020018054610850906112e2565b80601f016020809104026020016040519081016040528092919081815260200182805461087c906112e2565b80156108c95780601f1061089e576101008083540402835291602001916108c9565b820191906000526020600020905b8154815290600101906020018083116108ac57829003601f168201915b505050505081526020019060010190610831565b6060601a805480602002602001604051908101604052809291908181526020016000905b828210156108045760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156109ab57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161096d5790505b50505050508152505081526020019060010190610901565b60606017805480602002602001604051908101604052809291908181526020016000905b82821015610804578382906000526020600020018054610a06906112e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610a32906112e2565b8015610a7f5780601f10610a5457610100808354040283529160200191610a7f565b820191906000526020600020905b815481529060010190602001808311610a6257829003601f168201915b5050505050815260200190600101906109e7565b600754600090610100900460ff1615610ab55750600754610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610bbb5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b82840152825180830384018152606083019093526000929091610b43917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800161131c565b60408051601f1981840301815290829052610b5d9161134d565b6000604051808303816000865af19150503d8060008114610b9a576040519150601f19603f3d011682016040523d82523d6000602084013e610b9f565b606091505b5091505080806020019051810190610bb79190611282565b9150505b919050565b606060138054806020026020016040519081016040528092919081815260200182805480156102ce576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116102b0575050505050905090565b610c4660405180604001604052806005815260200164616c69636560d81b815250610606565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b6020820152610c8990610606565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b6020820152610ccf90610606565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b6020820152610d1290610606565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b6020820152610d5590610606565b602060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550610da4604051806040016040528060088152602001673232b83637bcb2b960c11b815250610606565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b6020820152610dea90610606565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b6020820152610e3690610606565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600e81526d39bbb2b2b821b7b63632b1ba37b960911b6020820152610e8490610606565b602480546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b6020820152610ece90610606565b602580546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b6020820152610f1490610606565b602680546001600160a01b0319166001600160a01b039290921691909117905542602955565b6001600160a01b0381168114610f4f57600080fd5b50565b600080600060608486031215610f6757600080fd5b8335610f7281610f3a565b92506020840135610f8281610f3a565b91506040840135610f9281610f3a565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b81811015610fde5783516001600160a01b031683529284019291840191600101610fb9565b50909695505050505050565b6000806000806080858703121561100057600080fd5b843561100b81610f3a565b9350602085013561101b81610f3a565b925060408501359150606085013561103281610f3a565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561106557600080fd5b813567ffffffffffffffff8082111561107d57600080fd5b818401915084601f83011261109157600080fd5b8135818111156110a3576110a361103d565b604051601f8201601f19908116603f011681019083821181831017156110cb576110cb61103d565b816040528281528760208487010111156110e457600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156111a857898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b808310156111935783516001600160e01b0319168252928b019260019290920191908b0190611169565b50978a0197955050509187019160010161112c565b50919998505050505050505050565b60005b838110156111d25781810151838201526020016111ba565b50506000910152565b600081518084526111f38160208601602086016111b7565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561125c57603f1988860301845261124a8583516111db565b9450928501929085019060010161122e565b5092979650505050505050565b60006020828403121561127b57600080fd5b5051919050565b60006020828403121561129457600080fd5b815180151581146112a457600080fd5b9392505050565b6020815260006112a460208301846111db565b6001600160a01b038316815260406020820181905260009061026e908301846111db565b600181811c908216806112f657607f821691505b60208210810361131657634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160e01b031983168152815160009061133f8160048501602087016111b7565b919091016004019392505050565b6000825161135f8184602087016111b7565b919091019291505056fea264697066735822122021503766ad43de4493f64252181887f2cccd427ce451588448b2f4d8544da64e64736f6c63430008140033',
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
