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
        "id": 73879,
        "exportedSymbols": {
            "BalancerErrors": [
                73878
            ],
            "_require": [
                73322,
                73341
            ],
            "_revert": [
                73353,
                73373
            ]
        },
        "nodeType": "SourceUnit",
        "src": "688:14550:176",
        "nodes": [
            {
                "id": 73306,
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
                "id": 73322,
                "nodeType": "FunctionDefinition",
                "src": "926:101:176",
                "nodes": [],
                "body": {
                    "id": 73321,
                    "nodeType": "Block",
                    "src": "984:43:176",
                    "nodes": [],
                    "statements": [
                        {
                            "condition": {
                                "id": 73315,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "994:10:176",
                                "subExpression": {
                                    "id": 73314,
                                    "name": "condition",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 73309,
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
                            "id": 73320,
                            "nodeType": "IfStatement",
                            "src": "990:34:176",
                            "trueBody": {
                                "expression": {
                                    "arguments": [
                                        {
                                            "id": 73317,
                                            "name": "errorCode",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73311,
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
                                        "id": 73316,
                                        "name": "_revert",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [
                                            73353,
                                            73373
                                        ],
                                        "referencedDeclaration": 73353,
                                        "src": "1006:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                                            "typeString": "function (uint256) pure"
                                        }
                                    },
                                    "id": 73318,
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
                                "id": 73319,
                                "nodeType": "ExpressionStatement",
                                "src": "1006:18:176"
                            }
                        }
                    ]
                },
                "documentation": {
                    "id": 73307,
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
                    "id": 73312,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 73309,
                            "mutability": "mutable",
                            "name": "condition",
                            "nameLocation": "949:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73322,
                            "src": "944:14:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 73308,
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
                            "id": 73311,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "968:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73322,
                            "src": "960:17:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 73310,
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
                    "id": 73313,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "984:0:176"
                },
                "scope": 73879,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 73341,
                "nodeType": "FunctionDefinition",
                "src": "1162:124:176",
                "nodes": [],
                "body": {
                    "id": 73340,
                    "nodeType": "Block",
                    "src": "1235:51:176",
                    "nodes": [],
                    "statements": [
                        {
                            "condition": {
                                "id": 73333,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "1245:10:176",
                                "subExpression": {
                                    "id": 73332,
                                    "name": "condition",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 73325,
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
                            "id": 73339,
                            "nodeType": "IfStatement",
                            "src": "1241:42:176",
                            "trueBody": {
                                "expression": {
                                    "arguments": [
                                        {
                                            "id": 73335,
                                            "name": "errorCode",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73327,
                                            "src": "1265:9:176",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        {
                                            "id": 73336,
                                            "name": "prefix",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73329,
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
                                        "id": 73334,
                                        "name": "_revert",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [
                                            73353,
                                            73373
                                        ],
                                        "referencedDeclaration": 73373,
                                        "src": "1257:7:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                                            "typeString": "function (uint256,bytes3) pure"
                                        }
                                    },
                                    "id": 73337,
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
                                "id": 73338,
                                "nodeType": "ExpressionStatement",
                                "src": "1257:26:176"
                            }
                        }
                    ]
                },
                "documentation": {
                    "id": 73323,
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
                    "id": 73330,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 73325,
                            "mutability": "mutable",
                            "name": "condition",
                            "nameLocation": "1185:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73341,
                            "src": "1180:14:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 73324,
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
                            "id": 73327,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "1204:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73341,
                            "src": "1196:17:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 73326,
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
                            "id": 73329,
                            "mutability": "mutable",
                            "name": "prefix",
                            "nameLocation": "1222:6:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73341,
                            "src": "1215:13:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes3",
                                "typeString": "bytes3"
                            },
                            "typeName": {
                                "id": 73328,
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
                    "id": 73331,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1235:0:176"
                },
                "scope": 73879,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 73353,
                "nodeType": "FunctionDefinition",
                "src": "1445:126:176",
                "nodes": [],
                "body": {
                    "id": 73352,
                    "nodeType": "Block",
                    "src": "1486:85:176",
                    "nodes": [],
                    "statements": [
                        {
                            "expression": {
                                "arguments": [
                                    {
                                        "id": 73348,
                                        "name": "errorCode",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 73344,
                                        "src": "1500:9:176",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    {
                                        "hexValue": "3078343234313463",
                                        "id": 73349,
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
                                    "id": 73347,
                                    "name": "_revert",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                        73353,
                                        73373
                                    ],
                                    "referencedDeclaration": 73373,
                                    "src": "1492:7:176",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                                        "typeString": "function (uint256,bytes3) pure"
                                    }
                                },
                                "id": 73350,
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
                            "id": 73351,
                            "nodeType": "ExpressionStatement",
                            "src": "1492:28:176"
                        }
                    ]
                },
                "documentation": {
                    "id": 73342,
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
                    "id": 73345,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 73344,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "1470:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73353,
                            "src": "1462:17:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 73343,
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
                    "id": 73346,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1486:0:176"
                },
                "scope": 73879,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 73373,
                "nodeType": "FunctionDefinition",
                "src": "1678:3526:176",
                "nodes": [],
                "body": {
                    "id": 73372,
                    "nodeType": "Block",
                    "src": "1734:3470:176",
                    "nodes": [],
                    "statements": [
                        {
                            "assignments": [
                                73362
                            ],
                            "declarations": [
                                {
                                    "constant": false,
                                    "id": 73362,
                                    "mutability": "mutable",
                                    "name": "prefixUint",
                                    "nameLocation": "1748:10:176",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73372,
                                    "src": "1740:18:176",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73361,
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
                            "id": 73370,
                            "initialValue": {
                                "arguments": [
                                    {
                                        "arguments": [
                                            {
                                                "id": 73367,
                                                "name": "prefix",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73358,
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
                                            "id": 73366,
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
                                                "id": 73365,
                                                "name": "uint24",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1769:6:176",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 73368,
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
                                    "id": 73364,
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
                                        "id": 73363,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1761:7:176",
                                        "typeDescriptions": {}
                                    }
                                },
                                "id": 73369,
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
                                    "declaration": 73356,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2868:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73356,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2899:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73356,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2916:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73356,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2961:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73356,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "2992:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73356,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "3009:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73356,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "3056:9:176",
                                    "valueSize": 1
                                },
                                {
                                    "declaration": 73362,
                                    "isOffset": false,
                                    "isSlot": false,
                                    "src": "3758:10:176",
                                    "valueSize": 1
                                }
                            ],
                            "id": 73371,
                            "nodeType": "InlineAssembly",
                            "src": "2564:2638:176"
                        }
                    ]
                },
                "documentation": {
                    "id": 73354,
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
                    "id": 73359,
                    "nodeType": "ParameterList",
                    "parameters": [
                        {
                            "constant": false,
                            "id": 73356,
                            "mutability": "mutable",
                            "name": "errorCode",
                            "nameLocation": "1703:9:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73373,
                            "src": "1695:17:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 73355,
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
                            "id": 73358,
                            "mutability": "mutable",
                            "name": "prefix",
                            "nameLocation": "1721:6:176",
                            "nodeType": "VariableDeclaration",
                            "scope": 73373,
                            "src": "1714:13:176",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes3",
                                "typeString": "bytes3"
                            },
                            "typeName": {
                                "id": 73357,
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
                    "id": 73360,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "1734:0:176"
                },
                "scope": 73879,
                "stateMutability": "pure",
                "virtual": false,
                "visibility": "internal"
            },
            {
                "id": 73878,
                "nodeType": "ContractDefinition",
                "src": "5206:10031:176",
                "nodes": [
                    {
                        "id": 73376,
                        "nodeType": "VariableDeclaration",
                        "src": "5247:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADD_OVERFLOW",
                        "nameLocation": "5273:12:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73374,
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
                            "id": 73375,
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
                        "id": 73379,
                        "nodeType": "VariableDeclaration",
                        "src": "5295:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SUB_OVERFLOW",
                        "nameLocation": "5321:12:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73377,
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
                            "id": 73378,
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
                        "id": 73382,
                        "nodeType": "VariableDeclaration",
                        "src": "5343:43:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SUB_UNDERFLOW",
                        "nameLocation": "5369:13:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73380,
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
                            "id": 73381,
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
                        "id": 73385,
                        "nodeType": "VariableDeclaration",
                        "src": "5392:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MUL_OVERFLOW",
                        "nameLocation": "5418:12:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73383,
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
                            "id": 73384,
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
                        "id": 73388,
                        "nodeType": "VariableDeclaration",
                        "src": "5440:43:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ZERO_DIVISION",
                        "nameLocation": "5466:13:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73386,
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
                            "id": 73387,
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
                        "id": 73391,
                        "nodeType": "VariableDeclaration",
                        "src": "5489:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "DIV_INTERNAL",
                        "nameLocation": "5515:12:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73389,
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
                            "id": 73390,
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
                        "id": 73394,
                        "nodeType": "VariableDeclaration",
                        "src": "5537:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "X_OUT_OF_BOUNDS",
                        "nameLocation": "5563:15:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73392,
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
                            "id": 73393,
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
                        "id": 73397,
                        "nodeType": "VariableDeclaration",
                        "src": "5588:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "Y_OUT_OF_BOUNDS",
                        "nameLocation": "5614:15:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73395,
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
                            "id": 73396,
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
                        "id": 73400,
                        "nodeType": "VariableDeclaration",
                        "src": "5639:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PRODUCT_OUT_OF_BOUNDS",
                        "nameLocation": "5665:21:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73398,
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
                            "id": 73399,
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
                        "id": 73403,
                        "nodeType": "VariableDeclaration",
                        "src": "5696:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_EXPONENT",
                        "nameLocation": "5722:16:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73401,
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
                            "id": 73402,
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
                        "id": 73406,
                        "nodeType": "VariableDeclaration",
                        "src": "5762:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "OUT_OF_BOUNDS",
                        "nameLocation": "5788:13:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73404,
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
                            "id": 73405,
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
                        "id": 73409,
                        "nodeType": "VariableDeclaration",
                        "src": "5813:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNSORTED_ARRAY",
                        "nameLocation": "5839:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73407,
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
                            "id": 73408,
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
                        "id": 73412,
                        "nodeType": "VariableDeclaration",
                        "src": "5865:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNSORTED_TOKENS",
                        "nameLocation": "5891:15:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73410,
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
                            "id": 73411,
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
                        "id": 73415,
                        "nodeType": "VariableDeclaration",
                        "src": "5918:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INPUT_LENGTH_MISMATCH",
                        "nameLocation": "5944:21:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73413,
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
                            "id": 73414,
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
                        "id": 73418,
                        "nodeType": "VariableDeclaration",
                        "src": "5977:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ZERO_TOKEN",
                        "nameLocation": "6003:10:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73416,
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
                            "id": 73417,
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
                        "id": 73421,
                        "nodeType": "VariableDeclaration",
                        "src": "6025:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_DATA",
                        "nameLocation": "6051:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73419,
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
                            "id": 73420,
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
                        "id": 73424,
                        "nodeType": "VariableDeclaration",
                        "src": "6101:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_TOKENS",
                        "nameLocation": "6127:10:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73422,
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
                            "id": 73423,
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
                        "id": 73427,
                        "nodeType": "VariableDeclaration",
                        "src": "6149:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_TOKENS",
                        "nameLocation": "6175:10:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73425,
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
                            "id": 73426,
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
                        "id": 73430,
                        "nodeType": "VariableDeclaration",
                        "src": "6197:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_SWAP_FEE_PERCENTAGE",
                        "nameLocation": "6223:23:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73428,
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
                            "id": 73429,
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
                        "id": 73433,
                        "nodeType": "VariableDeclaration",
                        "src": "6258:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_SWAP_FEE_PERCENTAGE",
                        "nameLocation": "6284:23:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73431,
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
                            "id": 73432,
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
                        "id": 73436,
                        "nodeType": "VariableDeclaration",
                        "src": "6319:43:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MINIMUM_BPT",
                        "nameLocation": "6345:11:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73434,
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
                            "id": 73435,
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
                        "id": 73439,
                        "nodeType": "VariableDeclaration",
                        "src": "6368:48:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_NOT_VAULT",
                        "nameLocation": "6394:16:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73437,
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
                            "id": 73438,
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
                        "id": 73442,
                        "nodeType": "VariableDeclaration",
                        "src": "6422:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNINITIALIZED",
                        "nameLocation": "6448:13:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73440,
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
                            "id": 73441,
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
                        "id": 73445,
                        "nodeType": "VariableDeclaration",
                        "src": "6473:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BPT_IN_MAX_AMOUNT",
                        "nameLocation": "6499:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73443,
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
                            "id": 73444,
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
                        "id": 73448,
                        "nodeType": "VariableDeclaration",
                        "src": "6528:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BPT_OUT_MIN_AMOUNT",
                        "nameLocation": "6554:18:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73446,
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
                            "id": 73447,
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
                        "id": 73451,
                        "nodeType": "VariableDeclaration",
                        "src": "6584:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "EXPIRED_PERMIT",
                        "nameLocation": "6610:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73449,
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
                            "id": 73450,
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
                        "id": 73454,
                        "nodeType": "VariableDeclaration",
                        "src": "6636:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_TWO_TOKENS",
                        "nameLocation": "6662:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73452,
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
                            "id": 73453,
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
                        "id": 73457,
                        "nodeType": "VariableDeclaration",
                        "src": "6688:40:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "DISABLED",
                        "nameLocation": "6714:8:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73455,
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
                            "id": 73456,
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
                        "id": 73460,
                        "nodeType": "VariableDeclaration",
                        "src": "6748:39:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_AMP",
                        "nameLocation": "6774:7:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73458,
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
                            "id": 73459,
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
                        "id": 73463,
                        "nodeType": "VariableDeclaration",
                        "src": "6793:39:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_AMP",
                        "nameLocation": "6819:7:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73461,
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
                            "id": 73462,
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
                        "id": 73466,
                        "nodeType": "VariableDeclaration",
                        "src": "6838:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_WEIGHT",
                        "nameLocation": "6864:10:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73464,
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
                            "id": 73465,
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
                        "id": 73469,
                        "nodeType": "VariableDeclaration",
                        "src": "6886:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_STABLE_TOKENS",
                        "nameLocation": "6912:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73467,
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
                            "id": 73468,
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
                        "id": 73472,
                        "nodeType": "VariableDeclaration",
                        "src": "6941:44:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_IN_RATIO",
                        "nameLocation": "6967:12:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73470,
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
                            "id": 73471,
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
                        "id": 73475,
                        "nodeType": "VariableDeclaration",
                        "src": "6991:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_OUT_RATIO",
                        "nameLocation": "7017:13:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73473,
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
                            "id": 73474,
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
                        "id": 73478,
                        "nodeType": "VariableDeclaration",
                        "src": "7042:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MIN_BPT_IN_FOR_TOKEN_OUT",
                        "nameLocation": "7068:24:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73476,
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
                            "id": 73477,
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
                        "id": 73481,
                        "nodeType": "VariableDeclaration",
                        "src": "7104:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_OUT_BPT_FOR_TOKEN_IN",
                        "nameLocation": "7130:24:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73479,
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
                            "id": 73480,
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
                        "id": 73484,
                        "nodeType": "VariableDeclaration",
                        "src": "7166:59:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NORMALIZED_WEIGHT_INVARIANT",
                        "nameLocation": "7192:27:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73482,
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
                            "id": 73483,
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
                        "id": 73487,
                        "nodeType": "VariableDeclaration",
                        "src": "7231:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_TOKEN",
                        "nameLocation": "7257:13:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73485,
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
                            "id": 73486,
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
                        "id": 73490,
                        "nodeType": "VariableDeclaration",
                        "src": "7282:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_JOIN_KIND",
                        "nameLocation": "7308:19:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73488,
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
                            "id": 73489,
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
                        "id": 73493,
                        "nodeType": "VariableDeclaration",
                        "src": "7339:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ZERO_INVARIANT",
                        "nameLocation": "7365:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73491,
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
                            "id": 73492,
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
                        "id": 73496,
                        "nodeType": "VariableDeclaration",
                        "src": "7391:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_INVALID_SECONDS_QUERY",
                        "nameLocation": "7417:28:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73494,
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
                            "id": 73495,
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
                        "id": 73499,
                        "nodeType": "VariableDeclaration",
                        "src": "7457:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_NOT_INITIALIZED",
                        "nameLocation": "7483:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73497,
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
                            "id": 73498,
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
                        "id": 73502,
                        "nodeType": "VariableDeclaration",
                        "src": "7517:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_QUERY_TOO_OLD",
                        "nameLocation": "7543:20:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73500,
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
                            "id": 73501,
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
                        "id": 73505,
                        "nodeType": "VariableDeclaration",
                        "src": "7575:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_INVALID_INDEX",
                        "nameLocation": "7601:20:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73503,
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
                            "id": 73504,
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
                        "id": 73508,
                        "nodeType": "VariableDeclaration",
                        "src": "7633:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ORACLE_BAD_SECS",
                        "nameLocation": "7659:15:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73506,
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
                            "id": 73507,
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
                        "id": 73511,
                        "nodeType": "VariableDeclaration",
                        "src": "7686:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_END_TIME_TOO_CLOSE",
                        "nameLocation": "7712:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73509,
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
                            "id": 73510,
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
                        "id": 73514,
                        "nodeType": "VariableDeclaration",
                        "src": "7746:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_ONGOING_UPDATE",
                        "nameLocation": "7772:18:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73512,
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
                            "id": 73513,
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
                        "id": 73517,
                        "nodeType": "VariableDeclaration",
                        "src": "7802:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_RATE_TOO_HIGH",
                        "nameLocation": "7828:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73515,
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
                            "id": 73516,
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
                        "id": 73520,
                        "nodeType": "VariableDeclaration",
                        "src": "7857:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AMP_NO_ONGOING_UPDATE",
                        "nameLocation": "7883:21:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73518,
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
                            "id": 73519,
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
                        "id": 73523,
                        "nodeType": "VariableDeclaration",
                        "src": "7916:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "STABLE_INVARIANT_DIDNT_CONVERGE",
                        "nameLocation": "7942:31:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73521,
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
                            "id": 73522,
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
                        "id": 73526,
                        "nodeType": "VariableDeclaration",
                        "src": "7985:65:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "STABLE_GET_BALANCE_DIDNT_CONVERGE",
                        "nameLocation": "8011:33:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73524,
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
                            "id": 73525,
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
                        "id": 73529,
                        "nodeType": "VariableDeclaration",
                        "src": "8056:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RELAYER_NOT_CONTRACT",
                        "nameLocation": "8082:20:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73527,
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
                            "id": 73528,
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
                        "id": 73532,
                        "nodeType": "VariableDeclaration",
                        "src": "8114:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BASE_POOL_RELAYER_NOT_CALLED",
                        "nameLocation": "8140:28:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73530,
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
                            "id": 73531,
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
                        "id": 73535,
                        "nodeType": "VariableDeclaration",
                        "src": "8180:61:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "REBALANCING_RELAYER_REENTERED",
                        "nameLocation": "8206:29:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73533,
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
                            "id": 73534,
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
                        "id": 73538,
                        "nodeType": "VariableDeclaration",
                        "src": "8247:58:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "GRADUAL_UPDATE_TIME_TRAVEL",
                        "nameLocation": "8273:26:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73536,
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
                            "id": 73537,
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
                        "id": 73541,
                        "nodeType": "VariableDeclaration",
                        "src": "8311:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAPS_DISABLED",
                        "nameLocation": "8337:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73539,
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
                            "id": 73540,
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
                        "id": 73544,
                        "nodeType": "VariableDeclaration",
                        "src": "8363:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_IS_NOT_LBP_OWNER",
                        "nameLocation": "8389:23:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73542,
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
                            "id": 73543,
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
                        "id": 73547,
                        "nodeType": "VariableDeclaration",
                        "src": "8424:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PRICE_RATE_OVERFLOW",
                        "nameLocation": "8450:19:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73545,
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
                            "id": 73546,
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
                        "id": 73550,
                        "nodeType": "VariableDeclaration",
                        "src": "8481:75:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_JOIN_EXIT_KIND_WHILE_SWAPS_DISABLED",
                        "nameLocation": "8507:43:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73548,
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
                            "id": 73549,
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
                        "id": 73553,
                        "nodeType": "VariableDeclaration",
                        "src": "8562:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "WEIGHT_CHANGE_TOO_FAST",
                        "nameLocation": "8588:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73551,
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
                            "id": 73552,
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
                        "id": 73556,
                        "nodeType": "VariableDeclaration",
                        "src": "8622:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "LOWER_GREATER_THAN_UPPER_TARGET",
                        "nameLocation": "8648:31:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73554,
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
                            "id": 73555,
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
                        "id": 73559,
                        "nodeType": "VariableDeclaration",
                        "src": "8691:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UPPER_TARGET_TOO_HIGH",
                        "nameLocation": "8717:21:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73557,
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
                            "id": 73558,
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
                        "id": 73562,
                        "nodeType": "VariableDeclaration",
                        "src": "8750:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_BY_LINEAR_POOL",
                        "nameLocation": "8776:24:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73560,
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
                            "id": 73561,
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
                        "id": 73565,
                        "nodeType": "VariableDeclaration",
                        "src": "8812:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "OUT_OF_TARGET_RANGE",
                        "nameLocation": "8838:19:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73563,
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
                            "id": 73564,
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
                        "id": 73568,
                        "nodeType": "VariableDeclaration",
                        "src": "8869:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_EXIT_KIND",
                        "nameLocation": "8895:19:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73566,
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
                            "id": 73567,
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
                        "id": 73571,
                        "nodeType": "VariableDeclaration",
                        "src": "8926:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNAUTHORIZED_EXIT",
                        "nameLocation": "8952:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73569,
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
                            "id": 73570,
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
                        "id": 73574,
                        "nodeType": "VariableDeclaration",
                        "src": "8981:66:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_MANAGEMENT_SWAP_FEE_PERCENTAGE",
                        "nameLocation": "9007:34:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73572,
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
                            "id": 73573,
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
                        "id": 73577,
                        "nodeType": "VariableDeclaration",
                        "src": "9053:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_BY_MANAGED_POOL",
                        "nameLocation": "9079:25:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73575,
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
                            "id": 73576,
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
                        "id": 73580,
                        "nodeType": "VariableDeclaration",
                        "src": "9116:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_BY_PHANTOM_POOL",
                        "nameLocation": "9142:25:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73578,
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
                            "id": 73579,
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
                        "id": 73583,
                        "nodeType": "VariableDeclaration",
                        "src": "9179:65:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKEN_DOES_NOT_HAVE_RATE_PROVIDER",
                        "nameLocation": "9205:33:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73581,
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
                            "id": 73582,
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
                        "id": 73586,
                        "nodeType": "VariableDeclaration",
                        "src": "9250:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_INITIALIZATION",
                        "nameLocation": "9276:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73584,
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
                            "id": 73585,
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
                        "id": 73589,
                        "nodeType": "VariableDeclaration",
                        "src": "9310:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "OUT_OF_NEW_TARGET_RANGE",
                        "nameLocation": "9336:23:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73587,
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
                            "id": 73588,
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
                        "id": 73592,
                        "nodeType": "VariableDeclaration",
                        "src": "9371:48:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "FEATURE_DISABLED",
                        "nameLocation": "9397:16:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73590,
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
                            "id": 73591,
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
                        "id": 73595,
                        "nodeType": "VariableDeclaration",
                        "src": "9425:61:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNINITIALIZED_POOL_CONTROLLER",
                        "nameLocation": "9451:29:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73593,
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
                            "id": 73594,
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
                        "id": 73598,
                        "nodeType": "VariableDeclaration",
                        "src": "9492:62:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SET_SWAP_FEE_DURING_FEE_CHANGE",
                        "nameLocation": "9518:30:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73596,
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
                            "id": 73597,
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
                        "id": 73601,
                        "nodeType": "VariableDeclaration",
                        "src": "9560:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SET_SWAP_FEE_PENDING_FEE_CHANGE",
                        "nameLocation": "9586:31:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73599,
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
                            "id": 73600,
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
                        "id": 73604,
                        "nodeType": "VariableDeclaration",
                        "src": "9629:66:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CHANGE_TOKENS_DURING_WEIGHT_CHANGE",
                        "nameLocation": "9655:34:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73602,
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
                            "id": 73603,
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
                        "id": 73607,
                        "nodeType": "VariableDeclaration",
                        "src": "9701:67:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CHANGE_TOKENS_PENDING_WEIGHT_CHANGE",
                        "nameLocation": "9727:35:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73605,
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
                            "id": 73606,
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
                        "id": 73610,
                        "nodeType": "VariableDeclaration",
                        "src": "9774:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_WEIGHT",
                        "nameLocation": "9800:10:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73608,
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
                            "id": 73609,
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
                        "id": 73613,
                        "nodeType": "VariableDeclaration",
                        "src": "9822:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNAUTHORIZED_JOIN",
                        "nameLocation": "9848:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73611,
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
                            "id": 73612,
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
                        "id": 73616,
                        "nodeType": "VariableDeclaration",
                        "src": "9877:65:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_MANAGEMENT_AUM_FEE_PERCENTAGE",
                        "nameLocation": "9903:33:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73614,
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
                            "id": 73615,
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
                        "id": 73619,
                        "nodeType": "VariableDeclaration",
                        "src": "9948:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "FRACTIONAL_TARGET",
                        "nameLocation": "9974:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73617,
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
                            "id": 73618,
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
                        "id": 73622,
                        "nodeType": "VariableDeclaration",
                        "src": "10003:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADD_OR_REMOVE_BPT",
                        "nameLocation": "10029:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73620,
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
                            "id": 73621,
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
                        "id": 73625,
                        "nodeType": "VariableDeclaration",
                        "src": "10058:62:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_CIRCUIT_BREAKER_BOUNDS",
                        "nameLocation": "10084:30:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73623,
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
                            "id": 73624,
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
                        "id": 73628,
                        "nodeType": "VariableDeclaration",
                        "src": "10126:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CIRCUIT_BREAKER_TRIPPED",
                        "nameLocation": "10152:23:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73626,
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
                            "id": 73627,
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
                        "id": 73631,
                        "nodeType": "VariableDeclaration",
                        "src": "10187:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MALICIOUS_QUERY_REVERT",
                        "nameLocation": "10213:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73629,
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
                            "id": 73630,
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
                        "id": 73634,
                        "nodeType": "VariableDeclaration",
                        "src": "10247:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "JOINS_EXITS_DISABLED",
                        "nameLocation": "10273:20:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73632,
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
                            "id": 73633,
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
                        "id": 73637,
                        "nodeType": "VariableDeclaration",
                        "src": "10317:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "REENTRANCY",
                        "nameLocation": "10343:10:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73635,
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
                            "id": 73636,
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
                        "id": 73640,
                        "nodeType": "VariableDeclaration",
                        "src": "10365:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SENDER_NOT_ALLOWED",
                        "nameLocation": "10391:18:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73638,
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
                            "id": 73639,
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
                        "id": 73643,
                        "nodeType": "VariableDeclaration",
                        "src": "10421:38:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PAUSED",
                        "nameLocation": "10447:6:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73641,
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
                            "id": 73642,
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
                        "id": 73646,
                        "nodeType": "VariableDeclaration",
                        "src": "10465:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "PAUSE_WINDOW_EXPIRED",
                        "nameLocation": "10491:20:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73644,
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
                            "id": 73645,
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
                        "id": 73649,
                        "nodeType": "VariableDeclaration",
                        "src": "10523:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_PAUSE_WINDOW_DURATION",
                        "nameLocation": "10549:25:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73647,
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
                            "id": 73648,
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
                        "id": 73652,
                        "nodeType": "VariableDeclaration",
                        "src": "10586:58:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_BUFFER_PERIOD_DURATION",
                        "nameLocation": "10612:26:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73650,
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
                            "id": 73651,
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
                        "id": 73655,
                        "nodeType": "VariableDeclaration",
                        "src": "10650:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_BALANCE",
                        "nameLocation": "10676:20:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73653,
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
                            "id": 73654,
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
                        "id": 73658,
                        "nodeType": "VariableDeclaration",
                        "src": "10708:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_ALLOWANCE",
                        "nameLocation": "10734:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73656,
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
                            "id": 73657,
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
                        "id": 73661,
                        "nodeType": "VariableDeclaration",
                        "src": "10768:64:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_FROM_ZERO_ADDRESS",
                        "nameLocation": "10794:32:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73659,
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
                            "id": 73660,
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
                        "id": 73664,
                        "nodeType": "VariableDeclaration",
                        "src": "10838:62:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_TO_ZERO_ADDRESS",
                        "nameLocation": "10864:30:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73662,
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
                            "id": 73663,
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
                        "id": 73667,
                        "nodeType": "VariableDeclaration",
                        "src": "10906:58:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_MINT_TO_ZERO_ADDRESS",
                        "nameLocation": "10932:26:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73665,
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
                            "id": 73666,
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
                        "id": 73670,
                        "nodeType": "VariableDeclaration",
                        "src": "10970:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_BURN_FROM_ZERO_ADDRESS",
                        "nameLocation": "10996:28:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73668,
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
                            "id": 73669,
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
                        "id": 73673,
                        "nodeType": "VariableDeclaration",
                        "src": "11036:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_APPROVE_FROM_ZERO_ADDRESS",
                        "nameLocation": "11062:31:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73671,
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
                            "id": 73672,
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
                        "id": 73676,
                        "nodeType": "VariableDeclaration",
                        "src": "11105:61:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_APPROVE_TO_ZERO_ADDRESS",
                        "nameLocation": "11131:29:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73674,
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
                            "id": 73675,
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
                        "id": 73679,
                        "nodeType": "VariableDeclaration",
                        "src": "11172:64:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_EXCEEDS_ALLOWANCE",
                        "nameLocation": "11198:32:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73677,
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
                            "id": 73678,
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
                        "id": 73682,
                        "nodeType": "VariableDeclaration",
                        "src": "11242:68:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_DECREASED_ALLOWANCE_BELOW_ZERO",
                        "nameLocation": "11268:36:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73680,
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
                            "id": 73681,
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
                        "id": 73685,
                        "nodeType": "VariableDeclaration",
                        "src": "11316:62:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_TRANSFER_EXCEEDS_BALANCE",
                        "nameLocation": "11342:30:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73683,
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
                            "id": 73684,
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
                        "id": 73688,
                        "nodeType": "VariableDeclaration",
                        "src": "11384:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_BURN_EXCEEDS_ALLOWANCE",
                        "nameLocation": "11410:28:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73686,
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
                            "id": 73687,
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
                        "id": 73691,
                        "nodeType": "VariableDeclaration",
                        "src": "11450:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SAFE_ERC20_CALL_FAILED",
                        "nameLocation": "11476:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73689,
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
                            "id": 73690,
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
                        "id": 73694,
                        "nodeType": "VariableDeclaration",
                        "src": "11510:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_INSUFFICIENT_BALANCE",
                        "nameLocation": "11536:28:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73692,
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
                            "id": 73693,
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
                        "id": 73697,
                        "nodeType": "VariableDeclaration",
                        "src": "11576:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_CANNOT_SEND_VALUE",
                        "nameLocation": "11602:25:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73695,
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
                            "id": 73696,
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
                        "id": 73700,
                        "nodeType": "VariableDeclaration",
                        "src": "11639:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SAFE_CAST_VALUE_CANT_FIT_INT256",
                        "nameLocation": "11665:31:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73698,
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
                            "id": 73699,
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
                        "id": 73703,
                        "nodeType": "VariableDeclaration",
                        "src": "11708:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "GRANT_SENDER_NOT_ADMIN",
                        "nameLocation": "11734:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73701,
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
                            "id": 73702,
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
                        "id": 73706,
                        "nodeType": "VariableDeclaration",
                        "src": "11768:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "REVOKE_SENDER_NOT_ADMIN",
                        "nameLocation": "11794:23:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73704,
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
                            "id": 73705,
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
                        "id": 73709,
                        "nodeType": "VariableDeclaration",
                        "src": "11829:59:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "RENOUNCE_SENDER_NOT_ALLOWED",
                        "nameLocation": "11855:27:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73707,
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
                            "id": 73708,
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
                        "id": 73712,
                        "nodeType": "VariableDeclaration",
                        "src": "11894:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BUFFER_PERIOD_EXPIRED",
                        "nameLocation": "11920:21:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73710,
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
                            "id": 73711,
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
                        "id": 73715,
                        "nodeType": "VariableDeclaration",
                        "src": "11953:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_IS_NOT_OWNER",
                        "nameLocation": "11979:19:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73713,
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
                            "id": 73714,
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
                        "id": 73718,
                        "nodeType": "VariableDeclaration",
                        "src": "12010:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NEW_OWNER_IS_ZERO",
                        "nameLocation": "12036:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73716,
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
                            "id": 73717,
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
                        "id": 73721,
                        "nodeType": "VariableDeclaration",
                        "src": "12065:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CODE_DEPLOYMENT_FAILED",
                        "nameLocation": "12091:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73719,
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
                            "id": 73720,
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
                        "id": 73724,
                        "nodeType": "VariableDeclaration",
                        "src": "12125:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALL_TO_NON_CONTRACT",
                        "nameLocation": "12151:20:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73722,
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
                            "id": 73723,
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
                        "id": 73727,
                        "nodeType": "VariableDeclaration",
                        "src": "12183:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "LOW_LEVEL_CALL_FAILED",
                        "nameLocation": "12209:21:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73725,
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
                            "id": 73726,
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
                        "id": 73730,
                        "nodeType": "VariableDeclaration",
                        "src": "12242:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_PAUSED",
                        "nameLocation": "12268:10:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73728,
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
                            "id": 73729,
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
                        "id": 73733,
                        "nodeType": "VariableDeclaration",
                        "src": "12290:59:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_ALREADY_ALLOWLISTED",
                        "nameLocation": "12316:27:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73731,
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
                            "id": 73732,
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
                        "id": 73736,
                        "nodeType": "VariableDeclaration",
                        "src": "12355:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ADDRESS_NOT_ALLOWLISTED",
                        "nameLocation": "12381:23:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73734,
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
                            "id": 73735,
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
                        "id": 73739,
                        "nodeType": "VariableDeclaration",
                        "src": "12416:58:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ERC20_BURN_EXCEEDS_BALANCE",
                        "nameLocation": "12442:26:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73737,
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
                            "id": 73738,
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
                        "id": 73742,
                        "nodeType": "VariableDeclaration",
                        "src": "12480:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_OPERATION",
                        "nameLocation": "12506:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73740,
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
                            "id": 73741,
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
                        "id": 73745,
                        "nodeType": "VariableDeclaration",
                        "src": "12535:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CODEC_OVERFLOW",
                        "nameLocation": "12561:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73743,
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
                            "id": 73744,
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
                        "id": 73748,
                        "nodeType": "VariableDeclaration",
                        "src": "12587:48:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "IN_RECOVERY_MODE",
                        "nameLocation": "12613:16:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73746,
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
                            "id": 73747,
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
                        "id": 73751,
                        "nodeType": "VariableDeclaration",
                        "src": "12641:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NOT_IN_RECOVERY_MODE",
                        "nameLocation": "12667:20:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73749,
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
                            "id": 73750,
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
                        "id": 73754,
                        "nodeType": "VariableDeclaration",
                        "src": "12699:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INDUCED_FAILURE",
                        "nameLocation": "12725:15:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73752,
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
                            "id": 73753,
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
                        "id": 73757,
                        "nodeType": "VariableDeclaration",
                        "src": "12752:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "EXPIRED_SIGNATURE",
                        "nameLocation": "12778:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73755,
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
                            "id": 73756,
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
                        "id": 73760,
                        "nodeType": "VariableDeclaration",
                        "src": "12807:51:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MALFORMED_SIGNATURE",
                        "nameLocation": "12833:19:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73758,
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
                            "id": 73759,
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
                        "id": 73763,
                        "nodeType": "VariableDeclaration",
                        "src": "12864:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SAFE_CAST_VALUE_CANT_FIT_UINT64",
                        "nameLocation": "12890:31:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73761,
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
                            "id": 73762,
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
                        "id": 73766,
                        "nodeType": "VariableDeclaration",
                        "src": "12933:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNHANDLED_FEE_TYPE",
                        "nameLocation": "12959:18:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73764,
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
                            "id": 73765,
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
                        "id": 73769,
                        "nodeType": "VariableDeclaration",
                        "src": "12989:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BURN_FROM_ZERO",
                        "nameLocation": "13015:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73767,
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
                            "id": 73768,
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
                        "id": 73772,
                        "nodeType": "VariableDeclaration",
                        "src": "13055:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_POOL_ID",
                        "nameLocation": "13081:15:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73770,
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
                            "id": 73771,
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
                        "id": 73775,
                        "nodeType": "VariableDeclaration",
                        "src": "13108:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CALLER_NOT_POOL",
                        "nameLocation": "13134:15:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73773,
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
                            "id": 73774,
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
                        "id": 73778,
                        "nodeType": "VariableDeclaration",
                        "src": "13161:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SENDER_NOT_ASSET_MANAGER",
                        "nameLocation": "13187:24:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73776,
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
                            "id": 73777,
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
                        "id": 73781,
                        "nodeType": "VariableDeclaration",
                        "src": "13223:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "USER_DOESNT_ALLOW_RELAYER",
                        "nameLocation": "13249:25:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73779,
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
                            "id": 73780,
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
                        "id": 73784,
                        "nodeType": "VariableDeclaration",
                        "src": "13286:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_SIGNATURE",
                        "nameLocation": "13312:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73782,
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
                            "id": 73783,
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
                        "id": 73787,
                        "nodeType": "VariableDeclaration",
                        "src": "13341:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "EXIT_BELOW_MIN",
                        "nameLocation": "13367:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73785,
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
                            "id": 73786,
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
                        "id": 73790,
                        "nodeType": "VariableDeclaration",
                        "src": "13393:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "JOIN_ABOVE_MAX",
                        "nameLocation": "13419:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73788,
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
                            "id": 73789,
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
                        "id": 73793,
                        "nodeType": "VariableDeclaration",
                        "src": "13445:42:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAP_LIMIT",
                        "nameLocation": "13471:10:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73791,
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
                            "id": 73792,
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
                        "id": 73796,
                        "nodeType": "VariableDeclaration",
                        "src": "13493:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAP_DEADLINE",
                        "nameLocation": "13519:13:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73794,
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
                            "id": 73795,
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
                        "id": 73799,
                        "nodeType": "VariableDeclaration",
                        "src": "13544:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CANNOT_SWAP_SAME_TOKEN",
                        "nameLocation": "13570:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73797,
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
                            "id": 73798,
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
                        "id": 73802,
                        "nodeType": "VariableDeclaration",
                        "src": "13604:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNKNOWN_AMOUNT_IN_FIRST_SWAP",
                        "nameLocation": "13630:28:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73800,
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
                            "id": 73801,
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
                        "id": 73805,
                        "nodeType": "VariableDeclaration",
                        "src": "13670:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MALCONSTRUCTED_MULTIHOP_SWAP",
                        "nameLocation": "13696:28:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73803,
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
                            "id": 73804,
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
                        "id": 73808,
                        "nodeType": "VariableDeclaration",
                        "src": "13736:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INTERNAL_BALANCE_OVERFLOW",
                        "nameLocation": "13762:25:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73806,
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
                            "id": 73807,
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
                        "id": 73811,
                        "nodeType": "VariableDeclaration",
                        "src": "13799:61:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_INTERNAL_BALANCE",
                        "nameLocation": "13825:29:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73809,
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
                            "id": 73810,
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
                        "id": 73814,
                        "nodeType": "VariableDeclaration",
                        "src": "13866:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_ETH_INTERNAL_BALANCE",
                        "nameLocation": "13892:28:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73812,
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
                            "id": 73813,
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
                        "id": 73817,
                        "nodeType": "VariableDeclaration",
                        "src": "13932:57:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INVALID_POST_LOAN_BALANCE",
                        "nameLocation": "13958:25:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73815,
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
                            "id": 73816,
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
                        "id": 73820,
                        "nodeType": "VariableDeclaration",
                        "src": "13995:48:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_ETH",
                        "nameLocation": "14021:16:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73818,
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
                            "id": 73819,
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
                        "id": 73823,
                        "nodeType": "VariableDeclaration",
                        "src": "14049:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNALLOCATED_ETH",
                        "nameLocation": "14075:15:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73821,
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
                            "id": 73822,
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
                        "id": 73826,
                        "nodeType": "VariableDeclaration",
                        "src": "14102:44:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "ETH_TRANSFER",
                        "nameLocation": "14128:12:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73824,
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
                            "id": 73825,
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
                        "id": 73829,
                        "nodeType": "VariableDeclaration",
                        "src": "14152:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CANNOT_USE_ETH_SENTINEL",
                        "nameLocation": "14178:23:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73827,
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
                            "id": 73828,
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
                        "id": 73832,
                        "nodeType": "VariableDeclaration",
                        "src": "14213:47:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKENS_MISMATCH",
                        "nameLocation": "14239:15:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73830,
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
                            "id": 73831,
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
                        "id": 73835,
                        "nodeType": "VariableDeclaration",
                        "src": "14266:52:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKEN_NOT_REGISTERED",
                        "nameLocation": "14292:20:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73833,
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
                            "id": 73834,
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
                        "id": 73838,
                        "nodeType": "VariableDeclaration",
                        "src": "14324:56:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKEN_ALREADY_REGISTERED",
                        "nameLocation": "14350:24:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73836,
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
                            "id": 73837,
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
                        "id": 73841,
                        "nodeType": "VariableDeclaration",
                        "src": "14386:50:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKENS_ALREADY_SET",
                        "nameLocation": "14412:18:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73839,
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
                            "id": 73840,
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
                        "id": 73844,
                        "nodeType": "VariableDeclaration",
                        "src": "14442:55:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "TOKENS_LENGTH_MUST_BE_2",
                        "nameLocation": "14468:23:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73842,
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
                            "id": 73843,
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
                        "id": 73847,
                        "nodeType": "VariableDeclaration",
                        "src": "14503:53:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "NONZERO_TOKEN_BALANCE",
                        "nameLocation": "14529:21:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73845,
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
                            "id": 73846,
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
                        "id": 73850,
                        "nodeType": "VariableDeclaration",
                        "src": "14562:54:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "BALANCE_TOTAL_OVERFLOW",
                        "nameLocation": "14588:22:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73848,
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
                            "id": 73849,
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
                        "id": 73853,
                        "nodeType": "VariableDeclaration",
                        "src": "14622:46:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "POOL_NO_TOKENS",
                        "nameLocation": "14648:14:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73851,
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
                            "id": 73852,
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
                        "id": 73856,
                        "nodeType": "VariableDeclaration",
                        "src": "14674:63:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_FLASH_LOAN_BALANCE",
                        "nameLocation": "14700:31:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73854,
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
                            "id": 73855,
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
                        "id": 73859,
                        "nodeType": "VariableDeclaration",
                        "src": "14756:60:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SWAP_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "14782:28:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73857,
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
                            "id": 73858,
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
                        "id": 73862,
                        "nodeType": "VariableDeclaration",
                        "src": "14822:66:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "FLASH_LOAN_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "14848:34:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73860,
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
                            "id": 73861,
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
                        "id": 73865,
                        "nodeType": "VariableDeclaration",
                        "src": "14894:66:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT",
                        "nameLocation": "14920:34:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73863,
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
                            "id": 73864,
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
                        "id": 73868,
                        "nodeType": "VariableDeclaration",
                        "src": "14966:59:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "AUM_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "14992:27:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73866,
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
                            "id": 73867,
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
                        "id": 73871,
                        "nodeType": "VariableDeclaration",
                        "src": "15051:64:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SPLITTER_FEE_PERCENTAGE_TOO_HIGH",
                        "nameLocation": "15077:32:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73869,
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
                            "id": 73870,
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
                        "id": 73874,
                        "nodeType": "VariableDeclaration",
                        "src": "15134:45:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UNIMPLEMENTED",
                        "nameLocation": "15160:13:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73872,
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
                            "id": 73873,
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
                        "id": 73877,
                        "nodeType": "VariableDeclaration",
                        "src": "15185:49:176",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SHOULD_NOT_HAPPEN",
                        "nameLocation": "15211:17:176",
                        "scope": 73878,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 73875,
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
                            "id": 73876,
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
                    73878
                ],
                "name": "BalancerErrors",
                "nameLocation": "5214:14:176",
                "scope": 73879,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "GPL-3.0-or-later"
    },
    "id": 176
};
