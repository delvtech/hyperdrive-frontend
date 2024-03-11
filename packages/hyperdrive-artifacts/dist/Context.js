export const Context = {
    "abi": [],
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":\"Context\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [],
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
                "lib/openzeppelin-contracts/contracts/utils/Context.sol": "Context"
            },
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Context.sol",
        "id": 66990,
        "exportedSymbols": {
            "Context": [
                66989
            ]
        },
        "nodeType": "SourceUnit",
        "src": "101:862:120",
        "nodes": [
            {
                "id": 66961,
                "nodeType": "PragmaDirective",
                "src": "101:24:120",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 66989,
                "nodeType": "ContractDefinition",
                "src": "624:338:120",
                "nodes": [
                    {
                        "id": 66971,
                        "nodeType": "FunctionDefinition",
                        "src": "656:96:120",
                        "nodes": [],
                        "body": {
                            "id": 66970,
                            "nodeType": "Block",
                            "src": "718:34:120",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "expression": {
                                            "id": 66967,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "735:3:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 66968,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "739:6:120",
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "735:10:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 66966,
                                    "id": 66969,
                                    "nodeType": "Return",
                                    "src": "728:17:120"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_msgSender",
                        "nameLocation": "665:10:120",
                        "parameters": {
                            "id": 66963,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "675:2:120"
                        },
                        "returnParameters": {
                            "id": 66966,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66965,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66971,
                                    "src": "709:7:120",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 66964,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "709:7:120",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "708:9:120"
                        },
                        "scope": 66989,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 66980,
                        "nodeType": "FunctionDefinition",
                        "src": "758:99:120",
                        "nodes": [],
                        "body": {
                            "id": 66979,
                            "nodeType": "Block",
                            "src": "825:32:120",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "expression": {
                                            "id": 66976,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "842:3:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 66977,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "846:4:120",
                                        "memberName": "data",
                                        "nodeType": "MemberAccess",
                                        "src": "842:8:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_calldata_ptr",
                                            "typeString": "bytes calldata"
                                        }
                                    },
                                    "functionReturnParameters": 66975,
                                    "id": 66978,
                                    "nodeType": "Return",
                                    "src": "835:15:120"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_msgData",
                        "nameLocation": "767:8:120",
                        "parameters": {
                            "id": 66972,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "775:2:120"
                        },
                        "returnParameters": {
                            "id": 66975,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66974,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66980,
                                    "src": "809:14:120",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 66973,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "809:5:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "808:16:120"
                        },
                        "scope": 66989,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 66988,
                        "nodeType": "FunctionDefinition",
                        "src": "863:97:120",
                        "nodes": [],
                        "body": {
                            "id": 66987,
                            "nodeType": "Block",
                            "src": "935:25:120",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "hexValue": "30",
                                        "id": 66985,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "952:1:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "functionReturnParameters": 66984,
                                    "id": 66986,
                                    "nodeType": "Return",
                                    "src": "945:8:120"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_contextSuffixLength",
                        "nameLocation": "872:20:120",
                        "parameters": {
                            "id": 66981,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "892:2:120"
                        },
                        "returnParameters": {
                            "id": 66984,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 66983,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 66988,
                                    "src": "926:7:120",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 66982,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "926:7:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "925:9:120"
                        },
                        "scope": 66989,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [],
                "canonicalName": "Context",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 66962,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:496:120",
                    "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    66989
                ],
                "name": "Context",
                "nameLocation": "642:7:120",
                "scope": 66990,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 120
};
