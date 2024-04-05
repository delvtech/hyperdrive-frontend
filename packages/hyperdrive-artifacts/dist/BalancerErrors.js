export const BalancerErrors = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208161fa77f4649efc35ad41fe80d36387f51a427ad52b424b06dc6466f69a61c164736f6c63430008140033",
        "sourceMap": "5206:10031:176:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;5206:10031:176;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208161fa77f4649efc35ad41fe80d36387f51a427ad52b424b06dc6466f69a61c164736f6c63430008140033",
        "sourceMap": "5206:10031:176:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/3rdPartyLibs/BalancerErrors.sol\":\"BalancerErrors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"test/3rdPartyLibs/BalancerErrors.sol\":{\"keccak256\":\"0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611\",\"dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU\"]}},\"version\":1}",
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
        "id": 73770,
        "exportedSymbols": {
            "BalancerErrors": [
                73769
            ],
            "_require": [
                73213,
                73232
            ],
            "_revert": [
                73244,
                73264
            ]
        },
        "nodeType": "SourceUnit",
        "src": "688:14550:176",
        "nodes": [
            {
                "id": 73197,
                "nodeType": "PragmaDirective",
                "src": "688:31:176",
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
                "id": 73213,
                "nodeType": "FunctionDefinition",
                "src": "926:101:176",
                "nodes": [],
                "body": {
                    "id": 73212,
                    "nodeType": "Block",
                    "src": "984:43:176",
                    "nodes": [],
                    "statements": [
                        {
                            "condition": {
                                "id": 73206,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "994:10:176",
                                "subExpression": {
                                    "id": 73205,
                                    "name": "condition",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 73200,
                                    "src": "995:9:176",
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
                            "id": 73211,
                            "nodeType": "IfStatement",
                            "src": "990:34:176",
                            "trueBody": {
                                "expression": {
                                    "arguments": [
                                        {
                                            "id": 73208,
                                            "name": "errorCode",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73202,
                                            "src": "1014:9:176",
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
                                        "id": 73207,
                                        "name": "_revert",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [
                                            73244,
                                            73264
                                        ],
                                        "referencedDeclaration": 73244,
                                        "src": "1006:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                                            "typeString": "function (uint256) pure"
                                        }
                                    },
                                    "id": 73209,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1006:18:176",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                    }
                                },
                                "id": 73210,
                                "nodeType": "ExpressionStatement",
                                "src": "1006:18:176"
                            }
                        }
                    ]
                },
                "documentation": {
                    "id": 73198,
                    "nodeType": "StructuredDocumentation",
                    "src": "741:184:176",
                    "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.\n Uses the default 'BAL' prefix for the error code"
                },
                "implemented": true,
                "kind": "freeFunction",
                "modifiers": [],
                "name": "_require",
                "nameLocation": "935:8:176",
                "parameters": {
                    "id": 73203,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 73200,
                            "mutability": "mutable",
                            "name": "condition",
                            "nameLocation": "949:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73213,
                            "src": "944:14:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 73199,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "944:4:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 73202,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "968:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73213,
                            "src": "960:17:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 73201,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "960:7:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "visibility": "internal"
                        }
                    ],
                    "src": "943:35:176"
                },
                "returnParameters": {
                    "id": 73204,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "984:0:176"
                },
                "scope": 73770,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 73232,
                "nodeType": "FunctionDefinition",
                "src": "1162:124:176",
                "nodes": [],
                "body": {
                    "id": 73231,
                    "nodeType": "Block",
                    "src": "1235:51:176",
                    "nodes": [],
                    "statements": [
                        {
                            "condition": {
                                "id": 73224,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "1245:10:176",
                                "subExpression": {
                                    "id": 73223,
                                    "name": "condition",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 73216,
                                    "src": "1246:9:176",
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
                            "id": 73230,
                            "nodeType": "IfStatement",
                            "src": "1241:42:176",
                            "trueBody": {
                                "expression": {
                                    "arguments": [
                                        {
                                            "id": 73226,
                                            "name": "errorCode",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73218,
                                            "src": "1265:9:176",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        {
                                            "id": 73227,
                                            "name": "prefix",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73220,
                                            "src": "1276:6:176",
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
                                        "id": 73225,
                                        "name": "_revert",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [
                                            73244,
                                            73264
                                        ],
                                        "referencedDeclaration": 73264,
                                        "src": "1257:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                                            "typeString": "function (uint256,bytes3) pure"
                                        }
                                    },
                                    "id": 73228,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1257:26:176",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                    }
                                },
                                "id": 73229,
                                "nodeType": "ExpressionStatement",
                                "src": "1257:26:176"
                            }
                        }
                    ]
                },
                "documentation": {
                    "id": 73214,
                    "nodeType": "StructuredDocumentation",
                    "src": "1029:132:176",
                    "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported."
                },
                "implemented": true,
                "kind": "freeFunction",
                "modifiers": [],
                "name": "_require",
                "nameLocation": "1171:8:176",
                "parameters": {
                    "id": 73221,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 73216,
                            "mutability": "mutable",
                            "name": "condition",
                            "nameLocation": "1185:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73232,
                            "src": "1180:14:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 73215,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1180:4:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 73218,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "1204:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73232,
                            "src": "1196:17:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 73217,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1196:7:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 73220,
                            "mutability": "mutable",
                            "name": "prefix",
                            "nameLocation": "1222:6:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73232,
                            "src": "1215:13:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes3",
                                "typeString": "bytes3"
                            },
                            "typeName": {
                                "id": 73219,
                                "name": "bytes3",
                                "nodeType": "ElementaryTypeName",
                                "src": "1215:6:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes3",
                                    "typeString": "bytes3"
                                }
                            },
                            "visibility": "internal"
                        }
                    ],
                    "src": "1179:50:176"
                },
                "returnParameters": {
                    "id": 73222,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1235:0:176"
                },
                "scope": 73770,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 73244,
                "nodeType": "FunctionDefinition",
                "src": "1445:126:176",
                "nodes": [],
                "body": {
                    "id": 73243,
                    "nodeType": "Block",
                    "src": "1486:85:176",
                    "nodes": [],
                    "statements": [
                        {
                            "expression": {
                                "arguments": [
                                    {
                                        "id": 73239,
                                        "name": "errorCode",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 73235,
                                        "src": "1500:9:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    {
                                        "hexValue": "3078343234313463",
                                        "id": 73240,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1511:8:176",
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
                                    "id": 73238,
                                    "name": "_revert",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                        73244,
                                        73264
                                    ],
                                    "referencedDeclaration": 73264,
                                    "src": "1492:7:176",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                                        "typeString": "function (uint256,bytes3) pure"
                                    }
                                },
                                "id": 73241,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1492:28:176",
                                "tryCall": false,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                }
                            },
                            "id": 73242,
                            "nodeType": "ExpressionStatement",
                            "src": "1492:28:176"
                        }
                    ]
                },
                "documentation": {
                    "id": 73233,
                    "nodeType": "StructuredDocumentation",
                    "src": "1288:156:176",
                    "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.\n Uses the default 'BAL' prefix for the error code"
                },
                "implemented": true,
                "kind": "freeFunction",
                "modifiers": [],
                "name": "_revert",
                "nameLocation": "1454:7:176",
                "parameters": {
                    "id": 73236,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 73235,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "1470:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73244,
                            "src": "1462:17:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 73234,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1462:7:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "visibility": "internal"
                        }
                    ],
                    "src": "1461:19:176"
                },
                "returnParameters": {
                    "id": 73237,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1486:0:176"
                },
                "scope": 73770,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 73264,
                "nodeType": "FunctionDefinition",
                "src": "1678:3526:176",
                "nodes": [],
                "body": {
                    "id": 73263,
                    "nodeType": "Block",
                    "src": "1734:3470:176",
                    "nodes": [],
                    "statements": [
                        {
                            "assignments": [
                                73253
                            ],
                            "declarations": [
                                {
                                    "constant": false,
                                    "id": 73253,
                                    "mutability": "mutable",
                                    "name": "prefixUint",
                                    "nameLocation": "1748:10:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73263,
                                    "src": "1740:18:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73252,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1740:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "id": 73261,
                            "initialValue": {
                                "arguments": [
                                    {
                                        "arguments": [
                                            {
                                                "id": 73258,
                                                "name": "prefix",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73249,
                                                "src": "1776:6:176",
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
                                            "id": 73257,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1769:6:176",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint24_$",
                                                "typeString": "type(uint24)"
                                            },
                                            "typeName": {
                                                "id": 73256,
                                                "name": "uint24",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1769:6:176",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 73259,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1769:14:176",
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
                                    "id": 73255,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "1761:7:176",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                        "id": 73254,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1761:7:176",
                                        "typeDescriptions": {}
                                    }
                                },
                                "id": 73260,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1761:23:176",
                                "tryCall": false,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "VariableDeclarationStatement",
                            "src": "1740:44:176"
                        },
                        {
                            "AST": {
                                "nodeType": "YulBlock",
                                "src": "2573:2629:176",
                                "statements": [
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2847:42:176",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "errorCode",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2868:9:176"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2879:2:176",
                                                            "type": "",
                                                            "value": "10"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2864:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2864:18:176"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2884:4:176",
                                                    "type": "",
                                                    "value": "0x30"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "2860:3:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2860:29:176"
                                        },
                                        "variables": [
                                            {
                                                "name": "units",
                                                "nodeType": "YulTypedName",
                                                "src": "2851:5:176",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "2899:31:176",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "errorCode",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2916:9:176"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2927:2:176",
                                                    "type": "",
                                                    "value": "10"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "2912:3:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2912:18:176"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "errorCode",
                                                "nodeType": "YulIdentifier",
                                                "src": "2899:9:176"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2939:43:176",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "errorCode",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2961:9:176"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2972:2:176",
                                                            "type": "",
                                                            "value": "10"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2957:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2957:18:176"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2977:4:176",
                                                    "type": "",
                                                    "value": "0x30"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "2953:3:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2953:29:176"
                                        },
                                        "variables": [
                                            {
                                                "name": "tenths",
                                                "nodeType": "YulTypedName",
                                                "src": "2943:6:176",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "2992:31:176",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "errorCode",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3009:9:176"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3020:2:176",
                                                    "type": "",
                                                    "value": "10"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "3005:3:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3005:18:176"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "errorCode",
                                                "nodeType": "YulIdentifier",
                                                "src": "2992:9:176"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3032:45:176",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "errorCode",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3056:9:176"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3067:2:176",
                                                            "type": "",
                                                            "value": "10"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mod",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3052:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3052:18:176"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3072:4:176",
                                                    "type": "",
                                                    "value": "0x30"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "3048:3:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3048:29:176"
                                        },
                                        "variables": [
                                            {
                                                "name": "hundreds",
                                                "nodeType": "YulTypedName",
                                                "src": "3036:8:176",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3710:61:176",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3737:2:176",
                                                    "type": "",
                                                    "value": "24"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3745:4:176",
                                                            "type": "",
                                                            "value": "0x23"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3755:1:176",
                                                                    "type": "",
                                                                    "value": "8"
                                                                },
                                                                {
                                                                    "name": "prefixUint",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3758:10:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "shl",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3751:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3751:18:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3741:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3741:29:176"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "shl",
                                                "nodeType": "YulIdentifier",
                                                "src": "3733:3:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3733:38:176"
                                        },
                                        "variables": [
                                            {
                                                "name": "formattedPrefix",
                                                "nodeType": "YulTypedName",
                                                "src": "3714:15:176",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3781:182:176",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3818:3:176",
                                                    "type": "",
                                                    "value": "200"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "formattedPrefix",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3856:15:176"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "units",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3897:5:176"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "3908:1:176",
                                                                                    "type": "",
                                                                                    "value": "8"
                                                                                },
                                                                                {
                                                                                    "name": "tenths",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "3911:6:176"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "shl",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3904:3:176"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "3904:14:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "add",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3893:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3893:26:176"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "3925:2:176",
                                                                            "type": "",
                                                                            "value": "16"
                                                                        },
                                                                        {
                                                                            "name": "hundreds",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3929:8:176"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "shl",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3921:3:176"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3921:17:176"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3889:3:176"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3889:50:176"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3835:3:176"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3835:118:176"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "shl",
                                                "nodeType": "YulIdentifier",
                                                "src": "3801:3:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3801:162:176"
                                        },
                                        "variables": [
                                            {
                                                "name": "revertReason",
                                                "nodeType": "YulTypedName",
                                                "src": "3785:12:176",
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
                                                    "src": "4491:3:176",
                                                    "type": "",
                                                    "value": "0x0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4508:66:176",
                                                    "type": "",
                                                    "value": "0x08c379a000000000000000000000000000000000000000000000000000000000"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4471:6:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4471:113:176"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4471:113:176"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4730:4:176",
                                                    "type": "",
                                                    "value": "0x04"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4748:66:176",
                                                    "type": "",
                                                    "value": "0x0000000000000000000000000000000000000000000000000000000000000020"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4710:6:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4710:114:176"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4710:114:176"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4893:4:176",
                                                    "type": "",
                                                    "value": "0x24"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4899:1:176",
                                                    "type": "",
                                                    "value": "7"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4886:6:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4886:15:176"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4886:15:176"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4966:4:176",
                                                    "type": "",
                                                    "value": "0x44"
                                                },
                                                {
                                                    "name": "revertReason",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4972:12:176"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4959:6:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4959:26:176"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4959:26:176"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5189:1:176",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "5192:3:176",
                                                    "type": "",
                                                    "value": "100"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "5182:6:176"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "5182:14:176"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "5182:14:176"
                                    }
                                ]
                            },
                            "evmVersion": "paris",
                            "externalReferences": [
                                {
                                    "declaration": 73247,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2868:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73247,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2899:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73247,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2916:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73247,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2961:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73247,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2992:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73247,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "3009:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73247,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "3056:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73253,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "3758:10:176",
                                    "valueSize": 1
                                }
                            ],
                            "id": 73262,
                            "nodeType": "InlineAssembly",
                            "src": "2564:2638:176"
                        }
                    ]
                },
                "documentation": {
                    "id": 73245,
                    "nodeType": "StructuredDocumentation",
                    "src": "1573:104:176",
                    "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported."
                },
                "implemented": true,
                "kind": "freeFunction",
                "modifiers": [],
                "name": "_revert",
                "nameLocation": "1687:7:176",
                "parameters": {
                    "id": 73250,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 73247,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "1703:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73264,
                            "src": "1695:17:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 73246,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1695:7:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "id": 73249,
                            "mutability": "mutable",
                            "name": "prefix",
                            "nameLocation": "1721:6:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73264,
                            "src": "1714:13:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes3",
                                "typeString": "bytes3"
                            },
                            "typeName": {
                                "id": 73248,
                                "name": "bytes3",
                                "nodeType": "ElementaryTypeName",
                                "src": "1714:6:176",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes3",
                                    "typeString": "bytes3"
                                }
                            },
                            "visibility": "internal"
                        }
                    ],
                    "src": "1694:34:176"
                },
                "returnParameters": {
                    "id": 73251,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1734:0:176"
                },
                "scope": 73770,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 73769,
                "nodeType": "ContractDefinition",
                "src": "5206:10031:176",
                "nodes": [
                    {
                        "id": 73267,
                        "nodeType": "VariableDeclaration",
                        "src": "5247:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADD_OVERFLOW",
                        "nameLocation": "5273:12:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73265,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5247:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "30",
                            "id": 73266,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5288:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                            },
                            "value": "0"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73270,
                        "nodeType": "VariableDeclaration",
                        "src": "5295:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SUB_OVERFLOW",
                        "nameLocation": "5321:12:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73268,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5295:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "31",
                            "id": 73269,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5336:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                            },
                            "value": "1"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73273,
                        "nodeType": "VariableDeclaration",
                        "src": "5343:43:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SUB_UNDERFLOW",
                        "nameLocation": "5369:13:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73271,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5343:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "32",
                            "id": 73272,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5385:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_2_by_1",
                                "typeString": "int_const 2"
                            },
                            "value": "2"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73276,
                        "nodeType": "VariableDeclaration",
                        "src": "5392:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MUL_OVERFLOW",
                        "nameLocation": "5418:12:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73274,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5392:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "33",
                            "id": 73275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5433:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_3_by_1",
                                "typeString": "int_const 3"
                            },
                            "value": "3"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73279,
                        "nodeType": "VariableDeclaration",
                        "src": "5440:43:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ZERO_DIVISION",
                        "nameLocation": "5466:13:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73277,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5440:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "34",
                            "id": 73278,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5482:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_4_by_1",
                                "typeString": "int_const 4"
                            },
                            "value": "4"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73282,
                        "nodeType": "VariableDeclaration",
                        "src": "5489:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "DIV_INTERNAL",
                        "nameLocation": "5515:12:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73280,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5489:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "35",
                            "id": 73281,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5530:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_5_by_1",
                                "typeString": "int_const 5"
                            },
                            "value": "5"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73285,
                        "nodeType": "VariableDeclaration",
                        "src": "5537:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "X_OUT_OF_BOUNDS",
                        "nameLocation": "5563:15:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73283,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5537:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "36",
                            "id": 73284,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5581:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_6_by_1",
                                "typeString": "int_const 6"
                            },
                            "value": "6"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73288,
                        "nodeType": "VariableDeclaration",
                        "src": "5588:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "Y_OUT_OF_BOUNDS",
                        "nameLocation": "5614:15:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73286,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5588:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "37",
                            "id": 73287,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5632:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_7_by_1",
                                "typeString": "int_const 7"
                            },
                            "value": "7"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73291,
                        "nodeType": "VariableDeclaration",
                        "src": "5639:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PRODUCT_OUT_OF_BOUNDS",
                        "nameLocation": "5665:21:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73289,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5639:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "38",
                            "id": 73290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5689:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_8_by_1",
                                "typeString": "int_const 8"
                            },
                            "value": "8"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73294,
                        "nodeType": "VariableDeclaration",
                        "src": "5696:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_EXPONENT",
                        "nameLocation": "5722:16:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73292,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5696:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "39",
                            "id": 73293,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5741:1:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_9_by_1",
                                "typeString": "int_const 9"
                            },
                            "value": "9"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73297,
                        "nodeType": "VariableDeclaration",
                        "src": "5762:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "OUT_OF_BOUNDS",
                        "nameLocation": "5788:13:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73295,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5762:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313030",
                            "id": 73296,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5804:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                            },
                            "value": "100"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73300,
                        "nodeType": "VariableDeclaration",
                        "src": "5813:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNSORTED_ARRAY",
                        "nameLocation": "5839:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73298,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5813:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313031",
                            "id": 73299,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5856:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_101_by_1",
                                "typeString": "int_const 101"
                            },
                            "value": "101"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73303,
                        "nodeType": "VariableDeclaration",
                        "src": "5865:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNSORTED_TOKENS",
                        "nameLocation": "5891:15:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73301,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5865:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313032",
                            "id": 73302,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5909:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_102_by_1",
                                "typeString": "int_const 102"
                            },
                            "value": "102"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73306,
                        "nodeType": "VariableDeclaration",
                        "src": "5918:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INPUT_LENGTH_MISMATCH",
                        "nameLocation": "5944:21:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73304,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5918:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313033",
                            "id": 73305,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5968:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_103_by_1",
                                "typeString": "int_const 103"
                            },
                            "value": "103"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73309,
                        "nodeType": "VariableDeclaration",
                        "src": "5977:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ZERO_TOKEN",
                        "nameLocation": "6003:10:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73307,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5977:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313034",
                            "id": 73308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6016:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_104_by_1",
                                "typeString": "int_const 104"
                            },
                            "value": "104"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73312,
                        "nodeType": "VariableDeclaration",
                        "src": "6025:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_DATA",
                        "nameLocation": "6051:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73310,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6025:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313035",
                            "id": 73311,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6071:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_105_by_1",
                                "typeString": "int_const 105"
                            },
                            "value": "105"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73315,
                        "nodeType": "VariableDeclaration",
                        "src": "6101:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_TOKENS",
                        "nameLocation": "6127:10:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73313,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6101:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323030",
                            "id": 73314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6140:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_200_by_1",
                                "typeString": "int_const 200"
                            },
                            "value": "200"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73318,
                        "nodeType": "VariableDeclaration",
                        "src": "6149:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_TOKENS",
                        "nameLocation": "6175:10:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73316,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6149:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323031",
                            "id": 73317,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6188:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_201_by_1",
                                "typeString": "int_const 201"
                            },
                            "value": "201"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73321,
                        "nodeType": "VariableDeclaration",
                        "src": "6197:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_SWAP_FEE_PERCENTAGE",
                        "nameLocation": "6223:23:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73319,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6197:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323032",
                            "id": 73320,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6249:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_202_by_1",
                                "typeString": "int_const 202"
                            },
                            "value": "202"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73324,
                        "nodeType": "VariableDeclaration",
                        "src": "6258:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_SWAP_FEE_PERCENTAGE",
                        "nameLocation": "6284:23:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73322,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6258:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323033",
                            "id": 73323,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6310:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_203_by_1",
                                "typeString": "int_const 203"
                            },
                            "value": "203"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73327,
                        "nodeType": "VariableDeclaration",
                        "src": "6319:43:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MINIMUM_BPT",
                        "nameLocation": "6345:11:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73325,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6319:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323034",
                            "id": 73326,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6359:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_204_by_1",
                                "typeString": "int_const 204"
                            },
                            "value": "204"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73330,
                        "nodeType": "VariableDeclaration",
                        "src": "6368:48:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_NOT_VAULT",
                        "nameLocation": "6394:16:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73328,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6368:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323035",
                            "id": 73329,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6413:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_205_by_1",
                                "typeString": "int_const 205"
                            },
                            "value": "205"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73333,
                        "nodeType": "VariableDeclaration",
                        "src": "6422:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNINITIALIZED",
                        "nameLocation": "6448:13:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73331,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6422:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323036",
                            "id": 73332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6464:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_206_by_1",
                                "typeString": "int_const 206"
                            },
                            "value": "206"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73336,
                        "nodeType": "VariableDeclaration",
                        "src": "6473:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BPT_IN_MAX_AMOUNT",
                        "nameLocation": "6499:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73334,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6473:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323037",
                            "id": 73335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6519:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_207_by_1",
                                "typeString": "int_const 207"
                            },
                            "value": "207"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73339,
                        "nodeType": "VariableDeclaration",
                        "src": "6528:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BPT_OUT_MIN_AMOUNT",
                        "nameLocation": "6554:18:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73337,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6528:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323038",
                            "id": 73338,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6575:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_208_by_1",
                                "typeString": "int_const 208"
                            },
                            "value": "208"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73342,
                        "nodeType": "VariableDeclaration",
                        "src": "6584:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "EXPIRED_PERMIT",
                        "nameLocation": "6610:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73340,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6584:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323039",
                            "id": 73341,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6627:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_209_by_1",
                                "typeString": "int_const 209"
                            },
                            "value": "209"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73345,
                        "nodeType": "VariableDeclaration",
                        "src": "6636:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_TWO_TOKENS",
                        "nameLocation": "6662:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73343,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6636:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323130",
                            "id": 73344,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6679:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_210_by_1",
                                "typeString": "int_const 210"
                            },
                            "value": "210"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73348,
                        "nodeType": "VariableDeclaration",
                        "src": "6688:40:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "DISABLED",
                        "nameLocation": "6714:8:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73346,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6688:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "323131",
                            "id": 73347,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6725:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_211_by_1",
                                "typeString": "int_const 211"
                            },
                            "value": "211"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73351,
                        "nodeType": "VariableDeclaration",
                        "src": "6748:39:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_AMP",
                        "nameLocation": "6774:7:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73349,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6748:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333030",
                            "id": 73350,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6784:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_300_by_1",
                                "typeString": "int_const 300"
                            },
                            "value": "300"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73354,
                        "nodeType": "VariableDeclaration",
                        "src": "6793:39:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_AMP",
                        "nameLocation": "6819:7:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73352,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6793:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333031",
                            "id": 73353,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6829:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_301_by_1",
                                "typeString": "int_const 301"
                            },
                            "value": "301"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73357,
                        "nodeType": "VariableDeclaration",
                        "src": "6838:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_WEIGHT",
                        "nameLocation": "6864:10:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73355,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6838:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333032",
                            "id": 73356,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6877:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_302_by_1",
                                "typeString": "int_const 302"
                            },
                            "value": "302"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73360,
                        "nodeType": "VariableDeclaration",
                        "src": "6886:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_STABLE_TOKENS",
                        "nameLocation": "6912:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73358,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6886:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333033",
                            "id": 73359,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6932:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_303_by_1",
                                "typeString": "int_const 303"
                            },
                            "value": "303"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73363,
                        "nodeType": "VariableDeclaration",
                        "src": "6941:44:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_IN_RATIO",
                        "nameLocation": "6967:12:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73361,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6941:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333034",
                            "id": 73362,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6982:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_304_by_1",
                                "typeString": "int_const 304"
                            },
                            "value": "304"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73366,
                        "nodeType": "VariableDeclaration",
                        "src": "6991:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_OUT_RATIO",
                        "nameLocation": "7017:13:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73364,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6991:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333035",
                            "id": 73365,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7033:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_305_by_1",
                                "typeString": "int_const 305"
                            },
                            "value": "305"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73369,
                        "nodeType": "VariableDeclaration",
                        "src": "7042:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_BPT_IN_FOR_TOKEN_OUT",
                        "nameLocation": "7068:24:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73367,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7042:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333036",
                            "id": 73368,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7095:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_306_by_1",
                                "typeString": "int_const 306"
                            },
                            "value": "306"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73372,
                        "nodeType": "VariableDeclaration",
                        "src": "7104:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_OUT_BPT_FOR_TOKEN_IN",
                        "nameLocation": "7130:24:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73370,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7104:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333037",
                            "id": 73371,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7157:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_307_by_1",
                                "typeString": "int_const 307"
                            },
                            "value": "307"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73375,
                        "nodeType": "VariableDeclaration",
                        "src": "7166:59:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NORMALIZED_WEIGHT_INVARIANT",
                        "nameLocation": "7192:27:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73373,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7166:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333038",
                            "id": 73374,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7222:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_308_by_1",
                                "typeString": "int_const 308"
                            },
                            "value": "308"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73378,
                        "nodeType": "VariableDeclaration",
                        "src": "7231:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_TOKEN",
                        "nameLocation": "7257:13:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73376,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7231:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333039",
                            "id": 73377,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7273:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_309_by_1",
                                "typeString": "int_const 309"
                            },
                            "value": "309"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73381,
                        "nodeType": "VariableDeclaration",
                        "src": "7282:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_JOIN_KIND",
                        "nameLocation": "7308:19:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73379,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7282:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333130",
                            "id": 73380,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7330:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_310_by_1",
                                "typeString": "int_const 310"
                            },
                            "value": "310"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73384,
                        "nodeType": "VariableDeclaration",
                        "src": "7339:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ZERO_INVARIANT",
                        "nameLocation": "7365:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73382,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7339:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333131",
                            "id": 73383,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7382:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_311_by_1",
                                "typeString": "int_const 311"
                            },
                            "value": "311"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73387,
                        "nodeType": "VariableDeclaration",
                        "src": "7391:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_INVALID_SECONDS_QUERY",
                        "nameLocation": "7417:28:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73385,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7391:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333132",
                            "id": 73386,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7448:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_312_by_1",
                                "typeString": "int_const 312"
                            },
                            "value": "312"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73390,
                        "nodeType": "VariableDeclaration",
                        "src": "7457:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_NOT_INITIALIZED",
                        "nameLocation": "7483:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73388,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7457:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333133",
                            "id": 73389,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7508:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_313_by_1",
                                "typeString": "int_const 313"
                            },
                            "value": "313"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73393,
                        "nodeType": "VariableDeclaration",
                        "src": "7517:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_QUERY_TOO_OLD",
                        "nameLocation": "7543:20:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73391,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7517:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333134",
                            "id": 73392,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7566:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_314_by_1",
                                "typeString": "int_const 314"
                            },
                            "value": "314"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73396,
                        "nodeType": "VariableDeclaration",
                        "src": "7575:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_INVALID_INDEX",
                        "nameLocation": "7601:20:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73394,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7575:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333135",
                            "id": 73395,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7624:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_315_by_1",
                                "typeString": "int_const 315"
                            },
                            "value": "315"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73399,
                        "nodeType": "VariableDeclaration",
                        "src": "7633:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_BAD_SECS",
                        "nameLocation": "7659:15:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73397,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7633:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333136",
                            "id": 73398,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7677:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_316_by_1",
                                "typeString": "int_const 316"
                            },
                            "value": "316"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73402,
                        "nodeType": "VariableDeclaration",
                        "src": "7686:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_END_TIME_TOO_CLOSE",
                        "nameLocation": "7712:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73400,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7686:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333137",
                            "id": 73401,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7737:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_317_by_1",
                                "typeString": "int_const 317"
                            },
                            "value": "317"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73405,
                        "nodeType": "VariableDeclaration",
                        "src": "7746:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_ONGOING_UPDATE",
                        "nameLocation": "7772:18:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73403,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7746:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333138",
                            "id": 73404,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7793:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_318_by_1",
                                "typeString": "int_const 318"
                            },
                            "value": "318"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73408,
                        "nodeType": "VariableDeclaration",
                        "src": "7802:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_RATE_TOO_HIGH",
                        "nameLocation": "7828:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73406,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7802:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333139",
                            "id": 73407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7848:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_319_by_1",
                                "typeString": "int_const 319"
                            },
                            "value": "319"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73411,
                        "nodeType": "VariableDeclaration",
                        "src": "7857:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_NO_ONGOING_UPDATE",
                        "nameLocation": "7883:21:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73409,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7857:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333230",
                            "id": 73410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7907:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_320_by_1",
                                "typeString": "int_const 320"
                            },
                            "value": "320"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73414,
                        "nodeType": "VariableDeclaration",
                        "src": "7916:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "STABLE_INVARIANT_DIDNT_CONVERGE",
                        "nameLocation": "7942:31:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73412,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7916:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333231",
                            "id": 73413,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7976:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_321_by_1",
                                "typeString": "int_const 321"
                            },
                            "value": "321"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73417,
                        "nodeType": "VariableDeclaration",
                        "src": "7985:65:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "STABLE_GET_BALANCE_DIDNT_CONVERGE",
                        "nameLocation": "8011:33:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73415,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7985:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333232",
                            "id": 73416,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8047:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_322_by_1",
                                "typeString": "int_const 322"
                            },
                            "value": "322"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73420,
                        "nodeType": "VariableDeclaration",
                        "src": "8056:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RELAYER_NOT_CONTRACT",
                        "nameLocation": "8082:20:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73418,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8056:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333233",
                            "id": 73419,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8105:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_323_by_1",
                                "typeString": "int_const 323"
                            },
                            "value": "323"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73423,
                        "nodeType": "VariableDeclaration",
                        "src": "8114:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BASE_POOL_RELAYER_NOT_CALLED",
                        "nameLocation": "8140:28:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73421,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8114:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333234",
                            "id": 73422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8171:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_324_by_1",
                                "typeString": "int_const 324"
                            },
                            "value": "324"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73426,
                        "nodeType": "VariableDeclaration",
                        "src": "8180:61:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "REBALANCING_RELAYER_REENTERED",
                        "nameLocation": "8206:29:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73424,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8180:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333235",
                            "id": 73425,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8238:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_325_by_1",
                                "typeString": "int_const 325"
                            },
                            "value": "325"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73429,
                        "nodeType": "VariableDeclaration",
                        "src": "8247:58:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "GRADUAL_UPDATE_TIME_TRAVEL",
                        "nameLocation": "8273:26:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73427,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8247:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333236",
                            "id": 73428,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8302:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_326_by_1",
                                "typeString": "int_const 326"
                            },
                            "value": "326"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73432,
                        "nodeType": "VariableDeclaration",
                        "src": "8311:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAPS_DISABLED",
                        "nameLocation": "8337:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73430,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8311:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333237",
                            "id": 73431,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8354:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_327_by_1",
                                "typeString": "int_const 327"
                            },
                            "value": "327"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73435,
                        "nodeType": "VariableDeclaration",
                        "src": "8363:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_IS_NOT_LBP_OWNER",
                        "nameLocation": "8389:23:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73433,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8363:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333238",
                            "id": 73434,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8415:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_328_by_1",
                                "typeString": "int_const 328"
                            },
                            "value": "328"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73438,
                        "nodeType": "VariableDeclaration",
                        "src": "8424:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PRICE_RATE_OVERFLOW",
                        "nameLocation": "8450:19:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73436,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8424:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333239",
                            "id": 73437,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8472:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_329_by_1",
                                "typeString": "int_const 329"
                            },
                            "value": "329"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73441,
                        "nodeType": "VariableDeclaration",
                        "src": "8481:75:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_JOIN_EXIT_KIND_WHILE_SWAPS_DISABLED",
                        "nameLocation": "8507:43:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73439,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8481:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333330",
                            "id": 73440,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8553:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_330_by_1",
                                "typeString": "int_const 330"
                            },
                            "value": "330"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73444,
                        "nodeType": "VariableDeclaration",
                        "src": "8562:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "WEIGHT_CHANGE_TOO_FAST",
                        "nameLocation": "8588:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73442,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8562:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333331",
                            "id": 73443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8613:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_331_by_1",
                                "typeString": "int_const 331"
                            },
                            "value": "331"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73447,
                        "nodeType": "VariableDeclaration",
                        "src": "8622:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "LOWER_GREATER_THAN_UPPER_TARGET",
                        "nameLocation": "8648:31:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73445,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8622:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333332",
                            "id": 73446,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8682:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_332_by_1",
                                "typeString": "int_const 332"
                            },
                            "value": "332"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73450,
                        "nodeType": "VariableDeclaration",
                        "src": "8691:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UPPER_TARGET_TOO_HIGH",
                        "nameLocation": "8717:21:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73448,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8691:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333333",
                            "id": 73449,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8741:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_333_by_1",
                                "typeString": "int_const 333"
                            },
                            "value": "333"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73453,
                        "nodeType": "VariableDeclaration",
                        "src": "8750:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_BY_LINEAR_POOL",
                        "nameLocation": "8776:24:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73451,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8750:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333334",
                            "id": 73452,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8803:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_334_by_1",
                                "typeString": "int_const 334"
                            },
                            "value": "334"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73456,
                        "nodeType": "VariableDeclaration",
                        "src": "8812:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "OUT_OF_TARGET_RANGE",
                        "nameLocation": "8838:19:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73454,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8812:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333335",
                            "id": 73455,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8860:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_335_by_1",
                                "typeString": "int_const 335"
                            },
                            "value": "335"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73459,
                        "nodeType": "VariableDeclaration",
                        "src": "8869:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_EXIT_KIND",
                        "nameLocation": "8895:19:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73457,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8869:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333336",
                            "id": 73458,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8917:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_336_by_1",
                                "typeString": "int_const 336"
                            },
                            "value": "336"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73462,
                        "nodeType": "VariableDeclaration",
                        "src": "8926:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNAUTHORIZED_EXIT",
                        "nameLocation": "8952:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73460,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8926:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333337",
                            "id": 73461,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8972:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_337_by_1",
                                "typeString": "int_const 337"
                            },
                            "value": "337"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73465,
                        "nodeType": "VariableDeclaration",
                        "src": "8981:66:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_MANAGEMENT_SWAP_FEE_PERCENTAGE",
                        "nameLocation": "9007:34:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73463,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8981:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333338",
                            "id": 73464,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9044:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_338_by_1",
                                "typeString": "int_const 338"
                            },
                            "value": "338"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73468,
                        "nodeType": "VariableDeclaration",
                        "src": "9053:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_BY_MANAGED_POOL",
                        "nameLocation": "9079:25:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73466,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9053:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333339",
                            "id": 73467,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9107:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_339_by_1",
                                "typeString": "int_const 339"
                            },
                            "value": "339"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73471,
                        "nodeType": "VariableDeclaration",
                        "src": "9116:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_BY_PHANTOM_POOL",
                        "nameLocation": "9142:25:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73469,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9116:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333430",
                            "id": 73470,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9170:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_340_by_1",
                                "typeString": "int_const 340"
                            },
                            "value": "340"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73474,
                        "nodeType": "VariableDeclaration",
                        "src": "9179:65:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKEN_DOES_NOT_HAVE_RATE_PROVIDER",
                        "nameLocation": "9205:33:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73472,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9179:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333431",
                            "id": 73473,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9241:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_341_by_1",
                                "typeString": "int_const 341"
                            },
                            "value": "341"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73477,
                        "nodeType": "VariableDeclaration",
                        "src": "9250:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_INITIALIZATION",
                        "nameLocation": "9276:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73475,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9250:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333432",
                            "id": 73476,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9301:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_342_by_1",
                                "typeString": "int_const 342"
                            },
                            "value": "342"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73480,
                        "nodeType": "VariableDeclaration",
                        "src": "9310:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "OUT_OF_NEW_TARGET_RANGE",
                        "nameLocation": "9336:23:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73478,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9310:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333433",
                            "id": 73479,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9362:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_343_by_1",
                                "typeString": "int_const 343"
                            },
                            "value": "343"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73483,
                        "nodeType": "VariableDeclaration",
                        "src": "9371:48:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "FEATURE_DISABLED",
                        "nameLocation": "9397:16:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73481,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9371:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333434",
                            "id": 73482,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9416:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_344_by_1",
                                "typeString": "int_const 344"
                            },
                            "value": "344"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73486,
                        "nodeType": "VariableDeclaration",
                        "src": "9425:61:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNINITIALIZED_POOL_CONTROLLER",
                        "nameLocation": "9451:29:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73484,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9425:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333435",
                            "id": 73485,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9483:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_345_by_1",
                                "typeString": "int_const 345"
                            },
                            "value": "345"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73489,
                        "nodeType": "VariableDeclaration",
                        "src": "9492:62:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SET_SWAP_FEE_DURING_FEE_CHANGE",
                        "nameLocation": "9518:30:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73487,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9492:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333436",
                            "id": 73488,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9551:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_346_by_1",
                                "typeString": "int_const 346"
                            },
                            "value": "346"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73492,
                        "nodeType": "VariableDeclaration",
                        "src": "9560:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SET_SWAP_FEE_PENDING_FEE_CHANGE",
                        "nameLocation": "9586:31:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73490,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9560:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333437",
                            "id": 73491,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9620:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_347_by_1",
                                "typeString": "int_const 347"
                            },
                            "value": "347"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73495,
                        "nodeType": "VariableDeclaration",
                        "src": "9629:66:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CHANGE_TOKENS_DURING_WEIGHT_CHANGE",
                        "nameLocation": "9655:34:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73493,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9629:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333438",
                            "id": 73494,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9692:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_348_by_1",
                                "typeString": "int_const 348"
                            },
                            "value": "348"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73498,
                        "nodeType": "VariableDeclaration",
                        "src": "9701:67:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CHANGE_TOKENS_PENDING_WEIGHT_CHANGE",
                        "nameLocation": "9727:35:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73496,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9701:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333439",
                            "id": 73497,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9765:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_349_by_1",
                                "typeString": "int_const 349"
                            },
                            "value": "349"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73501,
                        "nodeType": "VariableDeclaration",
                        "src": "9774:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_WEIGHT",
                        "nameLocation": "9800:10:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73499,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9774:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333530",
                            "id": 73500,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9813:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_350_by_1",
                                "typeString": "int_const 350"
                            },
                            "value": "350"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73504,
                        "nodeType": "VariableDeclaration",
                        "src": "9822:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNAUTHORIZED_JOIN",
                        "nameLocation": "9848:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73502,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9822:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333531",
                            "id": 73503,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9868:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_351_by_1",
                                "typeString": "int_const 351"
                            },
                            "value": "351"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73507,
                        "nodeType": "VariableDeclaration",
                        "src": "9877:65:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_MANAGEMENT_AUM_FEE_PERCENTAGE",
                        "nameLocation": "9903:33:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73505,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9877:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333532",
                            "id": 73506,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9939:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_352_by_1",
                                "typeString": "int_const 352"
                            },
                            "value": "352"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73510,
                        "nodeType": "VariableDeclaration",
                        "src": "9948:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "FRACTIONAL_TARGET",
                        "nameLocation": "9974:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73508,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9948:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333533",
                            "id": 73509,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9994:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_353_by_1",
                                "typeString": "int_const 353"
                            },
                            "value": "353"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73513,
                        "nodeType": "VariableDeclaration",
                        "src": "10003:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADD_OR_REMOVE_BPT",
                        "nameLocation": "10029:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73511,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10003:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333534",
                            "id": 73512,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10049:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_354_by_1",
                                "typeString": "int_const 354"
                            },
                            "value": "354"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73516,
                        "nodeType": "VariableDeclaration",
                        "src": "10058:62:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_CIRCUIT_BREAKER_BOUNDS",
                        "nameLocation": "10084:30:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73514,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10058:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333535",
                            "id": 73515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10117:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_355_by_1",
                                "typeString": "int_const 355"
                            },
                            "value": "355"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73519,
                        "nodeType": "VariableDeclaration",
                        "src": "10126:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CIRCUIT_BREAKER_TRIPPED",
                        "nameLocation": "10152:23:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73517,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10126:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333536",
                            "id": 73518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10178:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_356_by_1",
                                "typeString": "int_const 356"
                            },
                            "value": "356"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73522,
                        "nodeType": "VariableDeclaration",
                        "src": "10187:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MALICIOUS_QUERY_REVERT",
                        "nameLocation": "10213:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73520,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10187:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333537",
                            "id": 73521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10238:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_357_by_1",
                                "typeString": "int_const 357"
                            },
                            "value": "357"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73525,
                        "nodeType": "VariableDeclaration",
                        "src": "10247:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "JOINS_EXITS_DISABLED",
                        "nameLocation": "10273:20:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73523,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10247:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "333538",
                            "id": 73524,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10296:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_358_by_1",
                                "typeString": "int_const 358"
                            },
                            "value": "358"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73528,
                        "nodeType": "VariableDeclaration",
                        "src": "10317:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "REENTRANCY",
                        "nameLocation": "10343:10:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73526,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10317:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343030",
                            "id": 73527,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10356:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_400_by_1",
                                "typeString": "int_const 400"
                            },
                            "value": "400"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73531,
                        "nodeType": "VariableDeclaration",
                        "src": "10365:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SENDER_NOT_ALLOWED",
                        "nameLocation": "10391:18:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73529,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10365:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343031",
                            "id": 73530,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10412:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_401_by_1",
                                "typeString": "int_const 401"
                            },
                            "value": "401"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73534,
                        "nodeType": "VariableDeclaration",
                        "src": "10421:38:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PAUSED",
                        "nameLocation": "10447:6:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73532,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10421:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343032",
                            "id": 73533,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10456:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_402_by_1",
                                "typeString": "int_const 402"
                            },
                            "value": "402"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73537,
                        "nodeType": "VariableDeclaration",
                        "src": "10465:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PAUSE_WINDOW_EXPIRED",
                        "nameLocation": "10491:20:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73535,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10465:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343033",
                            "id": 73536,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10514:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_403_by_1",
                                "typeString": "int_const 403"
                            },
                            "value": "403"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73540,
                        "nodeType": "VariableDeclaration",
                        "src": "10523:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_PAUSE_WINDOW_DURATION",
                        "nameLocation": "10549:25:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73538,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10523:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343034",
                            "id": 73539,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10577:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_404_by_1",
                                "typeString": "int_const 404"
                            },
                            "value": "404"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73543,
                        "nodeType": "VariableDeclaration",
                        "src": "10586:58:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_BUFFER_PERIOD_DURATION",
                        "nameLocation": "10612:26:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73541,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10586:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343035",
                            "id": 73542,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10641:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_405_by_1",
                                "typeString": "int_const 405"
                            },
                            "value": "405"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73546,
                        "nodeType": "VariableDeclaration",
                        "src": "10650:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_BALANCE",
                        "nameLocation": "10676:20:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73544,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10650:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343036",
                            "id": 73545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10699:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_406_by_1",
                                "typeString": "int_const 406"
                            },
                            "value": "406"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73549,
                        "nodeType": "VariableDeclaration",
                        "src": "10708:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_ALLOWANCE",
                        "nameLocation": "10734:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73547,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10708:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343037",
                            "id": 73548,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10759:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_407_by_1",
                                "typeString": "int_const 407"
                            },
                            "value": "407"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73552,
                        "nodeType": "VariableDeclaration",
                        "src": "10768:64:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_FROM_ZERO_ADDRESS",
                        "nameLocation": "10794:32:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73550,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10768:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343038",
                            "id": 73551,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10829:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_408_by_1",
                                "typeString": "int_const 408"
                            },
                            "value": "408"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73555,
                        "nodeType": "VariableDeclaration",
                        "src": "10838:62:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_TO_ZERO_ADDRESS",
                        "nameLocation": "10864:30:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73553,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10838:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343039",
                            "id": 73554,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10897:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_409_by_1",
                                "typeString": "int_const 409"
                            },
                            "value": "409"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73558,
                        "nodeType": "VariableDeclaration",
                        "src": "10906:58:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_MINT_TO_ZERO_ADDRESS",
                        "nameLocation": "10932:26:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73556,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10906:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343130",
                            "id": 73557,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10961:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_410_by_1",
                                "typeString": "int_const 410"
                            },
                            "value": "410"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73561,
                        "nodeType": "VariableDeclaration",
                        "src": "10970:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_BURN_FROM_ZERO_ADDRESS",
                        "nameLocation": "10996:28:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73559,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10970:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343131",
                            "id": 73560,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11027:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_411_by_1",
                                "typeString": "int_const 411"
                            },
                            "value": "411"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73564,
                        "nodeType": "VariableDeclaration",
                        "src": "11036:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_APPROVE_FROM_ZERO_ADDRESS",
                        "nameLocation": "11062:31:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73562,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11036:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343132",
                            "id": 73563,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11096:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_412_by_1",
                                "typeString": "int_const 412"
                            },
                            "value": "412"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73567,
                        "nodeType": "VariableDeclaration",
                        "src": "11105:61:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_APPROVE_TO_ZERO_ADDRESS",
                        "nameLocation": "11131:29:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73565,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11105:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343133",
                            "id": 73566,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11163:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_413_by_1",
                                "typeString": "int_const 413"
                            },
                            "value": "413"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73570,
                        "nodeType": "VariableDeclaration",
                        "src": "11172:64:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_EXCEEDS_ALLOWANCE",
                        "nameLocation": "11198:32:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73568,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11172:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343134",
                            "id": 73569,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11233:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_414_by_1",
                                "typeString": "int_const 414"
                            },
                            "value": "414"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73573,
                        "nodeType": "VariableDeclaration",
                        "src": "11242:68:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_DECREASED_ALLOWANCE_BELOW_ZERO",
                        "nameLocation": "11268:36:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73571,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11242:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343135",
                            "id": 73572,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11307:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_415_by_1",
                                "typeString": "int_const 415"
                            },
                            "value": "415"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73576,
                        "nodeType": "VariableDeclaration",
                        "src": "11316:62:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_EXCEEDS_BALANCE",
                        "nameLocation": "11342:30:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73574,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11316:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343136",
                            "id": 73575,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11375:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_416_by_1",
                                "typeString": "int_const 416"
                            },
                            "value": "416"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73579,
                        "nodeType": "VariableDeclaration",
                        "src": "11384:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_BURN_EXCEEDS_ALLOWANCE",
                        "nameLocation": "11410:28:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73577,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11384:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343137",
                            "id": 73578,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11441:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_417_by_1",
                                "typeString": "int_const 417"
                            },
                            "value": "417"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73582,
                        "nodeType": "VariableDeclaration",
                        "src": "11450:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SAFE_ERC20_CALL_FAILED",
                        "nameLocation": "11476:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73580,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11450:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343138",
                            "id": 73581,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11501:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_418_by_1",
                                "typeString": "int_const 418"
                            },
                            "value": "418"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73585,
                        "nodeType": "VariableDeclaration",
                        "src": "11510:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_INSUFFICIENT_BALANCE",
                        "nameLocation": "11536:28:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73583,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11510:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343139",
                            "id": 73584,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11567:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_419_by_1",
                                "typeString": "int_const 419"
                            },
                            "value": "419"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73588,
                        "nodeType": "VariableDeclaration",
                        "src": "11576:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_CANNOT_SEND_VALUE",
                        "nameLocation": "11602:25:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73586,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11576:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343230",
                            "id": 73587,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11630:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_420_by_1",
                                "typeString": "int_const 420"
                            },
                            "value": "420"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73591,
                        "nodeType": "VariableDeclaration",
                        "src": "11639:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SAFE_CAST_VALUE_CANT_FIT_INT256",
                        "nameLocation": "11665:31:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73589,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11639:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343231",
                            "id": 73590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11699:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_421_by_1",
                                "typeString": "int_const 421"
                            },
                            "value": "421"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73594,
                        "nodeType": "VariableDeclaration",
                        "src": "11708:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "GRANT_SENDER_NOT_ADMIN",
                        "nameLocation": "11734:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73592,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11708:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343232",
                            "id": 73593,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11759:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_422_by_1",
                                "typeString": "int_const 422"
                            },
                            "value": "422"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73597,
                        "nodeType": "VariableDeclaration",
                        "src": "11768:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "REVOKE_SENDER_NOT_ADMIN",
                        "nameLocation": "11794:23:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73595,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11768:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343233",
                            "id": 73596,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11820:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_423_by_1",
                                "typeString": "int_const 423"
                            },
                            "value": "423"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73600,
                        "nodeType": "VariableDeclaration",
                        "src": "11829:59:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RENOUNCE_SENDER_NOT_ALLOWED",
                        "nameLocation": "11855:27:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73598,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11829:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343234",
                            "id": 73599,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11885:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_424_by_1",
                                "typeString": "int_const 424"
                            },
                            "value": "424"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73603,
                        "nodeType": "VariableDeclaration",
                        "src": "11894:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BUFFER_PERIOD_EXPIRED",
                        "nameLocation": "11920:21:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73601,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11894:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343235",
                            "id": 73602,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11944:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_425_by_1",
                                "typeString": "int_const 425"
                            },
                            "value": "425"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73606,
                        "nodeType": "VariableDeclaration",
                        "src": "11953:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_IS_NOT_OWNER",
                        "nameLocation": "11979:19:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73604,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11953:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343236",
                            "id": 73605,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12001:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_426_by_1",
                                "typeString": "int_const 426"
                            },
                            "value": "426"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73609,
                        "nodeType": "VariableDeclaration",
                        "src": "12010:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NEW_OWNER_IS_ZERO",
                        "nameLocation": "12036:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73607,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12010:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343237",
                            "id": 73608,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12056:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_427_by_1",
                                "typeString": "int_const 427"
                            },
                            "value": "427"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73612,
                        "nodeType": "VariableDeclaration",
                        "src": "12065:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CODE_DEPLOYMENT_FAILED",
                        "nameLocation": "12091:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73610,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12065:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343238",
                            "id": 73611,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12116:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_428_by_1",
                                "typeString": "int_const 428"
                            },
                            "value": "428"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73615,
                        "nodeType": "VariableDeclaration",
                        "src": "12125:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALL_TO_NON_CONTRACT",
                        "nameLocation": "12151:20:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73613,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12125:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343239",
                            "id": 73614,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12174:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_429_by_1",
                                "typeString": "int_const 429"
                            },
                            "value": "429"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73618,
                        "nodeType": "VariableDeclaration",
                        "src": "12183:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "LOW_LEVEL_CALL_FAILED",
                        "nameLocation": "12209:21:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73616,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12183:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343330",
                            "id": 73617,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12233:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_430_by_1",
                                "typeString": "int_const 430"
                            },
                            "value": "430"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73621,
                        "nodeType": "VariableDeclaration",
                        "src": "12242:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_PAUSED",
                        "nameLocation": "12268:10:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73619,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12242:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343331",
                            "id": 73620,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12281:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_431_by_1",
                                "typeString": "int_const 431"
                            },
                            "value": "431"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73624,
                        "nodeType": "VariableDeclaration",
                        "src": "12290:59:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_ALREADY_ALLOWLISTED",
                        "nameLocation": "12316:27:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73622,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12290:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343332",
                            "id": 73623,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12346:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_432_by_1",
                                "typeString": "int_const 432"
                            },
                            "value": "432"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73627,
                        "nodeType": "VariableDeclaration",
                        "src": "12355:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_NOT_ALLOWLISTED",
                        "nameLocation": "12381:23:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73625,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12355:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343333",
                            "id": 73626,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12407:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_433_by_1",
                                "typeString": "int_const 433"
                            },
                            "value": "433"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73630,
                        "nodeType": "VariableDeclaration",
                        "src": "12416:58:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_BURN_EXCEEDS_BALANCE",
                        "nameLocation": "12442:26:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73628,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12416:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343334",
                            "id": 73629,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12471:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_434_by_1",
                                "typeString": "int_const 434"
                            },
                            "value": "434"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73633,
                        "nodeType": "VariableDeclaration",
                        "src": "12480:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_OPERATION",
                        "nameLocation": "12506:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73631,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12480:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343335",
                            "id": 73632,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12526:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_435_by_1",
                                "typeString": "int_const 435"
                            },
                            "value": "435"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73636,
                        "nodeType": "VariableDeclaration",
                        "src": "12535:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CODEC_OVERFLOW",
                        "nameLocation": "12561:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73634,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12535:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343336",
                            "id": 73635,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12578:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_436_by_1",
                                "typeString": "int_const 436"
                            },
                            "value": "436"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73639,
                        "nodeType": "VariableDeclaration",
                        "src": "12587:48:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "IN_RECOVERY_MODE",
                        "nameLocation": "12613:16:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73637,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12587:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343337",
                            "id": 73638,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12632:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_437_by_1",
                                "typeString": "int_const 437"
                            },
                            "value": "437"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73642,
                        "nodeType": "VariableDeclaration",
                        "src": "12641:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_IN_RECOVERY_MODE",
                        "nameLocation": "12667:20:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73640,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12641:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343338",
                            "id": 73641,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12690:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_438_by_1",
                                "typeString": "int_const 438"
                            },
                            "value": "438"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73645,
                        "nodeType": "VariableDeclaration",
                        "src": "12699:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INDUCED_FAILURE",
                        "nameLocation": "12725:15:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73643,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12699:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343339",
                            "id": 73644,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12743:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_439_by_1",
                                "typeString": "int_const 439"
                            },
                            "value": "439"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73648,
                        "nodeType": "VariableDeclaration",
                        "src": "12752:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "EXPIRED_SIGNATURE",
                        "nameLocation": "12778:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73646,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12752:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343430",
                            "id": 73647,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12798:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_440_by_1",
                                "typeString": "int_const 440"
                            },
                            "value": "440"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73651,
                        "nodeType": "VariableDeclaration",
                        "src": "12807:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MALFORMED_SIGNATURE",
                        "nameLocation": "12833:19:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73649,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12807:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343431",
                            "id": 73650,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12855:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_441_by_1",
                                "typeString": "int_const 441"
                            },
                            "value": "441"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73654,
                        "nodeType": "VariableDeclaration",
                        "src": "12864:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SAFE_CAST_VALUE_CANT_FIT_UINT64",
                        "nameLocation": "12890:31:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73652,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12864:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343432",
                            "id": 73653,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12924:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_442_by_1",
                                "typeString": "int_const 442"
                            },
                            "value": "442"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73657,
                        "nodeType": "VariableDeclaration",
                        "src": "12933:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_FEE_TYPE",
                        "nameLocation": "12959:18:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73655,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12933:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343433",
                            "id": 73656,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12980:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_443_by_1",
                                "typeString": "int_const 443"
                            },
                            "value": "443"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73660,
                        "nodeType": "VariableDeclaration",
                        "src": "12989:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BURN_FROM_ZERO",
                        "nameLocation": "13015:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73658,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12989:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "343434",
                            "id": 73659,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13032:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_444_by_1",
                                "typeString": "int_const 444"
                            },
                            "value": "444"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73663,
                        "nodeType": "VariableDeclaration",
                        "src": "13055:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_POOL_ID",
                        "nameLocation": "13081:15:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73661,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13055:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353030",
                            "id": 73662,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13099:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_500_by_1",
                                "typeString": "int_const 500"
                            },
                            "value": "500"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73666,
                        "nodeType": "VariableDeclaration",
                        "src": "13108:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_NOT_POOL",
                        "nameLocation": "13134:15:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73664,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13108:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353031",
                            "id": 73665,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13152:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_501_by_1",
                                "typeString": "int_const 501"
                            },
                            "value": "501"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73669,
                        "nodeType": "VariableDeclaration",
                        "src": "13161:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SENDER_NOT_ASSET_MANAGER",
                        "nameLocation": "13187:24:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73667,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13161:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353032",
                            "id": 73668,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13214:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_502_by_1",
                                "typeString": "int_const 502"
                            },
                            "value": "502"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73672,
                        "nodeType": "VariableDeclaration",
                        "src": "13223:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "USER_DOESNT_ALLOW_RELAYER",
                        "nameLocation": "13249:25:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73670,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13223:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353033",
                            "id": 73671,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13277:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_503_by_1",
                                "typeString": "int_const 503"
                            },
                            "value": "503"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73675,
                        "nodeType": "VariableDeclaration",
                        "src": "13286:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_SIGNATURE",
                        "nameLocation": "13312:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73673,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13286:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353034",
                            "id": 73674,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13332:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_504_by_1",
                                "typeString": "int_const 504"
                            },
                            "value": "504"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73678,
                        "nodeType": "VariableDeclaration",
                        "src": "13341:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "EXIT_BELOW_MIN",
                        "nameLocation": "13367:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73676,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13341:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353035",
                            "id": 73677,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13384:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_505_by_1",
                                "typeString": "int_const 505"
                            },
                            "value": "505"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73681,
                        "nodeType": "VariableDeclaration",
                        "src": "13393:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "JOIN_ABOVE_MAX",
                        "nameLocation": "13419:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73679,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13393:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353036",
                            "id": 73680,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13436:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_506_by_1",
                                "typeString": "int_const 506"
                            },
                            "value": "506"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73684,
                        "nodeType": "VariableDeclaration",
                        "src": "13445:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAP_LIMIT",
                        "nameLocation": "13471:10:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73682,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13445:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353037",
                            "id": 73683,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13484:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_507_by_1",
                                "typeString": "int_const 507"
                            },
                            "value": "507"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73687,
                        "nodeType": "VariableDeclaration",
                        "src": "13493:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAP_DEADLINE",
                        "nameLocation": "13519:13:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73685,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13493:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353038",
                            "id": 73686,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13535:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_508_by_1",
                                "typeString": "int_const 508"
                            },
                            "value": "508"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73690,
                        "nodeType": "VariableDeclaration",
                        "src": "13544:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CANNOT_SWAP_SAME_TOKEN",
                        "nameLocation": "13570:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73688,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13544:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353039",
                            "id": 73689,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13595:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_509_by_1",
                                "typeString": "int_const 509"
                            },
                            "value": "509"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73693,
                        "nodeType": "VariableDeclaration",
                        "src": "13604:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNKNOWN_AMOUNT_IN_FIRST_SWAP",
                        "nameLocation": "13630:28:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73691,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13604:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353130",
                            "id": 73692,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13661:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_510_by_1",
                                "typeString": "int_const 510"
                            },
                            "value": "510"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73696,
                        "nodeType": "VariableDeclaration",
                        "src": "13670:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MALCONSTRUCTED_MULTIHOP_SWAP",
                        "nameLocation": "13696:28:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73694,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13670:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353131",
                            "id": 73695,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13727:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_511_by_1",
                                "typeString": "int_const 511"
                            },
                            "value": "511"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73699,
                        "nodeType": "VariableDeclaration",
                        "src": "13736:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INTERNAL_BALANCE_OVERFLOW",
                        "nameLocation": "13762:25:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73697,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13736:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353132",
                            "id": 73698,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13790:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_512_by_1",
                                "typeString": "int_const 512"
                            },
                            "value": "512"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73702,
                        "nodeType": "VariableDeclaration",
                        "src": "13799:61:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_INTERNAL_BALANCE",
                        "nameLocation": "13825:29:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73700,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13799:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353133",
                            "id": 73701,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13857:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_513_by_1",
                                "typeString": "int_const 513"
                            },
                            "value": "513"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73705,
                        "nodeType": "VariableDeclaration",
                        "src": "13866:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_ETH_INTERNAL_BALANCE",
                        "nameLocation": "13892:28:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73703,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13866:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353134",
                            "id": 73704,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13923:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_514_by_1",
                                "typeString": "int_const 514"
                            },
                            "value": "514"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73708,
                        "nodeType": "VariableDeclaration",
                        "src": "13932:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_POST_LOAN_BALANCE",
                        "nameLocation": "13958:25:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73706,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13932:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353135",
                            "id": 73707,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13986:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_515_by_1",
                                "typeString": "int_const 515"
                            },
                            "value": "515"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73711,
                        "nodeType": "VariableDeclaration",
                        "src": "13995:48:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_ETH",
                        "nameLocation": "14021:16:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73709,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13995:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353136",
                            "id": 73710,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14040:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_516_by_1",
                                "typeString": "int_const 516"
                            },
                            "value": "516"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73714,
                        "nodeType": "VariableDeclaration",
                        "src": "14049:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNALLOCATED_ETH",
                        "nameLocation": "14075:15:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73712,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14049:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353137",
                            "id": 73713,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14093:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_517_by_1",
                                "typeString": "int_const 517"
                            },
                            "value": "517"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73717,
                        "nodeType": "VariableDeclaration",
                        "src": "14102:44:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ETH_TRANSFER",
                        "nameLocation": "14128:12:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73715,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14102:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353138",
                            "id": 73716,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14143:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_518_by_1",
                                "typeString": "int_const 518"
                            },
                            "value": "518"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73720,
                        "nodeType": "VariableDeclaration",
                        "src": "14152:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CANNOT_USE_ETH_SENTINEL",
                        "nameLocation": "14178:23:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73718,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14152:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353139",
                            "id": 73719,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14204:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_519_by_1",
                                "typeString": "int_const 519"
                            },
                            "value": "519"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73723,
                        "nodeType": "VariableDeclaration",
                        "src": "14213:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKENS_MISMATCH",
                        "nameLocation": "14239:15:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73721,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14213:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353230",
                            "id": 73722,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14257:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_520_by_1",
                                "typeString": "int_const 520"
                            },
                            "value": "520"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73726,
                        "nodeType": "VariableDeclaration",
                        "src": "14266:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKEN_NOT_REGISTERED",
                        "nameLocation": "14292:20:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73724,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14266:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353231",
                            "id": 73725,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14315:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_521_by_1",
                                "typeString": "int_const 521"
                            },
                            "value": "521"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73729,
                        "nodeType": "VariableDeclaration",
                        "src": "14324:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKEN_ALREADY_REGISTERED",
                        "nameLocation": "14350:24:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73727,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14324:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353232",
                            "id": 73728,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14377:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_522_by_1",
                                "typeString": "int_const 522"
                            },
                            "value": "522"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73732,
                        "nodeType": "VariableDeclaration",
                        "src": "14386:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKENS_ALREADY_SET",
                        "nameLocation": "14412:18:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73730,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14386:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353233",
                            "id": 73731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14433:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_523_by_1",
                                "typeString": "int_const 523"
                            },
                            "value": "523"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73735,
                        "nodeType": "VariableDeclaration",
                        "src": "14442:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKENS_LENGTH_MUST_BE_2",
                        "nameLocation": "14468:23:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73733,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14442:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353234",
                            "id": 73734,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14494:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_524_by_1",
                                "typeString": "int_const 524"
                            },
                            "value": "524"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73738,
                        "nodeType": "VariableDeclaration",
                        "src": "14503:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NONZERO_TOKEN_BALANCE",
                        "nameLocation": "14529:21:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73736,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14503:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353235",
                            "id": 73737,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14553:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_525_by_1",
                                "typeString": "int_const 525"
                            },
                            "value": "525"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73741,
                        "nodeType": "VariableDeclaration",
                        "src": "14562:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BALANCE_TOTAL_OVERFLOW",
                        "nameLocation": "14588:22:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73739,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14562:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353236",
                            "id": 73740,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14613:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_526_by_1",
                                "typeString": "int_const 526"
                            },
                            "value": "526"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73744,
                        "nodeType": "VariableDeclaration",
                        "src": "14622:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "POOL_NO_TOKENS",
                        "nameLocation": "14648:14:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73742,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14622:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353237",
                            "id": 73743,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14665:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_527_by_1",
                                "typeString": "int_const 527"
                            },
                            "value": "527"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73747,
                        "nodeType": "VariableDeclaration",
                        "src": "14674:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_FLASH_LOAN_BALANCE",
                        "nameLocation": "14700:31:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73745,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14674:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "353238",
                            "id": 73746,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14734:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_528_by_1",
                                "typeString": "int_const 528"
                            },
                            "value": "528"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73750,
                        "nodeType": "VariableDeclaration",
                        "src": "14756:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAP_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "14782:28:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73748,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14756:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "363030",
                            "id": 73749,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14813:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_600_by_1",
                                "typeString": "int_const 600"
                            },
                            "value": "600"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73753,
                        "nodeType": "VariableDeclaration",
                        "src": "14822:66:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "FLASH_LOAN_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "14848:34:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73751,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14822:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "363031",
                            "id": 73752,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14885:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_601_by_1",
                                "typeString": "int_const 601"
                            },
                            "value": "601"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73756,
                        "nodeType": "VariableDeclaration",
                        "src": "14894:66:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT",
                        "nameLocation": "14920:34:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73754,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14894:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "363032",
                            "id": 73755,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14957:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_602_by_1",
                                "typeString": "int_const 602"
                            },
                            "value": "602"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73759,
                        "nodeType": "VariableDeclaration",
                        "src": "14966:59:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AUM_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "14992:27:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73757,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14966:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "363033",
                            "id": 73758,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15022:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_603_by_1",
                                "typeString": "int_const 603"
                            },
                            "value": "603"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73762,
                        "nodeType": "VariableDeclaration",
                        "src": "15051:64:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SPLITTER_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "15077:32:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73760,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "15051:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "373030",
                            "id": 73761,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15112:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_700_by_1",
                                "typeString": "int_const 700"
                            },
                            "value": "700"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73765,
                        "nodeType": "VariableDeclaration",
                        "src": "15134:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNIMPLEMENTED",
                        "nameLocation": "15160:13:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73763,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "15134:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "393938",
                            "id": 73764,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15176:3:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_998_by_1",
                                "typeString": "int_const 998"
                            },
                            "value": "998"
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 73768,
                        "nodeType": "VariableDeclaration",
                        "src": "15185:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SHOULD_NOT_HAPPEN",
                        "nameLocation": "15211:17:176",
                        "scope": 73769,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73766,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "15185:7:176",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "393939",
                            "id": 73767,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15231:3:176",
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
                    73769
                ],
                "name": "BalancerErrors",
                "nameLocation": "5214:14:176",
                "scope": 73770,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "GPL-3.0-or-later"
    },
    "id": 176
};
