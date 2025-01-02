export const EtchingUtils = {
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
            "stateMutability": "view"
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
            "name": "targetInterfaces",
            "inputs": [],
            "outputs": [
                {
                    "name": "targetedInterfaces_",
                    "type": "tuple[]",
                    "internalType": "struct StdInvariant.FuzzInterface[]",
                    "components": [
                        {
                            "name": "addr",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "artifacts",
                            "type": "string[]",
                            "internalType": "string[]"
                        }
                    ]
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
        }
    ],
    bytecode: '0x6080604052600c8054600160ff199182168117909255601e8054909116909117905534801561002c575f80fd5b50610af38061003a5f395ff3fe608060405234801561000f575f80fd5b50600436106100a6575f3560e01c806385226c811161006e57806385226c8114610102578063916a17c614610117578063b5508aa91461011f578063ba414fa614610127578063e20c9f711461013f578063fa7626d414610147575f80fd5b80631ed7831c146100aa5780632ade3880146100c85780633e5e3c23146100dd5780633f7286f4146100e557806366d9a9a0146100ed575b5f80fd5b6100b2610154565b6040516100bf9190610802565b60405180910390f35b6100d06101b4565b6040516100bf919061084e565b6100b26102f0565b6100b261034e565b6100f56103ac565b6040516100bf919061093e565b61010a61048d565b6040516100bf91906109e1565b6100f5610558565b61010a610639565b61012f610704565b60405190151581526020016100bf565b6100b26107a4565b601e5461012f9060ff1681565b606060168054806020026020016040519081016040528092919081815260200182805480156101aa57602002820191905f5260205f20905b81546001600160a01b0316815260019091019060200180831161018c575b5050505050905090565b6060601d805480602002602001604051908101604052809291908181526020015f905b828210156102e7575f84815260208082206040805180820182526002870290920180546001600160a01b03168352600181018054835181870281018701909452808452939591948681019491929084015b828210156102d0578382905f5260205f2001805461024590610a6e565b80601f016020809104026020016040519081016040528092919081815260200182805461027190610a6e565b80156102bc5780601f10610293576101008083540402835291602001916102bc565b820191905f5260205f20905b81548152906001019060200180831161029f57829003601f168201915b505050505081526020019060010190610228565b5050505081525050815260200190600101906101d7565b50505050905090565b606060188054806020026020016040519081016040528092919081815260200182805480156101aa57602002820191905f5260205f209081546001600160a01b0316815260019091019060200180831161018c575050505050905090565b606060178054806020026020016040519081016040528092919081815260200182805480156101aa57602002820191905f5260205f209081546001600160a01b0316815260019091019060200180831161018c575050505050905090565b6060601b805480602002602001604051908101604052809291908181526020015f905b828210156102e7575f8481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561047557602002820191905f5260205f20905f905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116104375790505b505050505081525050815260200190600101906103cf565b6060601a805480602002602001604051908101604052809291908181526020015f905b828210156102e7578382905f5260205f200180546104cd90610a6e565b80601f01602080910402602001604051908101604052809291908181526020018280546104f990610a6e565b80156105445780601f1061051b57610100808354040283529160200191610544565b820191905f5260205f20905b81548152906001019060200180831161052757829003601f168201915b5050505050815260200190600101906104b0565b6060601c805480602002602001604051908101604052809291908181526020015f905b828210156102e7575f8481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561062157602002820191905f5260205f20905f905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116105e35790505b5050505050815250508152602001906001019061057b565b60606019805480602002602001604051908101604052809291908181526020015f905b828210156102e7578382905f5260205f2001805461067990610a6e565b80601f01602080910402602001604051908101604052809291908181526020018280546106a590610a6e565b80156106f05780601f106106c7576101008083540402835291602001916106f0565b820191905f5260205f20905b8154815290600101906020018083116106d357829003601f168201915b50505050508152602001906001019061065c565b6008545f9060ff161561071b575060085460ff1690565b604051630667f9d760e41b8152737109709ecfa91a80626ff3989d68f67f5b1dd12d600482018190526519985a5b195960d21b60248301525f9163667f9d7090604401602060405180830381865afa158015610779573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061079d9190610aa6565b1415905090565b606060158054806020026020016040519081016040528092919081815260200182805480156101aa57602002820191905f5260205f209081546001600160a01b0316815260019091019060200180831161018c575050505050905090565b602080825282518282018190525f9190848201906040850190845b818110156108425783516001600160a01b03168352928401929184019160010161081d565b50909695505050505050565b5f60208083018184528085518083526040925060408601915060408160051b8701018488015f5b8381101561093057603f19898403018552815180516001600160a01b031684528701518784018790528051878501819052908801906060600582901b8601810191908601905f5b8181101561091a57878403605f19018352845180518086525f5b818110156108f4578e81840101518f82890101528e810190506108d6565b505f8682018f0152958d0195601f01601f19169094018c019350918b01916001016108bc565b5050509588019593505090860190600101610875565b509098975050505050505050565b5f60208083018184528085518083526040925060408601915060408160051b8701018488015f5b8381101561093057888303603f19018552815180516001600160a01b031684528701518784018790528051878501819052908801905f9060608601905b808310156109cc5783516001600160e01b0319168252928a019260019290920191908a01906109a2565b50968901969450505090860190600101610965565b5f602080830181845280855180835260408601915060408160051b87010192508387015f5b82811015610a6157878503603f19018452815180518087525f5b81811015610a3b578281018901518882018a01528801610a20565b505f878201890152601f01601f1916909501860194509285019290850190600101610a06565b5092979650505050505050565b600181811c90821680610a8257607f821691505b602082108103610aa057634e487b7160e01b5f52602260045260245ffd5b50919050565b5f60208284031215610ab6575f80fd5b505191905056fea2646970667358221220f8e3f1e78d3a92b702c3b4390e0a0517b53bdb574b48e718842dcde2e095e5e564736f6c63430008160033',
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
