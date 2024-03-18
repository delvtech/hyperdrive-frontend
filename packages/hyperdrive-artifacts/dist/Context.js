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
        "id": 71927,
        "exportedSymbols": {
            "Context": [
                71926
            ]
        },
        "nodeType": "SourceUnit",
        "src": "101:862:170",
        "nodes": [
            {
                "id": 71898,
                "nodeType": "PragmaDirective",
                "src": "101:24:170",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 71926,
                "nodeType": "ContractDefinition",
                "src": "624:338:170",
                "nodes": [
                    {
                        "id": 71908,
                        "nodeType": "FunctionDefinition",
                        "src": "656:96:170",
                        "nodes": [],
                        "body": {
                            "id": 71907,
                            "nodeType": "Block",
                            "src": "718:34:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "expression": {
                                            "id": 71904,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "735:3:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 71905,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "739:6:170",
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "735:10:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 71903,
                                    "id": 71906,
                                    "nodeType": "Return",
                                    "src": "728:17:170"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_msgSender",
                        "nameLocation": "665:10:170",
                        "parameters": {
                            "id": 71900,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "675:2:170"
                        },
                        "returnParameters": {
                            "id": 71903,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71902,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71908,
                                    "src": "709:7:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71901,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "709:7:170",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "708:9:170"
                        },
                        "scope": 71926,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 71917,
                        "nodeType": "FunctionDefinition",
                        "src": "758:99:170",
                        "nodes": [],
                        "body": {
                            "id": 71916,
                            "nodeType": "Block",
                            "src": "825:32:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "expression": {
                                            "id": 71913,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "842:3:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 71914,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "846:4:170",
                                        "memberName": "data",
                                        "nodeType": "MemberAccess",
                                        "src": "842:8:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_calldata_ptr",
                                            "typeString": "bytes calldata"
                                        }
                                    },
                                    "functionReturnParameters": 71912,
                                    "id": 71915,
                                    "nodeType": "Return",
                                    "src": "835:15:170"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_msgData",
                        "nameLocation": "767:8:170",
                        "parameters": {
                            "id": 71909,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "775:2:170"
                        },
                        "returnParameters": {
                            "id": 71912,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71911,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71917,
                                    "src": "809:14:170",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71910,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "809:5:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "808:16:170"
                        },
                        "scope": 71926,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 71925,
                        "nodeType": "FunctionDefinition",
                        "src": "863:97:170",
                        "nodes": [],
                        "body": {
                            "id": 71924,
                            "nodeType": "Block",
                            "src": "935:25:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "hexValue": "30",
                                        "id": 71922,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "952:1:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "functionReturnParameters": 71921,
                                    "id": 71923,
                                    "nodeType": "Return",
                                    "src": "945:8:170"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_contextSuffixLength",
                        "nameLocation": "872:20:170",
                        "parameters": {
                            "id": 71918,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "892:2:170"
                        },
                        "returnParameters": {
                            "id": 71921,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71920,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71925,
                                    "src": "926:7:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71919,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "926:7:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "925:9:170"
                        },
                        "scope": 71926,
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
                    "id": 71899,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:496:170",
                    "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71926
                ],
                "name": "Context",
                "nameLocation": "642:7:170",
                "scope": 71927,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 170
};
