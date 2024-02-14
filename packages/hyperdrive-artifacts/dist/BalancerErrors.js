export const BalancerErrors = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220266e2ba104e84b33f292012d642257d0222fb24ff031ac88ba274f6fcb83c50464736f6c63430008140033",
        "sourceMap": "5206:10031:127:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;5206:10031:127;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220266e2ba104e84b33f292012d642257d0222fb24ff031ac88ba274f6fcb83c50464736f6c63430008140033",
        "sourceMap": "5206:10031:127:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/3rdPartyLibs/BalancerErrors.sol\":\"BalancerErrors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"test/3rdPartyLibs/BalancerErrors.sol\":{\"keccak256\":\"0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611\",\"dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU\"]}},\"version\":1}",
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
                "test/3rdPartyLibs/BalancerErrors.sol": "BalancerErrors"
            },
            "libraries": {}
        },
        "sources": {
            "test/3rdPartyLibs/BalancerErrors.sol": {
                "keccak256": "0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca",
                "urls": [
                    "bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611",
                    "dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU"
                ],
                "license": "GPL-3.0-or-later"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "test/3rdPartyLibs/BalancerErrors.sol",
        "id": 69563,
        "exportedSymbols": {
            "BalancerErrors": [
                69562
            ],
            "_require": [
                69006,
                69025
            ],
            "_revert": [
                69037,
                69057
            ]
        },
        "nodeType": "SourceUnit",
        "src": "688:14550:127",
        "nodes": [
            {
                "id": 68990,
                "nodeType": "PragmaDirective",
                "src": "688:31:127",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.7",
                    ".0",
                    "<",
                    "0.9",
                    ".0"
                ]
            },
            {
                "id": 69006,
                "nodeType": "FunctionDefinition",
                "src": "926:101:127",
                "nodes": [],
                "body": {
                    "id": 69005,
                    "nodeType": "Block",
                    "src": "984:43:127",
                    "nodes": [],
                    "statements": [
                        {
                            "condition": {
                                "id": 68999,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "994:10:127",
                                "subExpression": {
                                    "id": 68998,
                                    "name": "condition",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68993,
                                    "src": "995:9:127",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "id": 69004,
                            "nodeType": "IfStatement",
                            "src": "990:34:127",
                            "trueBody": {
                                "expression": {
                                    "arguments": [
                                        {
                                            "id": 69001,
                                            "name": "errorCode",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68995,
                                            "src": "1014:9:127",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        }
                                    ],
                                    "expression": {
                                        "argumentTypes": [
                                            {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        ],
                                        "id": 69000,
                                        "name": "_revert",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [
                                            69037,
                                            69057
                                        ],
                                        "referencedDeclaration": 69037,
                                        "src": "1006:7:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                                            "typeString": "function (uint256) pure"
                                        }
                                    },
                                    "id": 69002,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1006:18:127",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                    }
                                },
                                "id": 69003,
                                "nodeType": "ExpressionStatement",
                                "src": "1006:18:127"
                            }
                        }
                    ]
                },
                "documentation": {
                    "id": 68991,
                    "nodeType": "StructuredDocumentation",
                    "src": "741:184:127",
                    "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.\n Uses the default 'BAL' prefix for the error code"
                },
                "implemented": true,
                "kind": "freeFunction",
                "modifiers": [],
                "name": "_require",
                "nameLocation": "935:8:127",
                "parameters": {
                    "id": 68996,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 68993,
                            "mutability": "mutable",
                            "name": "condition",
                            "nameLocation": "949:9:127",
                            "nodeType": "VariableDeclaration",
                            "scope": 69006,
                            "src": "944:14:127",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 68992,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "944:4:127",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 68995,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "968:9:127",
                            "nodeType": "VariableDeclaration",
                            "scope": 69006,
                            "src": "960:17:127",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 68994,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "960:7:127",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "visibility": "internal"
                        }
                    ],
                    "src": "943:35:127"
                },
                "returnParameters": {
                    "id": 68997,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "984:0:127"
                },
                "scope": 69563,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 69025,
                "nodeType": "FunctionDefinition",
                "src": "1162:124:127",
                "nodes": [],
                "body": {
                    "id": 69024,
                    "nodeType": "Block",
                    "src": "1235:51:127",
                    "nodes": [],
                    "statements": [
                        {
                            "condition": {
                                "id": 69017,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "1245:10:127",
                                "subExpression": {
                                    "id": 69016,
                                    "name": "condition",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 69009,
                                    "src": "1246:9:127",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "id": 69023,
                            "nodeType": "IfStatement",
                            "src": "1241:42:127",
                            "trueBody": {
                                "expression": {
                                    "arguments": [
                                        {
                                            "id": 69019,
                                            "name": "errorCode",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 69011,
                                            "src": "1265:9:127",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        {
                                            "id": 69020,
                                            "name": "prefix",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 69013,
                                            "src": "1276:6:127",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes3",
                                                "typeString": "bytes3"
                                            }
                                        }
                                    ],
                                    "expression": {
                                        "argumentTypes": [
                                            {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            {
                                                "typeIdentifier": "t_bytes3",
                                                "typeString": "bytes3"
                                            }
                                        ],
                                        "id": 69018,
                                        "name": "_revert",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [
                                            69037,
                                            69057
                                        ],
                                        "referencedDeclaration": 69057,
                                        "src": "1257:7:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                                            "typeString": "function (uint256,bytes3) pure"
                                        }
                                    },
                                    "id": 69021,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1257:26:127",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                    }
                                },
                                "id": 69022,
                                "nodeType": "ExpressionStatement",
                                "src": "1257:26:127"
                            }
                        }
                    ]
                },
                "documentation": {
                    "id": 69007,
                    "nodeType": "StructuredDocumentation",
                    "src": "1029:132:127",
                    "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported."
                },
                "implemented": true,
                "kind": "freeFunction",
                "modifiers": [],
                "name": "_require",
                "nameLocation": "1171:8:127",
                "parameters": {
                    "id": 69014,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 69009,
                            "mutability": "mutable",
                            "name": "condition",
                            "nameLocation": "1185:9:127",
                            "nodeType": "VariableDeclaration",
                            "scope": 69025,
                            "src": "1180:14:127",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 69008,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1180:4:127",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 69011,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "1204:9:127",
                            "nodeType": "VariableDeclaration",
                            "scope": 69025,
                            "src": "1196:17:127",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 69010,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1196:7:127",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 69013,
                            "mutability": "mutable",
                            "name": "prefix",
                            "nameLocation": "1222:6:127",
                            "nodeType": "VariableDeclaration",
                            "scope": 69025,
                            "src": "1215:13:127",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes3",
                                "typeString": "bytes3"
                            },
                            "typeName": {
                                "id": 69012,
                                "name": "bytes3",
                                "nodeType": "ElementaryTypeName",
                                "src": "1215:6:127",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes3",
                                    "typeString": "bytes3"
                                }
                            },
                            "visibility": "internal"
                        }
                    ],
                    "src": "1179:50:127"
                },
                "returnParameters": {
                    "id": 69015,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1235:0:127"
                },
                "scope": 69563,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 69037,
                "nodeType": "FunctionDefinition",
                "src": "1445:126:127",
                "nodes": [],
                "body": {
                    "id": 69036,
                    "nodeType": "Block",
                    "src": "1486:85:127",
                    "nodes": [],
                    "statements": [
                        {
                            "expression": {
                                "arguments": [
                                    {
                                        "id": 69032,
                                        "name": "errorCode",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 69028,
                                        "src": "1500:9:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    {
                                        "hexValue": "3078343234313463",
                                        "id": 69033,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1511:8:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_4342092_by_1",
                                            "typeString": "int_const 4342092"
                                        },
                                        "value": "0x42414c"
                                    }
                                ],
                                "expression": {
                                    "argumentTypes": [
                                        {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        {
                                            "typeIdentifier": "t_rational_4342092_by_1",
                                            "typeString": "int_const 4342092"
                                        }
                                    ],
                                    "id": 69031,
                                    "name": "_revert",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                        69037,
                                        69057
                                    ],
                                    "referencedDeclaration": 69057,
                                    "src": "1492:7:127",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                                        "typeString": "function (uint256,bytes3) pure"
                                    }
                                },
                                "id": 69034,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1492:28:127",
                                "tryCall": false,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                }
                            },
                            "id": 69035,
                            "nodeType": "ExpressionStatement",
                            "src": "1492:28:127"
                        }
                    ]
                },
                "documentation": {
                    "id": 69026,
                    "nodeType": "StructuredDocumentation",
                    "src": "1288:156:127",
                    "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.\n Uses the default 'BAL' prefix for the error code"
                },
                "implemented": true,
                "kind": "freeFunction",
                "modifiers": [],
                "name": "_revert",
                "nameLocation": "1454:7:127",
                "parameters": {
                    "id": 69029,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 69028,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "1470:9:127",
                            "nodeType": "VariableDeclaration",
                            "scope": 69037,
                            "src": "1462:17:127",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 69027,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1462:7:127",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "visibility": "internal"
                        }
                    ],
                    "src": "1461:19:127"
                },
                "returnParameters": {
                    "id": 69030,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1486:0:127"
                },
                "scope": 69563,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 69057,
                "nodeType": "FunctionDefinition",
                "src": "1678:3526:127",
                "nodes": [],
                "body": {
                    "id": 69056,
                    "nodeType": "Block",
                    "src": "1734:3470:127",
                    "nodes": [],
                    "statements": [
                        {
                            "assignments": [
                                69046
                            ],
                            "declarations": [
                                {
                                    "constant": false,
                                    "id": 69046,
                                    "mutability": "mutable",
                                    "name": "prefixUint",
                                    "nameLocation": "1748:10:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 69056,
                                    "src": "1740:18:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 69045,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1740:7:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "id": 69054,
                            "initialValue": {
                                "arguments": [
                                    {
                                        "arguments": [
                                            {
                                                "id": 69051,
                                                "name": "prefix",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 69042,
                                                "src": "1776:6:127",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes3",
                                                    "typeString": "bytes3"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes3",
                                                    "typeString": "bytes3"
                                                }
                                            ],
                                            "id": 69050,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1769:6:127",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint24_$",
                                                "typeString": "type(uint24)"
                                            },
                                            "typeName": {
                                                "id": 69049,
                                                "name": "uint24",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1769:6:127",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 69052,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1769:14:127",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint24",
                                            "typeString": "uint24"
                                        }
                                    }
                                ],
                                "expression": {
                                    "argumentTypes": [
                                        {
                                            "typeIdentifier": "t_uint24",
                                            "typeString": "uint24"
                                        }
                                    ],
                                    "id": 69048,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "1761:7:127",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                        "id": 69047,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1761:7:127",
                                        "typeDescriptions": {}
                                    }
                                },
                                "id": 69053,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1761:23:127",
                                "tryCall": false,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "VariableDeclarationStatement",
                            "src": "1740:44:127"
                        },
                        {
                            "AST": {
                                "nodeType": "YulBlock",
                                "src": "2573:2629:127",
                                "statements": [
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2847:42:127",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "errorCode",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2868:9:127"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2879:2:127",
                                                            "type": "",
                                                            "value": "10"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2864:3:127"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2864:18:127"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2884:4:127",
                                                    "type": "",
                                                    "value": "0x30"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "2860:3:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2860:29:127"
                                        },
                                        "variables": [
                                            {
                                                "name": "units",
                                                "nodeType": "YulTypedName",
                                                "src": "2851:5:127",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "2899:31:127",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "errorCode",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2916:9:127"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2927:2:127",
                                                    "type": "",
                                                    "value": "10"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "2912:3:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2912:18:127"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "errorCode",
                                                "nodeType": "YulIdentifier",
                                                "src": "2899:9:127"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2939:43:127",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "errorCode",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2961:9:127"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2972:2:127",
                                                            "type": "",
                                                            "value": "10"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2957:3:127"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2957:18:127"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2977:4:127",
                                                    "type": "",
                                                    "value": "0x30"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "2953:3:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2953:29:127"
                                        },
                                        "variables": [
                                            {
                                                "name": "tenths",
                                                "nodeType": "YulTypedName",
                                                "src": "2943:6:127",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "2992:31:127",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "errorCode",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3009:9:127"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3020:2:127",
                                                    "type": "",
                                                    "value": "10"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "3005:3:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3005:18:127"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "errorCode",
                                                "nodeType": "YulIdentifier",
                                                "src": "2992:9:127"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3032:45:127",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "errorCode",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3056:9:127"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3067:2:127",
                                                            "type": "",
                                                            "value": "10"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3052:3:127"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3052:18:127"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3072:4:127",
                                                    "type": "",
                                                    "value": "0x30"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "3048:3:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3048:29:127"
                                        },
                                        "variables": [
                                            {
                                                "name": "hundreds",
                                                "nodeType": "YulTypedName",
                                                "src": "3036:8:127",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3710:61:127",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3737:2:127",
                                                    "type": "",
                                                    "value": "24"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3745:4:127",
                                                            "type": "",
                                                            "value": "0x23"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3755:1:127",
                                                                    "type": "",
                                                                    "value": "8"
                                                                },
                                                                {
                                                                    "name": "prefixUint",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3758:10:127"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "shl",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3751:3:127"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3751:18:127"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3741:3:127"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3741:29:127"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "shl",
                                                "nodeType": "YulIdentifier",
                                                "src": "3733:3:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3733:38:127"
                                        },
                                        "variables": [
                                            {
                                                "name": "formattedPrefix",
                                                "nodeType": "YulTypedName",
                                                "src": "3714:15:127",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3781:182:127",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3818:3:127",
                                                    "type": "",
                                                    "value": "200"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "formattedPrefix",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3856:15:127"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "units",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3897:5:127"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "3908:1:127",
                                                                                    "type": "",
                                                                                    "value": "8"
                                                                                },
                                                                                {
                                                                                    "name": "tenths",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "3911:6:127"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "shl",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3904:3:127"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "3904:14:127"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "add",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3893:3:127"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3893:26:127"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "3925:2:127",
                                                                            "type": "",
                                                                            "value": "16"
                                                                        },
                                                                        {
                                                                            "name": "hundreds",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3929:8:127"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "shl",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3921:3:127"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3921:17:127"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3889:3:127"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3889:50:127"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3835:3:127"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3835:118:127"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "shl",
                                                "nodeType": "YulIdentifier",
                                                "src": "3801:3:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3801:162:127"
                                        },
                                        "variables": [
                                            {
                                                "name": "revertReason",
                                                "nodeType": "YulTypedName",
                                                "src": "3785:12:127",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4491:3:127",
                                                    "type": "",
                                                    "value": "0x0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4508:66:127",
                                                    "type": "",
                                                    "value": "0x08c379a000000000000000000000000000000000000000000000000000000000"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4471:6:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4471:113:127"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4471:113:127"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4730:4:127",
                                                    "type": "",
                                                    "value": "0x04"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4748:66:127",
                                                    "type": "",
                                                    "value": "0x0000000000000000000000000000000000000000000000000000000000000020"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4710:6:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4710:114:127"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4710:114:127"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4893:4:127",
                                                    "type": "",
                                                    "value": "0x24"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4899:1:127",
                                                    "type": "",
                                                    "value": "7"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4886:6:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4886:15:127"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4886:15:127"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4966:4:127",
                                                    "type": "",
                                                    "value": "0x44"
                                                },
                                                {
                                                    "name": "revertReason",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4972:12:127"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4959:6:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4959:26:127"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4959:26:127"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5189:1:127",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5192:3:127",
                                                    "type": "",
                                                    "value": "100"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "5182:6:127"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "5182:14:127"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5182:14:127"
                                    }
                                ]
                            },
                            "evmVersion": "paris",
                            "externalReferences": [
                                {
                                    "declaration": 69040,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2868:9:127",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 69040,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2899:9:127",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 69040,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2916:9:127",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 69040,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2961:9:127",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 69040,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2992:9:127",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 69040,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "3009:9:127",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 69040,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "3056:9:127",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 69046,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "3758:10:127",
                                    "valueSize": 1
                                }
                            ],
                            "id": 69055,
                            "nodeType": "InlineAssembly",
                            "src": "2564:2638:127"
                        }
                    ]
                },
                "documentation": {
                    "id": 69038,
                    "nodeType": "StructuredDocumentation",
                    "src": "1573:104:127",
                    "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported."
                },
                "implemented": true,
                "kind": "freeFunction",
                "modifiers": [],
                "name": "_revert",
                "nameLocation": "1687:7:127",
                "parameters": {
                    "id": 69043,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 69040,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "1703:9:127",
                            "nodeType": "VariableDeclaration",
                            "scope": 69057,
                            "src": "1695:17:127",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 69039,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1695:7:127",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 69042,
                            "mutability": "mutable",
                            "name": "prefix",
                            "nameLocation": "1721:6:127",
                            "nodeType": "VariableDeclaration",
                            "scope": 69057,
                            "src": "1714:13:127",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes3",
                                "typeString": "bytes3"
                            },
                            "typeName": {
                                "id": 69041,
                                "name": "bytes3",
                                "nodeType": "ElementaryTypeName",
                                "src": "1714:6:127",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes3",
                                    "typeString": "bytes3"
                                }
                            },
                            "visibility": "internal"
                        }
                    ],
                    "src": "1694:34:127"
                },
                "returnParameters": {
                    "id": 69044,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1734:0:127"
                },
                "scope": 69563,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 69562,
                "nodeType": "ContractDefinition",
                "src": "5206:10031:127",
                "nodes": [
                    {
                        "id": 69060,
                        "nodeType": "VariableDeclaration",
                        "src": "5247:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADD_OVERFLOW",
                        "nameLocation": "5273:12:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69058,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5247:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "30",
                            "id": 69059,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5288:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                            },
                            "value": "0"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69063,
                        "nodeType": "VariableDeclaration",
                        "src": "5295:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SUB_OVERFLOW",
                        "nameLocation": "5321:12:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69061,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5295:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "31",
                            "id": 69062,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5336:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                            },
                            "value": "1"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69066,
                        "nodeType": "VariableDeclaration",
                        "src": "5343:43:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SUB_UNDERFLOW",
                        "nameLocation": "5369:13:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69064,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5343:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "32",
                            "id": 69065,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5385:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_2_by_1",
                                "typeString": "int_const 2"
                            },
                            "value": "2"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69069,
                        "nodeType": "VariableDeclaration",
                        "src": "5392:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MUL_OVERFLOW",
                        "nameLocation": "5418:12:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69067,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5392:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "33",
                            "id": 69068,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5433:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_3_by_1",
                                "typeString": "int_const 3"
                            },
                            "value": "3"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69072,
                        "nodeType": "VariableDeclaration",
                        "src": "5440:43:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ZERO_DIVISION",
                        "nameLocation": "5466:13:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69070,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5440:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "34",
                            "id": 69071,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5482:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_4_by_1",
                                "typeString": "int_const 4"
                            },
                            "value": "4"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69075,
                        "nodeType": "VariableDeclaration",
                        "src": "5489:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "DIV_INTERNAL",
                        "nameLocation": "5515:12:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69073,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5489:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "35",
                            "id": 69074,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5530:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_5_by_1",
                                "typeString": "int_const 5"
                            },
                            "value": "5"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69078,
                        "nodeType": "VariableDeclaration",
                        "src": "5537:45:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "X_OUT_OF_BOUNDS",
                        "nameLocation": "5563:15:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69076,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5537:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "36",
                            "id": 69077,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5581:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_6_by_1",
                                "typeString": "int_const 6"
                            },
                            "value": "6"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69081,
                        "nodeType": "VariableDeclaration",
                        "src": "5588:45:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "Y_OUT_OF_BOUNDS",
                        "nameLocation": "5614:15:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69079,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5588:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "37",
                            "id": 69080,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5632:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_7_by_1",
                                "typeString": "int_const 7"
                            },
                            "value": "7"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69084,
                        "nodeType": "VariableDeclaration",
                        "src": "5639:51:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PRODUCT_OUT_OF_BOUNDS",
                        "nameLocation": "5665:21:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69082,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5639:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "38",
                            "id": 69083,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5689:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_8_by_1",
                                "typeString": "int_const 8"
                            },
                            "value": "8"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69087,
                        "nodeType": "VariableDeclaration",
                        "src": "5696:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_EXPONENT",
                        "nameLocation": "5722:16:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69085,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5696:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "39",
                            "id": 69086,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5741:1:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_9_by_1",
                                "typeString": "int_const 9"
                            },
                            "value": "9"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69090,
                        "nodeType": "VariableDeclaration",
                        "src": "5762:45:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "OUT_OF_BOUNDS",
                        "nameLocation": "5788:13:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69088,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5762:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313030",
                            "id": 69089,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5804:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                            },
                            "value": "100"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69093,
                        "nodeType": "VariableDeclaration",
                        "src": "5813:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNSORTED_ARRAY",
                        "nameLocation": "5839:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69091,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5813:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313031",
                            "id": 69092,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5856:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_101_by_1",
                                "typeString": "int_const 101"
                            },
                            "value": "101"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69096,
                        "nodeType": "VariableDeclaration",
                        "src": "5865:47:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNSORTED_TOKENS",
                        "nameLocation": "5891:15:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69094,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5865:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313032",
                            "id": 69095,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5909:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_102_by_1",
                                "typeString": "int_const 102"
                            },
                            "value": "102"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69099,
                        "nodeType": "VariableDeclaration",
                        "src": "5918:53:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INPUT_LENGTH_MISMATCH",
                        "nameLocation": "5944:21:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69097,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5918:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313033",
                            "id": 69098,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5968:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_103_by_1",
                                "typeString": "int_const 103"
                            },
                            "value": "103"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69102,
                        "nodeType": "VariableDeclaration",
                        "src": "5977:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ZERO_TOKEN",
                        "nameLocation": "6003:10:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69100,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5977:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313034",
                            "id": 69101,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6016:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_104_by_1",
                                "typeString": "int_const 104"
                            },
                            "value": "104"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69105,
                        "nodeType": "VariableDeclaration",
                        "src": "6025:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_DATA",
                        "nameLocation": "6051:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69103,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6025:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313035",
                            "id": 69104,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6071:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_105_by_1",
                                "typeString": "int_const 105"
                            },
                            "value": "105"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69108,
                        "nodeType": "VariableDeclaration",
                        "src": "6101:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_TOKENS",
                        "nameLocation": "6127:10:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69106,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6101:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323030",
                            "id": 69107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6140:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_200_by_1",
                                "typeString": "int_const 200"
                            },
                            "value": "200"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69111,
                        "nodeType": "VariableDeclaration",
                        "src": "6149:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_TOKENS",
                        "nameLocation": "6175:10:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69109,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6149:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323031",
                            "id": 69110,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6188:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_201_by_1",
                                "typeString": "int_const 201"
                            },
                            "value": "201"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69114,
                        "nodeType": "VariableDeclaration",
                        "src": "6197:55:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_SWAP_FEE_PERCENTAGE",
                        "nameLocation": "6223:23:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69112,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6197:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323032",
                            "id": 69113,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6249:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_202_by_1",
                                "typeString": "int_const 202"
                            },
                            "value": "202"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69117,
                        "nodeType": "VariableDeclaration",
                        "src": "6258:55:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_SWAP_FEE_PERCENTAGE",
                        "nameLocation": "6284:23:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69115,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6258:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323033",
                            "id": 69116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6310:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_203_by_1",
                                "typeString": "int_const 203"
                            },
                            "value": "203"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69120,
                        "nodeType": "VariableDeclaration",
                        "src": "6319:43:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MINIMUM_BPT",
                        "nameLocation": "6345:11:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69118,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6319:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323034",
                            "id": 69119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6359:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_204_by_1",
                                "typeString": "int_const 204"
                            },
                            "value": "204"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69123,
                        "nodeType": "VariableDeclaration",
                        "src": "6368:48:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_NOT_VAULT",
                        "nameLocation": "6394:16:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69121,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6368:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323035",
                            "id": 69122,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6413:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_205_by_1",
                                "typeString": "int_const 205"
                            },
                            "value": "205"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69126,
                        "nodeType": "VariableDeclaration",
                        "src": "6422:45:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNINITIALIZED",
                        "nameLocation": "6448:13:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69124,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6422:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323036",
                            "id": 69125,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6464:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_206_by_1",
                                "typeString": "int_const 206"
                            },
                            "value": "206"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69129,
                        "nodeType": "VariableDeclaration",
                        "src": "6473:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BPT_IN_MAX_AMOUNT",
                        "nameLocation": "6499:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69127,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6473:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323037",
                            "id": 69128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6519:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_207_by_1",
                                "typeString": "int_const 207"
                            },
                            "value": "207"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69132,
                        "nodeType": "VariableDeclaration",
                        "src": "6528:50:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BPT_OUT_MIN_AMOUNT",
                        "nameLocation": "6554:18:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69130,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6528:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323038",
                            "id": 69131,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6575:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_208_by_1",
                                "typeString": "int_const 208"
                            },
                            "value": "208"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69135,
                        "nodeType": "VariableDeclaration",
                        "src": "6584:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "EXPIRED_PERMIT",
                        "nameLocation": "6610:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69133,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6584:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323039",
                            "id": 69134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6627:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_209_by_1",
                                "typeString": "int_const 209"
                            },
                            "value": "209"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69138,
                        "nodeType": "VariableDeclaration",
                        "src": "6636:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_TWO_TOKENS",
                        "nameLocation": "6662:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69136,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6636:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323130",
                            "id": 69137,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6679:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_210_by_1",
                                "typeString": "int_const 210"
                            },
                            "value": "210"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69141,
                        "nodeType": "VariableDeclaration",
                        "src": "6688:40:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "DISABLED",
                        "nameLocation": "6714:8:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69139,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6688:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323131",
                            "id": 69140,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6725:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_211_by_1",
                                "typeString": "int_const 211"
                            },
                            "value": "211"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69144,
                        "nodeType": "VariableDeclaration",
                        "src": "6748:39:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_AMP",
                        "nameLocation": "6774:7:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69142,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6748:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333030",
                            "id": 69143,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6784:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_300_by_1",
                                "typeString": "int_const 300"
                            },
                            "value": "300"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69147,
                        "nodeType": "VariableDeclaration",
                        "src": "6793:39:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_AMP",
                        "nameLocation": "6819:7:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69145,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6793:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333031",
                            "id": 69146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6829:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_301_by_1",
                                "typeString": "int_const 301"
                            },
                            "value": "301"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69150,
                        "nodeType": "VariableDeclaration",
                        "src": "6838:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_WEIGHT",
                        "nameLocation": "6864:10:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69148,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6838:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333032",
                            "id": 69149,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6877:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_302_by_1",
                                "typeString": "int_const 302"
                            },
                            "value": "302"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69153,
                        "nodeType": "VariableDeclaration",
                        "src": "6886:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_STABLE_TOKENS",
                        "nameLocation": "6912:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69151,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6886:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333033",
                            "id": 69152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6932:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_303_by_1",
                                "typeString": "int_const 303"
                            },
                            "value": "303"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69156,
                        "nodeType": "VariableDeclaration",
                        "src": "6941:44:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_IN_RATIO",
                        "nameLocation": "6967:12:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69154,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6941:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333034",
                            "id": 69155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6982:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_304_by_1",
                                "typeString": "int_const 304"
                            },
                            "value": "304"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69159,
                        "nodeType": "VariableDeclaration",
                        "src": "6991:45:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_OUT_RATIO",
                        "nameLocation": "7017:13:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69157,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6991:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333035",
                            "id": 69158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7033:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_305_by_1",
                                "typeString": "int_const 305"
                            },
                            "value": "305"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69162,
                        "nodeType": "VariableDeclaration",
                        "src": "7042:56:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_BPT_IN_FOR_TOKEN_OUT",
                        "nameLocation": "7068:24:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69160,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7042:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333036",
                            "id": 69161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7095:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_306_by_1",
                                "typeString": "int_const 306"
                            },
                            "value": "306"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69165,
                        "nodeType": "VariableDeclaration",
                        "src": "7104:56:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_OUT_BPT_FOR_TOKEN_IN",
                        "nameLocation": "7130:24:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69163,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7104:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333037",
                            "id": 69164,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7157:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_307_by_1",
                                "typeString": "int_const 307"
                            },
                            "value": "307"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69168,
                        "nodeType": "VariableDeclaration",
                        "src": "7166:59:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NORMALIZED_WEIGHT_INVARIANT",
                        "nameLocation": "7192:27:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69166,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7166:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333038",
                            "id": 69167,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7222:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_308_by_1",
                                "typeString": "int_const 308"
                            },
                            "value": "308"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69171,
                        "nodeType": "VariableDeclaration",
                        "src": "7231:45:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_TOKEN",
                        "nameLocation": "7257:13:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69169,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7231:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333039",
                            "id": 69170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7273:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_309_by_1",
                                "typeString": "int_const 309"
                            },
                            "value": "309"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69174,
                        "nodeType": "VariableDeclaration",
                        "src": "7282:51:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_JOIN_KIND",
                        "nameLocation": "7308:19:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69172,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7282:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333130",
                            "id": 69173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7330:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_310_by_1",
                                "typeString": "int_const 310"
                            },
                            "value": "310"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69177,
                        "nodeType": "VariableDeclaration",
                        "src": "7339:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ZERO_INVARIANT",
                        "nameLocation": "7365:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69175,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7339:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333131",
                            "id": 69176,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7382:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_311_by_1",
                                "typeString": "int_const 311"
                            },
                            "value": "311"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69180,
                        "nodeType": "VariableDeclaration",
                        "src": "7391:60:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_INVALID_SECONDS_QUERY",
                        "nameLocation": "7417:28:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69178,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7391:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333132",
                            "id": 69179,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7448:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_312_by_1",
                                "typeString": "int_const 312"
                            },
                            "value": "312"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69183,
                        "nodeType": "VariableDeclaration",
                        "src": "7457:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_NOT_INITIALIZED",
                        "nameLocation": "7483:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69181,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7457:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333133",
                            "id": 69182,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7508:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_313_by_1",
                                "typeString": "int_const 313"
                            },
                            "value": "313"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69186,
                        "nodeType": "VariableDeclaration",
                        "src": "7517:52:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_QUERY_TOO_OLD",
                        "nameLocation": "7543:20:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69184,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7517:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333134",
                            "id": 69185,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7566:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_314_by_1",
                                "typeString": "int_const 314"
                            },
                            "value": "314"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69189,
                        "nodeType": "VariableDeclaration",
                        "src": "7575:52:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_INVALID_INDEX",
                        "nameLocation": "7601:20:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69187,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7575:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333135",
                            "id": 69188,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7624:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_315_by_1",
                                "typeString": "int_const 315"
                            },
                            "value": "315"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69192,
                        "nodeType": "VariableDeclaration",
                        "src": "7633:47:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_BAD_SECS",
                        "nameLocation": "7659:15:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69190,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7633:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333136",
                            "id": 69191,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7677:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_316_by_1",
                                "typeString": "int_const 316"
                            },
                            "value": "316"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69195,
                        "nodeType": "VariableDeclaration",
                        "src": "7686:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_END_TIME_TOO_CLOSE",
                        "nameLocation": "7712:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69193,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7686:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333137",
                            "id": 69194,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7737:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_317_by_1",
                                "typeString": "int_const 317"
                            },
                            "value": "317"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69198,
                        "nodeType": "VariableDeclaration",
                        "src": "7746:50:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_ONGOING_UPDATE",
                        "nameLocation": "7772:18:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69196,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7746:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333138",
                            "id": 69197,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7793:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_318_by_1",
                                "typeString": "int_const 318"
                            },
                            "value": "318"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69201,
                        "nodeType": "VariableDeclaration",
                        "src": "7802:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_RATE_TOO_HIGH",
                        "nameLocation": "7828:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69199,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7802:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333139",
                            "id": 69200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7848:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_319_by_1",
                                "typeString": "int_const 319"
                            },
                            "value": "319"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69204,
                        "nodeType": "VariableDeclaration",
                        "src": "7857:53:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_NO_ONGOING_UPDATE",
                        "nameLocation": "7883:21:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69202,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7857:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333230",
                            "id": 69203,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7907:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                            },
                            "value": "320"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69207,
                        "nodeType": "VariableDeclaration",
                        "src": "7916:63:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "STABLE_INVARIANT_DIDNT_CONVERGE",
                        "nameLocation": "7942:31:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69205,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7916:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333231",
                            "id": 69206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7976:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_321_by_1",
                                "typeString": "int_const 321"
                            },
                            "value": "321"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69210,
                        "nodeType": "VariableDeclaration",
                        "src": "7985:65:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "STABLE_GET_BALANCE_DIDNT_CONVERGE",
                        "nameLocation": "8011:33:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69208,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7985:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333232",
                            "id": 69209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8047:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_322_by_1",
                                "typeString": "int_const 322"
                            },
                            "value": "322"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69213,
                        "nodeType": "VariableDeclaration",
                        "src": "8056:52:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RELAYER_NOT_CONTRACT",
                        "nameLocation": "8082:20:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69211,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8056:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333233",
                            "id": 69212,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8105:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_323_by_1",
                                "typeString": "int_const 323"
                            },
                            "value": "323"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69216,
                        "nodeType": "VariableDeclaration",
                        "src": "8114:60:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BASE_POOL_RELAYER_NOT_CALLED",
                        "nameLocation": "8140:28:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69214,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8114:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333234",
                            "id": 69215,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8171:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_324_by_1",
                                "typeString": "int_const 324"
                            },
                            "value": "324"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69219,
                        "nodeType": "VariableDeclaration",
                        "src": "8180:61:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "REBALANCING_RELAYER_REENTERED",
                        "nameLocation": "8206:29:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69217,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8180:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333235",
                            "id": 69218,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8238:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_325_by_1",
                                "typeString": "int_const 325"
                            },
                            "value": "325"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69222,
                        "nodeType": "VariableDeclaration",
                        "src": "8247:58:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "GRADUAL_UPDATE_TIME_TRAVEL",
                        "nameLocation": "8273:26:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69220,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8247:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333236",
                            "id": 69221,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8302:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_326_by_1",
                                "typeString": "int_const 326"
                            },
                            "value": "326"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69225,
                        "nodeType": "VariableDeclaration",
                        "src": "8311:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAPS_DISABLED",
                        "nameLocation": "8337:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69223,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8311:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333237",
                            "id": 69224,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8354:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_327_by_1",
                                "typeString": "int_const 327"
                            },
                            "value": "327"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69228,
                        "nodeType": "VariableDeclaration",
                        "src": "8363:55:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_IS_NOT_LBP_OWNER",
                        "nameLocation": "8389:23:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69226,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8363:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333238",
                            "id": 69227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8415:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_328_by_1",
                                "typeString": "int_const 328"
                            },
                            "value": "328"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69231,
                        "nodeType": "VariableDeclaration",
                        "src": "8424:51:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PRICE_RATE_OVERFLOW",
                        "nameLocation": "8450:19:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69229,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8424:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333239",
                            "id": 69230,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8472:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_329_by_1",
                                "typeString": "int_const 329"
                            },
                            "value": "329"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69234,
                        "nodeType": "VariableDeclaration",
                        "src": "8481:75:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_JOIN_EXIT_KIND_WHILE_SWAPS_DISABLED",
                        "nameLocation": "8507:43:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69232,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8481:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333330",
                            "id": 69233,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8553:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_330_by_1",
                                "typeString": "int_const 330"
                            },
                            "value": "330"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69237,
                        "nodeType": "VariableDeclaration",
                        "src": "8562:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "WEIGHT_CHANGE_TOO_FAST",
                        "nameLocation": "8588:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69235,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8562:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333331",
                            "id": 69236,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8613:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_331_by_1",
                                "typeString": "int_const 331"
                            },
                            "value": "331"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69240,
                        "nodeType": "VariableDeclaration",
                        "src": "8622:63:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "LOWER_GREATER_THAN_UPPER_TARGET",
                        "nameLocation": "8648:31:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69238,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8622:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333332",
                            "id": 69239,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8682:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_332_by_1",
                                "typeString": "int_const 332"
                            },
                            "value": "332"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69243,
                        "nodeType": "VariableDeclaration",
                        "src": "8691:53:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UPPER_TARGET_TOO_HIGH",
                        "nameLocation": "8717:21:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69241,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8691:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333333",
                            "id": 69242,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8741:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_333_by_1",
                                "typeString": "int_const 333"
                            },
                            "value": "333"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69246,
                        "nodeType": "VariableDeclaration",
                        "src": "8750:56:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_BY_LINEAR_POOL",
                        "nameLocation": "8776:24:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69244,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8750:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333334",
                            "id": 69245,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8803:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_334_by_1",
                                "typeString": "int_const 334"
                            },
                            "value": "334"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69249,
                        "nodeType": "VariableDeclaration",
                        "src": "8812:51:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "OUT_OF_TARGET_RANGE",
                        "nameLocation": "8838:19:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69247,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8812:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333335",
                            "id": 69248,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8860:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_335_by_1",
                                "typeString": "int_const 335"
                            },
                            "value": "335"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69252,
                        "nodeType": "VariableDeclaration",
                        "src": "8869:51:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_EXIT_KIND",
                        "nameLocation": "8895:19:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69250,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8869:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333336",
                            "id": 69251,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8917:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_336_by_1",
                                "typeString": "int_const 336"
                            },
                            "value": "336"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69255,
                        "nodeType": "VariableDeclaration",
                        "src": "8926:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNAUTHORIZED_EXIT",
                        "nameLocation": "8952:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69253,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8926:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333337",
                            "id": 69254,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8972:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_337_by_1",
                                "typeString": "int_const 337"
                            },
                            "value": "337"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69258,
                        "nodeType": "VariableDeclaration",
                        "src": "8981:66:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_MANAGEMENT_SWAP_FEE_PERCENTAGE",
                        "nameLocation": "9007:34:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69256,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8981:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333338",
                            "id": 69257,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9044:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_338_by_1",
                                "typeString": "int_const 338"
                            },
                            "value": "338"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69261,
                        "nodeType": "VariableDeclaration",
                        "src": "9053:57:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_BY_MANAGED_POOL",
                        "nameLocation": "9079:25:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69259,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9053:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333339",
                            "id": 69260,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9107:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_339_by_1",
                                "typeString": "int_const 339"
                            },
                            "value": "339"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69264,
                        "nodeType": "VariableDeclaration",
                        "src": "9116:57:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_BY_PHANTOM_POOL",
                        "nameLocation": "9142:25:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69262,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9116:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333430",
                            "id": 69263,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9170:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_340_by_1",
                                "typeString": "int_const 340"
                            },
                            "value": "340"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69267,
                        "nodeType": "VariableDeclaration",
                        "src": "9179:65:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKEN_DOES_NOT_HAVE_RATE_PROVIDER",
                        "nameLocation": "9205:33:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69265,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9179:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333431",
                            "id": 69266,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9241:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_341_by_1",
                                "typeString": "int_const 341"
                            },
                            "value": "341"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69270,
                        "nodeType": "VariableDeclaration",
                        "src": "9250:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_INITIALIZATION",
                        "nameLocation": "9276:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69268,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9250:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333432",
                            "id": 69269,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9301:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_342_by_1",
                                "typeString": "int_const 342"
                            },
                            "value": "342"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69273,
                        "nodeType": "VariableDeclaration",
                        "src": "9310:55:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "OUT_OF_NEW_TARGET_RANGE",
                        "nameLocation": "9336:23:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69271,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9310:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333433",
                            "id": 69272,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9362:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_343_by_1",
                                "typeString": "int_const 343"
                            },
                            "value": "343"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69276,
                        "nodeType": "VariableDeclaration",
                        "src": "9371:48:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "FEATURE_DISABLED",
                        "nameLocation": "9397:16:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69274,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9371:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333434",
                            "id": 69275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9416:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_344_by_1",
                                "typeString": "int_const 344"
                            },
                            "value": "344"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69279,
                        "nodeType": "VariableDeclaration",
                        "src": "9425:61:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNINITIALIZED_POOL_CONTROLLER",
                        "nameLocation": "9451:29:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69277,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9425:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333435",
                            "id": 69278,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9483:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_345_by_1",
                                "typeString": "int_const 345"
                            },
                            "value": "345"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69282,
                        "nodeType": "VariableDeclaration",
                        "src": "9492:62:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SET_SWAP_FEE_DURING_FEE_CHANGE",
                        "nameLocation": "9518:30:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69280,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9492:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333436",
                            "id": 69281,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9551:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_346_by_1",
                                "typeString": "int_const 346"
                            },
                            "value": "346"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69285,
                        "nodeType": "VariableDeclaration",
                        "src": "9560:63:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SET_SWAP_FEE_PENDING_FEE_CHANGE",
                        "nameLocation": "9586:31:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69283,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9560:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333437",
                            "id": 69284,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9620:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_347_by_1",
                                "typeString": "int_const 347"
                            },
                            "value": "347"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69288,
                        "nodeType": "VariableDeclaration",
                        "src": "9629:66:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CHANGE_TOKENS_DURING_WEIGHT_CHANGE",
                        "nameLocation": "9655:34:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69286,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9629:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333438",
                            "id": 69287,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9692:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_348_by_1",
                                "typeString": "int_const 348"
                            },
                            "value": "348"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69291,
                        "nodeType": "VariableDeclaration",
                        "src": "9701:67:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CHANGE_TOKENS_PENDING_WEIGHT_CHANGE",
                        "nameLocation": "9727:35:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69289,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9701:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333439",
                            "id": 69290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9765:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_349_by_1",
                                "typeString": "int_const 349"
                            },
                            "value": "349"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69294,
                        "nodeType": "VariableDeclaration",
                        "src": "9774:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_WEIGHT",
                        "nameLocation": "9800:10:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69292,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9774:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333530",
                            "id": 69293,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9813:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_350_by_1",
                                "typeString": "int_const 350"
                            },
                            "value": "350"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69297,
                        "nodeType": "VariableDeclaration",
                        "src": "9822:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNAUTHORIZED_JOIN",
                        "nameLocation": "9848:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69295,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9822:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333531",
                            "id": 69296,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9868:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_351_by_1",
                                "typeString": "int_const 351"
                            },
                            "value": "351"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69300,
                        "nodeType": "VariableDeclaration",
                        "src": "9877:65:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_MANAGEMENT_AUM_FEE_PERCENTAGE",
                        "nameLocation": "9903:33:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69298,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9877:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333532",
                            "id": 69299,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9939:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_352_by_1",
                                "typeString": "int_const 352"
                            },
                            "value": "352"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69303,
                        "nodeType": "VariableDeclaration",
                        "src": "9948:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "FRACTIONAL_TARGET",
                        "nameLocation": "9974:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69301,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9948:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333533",
                            "id": 69302,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9994:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_353_by_1",
                                "typeString": "int_const 353"
                            },
                            "value": "353"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69306,
                        "nodeType": "VariableDeclaration",
                        "src": "10003:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADD_OR_REMOVE_BPT",
                        "nameLocation": "10029:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69304,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10003:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333534",
                            "id": 69305,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10049:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_354_by_1",
                                "typeString": "int_const 354"
                            },
                            "value": "354"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69309,
                        "nodeType": "VariableDeclaration",
                        "src": "10058:62:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_CIRCUIT_BREAKER_BOUNDS",
                        "nameLocation": "10084:30:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69307,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10058:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333535",
                            "id": 69308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10117:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_355_by_1",
                                "typeString": "int_const 355"
                            },
                            "value": "355"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69312,
                        "nodeType": "VariableDeclaration",
                        "src": "10126:55:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CIRCUIT_BREAKER_TRIPPED",
                        "nameLocation": "10152:23:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69310,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10126:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333536",
                            "id": 69311,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10178:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_356_by_1",
                                "typeString": "int_const 356"
                            },
                            "value": "356"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69315,
                        "nodeType": "VariableDeclaration",
                        "src": "10187:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MALICIOUS_QUERY_REVERT",
                        "nameLocation": "10213:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69313,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10187:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333537",
                            "id": 69314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10238:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_357_by_1",
                                "typeString": "int_const 357"
                            },
                            "value": "357"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69318,
                        "nodeType": "VariableDeclaration",
                        "src": "10247:52:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "JOINS_EXITS_DISABLED",
                        "nameLocation": "10273:20:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69316,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10247:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333538",
                            "id": 69317,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10296:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_358_by_1",
                                "typeString": "int_const 358"
                            },
                            "value": "358"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69321,
                        "nodeType": "VariableDeclaration",
                        "src": "10317:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "REENTRANCY",
                        "nameLocation": "10343:10:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69319,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10317:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343030",
                            "id": 69320,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10356:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_400_by_1",
                                "typeString": "int_const 400"
                            },
                            "value": "400"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69324,
                        "nodeType": "VariableDeclaration",
                        "src": "10365:50:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SENDER_NOT_ALLOWED",
                        "nameLocation": "10391:18:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69322,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10365:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343031",
                            "id": 69323,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10412:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_401_by_1",
                                "typeString": "int_const 401"
                            },
                            "value": "401"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69327,
                        "nodeType": "VariableDeclaration",
                        "src": "10421:38:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PAUSED",
                        "nameLocation": "10447:6:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69325,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10421:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343032",
                            "id": 69326,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10456:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_402_by_1",
                                "typeString": "int_const 402"
                            },
                            "value": "402"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69330,
                        "nodeType": "VariableDeclaration",
                        "src": "10465:52:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PAUSE_WINDOW_EXPIRED",
                        "nameLocation": "10491:20:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69328,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10465:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343033",
                            "id": 69329,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10514:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_403_by_1",
                                "typeString": "int_const 403"
                            },
                            "value": "403"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69333,
                        "nodeType": "VariableDeclaration",
                        "src": "10523:57:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_PAUSE_WINDOW_DURATION",
                        "nameLocation": "10549:25:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69331,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10523:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343034",
                            "id": 69332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10577:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_404_by_1",
                                "typeString": "int_const 404"
                            },
                            "value": "404"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69336,
                        "nodeType": "VariableDeclaration",
                        "src": "10586:58:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_BUFFER_PERIOD_DURATION",
                        "nameLocation": "10612:26:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69334,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10586:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343035",
                            "id": 69335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10641:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_405_by_1",
                                "typeString": "int_const 405"
                            },
                            "value": "405"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69339,
                        "nodeType": "VariableDeclaration",
                        "src": "10650:52:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_BALANCE",
                        "nameLocation": "10676:20:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69337,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10650:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343036",
                            "id": 69338,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10699:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_406_by_1",
                                "typeString": "int_const 406"
                            },
                            "value": "406"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69342,
                        "nodeType": "VariableDeclaration",
                        "src": "10708:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_ALLOWANCE",
                        "nameLocation": "10734:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69340,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10708:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343037",
                            "id": 69341,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10759:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_407_by_1",
                                "typeString": "int_const 407"
                            },
                            "value": "407"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69345,
                        "nodeType": "VariableDeclaration",
                        "src": "10768:64:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_FROM_ZERO_ADDRESS",
                        "nameLocation": "10794:32:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69343,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10768:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343038",
                            "id": 69344,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10829:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_408_by_1",
                                "typeString": "int_const 408"
                            },
                            "value": "408"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69348,
                        "nodeType": "VariableDeclaration",
                        "src": "10838:62:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_TO_ZERO_ADDRESS",
                        "nameLocation": "10864:30:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69346,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10838:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343039",
                            "id": 69347,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10897:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_409_by_1",
                                "typeString": "int_const 409"
                            },
                            "value": "409"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69351,
                        "nodeType": "VariableDeclaration",
                        "src": "10906:58:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_MINT_TO_ZERO_ADDRESS",
                        "nameLocation": "10932:26:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69349,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10906:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343130",
                            "id": 69350,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10961:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_410_by_1",
                                "typeString": "int_const 410"
                            },
                            "value": "410"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69354,
                        "nodeType": "VariableDeclaration",
                        "src": "10970:60:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_BURN_FROM_ZERO_ADDRESS",
                        "nameLocation": "10996:28:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69352,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10970:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343131",
                            "id": 69353,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11027:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_411_by_1",
                                "typeString": "int_const 411"
                            },
                            "value": "411"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69357,
                        "nodeType": "VariableDeclaration",
                        "src": "11036:63:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_APPROVE_FROM_ZERO_ADDRESS",
                        "nameLocation": "11062:31:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69355,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11036:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343132",
                            "id": 69356,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11096:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_412_by_1",
                                "typeString": "int_const 412"
                            },
                            "value": "412"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69360,
                        "nodeType": "VariableDeclaration",
                        "src": "11105:61:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_APPROVE_TO_ZERO_ADDRESS",
                        "nameLocation": "11131:29:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69358,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11105:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343133",
                            "id": 69359,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11163:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_413_by_1",
                                "typeString": "int_const 413"
                            },
                            "value": "413"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69363,
                        "nodeType": "VariableDeclaration",
                        "src": "11172:64:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_EXCEEDS_ALLOWANCE",
                        "nameLocation": "11198:32:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69361,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11172:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343134",
                            "id": 69362,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11233:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_414_by_1",
                                "typeString": "int_const 414"
                            },
                            "value": "414"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69366,
                        "nodeType": "VariableDeclaration",
                        "src": "11242:68:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_DECREASED_ALLOWANCE_BELOW_ZERO",
                        "nameLocation": "11268:36:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69364,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11242:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343135",
                            "id": 69365,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11307:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_415_by_1",
                                "typeString": "int_const 415"
                            },
                            "value": "415"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69369,
                        "nodeType": "VariableDeclaration",
                        "src": "11316:62:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_EXCEEDS_BALANCE",
                        "nameLocation": "11342:30:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69367,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11316:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343136",
                            "id": 69368,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11375:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_416_by_1",
                                "typeString": "int_const 416"
                            },
                            "value": "416"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69372,
                        "nodeType": "VariableDeclaration",
                        "src": "11384:60:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_BURN_EXCEEDS_ALLOWANCE",
                        "nameLocation": "11410:28:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69370,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11384:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343137",
                            "id": 69371,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11441:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_417_by_1",
                                "typeString": "int_const 417"
                            },
                            "value": "417"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69375,
                        "nodeType": "VariableDeclaration",
                        "src": "11450:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SAFE_ERC20_CALL_FAILED",
                        "nameLocation": "11476:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69373,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11450:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343138",
                            "id": 69374,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11501:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_418_by_1",
                                "typeString": "int_const 418"
                            },
                            "value": "418"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69378,
                        "nodeType": "VariableDeclaration",
                        "src": "11510:60:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_INSUFFICIENT_BALANCE",
                        "nameLocation": "11536:28:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69376,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11510:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343139",
                            "id": 69377,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11567:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_419_by_1",
                                "typeString": "int_const 419"
                            },
                            "value": "419"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69381,
                        "nodeType": "VariableDeclaration",
                        "src": "11576:57:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_CANNOT_SEND_VALUE",
                        "nameLocation": "11602:25:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69379,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11576:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343230",
                            "id": 69380,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11630:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_420_by_1",
                                "typeString": "int_const 420"
                            },
                            "value": "420"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69384,
                        "nodeType": "VariableDeclaration",
                        "src": "11639:63:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SAFE_CAST_VALUE_CANT_FIT_INT256",
                        "nameLocation": "11665:31:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69382,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11639:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343231",
                            "id": 69383,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11699:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_421_by_1",
                                "typeString": "int_const 421"
                            },
                            "value": "421"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69387,
                        "nodeType": "VariableDeclaration",
                        "src": "11708:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "GRANT_SENDER_NOT_ADMIN",
                        "nameLocation": "11734:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69385,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11708:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343232",
                            "id": 69386,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11759:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_422_by_1",
                                "typeString": "int_const 422"
                            },
                            "value": "422"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69390,
                        "nodeType": "VariableDeclaration",
                        "src": "11768:55:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "REVOKE_SENDER_NOT_ADMIN",
                        "nameLocation": "11794:23:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69388,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11768:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343233",
                            "id": 69389,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11820:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_423_by_1",
                                "typeString": "int_const 423"
                            },
                            "value": "423"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69393,
                        "nodeType": "VariableDeclaration",
                        "src": "11829:59:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RENOUNCE_SENDER_NOT_ALLOWED",
                        "nameLocation": "11855:27:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69391,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11829:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343234",
                            "id": 69392,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11885:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_424_by_1",
                                "typeString": "int_const 424"
                            },
                            "value": "424"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69396,
                        "nodeType": "VariableDeclaration",
                        "src": "11894:53:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BUFFER_PERIOD_EXPIRED",
                        "nameLocation": "11920:21:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69394,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11894:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343235",
                            "id": 69395,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11944:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_425_by_1",
                                "typeString": "int_const 425"
                            },
                            "value": "425"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69399,
                        "nodeType": "VariableDeclaration",
                        "src": "11953:51:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_IS_NOT_OWNER",
                        "nameLocation": "11979:19:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69397,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11953:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343236",
                            "id": 69398,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12001:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_426_by_1",
                                "typeString": "int_const 426"
                            },
                            "value": "426"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69402,
                        "nodeType": "VariableDeclaration",
                        "src": "12010:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NEW_OWNER_IS_ZERO",
                        "nameLocation": "12036:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69400,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12010:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343237",
                            "id": 69401,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12056:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_427_by_1",
                                "typeString": "int_const 427"
                            },
                            "value": "427"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69405,
                        "nodeType": "VariableDeclaration",
                        "src": "12065:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CODE_DEPLOYMENT_FAILED",
                        "nameLocation": "12091:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69403,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12065:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343238",
                            "id": 69404,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12116:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_428_by_1",
                                "typeString": "int_const 428"
                            },
                            "value": "428"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69408,
                        "nodeType": "VariableDeclaration",
                        "src": "12125:52:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALL_TO_NON_CONTRACT",
                        "nameLocation": "12151:20:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69406,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12125:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343239",
                            "id": 69407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12174:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_429_by_1",
                                "typeString": "int_const 429"
                            },
                            "value": "429"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69411,
                        "nodeType": "VariableDeclaration",
                        "src": "12183:53:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "LOW_LEVEL_CALL_FAILED",
                        "nameLocation": "12209:21:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69409,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12183:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343330",
                            "id": 69410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12233:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_430_by_1",
                                "typeString": "int_const 430"
                            },
                            "value": "430"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69414,
                        "nodeType": "VariableDeclaration",
                        "src": "12242:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_PAUSED",
                        "nameLocation": "12268:10:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69412,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12242:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343331",
                            "id": 69413,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12281:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_431_by_1",
                                "typeString": "int_const 431"
                            },
                            "value": "431"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69417,
                        "nodeType": "VariableDeclaration",
                        "src": "12290:59:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_ALREADY_ALLOWLISTED",
                        "nameLocation": "12316:27:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69415,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12290:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343332",
                            "id": 69416,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12346:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_432_by_1",
                                "typeString": "int_const 432"
                            },
                            "value": "432"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69420,
                        "nodeType": "VariableDeclaration",
                        "src": "12355:55:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_NOT_ALLOWLISTED",
                        "nameLocation": "12381:23:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69418,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12355:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343333",
                            "id": 69419,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12407:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_433_by_1",
                                "typeString": "int_const 433"
                            },
                            "value": "433"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69423,
                        "nodeType": "VariableDeclaration",
                        "src": "12416:58:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_BURN_EXCEEDS_BALANCE",
                        "nameLocation": "12442:26:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69421,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12416:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343334",
                            "id": 69422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12471:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_434_by_1",
                                "typeString": "int_const 434"
                            },
                            "value": "434"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69426,
                        "nodeType": "VariableDeclaration",
                        "src": "12480:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_OPERATION",
                        "nameLocation": "12506:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69424,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12480:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343335",
                            "id": 69425,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12526:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_435_by_1",
                                "typeString": "int_const 435"
                            },
                            "value": "435"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69429,
                        "nodeType": "VariableDeclaration",
                        "src": "12535:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CODEC_OVERFLOW",
                        "nameLocation": "12561:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69427,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12535:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343336",
                            "id": 69428,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12578:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_436_by_1",
                                "typeString": "int_const 436"
                            },
                            "value": "436"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69432,
                        "nodeType": "VariableDeclaration",
                        "src": "12587:48:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "IN_RECOVERY_MODE",
                        "nameLocation": "12613:16:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69430,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12587:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343337",
                            "id": 69431,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12632:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_437_by_1",
                                "typeString": "int_const 437"
                            },
                            "value": "437"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69435,
                        "nodeType": "VariableDeclaration",
                        "src": "12641:52:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_IN_RECOVERY_MODE",
                        "nameLocation": "12667:20:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69433,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12641:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343338",
                            "id": 69434,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12690:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_438_by_1",
                                "typeString": "int_const 438"
                            },
                            "value": "438"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69438,
                        "nodeType": "VariableDeclaration",
                        "src": "12699:47:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INDUCED_FAILURE",
                        "nameLocation": "12725:15:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69436,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12699:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343339",
                            "id": 69437,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12743:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_439_by_1",
                                "typeString": "int_const 439"
                            },
                            "value": "439"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69441,
                        "nodeType": "VariableDeclaration",
                        "src": "12752:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "EXPIRED_SIGNATURE",
                        "nameLocation": "12778:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69439,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12752:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343430",
                            "id": 69440,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12798:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_440_by_1",
                                "typeString": "int_const 440"
                            },
                            "value": "440"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69444,
                        "nodeType": "VariableDeclaration",
                        "src": "12807:51:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MALFORMED_SIGNATURE",
                        "nameLocation": "12833:19:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69442,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12807:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343431",
                            "id": 69443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12855:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_441_by_1",
                                "typeString": "int_const 441"
                            },
                            "value": "441"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69447,
                        "nodeType": "VariableDeclaration",
                        "src": "12864:63:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SAFE_CAST_VALUE_CANT_FIT_UINT64",
                        "nameLocation": "12890:31:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69445,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12864:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343432",
                            "id": 69446,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12924:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_442_by_1",
                                "typeString": "int_const 442"
                            },
                            "value": "442"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69450,
                        "nodeType": "VariableDeclaration",
                        "src": "12933:50:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_FEE_TYPE",
                        "nameLocation": "12959:18:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69448,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12933:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343433",
                            "id": 69449,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12980:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_443_by_1",
                                "typeString": "int_const 443"
                            },
                            "value": "443"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69453,
                        "nodeType": "VariableDeclaration",
                        "src": "12989:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BURN_FROM_ZERO",
                        "nameLocation": "13015:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69451,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12989:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343434",
                            "id": 69452,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13032:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_444_by_1",
                                "typeString": "int_const 444"
                            },
                            "value": "444"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69456,
                        "nodeType": "VariableDeclaration",
                        "src": "13055:47:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_POOL_ID",
                        "nameLocation": "13081:15:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69454,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13055:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353030",
                            "id": 69455,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13099:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_500_by_1",
                                "typeString": "int_const 500"
                            },
                            "value": "500"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69459,
                        "nodeType": "VariableDeclaration",
                        "src": "13108:47:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_NOT_POOL",
                        "nameLocation": "13134:15:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69457,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13108:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353031",
                            "id": 69458,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13152:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_501_by_1",
                                "typeString": "int_const 501"
                            },
                            "value": "501"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69462,
                        "nodeType": "VariableDeclaration",
                        "src": "13161:56:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SENDER_NOT_ASSET_MANAGER",
                        "nameLocation": "13187:24:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69460,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13161:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353032",
                            "id": 69461,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13214:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_502_by_1",
                                "typeString": "int_const 502"
                            },
                            "value": "502"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69465,
                        "nodeType": "VariableDeclaration",
                        "src": "13223:57:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "USER_DOESNT_ALLOW_RELAYER",
                        "nameLocation": "13249:25:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69463,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13223:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353033",
                            "id": 69464,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13277:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_503_by_1",
                                "typeString": "int_const 503"
                            },
                            "value": "503"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69468,
                        "nodeType": "VariableDeclaration",
                        "src": "13286:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_SIGNATURE",
                        "nameLocation": "13312:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69466,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13286:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353034",
                            "id": 69467,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13332:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_504_by_1",
                                "typeString": "int_const 504"
                            },
                            "value": "504"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69471,
                        "nodeType": "VariableDeclaration",
                        "src": "13341:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "EXIT_BELOW_MIN",
                        "nameLocation": "13367:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69469,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13341:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353035",
                            "id": 69470,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13384:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_505_by_1",
                                "typeString": "int_const 505"
                            },
                            "value": "505"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69474,
                        "nodeType": "VariableDeclaration",
                        "src": "13393:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "JOIN_ABOVE_MAX",
                        "nameLocation": "13419:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69472,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13393:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353036",
                            "id": 69473,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13436:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_506_by_1",
                                "typeString": "int_const 506"
                            },
                            "value": "506"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69477,
                        "nodeType": "VariableDeclaration",
                        "src": "13445:42:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAP_LIMIT",
                        "nameLocation": "13471:10:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69475,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13445:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353037",
                            "id": 69476,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13484:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_507_by_1",
                                "typeString": "int_const 507"
                            },
                            "value": "507"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69480,
                        "nodeType": "VariableDeclaration",
                        "src": "13493:45:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAP_DEADLINE",
                        "nameLocation": "13519:13:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69478,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13493:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353038",
                            "id": 69479,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13535:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_508_by_1",
                                "typeString": "int_const 508"
                            },
                            "value": "508"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69483,
                        "nodeType": "VariableDeclaration",
                        "src": "13544:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CANNOT_SWAP_SAME_TOKEN",
                        "nameLocation": "13570:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69481,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13544:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353039",
                            "id": 69482,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13595:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_509_by_1",
                                "typeString": "int_const 509"
                            },
                            "value": "509"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69486,
                        "nodeType": "VariableDeclaration",
                        "src": "13604:60:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNKNOWN_AMOUNT_IN_FIRST_SWAP",
                        "nameLocation": "13630:28:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69484,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13604:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353130",
                            "id": 69485,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13661:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_510_by_1",
                                "typeString": "int_const 510"
                            },
                            "value": "510"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69489,
                        "nodeType": "VariableDeclaration",
                        "src": "13670:60:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MALCONSTRUCTED_MULTIHOP_SWAP",
                        "nameLocation": "13696:28:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69487,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13670:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353131",
                            "id": 69488,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13727:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_511_by_1",
                                "typeString": "int_const 511"
                            },
                            "value": "511"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69492,
                        "nodeType": "VariableDeclaration",
                        "src": "13736:57:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INTERNAL_BALANCE_OVERFLOW",
                        "nameLocation": "13762:25:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69490,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13736:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353132",
                            "id": 69491,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13790:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_512_by_1",
                                "typeString": "int_const 512"
                            },
                            "value": "512"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69495,
                        "nodeType": "VariableDeclaration",
                        "src": "13799:61:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_INTERNAL_BALANCE",
                        "nameLocation": "13825:29:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69493,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13799:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353133",
                            "id": 69494,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13857:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_513_by_1",
                                "typeString": "int_const 513"
                            },
                            "value": "513"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69498,
                        "nodeType": "VariableDeclaration",
                        "src": "13866:60:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_ETH_INTERNAL_BALANCE",
                        "nameLocation": "13892:28:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69496,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13866:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353134",
                            "id": 69497,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13923:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_514_by_1",
                                "typeString": "int_const 514"
                            },
                            "value": "514"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69501,
                        "nodeType": "VariableDeclaration",
                        "src": "13932:57:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_POST_LOAN_BALANCE",
                        "nameLocation": "13958:25:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69499,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13932:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353135",
                            "id": 69500,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13986:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_515_by_1",
                                "typeString": "int_const 515"
                            },
                            "value": "515"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69504,
                        "nodeType": "VariableDeclaration",
                        "src": "13995:48:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_ETH",
                        "nameLocation": "14021:16:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69502,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13995:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353136",
                            "id": 69503,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14040:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_516_by_1",
                                "typeString": "int_const 516"
                            },
                            "value": "516"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69507,
                        "nodeType": "VariableDeclaration",
                        "src": "14049:47:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNALLOCATED_ETH",
                        "nameLocation": "14075:15:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69505,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14049:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353137",
                            "id": 69506,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14093:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_517_by_1",
                                "typeString": "int_const 517"
                            },
                            "value": "517"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69510,
                        "nodeType": "VariableDeclaration",
                        "src": "14102:44:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ETH_TRANSFER",
                        "nameLocation": "14128:12:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69508,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14102:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353138",
                            "id": 69509,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14143:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_518_by_1",
                                "typeString": "int_const 518"
                            },
                            "value": "518"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69513,
                        "nodeType": "VariableDeclaration",
                        "src": "14152:55:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CANNOT_USE_ETH_SENTINEL",
                        "nameLocation": "14178:23:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69511,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14152:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353139",
                            "id": 69512,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14204:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_519_by_1",
                                "typeString": "int_const 519"
                            },
                            "value": "519"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69516,
                        "nodeType": "VariableDeclaration",
                        "src": "14213:47:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKENS_MISMATCH",
                        "nameLocation": "14239:15:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69514,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14213:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353230",
                            "id": 69515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14257:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_520_by_1",
                                "typeString": "int_const 520"
                            },
                            "value": "520"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69519,
                        "nodeType": "VariableDeclaration",
                        "src": "14266:52:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKEN_NOT_REGISTERED",
                        "nameLocation": "14292:20:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69517,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14266:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353231",
                            "id": 69518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14315:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_521_by_1",
                                "typeString": "int_const 521"
                            },
                            "value": "521"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69522,
                        "nodeType": "VariableDeclaration",
                        "src": "14324:56:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKEN_ALREADY_REGISTERED",
                        "nameLocation": "14350:24:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69520,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14324:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353232",
                            "id": 69521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14377:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_522_by_1",
                                "typeString": "int_const 522"
                            },
                            "value": "522"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69525,
                        "nodeType": "VariableDeclaration",
                        "src": "14386:50:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKENS_ALREADY_SET",
                        "nameLocation": "14412:18:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69523,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14386:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353233",
                            "id": 69524,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14433:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_523_by_1",
                                "typeString": "int_const 523"
                            },
                            "value": "523"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69528,
                        "nodeType": "VariableDeclaration",
                        "src": "14442:55:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKENS_LENGTH_MUST_BE_2",
                        "nameLocation": "14468:23:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69526,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14442:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353234",
                            "id": 69527,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14494:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_524_by_1",
                                "typeString": "int_const 524"
                            },
                            "value": "524"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69531,
                        "nodeType": "VariableDeclaration",
                        "src": "14503:53:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NONZERO_TOKEN_BALANCE",
                        "nameLocation": "14529:21:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69529,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14503:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353235",
                            "id": 69530,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14553:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_525_by_1",
                                "typeString": "int_const 525"
                            },
                            "value": "525"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69534,
                        "nodeType": "VariableDeclaration",
                        "src": "14562:54:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BALANCE_TOTAL_OVERFLOW",
                        "nameLocation": "14588:22:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69532,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14562:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353236",
                            "id": 69533,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14613:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_526_by_1",
                                "typeString": "int_const 526"
                            },
                            "value": "526"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69537,
                        "nodeType": "VariableDeclaration",
                        "src": "14622:46:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "POOL_NO_TOKENS",
                        "nameLocation": "14648:14:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69535,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14622:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353237",
                            "id": 69536,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14665:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_527_by_1",
                                "typeString": "int_const 527"
                            },
                            "value": "527"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69540,
                        "nodeType": "VariableDeclaration",
                        "src": "14674:63:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_FLASH_LOAN_BALANCE",
                        "nameLocation": "14700:31:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69538,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14674:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353238",
                            "id": 69539,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14734:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_528_by_1",
                                "typeString": "int_const 528"
                            },
                            "value": "528"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69543,
                        "nodeType": "VariableDeclaration",
                        "src": "14756:60:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAP_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "14782:28:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69541,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14756:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "363030",
                            "id": 69542,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14813:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_600_by_1",
                                "typeString": "int_const 600"
                            },
                            "value": "600"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69546,
                        "nodeType": "VariableDeclaration",
                        "src": "14822:66:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "FLASH_LOAN_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "14848:34:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69544,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14822:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "363031",
                            "id": 69545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14885:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_601_by_1",
                                "typeString": "int_const 601"
                            },
                            "value": "601"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69549,
                        "nodeType": "VariableDeclaration",
                        "src": "14894:66:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT",
                        "nameLocation": "14920:34:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69547,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14894:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "363032",
                            "id": 69548,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14957:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_602_by_1",
                                "typeString": "int_const 602"
                            },
                            "value": "602"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69552,
                        "nodeType": "VariableDeclaration",
                        "src": "14966:59:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AUM_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "14992:27:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69550,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14966:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "363033",
                            "id": 69551,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15022:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_603_by_1",
                                "typeString": "int_const 603"
                            },
                            "value": "603"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69555,
                        "nodeType": "VariableDeclaration",
                        "src": "15051:64:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SPLITTER_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "15077:32:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69553,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "15051:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "373030",
                            "id": 69554,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15112:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_700_by_1",
                                "typeString": "int_const 700"
                            },
                            "value": "700"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69558,
                        "nodeType": "VariableDeclaration",
                        "src": "15134:45:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNIMPLEMENTED",
                        "nameLocation": "15160:13:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69556,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "15134:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "393938",
                            "id": 69557,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15176:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_998_by_1",
                                "typeString": "int_const 998"
                            },
                            "value": "998"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 69561,
                        "nodeType": "VariableDeclaration",
                        "src": "15185:49:127",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SHOULD_NOT_HAPPEN",
                        "nameLocation": "15211:17:127",
                        "scope": 69562,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 69559,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "15185:7:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "393939",
                            "id": 69560,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15231:3:127",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_999_by_1",
                                "typeString": "int_const 999"
                            },
                            "value": "999"
                        },
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "BalancerErrors",
                "contractDependencies": [],
                "contractKind": "library",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    69562
                ],
                "name": "BalancerErrors",
                "nameLocation": "5214:14:127",
                "scope": 69563,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "GPL-3.0-or-later"
    },
    "id": 127
};
