export const BalancerErrors = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205902fa8e0853cf162f3475a8c2ba1f886bccd1559985ef771999fe9590ae3e5564736f6c63430008130033",
    "sourceMap": "5206:10031:107:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;5206:10031:107;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205902fa8e0853cf162f3475a8c2ba1f886bccd1559985ef771999fe9590ae3e5564736f6c63430008130033",
    "sourceMap": "5206:10031:107:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/3rdPartyLibs/BalancerErrors.sol\":\"BalancerErrors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"test/3rdPartyLibs/BalancerErrors.sol\":{\"keccak256\":\"0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611\",\"dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU\"]}},\"version\":1}",
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
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
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
    "id": 67379,
    "exportedSymbols": {
      "BalancerErrors": [
        67378
      ],
      "_require": [
        66822,
        66841
      ],
      "_revert": [
        66853,
        66873
      ]
    },
    "nodeType": "SourceUnit",
    "src": "688:14550:107",
    "nodes": [
      {
        "id": 66806,
        "nodeType": "PragmaDirective",
        "src": "688:31:107",
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
        "id": 66822,
        "nodeType": "FunctionDefinition",
        "src": "926:101:107",
        "nodes": [],
        "body": {
          "id": 66821,
          "nodeType": "Block",
          "src": "984:43:107",
          "nodes": [],
          "statements": [
            {
              "condition": {
                "id": 66815,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "lValueRequested": false,
                "nodeType": "UnaryOperation",
                "operator": "!",
                "prefix": true,
                "src": "994:10:107",
                "subExpression": {
                  "id": 66814,
                  "name": "condition",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 66809,
                  "src": "995:9:107",
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
              "id": 66820,
              "nodeType": "IfStatement",
              "src": "990:34:107",
              "trueBody": {
                "expression": {
                  "arguments": [
                    {
                      "id": 66817,
                      "name": "errorCode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66811,
                      "src": "1014:9:107",
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
                    "id": 66816,
                    "name": "_revert",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [
                      66853,
                      66873
                    ],
                    "referencedDeclaration": 66853,
                    "src": "1006:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                      "typeString": "function (uint256) pure"
                    }
                  },
                  "id": 66818,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1006:18:107",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 66819,
                "nodeType": "ExpressionStatement",
                "src": "1006:18:107"
              }
            }
          ]
        },
        "documentation": {
          "id": 66807,
          "nodeType": "StructuredDocumentation",
          "src": "741:184:107",
          "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.\n Uses the default 'BAL' prefix for the error code"
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_require",
        "nameLocation": "935:8:107",
        "parameters": {
          "id": 66812,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 66809,
              "mutability": "mutable",
              "name": "condition",
              "nameLocation": "949:9:107",
              "nodeType": "VariableDeclaration",
              "scope": 66822,
              "src": "944:14:107",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 66808,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "944:4:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 66811,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "968:9:107",
              "nodeType": "VariableDeclaration",
              "scope": 66822,
              "src": "960:17:107",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 66810,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "960:7:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "943:35:107"
        },
        "returnParameters": {
          "id": 66813,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "984:0:107"
        },
        "scope": 67379,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 66841,
        "nodeType": "FunctionDefinition",
        "src": "1162:124:107",
        "nodes": [],
        "body": {
          "id": 66840,
          "nodeType": "Block",
          "src": "1235:51:107",
          "nodes": [],
          "statements": [
            {
              "condition": {
                "id": 66833,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "lValueRequested": false,
                "nodeType": "UnaryOperation",
                "operator": "!",
                "prefix": true,
                "src": "1245:10:107",
                "subExpression": {
                  "id": 66832,
                  "name": "condition",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 66825,
                  "src": "1246:9:107",
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
              "id": 66839,
              "nodeType": "IfStatement",
              "src": "1241:42:107",
              "trueBody": {
                "expression": {
                  "arguments": [
                    {
                      "id": 66835,
                      "name": "errorCode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66827,
                      "src": "1265:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    {
                      "id": 66836,
                      "name": "prefix",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66829,
                      "src": "1276:6:107",
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
                    "id": 66834,
                    "name": "_revert",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [
                      66853,
                      66873
                    ],
                    "referencedDeclaration": 66873,
                    "src": "1257:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                      "typeString": "function (uint256,bytes3) pure"
                    }
                  },
                  "id": 66837,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1257:26:107",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 66838,
                "nodeType": "ExpressionStatement",
                "src": "1257:26:107"
              }
            }
          ]
        },
        "documentation": {
          "id": 66823,
          "nodeType": "StructuredDocumentation",
          "src": "1029:132:107",
          "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported."
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_require",
        "nameLocation": "1171:8:107",
        "parameters": {
          "id": 66830,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 66825,
              "mutability": "mutable",
              "name": "condition",
              "nameLocation": "1185:9:107",
              "nodeType": "VariableDeclaration",
              "scope": 66841,
              "src": "1180:14:107",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 66824,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1180:4:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 66827,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "1204:9:107",
              "nodeType": "VariableDeclaration",
              "scope": 66841,
              "src": "1196:17:107",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 66826,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1196:7:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 66829,
              "mutability": "mutable",
              "name": "prefix",
              "nameLocation": "1222:6:107",
              "nodeType": "VariableDeclaration",
              "scope": 66841,
              "src": "1215:13:107",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes3",
                "typeString": "bytes3"
              },
              "typeName": {
                "id": 66828,
                "name": "bytes3",
                "nodeType": "ElementaryTypeName",
                "src": "1215:6:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes3",
                  "typeString": "bytes3"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "1179:50:107"
        },
        "returnParameters": {
          "id": 66831,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "1235:0:107"
        },
        "scope": 67379,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 66853,
        "nodeType": "FunctionDefinition",
        "src": "1445:126:107",
        "nodes": [],
        "body": {
          "id": 66852,
          "nodeType": "Block",
          "src": "1486:85:107",
          "nodes": [],
          "statements": [
            {
              "expression": {
                "arguments": [
                  {
                    "id": 66848,
                    "name": "errorCode",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 66844,
                    "src": "1500:9:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "hexValue": "3078343234313463",
                    "id": 66849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1511:8:107",
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
                  "id": 66847,
                  "name": "_revert",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [
                    66853,
                    66873
                  ],
                  "referencedDeclaration": 66873,
                  "src": "1492:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                    "typeString": "function (uint256,bytes3) pure"
                  }
                },
                "id": 66850,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "functionCall",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "1492:28:107",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_tuple$__$",
                  "typeString": "tuple()"
                }
              },
              "id": 66851,
              "nodeType": "ExpressionStatement",
              "src": "1492:28:107"
            }
          ]
        },
        "documentation": {
          "id": 66842,
          "nodeType": "StructuredDocumentation",
          "src": "1288:156:107",
          "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.\n Uses the default 'BAL' prefix for the error code"
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_revert",
        "nameLocation": "1454:7:107",
        "parameters": {
          "id": 66845,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 66844,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "1470:9:107",
              "nodeType": "VariableDeclaration",
              "scope": 66853,
              "src": "1462:17:107",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 66843,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1462:7:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "1461:19:107"
        },
        "returnParameters": {
          "id": 66846,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "1486:0:107"
        },
        "scope": 67379,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 66873,
        "nodeType": "FunctionDefinition",
        "src": "1678:3526:107",
        "nodes": [],
        "body": {
          "id": 66872,
          "nodeType": "Block",
          "src": "1734:3470:107",
          "nodes": [],
          "statements": [
            {
              "assignments": [
                66862
              ],
              "declarations": [
                {
                  "constant": false,
                  "id": 66862,
                  "mutability": "mutable",
                  "name": "prefixUint",
                  "nameLocation": "1748:10:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 66872,
                  "src": "1740:18:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66861,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1740:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "id": 66870,
              "initialValue": {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "id": 66867,
                        "name": "prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66858,
                        "src": "1776:6:107",
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
                      "id": 66866,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1769:6:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint24_$",
                        "typeString": "type(uint24)"
                      },
                      "typeName": {
                        "id": 66865,
                        "name": "uint24",
                        "nodeType": "ElementaryTypeName",
                        "src": "1769:6:107",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 66868,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1769:14:107",
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
                  "id": 66864,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "nodeType": "ElementaryTypeNameExpression",
                  "src": "1761:7:107",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_uint256_$",
                    "typeString": "type(uint256)"
                  },
                  "typeName": {
                    "id": 66863,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1761:7:107",
                    "typeDescriptions": {}
                  }
                },
                "id": 66869,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "typeConversion",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "1761:23:107",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "VariableDeclarationStatement",
              "src": "1740:44:107"
            },
            {
              "AST": {
                "nodeType": "YulBlock",
                "src": "2573:2629:107",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2847:42:107",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "errorCode",
                              "nodeType": "YulIdentifier",
                              "src": "2868:9:107"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2879:2:107",
                              "type": "",
                              "value": "10"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "2864:3:107"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2864:18:107"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2884:4:107",
                          "type": "",
                          "value": "0x30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2860:3:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2860:29:107"
                    },
                    "variables": [
                      {
                        "name": "units",
                        "nodeType": "YulTypedName",
                        "src": "2851:5:107",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2899:31:107",
                    "value": {
                      "arguments": [
                        {
                          "name": "errorCode",
                          "nodeType": "YulIdentifier",
                          "src": "2916:9:107"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2927:2:107",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "2912:3:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2912:18:107"
                    },
                    "variableNames": [
                      {
                        "name": "errorCode",
                        "nodeType": "YulIdentifier",
                        "src": "2899:9:107"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2939:43:107",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "errorCode",
                              "nodeType": "YulIdentifier",
                              "src": "2961:9:107"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2972:2:107",
                              "type": "",
                              "value": "10"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "2957:3:107"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2957:18:107"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2977:4:107",
                          "type": "",
                          "value": "0x30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2953:3:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2953:29:107"
                    },
                    "variables": [
                      {
                        "name": "tenths",
                        "nodeType": "YulTypedName",
                        "src": "2943:6:107",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2992:31:107",
                    "value": {
                      "arguments": [
                        {
                          "name": "errorCode",
                          "nodeType": "YulIdentifier",
                          "src": "3009:9:107"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3020:2:107",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "3005:3:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3005:18:107"
                    },
                    "variableNames": [
                      {
                        "name": "errorCode",
                        "nodeType": "YulIdentifier",
                        "src": "2992:9:107"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3032:45:107",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "errorCode",
                              "nodeType": "YulIdentifier",
                              "src": "3056:9:107"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3067:2:107",
                              "type": "",
                              "value": "10"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "3052:3:107"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3052:18:107"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3072:4:107",
                          "type": "",
                          "value": "0x30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3048:3:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3048:29:107"
                    },
                    "variables": [
                      {
                        "name": "hundreds",
                        "nodeType": "YulTypedName",
                        "src": "3036:8:107",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3710:61:107",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3737:2:107",
                          "type": "",
                          "value": "24"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3745:4:107",
                              "type": "",
                              "value": "0x23"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3755:1:107",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "prefixUint",
                                  "nodeType": "YulIdentifier",
                                  "src": "3758:10:107"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "3751:3:107"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3751:18:107"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3741:3:107"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3741:29:107"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "3733:3:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3733:38:107"
                    },
                    "variables": [
                      {
                        "name": "formattedPrefix",
                        "nodeType": "YulTypedName",
                        "src": "3714:15:107",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3781:182:107",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3818:3:107",
                          "type": "",
                          "value": "200"
                        },
                        {
                          "arguments": [
                            {
                              "name": "formattedPrefix",
                              "nodeType": "YulIdentifier",
                              "src": "3856:15:107"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "units",
                                      "nodeType": "YulIdentifier",
                                      "src": "3897:5:107"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3908:1:107",
                                          "type": "",
                                          "value": "8"
                                        },
                                        {
                                          "name": "tenths",
                                          "nodeType": "YulIdentifier",
                                          "src": "3911:6:107"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "3904:3:107"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3904:14:107"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3893:3:107"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3893:26:107"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3925:2:107",
                                      "type": "",
                                      "value": "16"
                                    },
                                    {
                                      "name": "hundreds",
                                      "nodeType": "YulIdentifier",
                                      "src": "3929:8:107"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "3921:3:107"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3921:17:107"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3889:3:107"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3889:50:107"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3835:3:107"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3835:118:107"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "3801:3:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3801:162:107"
                    },
                    "variables": [
                      {
                        "name": "revertReason",
                        "nodeType": "YulTypedName",
                        "src": "3785:12:107",
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
                          "src": "4491:3:107",
                          "type": "",
                          "value": "0x0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4508:66:107",
                          "type": "",
                          "value": "0x08c379a000000000000000000000000000000000000000000000000000000000"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4471:6:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4471:113:107"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4471:113:107"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4730:4:107",
                          "type": "",
                          "value": "0x04"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4748:66:107",
                          "type": "",
                          "value": "0x0000000000000000000000000000000000000000000000000000000000000020"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4710:6:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4710:114:107"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4710:114:107"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4893:4:107",
                          "type": "",
                          "value": "0x24"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4899:1:107",
                          "type": "",
                          "value": "7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4886:6:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4886:15:107"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4886:15:107"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4966:4:107",
                          "type": "",
                          "value": "0x44"
                        },
                        {
                          "name": "revertReason",
                          "nodeType": "YulIdentifier",
                          "src": "4972:12:107"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4959:6:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4959:26:107"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4959:26:107"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5189:1:107",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5192:3:107",
                          "type": "",
                          "value": "100"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "5182:6:107"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5182:14:107"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5182:14:107"
                  }
                ]
              },
              "evmVersion": "paris",
              "externalReferences": [
                {
                  "declaration": 66856,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2868:9:107",
                  "valueSize": 1
                },
                {
                  "declaration": 66856,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2899:9:107",
                  "valueSize": 1
                },
                {
                  "declaration": 66856,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2916:9:107",
                  "valueSize": 1
                },
                {
                  "declaration": 66856,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2961:9:107",
                  "valueSize": 1
                },
                {
                  "declaration": 66856,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2992:9:107",
                  "valueSize": 1
                },
                {
                  "declaration": 66856,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "3009:9:107",
                  "valueSize": 1
                },
                {
                  "declaration": 66856,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "3056:9:107",
                  "valueSize": 1
                },
                {
                  "declaration": 66862,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "3758:10:107",
                  "valueSize": 1
                }
              ],
              "id": 66871,
              "nodeType": "InlineAssembly",
              "src": "2564:2638:107"
            }
          ]
        },
        "documentation": {
          "id": 66854,
          "nodeType": "StructuredDocumentation",
          "src": "1573:104:107",
          "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported."
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_revert",
        "nameLocation": "1687:7:107",
        "parameters": {
          "id": 66859,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 66856,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "1703:9:107",
              "nodeType": "VariableDeclaration",
              "scope": 66873,
              "src": "1695:17:107",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 66855,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1695:7:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 66858,
              "mutability": "mutable",
              "name": "prefix",
              "nameLocation": "1721:6:107",
              "nodeType": "VariableDeclaration",
              "scope": 66873,
              "src": "1714:13:107",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes3",
                "typeString": "bytes3"
              },
              "typeName": {
                "id": 66857,
                "name": "bytes3",
                "nodeType": "ElementaryTypeName",
                "src": "1714:6:107",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes3",
                  "typeString": "bytes3"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "1694:34:107"
        },
        "returnParameters": {
          "id": 66860,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "1734:0:107"
        },
        "scope": 67379,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 67378,
        "nodeType": "ContractDefinition",
        "src": "5206:10031:107",
        "nodes": [
          {
            "id": 66876,
            "nodeType": "VariableDeclaration",
            "src": "5247:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADD_OVERFLOW",
            "nameLocation": "5273:12:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66874,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5247:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 66875,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5288:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "id": 66879,
            "nodeType": "VariableDeclaration",
            "src": "5295:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SUB_OVERFLOW",
            "nameLocation": "5321:12:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66877,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5295:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 66878,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5336:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "internal"
          },
          {
            "id": 66882,
            "nodeType": "VariableDeclaration",
            "src": "5343:43:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SUB_UNDERFLOW",
            "nameLocation": "5369:13:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66880,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5343:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "32",
              "id": 66881,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5385:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2_by_1",
                "typeString": "int_const 2"
              },
              "value": "2"
            },
            "visibility": "internal"
          },
          {
            "id": 66885,
            "nodeType": "VariableDeclaration",
            "src": "5392:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MUL_OVERFLOW",
            "nameLocation": "5418:12:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66883,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5392:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "33",
              "id": 66884,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5433:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3_by_1",
                "typeString": "int_const 3"
              },
              "value": "3"
            },
            "visibility": "internal"
          },
          {
            "id": 66888,
            "nodeType": "VariableDeclaration",
            "src": "5440:43:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ZERO_DIVISION",
            "nameLocation": "5466:13:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66886,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5440:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "34",
              "id": 66887,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5482:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4_by_1",
                "typeString": "int_const 4"
              },
              "value": "4"
            },
            "visibility": "internal"
          },
          {
            "id": 66891,
            "nodeType": "VariableDeclaration",
            "src": "5489:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "DIV_INTERNAL",
            "nameLocation": "5515:12:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66889,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5489:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "35",
              "id": 66890,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5530:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5_by_1",
                "typeString": "int_const 5"
              },
              "value": "5"
            },
            "visibility": "internal"
          },
          {
            "id": 66894,
            "nodeType": "VariableDeclaration",
            "src": "5537:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "X_OUT_OF_BOUNDS",
            "nameLocation": "5563:15:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66892,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5537:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "36",
              "id": 66893,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5581:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6_by_1",
                "typeString": "int_const 6"
              },
              "value": "6"
            },
            "visibility": "internal"
          },
          {
            "id": 66897,
            "nodeType": "VariableDeclaration",
            "src": "5588:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "Y_OUT_OF_BOUNDS",
            "nameLocation": "5614:15:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66895,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5588:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "37",
              "id": 66896,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5632:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7_by_1",
                "typeString": "int_const 7"
              },
              "value": "7"
            },
            "visibility": "internal"
          },
          {
            "id": 66900,
            "nodeType": "VariableDeclaration",
            "src": "5639:51:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PRODUCT_OUT_OF_BOUNDS",
            "nameLocation": "5665:21:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66898,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5639:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "38",
              "id": 66899,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5689:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8_by_1",
                "typeString": "int_const 8"
              },
              "value": "8"
            },
            "visibility": "internal"
          },
          {
            "id": 66903,
            "nodeType": "VariableDeclaration",
            "src": "5696:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_EXPONENT",
            "nameLocation": "5722:16:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66901,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5696:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "39",
              "id": 66902,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5741:1:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_9_by_1",
                "typeString": "int_const 9"
              },
              "value": "9"
            },
            "visibility": "internal"
          },
          {
            "id": 66906,
            "nodeType": "VariableDeclaration",
            "src": "5762:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OUT_OF_BOUNDS",
            "nameLocation": "5788:13:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66904,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5762:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313030",
              "id": 66905,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5804:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100_by_1",
                "typeString": "int_const 100"
              },
              "value": "100"
            },
            "visibility": "internal"
          },
          {
            "id": 66909,
            "nodeType": "VariableDeclaration",
            "src": "5813:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNSORTED_ARRAY",
            "nameLocation": "5839:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66907,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5813:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313031",
              "id": 66908,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5856:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_101_by_1",
                "typeString": "int_const 101"
              },
              "value": "101"
            },
            "visibility": "internal"
          },
          {
            "id": 66912,
            "nodeType": "VariableDeclaration",
            "src": "5865:47:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNSORTED_TOKENS",
            "nameLocation": "5891:15:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66910,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5865:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313032",
              "id": 66911,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5909:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_102_by_1",
                "typeString": "int_const 102"
              },
              "value": "102"
            },
            "visibility": "internal"
          },
          {
            "id": 66915,
            "nodeType": "VariableDeclaration",
            "src": "5918:53:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INPUT_LENGTH_MISMATCH",
            "nameLocation": "5944:21:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66913,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5918:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313033",
              "id": 66914,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5968:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_103_by_1",
                "typeString": "int_const 103"
              },
              "value": "103"
            },
            "visibility": "internal"
          },
          {
            "id": 66918,
            "nodeType": "VariableDeclaration",
            "src": "5977:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ZERO_TOKEN",
            "nameLocation": "6003:10:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66916,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5977:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313034",
              "id": 66917,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6016:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_104_by_1",
                "typeString": "int_const 104"
              },
              "value": "104"
            },
            "visibility": "internal"
          },
          {
            "id": 66921,
            "nodeType": "VariableDeclaration",
            "src": "6025:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_DATA",
            "nameLocation": "6051:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66919,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6025:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313035",
              "id": 66920,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6071:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_105_by_1",
                "typeString": "int_const 105"
              },
              "value": "105"
            },
            "visibility": "internal"
          },
          {
            "id": 66924,
            "nodeType": "VariableDeclaration",
            "src": "6101:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_TOKENS",
            "nameLocation": "6127:10:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66922,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6101:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323030",
              "id": 66923,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6140:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_200_by_1",
                "typeString": "int_const 200"
              },
              "value": "200"
            },
            "visibility": "internal"
          },
          {
            "id": 66927,
            "nodeType": "VariableDeclaration",
            "src": "6149:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_TOKENS",
            "nameLocation": "6175:10:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66925,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6149:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323031",
              "id": 66926,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6188:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_201_by_1",
                "typeString": "int_const 201"
              },
              "value": "201"
            },
            "visibility": "internal"
          },
          {
            "id": 66930,
            "nodeType": "VariableDeclaration",
            "src": "6197:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_SWAP_FEE_PERCENTAGE",
            "nameLocation": "6223:23:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66928,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6197:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323032",
              "id": 66929,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6249:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_202_by_1",
                "typeString": "int_const 202"
              },
              "value": "202"
            },
            "visibility": "internal"
          },
          {
            "id": 66933,
            "nodeType": "VariableDeclaration",
            "src": "6258:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_SWAP_FEE_PERCENTAGE",
            "nameLocation": "6284:23:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66931,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6258:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323033",
              "id": 66932,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6310:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_203_by_1",
                "typeString": "int_const 203"
              },
              "value": "203"
            },
            "visibility": "internal"
          },
          {
            "id": 66936,
            "nodeType": "VariableDeclaration",
            "src": "6319:43:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MINIMUM_BPT",
            "nameLocation": "6345:11:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66934,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6319:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323034",
              "id": 66935,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6359:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_204_by_1",
                "typeString": "int_const 204"
              },
              "value": "204"
            },
            "visibility": "internal"
          },
          {
            "id": 66939,
            "nodeType": "VariableDeclaration",
            "src": "6368:48:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_NOT_VAULT",
            "nameLocation": "6394:16:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66937,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6368:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323035",
              "id": 66938,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6413:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_205_by_1",
                "typeString": "int_const 205"
              },
              "value": "205"
            },
            "visibility": "internal"
          },
          {
            "id": 66942,
            "nodeType": "VariableDeclaration",
            "src": "6422:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNINITIALIZED",
            "nameLocation": "6448:13:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66940,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6422:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323036",
              "id": 66941,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6464:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_206_by_1",
                "typeString": "int_const 206"
              },
              "value": "206"
            },
            "visibility": "internal"
          },
          {
            "id": 66945,
            "nodeType": "VariableDeclaration",
            "src": "6473:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BPT_IN_MAX_AMOUNT",
            "nameLocation": "6499:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66943,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6473:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323037",
              "id": 66944,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6519:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_207_by_1",
                "typeString": "int_const 207"
              },
              "value": "207"
            },
            "visibility": "internal"
          },
          {
            "id": 66948,
            "nodeType": "VariableDeclaration",
            "src": "6528:50:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BPT_OUT_MIN_AMOUNT",
            "nameLocation": "6554:18:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66946,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6528:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323038",
              "id": 66947,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6575:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_208_by_1",
                "typeString": "int_const 208"
              },
              "value": "208"
            },
            "visibility": "internal"
          },
          {
            "id": 66951,
            "nodeType": "VariableDeclaration",
            "src": "6584:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EXPIRED_PERMIT",
            "nameLocation": "6610:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66949,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6584:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323039",
              "id": 66950,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6627:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_209_by_1",
                "typeString": "int_const 209"
              },
              "value": "209"
            },
            "visibility": "internal"
          },
          {
            "id": 66954,
            "nodeType": "VariableDeclaration",
            "src": "6636:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_TWO_TOKENS",
            "nameLocation": "6662:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66952,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6636:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323130",
              "id": 66953,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6679:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_210_by_1",
                "typeString": "int_const 210"
              },
              "value": "210"
            },
            "visibility": "internal"
          },
          {
            "id": 66957,
            "nodeType": "VariableDeclaration",
            "src": "6688:40:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "DISABLED",
            "nameLocation": "6714:8:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66955,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6688:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323131",
              "id": 66956,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6725:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_211_by_1",
                "typeString": "int_const 211"
              },
              "value": "211"
            },
            "visibility": "internal"
          },
          {
            "id": 66960,
            "nodeType": "VariableDeclaration",
            "src": "6748:39:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_AMP",
            "nameLocation": "6774:7:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66958,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6748:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333030",
              "id": 66959,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6784:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_300_by_1",
                "typeString": "int_const 300"
              },
              "value": "300"
            },
            "visibility": "internal"
          },
          {
            "id": 66963,
            "nodeType": "VariableDeclaration",
            "src": "6793:39:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_AMP",
            "nameLocation": "6819:7:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66961,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6793:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333031",
              "id": 66962,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6829:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_301_by_1",
                "typeString": "int_const 301"
              },
              "value": "301"
            },
            "visibility": "internal"
          },
          {
            "id": 66966,
            "nodeType": "VariableDeclaration",
            "src": "6838:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_WEIGHT",
            "nameLocation": "6864:10:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66964,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6838:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333032",
              "id": 66965,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6877:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_302_by_1",
                "typeString": "int_const 302"
              },
              "value": "302"
            },
            "visibility": "internal"
          },
          {
            "id": 66969,
            "nodeType": "VariableDeclaration",
            "src": "6886:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_STABLE_TOKENS",
            "nameLocation": "6912:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66967,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6886:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333033",
              "id": 66968,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6932:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_303_by_1",
                "typeString": "int_const 303"
              },
              "value": "303"
            },
            "visibility": "internal"
          },
          {
            "id": 66972,
            "nodeType": "VariableDeclaration",
            "src": "6941:44:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_IN_RATIO",
            "nameLocation": "6967:12:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66970,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6941:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333034",
              "id": 66971,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6982:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_304_by_1",
                "typeString": "int_const 304"
              },
              "value": "304"
            },
            "visibility": "internal"
          },
          {
            "id": 66975,
            "nodeType": "VariableDeclaration",
            "src": "6991:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_OUT_RATIO",
            "nameLocation": "7017:13:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66973,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6991:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333035",
              "id": 66974,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7033:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_305_by_1",
                "typeString": "int_const 305"
              },
              "value": "305"
            },
            "visibility": "internal"
          },
          {
            "id": 66978,
            "nodeType": "VariableDeclaration",
            "src": "7042:56:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_BPT_IN_FOR_TOKEN_OUT",
            "nameLocation": "7068:24:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66976,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7042:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333036",
              "id": 66977,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7095:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_306_by_1",
                "typeString": "int_const 306"
              },
              "value": "306"
            },
            "visibility": "internal"
          },
          {
            "id": 66981,
            "nodeType": "VariableDeclaration",
            "src": "7104:56:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_OUT_BPT_FOR_TOKEN_IN",
            "nameLocation": "7130:24:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66979,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7104:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333037",
              "id": 66980,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7157:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_307_by_1",
                "typeString": "int_const 307"
              },
              "value": "307"
            },
            "visibility": "internal"
          },
          {
            "id": 66984,
            "nodeType": "VariableDeclaration",
            "src": "7166:59:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NORMALIZED_WEIGHT_INVARIANT",
            "nameLocation": "7192:27:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66982,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7166:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333038",
              "id": 66983,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7222:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_308_by_1",
                "typeString": "int_const 308"
              },
              "value": "308"
            },
            "visibility": "internal"
          },
          {
            "id": 66987,
            "nodeType": "VariableDeclaration",
            "src": "7231:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_TOKEN",
            "nameLocation": "7257:13:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66985,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7231:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333039",
              "id": 66986,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7273:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_309_by_1",
                "typeString": "int_const 309"
              },
              "value": "309"
            },
            "visibility": "internal"
          },
          {
            "id": 66990,
            "nodeType": "VariableDeclaration",
            "src": "7282:51:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_JOIN_KIND",
            "nameLocation": "7308:19:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66988,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7282:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333130",
              "id": 66989,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7330:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_310_by_1",
                "typeString": "int_const 310"
              },
              "value": "310"
            },
            "visibility": "internal"
          },
          {
            "id": 66993,
            "nodeType": "VariableDeclaration",
            "src": "7339:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ZERO_INVARIANT",
            "nameLocation": "7365:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66991,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7339:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333131",
              "id": 66992,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7382:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_311_by_1",
                "typeString": "int_const 311"
              },
              "value": "311"
            },
            "visibility": "internal"
          },
          {
            "id": 66996,
            "nodeType": "VariableDeclaration",
            "src": "7391:60:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_INVALID_SECONDS_QUERY",
            "nameLocation": "7417:28:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66994,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7391:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333132",
              "id": 66995,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7448:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_312_by_1",
                "typeString": "int_const 312"
              },
              "value": "312"
            },
            "visibility": "internal"
          },
          {
            "id": 66999,
            "nodeType": "VariableDeclaration",
            "src": "7457:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_NOT_INITIALIZED",
            "nameLocation": "7483:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 66997,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7457:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333133",
              "id": 66998,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7508:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_313_by_1",
                "typeString": "int_const 313"
              },
              "value": "313"
            },
            "visibility": "internal"
          },
          {
            "id": 67002,
            "nodeType": "VariableDeclaration",
            "src": "7517:52:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_QUERY_TOO_OLD",
            "nameLocation": "7543:20:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67000,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7517:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333134",
              "id": 67001,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7566:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_314_by_1",
                "typeString": "int_const 314"
              },
              "value": "314"
            },
            "visibility": "internal"
          },
          {
            "id": 67005,
            "nodeType": "VariableDeclaration",
            "src": "7575:52:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_INVALID_INDEX",
            "nameLocation": "7601:20:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67003,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7575:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333135",
              "id": 67004,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7624:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_315_by_1",
                "typeString": "int_const 315"
              },
              "value": "315"
            },
            "visibility": "internal"
          },
          {
            "id": 67008,
            "nodeType": "VariableDeclaration",
            "src": "7633:47:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_BAD_SECS",
            "nameLocation": "7659:15:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67006,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7633:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333136",
              "id": 67007,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7677:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_316_by_1",
                "typeString": "int_const 316"
              },
              "value": "316"
            },
            "visibility": "internal"
          },
          {
            "id": 67011,
            "nodeType": "VariableDeclaration",
            "src": "7686:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_END_TIME_TOO_CLOSE",
            "nameLocation": "7712:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67009,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7686:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333137",
              "id": 67010,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7737:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_317_by_1",
                "typeString": "int_const 317"
              },
              "value": "317"
            },
            "visibility": "internal"
          },
          {
            "id": 67014,
            "nodeType": "VariableDeclaration",
            "src": "7746:50:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_ONGOING_UPDATE",
            "nameLocation": "7772:18:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67012,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7746:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333138",
              "id": 67013,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7793:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_318_by_1",
                "typeString": "int_const 318"
              },
              "value": "318"
            },
            "visibility": "internal"
          },
          {
            "id": 67017,
            "nodeType": "VariableDeclaration",
            "src": "7802:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_RATE_TOO_HIGH",
            "nameLocation": "7828:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67015,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7802:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333139",
              "id": 67016,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7848:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_319_by_1",
                "typeString": "int_const 319"
              },
              "value": "319"
            },
            "visibility": "internal"
          },
          {
            "id": 67020,
            "nodeType": "VariableDeclaration",
            "src": "7857:53:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_NO_ONGOING_UPDATE",
            "nameLocation": "7883:21:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67018,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7857:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333230",
              "id": 67019,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7907:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_320_by_1",
                "typeString": "int_const 320"
              },
              "value": "320"
            },
            "visibility": "internal"
          },
          {
            "id": 67023,
            "nodeType": "VariableDeclaration",
            "src": "7916:63:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "STABLE_INVARIANT_DIDNT_CONVERGE",
            "nameLocation": "7942:31:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67021,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7916:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333231",
              "id": 67022,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7976:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_321_by_1",
                "typeString": "int_const 321"
              },
              "value": "321"
            },
            "visibility": "internal"
          },
          {
            "id": 67026,
            "nodeType": "VariableDeclaration",
            "src": "7985:65:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "STABLE_GET_BALANCE_DIDNT_CONVERGE",
            "nameLocation": "8011:33:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67024,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7985:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333232",
              "id": 67025,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8047:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_322_by_1",
                "typeString": "int_const 322"
              },
              "value": "322"
            },
            "visibility": "internal"
          },
          {
            "id": 67029,
            "nodeType": "VariableDeclaration",
            "src": "8056:52:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RELAYER_NOT_CONTRACT",
            "nameLocation": "8082:20:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67027,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8056:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333233",
              "id": 67028,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8105:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_323_by_1",
                "typeString": "int_const 323"
              },
              "value": "323"
            },
            "visibility": "internal"
          },
          {
            "id": 67032,
            "nodeType": "VariableDeclaration",
            "src": "8114:60:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BASE_POOL_RELAYER_NOT_CALLED",
            "nameLocation": "8140:28:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67030,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8114:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333234",
              "id": 67031,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8171:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_324_by_1",
                "typeString": "int_const 324"
              },
              "value": "324"
            },
            "visibility": "internal"
          },
          {
            "id": 67035,
            "nodeType": "VariableDeclaration",
            "src": "8180:61:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "REBALANCING_RELAYER_REENTERED",
            "nameLocation": "8206:29:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67033,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8180:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333235",
              "id": 67034,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8238:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_325_by_1",
                "typeString": "int_const 325"
              },
              "value": "325"
            },
            "visibility": "internal"
          },
          {
            "id": 67038,
            "nodeType": "VariableDeclaration",
            "src": "8247:58:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "GRADUAL_UPDATE_TIME_TRAVEL",
            "nameLocation": "8273:26:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67036,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8247:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333236",
              "id": 67037,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8302:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_326_by_1",
                "typeString": "int_const 326"
              },
              "value": "326"
            },
            "visibility": "internal"
          },
          {
            "id": 67041,
            "nodeType": "VariableDeclaration",
            "src": "8311:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAPS_DISABLED",
            "nameLocation": "8337:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67039,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8311:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333237",
              "id": 67040,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8354:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_327_by_1",
                "typeString": "int_const 327"
              },
              "value": "327"
            },
            "visibility": "internal"
          },
          {
            "id": 67044,
            "nodeType": "VariableDeclaration",
            "src": "8363:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_IS_NOT_LBP_OWNER",
            "nameLocation": "8389:23:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67042,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8363:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333238",
              "id": 67043,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8415:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_328_by_1",
                "typeString": "int_const 328"
              },
              "value": "328"
            },
            "visibility": "internal"
          },
          {
            "id": 67047,
            "nodeType": "VariableDeclaration",
            "src": "8424:51:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PRICE_RATE_OVERFLOW",
            "nameLocation": "8450:19:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67045,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8424:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333239",
              "id": 67046,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8472:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_329_by_1",
                "typeString": "int_const 329"
              },
              "value": "329"
            },
            "visibility": "internal"
          },
          {
            "id": 67050,
            "nodeType": "VariableDeclaration",
            "src": "8481:75:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_JOIN_EXIT_KIND_WHILE_SWAPS_DISABLED",
            "nameLocation": "8507:43:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67048,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8481:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333330",
              "id": 67049,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8553:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_330_by_1",
                "typeString": "int_const 330"
              },
              "value": "330"
            },
            "visibility": "internal"
          },
          {
            "id": 67053,
            "nodeType": "VariableDeclaration",
            "src": "8562:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "WEIGHT_CHANGE_TOO_FAST",
            "nameLocation": "8588:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67051,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8562:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333331",
              "id": 67052,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8613:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_331_by_1",
                "typeString": "int_const 331"
              },
              "value": "331"
            },
            "visibility": "internal"
          },
          {
            "id": 67056,
            "nodeType": "VariableDeclaration",
            "src": "8622:63:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LOWER_GREATER_THAN_UPPER_TARGET",
            "nameLocation": "8648:31:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67054,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8622:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333332",
              "id": 67055,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8682:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_332_by_1",
                "typeString": "int_const 332"
              },
              "value": "332"
            },
            "visibility": "internal"
          },
          {
            "id": 67059,
            "nodeType": "VariableDeclaration",
            "src": "8691:53:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UPPER_TARGET_TOO_HIGH",
            "nameLocation": "8717:21:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67057,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8691:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333333",
              "id": 67058,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8741:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_333_by_1",
                "typeString": "int_const 333"
              },
              "value": "333"
            },
            "visibility": "internal"
          },
          {
            "id": 67062,
            "nodeType": "VariableDeclaration",
            "src": "8750:56:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_BY_LINEAR_POOL",
            "nameLocation": "8776:24:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67060,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8750:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333334",
              "id": 67061,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8803:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_334_by_1",
                "typeString": "int_const 334"
              },
              "value": "334"
            },
            "visibility": "internal"
          },
          {
            "id": 67065,
            "nodeType": "VariableDeclaration",
            "src": "8812:51:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OUT_OF_TARGET_RANGE",
            "nameLocation": "8838:19:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67063,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8812:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333335",
              "id": 67064,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8860:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_335_by_1",
                "typeString": "int_const 335"
              },
              "value": "335"
            },
            "visibility": "internal"
          },
          {
            "id": 67068,
            "nodeType": "VariableDeclaration",
            "src": "8869:51:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_EXIT_KIND",
            "nameLocation": "8895:19:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67066,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8869:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333336",
              "id": 67067,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8917:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_336_by_1",
                "typeString": "int_const 336"
              },
              "value": "336"
            },
            "visibility": "internal"
          },
          {
            "id": 67071,
            "nodeType": "VariableDeclaration",
            "src": "8926:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNAUTHORIZED_EXIT",
            "nameLocation": "8952:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67069,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8926:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333337",
              "id": 67070,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8972:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_337_by_1",
                "typeString": "int_const 337"
              },
              "value": "337"
            },
            "visibility": "internal"
          },
          {
            "id": 67074,
            "nodeType": "VariableDeclaration",
            "src": "8981:66:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_MANAGEMENT_SWAP_FEE_PERCENTAGE",
            "nameLocation": "9007:34:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67072,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8981:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333338",
              "id": 67073,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9044:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_338_by_1",
                "typeString": "int_const 338"
              },
              "value": "338"
            },
            "visibility": "internal"
          },
          {
            "id": 67077,
            "nodeType": "VariableDeclaration",
            "src": "9053:57:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_BY_MANAGED_POOL",
            "nameLocation": "9079:25:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67075,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9053:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333339",
              "id": 67076,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9107:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_339_by_1",
                "typeString": "int_const 339"
              },
              "value": "339"
            },
            "visibility": "internal"
          },
          {
            "id": 67080,
            "nodeType": "VariableDeclaration",
            "src": "9116:57:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_BY_PHANTOM_POOL",
            "nameLocation": "9142:25:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67078,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9116:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333430",
              "id": 67079,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9170:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_340_by_1",
                "typeString": "int_const 340"
              },
              "value": "340"
            },
            "visibility": "internal"
          },
          {
            "id": 67083,
            "nodeType": "VariableDeclaration",
            "src": "9179:65:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKEN_DOES_NOT_HAVE_RATE_PROVIDER",
            "nameLocation": "9205:33:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67081,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9179:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333431",
              "id": 67082,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9241:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_341_by_1",
                "typeString": "int_const 341"
              },
              "value": "341"
            },
            "visibility": "internal"
          },
          {
            "id": 67086,
            "nodeType": "VariableDeclaration",
            "src": "9250:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_INITIALIZATION",
            "nameLocation": "9276:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67084,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9250:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333432",
              "id": 67085,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9301:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_342_by_1",
                "typeString": "int_const 342"
              },
              "value": "342"
            },
            "visibility": "internal"
          },
          {
            "id": 67089,
            "nodeType": "VariableDeclaration",
            "src": "9310:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OUT_OF_NEW_TARGET_RANGE",
            "nameLocation": "9336:23:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67087,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9310:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333433",
              "id": 67088,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9362:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_343_by_1",
                "typeString": "int_const 343"
              },
              "value": "343"
            },
            "visibility": "internal"
          },
          {
            "id": 67092,
            "nodeType": "VariableDeclaration",
            "src": "9371:48:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FEATURE_DISABLED",
            "nameLocation": "9397:16:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67090,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9371:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333434",
              "id": 67091,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9416:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_344_by_1",
                "typeString": "int_const 344"
              },
              "value": "344"
            },
            "visibility": "internal"
          },
          {
            "id": 67095,
            "nodeType": "VariableDeclaration",
            "src": "9425:61:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNINITIALIZED_POOL_CONTROLLER",
            "nameLocation": "9451:29:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67093,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9425:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333435",
              "id": 67094,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9483:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_345_by_1",
                "typeString": "int_const 345"
              },
              "value": "345"
            },
            "visibility": "internal"
          },
          {
            "id": 67098,
            "nodeType": "VariableDeclaration",
            "src": "9492:62:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SET_SWAP_FEE_DURING_FEE_CHANGE",
            "nameLocation": "9518:30:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67096,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9492:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333436",
              "id": 67097,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9551:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_346_by_1",
                "typeString": "int_const 346"
              },
              "value": "346"
            },
            "visibility": "internal"
          },
          {
            "id": 67101,
            "nodeType": "VariableDeclaration",
            "src": "9560:63:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SET_SWAP_FEE_PENDING_FEE_CHANGE",
            "nameLocation": "9586:31:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67099,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9560:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333437",
              "id": 67100,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9620:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_347_by_1",
                "typeString": "int_const 347"
              },
              "value": "347"
            },
            "visibility": "internal"
          },
          {
            "id": 67104,
            "nodeType": "VariableDeclaration",
            "src": "9629:66:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CHANGE_TOKENS_DURING_WEIGHT_CHANGE",
            "nameLocation": "9655:34:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67102,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9629:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333438",
              "id": 67103,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9692:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_348_by_1",
                "typeString": "int_const 348"
              },
              "value": "348"
            },
            "visibility": "internal"
          },
          {
            "id": 67107,
            "nodeType": "VariableDeclaration",
            "src": "9701:67:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CHANGE_TOKENS_PENDING_WEIGHT_CHANGE",
            "nameLocation": "9727:35:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67105,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9701:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333439",
              "id": 67106,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9765:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_349_by_1",
                "typeString": "int_const 349"
              },
              "value": "349"
            },
            "visibility": "internal"
          },
          {
            "id": 67110,
            "nodeType": "VariableDeclaration",
            "src": "9774:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_WEIGHT",
            "nameLocation": "9800:10:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67108,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9774:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333530",
              "id": 67109,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9813:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_350_by_1",
                "typeString": "int_const 350"
              },
              "value": "350"
            },
            "visibility": "internal"
          },
          {
            "id": 67113,
            "nodeType": "VariableDeclaration",
            "src": "9822:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNAUTHORIZED_JOIN",
            "nameLocation": "9848:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67111,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9822:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333531",
              "id": 67112,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9868:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_351_by_1",
                "typeString": "int_const 351"
              },
              "value": "351"
            },
            "visibility": "internal"
          },
          {
            "id": 67116,
            "nodeType": "VariableDeclaration",
            "src": "9877:65:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_MANAGEMENT_AUM_FEE_PERCENTAGE",
            "nameLocation": "9903:33:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67114,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9877:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333532",
              "id": 67115,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9939:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_352_by_1",
                "typeString": "int_const 352"
              },
              "value": "352"
            },
            "visibility": "internal"
          },
          {
            "id": 67119,
            "nodeType": "VariableDeclaration",
            "src": "9948:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FRACTIONAL_TARGET",
            "nameLocation": "9974:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67117,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9948:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333533",
              "id": 67118,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9994:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_353_by_1",
                "typeString": "int_const 353"
              },
              "value": "353"
            },
            "visibility": "internal"
          },
          {
            "id": 67122,
            "nodeType": "VariableDeclaration",
            "src": "10003:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADD_OR_REMOVE_BPT",
            "nameLocation": "10029:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67120,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10003:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333534",
              "id": 67121,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10049:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_354_by_1",
                "typeString": "int_const 354"
              },
              "value": "354"
            },
            "visibility": "internal"
          },
          {
            "id": 67125,
            "nodeType": "VariableDeclaration",
            "src": "10058:62:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_CIRCUIT_BREAKER_BOUNDS",
            "nameLocation": "10084:30:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67123,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10058:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333535",
              "id": 67124,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10117:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_355_by_1",
                "typeString": "int_const 355"
              },
              "value": "355"
            },
            "visibility": "internal"
          },
          {
            "id": 67128,
            "nodeType": "VariableDeclaration",
            "src": "10126:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CIRCUIT_BREAKER_TRIPPED",
            "nameLocation": "10152:23:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67126,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10126:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333536",
              "id": 67127,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10178:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_356_by_1",
                "typeString": "int_const 356"
              },
              "value": "356"
            },
            "visibility": "internal"
          },
          {
            "id": 67131,
            "nodeType": "VariableDeclaration",
            "src": "10187:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MALICIOUS_QUERY_REVERT",
            "nameLocation": "10213:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67129,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10187:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333537",
              "id": 67130,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10238:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_357_by_1",
                "typeString": "int_const 357"
              },
              "value": "357"
            },
            "visibility": "internal"
          },
          {
            "id": 67134,
            "nodeType": "VariableDeclaration",
            "src": "10247:52:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "JOINS_EXITS_DISABLED",
            "nameLocation": "10273:20:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67132,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10247:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333538",
              "id": 67133,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10296:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_358_by_1",
                "typeString": "int_const 358"
              },
              "value": "358"
            },
            "visibility": "internal"
          },
          {
            "id": 67137,
            "nodeType": "VariableDeclaration",
            "src": "10317:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "REENTRANCY",
            "nameLocation": "10343:10:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67135,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10317:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343030",
              "id": 67136,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10356:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_400_by_1",
                "typeString": "int_const 400"
              },
              "value": "400"
            },
            "visibility": "internal"
          },
          {
            "id": 67140,
            "nodeType": "VariableDeclaration",
            "src": "10365:50:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SENDER_NOT_ALLOWED",
            "nameLocation": "10391:18:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67138,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10365:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343031",
              "id": 67139,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10412:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_401_by_1",
                "typeString": "int_const 401"
              },
              "value": "401"
            },
            "visibility": "internal"
          },
          {
            "id": 67143,
            "nodeType": "VariableDeclaration",
            "src": "10421:38:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PAUSED",
            "nameLocation": "10447:6:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67141,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10421:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343032",
              "id": 67142,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10456:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_402_by_1",
                "typeString": "int_const 402"
              },
              "value": "402"
            },
            "visibility": "internal"
          },
          {
            "id": 67146,
            "nodeType": "VariableDeclaration",
            "src": "10465:52:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PAUSE_WINDOW_EXPIRED",
            "nameLocation": "10491:20:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67144,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10465:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343033",
              "id": 67145,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10514:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_403_by_1",
                "typeString": "int_const 403"
              },
              "value": "403"
            },
            "visibility": "internal"
          },
          {
            "id": 67149,
            "nodeType": "VariableDeclaration",
            "src": "10523:57:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_PAUSE_WINDOW_DURATION",
            "nameLocation": "10549:25:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67147,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10523:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343034",
              "id": 67148,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10577:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_404_by_1",
                "typeString": "int_const 404"
              },
              "value": "404"
            },
            "visibility": "internal"
          },
          {
            "id": 67152,
            "nodeType": "VariableDeclaration",
            "src": "10586:58:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_BUFFER_PERIOD_DURATION",
            "nameLocation": "10612:26:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67150,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10586:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343035",
              "id": 67151,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10641:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_405_by_1",
                "typeString": "int_const 405"
              },
              "value": "405"
            },
            "visibility": "internal"
          },
          {
            "id": 67155,
            "nodeType": "VariableDeclaration",
            "src": "10650:52:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_BALANCE",
            "nameLocation": "10676:20:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67153,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10650:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343036",
              "id": 67154,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10699:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_406_by_1",
                "typeString": "int_const 406"
              },
              "value": "406"
            },
            "visibility": "internal"
          },
          {
            "id": 67158,
            "nodeType": "VariableDeclaration",
            "src": "10708:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_ALLOWANCE",
            "nameLocation": "10734:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67156,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10708:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343037",
              "id": 67157,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10759:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_407_by_1",
                "typeString": "int_const 407"
              },
              "value": "407"
            },
            "visibility": "internal"
          },
          {
            "id": 67161,
            "nodeType": "VariableDeclaration",
            "src": "10768:64:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_FROM_ZERO_ADDRESS",
            "nameLocation": "10794:32:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67159,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10768:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343038",
              "id": 67160,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10829:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_408_by_1",
                "typeString": "int_const 408"
              },
              "value": "408"
            },
            "visibility": "internal"
          },
          {
            "id": 67164,
            "nodeType": "VariableDeclaration",
            "src": "10838:62:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_TO_ZERO_ADDRESS",
            "nameLocation": "10864:30:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67162,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10838:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343039",
              "id": 67163,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10897:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_409_by_1",
                "typeString": "int_const 409"
              },
              "value": "409"
            },
            "visibility": "internal"
          },
          {
            "id": 67167,
            "nodeType": "VariableDeclaration",
            "src": "10906:58:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_MINT_TO_ZERO_ADDRESS",
            "nameLocation": "10932:26:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67165,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10906:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343130",
              "id": 67166,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10961:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_410_by_1",
                "typeString": "int_const 410"
              },
              "value": "410"
            },
            "visibility": "internal"
          },
          {
            "id": 67170,
            "nodeType": "VariableDeclaration",
            "src": "10970:60:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_BURN_FROM_ZERO_ADDRESS",
            "nameLocation": "10996:28:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67168,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10970:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343131",
              "id": 67169,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11027:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_411_by_1",
                "typeString": "int_const 411"
              },
              "value": "411"
            },
            "visibility": "internal"
          },
          {
            "id": 67173,
            "nodeType": "VariableDeclaration",
            "src": "11036:63:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_APPROVE_FROM_ZERO_ADDRESS",
            "nameLocation": "11062:31:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67171,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11036:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343132",
              "id": 67172,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11096:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_412_by_1",
                "typeString": "int_const 412"
              },
              "value": "412"
            },
            "visibility": "internal"
          },
          {
            "id": 67176,
            "nodeType": "VariableDeclaration",
            "src": "11105:61:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_APPROVE_TO_ZERO_ADDRESS",
            "nameLocation": "11131:29:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67174,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11105:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343133",
              "id": 67175,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11163:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_413_by_1",
                "typeString": "int_const 413"
              },
              "value": "413"
            },
            "visibility": "internal"
          },
          {
            "id": 67179,
            "nodeType": "VariableDeclaration",
            "src": "11172:64:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_EXCEEDS_ALLOWANCE",
            "nameLocation": "11198:32:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67177,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11172:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343134",
              "id": 67178,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11233:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_414_by_1",
                "typeString": "int_const 414"
              },
              "value": "414"
            },
            "visibility": "internal"
          },
          {
            "id": 67182,
            "nodeType": "VariableDeclaration",
            "src": "11242:68:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_DECREASED_ALLOWANCE_BELOW_ZERO",
            "nameLocation": "11268:36:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67180,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11242:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343135",
              "id": 67181,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11307:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_415_by_1",
                "typeString": "int_const 415"
              },
              "value": "415"
            },
            "visibility": "internal"
          },
          {
            "id": 67185,
            "nodeType": "VariableDeclaration",
            "src": "11316:62:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_EXCEEDS_BALANCE",
            "nameLocation": "11342:30:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67183,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11316:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343136",
              "id": 67184,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11375:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_416_by_1",
                "typeString": "int_const 416"
              },
              "value": "416"
            },
            "visibility": "internal"
          },
          {
            "id": 67188,
            "nodeType": "VariableDeclaration",
            "src": "11384:60:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_BURN_EXCEEDS_ALLOWANCE",
            "nameLocation": "11410:28:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67186,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11384:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343137",
              "id": 67187,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11441:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_417_by_1",
                "typeString": "int_const 417"
              },
              "value": "417"
            },
            "visibility": "internal"
          },
          {
            "id": 67191,
            "nodeType": "VariableDeclaration",
            "src": "11450:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SAFE_ERC20_CALL_FAILED",
            "nameLocation": "11476:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67189,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11450:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343138",
              "id": 67190,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11501:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_418_by_1",
                "typeString": "int_const 418"
              },
              "value": "418"
            },
            "visibility": "internal"
          },
          {
            "id": 67194,
            "nodeType": "VariableDeclaration",
            "src": "11510:60:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_INSUFFICIENT_BALANCE",
            "nameLocation": "11536:28:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67192,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11510:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343139",
              "id": 67193,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11567:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_419_by_1",
                "typeString": "int_const 419"
              },
              "value": "419"
            },
            "visibility": "internal"
          },
          {
            "id": 67197,
            "nodeType": "VariableDeclaration",
            "src": "11576:57:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_CANNOT_SEND_VALUE",
            "nameLocation": "11602:25:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67195,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11576:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343230",
              "id": 67196,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11630:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_420_by_1",
                "typeString": "int_const 420"
              },
              "value": "420"
            },
            "visibility": "internal"
          },
          {
            "id": 67200,
            "nodeType": "VariableDeclaration",
            "src": "11639:63:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SAFE_CAST_VALUE_CANT_FIT_INT256",
            "nameLocation": "11665:31:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67198,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11639:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343231",
              "id": 67199,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11699:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_421_by_1",
                "typeString": "int_const 421"
              },
              "value": "421"
            },
            "visibility": "internal"
          },
          {
            "id": 67203,
            "nodeType": "VariableDeclaration",
            "src": "11708:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "GRANT_SENDER_NOT_ADMIN",
            "nameLocation": "11734:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67201,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11708:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343232",
              "id": 67202,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11759:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_422_by_1",
                "typeString": "int_const 422"
              },
              "value": "422"
            },
            "visibility": "internal"
          },
          {
            "id": 67206,
            "nodeType": "VariableDeclaration",
            "src": "11768:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "REVOKE_SENDER_NOT_ADMIN",
            "nameLocation": "11794:23:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67204,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11768:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343233",
              "id": 67205,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11820:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_423_by_1",
                "typeString": "int_const 423"
              },
              "value": "423"
            },
            "visibility": "internal"
          },
          {
            "id": 67209,
            "nodeType": "VariableDeclaration",
            "src": "11829:59:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RENOUNCE_SENDER_NOT_ALLOWED",
            "nameLocation": "11855:27:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67207,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11829:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343234",
              "id": 67208,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11885:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_424_by_1",
                "typeString": "int_const 424"
              },
              "value": "424"
            },
            "visibility": "internal"
          },
          {
            "id": 67212,
            "nodeType": "VariableDeclaration",
            "src": "11894:53:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BUFFER_PERIOD_EXPIRED",
            "nameLocation": "11920:21:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67210,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11894:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343235",
              "id": 67211,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11944:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_425_by_1",
                "typeString": "int_const 425"
              },
              "value": "425"
            },
            "visibility": "internal"
          },
          {
            "id": 67215,
            "nodeType": "VariableDeclaration",
            "src": "11953:51:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_IS_NOT_OWNER",
            "nameLocation": "11979:19:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67213,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11953:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343236",
              "id": 67214,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12001:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_426_by_1",
                "typeString": "int_const 426"
              },
              "value": "426"
            },
            "visibility": "internal"
          },
          {
            "id": 67218,
            "nodeType": "VariableDeclaration",
            "src": "12010:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NEW_OWNER_IS_ZERO",
            "nameLocation": "12036:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67216,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12010:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343237",
              "id": 67217,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12056:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_427_by_1",
                "typeString": "int_const 427"
              },
              "value": "427"
            },
            "visibility": "internal"
          },
          {
            "id": 67221,
            "nodeType": "VariableDeclaration",
            "src": "12065:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CODE_DEPLOYMENT_FAILED",
            "nameLocation": "12091:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67219,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12065:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343238",
              "id": 67220,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12116:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_428_by_1",
                "typeString": "int_const 428"
              },
              "value": "428"
            },
            "visibility": "internal"
          },
          {
            "id": 67224,
            "nodeType": "VariableDeclaration",
            "src": "12125:52:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALL_TO_NON_CONTRACT",
            "nameLocation": "12151:20:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67222,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12125:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343239",
              "id": 67223,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12174:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_429_by_1",
                "typeString": "int_const 429"
              },
              "value": "429"
            },
            "visibility": "internal"
          },
          {
            "id": 67227,
            "nodeType": "VariableDeclaration",
            "src": "12183:53:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LOW_LEVEL_CALL_FAILED",
            "nameLocation": "12209:21:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67225,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12183:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343330",
              "id": 67226,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12233:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_430_by_1",
                "typeString": "int_const 430"
              },
              "value": "430"
            },
            "visibility": "internal"
          },
          {
            "id": 67230,
            "nodeType": "VariableDeclaration",
            "src": "12242:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_PAUSED",
            "nameLocation": "12268:10:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67228,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12242:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343331",
              "id": 67229,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12281:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_431_by_1",
                "typeString": "int_const 431"
              },
              "value": "431"
            },
            "visibility": "internal"
          },
          {
            "id": 67233,
            "nodeType": "VariableDeclaration",
            "src": "12290:59:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_ALREADY_ALLOWLISTED",
            "nameLocation": "12316:27:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67231,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12290:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343332",
              "id": 67232,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12346:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_432_by_1",
                "typeString": "int_const 432"
              },
              "value": "432"
            },
            "visibility": "internal"
          },
          {
            "id": 67236,
            "nodeType": "VariableDeclaration",
            "src": "12355:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_NOT_ALLOWLISTED",
            "nameLocation": "12381:23:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67234,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12355:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343333",
              "id": 67235,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12407:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_433_by_1",
                "typeString": "int_const 433"
              },
              "value": "433"
            },
            "visibility": "internal"
          },
          {
            "id": 67239,
            "nodeType": "VariableDeclaration",
            "src": "12416:58:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_BURN_EXCEEDS_BALANCE",
            "nameLocation": "12442:26:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67237,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12416:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343334",
              "id": 67238,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12471:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_434_by_1",
                "typeString": "int_const 434"
              },
              "value": "434"
            },
            "visibility": "internal"
          },
          {
            "id": 67242,
            "nodeType": "VariableDeclaration",
            "src": "12480:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_OPERATION",
            "nameLocation": "12506:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67240,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12480:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343335",
              "id": 67241,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12526:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_435_by_1",
                "typeString": "int_const 435"
              },
              "value": "435"
            },
            "visibility": "internal"
          },
          {
            "id": 67245,
            "nodeType": "VariableDeclaration",
            "src": "12535:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CODEC_OVERFLOW",
            "nameLocation": "12561:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67243,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12535:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343336",
              "id": 67244,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12578:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_436_by_1",
                "typeString": "int_const 436"
              },
              "value": "436"
            },
            "visibility": "internal"
          },
          {
            "id": 67248,
            "nodeType": "VariableDeclaration",
            "src": "12587:48:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "IN_RECOVERY_MODE",
            "nameLocation": "12613:16:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67246,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12587:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343337",
              "id": 67247,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12632:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_437_by_1",
                "typeString": "int_const 437"
              },
              "value": "437"
            },
            "visibility": "internal"
          },
          {
            "id": 67251,
            "nodeType": "VariableDeclaration",
            "src": "12641:52:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_IN_RECOVERY_MODE",
            "nameLocation": "12667:20:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67249,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12641:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343338",
              "id": 67250,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12690:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_438_by_1",
                "typeString": "int_const 438"
              },
              "value": "438"
            },
            "visibility": "internal"
          },
          {
            "id": 67254,
            "nodeType": "VariableDeclaration",
            "src": "12699:47:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INDUCED_FAILURE",
            "nameLocation": "12725:15:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67252,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12699:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343339",
              "id": 67253,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12743:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_439_by_1",
                "typeString": "int_const 439"
              },
              "value": "439"
            },
            "visibility": "internal"
          },
          {
            "id": 67257,
            "nodeType": "VariableDeclaration",
            "src": "12752:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EXPIRED_SIGNATURE",
            "nameLocation": "12778:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67255,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12752:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343430",
              "id": 67256,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12798:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_440_by_1",
                "typeString": "int_const 440"
              },
              "value": "440"
            },
            "visibility": "internal"
          },
          {
            "id": 67260,
            "nodeType": "VariableDeclaration",
            "src": "12807:51:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MALFORMED_SIGNATURE",
            "nameLocation": "12833:19:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67258,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12807:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343431",
              "id": 67259,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12855:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_441_by_1",
                "typeString": "int_const 441"
              },
              "value": "441"
            },
            "visibility": "internal"
          },
          {
            "id": 67263,
            "nodeType": "VariableDeclaration",
            "src": "12864:63:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SAFE_CAST_VALUE_CANT_FIT_UINT64",
            "nameLocation": "12890:31:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67261,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12864:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343432",
              "id": 67262,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12924:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_442_by_1",
                "typeString": "int_const 442"
              },
              "value": "442"
            },
            "visibility": "internal"
          },
          {
            "id": 67266,
            "nodeType": "VariableDeclaration",
            "src": "12933:50:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_FEE_TYPE",
            "nameLocation": "12959:18:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67264,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12933:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343433",
              "id": 67265,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12980:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_443_by_1",
                "typeString": "int_const 443"
              },
              "value": "443"
            },
            "visibility": "internal"
          },
          {
            "id": 67269,
            "nodeType": "VariableDeclaration",
            "src": "12989:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BURN_FROM_ZERO",
            "nameLocation": "13015:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67267,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12989:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343434",
              "id": 67268,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13032:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_444_by_1",
                "typeString": "int_const 444"
              },
              "value": "444"
            },
            "visibility": "internal"
          },
          {
            "id": 67272,
            "nodeType": "VariableDeclaration",
            "src": "13055:47:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_POOL_ID",
            "nameLocation": "13081:15:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67270,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13055:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353030",
              "id": 67271,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13099:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_500_by_1",
                "typeString": "int_const 500"
              },
              "value": "500"
            },
            "visibility": "internal"
          },
          {
            "id": 67275,
            "nodeType": "VariableDeclaration",
            "src": "13108:47:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_NOT_POOL",
            "nameLocation": "13134:15:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67273,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13108:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353031",
              "id": 67274,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13152:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_501_by_1",
                "typeString": "int_const 501"
              },
              "value": "501"
            },
            "visibility": "internal"
          },
          {
            "id": 67278,
            "nodeType": "VariableDeclaration",
            "src": "13161:56:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SENDER_NOT_ASSET_MANAGER",
            "nameLocation": "13187:24:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67276,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13161:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353032",
              "id": 67277,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13214:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_502_by_1",
                "typeString": "int_const 502"
              },
              "value": "502"
            },
            "visibility": "internal"
          },
          {
            "id": 67281,
            "nodeType": "VariableDeclaration",
            "src": "13223:57:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "USER_DOESNT_ALLOW_RELAYER",
            "nameLocation": "13249:25:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67279,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13223:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353033",
              "id": 67280,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13277:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_503_by_1",
                "typeString": "int_const 503"
              },
              "value": "503"
            },
            "visibility": "internal"
          },
          {
            "id": 67284,
            "nodeType": "VariableDeclaration",
            "src": "13286:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_SIGNATURE",
            "nameLocation": "13312:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67282,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13286:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353034",
              "id": 67283,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13332:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_504_by_1",
                "typeString": "int_const 504"
              },
              "value": "504"
            },
            "visibility": "internal"
          },
          {
            "id": 67287,
            "nodeType": "VariableDeclaration",
            "src": "13341:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EXIT_BELOW_MIN",
            "nameLocation": "13367:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67285,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13341:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353035",
              "id": 67286,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13384:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_505_by_1",
                "typeString": "int_const 505"
              },
              "value": "505"
            },
            "visibility": "internal"
          },
          {
            "id": 67290,
            "nodeType": "VariableDeclaration",
            "src": "13393:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "JOIN_ABOVE_MAX",
            "nameLocation": "13419:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67288,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13393:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353036",
              "id": 67289,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13436:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_506_by_1",
                "typeString": "int_const 506"
              },
              "value": "506"
            },
            "visibility": "internal"
          },
          {
            "id": 67293,
            "nodeType": "VariableDeclaration",
            "src": "13445:42:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAP_LIMIT",
            "nameLocation": "13471:10:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67291,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13445:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353037",
              "id": 67292,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13484:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_507_by_1",
                "typeString": "int_const 507"
              },
              "value": "507"
            },
            "visibility": "internal"
          },
          {
            "id": 67296,
            "nodeType": "VariableDeclaration",
            "src": "13493:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAP_DEADLINE",
            "nameLocation": "13519:13:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67294,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13493:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353038",
              "id": 67295,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13535:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_508_by_1",
                "typeString": "int_const 508"
              },
              "value": "508"
            },
            "visibility": "internal"
          },
          {
            "id": 67299,
            "nodeType": "VariableDeclaration",
            "src": "13544:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CANNOT_SWAP_SAME_TOKEN",
            "nameLocation": "13570:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67297,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13544:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353039",
              "id": 67298,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13595:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_509_by_1",
                "typeString": "int_const 509"
              },
              "value": "509"
            },
            "visibility": "internal"
          },
          {
            "id": 67302,
            "nodeType": "VariableDeclaration",
            "src": "13604:60:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNKNOWN_AMOUNT_IN_FIRST_SWAP",
            "nameLocation": "13630:28:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67300,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13604:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353130",
              "id": 67301,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13661:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_510_by_1",
                "typeString": "int_const 510"
              },
              "value": "510"
            },
            "visibility": "internal"
          },
          {
            "id": 67305,
            "nodeType": "VariableDeclaration",
            "src": "13670:60:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MALCONSTRUCTED_MULTIHOP_SWAP",
            "nameLocation": "13696:28:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67303,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13670:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353131",
              "id": 67304,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13727:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_511_by_1",
                "typeString": "int_const 511"
              },
              "value": "511"
            },
            "visibility": "internal"
          },
          {
            "id": 67308,
            "nodeType": "VariableDeclaration",
            "src": "13736:57:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INTERNAL_BALANCE_OVERFLOW",
            "nameLocation": "13762:25:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67306,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13736:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353132",
              "id": 67307,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13790:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_512_by_1",
                "typeString": "int_const 512"
              },
              "value": "512"
            },
            "visibility": "internal"
          },
          {
            "id": 67311,
            "nodeType": "VariableDeclaration",
            "src": "13799:61:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_INTERNAL_BALANCE",
            "nameLocation": "13825:29:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67309,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13799:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353133",
              "id": 67310,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13857:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_513_by_1",
                "typeString": "int_const 513"
              },
              "value": "513"
            },
            "visibility": "internal"
          },
          {
            "id": 67314,
            "nodeType": "VariableDeclaration",
            "src": "13866:60:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_ETH_INTERNAL_BALANCE",
            "nameLocation": "13892:28:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67312,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13866:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353134",
              "id": 67313,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13923:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_514_by_1",
                "typeString": "int_const 514"
              },
              "value": "514"
            },
            "visibility": "internal"
          },
          {
            "id": 67317,
            "nodeType": "VariableDeclaration",
            "src": "13932:57:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_POST_LOAN_BALANCE",
            "nameLocation": "13958:25:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67315,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13932:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353135",
              "id": 67316,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13986:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_515_by_1",
                "typeString": "int_const 515"
              },
              "value": "515"
            },
            "visibility": "internal"
          },
          {
            "id": 67320,
            "nodeType": "VariableDeclaration",
            "src": "13995:48:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_ETH",
            "nameLocation": "14021:16:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67318,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13995:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353136",
              "id": 67319,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14040:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_516_by_1",
                "typeString": "int_const 516"
              },
              "value": "516"
            },
            "visibility": "internal"
          },
          {
            "id": 67323,
            "nodeType": "VariableDeclaration",
            "src": "14049:47:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNALLOCATED_ETH",
            "nameLocation": "14075:15:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67321,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14049:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353137",
              "id": 67322,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14093:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_517_by_1",
                "typeString": "int_const 517"
              },
              "value": "517"
            },
            "visibility": "internal"
          },
          {
            "id": 67326,
            "nodeType": "VariableDeclaration",
            "src": "14102:44:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ETH_TRANSFER",
            "nameLocation": "14128:12:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67324,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14102:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353138",
              "id": 67325,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14143:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_518_by_1",
                "typeString": "int_const 518"
              },
              "value": "518"
            },
            "visibility": "internal"
          },
          {
            "id": 67329,
            "nodeType": "VariableDeclaration",
            "src": "14152:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CANNOT_USE_ETH_SENTINEL",
            "nameLocation": "14178:23:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67327,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14152:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353139",
              "id": 67328,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14204:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_519_by_1",
                "typeString": "int_const 519"
              },
              "value": "519"
            },
            "visibility": "internal"
          },
          {
            "id": 67332,
            "nodeType": "VariableDeclaration",
            "src": "14213:47:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKENS_MISMATCH",
            "nameLocation": "14239:15:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67330,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14213:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353230",
              "id": 67331,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14257:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_520_by_1",
                "typeString": "int_const 520"
              },
              "value": "520"
            },
            "visibility": "internal"
          },
          {
            "id": 67335,
            "nodeType": "VariableDeclaration",
            "src": "14266:52:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKEN_NOT_REGISTERED",
            "nameLocation": "14292:20:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67333,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14266:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353231",
              "id": 67334,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14315:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_521_by_1",
                "typeString": "int_const 521"
              },
              "value": "521"
            },
            "visibility": "internal"
          },
          {
            "id": 67338,
            "nodeType": "VariableDeclaration",
            "src": "14324:56:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKEN_ALREADY_REGISTERED",
            "nameLocation": "14350:24:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67336,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14324:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353232",
              "id": 67337,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14377:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_522_by_1",
                "typeString": "int_const 522"
              },
              "value": "522"
            },
            "visibility": "internal"
          },
          {
            "id": 67341,
            "nodeType": "VariableDeclaration",
            "src": "14386:50:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKENS_ALREADY_SET",
            "nameLocation": "14412:18:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67339,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14386:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353233",
              "id": 67340,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14433:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_523_by_1",
                "typeString": "int_const 523"
              },
              "value": "523"
            },
            "visibility": "internal"
          },
          {
            "id": 67344,
            "nodeType": "VariableDeclaration",
            "src": "14442:55:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKENS_LENGTH_MUST_BE_2",
            "nameLocation": "14468:23:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67342,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14442:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353234",
              "id": 67343,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14494:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_524_by_1",
                "typeString": "int_const 524"
              },
              "value": "524"
            },
            "visibility": "internal"
          },
          {
            "id": 67347,
            "nodeType": "VariableDeclaration",
            "src": "14503:53:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NONZERO_TOKEN_BALANCE",
            "nameLocation": "14529:21:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67345,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14503:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353235",
              "id": 67346,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14553:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_525_by_1",
                "typeString": "int_const 525"
              },
              "value": "525"
            },
            "visibility": "internal"
          },
          {
            "id": 67350,
            "nodeType": "VariableDeclaration",
            "src": "14562:54:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BALANCE_TOTAL_OVERFLOW",
            "nameLocation": "14588:22:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67348,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14562:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353236",
              "id": 67349,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14613:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_526_by_1",
                "typeString": "int_const 526"
              },
              "value": "526"
            },
            "visibility": "internal"
          },
          {
            "id": 67353,
            "nodeType": "VariableDeclaration",
            "src": "14622:46:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "POOL_NO_TOKENS",
            "nameLocation": "14648:14:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67351,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14622:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353237",
              "id": 67352,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14665:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_527_by_1",
                "typeString": "int_const 527"
              },
              "value": "527"
            },
            "visibility": "internal"
          },
          {
            "id": 67356,
            "nodeType": "VariableDeclaration",
            "src": "14674:63:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_FLASH_LOAN_BALANCE",
            "nameLocation": "14700:31:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67354,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14674:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353238",
              "id": 67355,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14734:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_528_by_1",
                "typeString": "int_const 528"
              },
              "value": "528"
            },
            "visibility": "internal"
          },
          {
            "id": 67359,
            "nodeType": "VariableDeclaration",
            "src": "14756:60:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAP_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "14782:28:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67357,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14756:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363030",
              "id": 67358,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14813:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_600_by_1",
                "typeString": "int_const 600"
              },
              "value": "600"
            },
            "visibility": "internal"
          },
          {
            "id": 67362,
            "nodeType": "VariableDeclaration",
            "src": "14822:66:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FLASH_LOAN_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "14848:34:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67360,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14822:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363031",
              "id": 67361,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14885:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_601_by_1",
                "typeString": "int_const 601"
              },
              "value": "601"
            },
            "visibility": "internal"
          },
          {
            "id": 67365,
            "nodeType": "VariableDeclaration",
            "src": "14894:66:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT",
            "nameLocation": "14920:34:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67363,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14894:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363032",
              "id": 67364,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14957:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_602_by_1",
                "typeString": "int_const 602"
              },
              "value": "602"
            },
            "visibility": "internal"
          },
          {
            "id": 67368,
            "nodeType": "VariableDeclaration",
            "src": "14966:59:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AUM_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "14992:27:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67366,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14966:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363033",
              "id": 67367,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15022:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_603_by_1",
                "typeString": "int_const 603"
              },
              "value": "603"
            },
            "visibility": "internal"
          },
          {
            "id": 67371,
            "nodeType": "VariableDeclaration",
            "src": "15051:64:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SPLITTER_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "15077:32:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67369,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15051:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "373030",
              "id": 67370,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15112:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_700_by_1",
                "typeString": "int_const 700"
              },
              "value": "700"
            },
            "visibility": "internal"
          },
          {
            "id": 67374,
            "nodeType": "VariableDeclaration",
            "src": "15134:45:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNIMPLEMENTED",
            "nameLocation": "15160:13:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67372,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15134:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "393938",
              "id": 67373,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15176:3:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_998_by_1",
                "typeString": "int_const 998"
              },
              "value": "998"
            },
            "visibility": "internal"
          },
          {
            "id": 67377,
            "nodeType": "VariableDeclaration",
            "src": "15185:49:107",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SHOULD_NOT_HAPPEN",
            "nameLocation": "15211:17:107",
            "scope": 67378,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67375,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15185:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "393939",
              "id": 67376,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15231:3:107",
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
          67378
        ],
        "name": "BalancerErrors",
        "nameLocation": "5214:14:107",
        "scope": 67379,
        "usedErrors": []
      }
    ],
    "license": "GPL-3.0-or-later"
  },
  "id": 107
} as const;
