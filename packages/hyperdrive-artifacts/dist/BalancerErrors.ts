export const BalancerErrors = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122090253c552afcefb3f0b0057a53ac848c40ccc3f7199ac0ddd1a934dff483a71264736f6c63430008130033",
    "sourceMap": "5206:10031:106:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;5206:10031:106;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122090253c552afcefb3f0b0057a53ac848c40ccc3f7199ac0ddd1a934dff483a71264736f6c63430008130033",
    "sourceMap": "5206:10031:106:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/3rdPartyLibs/BalancerErrors.sol\":\"BalancerErrors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"test/3rdPartyLibs/BalancerErrors.sol\":{\"keccak256\":\"0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611\",\"dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
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
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
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
    "id": 66442,
    "exportedSymbols": {
      "BalancerErrors": [
        66441
      ],
      "_require": [
        65885,
        65904
      ],
      "_revert": [
        65916,
        65936
      ]
    },
    "nodeType": "SourceUnit",
    "src": "688:14550:106",
    "nodes": [
      {
        "id": 65869,
        "nodeType": "PragmaDirective",
        "src": "688:31:106",
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
        "id": 65885,
        "nodeType": "FunctionDefinition",
        "src": "926:101:106",
        "nodes": [],
        "body": {
          "id": 65884,
          "nodeType": "Block",
          "src": "984:43:106",
          "nodes": [],
          "statements": [
            {
              "condition": {
                "id": 65878,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "lValueRequested": false,
                "nodeType": "UnaryOperation",
                "operator": "!",
                "prefix": true,
                "src": "994:10:106",
                "subExpression": {
                  "id": 65877,
                  "name": "condition",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 65872,
                  "src": "995:9:106",
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
              "id": 65883,
              "nodeType": "IfStatement",
              "src": "990:34:106",
              "trueBody": {
                "expression": {
                  "arguments": [
                    {
                      "id": 65880,
                      "name": "errorCode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 65874,
                      "src": "1014:9:106",
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
                    "id": 65879,
                    "name": "_revert",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [
                      65916,
                      65936
                    ],
                    "referencedDeclaration": 65916,
                    "src": "1006:7:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                      "typeString": "function (uint256) pure"
                    }
                  },
                  "id": 65881,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1006:18:106",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 65882,
                "nodeType": "ExpressionStatement",
                "src": "1006:18:106"
              }
            }
          ]
        },
        "documentation": {
          "id": 65870,
          "nodeType": "StructuredDocumentation",
          "src": "741:184:106",
          "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.\n Uses the default 'BAL' prefix for the error code"
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_require",
        "nameLocation": "935:8:106",
        "parameters": {
          "id": 65875,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 65872,
              "mutability": "mutable",
              "name": "condition",
              "nameLocation": "949:9:106",
              "nodeType": "VariableDeclaration",
              "scope": 65885,
              "src": "944:14:106",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 65871,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "944:4:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 65874,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "968:9:106",
              "nodeType": "VariableDeclaration",
              "scope": 65885,
              "src": "960:17:106",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 65873,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "960:7:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "943:35:106"
        },
        "returnParameters": {
          "id": 65876,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "984:0:106"
        },
        "scope": 66442,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 65904,
        "nodeType": "FunctionDefinition",
        "src": "1162:124:106",
        "nodes": [],
        "body": {
          "id": 65903,
          "nodeType": "Block",
          "src": "1235:51:106",
          "nodes": [],
          "statements": [
            {
              "condition": {
                "id": 65896,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "lValueRequested": false,
                "nodeType": "UnaryOperation",
                "operator": "!",
                "prefix": true,
                "src": "1245:10:106",
                "subExpression": {
                  "id": 65895,
                  "name": "condition",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 65888,
                  "src": "1246:9:106",
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
              "id": 65902,
              "nodeType": "IfStatement",
              "src": "1241:42:106",
              "trueBody": {
                "expression": {
                  "arguments": [
                    {
                      "id": 65898,
                      "name": "errorCode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 65890,
                      "src": "1265:9:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    {
                      "id": 65899,
                      "name": "prefix",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 65892,
                      "src": "1276:6:106",
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
                    "id": 65897,
                    "name": "_revert",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [
                      65916,
                      65936
                    ],
                    "referencedDeclaration": 65936,
                    "src": "1257:7:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                      "typeString": "function (uint256,bytes3) pure"
                    }
                  },
                  "id": 65900,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1257:26:106",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 65901,
                "nodeType": "ExpressionStatement",
                "src": "1257:26:106"
              }
            }
          ]
        },
        "documentation": {
          "id": 65886,
          "nodeType": "StructuredDocumentation",
          "src": "1029:132:106",
          "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported."
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_require",
        "nameLocation": "1171:8:106",
        "parameters": {
          "id": 65893,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 65888,
              "mutability": "mutable",
              "name": "condition",
              "nameLocation": "1185:9:106",
              "nodeType": "VariableDeclaration",
              "scope": 65904,
              "src": "1180:14:106",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 65887,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1180:4:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 65890,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "1204:9:106",
              "nodeType": "VariableDeclaration",
              "scope": 65904,
              "src": "1196:17:106",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 65889,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1196:7:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 65892,
              "mutability": "mutable",
              "name": "prefix",
              "nameLocation": "1222:6:106",
              "nodeType": "VariableDeclaration",
              "scope": 65904,
              "src": "1215:13:106",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes3",
                "typeString": "bytes3"
              },
              "typeName": {
                "id": 65891,
                "name": "bytes3",
                "nodeType": "ElementaryTypeName",
                "src": "1215:6:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes3",
                  "typeString": "bytes3"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "1179:50:106"
        },
        "returnParameters": {
          "id": 65894,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "1235:0:106"
        },
        "scope": 66442,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 65916,
        "nodeType": "FunctionDefinition",
        "src": "1445:126:106",
        "nodes": [],
        "body": {
          "id": 65915,
          "nodeType": "Block",
          "src": "1486:85:106",
          "nodes": [],
          "statements": [
            {
              "expression": {
                "arguments": [
                  {
                    "id": 65911,
                    "name": "errorCode",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 65907,
                    "src": "1500:9:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "hexValue": "3078343234313463",
                    "id": 65912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1511:8:106",
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
                  "id": 65910,
                  "name": "_revert",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [
                    65916,
                    65936
                  ],
                  "referencedDeclaration": 65936,
                  "src": "1492:7:106",
                  "typeDescriptions": {
                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                    "typeString": "function (uint256,bytes3) pure"
                  }
                },
                "id": 65913,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "functionCall",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "1492:28:106",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_tuple$__$",
                  "typeString": "tuple()"
                }
              },
              "id": 65914,
              "nodeType": "ExpressionStatement",
              "src": "1492:28:106"
            }
          ]
        },
        "documentation": {
          "id": 65905,
          "nodeType": "StructuredDocumentation",
          "src": "1288:156:106",
          "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.\n Uses the default 'BAL' prefix for the error code"
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_revert",
        "nameLocation": "1454:7:106",
        "parameters": {
          "id": 65908,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 65907,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "1470:9:106",
              "nodeType": "VariableDeclaration",
              "scope": 65916,
              "src": "1462:17:106",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 65906,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1462:7:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "1461:19:106"
        },
        "returnParameters": {
          "id": 65909,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "1486:0:106"
        },
        "scope": 66442,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 65936,
        "nodeType": "FunctionDefinition",
        "src": "1678:3526:106",
        "nodes": [],
        "body": {
          "id": 65935,
          "nodeType": "Block",
          "src": "1734:3470:106",
          "nodes": [],
          "statements": [
            {
              "assignments": [
                65925
              ],
              "declarations": [
                {
                  "constant": false,
                  "id": 65925,
                  "mutability": "mutable",
                  "name": "prefixUint",
                  "nameLocation": "1748:10:106",
                  "nodeType": "VariableDeclaration",
                  "scope": 65935,
                  "src": "1740:18:106",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65924,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1740:7:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "id": 65933,
              "initialValue": {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "id": 65930,
                        "name": "prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 65921,
                        "src": "1776:6:106",
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
                      "id": 65929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1769:6:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint24_$",
                        "typeString": "type(uint24)"
                      },
                      "typeName": {
                        "id": 65928,
                        "name": "uint24",
                        "nodeType": "ElementaryTypeName",
                        "src": "1769:6:106",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 65931,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1769:14:106",
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
                  "id": 65927,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "nodeType": "ElementaryTypeNameExpression",
                  "src": "1761:7:106",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_uint256_$",
                    "typeString": "type(uint256)"
                  },
                  "typeName": {
                    "id": 65926,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1761:7:106",
                    "typeDescriptions": {}
                  }
                },
                "id": 65932,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "typeConversion",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "1761:23:106",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "VariableDeclarationStatement",
              "src": "1740:44:106"
            },
            {
              "AST": {
                "nodeType": "YulBlock",
                "src": "2573:2629:106",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2847:42:106",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "errorCode",
                              "nodeType": "YulIdentifier",
                              "src": "2868:9:106"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2879:2:106",
                              "type": "",
                              "value": "10"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "2864:3:106"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2864:18:106"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2884:4:106",
                          "type": "",
                          "value": "0x30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2860:3:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2860:29:106"
                    },
                    "variables": [
                      {
                        "name": "units",
                        "nodeType": "YulTypedName",
                        "src": "2851:5:106",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2899:31:106",
                    "value": {
                      "arguments": [
                        {
                          "name": "errorCode",
                          "nodeType": "YulIdentifier",
                          "src": "2916:9:106"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2927:2:106",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "2912:3:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2912:18:106"
                    },
                    "variableNames": [
                      {
                        "name": "errorCode",
                        "nodeType": "YulIdentifier",
                        "src": "2899:9:106"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2939:43:106",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "errorCode",
                              "nodeType": "YulIdentifier",
                              "src": "2961:9:106"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2972:2:106",
                              "type": "",
                              "value": "10"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "2957:3:106"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2957:18:106"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2977:4:106",
                          "type": "",
                          "value": "0x30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2953:3:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2953:29:106"
                    },
                    "variables": [
                      {
                        "name": "tenths",
                        "nodeType": "YulTypedName",
                        "src": "2943:6:106",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2992:31:106",
                    "value": {
                      "arguments": [
                        {
                          "name": "errorCode",
                          "nodeType": "YulIdentifier",
                          "src": "3009:9:106"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3020:2:106",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "3005:3:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3005:18:106"
                    },
                    "variableNames": [
                      {
                        "name": "errorCode",
                        "nodeType": "YulIdentifier",
                        "src": "2992:9:106"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3032:45:106",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "errorCode",
                              "nodeType": "YulIdentifier",
                              "src": "3056:9:106"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3067:2:106",
                              "type": "",
                              "value": "10"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "3052:3:106"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3052:18:106"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3072:4:106",
                          "type": "",
                          "value": "0x30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3048:3:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3048:29:106"
                    },
                    "variables": [
                      {
                        "name": "hundreds",
                        "nodeType": "YulTypedName",
                        "src": "3036:8:106",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3710:61:106",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3737:2:106",
                          "type": "",
                          "value": "24"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3745:4:106",
                              "type": "",
                              "value": "0x23"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3755:1:106",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "prefixUint",
                                  "nodeType": "YulIdentifier",
                                  "src": "3758:10:106"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "3751:3:106"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3751:18:106"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3741:3:106"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3741:29:106"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "3733:3:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3733:38:106"
                    },
                    "variables": [
                      {
                        "name": "formattedPrefix",
                        "nodeType": "YulTypedName",
                        "src": "3714:15:106",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3781:182:106",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3818:3:106",
                          "type": "",
                          "value": "200"
                        },
                        {
                          "arguments": [
                            {
                              "name": "formattedPrefix",
                              "nodeType": "YulIdentifier",
                              "src": "3856:15:106"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "units",
                                      "nodeType": "YulIdentifier",
                                      "src": "3897:5:106"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3908:1:106",
                                          "type": "",
                                          "value": "8"
                                        },
                                        {
                                          "name": "tenths",
                                          "nodeType": "YulIdentifier",
                                          "src": "3911:6:106"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "3904:3:106"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3904:14:106"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3893:3:106"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3893:26:106"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3925:2:106",
                                      "type": "",
                                      "value": "16"
                                    },
                                    {
                                      "name": "hundreds",
                                      "nodeType": "YulIdentifier",
                                      "src": "3929:8:106"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "3921:3:106"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3921:17:106"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3889:3:106"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3889:50:106"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3835:3:106"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3835:118:106"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "3801:3:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3801:162:106"
                    },
                    "variables": [
                      {
                        "name": "revertReason",
                        "nodeType": "YulTypedName",
                        "src": "3785:12:106",
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
                          "src": "4491:3:106",
                          "type": "",
                          "value": "0x0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4508:66:106",
                          "type": "",
                          "value": "0x08c379a000000000000000000000000000000000000000000000000000000000"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4471:6:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4471:113:106"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4471:113:106"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4730:4:106",
                          "type": "",
                          "value": "0x04"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4748:66:106",
                          "type": "",
                          "value": "0x0000000000000000000000000000000000000000000000000000000000000020"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4710:6:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4710:114:106"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4710:114:106"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4893:4:106",
                          "type": "",
                          "value": "0x24"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4899:1:106",
                          "type": "",
                          "value": "7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4886:6:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4886:15:106"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4886:15:106"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4966:4:106",
                          "type": "",
                          "value": "0x44"
                        },
                        {
                          "name": "revertReason",
                          "nodeType": "YulIdentifier",
                          "src": "4972:12:106"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4959:6:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4959:26:106"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4959:26:106"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5189:1:106",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5192:3:106",
                          "type": "",
                          "value": "100"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "5182:6:106"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5182:14:106"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5182:14:106"
                  }
                ]
              },
              "evmVersion": "paris",
              "externalReferences": [
                {
                  "declaration": 65919,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2868:9:106",
                  "valueSize": 1
                },
                {
                  "declaration": 65919,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2899:9:106",
                  "valueSize": 1
                },
                {
                  "declaration": 65919,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2916:9:106",
                  "valueSize": 1
                },
                {
                  "declaration": 65919,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2961:9:106",
                  "valueSize": 1
                },
                {
                  "declaration": 65919,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2992:9:106",
                  "valueSize": 1
                },
                {
                  "declaration": 65919,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "3009:9:106",
                  "valueSize": 1
                },
                {
                  "declaration": 65919,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "3056:9:106",
                  "valueSize": 1
                },
                {
                  "declaration": 65925,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "3758:10:106",
                  "valueSize": 1
                }
              ],
              "id": 65934,
              "nodeType": "InlineAssembly",
              "src": "2564:2638:106"
            }
          ]
        },
        "documentation": {
          "id": 65917,
          "nodeType": "StructuredDocumentation",
          "src": "1573:104:106",
          "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported."
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_revert",
        "nameLocation": "1687:7:106",
        "parameters": {
          "id": 65922,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 65919,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "1703:9:106",
              "nodeType": "VariableDeclaration",
              "scope": 65936,
              "src": "1695:17:106",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 65918,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1695:7:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 65921,
              "mutability": "mutable",
              "name": "prefix",
              "nameLocation": "1721:6:106",
              "nodeType": "VariableDeclaration",
              "scope": 65936,
              "src": "1714:13:106",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes3",
                "typeString": "bytes3"
              },
              "typeName": {
                "id": 65920,
                "name": "bytes3",
                "nodeType": "ElementaryTypeName",
                "src": "1714:6:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes3",
                  "typeString": "bytes3"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "1694:34:106"
        },
        "returnParameters": {
          "id": 65923,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "1734:0:106"
        },
        "scope": 66442,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 66441,
        "nodeType": "ContractDefinition",
        "src": "5206:10031:106",
        "nodes": [
          {
            "id": 65939,
            "nodeType": "VariableDeclaration",
            "src": "5247:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADD_OVERFLOW",
            "nameLocation": "5273:12:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65937,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5247:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 65938,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5288:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "id": 65942,
            "nodeType": "VariableDeclaration",
            "src": "5295:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SUB_OVERFLOW",
            "nameLocation": "5321:12:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65940,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5295:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 65941,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5336:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "internal"
          },
          {
            "id": 65945,
            "nodeType": "VariableDeclaration",
            "src": "5343:43:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SUB_UNDERFLOW",
            "nameLocation": "5369:13:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65943,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5343:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "32",
              "id": 65944,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5385:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2_by_1",
                "typeString": "int_const 2"
              },
              "value": "2"
            },
            "visibility": "internal"
          },
          {
            "id": 65948,
            "nodeType": "VariableDeclaration",
            "src": "5392:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MUL_OVERFLOW",
            "nameLocation": "5418:12:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65946,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5392:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "33",
              "id": 65947,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5433:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3_by_1",
                "typeString": "int_const 3"
              },
              "value": "3"
            },
            "visibility": "internal"
          },
          {
            "id": 65951,
            "nodeType": "VariableDeclaration",
            "src": "5440:43:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ZERO_DIVISION",
            "nameLocation": "5466:13:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65949,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5440:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "34",
              "id": 65950,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5482:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4_by_1",
                "typeString": "int_const 4"
              },
              "value": "4"
            },
            "visibility": "internal"
          },
          {
            "id": 65954,
            "nodeType": "VariableDeclaration",
            "src": "5489:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "DIV_INTERNAL",
            "nameLocation": "5515:12:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65952,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5489:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "35",
              "id": 65953,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5530:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5_by_1",
                "typeString": "int_const 5"
              },
              "value": "5"
            },
            "visibility": "internal"
          },
          {
            "id": 65957,
            "nodeType": "VariableDeclaration",
            "src": "5537:45:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "X_OUT_OF_BOUNDS",
            "nameLocation": "5563:15:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65955,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5537:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "36",
              "id": 65956,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5581:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6_by_1",
                "typeString": "int_const 6"
              },
              "value": "6"
            },
            "visibility": "internal"
          },
          {
            "id": 65960,
            "nodeType": "VariableDeclaration",
            "src": "5588:45:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "Y_OUT_OF_BOUNDS",
            "nameLocation": "5614:15:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65958,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5588:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "37",
              "id": 65959,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5632:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7_by_1",
                "typeString": "int_const 7"
              },
              "value": "7"
            },
            "visibility": "internal"
          },
          {
            "id": 65963,
            "nodeType": "VariableDeclaration",
            "src": "5639:51:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PRODUCT_OUT_OF_BOUNDS",
            "nameLocation": "5665:21:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65961,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5639:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "38",
              "id": 65962,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5689:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8_by_1",
                "typeString": "int_const 8"
              },
              "value": "8"
            },
            "visibility": "internal"
          },
          {
            "id": 65966,
            "nodeType": "VariableDeclaration",
            "src": "5696:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_EXPONENT",
            "nameLocation": "5722:16:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65964,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5696:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "39",
              "id": 65965,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5741:1:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_9_by_1",
                "typeString": "int_const 9"
              },
              "value": "9"
            },
            "visibility": "internal"
          },
          {
            "id": 65969,
            "nodeType": "VariableDeclaration",
            "src": "5762:45:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OUT_OF_BOUNDS",
            "nameLocation": "5788:13:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65967,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5762:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313030",
              "id": 65968,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5804:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100_by_1",
                "typeString": "int_const 100"
              },
              "value": "100"
            },
            "visibility": "internal"
          },
          {
            "id": 65972,
            "nodeType": "VariableDeclaration",
            "src": "5813:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNSORTED_ARRAY",
            "nameLocation": "5839:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65970,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5813:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313031",
              "id": 65971,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5856:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_101_by_1",
                "typeString": "int_const 101"
              },
              "value": "101"
            },
            "visibility": "internal"
          },
          {
            "id": 65975,
            "nodeType": "VariableDeclaration",
            "src": "5865:47:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNSORTED_TOKENS",
            "nameLocation": "5891:15:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65973,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5865:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313032",
              "id": 65974,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5909:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_102_by_1",
                "typeString": "int_const 102"
              },
              "value": "102"
            },
            "visibility": "internal"
          },
          {
            "id": 65978,
            "nodeType": "VariableDeclaration",
            "src": "5918:53:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INPUT_LENGTH_MISMATCH",
            "nameLocation": "5944:21:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65976,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5918:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313033",
              "id": 65977,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5968:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_103_by_1",
                "typeString": "int_const 103"
              },
              "value": "103"
            },
            "visibility": "internal"
          },
          {
            "id": 65981,
            "nodeType": "VariableDeclaration",
            "src": "5977:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ZERO_TOKEN",
            "nameLocation": "6003:10:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65979,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5977:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313034",
              "id": 65980,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6016:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_104_by_1",
                "typeString": "int_const 104"
              },
              "value": "104"
            },
            "visibility": "internal"
          },
          {
            "id": 65984,
            "nodeType": "VariableDeclaration",
            "src": "6025:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_DATA",
            "nameLocation": "6051:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65982,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6025:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313035",
              "id": 65983,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6071:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_105_by_1",
                "typeString": "int_const 105"
              },
              "value": "105"
            },
            "visibility": "internal"
          },
          {
            "id": 65987,
            "nodeType": "VariableDeclaration",
            "src": "6101:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_TOKENS",
            "nameLocation": "6127:10:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65985,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6101:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323030",
              "id": 65986,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6140:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_200_by_1",
                "typeString": "int_const 200"
              },
              "value": "200"
            },
            "visibility": "internal"
          },
          {
            "id": 65990,
            "nodeType": "VariableDeclaration",
            "src": "6149:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_TOKENS",
            "nameLocation": "6175:10:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65988,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6149:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323031",
              "id": 65989,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6188:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_201_by_1",
                "typeString": "int_const 201"
              },
              "value": "201"
            },
            "visibility": "internal"
          },
          {
            "id": 65993,
            "nodeType": "VariableDeclaration",
            "src": "6197:55:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_SWAP_FEE_PERCENTAGE",
            "nameLocation": "6223:23:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65991,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6197:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323032",
              "id": 65992,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6249:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_202_by_1",
                "typeString": "int_const 202"
              },
              "value": "202"
            },
            "visibility": "internal"
          },
          {
            "id": 65996,
            "nodeType": "VariableDeclaration",
            "src": "6258:55:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_SWAP_FEE_PERCENTAGE",
            "nameLocation": "6284:23:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65994,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6258:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323033",
              "id": 65995,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6310:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_203_by_1",
                "typeString": "int_const 203"
              },
              "value": "203"
            },
            "visibility": "internal"
          },
          {
            "id": 65999,
            "nodeType": "VariableDeclaration",
            "src": "6319:43:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MINIMUM_BPT",
            "nameLocation": "6345:11:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 65997,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6319:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323034",
              "id": 65998,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6359:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_204_by_1",
                "typeString": "int_const 204"
              },
              "value": "204"
            },
            "visibility": "internal"
          },
          {
            "id": 66002,
            "nodeType": "VariableDeclaration",
            "src": "6368:48:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_NOT_VAULT",
            "nameLocation": "6394:16:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66000,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6368:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323035",
              "id": 66001,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6413:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_205_by_1",
                "typeString": "int_const 205"
              },
              "value": "205"
            },
            "visibility": "internal"
          },
          {
            "id": 66005,
            "nodeType": "VariableDeclaration",
            "src": "6422:45:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNINITIALIZED",
            "nameLocation": "6448:13:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66003,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6422:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323036",
              "id": 66004,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6464:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_206_by_1",
                "typeString": "int_const 206"
              },
              "value": "206"
            },
            "visibility": "internal"
          },
          {
            "id": 66008,
            "nodeType": "VariableDeclaration",
            "src": "6473:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BPT_IN_MAX_AMOUNT",
            "nameLocation": "6499:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66006,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6473:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323037",
              "id": 66007,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6519:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_207_by_1",
                "typeString": "int_const 207"
              },
              "value": "207"
            },
            "visibility": "internal"
          },
          {
            "id": 66011,
            "nodeType": "VariableDeclaration",
            "src": "6528:50:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BPT_OUT_MIN_AMOUNT",
            "nameLocation": "6554:18:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66009,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6528:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323038",
              "id": 66010,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6575:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_208_by_1",
                "typeString": "int_const 208"
              },
              "value": "208"
            },
            "visibility": "internal"
          },
          {
            "id": 66014,
            "nodeType": "VariableDeclaration",
            "src": "6584:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EXPIRED_PERMIT",
            "nameLocation": "6610:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66012,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6584:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323039",
              "id": 66013,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6627:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_209_by_1",
                "typeString": "int_const 209"
              },
              "value": "209"
            },
            "visibility": "internal"
          },
          {
            "id": 66017,
            "nodeType": "VariableDeclaration",
            "src": "6636:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_TWO_TOKENS",
            "nameLocation": "6662:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66015,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6636:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323130",
              "id": 66016,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6679:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_210_by_1",
                "typeString": "int_const 210"
              },
              "value": "210"
            },
            "visibility": "internal"
          },
          {
            "id": 66020,
            "nodeType": "VariableDeclaration",
            "src": "6688:40:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "DISABLED",
            "nameLocation": "6714:8:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66018,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6688:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323131",
              "id": 66019,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6725:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_211_by_1",
                "typeString": "int_const 211"
              },
              "value": "211"
            },
            "visibility": "internal"
          },
          {
            "id": 66023,
            "nodeType": "VariableDeclaration",
            "src": "6748:39:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_AMP",
            "nameLocation": "6774:7:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66021,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6748:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333030",
              "id": 66022,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6784:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_300_by_1",
                "typeString": "int_const 300"
              },
              "value": "300"
            },
            "visibility": "internal"
          },
          {
            "id": 66026,
            "nodeType": "VariableDeclaration",
            "src": "6793:39:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_AMP",
            "nameLocation": "6819:7:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66024,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6793:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333031",
              "id": 66025,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6829:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_301_by_1",
                "typeString": "int_const 301"
              },
              "value": "301"
            },
            "visibility": "internal"
          },
          {
            "id": 66029,
            "nodeType": "VariableDeclaration",
            "src": "6838:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_WEIGHT",
            "nameLocation": "6864:10:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66027,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6838:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333032",
              "id": 66028,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6877:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_302_by_1",
                "typeString": "int_const 302"
              },
              "value": "302"
            },
            "visibility": "internal"
          },
          {
            "id": 66032,
            "nodeType": "VariableDeclaration",
            "src": "6886:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_STABLE_TOKENS",
            "nameLocation": "6912:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66030,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6886:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333033",
              "id": 66031,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6932:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_303_by_1",
                "typeString": "int_const 303"
              },
              "value": "303"
            },
            "visibility": "internal"
          },
          {
            "id": 66035,
            "nodeType": "VariableDeclaration",
            "src": "6941:44:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_IN_RATIO",
            "nameLocation": "6967:12:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66033,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6941:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333034",
              "id": 66034,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6982:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_304_by_1",
                "typeString": "int_const 304"
              },
              "value": "304"
            },
            "visibility": "internal"
          },
          {
            "id": 66038,
            "nodeType": "VariableDeclaration",
            "src": "6991:45:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_OUT_RATIO",
            "nameLocation": "7017:13:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66036,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6991:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333035",
              "id": 66037,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7033:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_305_by_1",
                "typeString": "int_const 305"
              },
              "value": "305"
            },
            "visibility": "internal"
          },
          {
            "id": 66041,
            "nodeType": "VariableDeclaration",
            "src": "7042:56:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_BPT_IN_FOR_TOKEN_OUT",
            "nameLocation": "7068:24:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66039,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7042:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333036",
              "id": 66040,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7095:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_306_by_1",
                "typeString": "int_const 306"
              },
              "value": "306"
            },
            "visibility": "internal"
          },
          {
            "id": 66044,
            "nodeType": "VariableDeclaration",
            "src": "7104:56:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_OUT_BPT_FOR_TOKEN_IN",
            "nameLocation": "7130:24:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66042,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7104:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333037",
              "id": 66043,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7157:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_307_by_1",
                "typeString": "int_const 307"
              },
              "value": "307"
            },
            "visibility": "internal"
          },
          {
            "id": 66047,
            "nodeType": "VariableDeclaration",
            "src": "7166:59:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NORMALIZED_WEIGHT_INVARIANT",
            "nameLocation": "7192:27:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66045,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7166:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333038",
              "id": 66046,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7222:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_308_by_1",
                "typeString": "int_const 308"
              },
              "value": "308"
            },
            "visibility": "internal"
          },
          {
            "id": 66050,
            "nodeType": "VariableDeclaration",
            "src": "7231:45:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_TOKEN",
            "nameLocation": "7257:13:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66048,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7231:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333039",
              "id": 66049,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7273:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_309_by_1",
                "typeString": "int_const 309"
              },
              "value": "309"
            },
            "visibility": "internal"
          },
          {
            "id": 66053,
            "nodeType": "VariableDeclaration",
            "src": "7282:51:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_JOIN_KIND",
            "nameLocation": "7308:19:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66051,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7282:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333130",
              "id": 66052,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7330:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_310_by_1",
                "typeString": "int_const 310"
              },
              "value": "310"
            },
            "visibility": "internal"
          },
          {
            "id": 66056,
            "nodeType": "VariableDeclaration",
            "src": "7339:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ZERO_INVARIANT",
            "nameLocation": "7365:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66054,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7339:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333131",
              "id": 66055,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7382:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_311_by_1",
                "typeString": "int_const 311"
              },
              "value": "311"
            },
            "visibility": "internal"
          },
          {
            "id": 66059,
            "nodeType": "VariableDeclaration",
            "src": "7391:60:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_INVALID_SECONDS_QUERY",
            "nameLocation": "7417:28:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66057,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7391:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333132",
              "id": 66058,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7448:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_312_by_1",
                "typeString": "int_const 312"
              },
              "value": "312"
            },
            "visibility": "internal"
          },
          {
            "id": 66062,
            "nodeType": "VariableDeclaration",
            "src": "7457:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_NOT_INITIALIZED",
            "nameLocation": "7483:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66060,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7457:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333133",
              "id": 66061,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7508:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_313_by_1",
                "typeString": "int_const 313"
              },
              "value": "313"
            },
            "visibility": "internal"
          },
          {
            "id": 66065,
            "nodeType": "VariableDeclaration",
            "src": "7517:52:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_QUERY_TOO_OLD",
            "nameLocation": "7543:20:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66063,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7517:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333134",
              "id": 66064,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7566:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_314_by_1",
                "typeString": "int_const 314"
              },
              "value": "314"
            },
            "visibility": "internal"
          },
          {
            "id": 66068,
            "nodeType": "VariableDeclaration",
            "src": "7575:52:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_INVALID_INDEX",
            "nameLocation": "7601:20:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66066,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7575:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333135",
              "id": 66067,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7624:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_315_by_1",
                "typeString": "int_const 315"
              },
              "value": "315"
            },
            "visibility": "internal"
          },
          {
            "id": 66071,
            "nodeType": "VariableDeclaration",
            "src": "7633:47:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_BAD_SECS",
            "nameLocation": "7659:15:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66069,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7633:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333136",
              "id": 66070,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7677:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_316_by_1",
                "typeString": "int_const 316"
              },
              "value": "316"
            },
            "visibility": "internal"
          },
          {
            "id": 66074,
            "nodeType": "VariableDeclaration",
            "src": "7686:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_END_TIME_TOO_CLOSE",
            "nameLocation": "7712:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66072,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7686:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333137",
              "id": 66073,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7737:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_317_by_1",
                "typeString": "int_const 317"
              },
              "value": "317"
            },
            "visibility": "internal"
          },
          {
            "id": 66077,
            "nodeType": "VariableDeclaration",
            "src": "7746:50:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_ONGOING_UPDATE",
            "nameLocation": "7772:18:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66075,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7746:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333138",
              "id": 66076,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7793:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_318_by_1",
                "typeString": "int_const 318"
              },
              "value": "318"
            },
            "visibility": "internal"
          },
          {
            "id": 66080,
            "nodeType": "VariableDeclaration",
            "src": "7802:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_RATE_TOO_HIGH",
            "nameLocation": "7828:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66078,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7802:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333139",
              "id": 66079,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7848:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_319_by_1",
                "typeString": "int_const 319"
              },
              "value": "319"
            },
            "visibility": "internal"
          },
          {
            "id": 66083,
            "nodeType": "VariableDeclaration",
            "src": "7857:53:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_NO_ONGOING_UPDATE",
            "nameLocation": "7883:21:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66081,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7857:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333230",
              "id": 66082,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7907:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_320_by_1",
                "typeString": "int_const 320"
              },
              "value": "320"
            },
            "visibility": "internal"
          },
          {
            "id": 66086,
            "nodeType": "VariableDeclaration",
            "src": "7916:63:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "STABLE_INVARIANT_DIDNT_CONVERGE",
            "nameLocation": "7942:31:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66084,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7916:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333231",
              "id": 66085,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7976:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_321_by_1",
                "typeString": "int_const 321"
              },
              "value": "321"
            },
            "visibility": "internal"
          },
          {
            "id": 66089,
            "nodeType": "VariableDeclaration",
            "src": "7985:65:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "STABLE_GET_BALANCE_DIDNT_CONVERGE",
            "nameLocation": "8011:33:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66087,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7985:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333232",
              "id": 66088,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8047:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_322_by_1",
                "typeString": "int_const 322"
              },
              "value": "322"
            },
            "visibility": "internal"
          },
          {
            "id": 66092,
            "nodeType": "VariableDeclaration",
            "src": "8056:52:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RELAYER_NOT_CONTRACT",
            "nameLocation": "8082:20:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66090,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8056:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333233",
              "id": 66091,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8105:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_323_by_1",
                "typeString": "int_const 323"
              },
              "value": "323"
            },
            "visibility": "internal"
          },
          {
            "id": 66095,
            "nodeType": "VariableDeclaration",
            "src": "8114:60:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BASE_POOL_RELAYER_NOT_CALLED",
            "nameLocation": "8140:28:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66093,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8114:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333234",
              "id": 66094,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8171:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_324_by_1",
                "typeString": "int_const 324"
              },
              "value": "324"
            },
            "visibility": "internal"
          },
          {
            "id": 66098,
            "nodeType": "VariableDeclaration",
            "src": "8180:61:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "REBALANCING_RELAYER_REENTERED",
            "nameLocation": "8206:29:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66096,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8180:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333235",
              "id": 66097,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8238:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_325_by_1",
                "typeString": "int_const 325"
              },
              "value": "325"
            },
            "visibility": "internal"
          },
          {
            "id": 66101,
            "nodeType": "VariableDeclaration",
            "src": "8247:58:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "GRADUAL_UPDATE_TIME_TRAVEL",
            "nameLocation": "8273:26:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66099,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8247:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333236",
              "id": 66100,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8302:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_326_by_1",
                "typeString": "int_const 326"
              },
              "value": "326"
            },
            "visibility": "internal"
          },
          {
            "id": 66104,
            "nodeType": "VariableDeclaration",
            "src": "8311:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAPS_DISABLED",
            "nameLocation": "8337:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66102,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8311:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333237",
              "id": 66103,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8354:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_327_by_1",
                "typeString": "int_const 327"
              },
              "value": "327"
            },
            "visibility": "internal"
          },
          {
            "id": 66107,
            "nodeType": "VariableDeclaration",
            "src": "8363:55:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_IS_NOT_LBP_OWNER",
            "nameLocation": "8389:23:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66105,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8363:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333238",
              "id": 66106,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8415:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_328_by_1",
                "typeString": "int_const 328"
              },
              "value": "328"
            },
            "visibility": "internal"
          },
          {
            "id": 66110,
            "nodeType": "VariableDeclaration",
            "src": "8424:51:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PRICE_RATE_OVERFLOW",
            "nameLocation": "8450:19:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66108,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8424:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333239",
              "id": 66109,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8472:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_329_by_1",
                "typeString": "int_const 329"
              },
              "value": "329"
            },
            "visibility": "internal"
          },
          {
            "id": 66113,
            "nodeType": "VariableDeclaration",
            "src": "8481:75:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_JOIN_EXIT_KIND_WHILE_SWAPS_DISABLED",
            "nameLocation": "8507:43:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66111,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8481:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333330",
              "id": 66112,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8553:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_330_by_1",
                "typeString": "int_const 330"
              },
              "value": "330"
            },
            "visibility": "internal"
          },
          {
            "id": 66116,
            "nodeType": "VariableDeclaration",
            "src": "8562:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "WEIGHT_CHANGE_TOO_FAST",
            "nameLocation": "8588:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66114,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8562:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333331",
              "id": 66115,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8613:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_331_by_1",
                "typeString": "int_const 331"
              },
              "value": "331"
            },
            "visibility": "internal"
          },
          {
            "id": 66119,
            "nodeType": "VariableDeclaration",
            "src": "8622:63:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LOWER_GREATER_THAN_UPPER_TARGET",
            "nameLocation": "8648:31:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66117,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8622:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333332",
              "id": 66118,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8682:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_332_by_1",
                "typeString": "int_const 332"
              },
              "value": "332"
            },
            "visibility": "internal"
          },
          {
            "id": 66122,
            "nodeType": "VariableDeclaration",
            "src": "8691:53:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UPPER_TARGET_TOO_HIGH",
            "nameLocation": "8717:21:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66120,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8691:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333333",
              "id": 66121,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8741:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_333_by_1",
                "typeString": "int_const 333"
              },
              "value": "333"
            },
            "visibility": "internal"
          },
          {
            "id": 66125,
            "nodeType": "VariableDeclaration",
            "src": "8750:56:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_BY_LINEAR_POOL",
            "nameLocation": "8776:24:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66123,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8750:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333334",
              "id": 66124,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8803:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_334_by_1",
                "typeString": "int_const 334"
              },
              "value": "334"
            },
            "visibility": "internal"
          },
          {
            "id": 66128,
            "nodeType": "VariableDeclaration",
            "src": "8812:51:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OUT_OF_TARGET_RANGE",
            "nameLocation": "8838:19:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66126,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8812:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333335",
              "id": 66127,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8860:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_335_by_1",
                "typeString": "int_const 335"
              },
              "value": "335"
            },
            "visibility": "internal"
          },
          {
            "id": 66131,
            "nodeType": "VariableDeclaration",
            "src": "8869:51:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_EXIT_KIND",
            "nameLocation": "8895:19:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66129,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8869:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333336",
              "id": 66130,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8917:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_336_by_1",
                "typeString": "int_const 336"
              },
              "value": "336"
            },
            "visibility": "internal"
          },
          {
            "id": 66134,
            "nodeType": "VariableDeclaration",
            "src": "8926:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNAUTHORIZED_EXIT",
            "nameLocation": "8952:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66132,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8926:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333337",
              "id": 66133,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8972:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_337_by_1",
                "typeString": "int_const 337"
              },
              "value": "337"
            },
            "visibility": "internal"
          },
          {
            "id": 66137,
            "nodeType": "VariableDeclaration",
            "src": "8981:66:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_MANAGEMENT_SWAP_FEE_PERCENTAGE",
            "nameLocation": "9007:34:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66135,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8981:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333338",
              "id": 66136,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9044:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_338_by_1",
                "typeString": "int_const 338"
              },
              "value": "338"
            },
            "visibility": "internal"
          },
          {
            "id": 66140,
            "nodeType": "VariableDeclaration",
            "src": "9053:57:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_BY_MANAGED_POOL",
            "nameLocation": "9079:25:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66138,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9053:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333339",
              "id": 66139,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9107:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_339_by_1",
                "typeString": "int_const 339"
              },
              "value": "339"
            },
            "visibility": "internal"
          },
          {
            "id": 66143,
            "nodeType": "VariableDeclaration",
            "src": "9116:57:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_BY_PHANTOM_POOL",
            "nameLocation": "9142:25:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66141,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9116:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333430",
              "id": 66142,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9170:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_340_by_1",
                "typeString": "int_const 340"
              },
              "value": "340"
            },
            "visibility": "internal"
          },
          {
            "id": 66146,
            "nodeType": "VariableDeclaration",
            "src": "9179:65:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKEN_DOES_NOT_HAVE_RATE_PROVIDER",
            "nameLocation": "9205:33:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66144,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9179:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333431",
              "id": 66145,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9241:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_341_by_1",
                "typeString": "int_const 341"
              },
              "value": "341"
            },
            "visibility": "internal"
          },
          {
            "id": 66149,
            "nodeType": "VariableDeclaration",
            "src": "9250:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_INITIALIZATION",
            "nameLocation": "9276:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66147,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9250:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333432",
              "id": 66148,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9301:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_342_by_1",
                "typeString": "int_const 342"
              },
              "value": "342"
            },
            "visibility": "internal"
          },
          {
            "id": 66152,
            "nodeType": "VariableDeclaration",
            "src": "9310:55:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OUT_OF_NEW_TARGET_RANGE",
            "nameLocation": "9336:23:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66150,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9310:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333433",
              "id": 66151,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9362:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_343_by_1",
                "typeString": "int_const 343"
              },
              "value": "343"
            },
            "visibility": "internal"
          },
          {
            "id": 66155,
            "nodeType": "VariableDeclaration",
            "src": "9371:48:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FEATURE_DISABLED",
            "nameLocation": "9397:16:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66153,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9371:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333434",
              "id": 66154,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9416:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_344_by_1",
                "typeString": "int_const 344"
              },
              "value": "344"
            },
            "visibility": "internal"
          },
          {
            "id": 66158,
            "nodeType": "VariableDeclaration",
            "src": "9425:61:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNINITIALIZED_POOL_CONTROLLER",
            "nameLocation": "9451:29:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66156,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9425:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333435",
              "id": 66157,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9483:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_345_by_1",
                "typeString": "int_const 345"
              },
              "value": "345"
            },
            "visibility": "internal"
          },
          {
            "id": 66161,
            "nodeType": "VariableDeclaration",
            "src": "9492:62:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SET_SWAP_FEE_DURING_FEE_CHANGE",
            "nameLocation": "9518:30:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66159,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9492:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333436",
              "id": 66160,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9551:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_346_by_1",
                "typeString": "int_const 346"
              },
              "value": "346"
            },
            "visibility": "internal"
          },
          {
            "id": 66164,
            "nodeType": "VariableDeclaration",
            "src": "9560:63:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SET_SWAP_FEE_PENDING_FEE_CHANGE",
            "nameLocation": "9586:31:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66162,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9560:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333437",
              "id": 66163,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9620:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_347_by_1",
                "typeString": "int_const 347"
              },
              "value": "347"
            },
            "visibility": "internal"
          },
          {
            "id": 66167,
            "nodeType": "VariableDeclaration",
            "src": "9629:66:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CHANGE_TOKENS_DURING_WEIGHT_CHANGE",
            "nameLocation": "9655:34:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66165,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9629:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333438",
              "id": 66166,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9692:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_348_by_1",
                "typeString": "int_const 348"
              },
              "value": "348"
            },
            "visibility": "internal"
          },
          {
            "id": 66170,
            "nodeType": "VariableDeclaration",
            "src": "9701:67:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CHANGE_TOKENS_PENDING_WEIGHT_CHANGE",
            "nameLocation": "9727:35:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66168,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9701:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333439",
              "id": 66169,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9765:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_349_by_1",
                "typeString": "int_const 349"
              },
              "value": "349"
            },
            "visibility": "internal"
          },
          {
            "id": 66173,
            "nodeType": "VariableDeclaration",
            "src": "9774:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_WEIGHT",
            "nameLocation": "9800:10:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66171,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9774:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333530",
              "id": 66172,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9813:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_350_by_1",
                "typeString": "int_const 350"
              },
              "value": "350"
            },
            "visibility": "internal"
          },
          {
            "id": 66176,
            "nodeType": "VariableDeclaration",
            "src": "9822:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNAUTHORIZED_JOIN",
            "nameLocation": "9848:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66174,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9822:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333531",
              "id": 66175,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9868:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_351_by_1",
                "typeString": "int_const 351"
              },
              "value": "351"
            },
            "visibility": "internal"
          },
          {
            "id": 66179,
            "nodeType": "VariableDeclaration",
            "src": "9877:65:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_MANAGEMENT_AUM_FEE_PERCENTAGE",
            "nameLocation": "9903:33:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66177,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9877:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333532",
              "id": 66178,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9939:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_352_by_1",
                "typeString": "int_const 352"
              },
              "value": "352"
            },
            "visibility": "internal"
          },
          {
            "id": 66182,
            "nodeType": "VariableDeclaration",
            "src": "9948:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FRACTIONAL_TARGET",
            "nameLocation": "9974:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66180,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9948:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333533",
              "id": 66181,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9994:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_353_by_1",
                "typeString": "int_const 353"
              },
              "value": "353"
            },
            "visibility": "internal"
          },
          {
            "id": 66185,
            "nodeType": "VariableDeclaration",
            "src": "10003:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADD_OR_REMOVE_BPT",
            "nameLocation": "10029:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66183,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10003:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333534",
              "id": 66184,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10049:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_354_by_1",
                "typeString": "int_const 354"
              },
              "value": "354"
            },
            "visibility": "internal"
          },
          {
            "id": 66188,
            "nodeType": "VariableDeclaration",
            "src": "10058:62:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_CIRCUIT_BREAKER_BOUNDS",
            "nameLocation": "10084:30:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66186,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10058:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333535",
              "id": 66187,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10117:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_355_by_1",
                "typeString": "int_const 355"
              },
              "value": "355"
            },
            "visibility": "internal"
          },
          {
            "id": 66191,
            "nodeType": "VariableDeclaration",
            "src": "10126:55:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CIRCUIT_BREAKER_TRIPPED",
            "nameLocation": "10152:23:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66189,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10126:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333536",
              "id": 66190,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10178:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_356_by_1",
                "typeString": "int_const 356"
              },
              "value": "356"
            },
            "visibility": "internal"
          },
          {
            "id": 66194,
            "nodeType": "VariableDeclaration",
            "src": "10187:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MALICIOUS_QUERY_REVERT",
            "nameLocation": "10213:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66192,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10187:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333537",
              "id": 66193,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10238:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_357_by_1",
                "typeString": "int_const 357"
              },
              "value": "357"
            },
            "visibility": "internal"
          },
          {
            "id": 66197,
            "nodeType": "VariableDeclaration",
            "src": "10247:52:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "JOINS_EXITS_DISABLED",
            "nameLocation": "10273:20:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66195,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10247:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333538",
              "id": 66196,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10296:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_358_by_1",
                "typeString": "int_const 358"
              },
              "value": "358"
            },
            "visibility": "internal"
          },
          {
            "id": 66200,
            "nodeType": "VariableDeclaration",
            "src": "10317:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "REENTRANCY",
            "nameLocation": "10343:10:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66198,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10317:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343030",
              "id": 66199,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10356:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_400_by_1",
                "typeString": "int_const 400"
              },
              "value": "400"
            },
            "visibility": "internal"
          },
          {
            "id": 66203,
            "nodeType": "VariableDeclaration",
            "src": "10365:50:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SENDER_NOT_ALLOWED",
            "nameLocation": "10391:18:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66201,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10365:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343031",
              "id": 66202,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10412:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_401_by_1",
                "typeString": "int_const 401"
              },
              "value": "401"
            },
            "visibility": "internal"
          },
          {
            "id": 66206,
            "nodeType": "VariableDeclaration",
            "src": "10421:38:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PAUSED",
            "nameLocation": "10447:6:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66204,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10421:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343032",
              "id": 66205,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10456:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_402_by_1",
                "typeString": "int_const 402"
              },
              "value": "402"
            },
            "visibility": "internal"
          },
          {
            "id": 66209,
            "nodeType": "VariableDeclaration",
            "src": "10465:52:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PAUSE_WINDOW_EXPIRED",
            "nameLocation": "10491:20:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66207,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10465:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343033",
              "id": 66208,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10514:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_403_by_1",
                "typeString": "int_const 403"
              },
              "value": "403"
            },
            "visibility": "internal"
          },
          {
            "id": 66212,
            "nodeType": "VariableDeclaration",
            "src": "10523:57:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_PAUSE_WINDOW_DURATION",
            "nameLocation": "10549:25:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66210,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10523:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343034",
              "id": 66211,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10577:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_404_by_1",
                "typeString": "int_const 404"
              },
              "value": "404"
            },
            "visibility": "internal"
          },
          {
            "id": 66215,
            "nodeType": "VariableDeclaration",
            "src": "10586:58:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_BUFFER_PERIOD_DURATION",
            "nameLocation": "10612:26:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66213,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10586:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343035",
              "id": 66214,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10641:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_405_by_1",
                "typeString": "int_const 405"
              },
              "value": "405"
            },
            "visibility": "internal"
          },
          {
            "id": 66218,
            "nodeType": "VariableDeclaration",
            "src": "10650:52:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_BALANCE",
            "nameLocation": "10676:20:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66216,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10650:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343036",
              "id": 66217,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10699:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_406_by_1",
                "typeString": "int_const 406"
              },
              "value": "406"
            },
            "visibility": "internal"
          },
          {
            "id": 66221,
            "nodeType": "VariableDeclaration",
            "src": "10708:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_ALLOWANCE",
            "nameLocation": "10734:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66219,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10708:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343037",
              "id": 66220,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10759:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_407_by_1",
                "typeString": "int_const 407"
              },
              "value": "407"
            },
            "visibility": "internal"
          },
          {
            "id": 66224,
            "nodeType": "VariableDeclaration",
            "src": "10768:64:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_FROM_ZERO_ADDRESS",
            "nameLocation": "10794:32:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66222,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10768:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343038",
              "id": 66223,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10829:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_408_by_1",
                "typeString": "int_const 408"
              },
              "value": "408"
            },
            "visibility": "internal"
          },
          {
            "id": 66227,
            "nodeType": "VariableDeclaration",
            "src": "10838:62:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_TO_ZERO_ADDRESS",
            "nameLocation": "10864:30:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66225,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10838:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343039",
              "id": 66226,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10897:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_409_by_1",
                "typeString": "int_const 409"
              },
              "value": "409"
            },
            "visibility": "internal"
          },
          {
            "id": 66230,
            "nodeType": "VariableDeclaration",
            "src": "10906:58:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_MINT_TO_ZERO_ADDRESS",
            "nameLocation": "10932:26:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66228,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10906:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343130",
              "id": 66229,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10961:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_410_by_1",
                "typeString": "int_const 410"
              },
              "value": "410"
            },
            "visibility": "internal"
          },
          {
            "id": 66233,
            "nodeType": "VariableDeclaration",
            "src": "10970:60:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_BURN_FROM_ZERO_ADDRESS",
            "nameLocation": "10996:28:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66231,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10970:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343131",
              "id": 66232,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11027:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_411_by_1",
                "typeString": "int_const 411"
              },
              "value": "411"
            },
            "visibility": "internal"
          },
          {
            "id": 66236,
            "nodeType": "VariableDeclaration",
            "src": "11036:63:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_APPROVE_FROM_ZERO_ADDRESS",
            "nameLocation": "11062:31:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66234,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11036:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343132",
              "id": 66235,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11096:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_412_by_1",
                "typeString": "int_const 412"
              },
              "value": "412"
            },
            "visibility": "internal"
          },
          {
            "id": 66239,
            "nodeType": "VariableDeclaration",
            "src": "11105:61:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_APPROVE_TO_ZERO_ADDRESS",
            "nameLocation": "11131:29:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66237,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11105:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343133",
              "id": 66238,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11163:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_413_by_1",
                "typeString": "int_const 413"
              },
              "value": "413"
            },
            "visibility": "internal"
          },
          {
            "id": 66242,
            "nodeType": "VariableDeclaration",
            "src": "11172:64:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_EXCEEDS_ALLOWANCE",
            "nameLocation": "11198:32:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66240,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11172:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343134",
              "id": 66241,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11233:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_414_by_1",
                "typeString": "int_const 414"
              },
              "value": "414"
            },
            "visibility": "internal"
          },
          {
            "id": 66245,
            "nodeType": "VariableDeclaration",
            "src": "11242:68:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_DECREASED_ALLOWANCE_BELOW_ZERO",
            "nameLocation": "11268:36:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66243,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11242:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343135",
              "id": 66244,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11307:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_415_by_1",
                "typeString": "int_const 415"
              },
              "value": "415"
            },
            "visibility": "internal"
          },
          {
            "id": 66248,
            "nodeType": "VariableDeclaration",
            "src": "11316:62:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_EXCEEDS_BALANCE",
            "nameLocation": "11342:30:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66246,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11316:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343136",
              "id": 66247,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11375:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_416_by_1",
                "typeString": "int_const 416"
              },
              "value": "416"
            },
            "visibility": "internal"
          },
          {
            "id": 66251,
            "nodeType": "VariableDeclaration",
            "src": "11384:60:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_BURN_EXCEEDS_ALLOWANCE",
            "nameLocation": "11410:28:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66249,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11384:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343137",
              "id": 66250,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11441:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_417_by_1",
                "typeString": "int_const 417"
              },
              "value": "417"
            },
            "visibility": "internal"
          },
          {
            "id": 66254,
            "nodeType": "VariableDeclaration",
            "src": "11450:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SAFE_ERC20_CALL_FAILED",
            "nameLocation": "11476:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66252,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11450:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343138",
              "id": 66253,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11501:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_418_by_1",
                "typeString": "int_const 418"
              },
              "value": "418"
            },
            "visibility": "internal"
          },
          {
            "id": 66257,
            "nodeType": "VariableDeclaration",
            "src": "11510:60:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_INSUFFICIENT_BALANCE",
            "nameLocation": "11536:28:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66255,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11510:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343139",
              "id": 66256,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11567:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_419_by_1",
                "typeString": "int_const 419"
              },
              "value": "419"
            },
            "visibility": "internal"
          },
          {
            "id": 66260,
            "nodeType": "VariableDeclaration",
            "src": "11576:57:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_CANNOT_SEND_VALUE",
            "nameLocation": "11602:25:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66258,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11576:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343230",
              "id": 66259,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11630:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_420_by_1",
                "typeString": "int_const 420"
              },
              "value": "420"
            },
            "visibility": "internal"
          },
          {
            "id": 66263,
            "nodeType": "VariableDeclaration",
            "src": "11639:63:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SAFE_CAST_VALUE_CANT_FIT_INT256",
            "nameLocation": "11665:31:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66261,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11639:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343231",
              "id": 66262,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11699:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_421_by_1",
                "typeString": "int_const 421"
              },
              "value": "421"
            },
            "visibility": "internal"
          },
          {
            "id": 66266,
            "nodeType": "VariableDeclaration",
            "src": "11708:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "GRANT_SENDER_NOT_ADMIN",
            "nameLocation": "11734:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66264,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11708:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343232",
              "id": 66265,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11759:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_422_by_1",
                "typeString": "int_const 422"
              },
              "value": "422"
            },
            "visibility": "internal"
          },
          {
            "id": 66269,
            "nodeType": "VariableDeclaration",
            "src": "11768:55:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "REVOKE_SENDER_NOT_ADMIN",
            "nameLocation": "11794:23:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66267,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11768:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343233",
              "id": 66268,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11820:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_423_by_1",
                "typeString": "int_const 423"
              },
              "value": "423"
            },
            "visibility": "internal"
          },
          {
            "id": 66272,
            "nodeType": "VariableDeclaration",
            "src": "11829:59:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RENOUNCE_SENDER_NOT_ALLOWED",
            "nameLocation": "11855:27:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66270,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11829:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343234",
              "id": 66271,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11885:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_424_by_1",
                "typeString": "int_const 424"
              },
              "value": "424"
            },
            "visibility": "internal"
          },
          {
            "id": 66275,
            "nodeType": "VariableDeclaration",
            "src": "11894:53:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BUFFER_PERIOD_EXPIRED",
            "nameLocation": "11920:21:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66273,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11894:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343235",
              "id": 66274,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11944:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_425_by_1",
                "typeString": "int_const 425"
              },
              "value": "425"
            },
            "visibility": "internal"
          },
          {
            "id": 66278,
            "nodeType": "VariableDeclaration",
            "src": "11953:51:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_IS_NOT_OWNER",
            "nameLocation": "11979:19:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66276,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11953:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343236",
              "id": 66277,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12001:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_426_by_1",
                "typeString": "int_const 426"
              },
              "value": "426"
            },
            "visibility": "internal"
          },
          {
            "id": 66281,
            "nodeType": "VariableDeclaration",
            "src": "12010:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NEW_OWNER_IS_ZERO",
            "nameLocation": "12036:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66279,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12010:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343237",
              "id": 66280,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12056:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_427_by_1",
                "typeString": "int_const 427"
              },
              "value": "427"
            },
            "visibility": "internal"
          },
          {
            "id": 66284,
            "nodeType": "VariableDeclaration",
            "src": "12065:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CODE_DEPLOYMENT_FAILED",
            "nameLocation": "12091:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66282,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12065:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343238",
              "id": 66283,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12116:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_428_by_1",
                "typeString": "int_const 428"
              },
              "value": "428"
            },
            "visibility": "internal"
          },
          {
            "id": 66287,
            "nodeType": "VariableDeclaration",
            "src": "12125:52:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALL_TO_NON_CONTRACT",
            "nameLocation": "12151:20:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66285,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12125:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343239",
              "id": 66286,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12174:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_429_by_1",
                "typeString": "int_const 429"
              },
              "value": "429"
            },
            "visibility": "internal"
          },
          {
            "id": 66290,
            "nodeType": "VariableDeclaration",
            "src": "12183:53:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LOW_LEVEL_CALL_FAILED",
            "nameLocation": "12209:21:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66288,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12183:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343330",
              "id": 66289,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12233:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_430_by_1",
                "typeString": "int_const 430"
              },
              "value": "430"
            },
            "visibility": "internal"
          },
          {
            "id": 66293,
            "nodeType": "VariableDeclaration",
            "src": "12242:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_PAUSED",
            "nameLocation": "12268:10:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66291,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12242:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343331",
              "id": 66292,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12281:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_431_by_1",
                "typeString": "int_const 431"
              },
              "value": "431"
            },
            "visibility": "internal"
          },
          {
            "id": 66296,
            "nodeType": "VariableDeclaration",
            "src": "12290:59:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_ALREADY_ALLOWLISTED",
            "nameLocation": "12316:27:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66294,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12290:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343332",
              "id": 66295,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12346:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_432_by_1",
                "typeString": "int_const 432"
              },
              "value": "432"
            },
            "visibility": "internal"
          },
          {
            "id": 66299,
            "nodeType": "VariableDeclaration",
            "src": "12355:55:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_NOT_ALLOWLISTED",
            "nameLocation": "12381:23:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66297,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12355:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343333",
              "id": 66298,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12407:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_433_by_1",
                "typeString": "int_const 433"
              },
              "value": "433"
            },
            "visibility": "internal"
          },
          {
            "id": 66302,
            "nodeType": "VariableDeclaration",
            "src": "12416:58:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_BURN_EXCEEDS_BALANCE",
            "nameLocation": "12442:26:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66300,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12416:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343334",
              "id": 66301,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12471:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_434_by_1",
                "typeString": "int_const 434"
              },
              "value": "434"
            },
            "visibility": "internal"
          },
          {
            "id": 66305,
            "nodeType": "VariableDeclaration",
            "src": "12480:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_OPERATION",
            "nameLocation": "12506:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66303,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12480:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343335",
              "id": 66304,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12526:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_435_by_1",
                "typeString": "int_const 435"
              },
              "value": "435"
            },
            "visibility": "internal"
          },
          {
            "id": 66308,
            "nodeType": "VariableDeclaration",
            "src": "12535:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CODEC_OVERFLOW",
            "nameLocation": "12561:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66306,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12535:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343336",
              "id": 66307,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12578:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_436_by_1",
                "typeString": "int_const 436"
              },
              "value": "436"
            },
            "visibility": "internal"
          },
          {
            "id": 66311,
            "nodeType": "VariableDeclaration",
            "src": "12587:48:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "IN_RECOVERY_MODE",
            "nameLocation": "12613:16:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66309,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12587:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343337",
              "id": 66310,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12632:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_437_by_1",
                "typeString": "int_const 437"
              },
              "value": "437"
            },
            "visibility": "internal"
          },
          {
            "id": 66314,
            "nodeType": "VariableDeclaration",
            "src": "12641:52:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_IN_RECOVERY_MODE",
            "nameLocation": "12667:20:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66312,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12641:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343338",
              "id": 66313,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12690:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_438_by_1",
                "typeString": "int_const 438"
              },
              "value": "438"
            },
            "visibility": "internal"
          },
          {
            "id": 66317,
            "nodeType": "VariableDeclaration",
            "src": "12699:47:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INDUCED_FAILURE",
            "nameLocation": "12725:15:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66315,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12699:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343339",
              "id": 66316,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12743:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_439_by_1",
                "typeString": "int_const 439"
              },
              "value": "439"
            },
            "visibility": "internal"
          },
          {
            "id": 66320,
            "nodeType": "VariableDeclaration",
            "src": "12752:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EXPIRED_SIGNATURE",
            "nameLocation": "12778:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66318,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12752:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343430",
              "id": 66319,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12798:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_440_by_1",
                "typeString": "int_const 440"
              },
              "value": "440"
            },
            "visibility": "internal"
          },
          {
            "id": 66323,
            "nodeType": "VariableDeclaration",
            "src": "12807:51:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MALFORMED_SIGNATURE",
            "nameLocation": "12833:19:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66321,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12807:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343431",
              "id": 66322,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12855:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_441_by_1",
                "typeString": "int_const 441"
              },
              "value": "441"
            },
            "visibility": "internal"
          },
          {
            "id": 66326,
            "nodeType": "VariableDeclaration",
            "src": "12864:63:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SAFE_CAST_VALUE_CANT_FIT_UINT64",
            "nameLocation": "12890:31:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66324,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12864:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343432",
              "id": 66325,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12924:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_442_by_1",
                "typeString": "int_const 442"
              },
              "value": "442"
            },
            "visibility": "internal"
          },
          {
            "id": 66329,
            "nodeType": "VariableDeclaration",
            "src": "12933:50:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_FEE_TYPE",
            "nameLocation": "12959:18:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66327,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12933:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343433",
              "id": 66328,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12980:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_443_by_1",
                "typeString": "int_const 443"
              },
              "value": "443"
            },
            "visibility": "internal"
          },
          {
            "id": 66332,
            "nodeType": "VariableDeclaration",
            "src": "12989:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BURN_FROM_ZERO",
            "nameLocation": "13015:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66330,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12989:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343434",
              "id": 66331,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13032:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_444_by_1",
                "typeString": "int_const 444"
              },
              "value": "444"
            },
            "visibility": "internal"
          },
          {
            "id": 66335,
            "nodeType": "VariableDeclaration",
            "src": "13055:47:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_POOL_ID",
            "nameLocation": "13081:15:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66333,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13055:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353030",
              "id": 66334,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13099:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_500_by_1",
                "typeString": "int_const 500"
              },
              "value": "500"
            },
            "visibility": "internal"
          },
          {
            "id": 66338,
            "nodeType": "VariableDeclaration",
            "src": "13108:47:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_NOT_POOL",
            "nameLocation": "13134:15:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66336,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13108:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353031",
              "id": 66337,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13152:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_501_by_1",
                "typeString": "int_const 501"
              },
              "value": "501"
            },
            "visibility": "internal"
          },
          {
            "id": 66341,
            "nodeType": "VariableDeclaration",
            "src": "13161:56:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SENDER_NOT_ASSET_MANAGER",
            "nameLocation": "13187:24:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66339,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13161:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353032",
              "id": 66340,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13214:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_502_by_1",
                "typeString": "int_const 502"
              },
              "value": "502"
            },
            "visibility": "internal"
          },
          {
            "id": 66344,
            "nodeType": "VariableDeclaration",
            "src": "13223:57:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "USER_DOESNT_ALLOW_RELAYER",
            "nameLocation": "13249:25:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66342,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13223:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353033",
              "id": 66343,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13277:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_503_by_1",
                "typeString": "int_const 503"
              },
              "value": "503"
            },
            "visibility": "internal"
          },
          {
            "id": 66347,
            "nodeType": "VariableDeclaration",
            "src": "13286:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_SIGNATURE",
            "nameLocation": "13312:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66345,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13286:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353034",
              "id": 66346,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13332:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_504_by_1",
                "typeString": "int_const 504"
              },
              "value": "504"
            },
            "visibility": "internal"
          },
          {
            "id": 66350,
            "nodeType": "VariableDeclaration",
            "src": "13341:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EXIT_BELOW_MIN",
            "nameLocation": "13367:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66348,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13341:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353035",
              "id": 66349,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13384:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_505_by_1",
                "typeString": "int_const 505"
              },
              "value": "505"
            },
            "visibility": "internal"
          },
          {
            "id": 66353,
            "nodeType": "VariableDeclaration",
            "src": "13393:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "JOIN_ABOVE_MAX",
            "nameLocation": "13419:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66351,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13393:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353036",
              "id": 66352,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13436:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_506_by_1",
                "typeString": "int_const 506"
              },
              "value": "506"
            },
            "visibility": "internal"
          },
          {
            "id": 66356,
            "nodeType": "VariableDeclaration",
            "src": "13445:42:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAP_LIMIT",
            "nameLocation": "13471:10:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66354,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13445:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353037",
              "id": 66355,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13484:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_507_by_1",
                "typeString": "int_const 507"
              },
              "value": "507"
            },
            "visibility": "internal"
          },
          {
            "id": 66359,
            "nodeType": "VariableDeclaration",
            "src": "13493:45:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAP_DEADLINE",
            "nameLocation": "13519:13:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66357,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13493:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353038",
              "id": 66358,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13535:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_508_by_1",
                "typeString": "int_const 508"
              },
              "value": "508"
            },
            "visibility": "internal"
          },
          {
            "id": 66362,
            "nodeType": "VariableDeclaration",
            "src": "13544:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CANNOT_SWAP_SAME_TOKEN",
            "nameLocation": "13570:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66360,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13544:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353039",
              "id": 66361,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13595:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_509_by_1",
                "typeString": "int_const 509"
              },
              "value": "509"
            },
            "visibility": "internal"
          },
          {
            "id": 66365,
            "nodeType": "VariableDeclaration",
            "src": "13604:60:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNKNOWN_AMOUNT_IN_FIRST_SWAP",
            "nameLocation": "13630:28:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66363,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13604:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353130",
              "id": 66364,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13661:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_510_by_1",
                "typeString": "int_const 510"
              },
              "value": "510"
            },
            "visibility": "internal"
          },
          {
            "id": 66368,
            "nodeType": "VariableDeclaration",
            "src": "13670:60:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MALCONSTRUCTED_MULTIHOP_SWAP",
            "nameLocation": "13696:28:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66366,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13670:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353131",
              "id": 66367,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13727:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_511_by_1",
                "typeString": "int_const 511"
              },
              "value": "511"
            },
            "visibility": "internal"
          },
          {
            "id": 66371,
            "nodeType": "VariableDeclaration",
            "src": "13736:57:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INTERNAL_BALANCE_OVERFLOW",
            "nameLocation": "13762:25:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66369,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13736:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353132",
              "id": 66370,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13790:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_512_by_1",
                "typeString": "int_const 512"
              },
              "value": "512"
            },
            "visibility": "internal"
          },
          {
            "id": 66374,
            "nodeType": "VariableDeclaration",
            "src": "13799:61:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_INTERNAL_BALANCE",
            "nameLocation": "13825:29:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66372,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13799:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353133",
              "id": 66373,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13857:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_513_by_1",
                "typeString": "int_const 513"
              },
              "value": "513"
            },
            "visibility": "internal"
          },
          {
            "id": 66377,
            "nodeType": "VariableDeclaration",
            "src": "13866:60:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_ETH_INTERNAL_BALANCE",
            "nameLocation": "13892:28:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66375,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13866:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353134",
              "id": 66376,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13923:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_514_by_1",
                "typeString": "int_const 514"
              },
              "value": "514"
            },
            "visibility": "internal"
          },
          {
            "id": 66380,
            "nodeType": "VariableDeclaration",
            "src": "13932:57:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_POST_LOAN_BALANCE",
            "nameLocation": "13958:25:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66378,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13932:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353135",
              "id": 66379,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13986:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_515_by_1",
                "typeString": "int_const 515"
              },
              "value": "515"
            },
            "visibility": "internal"
          },
          {
            "id": 66383,
            "nodeType": "VariableDeclaration",
            "src": "13995:48:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_ETH",
            "nameLocation": "14021:16:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66381,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13995:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353136",
              "id": 66382,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14040:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_516_by_1",
                "typeString": "int_const 516"
              },
              "value": "516"
            },
            "visibility": "internal"
          },
          {
            "id": 66386,
            "nodeType": "VariableDeclaration",
            "src": "14049:47:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNALLOCATED_ETH",
            "nameLocation": "14075:15:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66384,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14049:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353137",
              "id": 66385,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14093:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_517_by_1",
                "typeString": "int_const 517"
              },
              "value": "517"
            },
            "visibility": "internal"
          },
          {
            "id": 66389,
            "nodeType": "VariableDeclaration",
            "src": "14102:44:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ETH_TRANSFER",
            "nameLocation": "14128:12:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66387,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14102:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353138",
              "id": 66388,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14143:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_518_by_1",
                "typeString": "int_const 518"
              },
              "value": "518"
            },
            "visibility": "internal"
          },
          {
            "id": 66392,
            "nodeType": "VariableDeclaration",
            "src": "14152:55:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CANNOT_USE_ETH_SENTINEL",
            "nameLocation": "14178:23:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66390,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14152:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353139",
              "id": 66391,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14204:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_519_by_1",
                "typeString": "int_const 519"
              },
              "value": "519"
            },
            "visibility": "internal"
          },
          {
            "id": 66395,
            "nodeType": "VariableDeclaration",
            "src": "14213:47:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKENS_MISMATCH",
            "nameLocation": "14239:15:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66393,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14213:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353230",
              "id": 66394,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14257:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_520_by_1",
                "typeString": "int_const 520"
              },
              "value": "520"
            },
            "visibility": "internal"
          },
          {
            "id": 66398,
            "nodeType": "VariableDeclaration",
            "src": "14266:52:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKEN_NOT_REGISTERED",
            "nameLocation": "14292:20:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66396,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14266:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353231",
              "id": 66397,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14315:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_521_by_1",
                "typeString": "int_const 521"
              },
              "value": "521"
            },
            "visibility": "internal"
          },
          {
            "id": 66401,
            "nodeType": "VariableDeclaration",
            "src": "14324:56:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKEN_ALREADY_REGISTERED",
            "nameLocation": "14350:24:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66399,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14324:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353232",
              "id": 66400,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14377:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_522_by_1",
                "typeString": "int_const 522"
              },
              "value": "522"
            },
            "visibility": "internal"
          },
          {
            "id": 66404,
            "nodeType": "VariableDeclaration",
            "src": "14386:50:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKENS_ALREADY_SET",
            "nameLocation": "14412:18:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66402,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14386:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353233",
              "id": 66403,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14433:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_523_by_1",
                "typeString": "int_const 523"
              },
              "value": "523"
            },
            "visibility": "internal"
          },
          {
            "id": 66407,
            "nodeType": "VariableDeclaration",
            "src": "14442:55:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKENS_LENGTH_MUST_BE_2",
            "nameLocation": "14468:23:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66405,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14442:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353234",
              "id": 66406,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14494:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_524_by_1",
                "typeString": "int_const 524"
              },
              "value": "524"
            },
            "visibility": "internal"
          },
          {
            "id": 66410,
            "nodeType": "VariableDeclaration",
            "src": "14503:53:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NONZERO_TOKEN_BALANCE",
            "nameLocation": "14529:21:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66408,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14503:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353235",
              "id": 66409,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14553:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_525_by_1",
                "typeString": "int_const 525"
              },
              "value": "525"
            },
            "visibility": "internal"
          },
          {
            "id": 66413,
            "nodeType": "VariableDeclaration",
            "src": "14562:54:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BALANCE_TOTAL_OVERFLOW",
            "nameLocation": "14588:22:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66411,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14562:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353236",
              "id": 66412,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14613:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_526_by_1",
                "typeString": "int_const 526"
              },
              "value": "526"
            },
            "visibility": "internal"
          },
          {
            "id": 66416,
            "nodeType": "VariableDeclaration",
            "src": "14622:46:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "POOL_NO_TOKENS",
            "nameLocation": "14648:14:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66414,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14622:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353237",
              "id": 66415,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14665:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_527_by_1",
                "typeString": "int_const 527"
              },
              "value": "527"
            },
            "visibility": "internal"
          },
          {
            "id": 66419,
            "nodeType": "VariableDeclaration",
            "src": "14674:63:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_FLASH_LOAN_BALANCE",
            "nameLocation": "14700:31:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66417,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14674:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353238",
              "id": 66418,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14734:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_528_by_1",
                "typeString": "int_const 528"
              },
              "value": "528"
            },
            "visibility": "internal"
          },
          {
            "id": 66422,
            "nodeType": "VariableDeclaration",
            "src": "14756:60:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAP_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "14782:28:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66420,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14756:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363030",
              "id": 66421,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14813:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_600_by_1",
                "typeString": "int_const 600"
              },
              "value": "600"
            },
            "visibility": "internal"
          },
          {
            "id": 66425,
            "nodeType": "VariableDeclaration",
            "src": "14822:66:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FLASH_LOAN_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "14848:34:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66423,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14822:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363031",
              "id": 66424,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14885:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_601_by_1",
                "typeString": "int_const 601"
              },
              "value": "601"
            },
            "visibility": "internal"
          },
          {
            "id": 66428,
            "nodeType": "VariableDeclaration",
            "src": "14894:66:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT",
            "nameLocation": "14920:34:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66426,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14894:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363032",
              "id": 66427,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14957:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_602_by_1",
                "typeString": "int_const 602"
              },
              "value": "602"
            },
            "visibility": "internal"
          },
          {
            "id": 66431,
            "nodeType": "VariableDeclaration",
            "src": "14966:59:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AUM_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "14992:27:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66429,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14966:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363033",
              "id": 66430,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15022:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_603_by_1",
                "typeString": "int_const 603"
              },
              "value": "603"
            },
            "visibility": "internal"
          },
          {
            "id": 66434,
            "nodeType": "VariableDeclaration",
            "src": "15051:64:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SPLITTER_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "15077:32:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66432,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15051:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "373030",
              "id": 66433,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15112:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_700_by_1",
                "typeString": "int_const 700"
              },
              "value": "700"
            },
            "visibility": "internal"
          },
          {
            "id": 66437,
            "nodeType": "VariableDeclaration",
            "src": "15134:45:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNIMPLEMENTED",
            "nameLocation": "15160:13:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66435,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15134:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "393938",
              "id": 66436,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15176:3:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_998_by_1",
                "typeString": "int_const 998"
              },
              "value": "998"
            },
            "visibility": "internal"
          },
          {
            "id": 66440,
            "nodeType": "VariableDeclaration",
            "src": "15185:49:106",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SHOULD_NOT_HAPPEN",
            "nameLocation": "15211:17:106",
            "scope": 66441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66438,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15185:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "393939",
              "id": 66439,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15231:3:106",
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
          66441
        ],
        "name": "BalancerErrors",
        "nameLocation": "5214:14:106",
        "scope": 66442,
        "usedErrors": []
      }
    ],
    "license": "GPL-3.0-or-later"
  },
  "id": 106
} as const;
