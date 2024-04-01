export const IMultiTokenEvents = {
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
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
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenEvents.sol\":\"IMultiTokenEvents\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TransferSingle",
                    "anonymous": false
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {},
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
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
                "contracts/src/interfaces/IMultiTokenEvents.sol": "IMultiTokenEvents"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IMultiTokenEvents.sol",
        "id": 11778,
        "exportedSymbols": {
            "IMultiTokenEvents": [
                11777
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:741:98",
        "nodes": [
            {
                "id": 11745,
                "nodeType": "PragmaDirective",
                "src": "39:23:98",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11777,
                "nodeType": "ContractDefinition",
                "src": "64:715:98",
                "nodes": [
                    {
                        "id": 11758,
                        "nodeType": "EventDefinition",
                        "src": "179:162:98",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11746,
                            "nodeType": "StructuredDocumentation",
                            "src": "98:76:98",
                            "text": "@notice Emitted when tokens are transferred from one account to another."
                        },
                        "eventSelector": "c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                        "name": "TransferSingle",
                        "nameLocation": "185:14:98",
                        "parameters": {
                            "id": 11757,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11748,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "225:8:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11758,
                                    "src": "209:24:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11747,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "209:7:98",
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
                                    "id": 11750,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "259:4:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11758,
                                    "src": "243:20:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11749,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "243:7:98",
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
                                    "id": 11752,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "289:2:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11758,
                                    "src": "273:18:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11751,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "273:7:98",
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
                                    "id": 11754,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "id",
                                    "nameLocation": "309:2:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11758,
                                    "src": "301:10:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11753,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "301:7:98",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11756,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "329:5:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11758,
                                    "src": "321:13:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11755,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "321:7:98",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "199:141:98"
                        }
                    },
                    {
                        "id": 11767,
                        "nodeType": "EventDefinition",
                        "src": "446:108:98",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11759,
                            "nodeType": "StructuredDocumentation",
                            "src": "347:94:98",
                            "text": "@notice Emitted when an account changes the allowance for another\n         account."
                        },
                        "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                        "name": "Approval",
                        "nameLocation": "452:8:98",
                        "parameters": {
                            "id": 11766,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11761,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "486:5:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11767,
                                    "src": "470:21:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11760,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "470:7:98",
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
                                    "id": 11763,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "517:7:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11767,
                                    "src": "501:23:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11762,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "501:7:98",
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
                                    "id": 11765,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "542:5:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11767,
                                    "src": "534:13:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11764,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "534:7:98",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "460:93:98"
                        }
                    },
                    {
                        "id": 11776,
                        "nodeType": "EventDefinition",
                        "src": "660:117:98",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11768,
                            "nodeType": "StructuredDocumentation",
                            "src": "560:95:98",
                            "text": "@notice Emitted when an account changes the approval for all of its\n         tokens."
                        },
                        "eventSelector": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
                        "name": "ApprovalForAll",
                        "nameLocation": "666:14:98",
                        "parameters": {
                            "id": 11775,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11770,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "706:7:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11776,
                                    "src": "690:23:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11769,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "690:7:98",
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
                                    "id": 11772,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "operator",
                                    "nameLocation": "739:8:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11776,
                                    "src": "723:24:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11771,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "723:7:98",
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
                                    "id": 11774,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "approved",
                                    "nameLocation": "762:8:98",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11776,
                                    "src": "757:13:98",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11773,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "757:4:98",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "680:96:98"
                        }
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IMultiTokenEvents",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    11777
                ],
                "name": "IMultiTokenEvents",
                "nameLocation": "74:17:98",
                "scope": 11778,
                "usedErrors": [],
                "usedEvents": [
                    11758,
                    11767,
                    11776
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 98
};
