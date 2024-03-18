export const IHyperdriveGovernedRegistry = {
    "abi": [
        {
            "inputs": [],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "governance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "hyperdrive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "data",
                    "type": "uint256"
                }
            ],
            "name": "HyperdriveInfoUpdated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_hyperdriveInstance",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_data",
                    "type": "uint256"
                }
            ],
            "name": "setHyperdriveInfo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_governance",
                    "type": "address"
                }
            ],
            "name": "updateGovernance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "setHyperdriveInfo(address,uint256)": "be44e71a",
        "updateGovernance(address)": "b2561263"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the        instance.\",\"_hyperdriveInstance\":\"The Hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance to set arbitrary info for a Hyperdrive         instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":\"IHyperdriveGovernedRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99\",\"dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "type": "error",
                    "name": "Unauthorized"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "hyperdrive",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "data",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "HyperdriveInfoUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_hyperdriveInstance",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_data",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setHyperdriveInfo"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_governance",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "updateGovernance"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "setHyperdriveInfo(address,uint256)": {
                        "params": {
                            "_data": "The uint256 value to be set to convey information about the        instance.",
                            "_hyperdriveInstance": "The Hyperdrive instance address."
                        }
                    },
                    "updateGovernance(address)": {
                        "params": {
                            "_governance": "The new governance address."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "setHyperdriveInfo(address,uint256)": {
                        "notice": "Allows governance to set arbitrary info for a Hyperdrive         instance."
                    },
                    "updateGovernance(address)": {
                        "notice": "Allows governance to transfer the governance role."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": "IHyperdriveGovernedRegistry"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
                "keccak256": "0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2",
                "urls": [
                    "bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99",
                    "dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol",
        "id": 11782,
        "exportedSymbols": {
            "IHyperdriveGovernedRegistry": [
                11781
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:959:93",
        "nodes": [
            {
                "id": 11751,
                "nodeType": "PragmaDirective",
                "src": "39:23:93",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11781,
                "nodeType": "ContractDefinition",
                "src": "64:933:93",
                "nodes": [
                    {
                        "id": 11756,
                        "nodeType": "EventDefinition",
                        "src": "164:52:93",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11752,
                            "nodeType": "StructuredDocumentation",
                            "src": "108:51:93",
                            "text": "@notice Emitted when governance is transferred."
                        },
                        "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
                        "name": "GovernanceUpdated",
                        "nameLocation": "170:17:93",
                        "parameters": {
                            "id": 11755,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11754,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "governance",
                                    "nameLocation": "204:10:93",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11756,
                                    "src": "188:26:93",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11753,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "188:7:93",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "187:28:93"
                        }
                    },
                    {
                        "id": 11763,
                        "nodeType": "EventDefinition",
                        "src": "279:70:93",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11757,
                            "nodeType": "StructuredDocumentation",
                            "src": "222:52:93",
                            "text": "@notice Emitted when hyperdrive info is updated."
                        },
                        "eventSelector": "f0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356",
                        "name": "HyperdriveInfoUpdated",
                        "nameLocation": "285:21:93",
                        "parameters": {
                            "id": 11762,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11759,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "hyperdrive",
                                    "nameLocation": "323:10:93",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11763,
                                    "src": "307:26:93",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11758,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "307:7:93",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11761,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "343:4:93",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11763,
                                    "src": "335:12:93",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11760,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "335:7:93",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "306:42:93"
                        }
                    },
                    {
                        "id": 11766,
                        "nodeType": "ErrorDefinition",
                        "src": "409:21:93",
                        "nodes": [],
                        "documentation": {
                            "id": 11764,
                            "nodeType": "StructuredDocumentation",
                            "src": "355:49:93",
                            "text": "@notice Thrown when caller is not governance."
                        },
                        "errorSelector": "82b42900",
                        "name": "Unauthorized",
                        "nameLocation": "415:12:93",
                        "parameters": {
                            "id": 11765,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "427:2:93"
                        }
                    },
                    {
                        "id": 11772,
                        "nodeType": "FunctionDefinition",
                        "src": "558:56:93",
                        "nodes": [],
                        "documentation": {
                            "id": 11767,
                            "nodeType": "StructuredDocumentation",
                            "src": "436:117:93",
                            "text": "@notice Allows governance to transfer the governance role.\n @param _governance The new governance address."
                        },
                        "functionSelector": "b2561263",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateGovernance",
                        "nameLocation": "567:16:93",
                        "parameters": {
                            "id": 11770,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11769,
                                    "mutability": "mutable",
                                    "name": "_governance",
                                    "nameLocation": "592:11:93",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11772,
                                    "src": "584:19:93",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11768,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "584:7:93",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "583:21:93"
                        },
                        "returnParameters": {
                            "id": 11771,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "613:0:93"
                        },
                        "scope": 11781,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11780,
                        "nodeType": "FunctionDefinition",
                        "src": "893:102:93",
                        "nodes": [],
                        "documentation": {
                            "id": 11773,
                            "nodeType": "StructuredDocumentation",
                            "src": "620:268:93",
                            "text": "@notice Allows governance to set arbitrary info for a Hyperdrive\n         instance.\n @param _hyperdriveInstance The Hyperdrive instance address.\n @param _data The uint256 value to be set to convey information about the\n        instance."
                        },
                        "functionSelector": "be44e71a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setHyperdriveInfo",
                        "nameLocation": "902:17:93",
                        "parameters": {
                            "id": 11778,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11775,
                                    "mutability": "mutable",
                                    "name": "_hyperdriveInstance",
                                    "nameLocation": "937:19:93",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11780,
                                    "src": "929:27:93",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11774,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "929:7:93",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11777,
                                    "mutability": "mutable",
                                    "name": "_data",
                                    "nameLocation": "974:5:93",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11780,
                                    "src": "966:13:93",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11776,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "966:7:93",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "919:66:93"
                        },
                        "returnParameters": {
                            "id": 11779,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "994:0:93"
                        },
                        "scope": 11781,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IHyperdriveGovernedRegistry",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11781
                ],
                "name": "IHyperdriveGovernedRegistry",
                "nameLocation": "74:27:93",
                "scope": 11782,
                "usedErrors": [
                    11766
                ],
                "usedEvents": [
                    11756,
                    11763
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 93
};
