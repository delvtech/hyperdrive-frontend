export const BalancerErrors = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122028bd9b4996461c88336342e0c8291f61144c9e8cfa3d3dad21c54e1e2c7cecc664736f6c63430008130033",
    "sourceMap": "5206:10031:113:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;5206:10031:113;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122028bd9b4996461c88336342e0c8291f61144c9e8cfa3d3dad21c54e1e2c7cecc664736f6c63430008130033",
    "sourceMap": "5206:10031:113:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/3rdPartyLibs/BalancerErrors.sol\":\"BalancerErrors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"test/3rdPartyLibs/BalancerErrors.sol\":{\"keccak256\":\"0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611\",\"dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU\"]}},\"version\":1}",
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
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
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
    "id": 68145,
    "exportedSymbols": {
      "BalancerErrors": [
        68144
      ],
      "_require": [
        67588,
        67607
      ],
      "_revert": [
        67619,
        67639
      ]
    },
    "nodeType": "SourceUnit",
    "src": "688:14550:113",
    "nodes": [
      {
        "id": 67572,
        "nodeType": "PragmaDirective",
        "src": "688:31:113",
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
        "id": 67588,
        "nodeType": "FunctionDefinition",
        "src": "926:101:113",
        "nodes": [],
        "body": {
          "id": 67587,
          "nodeType": "Block",
          "src": "984:43:113",
          "nodes": [],
          "statements": [
            {
              "condition": {
                "id": 67581,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "lValueRequested": false,
                "nodeType": "UnaryOperation",
                "operator": "!",
                "prefix": true,
                "src": "994:10:113",
                "subExpression": {
                  "id": 67580,
                  "name": "condition",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 67575,
                  "src": "995:9:113",
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
              "id": 67586,
              "nodeType": "IfStatement",
              "src": "990:34:113",
              "trueBody": {
                "expression": {
                  "arguments": [
                    {
                      "id": 67583,
                      "name": "errorCode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67577,
                      "src": "1014:9:113",
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
                    "id": 67582,
                    "name": "_revert",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [
                      67619,
                      67639
                    ],
                    "referencedDeclaration": 67619,
                    "src": "1006:7:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$__$",
                      "typeString": "function (uint256) pure"
                    }
                  },
                  "id": 67584,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1006:18:113",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 67585,
                "nodeType": "ExpressionStatement",
                "src": "1006:18:113"
              }
            }
          ]
        },
        "documentation": {
          "id": 67573,
          "nodeType": "StructuredDocumentation",
          "src": "741:184:113",
          "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.\n Uses the default 'BAL' prefix for the error code"
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_require",
        "nameLocation": "935:8:113",
        "parameters": {
          "id": 67578,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 67575,
              "mutability": "mutable",
              "name": "condition",
              "nameLocation": "949:9:113",
              "nodeType": "VariableDeclaration",
              "scope": 67588,
              "src": "944:14:113",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 67574,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "944:4:113",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 67577,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "968:9:113",
              "nodeType": "VariableDeclaration",
              "scope": 67588,
              "src": "960:17:113",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 67576,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "960:7:113",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "943:35:113"
        },
        "returnParameters": {
          "id": 67579,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "984:0:113"
        },
        "scope": 68145,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 67607,
        "nodeType": "FunctionDefinition",
        "src": "1162:124:113",
        "nodes": [],
        "body": {
          "id": 67606,
          "nodeType": "Block",
          "src": "1235:51:113",
          "nodes": [],
          "statements": [
            {
              "condition": {
                "id": 67599,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "lValueRequested": false,
                "nodeType": "UnaryOperation",
                "operator": "!",
                "prefix": true,
                "src": "1245:10:113",
                "subExpression": {
                  "id": 67598,
                  "name": "condition",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 67591,
                  "src": "1246:9:113",
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
              "id": 67605,
              "nodeType": "IfStatement",
              "src": "1241:42:113",
              "trueBody": {
                "expression": {
                  "arguments": [
                    {
                      "id": 67601,
                      "name": "errorCode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67593,
                      "src": "1265:9:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    {
                      "id": 67602,
                      "name": "prefix",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67595,
                      "src": "1276:6:113",
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
                    "id": 67600,
                    "name": "_revert",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [
                      67619,
                      67639
                    ],
                    "referencedDeclaration": 67639,
                    "src": "1257:7:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                      "typeString": "function (uint256,bytes3) pure"
                    }
                  },
                  "id": 67603,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1257:26:113",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_tuple$__$",
                    "typeString": "tuple()"
                  }
                },
                "id": 67604,
                "nodeType": "ExpressionStatement",
                "src": "1257:26:113"
              }
            }
          ]
        },
        "documentation": {
          "id": 67589,
          "nodeType": "StructuredDocumentation",
          "src": "1029:132:113",
          "text": " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported."
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_require",
        "nameLocation": "1171:8:113",
        "parameters": {
          "id": 67596,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 67591,
              "mutability": "mutable",
              "name": "condition",
              "nameLocation": "1185:9:113",
              "nodeType": "VariableDeclaration",
              "scope": 67607,
              "src": "1180:14:113",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 67590,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1180:4:113",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 67593,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "1204:9:113",
              "nodeType": "VariableDeclaration",
              "scope": 67607,
              "src": "1196:17:113",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 67592,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1196:7:113",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 67595,
              "mutability": "mutable",
              "name": "prefix",
              "nameLocation": "1222:6:113",
              "nodeType": "VariableDeclaration",
              "scope": 67607,
              "src": "1215:13:113",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes3",
                "typeString": "bytes3"
              },
              "typeName": {
                "id": 67594,
                "name": "bytes3",
                "nodeType": "ElementaryTypeName",
                "src": "1215:6:113",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes3",
                  "typeString": "bytes3"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "1179:50:113"
        },
        "returnParameters": {
          "id": 67597,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "1235:0:113"
        },
        "scope": 68145,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 67619,
        "nodeType": "FunctionDefinition",
        "src": "1445:126:113",
        "nodes": [],
        "body": {
          "id": 67618,
          "nodeType": "Block",
          "src": "1486:85:113",
          "nodes": [],
          "statements": [
            {
              "expression": {
                "arguments": [
                  {
                    "id": 67614,
                    "name": "errorCode",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67610,
                    "src": "1500:9:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "hexValue": "3078343234313463",
                    "id": 67615,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1511:8:113",
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
                  "id": 67613,
                  "name": "_revert",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [
                    67619,
                    67639
                  ],
                  "referencedDeclaration": 67639,
                  "src": "1492:7:113",
                  "typeDescriptions": {
                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$",
                    "typeString": "function (uint256,bytes3) pure"
                  }
                },
                "id": 67616,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "functionCall",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "1492:28:113",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_tuple$__$",
                  "typeString": "tuple()"
                }
              },
              "id": 67617,
              "nodeType": "ExpressionStatement",
              "src": "1492:28:113"
            }
          ]
        },
        "documentation": {
          "id": 67608,
          "nodeType": "StructuredDocumentation",
          "src": "1288:156:113",
          "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.\n Uses the default 'BAL' prefix for the error code"
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_revert",
        "nameLocation": "1454:7:113",
        "parameters": {
          "id": 67611,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 67610,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "1470:9:113",
              "nodeType": "VariableDeclaration",
              "scope": 67619,
              "src": "1462:17:113",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 67609,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1462:7:113",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "1461:19:113"
        },
        "returnParameters": {
          "id": 67612,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "1486:0:113"
        },
        "scope": 68145,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 67639,
        "nodeType": "FunctionDefinition",
        "src": "1678:3526:113",
        "nodes": [],
        "body": {
          "id": 67638,
          "nodeType": "Block",
          "src": "1734:3470:113",
          "nodes": [],
          "statements": [
            {
              "assignments": [
                67628
              ],
              "declarations": [
                {
                  "constant": false,
                  "id": 67628,
                  "mutability": "mutable",
                  "name": "prefixUint",
                  "nameLocation": "1748:10:113",
                  "nodeType": "VariableDeclaration",
                  "scope": 67638,
                  "src": "1740:18:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 67627,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1740:7:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "id": 67636,
              "initialValue": {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "id": 67633,
                        "name": "prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67624,
                        "src": "1776:6:113",
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
                      "id": 67632,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1769:6:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint24_$",
                        "typeString": "type(uint24)"
                      },
                      "typeName": {
                        "id": 67631,
                        "name": "uint24",
                        "nodeType": "ElementaryTypeName",
                        "src": "1769:6:113",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 67634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1769:14:113",
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
                  "id": 67630,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "nodeType": "ElementaryTypeNameExpression",
                  "src": "1761:7:113",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_uint256_$",
                    "typeString": "type(uint256)"
                  },
                  "typeName": {
                    "id": 67629,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1761:7:113",
                    "typeDescriptions": {}
                  }
                },
                "id": 67635,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "typeConversion",
                "lValueRequested": false,
                "nameLocations": [],
                "names": [],
                "nodeType": "FunctionCall",
                "src": "1761:23:113",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "VariableDeclarationStatement",
              "src": "1740:44:113"
            },
            {
              "AST": {
                "nodeType": "YulBlock",
                "src": "2573:2629:113",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2847:42:113",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "errorCode",
                              "nodeType": "YulIdentifier",
                              "src": "2868:9:113"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2879:2:113",
                              "type": "",
                              "value": "10"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "2864:3:113"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2864:18:113"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2884:4:113",
                          "type": "",
                          "value": "0x30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2860:3:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2860:29:113"
                    },
                    "variables": [
                      {
                        "name": "units",
                        "nodeType": "YulTypedName",
                        "src": "2851:5:113",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2899:31:113",
                    "value": {
                      "arguments": [
                        {
                          "name": "errorCode",
                          "nodeType": "YulIdentifier",
                          "src": "2916:9:113"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2927:2:113",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "2912:3:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2912:18:113"
                    },
                    "variableNames": [
                      {
                        "name": "errorCode",
                        "nodeType": "YulIdentifier",
                        "src": "2899:9:113"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2939:43:113",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "errorCode",
                              "nodeType": "YulIdentifier",
                              "src": "2961:9:113"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2972:2:113",
                              "type": "",
                              "value": "10"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "2957:3:113"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2957:18:113"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2977:4:113",
                          "type": "",
                          "value": "0x30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2953:3:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2953:29:113"
                    },
                    "variables": [
                      {
                        "name": "tenths",
                        "nodeType": "YulTypedName",
                        "src": "2943:6:113",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2992:31:113",
                    "value": {
                      "arguments": [
                        {
                          "name": "errorCode",
                          "nodeType": "YulIdentifier",
                          "src": "3009:9:113"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3020:2:113",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "3005:3:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3005:18:113"
                    },
                    "variableNames": [
                      {
                        "name": "errorCode",
                        "nodeType": "YulIdentifier",
                        "src": "2992:9:113"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3032:45:113",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "errorCode",
                              "nodeType": "YulIdentifier",
                              "src": "3056:9:113"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3067:2:113",
                              "type": "",
                              "value": "10"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "3052:3:113"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3052:18:113"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3072:4:113",
                          "type": "",
                          "value": "0x30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3048:3:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3048:29:113"
                    },
                    "variables": [
                      {
                        "name": "hundreds",
                        "nodeType": "YulTypedName",
                        "src": "3036:8:113",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3710:61:113",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3737:2:113",
                          "type": "",
                          "value": "24"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3745:4:113",
                              "type": "",
                              "value": "0x23"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3755:1:113",
                                  "type": "",
                                  "value": "8"
                                },
                                {
                                  "name": "prefixUint",
                                  "nodeType": "YulIdentifier",
                                  "src": "3758:10:113"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "3751:3:113"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3751:18:113"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3741:3:113"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3741:29:113"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "3733:3:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3733:38:113"
                    },
                    "variables": [
                      {
                        "name": "formattedPrefix",
                        "nodeType": "YulTypedName",
                        "src": "3714:15:113",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3781:182:113",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3818:3:113",
                          "type": "",
                          "value": "200"
                        },
                        {
                          "arguments": [
                            {
                              "name": "formattedPrefix",
                              "nodeType": "YulIdentifier",
                              "src": "3856:15:113"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "units",
                                      "nodeType": "YulIdentifier",
                                      "src": "3897:5:113"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3908:1:113",
                                          "type": "",
                                          "value": "8"
                                        },
                                        {
                                          "name": "tenths",
                                          "nodeType": "YulIdentifier",
                                          "src": "3911:6:113"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "3904:3:113"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3904:14:113"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3893:3:113"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3893:26:113"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3925:2:113",
                                      "type": "",
                                      "value": "16"
                                    },
                                    {
                                      "name": "hundreds",
                                      "nodeType": "YulIdentifier",
                                      "src": "3929:8:113"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "3921:3:113"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3921:17:113"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3889:3:113"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3889:50:113"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3835:3:113"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3835:118:113"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "3801:3:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3801:162:113"
                    },
                    "variables": [
                      {
                        "name": "revertReason",
                        "nodeType": "YulTypedName",
                        "src": "3785:12:113",
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
                          "src": "4491:3:113",
                          "type": "",
                          "value": "0x0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4508:66:113",
                          "type": "",
                          "value": "0x08c379a000000000000000000000000000000000000000000000000000000000"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4471:6:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4471:113:113"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4471:113:113"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4730:4:113",
                          "type": "",
                          "value": "0x04"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4748:66:113",
                          "type": "",
                          "value": "0x0000000000000000000000000000000000000000000000000000000000000020"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4710:6:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4710:114:113"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4710:114:113"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4893:4:113",
                          "type": "",
                          "value": "0x24"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4899:1:113",
                          "type": "",
                          "value": "7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4886:6:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4886:15:113"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4886:15:113"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4966:4:113",
                          "type": "",
                          "value": "0x44"
                        },
                        {
                          "name": "revertReason",
                          "nodeType": "YulIdentifier",
                          "src": "4972:12:113"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4959:6:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4959:26:113"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4959:26:113"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5189:1:113",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5192:3:113",
                          "type": "",
                          "value": "100"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "5182:6:113"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5182:14:113"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5182:14:113"
                  }
                ]
              },
              "evmVersion": "paris",
              "externalReferences": [
                {
                  "declaration": 67622,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2868:9:113",
                  "valueSize": 1
                },
                {
                  "declaration": 67622,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2899:9:113",
                  "valueSize": 1
                },
                {
                  "declaration": 67622,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2916:9:113",
                  "valueSize": 1
                },
                {
                  "declaration": 67622,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2961:9:113",
                  "valueSize": 1
                },
                {
                  "declaration": 67622,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "2992:9:113",
                  "valueSize": 1
                },
                {
                  "declaration": 67622,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "3009:9:113",
                  "valueSize": 1
                },
                {
                  "declaration": 67622,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "3056:9:113",
                  "valueSize": 1
                },
                {
                  "declaration": 67628,
                  "isOffset": false,
                  "isSlot": false,
                  "src": "3758:10:113",
                  "valueSize": 1
                }
              ],
              "id": 67637,
              "nodeType": "InlineAssembly",
              "src": "2564:2638:113"
            }
          ]
        },
        "documentation": {
          "id": 67620,
          "nodeType": "StructuredDocumentation",
          "src": "1573:104:113",
          "text": " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported."
        },
        "implemented": true,
        "kind": "freeFunction",
        "modifiers": [],
        "name": "_revert",
        "nameLocation": "1687:7:113",
        "parameters": {
          "id": 67625,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 67622,
              "mutability": "mutable",
              "name": "errorCode",
              "nameLocation": "1703:9:113",
              "nodeType": "VariableDeclaration",
              "scope": 67639,
              "src": "1695:17:113",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 67621,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1695:7:113",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 67624,
              "mutability": "mutable",
              "name": "prefix",
              "nameLocation": "1721:6:113",
              "nodeType": "VariableDeclaration",
              "scope": 67639,
              "src": "1714:13:113",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes3",
                "typeString": "bytes3"
              },
              "typeName": {
                "id": 67623,
                "name": "bytes3",
                "nodeType": "ElementaryTypeName",
                "src": "1714:6:113",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes3",
                  "typeString": "bytes3"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "1694:34:113"
        },
        "returnParameters": {
          "id": 67626,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "1734:0:113"
        },
        "scope": 68145,
        "stateMutability": "pure",
        "virtual": false,
        "visibility": "internal"
      },
      {
        "id": 68144,
        "nodeType": "ContractDefinition",
        "src": "5206:10031:113",
        "nodes": [
          {
            "id": 67642,
            "nodeType": "VariableDeclaration",
            "src": "5247:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADD_OVERFLOW",
            "nameLocation": "5273:12:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67640,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5247:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 67641,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5288:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "id": 67645,
            "nodeType": "VariableDeclaration",
            "src": "5295:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SUB_OVERFLOW",
            "nameLocation": "5321:12:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67643,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5295:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 67644,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5336:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "internal"
          },
          {
            "id": 67648,
            "nodeType": "VariableDeclaration",
            "src": "5343:43:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SUB_UNDERFLOW",
            "nameLocation": "5369:13:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67646,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5343:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "32",
              "id": 67647,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5385:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2_by_1",
                "typeString": "int_const 2"
              },
              "value": "2"
            },
            "visibility": "internal"
          },
          {
            "id": 67651,
            "nodeType": "VariableDeclaration",
            "src": "5392:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MUL_OVERFLOW",
            "nameLocation": "5418:12:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67649,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5392:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "33",
              "id": 67650,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5433:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3_by_1",
                "typeString": "int_const 3"
              },
              "value": "3"
            },
            "visibility": "internal"
          },
          {
            "id": 67654,
            "nodeType": "VariableDeclaration",
            "src": "5440:43:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ZERO_DIVISION",
            "nameLocation": "5466:13:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67652,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5440:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "34",
              "id": 67653,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5482:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4_by_1",
                "typeString": "int_const 4"
              },
              "value": "4"
            },
            "visibility": "internal"
          },
          {
            "id": 67657,
            "nodeType": "VariableDeclaration",
            "src": "5489:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "DIV_INTERNAL",
            "nameLocation": "5515:12:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67655,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5489:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "35",
              "id": 67656,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5530:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5_by_1",
                "typeString": "int_const 5"
              },
              "value": "5"
            },
            "visibility": "internal"
          },
          {
            "id": 67660,
            "nodeType": "VariableDeclaration",
            "src": "5537:45:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "X_OUT_OF_BOUNDS",
            "nameLocation": "5563:15:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67658,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5537:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "36",
              "id": 67659,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5581:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_6_by_1",
                "typeString": "int_const 6"
              },
              "value": "6"
            },
            "visibility": "internal"
          },
          {
            "id": 67663,
            "nodeType": "VariableDeclaration",
            "src": "5588:45:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "Y_OUT_OF_BOUNDS",
            "nameLocation": "5614:15:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67661,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5588:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "37",
              "id": 67662,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5632:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_7_by_1",
                "typeString": "int_const 7"
              },
              "value": "7"
            },
            "visibility": "internal"
          },
          {
            "id": 67666,
            "nodeType": "VariableDeclaration",
            "src": "5639:51:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PRODUCT_OUT_OF_BOUNDS",
            "nameLocation": "5665:21:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67664,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5639:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "38",
              "id": 67665,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5689:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8_by_1",
                "typeString": "int_const 8"
              },
              "value": "8"
            },
            "visibility": "internal"
          },
          {
            "id": 67669,
            "nodeType": "VariableDeclaration",
            "src": "5696:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_EXPONENT",
            "nameLocation": "5722:16:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67667,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5696:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "39",
              "id": 67668,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5741:1:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_9_by_1",
                "typeString": "int_const 9"
              },
              "value": "9"
            },
            "visibility": "internal"
          },
          {
            "id": 67672,
            "nodeType": "VariableDeclaration",
            "src": "5762:45:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OUT_OF_BOUNDS",
            "nameLocation": "5788:13:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67670,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5762:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313030",
              "id": 67671,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5804:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100_by_1",
                "typeString": "int_const 100"
              },
              "value": "100"
            },
            "visibility": "internal"
          },
          {
            "id": 67675,
            "nodeType": "VariableDeclaration",
            "src": "5813:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNSORTED_ARRAY",
            "nameLocation": "5839:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67673,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5813:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313031",
              "id": 67674,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5856:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_101_by_1",
                "typeString": "int_const 101"
              },
              "value": "101"
            },
            "visibility": "internal"
          },
          {
            "id": 67678,
            "nodeType": "VariableDeclaration",
            "src": "5865:47:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNSORTED_TOKENS",
            "nameLocation": "5891:15:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67676,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5865:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313032",
              "id": 67677,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5909:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_102_by_1",
                "typeString": "int_const 102"
              },
              "value": "102"
            },
            "visibility": "internal"
          },
          {
            "id": 67681,
            "nodeType": "VariableDeclaration",
            "src": "5918:53:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INPUT_LENGTH_MISMATCH",
            "nameLocation": "5944:21:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67679,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5918:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313033",
              "id": 67680,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5968:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_103_by_1",
                "typeString": "int_const 103"
              },
              "value": "103"
            },
            "visibility": "internal"
          },
          {
            "id": 67684,
            "nodeType": "VariableDeclaration",
            "src": "5977:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ZERO_TOKEN",
            "nameLocation": "6003:10:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67682,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5977:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313034",
              "id": 67683,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6016:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_104_by_1",
                "typeString": "int_const 104"
              },
              "value": "104"
            },
            "visibility": "internal"
          },
          {
            "id": 67687,
            "nodeType": "VariableDeclaration",
            "src": "6025:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_DATA",
            "nameLocation": "6051:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67685,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6025:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313035",
              "id": 67686,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6071:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_105_by_1",
                "typeString": "int_const 105"
              },
              "value": "105"
            },
            "visibility": "internal"
          },
          {
            "id": 67690,
            "nodeType": "VariableDeclaration",
            "src": "6101:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_TOKENS",
            "nameLocation": "6127:10:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67688,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6101:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323030",
              "id": 67689,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6140:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_200_by_1",
                "typeString": "int_const 200"
              },
              "value": "200"
            },
            "visibility": "internal"
          },
          {
            "id": 67693,
            "nodeType": "VariableDeclaration",
            "src": "6149:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_TOKENS",
            "nameLocation": "6175:10:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67691,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6149:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323031",
              "id": 67692,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6188:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_201_by_1",
                "typeString": "int_const 201"
              },
              "value": "201"
            },
            "visibility": "internal"
          },
          {
            "id": 67696,
            "nodeType": "VariableDeclaration",
            "src": "6197:55:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_SWAP_FEE_PERCENTAGE",
            "nameLocation": "6223:23:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67694,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6197:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323032",
              "id": 67695,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6249:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_202_by_1",
                "typeString": "int_const 202"
              },
              "value": "202"
            },
            "visibility": "internal"
          },
          {
            "id": 67699,
            "nodeType": "VariableDeclaration",
            "src": "6258:55:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_SWAP_FEE_PERCENTAGE",
            "nameLocation": "6284:23:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67697,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6258:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323033",
              "id": 67698,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6310:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_203_by_1",
                "typeString": "int_const 203"
              },
              "value": "203"
            },
            "visibility": "internal"
          },
          {
            "id": 67702,
            "nodeType": "VariableDeclaration",
            "src": "6319:43:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MINIMUM_BPT",
            "nameLocation": "6345:11:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67700,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6319:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323034",
              "id": 67701,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6359:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_204_by_1",
                "typeString": "int_const 204"
              },
              "value": "204"
            },
            "visibility": "internal"
          },
          {
            "id": 67705,
            "nodeType": "VariableDeclaration",
            "src": "6368:48:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_NOT_VAULT",
            "nameLocation": "6394:16:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67703,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6368:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323035",
              "id": 67704,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6413:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_205_by_1",
                "typeString": "int_const 205"
              },
              "value": "205"
            },
            "visibility": "internal"
          },
          {
            "id": 67708,
            "nodeType": "VariableDeclaration",
            "src": "6422:45:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNINITIALIZED",
            "nameLocation": "6448:13:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67706,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6422:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323036",
              "id": 67707,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6464:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_206_by_1",
                "typeString": "int_const 206"
              },
              "value": "206"
            },
            "visibility": "internal"
          },
          {
            "id": 67711,
            "nodeType": "VariableDeclaration",
            "src": "6473:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BPT_IN_MAX_AMOUNT",
            "nameLocation": "6499:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67709,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6473:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323037",
              "id": 67710,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6519:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_207_by_1",
                "typeString": "int_const 207"
              },
              "value": "207"
            },
            "visibility": "internal"
          },
          {
            "id": 67714,
            "nodeType": "VariableDeclaration",
            "src": "6528:50:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BPT_OUT_MIN_AMOUNT",
            "nameLocation": "6554:18:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67712,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6528:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323038",
              "id": 67713,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6575:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_208_by_1",
                "typeString": "int_const 208"
              },
              "value": "208"
            },
            "visibility": "internal"
          },
          {
            "id": 67717,
            "nodeType": "VariableDeclaration",
            "src": "6584:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EXPIRED_PERMIT",
            "nameLocation": "6610:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67715,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6584:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323039",
              "id": 67716,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6627:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_209_by_1",
                "typeString": "int_const 209"
              },
              "value": "209"
            },
            "visibility": "internal"
          },
          {
            "id": 67720,
            "nodeType": "VariableDeclaration",
            "src": "6636:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_TWO_TOKENS",
            "nameLocation": "6662:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67718,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6636:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323130",
              "id": 67719,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6679:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_210_by_1",
                "typeString": "int_const 210"
              },
              "value": "210"
            },
            "visibility": "internal"
          },
          {
            "id": 67723,
            "nodeType": "VariableDeclaration",
            "src": "6688:40:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "DISABLED",
            "nameLocation": "6714:8:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67721,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6688:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "323131",
              "id": 67722,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6725:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_211_by_1",
                "typeString": "int_const 211"
              },
              "value": "211"
            },
            "visibility": "internal"
          },
          {
            "id": 67726,
            "nodeType": "VariableDeclaration",
            "src": "6748:39:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_AMP",
            "nameLocation": "6774:7:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67724,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6748:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333030",
              "id": 67725,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6784:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_300_by_1",
                "typeString": "int_const 300"
              },
              "value": "300"
            },
            "visibility": "internal"
          },
          {
            "id": 67729,
            "nodeType": "VariableDeclaration",
            "src": "6793:39:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_AMP",
            "nameLocation": "6819:7:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67727,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6793:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333031",
              "id": 67728,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6829:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_301_by_1",
                "typeString": "int_const 301"
              },
              "value": "301"
            },
            "visibility": "internal"
          },
          {
            "id": 67732,
            "nodeType": "VariableDeclaration",
            "src": "6838:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_WEIGHT",
            "nameLocation": "6864:10:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67730,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6838:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333032",
              "id": 67731,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6877:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_302_by_1",
                "typeString": "int_const 302"
              },
              "value": "302"
            },
            "visibility": "internal"
          },
          {
            "id": 67735,
            "nodeType": "VariableDeclaration",
            "src": "6886:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_STABLE_TOKENS",
            "nameLocation": "6912:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67733,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6886:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333033",
              "id": 67734,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6932:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_303_by_1",
                "typeString": "int_const 303"
              },
              "value": "303"
            },
            "visibility": "internal"
          },
          {
            "id": 67738,
            "nodeType": "VariableDeclaration",
            "src": "6941:44:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_IN_RATIO",
            "nameLocation": "6967:12:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67736,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6941:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333034",
              "id": 67737,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "6982:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_304_by_1",
                "typeString": "int_const 304"
              },
              "value": "304"
            },
            "visibility": "internal"
          },
          {
            "id": 67741,
            "nodeType": "VariableDeclaration",
            "src": "6991:45:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_OUT_RATIO",
            "nameLocation": "7017:13:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67739,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6991:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333035",
              "id": 67740,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7033:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_305_by_1",
                "typeString": "int_const 305"
              },
              "value": "305"
            },
            "visibility": "internal"
          },
          {
            "id": 67744,
            "nodeType": "VariableDeclaration",
            "src": "7042:56:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MIN_BPT_IN_FOR_TOKEN_OUT",
            "nameLocation": "7068:24:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67742,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7042:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333036",
              "id": 67743,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7095:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_306_by_1",
                "typeString": "int_const 306"
              },
              "value": "306"
            },
            "visibility": "internal"
          },
          {
            "id": 67747,
            "nodeType": "VariableDeclaration",
            "src": "7104:56:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_OUT_BPT_FOR_TOKEN_IN",
            "nameLocation": "7130:24:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67745,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7104:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333037",
              "id": 67746,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7157:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_307_by_1",
                "typeString": "int_const 307"
              },
              "value": "307"
            },
            "visibility": "internal"
          },
          {
            "id": 67750,
            "nodeType": "VariableDeclaration",
            "src": "7166:59:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NORMALIZED_WEIGHT_INVARIANT",
            "nameLocation": "7192:27:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67748,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7166:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333038",
              "id": 67749,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7222:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_308_by_1",
                "typeString": "int_const 308"
              },
              "value": "308"
            },
            "visibility": "internal"
          },
          {
            "id": 67753,
            "nodeType": "VariableDeclaration",
            "src": "7231:45:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_TOKEN",
            "nameLocation": "7257:13:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67751,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7231:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333039",
              "id": 67752,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7273:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_309_by_1",
                "typeString": "int_const 309"
              },
              "value": "309"
            },
            "visibility": "internal"
          },
          {
            "id": 67756,
            "nodeType": "VariableDeclaration",
            "src": "7282:51:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_JOIN_KIND",
            "nameLocation": "7308:19:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67754,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7282:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333130",
              "id": 67755,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7330:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_310_by_1",
                "typeString": "int_const 310"
              },
              "value": "310"
            },
            "visibility": "internal"
          },
          {
            "id": 67759,
            "nodeType": "VariableDeclaration",
            "src": "7339:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ZERO_INVARIANT",
            "nameLocation": "7365:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67757,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7339:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333131",
              "id": 67758,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7382:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_311_by_1",
                "typeString": "int_const 311"
              },
              "value": "311"
            },
            "visibility": "internal"
          },
          {
            "id": 67762,
            "nodeType": "VariableDeclaration",
            "src": "7391:60:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_INVALID_SECONDS_QUERY",
            "nameLocation": "7417:28:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67760,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7391:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333132",
              "id": 67761,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7448:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_312_by_1",
                "typeString": "int_const 312"
              },
              "value": "312"
            },
            "visibility": "internal"
          },
          {
            "id": 67765,
            "nodeType": "VariableDeclaration",
            "src": "7457:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_NOT_INITIALIZED",
            "nameLocation": "7483:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67763,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7457:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333133",
              "id": 67764,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7508:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_313_by_1",
                "typeString": "int_const 313"
              },
              "value": "313"
            },
            "visibility": "internal"
          },
          {
            "id": 67768,
            "nodeType": "VariableDeclaration",
            "src": "7517:52:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_QUERY_TOO_OLD",
            "nameLocation": "7543:20:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67766,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7517:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333134",
              "id": 67767,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7566:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_314_by_1",
                "typeString": "int_const 314"
              },
              "value": "314"
            },
            "visibility": "internal"
          },
          {
            "id": 67771,
            "nodeType": "VariableDeclaration",
            "src": "7575:52:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_INVALID_INDEX",
            "nameLocation": "7601:20:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67769,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7575:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333135",
              "id": 67770,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7624:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_315_by_1",
                "typeString": "int_const 315"
              },
              "value": "315"
            },
            "visibility": "internal"
          },
          {
            "id": 67774,
            "nodeType": "VariableDeclaration",
            "src": "7633:47:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ORACLE_BAD_SECS",
            "nameLocation": "7659:15:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67772,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7633:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333136",
              "id": 67773,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7677:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_316_by_1",
                "typeString": "int_const 316"
              },
              "value": "316"
            },
            "visibility": "internal"
          },
          {
            "id": 67777,
            "nodeType": "VariableDeclaration",
            "src": "7686:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_END_TIME_TOO_CLOSE",
            "nameLocation": "7712:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67775,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7686:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333137",
              "id": 67776,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7737:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_317_by_1",
                "typeString": "int_const 317"
              },
              "value": "317"
            },
            "visibility": "internal"
          },
          {
            "id": 67780,
            "nodeType": "VariableDeclaration",
            "src": "7746:50:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_ONGOING_UPDATE",
            "nameLocation": "7772:18:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67778,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7746:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333138",
              "id": 67779,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7793:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_318_by_1",
                "typeString": "int_const 318"
              },
              "value": "318"
            },
            "visibility": "internal"
          },
          {
            "id": 67783,
            "nodeType": "VariableDeclaration",
            "src": "7802:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_RATE_TOO_HIGH",
            "nameLocation": "7828:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67781,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7802:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333139",
              "id": 67782,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7848:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_319_by_1",
                "typeString": "int_const 319"
              },
              "value": "319"
            },
            "visibility": "internal"
          },
          {
            "id": 67786,
            "nodeType": "VariableDeclaration",
            "src": "7857:53:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AMP_NO_ONGOING_UPDATE",
            "nameLocation": "7883:21:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67784,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7857:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333230",
              "id": 67785,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7907:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_320_by_1",
                "typeString": "int_const 320"
              },
              "value": "320"
            },
            "visibility": "internal"
          },
          {
            "id": 67789,
            "nodeType": "VariableDeclaration",
            "src": "7916:63:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "STABLE_INVARIANT_DIDNT_CONVERGE",
            "nameLocation": "7942:31:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67787,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7916:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333231",
              "id": 67788,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "7976:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_321_by_1",
                "typeString": "int_const 321"
              },
              "value": "321"
            },
            "visibility": "internal"
          },
          {
            "id": 67792,
            "nodeType": "VariableDeclaration",
            "src": "7985:65:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "STABLE_GET_BALANCE_DIDNT_CONVERGE",
            "nameLocation": "8011:33:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67790,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "7985:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333232",
              "id": 67791,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8047:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_322_by_1",
                "typeString": "int_const 322"
              },
              "value": "322"
            },
            "visibility": "internal"
          },
          {
            "id": 67795,
            "nodeType": "VariableDeclaration",
            "src": "8056:52:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RELAYER_NOT_CONTRACT",
            "nameLocation": "8082:20:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67793,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8056:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333233",
              "id": 67794,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8105:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_323_by_1",
                "typeString": "int_const 323"
              },
              "value": "323"
            },
            "visibility": "internal"
          },
          {
            "id": 67798,
            "nodeType": "VariableDeclaration",
            "src": "8114:60:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BASE_POOL_RELAYER_NOT_CALLED",
            "nameLocation": "8140:28:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67796,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8114:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333234",
              "id": 67797,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8171:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_324_by_1",
                "typeString": "int_const 324"
              },
              "value": "324"
            },
            "visibility": "internal"
          },
          {
            "id": 67801,
            "nodeType": "VariableDeclaration",
            "src": "8180:61:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "REBALANCING_RELAYER_REENTERED",
            "nameLocation": "8206:29:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67799,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8180:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333235",
              "id": 67800,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8238:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_325_by_1",
                "typeString": "int_const 325"
              },
              "value": "325"
            },
            "visibility": "internal"
          },
          {
            "id": 67804,
            "nodeType": "VariableDeclaration",
            "src": "8247:58:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "GRADUAL_UPDATE_TIME_TRAVEL",
            "nameLocation": "8273:26:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67802,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8247:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333236",
              "id": 67803,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8302:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_326_by_1",
                "typeString": "int_const 326"
              },
              "value": "326"
            },
            "visibility": "internal"
          },
          {
            "id": 67807,
            "nodeType": "VariableDeclaration",
            "src": "8311:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAPS_DISABLED",
            "nameLocation": "8337:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67805,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8311:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333237",
              "id": 67806,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8354:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_327_by_1",
                "typeString": "int_const 327"
              },
              "value": "327"
            },
            "visibility": "internal"
          },
          {
            "id": 67810,
            "nodeType": "VariableDeclaration",
            "src": "8363:55:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_IS_NOT_LBP_OWNER",
            "nameLocation": "8389:23:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67808,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8363:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333238",
              "id": 67809,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8415:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_328_by_1",
                "typeString": "int_const 328"
              },
              "value": "328"
            },
            "visibility": "internal"
          },
          {
            "id": 67813,
            "nodeType": "VariableDeclaration",
            "src": "8424:51:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PRICE_RATE_OVERFLOW",
            "nameLocation": "8450:19:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67811,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8424:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333239",
              "id": 67812,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8472:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_329_by_1",
                "typeString": "int_const 329"
              },
              "value": "329"
            },
            "visibility": "internal"
          },
          {
            "id": 67816,
            "nodeType": "VariableDeclaration",
            "src": "8481:75:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_JOIN_EXIT_KIND_WHILE_SWAPS_DISABLED",
            "nameLocation": "8507:43:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67814,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8481:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333330",
              "id": 67815,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8553:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_330_by_1",
                "typeString": "int_const 330"
              },
              "value": "330"
            },
            "visibility": "internal"
          },
          {
            "id": 67819,
            "nodeType": "VariableDeclaration",
            "src": "8562:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "WEIGHT_CHANGE_TOO_FAST",
            "nameLocation": "8588:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67817,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8562:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333331",
              "id": 67818,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8613:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_331_by_1",
                "typeString": "int_const 331"
              },
              "value": "331"
            },
            "visibility": "internal"
          },
          {
            "id": 67822,
            "nodeType": "VariableDeclaration",
            "src": "8622:63:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LOWER_GREATER_THAN_UPPER_TARGET",
            "nameLocation": "8648:31:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67820,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8622:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333332",
              "id": 67821,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8682:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_332_by_1",
                "typeString": "int_const 332"
              },
              "value": "332"
            },
            "visibility": "internal"
          },
          {
            "id": 67825,
            "nodeType": "VariableDeclaration",
            "src": "8691:53:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UPPER_TARGET_TOO_HIGH",
            "nameLocation": "8717:21:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67823,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8691:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333333",
              "id": 67824,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8741:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_333_by_1",
                "typeString": "int_const 333"
              },
              "value": "333"
            },
            "visibility": "internal"
          },
          {
            "id": 67828,
            "nodeType": "VariableDeclaration",
            "src": "8750:56:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_BY_LINEAR_POOL",
            "nameLocation": "8776:24:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67826,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8750:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333334",
              "id": 67827,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8803:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_334_by_1",
                "typeString": "int_const 334"
              },
              "value": "334"
            },
            "visibility": "internal"
          },
          {
            "id": 67831,
            "nodeType": "VariableDeclaration",
            "src": "8812:51:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OUT_OF_TARGET_RANGE",
            "nameLocation": "8838:19:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67829,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8812:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333335",
              "id": 67830,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8860:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_335_by_1",
                "typeString": "int_const 335"
              },
              "value": "335"
            },
            "visibility": "internal"
          },
          {
            "id": 67834,
            "nodeType": "VariableDeclaration",
            "src": "8869:51:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_EXIT_KIND",
            "nameLocation": "8895:19:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67832,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8869:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333336",
              "id": 67833,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8917:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_336_by_1",
                "typeString": "int_const 336"
              },
              "value": "336"
            },
            "visibility": "internal"
          },
          {
            "id": 67837,
            "nodeType": "VariableDeclaration",
            "src": "8926:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNAUTHORIZED_EXIT",
            "nameLocation": "8952:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67835,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8926:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333337",
              "id": 67836,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "8972:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_337_by_1",
                "typeString": "int_const 337"
              },
              "value": "337"
            },
            "visibility": "internal"
          },
          {
            "id": 67840,
            "nodeType": "VariableDeclaration",
            "src": "8981:66:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_MANAGEMENT_SWAP_FEE_PERCENTAGE",
            "nameLocation": "9007:34:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67838,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "8981:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333338",
              "id": 67839,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9044:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_338_by_1",
                "typeString": "int_const 338"
              },
              "value": "338"
            },
            "visibility": "internal"
          },
          {
            "id": 67843,
            "nodeType": "VariableDeclaration",
            "src": "9053:57:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_BY_MANAGED_POOL",
            "nameLocation": "9079:25:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67841,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9053:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333339",
              "id": 67842,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9107:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_339_by_1",
                "typeString": "int_const 339"
              },
              "value": "339"
            },
            "visibility": "internal"
          },
          {
            "id": 67846,
            "nodeType": "VariableDeclaration",
            "src": "9116:57:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_BY_PHANTOM_POOL",
            "nameLocation": "9142:25:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67844,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9116:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333430",
              "id": 67845,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9170:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_340_by_1",
                "typeString": "int_const 340"
              },
              "value": "340"
            },
            "visibility": "internal"
          },
          {
            "id": 67849,
            "nodeType": "VariableDeclaration",
            "src": "9179:65:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKEN_DOES_NOT_HAVE_RATE_PROVIDER",
            "nameLocation": "9205:33:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67847,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9179:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333431",
              "id": 67848,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9241:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_341_by_1",
                "typeString": "int_const 341"
              },
              "value": "341"
            },
            "visibility": "internal"
          },
          {
            "id": 67852,
            "nodeType": "VariableDeclaration",
            "src": "9250:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_INITIALIZATION",
            "nameLocation": "9276:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67850,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9250:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333432",
              "id": 67851,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9301:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_342_by_1",
                "typeString": "int_const 342"
              },
              "value": "342"
            },
            "visibility": "internal"
          },
          {
            "id": 67855,
            "nodeType": "VariableDeclaration",
            "src": "9310:55:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OUT_OF_NEW_TARGET_RANGE",
            "nameLocation": "9336:23:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67853,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9310:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333433",
              "id": 67854,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9362:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_343_by_1",
                "typeString": "int_const 343"
              },
              "value": "343"
            },
            "visibility": "internal"
          },
          {
            "id": 67858,
            "nodeType": "VariableDeclaration",
            "src": "9371:48:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FEATURE_DISABLED",
            "nameLocation": "9397:16:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67856,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9371:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333434",
              "id": 67857,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9416:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_344_by_1",
                "typeString": "int_const 344"
              },
              "value": "344"
            },
            "visibility": "internal"
          },
          {
            "id": 67861,
            "nodeType": "VariableDeclaration",
            "src": "9425:61:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNINITIALIZED_POOL_CONTROLLER",
            "nameLocation": "9451:29:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67859,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9425:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333435",
              "id": 67860,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9483:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_345_by_1",
                "typeString": "int_const 345"
              },
              "value": "345"
            },
            "visibility": "internal"
          },
          {
            "id": 67864,
            "nodeType": "VariableDeclaration",
            "src": "9492:62:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SET_SWAP_FEE_DURING_FEE_CHANGE",
            "nameLocation": "9518:30:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67862,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9492:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333436",
              "id": 67863,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9551:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_346_by_1",
                "typeString": "int_const 346"
              },
              "value": "346"
            },
            "visibility": "internal"
          },
          {
            "id": 67867,
            "nodeType": "VariableDeclaration",
            "src": "9560:63:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SET_SWAP_FEE_PENDING_FEE_CHANGE",
            "nameLocation": "9586:31:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67865,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9560:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333437",
              "id": 67866,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9620:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_347_by_1",
                "typeString": "int_const 347"
              },
              "value": "347"
            },
            "visibility": "internal"
          },
          {
            "id": 67870,
            "nodeType": "VariableDeclaration",
            "src": "9629:66:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CHANGE_TOKENS_DURING_WEIGHT_CHANGE",
            "nameLocation": "9655:34:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67868,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9629:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333438",
              "id": 67869,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9692:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_348_by_1",
                "typeString": "int_const 348"
              },
              "value": "348"
            },
            "visibility": "internal"
          },
          {
            "id": 67873,
            "nodeType": "VariableDeclaration",
            "src": "9701:67:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CHANGE_TOKENS_PENDING_WEIGHT_CHANGE",
            "nameLocation": "9727:35:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67871,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9701:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333439",
              "id": 67872,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9765:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_349_by_1",
                "typeString": "int_const 349"
              },
              "value": "349"
            },
            "visibility": "internal"
          },
          {
            "id": 67876,
            "nodeType": "VariableDeclaration",
            "src": "9774:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_WEIGHT",
            "nameLocation": "9800:10:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67874,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9774:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333530",
              "id": 67875,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9813:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_350_by_1",
                "typeString": "int_const 350"
              },
              "value": "350"
            },
            "visibility": "internal"
          },
          {
            "id": 67879,
            "nodeType": "VariableDeclaration",
            "src": "9822:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNAUTHORIZED_JOIN",
            "nameLocation": "9848:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67877,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9822:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333531",
              "id": 67878,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9868:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_351_by_1",
                "typeString": "int_const 351"
              },
              "value": "351"
            },
            "visibility": "internal"
          },
          {
            "id": 67882,
            "nodeType": "VariableDeclaration",
            "src": "9877:65:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_MANAGEMENT_AUM_FEE_PERCENTAGE",
            "nameLocation": "9903:33:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67880,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9877:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333532",
              "id": 67881,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9939:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_352_by_1",
                "typeString": "int_const 352"
              },
              "value": "352"
            },
            "visibility": "internal"
          },
          {
            "id": 67885,
            "nodeType": "VariableDeclaration",
            "src": "9948:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FRACTIONAL_TARGET",
            "nameLocation": "9974:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67883,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "9948:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333533",
              "id": 67884,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "9994:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_353_by_1",
                "typeString": "int_const 353"
              },
              "value": "353"
            },
            "visibility": "internal"
          },
          {
            "id": 67888,
            "nodeType": "VariableDeclaration",
            "src": "10003:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADD_OR_REMOVE_BPT",
            "nameLocation": "10029:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67886,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10003:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333534",
              "id": 67887,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10049:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_354_by_1",
                "typeString": "int_const 354"
              },
              "value": "354"
            },
            "visibility": "internal"
          },
          {
            "id": 67891,
            "nodeType": "VariableDeclaration",
            "src": "10058:62:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_CIRCUIT_BREAKER_BOUNDS",
            "nameLocation": "10084:30:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67889,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10058:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333535",
              "id": 67890,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10117:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_355_by_1",
                "typeString": "int_const 355"
              },
              "value": "355"
            },
            "visibility": "internal"
          },
          {
            "id": 67894,
            "nodeType": "VariableDeclaration",
            "src": "10126:55:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CIRCUIT_BREAKER_TRIPPED",
            "nameLocation": "10152:23:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67892,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10126:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333536",
              "id": 67893,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10178:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_356_by_1",
                "typeString": "int_const 356"
              },
              "value": "356"
            },
            "visibility": "internal"
          },
          {
            "id": 67897,
            "nodeType": "VariableDeclaration",
            "src": "10187:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MALICIOUS_QUERY_REVERT",
            "nameLocation": "10213:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67895,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10187:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333537",
              "id": 67896,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10238:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_357_by_1",
                "typeString": "int_const 357"
              },
              "value": "357"
            },
            "visibility": "internal"
          },
          {
            "id": 67900,
            "nodeType": "VariableDeclaration",
            "src": "10247:52:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "JOINS_EXITS_DISABLED",
            "nameLocation": "10273:20:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67898,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10247:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "333538",
              "id": 67899,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10296:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_358_by_1",
                "typeString": "int_const 358"
              },
              "value": "358"
            },
            "visibility": "internal"
          },
          {
            "id": 67903,
            "nodeType": "VariableDeclaration",
            "src": "10317:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "REENTRANCY",
            "nameLocation": "10343:10:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67901,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10317:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343030",
              "id": 67902,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10356:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_400_by_1",
                "typeString": "int_const 400"
              },
              "value": "400"
            },
            "visibility": "internal"
          },
          {
            "id": 67906,
            "nodeType": "VariableDeclaration",
            "src": "10365:50:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SENDER_NOT_ALLOWED",
            "nameLocation": "10391:18:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67904,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10365:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343031",
              "id": 67905,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10412:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_401_by_1",
                "typeString": "int_const 401"
              },
              "value": "401"
            },
            "visibility": "internal"
          },
          {
            "id": 67909,
            "nodeType": "VariableDeclaration",
            "src": "10421:38:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PAUSED",
            "nameLocation": "10447:6:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67907,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10421:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343032",
              "id": 67908,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10456:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_402_by_1",
                "typeString": "int_const 402"
              },
              "value": "402"
            },
            "visibility": "internal"
          },
          {
            "id": 67912,
            "nodeType": "VariableDeclaration",
            "src": "10465:52:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "PAUSE_WINDOW_EXPIRED",
            "nameLocation": "10491:20:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67910,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10465:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343033",
              "id": 67911,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10514:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_403_by_1",
                "typeString": "int_const 403"
              },
              "value": "403"
            },
            "visibility": "internal"
          },
          {
            "id": 67915,
            "nodeType": "VariableDeclaration",
            "src": "10523:57:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_PAUSE_WINDOW_DURATION",
            "nameLocation": "10549:25:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67913,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10523:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343034",
              "id": 67914,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10577:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_404_by_1",
                "typeString": "int_const 404"
              },
              "value": "404"
            },
            "visibility": "internal"
          },
          {
            "id": 67918,
            "nodeType": "VariableDeclaration",
            "src": "10586:58:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_BUFFER_PERIOD_DURATION",
            "nameLocation": "10612:26:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67916,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10586:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343035",
              "id": 67917,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10641:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_405_by_1",
                "typeString": "int_const 405"
              },
              "value": "405"
            },
            "visibility": "internal"
          },
          {
            "id": 67921,
            "nodeType": "VariableDeclaration",
            "src": "10650:52:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_BALANCE",
            "nameLocation": "10676:20:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67919,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10650:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343036",
              "id": 67920,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10699:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_406_by_1",
                "typeString": "int_const 406"
              },
              "value": "406"
            },
            "visibility": "internal"
          },
          {
            "id": 67924,
            "nodeType": "VariableDeclaration",
            "src": "10708:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_ALLOWANCE",
            "nameLocation": "10734:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67922,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10708:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343037",
              "id": 67923,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10759:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_407_by_1",
                "typeString": "int_const 407"
              },
              "value": "407"
            },
            "visibility": "internal"
          },
          {
            "id": 67927,
            "nodeType": "VariableDeclaration",
            "src": "10768:64:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_FROM_ZERO_ADDRESS",
            "nameLocation": "10794:32:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67925,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10768:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343038",
              "id": 67926,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10829:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_408_by_1",
                "typeString": "int_const 408"
              },
              "value": "408"
            },
            "visibility": "internal"
          },
          {
            "id": 67930,
            "nodeType": "VariableDeclaration",
            "src": "10838:62:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_TO_ZERO_ADDRESS",
            "nameLocation": "10864:30:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67928,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10838:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343039",
              "id": 67929,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10897:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_409_by_1",
                "typeString": "int_const 409"
              },
              "value": "409"
            },
            "visibility": "internal"
          },
          {
            "id": 67933,
            "nodeType": "VariableDeclaration",
            "src": "10906:58:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_MINT_TO_ZERO_ADDRESS",
            "nameLocation": "10932:26:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67931,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10906:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343130",
              "id": 67932,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "10961:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_410_by_1",
                "typeString": "int_const 410"
              },
              "value": "410"
            },
            "visibility": "internal"
          },
          {
            "id": 67936,
            "nodeType": "VariableDeclaration",
            "src": "10970:60:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_BURN_FROM_ZERO_ADDRESS",
            "nameLocation": "10996:28:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67934,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "10970:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343131",
              "id": 67935,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11027:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_411_by_1",
                "typeString": "int_const 411"
              },
              "value": "411"
            },
            "visibility": "internal"
          },
          {
            "id": 67939,
            "nodeType": "VariableDeclaration",
            "src": "11036:63:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_APPROVE_FROM_ZERO_ADDRESS",
            "nameLocation": "11062:31:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67937,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11036:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343132",
              "id": 67938,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11096:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_412_by_1",
                "typeString": "int_const 412"
              },
              "value": "412"
            },
            "visibility": "internal"
          },
          {
            "id": 67942,
            "nodeType": "VariableDeclaration",
            "src": "11105:61:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_APPROVE_TO_ZERO_ADDRESS",
            "nameLocation": "11131:29:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67940,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11105:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343133",
              "id": 67941,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11163:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_413_by_1",
                "typeString": "int_const 413"
              },
              "value": "413"
            },
            "visibility": "internal"
          },
          {
            "id": 67945,
            "nodeType": "VariableDeclaration",
            "src": "11172:64:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_EXCEEDS_ALLOWANCE",
            "nameLocation": "11198:32:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67943,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11172:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343134",
              "id": 67944,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11233:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_414_by_1",
                "typeString": "int_const 414"
              },
              "value": "414"
            },
            "visibility": "internal"
          },
          {
            "id": 67948,
            "nodeType": "VariableDeclaration",
            "src": "11242:68:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_DECREASED_ALLOWANCE_BELOW_ZERO",
            "nameLocation": "11268:36:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67946,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11242:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343135",
              "id": 67947,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11307:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_415_by_1",
                "typeString": "int_const 415"
              },
              "value": "415"
            },
            "visibility": "internal"
          },
          {
            "id": 67951,
            "nodeType": "VariableDeclaration",
            "src": "11316:62:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_TRANSFER_EXCEEDS_BALANCE",
            "nameLocation": "11342:30:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67949,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11316:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343136",
              "id": 67950,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11375:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_416_by_1",
                "typeString": "int_const 416"
              },
              "value": "416"
            },
            "visibility": "internal"
          },
          {
            "id": 67954,
            "nodeType": "VariableDeclaration",
            "src": "11384:60:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_BURN_EXCEEDS_ALLOWANCE",
            "nameLocation": "11410:28:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67952,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11384:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343137",
              "id": 67953,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11441:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_417_by_1",
                "typeString": "int_const 417"
              },
              "value": "417"
            },
            "visibility": "internal"
          },
          {
            "id": 67957,
            "nodeType": "VariableDeclaration",
            "src": "11450:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SAFE_ERC20_CALL_FAILED",
            "nameLocation": "11476:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67955,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11450:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343138",
              "id": 67956,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11501:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_418_by_1",
                "typeString": "int_const 418"
              },
              "value": "418"
            },
            "visibility": "internal"
          },
          {
            "id": 67960,
            "nodeType": "VariableDeclaration",
            "src": "11510:60:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_INSUFFICIENT_BALANCE",
            "nameLocation": "11536:28:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67958,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11510:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343139",
              "id": 67959,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11567:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_419_by_1",
                "typeString": "int_const 419"
              },
              "value": "419"
            },
            "visibility": "internal"
          },
          {
            "id": 67963,
            "nodeType": "VariableDeclaration",
            "src": "11576:57:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_CANNOT_SEND_VALUE",
            "nameLocation": "11602:25:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67961,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11576:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343230",
              "id": 67962,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11630:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_420_by_1",
                "typeString": "int_const 420"
              },
              "value": "420"
            },
            "visibility": "internal"
          },
          {
            "id": 67966,
            "nodeType": "VariableDeclaration",
            "src": "11639:63:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SAFE_CAST_VALUE_CANT_FIT_INT256",
            "nameLocation": "11665:31:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67964,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11639:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343231",
              "id": 67965,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11699:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_421_by_1",
                "typeString": "int_const 421"
              },
              "value": "421"
            },
            "visibility": "internal"
          },
          {
            "id": 67969,
            "nodeType": "VariableDeclaration",
            "src": "11708:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "GRANT_SENDER_NOT_ADMIN",
            "nameLocation": "11734:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67967,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11708:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343232",
              "id": 67968,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11759:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_422_by_1",
                "typeString": "int_const 422"
              },
              "value": "422"
            },
            "visibility": "internal"
          },
          {
            "id": 67972,
            "nodeType": "VariableDeclaration",
            "src": "11768:55:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "REVOKE_SENDER_NOT_ADMIN",
            "nameLocation": "11794:23:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67970,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11768:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343233",
              "id": 67971,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11820:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_423_by_1",
                "typeString": "int_const 423"
              },
              "value": "423"
            },
            "visibility": "internal"
          },
          {
            "id": 67975,
            "nodeType": "VariableDeclaration",
            "src": "11829:59:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RENOUNCE_SENDER_NOT_ALLOWED",
            "nameLocation": "11855:27:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67973,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11829:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343234",
              "id": 67974,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11885:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_424_by_1",
                "typeString": "int_const 424"
              },
              "value": "424"
            },
            "visibility": "internal"
          },
          {
            "id": 67978,
            "nodeType": "VariableDeclaration",
            "src": "11894:53:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BUFFER_PERIOD_EXPIRED",
            "nameLocation": "11920:21:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67976,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11894:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343235",
              "id": 67977,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "11944:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_425_by_1",
                "typeString": "int_const 425"
              },
              "value": "425"
            },
            "visibility": "internal"
          },
          {
            "id": 67981,
            "nodeType": "VariableDeclaration",
            "src": "11953:51:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_IS_NOT_OWNER",
            "nameLocation": "11979:19:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67979,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11953:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343236",
              "id": 67980,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12001:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_426_by_1",
                "typeString": "int_const 426"
              },
              "value": "426"
            },
            "visibility": "internal"
          },
          {
            "id": 67984,
            "nodeType": "VariableDeclaration",
            "src": "12010:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NEW_OWNER_IS_ZERO",
            "nameLocation": "12036:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67982,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12010:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343237",
              "id": 67983,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12056:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_427_by_1",
                "typeString": "int_const 427"
              },
              "value": "427"
            },
            "visibility": "internal"
          },
          {
            "id": 67987,
            "nodeType": "VariableDeclaration",
            "src": "12065:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CODE_DEPLOYMENT_FAILED",
            "nameLocation": "12091:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67985,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12065:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343238",
              "id": 67986,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12116:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_428_by_1",
                "typeString": "int_const 428"
              },
              "value": "428"
            },
            "visibility": "internal"
          },
          {
            "id": 67990,
            "nodeType": "VariableDeclaration",
            "src": "12125:52:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALL_TO_NON_CONTRACT",
            "nameLocation": "12151:20:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67988,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12125:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343239",
              "id": 67989,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12174:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_429_by_1",
                "typeString": "int_const 429"
              },
              "value": "429"
            },
            "visibility": "internal"
          },
          {
            "id": 67993,
            "nodeType": "VariableDeclaration",
            "src": "12183:53:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "LOW_LEVEL_CALL_FAILED",
            "nameLocation": "12209:21:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67991,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12183:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343330",
              "id": 67992,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12233:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_430_by_1",
                "typeString": "int_const 430"
              },
              "value": "430"
            },
            "visibility": "internal"
          },
          {
            "id": 67996,
            "nodeType": "VariableDeclaration",
            "src": "12242:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_PAUSED",
            "nameLocation": "12268:10:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67994,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12242:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343331",
              "id": 67995,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12281:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_431_by_1",
                "typeString": "int_const 431"
              },
              "value": "431"
            },
            "visibility": "internal"
          },
          {
            "id": 67999,
            "nodeType": "VariableDeclaration",
            "src": "12290:59:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_ALREADY_ALLOWLISTED",
            "nameLocation": "12316:27:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67997,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12290:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343332",
              "id": 67998,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12346:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_432_by_1",
                "typeString": "int_const 432"
              },
              "value": "432"
            },
            "visibility": "internal"
          },
          {
            "id": 68002,
            "nodeType": "VariableDeclaration",
            "src": "12355:55:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_NOT_ALLOWLISTED",
            "nameLocation": "12381:23:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68000,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12355:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343333",
              "id": 68001,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12407:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_433_by_1",
                "typeString": "int_const 433"
              },
              "value": "433"
            },
            "visibility": "internal"
          },
          {
            "id": 68005,
            "nodeType": "VariableDeclaration",
            "src": "12416:58:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ERC20_BURN_EXCEEDS_BALANCE",
            "nameLocation": "12442:26:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68003,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12416:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343334",
              "id": 68004,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12471:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_434_by_1",
                "typeString": "int_const 434"
              },
              "value": "434"
            },
            "visibility": "internal"
          },
          {
            "id": 68008,
            "nodeType": "VariableDeclaration",
            "src": "12480:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_OPERATION",
            "nameLocation": "12506:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68006,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12480:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343335",
              "id": 68007,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12526:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_435_by_1",
                "typeString": "int_const 435"
              },
              "value": "435"
            },
            "visibility": "internal"
          },
          {
            "id": 68011,
            "nodeType": "VariableDeclaration",
            "src": "12535:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CODEC_OVERFLOW",
            "nameLocation": "12561:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68009,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12535:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343336",
              "id": 68010,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12578:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_436_by_1",
                "typeString": "int_const 436"
              },
              "value": "436"
            },
            "visibility": "internal"
          },
          {
            "id": 68014,
            "nodeType": "VariableDeclaration",
            "src": "12587:48:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "IN_RECOVERY_MODE",
            "nameLocation": "12613:16:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68012,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12587:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343337",
              "id": 68013,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12632:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_437_by_1",
                "typeString": "int_const 437"
              },
              "value": "437"
            },
            "visibility": "internal"
          },
          {
            "id": 68017,
            "nodeType": "VariableDeclaration",
            "src": "12641:52:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_IN_RECOVERY_MODE",
            "nameLocation": "12667:20:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68015,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12641:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343338",
              "id": 68016,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12690:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_438_by_1",
                "typeString": "int_const 438"
              },
              "value": "438"
            },
            "visibility": "internal"
          },
          {
            "id": 68020,
            "nodeType": "VariableDeclaration",
            "src": "12699:47:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INDUCED_FAILURE",
            "nameLocation": "12725:15:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68018,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12699:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343339",
              "id": 68019,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12743:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_439_by_1",
                "typeString": "int_const 439"
              },
              "value": "439"
            },
            "visibility": "internal"
          },
          {
            "id": 68023,
            "nodeType": "VariableDeclaration",
            "src": "12752:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EXPIRED_SIGNATURE",
            "nameLocation": "12778:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68021,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12752:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343430",
              "id": 68022,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12798:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_440_by_1",
                "typeString": "int_const 440"
              },
              "value": "440"
            },
            "visibility": "internal"
          },
          {
            "id": 68026,
            "nodeType": "VariableDeclaration",
            "src": "12807:51:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MALFORMED_SIGNATURE",
            "nameLocation": "12833:19:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68024,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12807:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343431",
              "id": 68025,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12855:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_441_by_1",
                "typeString": "int_const 441"
              },
              "value": "441"
            },
            "visibility": "internal"
          },
          {
            "id": 68029,
            "nodeType": "VariableDeclaration",
            "src": "12864:63:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SAFE_CAST_VALUE_CANT_FIT_UINT64",
            "nameLocation": "12890:31:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68027,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12864:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343432",
              "id": 68028,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12924:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_442_by_1",
                "typeString": "int_const 442"
              },
              "value": "442"
            },
            "visibility": "internal"
          },
          {
            "id": 68032,
            "nodeType": "VariableDeclaration",
            "src": "12933:50:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNHANDLED_FEE_TYPE",
            "nameLocation": "12959:18:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68030,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12933:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343433",
              "id": 68031,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "12980:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_443_by_1",
                "typeString": "int_const 443"
              },
              "value": "443"
            },
            "visibility": "internal"
          },
          {
            "id": 68035,
            "nodeType": "VariableDeclaration",
            "src": "12989:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BURN_FROM_ZERO",
            "nameLocation": "13015:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68033,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "12989:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "343434",
              "id": 68034,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13032:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_444_by_1",
                "typeString": "int_const 444"
              },
              "value": "444"
            },
            "visibility": "internal"
          },
          {
            "id": 68038,
            "nodeType": "VariableDeclaration",
            "src": "13055:47:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_POOL_ID",
            "nameLocation": "13081:15:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68036,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13055:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353030",
              "id": 68037,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13099:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_500_by_1",
                "typeString": "int_const 500"
              },
              "value": "500"
            },
            "visibility": "internal"
          },
          {
            "id": 68041,
            "nodeType": "VariableDeclaration",
            "src": "13108:47:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CALLER_NOT_POOL",
            "nameLocation": "13134:15:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68039,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13108:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353031",
              "id": 68040,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13152:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_501_by_1",
                "typeString": "int_const 501"
              },
              "value": "501"
            },
            "visibility": "internal"
          },
          {
            "id": 68044,
            "nodeType": "VariableDeclaration",
            "src": "13161:56:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SENDER_NOT_ASSET_MANAGER",
            "nameLocation": "13187:24:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68042,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13161:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353032",
              "id": 68043,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13214:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_502_by_1",
                "typeString": "int_const 502"
              },
              "value": "502"
            },
            "visibility": "internal"
          },
          {
            "id": 68047,
            "nodeType": "VariableDeclaration",
            "src": "13223:57:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "USER_DOESNT_ALLOW_RELAYER",
            "nameLocation": "13249:25:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68045,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13223:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353033",
              "id": 68046,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13277:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_503_by_1",
                "typeString": "int_const 503"
              },
              "value": "503"
            },
            "visibility": "internal"
          },
          {
            "id": 68050,
            "nodeType": "VariableDeclaration",
            "src": "13286:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_SIGNATURE",
            "nameLocation": "13312:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68048,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13286:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353034",
              "id": 68049,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13332:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_504_by_1",
                "typeString": "int_const 504"
              },
              "value": "504"
            },
            "visibility": "internal"
          },
          {
            "id": 68053,
            "nodeType": "VariableDeclaration",
            "src": "13341:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EXIT_BELOW_MIN",
            "nameLocation": "13367:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68051,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13341:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353035",
              "id": 68052,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13384:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_505_by_1",
                "typeString": "int_const 505"
              },
              "value": "505"
            },
            "visibility": "internal"
          },
          {
            "id": 68056,
            "nodeType": "VariableDeclaration",
            "src": "13393:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "JOIN_ABOVE_MAX",
            "nameLocation": "13419:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68054,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13393:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353036",
              "id": 68055,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13436:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_506_by_1",
                "typeString": "int_const 506"
              },
              "value": "506"
            },
            "visibility": "internal"
          },
          {
            "id": 68059,
            "nodeType": "VariableDeclaration",
            "src": "13445:42:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAP_LIMIT",
            "nameLocation": "13471:10:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68057,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13445:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353037",
              "id": 68058,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13484:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_507_by_1",
                "typeString": "int_const 507"
              },
              "value": "507"
            },
            "visibility": "internal"
          },
          {
            "id": 68062,
            "nodeType": "VariableDeclaration",
            "src": "13493:45:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAP_DEADLINE",
            "nameLocation": "13519:13:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68060,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13493:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353038",
              "id": 68061,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13535:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_508_by_1",
                "typeString": "int_const 508"
              },
              "value": "508"
            },
            "visibility": "internal"
          },
          {
            "id": 68065,
            "nodeType": "VariableDeclaration",
            "src": "13544:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CANNOT_SWAP_SAME_TOKEN",
            "nameLocation": "13570:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68063,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13544:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353039",
              "id": 68064,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13595:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_509_by_1",
                "typeString": "int_const 509"
              },
              "value": "509"
            },
            "visibility": "internal"
          },
          {
            "id": 68068,
            "nodeType": "VariableDeclaration",
            "src": "13604:60:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNKNOWN_AMOUNT_IN_FIRST_SWAP",
            "nameLocation": "13630:28:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68066,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13604:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353130",
              "id": 68067,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13661:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_510_by_1",
                "typeString": "int_const 510"
              },
              "value": "510"
            },
            "visibility": "internal"
          },
          {
            "id": 68071,
            "nodeType": "VariableDeclaration",
            "src": "13670:60:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MALCONSTRUCTED_MULTIHOP_SWAP",
            "nameLocation": "13696:28:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68069,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13670:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353131",
              "id": 68070,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13727:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_511_by_1",
                "typeString": "int_const 511"
              },
              "value": "511"
            },
            "visibility": "internal"
          },
          {
            "id": 68074,
            "nodeType": "VariableDeclaration",
            "src": "13736:57:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INTERNAL_BALANCE_OVERFLOW",
            "nameLocation": "13762:25:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68072,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13736:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353132",
              "id": 68073,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13790:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_512_by_1",
                "typeString": "int_const 512"
              },
              "value": "512"
            },
            "visibility": "internal"
          },
          {
            "id": 68077,
            "nodeType": "VariableDeclaration",
            "src": "13799:61:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_INTERNAL_BALANCE",
            "nameLocation": "13825:29:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68075,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13799:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353133",
              "id": 68076,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13857:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_513_by_1",
                "typeString": "int_const 513"
              },
              "value": "513"
            },
            "visibility": "internal"
          },
          {
            "id": 68080,
            "nodeType": "VariableDeclaration",
            "src": "13866:60:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_ETH_INTERNAL_BALANCE",
            "nameLocation": "13892:28:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68078,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13866:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353134",
              "id": 68079,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13923:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_514_by_1",
                "typeString": "int_const 514"
              },
              "value": "514"
            },
            "visibility": "internal"
          },
          {
            "id": 68083,
            "nodeType": "VariableDeclaration",
            "src": "13932:57:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVALID_POST_LOAN_BALANCE",
            "nameLocation": "13958:25:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68081,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13932:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353135",
              "id": 68082,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "13986:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_515_by_1",
                "typeString": "int_const 515"
              },
              "value": "515"
            },
            "visibility": "internal"
          },
          {
            "id": 68086,
            "nodeType": "VariableDeclaration",
            "src": "13995:48:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_ETH",
            "nameLocation": "14021:16:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68084,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "13995:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353136",
              "id": 68085,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14040:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_516_by_1",
                "typeString": "int_const 516"
              },
              "value": "516"
            },
            "visibility": "internal"
          },
          {
            "id": 68089,
            "nodeType": "VariableDeclaration",
            "src": "14049:47:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNALLOCATED_ETH",
            "nameLocation": "14075:15:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68087,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14049:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353137",
              "id": 68088,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14093:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_517_by_1",
                "typeString": "int_const 517"
              },
              "value": "517"
            },
            "visibility": "internal"
          },
          {
            "id": 68092,
            "nodeType": "VariableDeclaration",
            "src": "14102:44:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ETH_TRANSFER",
            "nameLocation": "14128:12:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68090,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14102:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353138",
              "id": 68091,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14143:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_518_by_1",
                "typeString": "int_const 518"
              },
              "value": "518"
            },
            "visibility": "internal"
          },
          {
            "id": 68095,
            "nodeType": "VariableDeclaration",
            "src": "14152:55:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CANNOT_USE_ETH_SENTINEL",
            "nameLocation": "14178:23:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68093,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14152:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353139",
              "id": 68094,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14204:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_519_by_1",
                "typeString": "int_const 519"
              },
              "value": "519"
            },
            "visibility": "internal"
          },
          {
            "id": 68098,
            "nodeType": "VariableDeclaration",
            "src": "14213:47:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKENS_MISMATCH",
            "nameLocation": "14239:15:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68096,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14213:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353230",
              "id": 68097,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14257:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_520_by_1",
                "typeString": "int_const 520"
              },
              "value": "520"
            },
            "visibility": "internal"
          },
          {
            "id": 68101,
            "nodeType": "VariableDeclaration",
            "src": "14266:52:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKEN_NOT_REGISTERED",
            "nameLocation": "14292:20:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68099,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14266:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353231",
              "id": 68100,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14315:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_521_by_1",
                "typeString": "int_const 521"
              },
              "value": "521"
            },
            "visibility": "internal"
          },
          {
            "id": 68104,
            "nodeType": "VariableDeclaration",
            "src": "14324:56:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKEN_ALREADY_REGISTERED",
            "nameLocation": "14350:24:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68102,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14324:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353232",
              "id": 68103,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14377:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_522_by_1",
                "typeString": "int_const 522"
              },
              "value": "522"
            },
            "visibility": "internal"
          },
          {
            "id": 68107,
            "nodeType": "VariableDeclaration",
            "src": "14386:50:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKENS_ALREADY_SET",
            "nameLocation": "14412:18:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68105,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14386:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353233",
              "id": 68106,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14433:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_523_by_1",
                "typeString": "int_const 523"
              },
              "value": "523"
            },
            "visibility": "internal"
          },
          {
            "id": 68110,
            "nodeType": "VariableDeclaration",
            "src": "14442:55:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TOKENS_LENGTH_MUST_BE_2",
            "nameLocation": "14468:23:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68108,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14442:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353234",
              "id": 68109,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14494:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_524_by_1",
                "typeString": "int_const 524"
              },
              "value": "524"
            },
            "visibility": "internal"
          },
          {
            "id": 68113,
            "nodeType": "VariableDeclaration",
            "src": "14503:53:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NONZERO_TOKEN_BALANCE",
            "nameLocation": "14529:21:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68111,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14503:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353235",
              "id": 68112,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14553:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_525_by_1",
                "typeString": "int_const 525"
              },
              "value": "525"
            },
            "visibility": "internal"
          },
          {
            "id": 68116,
            "nodeType": "VariableDeclaration",
            "src": "14562:54:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BALANCE_TOTAL_OVERFLOW",
            "nameLocation": "14588:22:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68114,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14562:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353236",
              "id": 68115,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14613:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_526_by_1",
                "typeString": "int_const 526"
              },
              "value": "526"
            },
            "visibility": "internal"
          },
          {
            "id": 68119,
            "nodeType": "VariableDeclaration",
            "src": "14622:46:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "POOL_NO_TOKENS",
            "nameLocation": "14648:14:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68117,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14622:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353237",
              "id": 68118,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14665:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_527_by_1",
                "typeString": "int_const 527"
              },
              "value": "527"
            },
            "visibility": "internal"
          },
          {
            "id": 68122,
            "nodeType": "VariableDeclaration",
            "src": "14674:63:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_FLASH_LOAN_BALANCE",
            "nameLocation": "14700:31:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68120,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14674:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "353238",
              "id": 68121,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14734:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_528_by_1",
                "typeString": "int_const 528"
              },
              "value": "528"
            },
            "visibility": "internal"
          },
          {
            "id": 68125,
            "nodeType": "VariableDeclaration",
            "src": "14756:60:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SWAP_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "14782:28:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68123,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14756:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363030",
              "id": 68124,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14813:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_600_by_1",
                "typeString": "int_const 600"
              },
              "value": "600"
            },
            "visibility": "internal"
          },
          {
            "id": 68128,
            "nodeType": "VariableDeclaration",
            "src": "14822:66:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "FLASH_LOAN_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "14848:34:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68126,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14822:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363031",
              "id": 68127,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14885:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_601_by_1",
                "typeString": "int_const 601"
              },
              "value": "601"
            },
            "visibility": "internal"
          },
          {
            "id": 68131,
            "nodeType": "VariableDeclaration",
            "src": "14894:66:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT",
            "nameLocation": "14920:34:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68129,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14894:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363032",
              "id": 68130,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "14957:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_602_by_1",
                "typeString": "int_const 602"
              },
              "value": "602"
            },
            "visibility": "internal"
          },
          {
            "id": 68134,
            "nodeType": "VariableDeclaration",
            "src": "14966:59:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "AUM_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "14992:27:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68132,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "14966:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "363033",
              "id": 68133,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15022:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_603_by_1",
                "typeString": "int_const 603"
              },
              "value": "603"
            },
            "visibility": "internal"
          },
          {
            "id": 68137,
            "nodeType": "VariableDeclaration",
            "src": "15051:64:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SPLITTER_FEE_PERCENTAGE_TOO_HIGH",
            "nameLocation": "15077:32:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68135,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15051:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "373030",
              "id": 68136,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15112:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_700_by_1",
                "typeString": "int_const 700"
              },
              "value": "700"
            },
            "visibility": "internal"
          },
          {
            "id": 68140,
            "nodeType": "VariableDeclaration",
            "src": "15134:45:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNIMPLEMENTED",
            "nameLocation": "15160:13:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68138,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15134:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "393938",
              "id": 68139,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15176:3:113",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_998_by_1",
                "typeString": "int_const 998"
              },
              "value": "998"
            },
            "visibility": "internal"
          },
          {
            "id": 68143,
            "nodeType": "VariableDeclaration",
            "src": "15185:49:113",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SHOULD_NOT_HAPPEN",
            "nameLocation": "15211:17:113",
            "scope": 68144,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 68141,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "15185:7:113",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "393939",
              "id": 68142,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "15231:3:113",
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
          68144
        ],
        "name": "BalancerErrors",
        "nameLocation": "5214:14:113",
        "scope": 68145,
        "usedErrors": []
      }
    ],
    "license": "GPL-3.0-or-later"
  },
  "id": 113
} as const;
