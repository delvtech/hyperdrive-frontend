export const EtchingUtils = {
    abi: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "log",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "log_address",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "val",
                    "type": "uint256[]"
                }
            ],
            "name": "log_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "int256[]",
                    "name": "val",
                    "type": "int256[]"
                }
            ],
            "name": "log_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "val",
                    "type": "address[]"
                }
            ],
            "name": "log_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "name": "log_bytes",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "log_bytes32",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "name": "log_int",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "val",
                    "type": "address"
                }
            ],
            "name": "log_named_address",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256[]",
                    "name": "val",
                    "type": "uint256[]"
                }
            ],
            "name": "log_named_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "int256[]",
                    "name": "val",
                    "type": "int256[]"
                }
            ],
            "name": "log_named_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "val",
                    "type": "address[]"
                }
            ],
            "name": "log_named_array",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "val",
                    "type": "bytes"
                }
            ],
            "name": "log_named_bytes",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "val",
                    "type": "bytes32"
                }
            ],
            "name": "log_named_bytes32",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "int256",
                    "name": "val",
                    "type": "int256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "decimals",
                    "type": "uint256"
                }
            ],
            "name": "log_named_decimal_int",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "val",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "decimals",
                    "type": "uint256"
                }
            ],
            "name": "log_named_decimal_uint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "int256",
                    "name": "val",
                    "type": "int256"
                }
            ],
            "name": "log_named_int",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "val",
                    "type": "string"
                }
            ],
            "name": "log_named_string",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "val",
                    "type": "uint256"
                }
            ],
            "name": "log_named_uint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "log_string",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "log_uint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "name": "logs",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "IS_TEST",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "excludeArtifacts",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "excludedArtifacts_",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "excludeContracts",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "excludedContracts_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "excludeSenders",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "excludedSenders_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "failed",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetArtifactSelectors",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "addr",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes4[]",
                            "name": "selectors",
                            "type": "bytes4[]"
                        }
                    ],
                    "internalType": "struct StdInvariant.FuzzSelector[]",
                    "name": "targetedArtifactSelectors_",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetArtifacts",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "targetedArtifacts_",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetContracts",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "targetedContracts_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetInterfaces",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "addr",
                            "type": "address"
                        },
                        {
                            "internalType": "string[]",
                            "name": "artifacts",
                            "type": "string[]"
                        }
                    ],
                    "internalType": "struct StdInvariant.FuzzInterface[]",
                    "name": "targetedInterfaces_",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetSelectors",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "addr",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes4[]",
                            "name": "selectors",
                            "type": "bytes4[]"
                        }
                    ],
                    "internalType": "struct StdInvariant.FuzzSelector[]",
                    "name": "targetedSelectors_",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetSenders",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "targetedSenders_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    bytecode: '0x6080604052600c8054600160ff199182168117909255601e8054909116909117905534801561002d57600080fd5b50610b3a8061003d6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806385226c811161007157806385226c8114610106578063916a17c61461011b578063b5508aa914610123578063ba414fa61461012b578063e20c9f7114610143578063fa7626d41461014b57600080fd5b80631ed7831c146100ae5780632ade3880146100cc5780633e5e3c23146100e15780633f7286f4146100e957806366d9a9a0146100f1575b600080fd5b6100b6610158565b6040516100c3919061082c565b60405180910390f35b6100d46101ba565b6040516100c39190610879565b6100b66102fc565b6100b661035c565b6100f96103bc565b6040516100c3919061096c565b61010e6104a2565b6040516100c39190610a1f565b6100f9610572565b61010e610658565b610133610728565b60405190151581526020016100c3565b6100b66107cc565b601e546101339060ff1681565b606060168054806020026020016040519081016040528092919081815260200182805480156101b057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610192575b5050505050905090565b6060601d805480602002602001604051908101604052809291908181526020016000905b828210156102f357600084815260208082206040805180820182526002870290920180546001600160a01b03168352600181018054835181870281018701909452808452939591948681019491929084015b828210156102dc57838290600052602060002001805461024f90610ab1565b80601f016020809104026020016040519081016040528092919081815260200182805461027b90610ab1565b80156102c85780601f1061029d576101008083540402835291602001916102c8565b820191906000526020600020905b8154815290600101906020018083116102ab57829003601f168201915b505050505081526020019060010190610230565b5050505081525050815260200190600101906101de565b50505050905090565b606060188054806020026020016040519081016040528092919081815260200182805480156101b0576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610192575050505050905090565b606060178054806020026020016040519081016040528092919081815260200182805480156101b0576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610192575050505050905090565b6060601b805480602002602001604051908101604052809291908181526020016000905b828210156102f35760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561048a57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161044c5790505b505050505081525050815260200190600101906103e0565b6060601a805480602002602001604051908101604052809291908181526020016000905b828210156102f35783829060005260206000200180546104e590610ab1565b80601f016020809104026020016040519081016040528092919081815260200182805461051190610ab1565b801561055e5780601f106105335761010080835404028352916020019161055e565b820191906000526020600020905b81548152906001019060200180831161054157829003601f168201915b5050505050815260200190600101906104c6565b6060601c805480602002602001604051908101604052809291908181526020016000905b828210156102f35760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561064057602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116106025790505b50505050508152505081526020019060010190610596565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156102f357838290600052602060002001805461069b90610ab1565b80601f01602080910402602001604051908101604052809291908181526020018280546106c790610ab1565b80156107145780601f106106e957610100808354040283529160200191610714565b820191906000526020600020905b8154815290600101906020018083116106f757829003601f168201915b50505050508152602001906001019061067c565b60085460009060ff1615610740575060085460ff1690565b604051630667f9d760e41b8152737109709ecfa91a80626ff3989d68f67f5b1dd12d600482018190526519985a5b195960d21b602483015260009163667f9d7090604401602060405180830381865afa1580156107a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c59190610aeb565b1415905090565b606060158054806020026020016040519081016040528092919081815260200182805480156101b0576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610192575050505050905090565b6020808252825182820181905260009190848201906040850190845b8181101561086d5783516001600160a01b031683529284019291840191600101610848565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561095e57603f19898403018552815180516001600160a01b031684528701518784018790528051878501819052908801906060600582901b86018101919086019060005b8181101561094857878403605f190183528451805180865260005b81811015610921578e81840101518f82890101528e81019050610903565b5060008682018f0152958d0195601f01601f19169094018c019350918b01916001016108e8565b50505095880195935050908601906001016108a0565b509098975050505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015610a1057898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b808310156109fb5783516001600160e01b0319168252928b019260019290920191908b01906109d1565b50978a01979550505091870191600101610994565b50919998505050505050505050565b6000602080830181845280855180835260408601915060408160051b87010192508387016000805b83811015610aa357888603603f1901855282518051808852835b81811015610a7c578281018a01518982018b01528901610a61565b508781018901849052601f01601f1916909601870195509386019391860191600101610a47565b509398975050505050505050565b600181811c90821680610ac557607f821691505b602082108103610ae557634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610afd57600080fd5b505191905056fea26469706673582212205febae2acf39823c5ea69b65c61e50c96555059722f43149a8f9897f8b1e59b264736f6c63430008140033',
    methodIdentifiers: {
        "IS_TEST()": "fa7626d4",
        "excludeArtifacts()": "b5508aa9",
        "excludeContracts()": "e20c9f71",
        "excludeSenders()": "1ed7831c",
        "failed()": "ba414fa6",
        "targetArtifactSelectors()": "66d9a9a0",
        "targetArtifacts()": "85226c81",
        "targetContracts()": "3f7286f4",
        "targetInterfaces()": "2ade3880",
        "targetSelectors()": "916a17c6",
        "targetSenders()": "3e5e3c23"
    }
};
