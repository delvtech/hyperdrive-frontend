export const StdMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220706f0a3feb009777da941314c157acafee51d4f86bb41773f8cd3c5eb709165c64736f6c63430008130033",
    "sourceMap": "65:1294:59:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;65:1294:59;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220706f0a3feb009777da941314c157acafee51d4f86bb41773f8cd3c5eb709165c64736f6c63430008130033",
    "sourceMap": "65:1294:59:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdMath.sol\":\"stdMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]}},\"version\":1}",
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
        "lib/forge-std/src/StdMath.sol": "stdMath"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/StdMath.sol": {
        "keccak256": "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
        "urls": [
          "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
          "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/StdMath.sol",
    "id": 23110,
    "exportedSymbols": {
      "stdMath": [
        23109
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:1328:59",
    "nodes": [
      {
        "id": 22969,
        "nodeType": "PragmaDirective",
        "src": "32:31:59",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".2",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 23109,
        "nodeType": "ContractDefinition",
        "src": "65:1294:59",
        "nodes": [
          {
            "id": 22973,
            "nodeType": "VariableDeclaration",
            "src": "87:115:59",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INT256_MIN",
            "nameLocation": "111:10:59",
            "scope": 23109,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 22970,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "87:6:59",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "id": 22972,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "nodeType": "UnaryOperation",
              "operator": "-",
              "prefix": true,
              "src": "124:78:59",
              "subExpression": {
                "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
                "id": 22971,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "125:77:59",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                  "typeString": "int_const 5789...(69 digits omitted)...9968"
                },
                "value": "57896044618658097711785492504343953926634992332820282019728792003956564819968"
              },
              "typeDescriptions": {
                "typeIdentifier": "t_rational_minus_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                "typeString": "int_const -578...(70 digits omitted)...9968"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22999,
            "nodeType": "FunctionDefinition",
            "src": "209:306:59",
            "nodes": [],
            "body": {
              "id": 22998,
              "nodeType": "Block",
              "src": "264:251:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 22982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 22980,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22975,
                      "src": "342:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 22981,
                      "name": "INT256_MIN",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22973,
                      "src": "347:10:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "342:15:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 22986,
                  "nodeType": "IfStatement",
                  "src": "338:130:59",
                  "trueBody": {
                    "id": 22985,
                    "nodeType": "Block",
                    "src": "359:109:59",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
                          "id": 22983,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "380:77:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                            "typeString": "int_const 5789...(69 digits omitted)...9968"
                          },
                          "value": "57896044618658097711785492504343953926634992332820282019728792003956564819968"
                        },
                        "functionReturnParameters": 22979,
                        "id": 22984,
                        "nodeType": "Return",
                        "src": "373:84:59"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 22991,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 22989,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22975,
                            "src": "493:1:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 22990,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "497:1:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "493:5:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseExpression": {
                          "id": 22994,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "-",
                          "prefix": true,
                          "src": "505:2:59",
                          "subExpression": {
                            "id": 22993,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22975,
                            "src": "506:1:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 22995,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "Conditional",
                        "src": "493:14:59",
                        "trueExpression": {
                          "id": 22992,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22975,
                          "src": "501:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 22988,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "485:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 22987,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "485:7:59",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 22996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "485:23:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 22979,
                  "id": 22997,
                  "nodeType": "Return",
                  "src": "478:30:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "abs",
            "nameLocation": "218:3:59",
            "parameters": {
              "id": 22976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22975,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "229:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 22999,
                  "src": "222:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 22974,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "222:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "221:10:59"
            },
            "returnParameters": {
              "id": 22979,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22978,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 22999,
                  "src": "255:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22977,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "254:9:59"
            },
            "scope": 23109,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23020,
            "nodeType": "FunctionDefinition",
            "src": "521:114:59",
            "nodes": [],
            "body": {
              "id": 23019,
              "nodeType": "Block",
              "src": "590:45:59",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 23010,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23008,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23001,
                        "src": "607:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 23009,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23003,
                        "src": "611:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "607:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 23016,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23014,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23003,
                        "src": "623:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 23015,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23001,
                        "src": "627:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "623:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 23017,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "607:21:59",
                    "trueExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 23013,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23011,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23001,
                        "src": "615:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 23012,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23003,
                        "src": "619:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "615:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23007,
                  "id": 23018,
                  "nodeType": "Return",
                  "src": "600:28:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "delta",
            "nameLocation": "530:5:59",
            "parameters": {
              "id": 23004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23001,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "544:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 23020,
                  "src": "536:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "536:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23003,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "555:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 23020,
                  "src": "547:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23002,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "535:22:59"
            },
            "returnParameters": {
              "id": 23007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23006,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23020,
                  "src": "581:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23005,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "581:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "580:9:59"
            },
            "scope": 23109,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23056,
            "nodeType": "FunctionDefinition",
            "src": "641:352:59",
            "nodes": [],
            "body": {
              "id": 23055,
              "nodeType": "Block",
              "src": "708:285:59",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 23035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 23031,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 23029,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23022,
                            "src": "847:1:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "^",
                          "rightExpression": {
                            "id": 23030,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23024,
                            "src": "851:1:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "847:5:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 23032,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "846:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 23034,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "-",
                      "prefix": true,
                      "src": "856:2:59",
                      "subExpression": {
                        "hexValue": "31",
                        "id": 23033,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "857:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_minus_1_by_1",
                        "typeString": "int_const -1"
                      }
                    },
                    "src": "846:12:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23046,
                  "nodeType": "IfStatement",
                  "src": "842:71:59",
                  "trueBody": {
                    "id": 23045,
                    "nodeType": "Block",
                    "src": "860:53:59",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 23038,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 23022,
                                  "src": "891:1:59",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                ],
                                "id": 23037,
                                "name": "abs",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22999,
                                "src": "887:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                  "typeString": "function (int256) pure returns (uint256)"
                                }
                              },
                              "id": 23039,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "887:6:59",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 23041,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 23024,
                                  "src": "899:1:59",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                ],
                                "id": 23040,
                                "name": "abs",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22999,
                                "src": "895:3:59",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                  "typeString": "function (int256) pure returns (uint256)"
                                }
                              },
                              "id": 23042,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "895:6:59",
                              "tryCall": false,
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 23036,
                            "name": "delta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              23020,
                              23056
                            ],
                            "referencedDeclaration": 23020,
                            "src": "881:5:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 23043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "881:21:59",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 23028,
                        "id": 23044,
                        "nodeType": "Return",
                        "src": "874:28:59"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 23053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 23048,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23022,
                          "src": "975:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        ],
                        "id": 23047,
                        "name": "abs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22999,
                        "src": "971:3:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                          "typeString": "function (int256) pure returns (uint256)"
                        }
                      },
                      "id": 23049,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "971:6:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 23051,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23024,
                          "src": "984:1:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        ],
                        "id": 23050,
                        "name": "abs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22999,
                        "src": "980:3:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                          "typeString": "function (int256) pure returns (uint256)"
                        }
                      },
                      "id": 23052,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "980:6:59",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "971:15:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23028,
                  "id": 23054,
                  "nodeType": "Return",
                  "src": "964:22:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "delta",
            "nameLocation": "650:5:59",
            "parameters": {
              "id": 23025,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23022,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "663:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 23056,
                  "src": "656:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23021,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "656:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23024,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "673:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 23056,
                  "src": "666:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23023,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "666:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "655:20:59"
            },
            "returnParameters": {
              "id": 23028,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23027,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23056,
                  "src": "699:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23026,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "698:9:59"
            },
            "scope": 23109,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23079,
            "nodeType": "FunctionDefinition",
            "src": "999:160:59",
            "nodes": [],
            "body": {
              "id": 23078,
              "nodeType": "Block",
              "src": "1075:84:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    23066
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23066,
                      "mutability": "mutable",
                      "name": "absDelta",
                      "nameLocation": "1093:8:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 23078,
                      "src": "1085:16:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 23065,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1085:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23071,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23068,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23058,
                        "src": "1110:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 23069,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23060,
                        "src": "1113:1:59",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 23067,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23020,
                        23056
                      ],
                      "referencedDeclaration": 23020,
                      "src": "1104:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 23070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1104:11:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1085:30:59"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 23076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 23074,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23072,
                        "name": "absDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23066,
                        "src": "1133:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "hexValue": "31653138",
                        "id": 23073,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1144:4:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                          "typeString": "int_const 1000000000000000000"
                        },
                        "value": "1e18"
                      },
                      "src": "1133:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 23075,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23060,
                      "src": "1151:1:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1133:19:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23064,
                  "id": 23077,
                  "nodeType": "Return",
                  "src": "1126:26:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "percentDelta",
            "nameLocation": "1008:12:59",
            "parameters": {
              "id": 23061,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23058,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1029:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 23079,
                  "src": "1021:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23057,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1021:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23060,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1040:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 23079,
                  "src": "1032:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23059,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1032:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1020:22:59"
            },
            "returnParameters": {
              "id": 23064,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23063,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23079,
                  "src": "1066:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23062,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1066:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1065:9:59"
            },
            "scope": 23109,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23108,
            "nodeType": "FunctionDefinition",
            "src": "1165:192:59",
            "nodes": [],
            "body": {
              "id": 23107,
              "nodeType": "Block",
              "src": "1239:118:59",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    23089
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23089,
                      "mutability": "mutable",
                      "name": "absDelta",
                      "nameLocation": "1257:8:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 23107,
                      "src": "1249:16:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 23088,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1249:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23094,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23091,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23081,
                        "src": "1274:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 23092,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23083,
                        "src": "1277:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 23090,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23020,
                        23056
                      ],
                      "referencedDeclaration": 23056,
                      "src": "1268:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 23093,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1268:11:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1249:30:59"
                },
                {
                  "assignments": [
                    23096
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23096,
                      "mutability": "mutable",
                      "name": "absB",
                      "nameLocation": "1297:4:59",
                      "nodeType": "VariableDeclaration",
                      "scope": 23107,
                      "src": "1289:12:59",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 23095,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1289:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23100,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23098,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23083,
                        "src": "1308:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 23097,
                      "name": "abs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22999,
                      "src": "1304:3:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256) pure returns (uint256)"
                      }
                    },
                    "id": 23099,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1304:6:59",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1289:21:59"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 23105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 23103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23101,
                        "name": "absDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23089,
                        "src": "1328:8:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "hexValue": "31653138",
                        "id": 23102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1339:4:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                          "typeString": "int_const 1000000000000000000"
                        },
                        "value": "1e18"
                      },
                      "src": "1328:15:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 23104,
                      "name": "absB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23096,
                      "src": "1346:4:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1328:22:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23087,
                  "id": 23106,
                  "nodeType": "Return",
                  "src": "1321:29:59"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "percentDelta",
            "nameLocation": "1174:12:59",
            "parameters": {
              "id": 23084,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23081,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1194:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 23108,
                  "src": "1187:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23080,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1187:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23083,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1204:1:59",
                  "nodeType": "VariableDeclaration",
                  "scope": 23108,
                  "src": "1197:8:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23082,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1197:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1186:20:59"
            },
            "returnParameters": {
              "id": 23087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23086,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23108,
                  "src": "1230:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23085,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1230:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1229:9:59"
            },
            "scope": 23109,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "stdMath",
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          23109
        ],
        "name": "stdMath",
        "nameLocation": "73:7:59",
        "scope": 23110,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 59
} as const;
