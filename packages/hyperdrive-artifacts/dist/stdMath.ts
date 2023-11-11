export const StdMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201912675863fdfcb0548e24ca90f0239b56a412bbe9334a86df61c9ad6882897264736f6c63430008130033",
    "sourceMap": "65:1294:65:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;65:1294:65;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201912675863fdfcb0548e24ca90f0239b56a412bbe9334a86df61c9ad6882897264736f6c63430008130033",
    "sourceMap": "65:1294:65:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdMath.sol\":\"stdMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]}},\"version\":1}",
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
    "id": 23816,
    "exportedSymbols": {
      "stdMath": [
        23815
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:1328:65",
    "nodes": [
      {
        "id": 23675,
        "nodeType": "PragmaDirective",
        "src": "32:31:65",
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
        "id": 23815,
        "nodeType": "ContractDefinition",
        "src": "65:1294:65",
        "nodes": [
          {
            "id": 23679,
            "nodeType": "VariableDeclaration",
            "src": "87:115:65",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INT256_MIN",
            "nameLocation": "111:10:65",
            "scope": 23815,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 23676,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "87:6:65",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "id": 23678,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "nodeType": "UnaryOperation",
              "operator": "-",
              "prefix": true,
              "src": "124:78:65",
              "subExpression": {
                "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
                "id": 23677,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "125:77:65",
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
            "id": 23705,
            "nodeType": "FunctionDefinition",
            "src": "209:306:65",
            "nodes": [],
            "body": {
              "id": 23704,
              "nodeType": "Block",
              "src": "264:251:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 23688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 23686,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23681,
                      "src": "342:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 23687,
                      "name": "INT256_MIN",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23679,
                      "src": "347:10:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "342:15:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23692,
                  "nodeType": "IfStatement",
                  "src": "338:130:65",
                  "trueBody": {
                    "id": 23691,
                    "nodeType": "Block",
                    "src": "359:109:65",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
                          "id": 23689,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "380:77:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                            "typeString": "int_const 5789...(69 digits omitted)...9968"
                          },
                          "value": "57896044618658097711785492504343953926634992332820282019728792003956564819968"
                        },
                        "functionReturnParameters": 23685,
                        "id": 23690,
                        "nodeType": "Return",
                        "src": "373:84:65"
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
                          "id": 23697,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 23695,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23681,
                            "src": "493:1:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 23696,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "497:1:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "493:5:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseExpression": {
                          "id": 23700,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "-",
                          "prefix": true,
                          "src": "505:2:65",
                          "subExpression": {
                            "id": 23699,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23681,
                            "src": "506:1:65",
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
                        "id": 23701,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "Conditional",
                        "src": "493:14:65",
                        "trueExpression": {
                          "id": 23698,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23681,
                          "src": "501:1:65",
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
                      "id": 23694,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "485:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 23693,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "485:7:65",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 23702,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "485:23:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23685,
                  "id": 23703,
                  "nodeType": "Return",
                  "src": "478:30:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "abs",
            "nameLocation": "218:3:65",
            "parameters": {
              "id": 23682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23681,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "229:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 23705,
                  "src": "222:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23680,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "222:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "221:10:65"
            },
            "returnParameters": {
              "id": 23685,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23684,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23705,
                  "src": "255:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23683,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "254:9:65"
            },
            "scope": 23815,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23726,
            "nodeType": "FunctionDefinition",
            "src": "521:114:65",
            "nodes": [],
            "body": {
              "id": 23725,
              "nodeType": "Block",
              "src": "590:45:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 23716,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23714,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23707,
                        "src": "607:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 23715,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23709,
                        "src": "611:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "607:5:65",
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
                      "id": 23722,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23720,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23709,
                        "src": "623:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 23721,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23707,
                        "src": "627:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "623:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 23723,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "607:21:65",
                    "trueExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 23719,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23717,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23707,
                        "src": "615:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 23718,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23709,
                        "src": "619:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "615:5:65",
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
                  "functionReturnParameters": 23713,
                  "id": 23724,
                  "nodeType": "Return",
                  "src": "600:28:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "delta",
            "nameLocation": "530:5:65",
            "parameters": {
              "id": 23710,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23707,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "544:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 23726,
                  "src": "536:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23706,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "536:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23709,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "555:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 23726,
                  "src": "547:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23708,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "535:22:65"
            },
            "returnParameters": {
              "id": 23713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23712,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23726,
                  "src": "581:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23711,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "581:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "580:9:65"
            },
            "scope": 23815,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23762,
            "nodeType": "FunctionDefinition",
            "src": "641:352:65",
            "nodes": [],
            "body": {
              "id": 23761,
              "nodeType": "Block",
              "src": "708:285:65",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 23741,
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
                          "id": 23737,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 23735,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23728,
                            "src": "847:1:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "^",
                          "rightExpression": {
                            "id": 23736,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23730,
                            "src": "851:1:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "847:5:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 23738,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "846:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 23740,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "-",
                      "prefix": true,
                      "src": "856:2:65",
                      "subExpression": {
                        "hexValue": "31",
                        "id": 23739,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "857:1:65",
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
                    "src": "846:12:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23752,
                  "nodeType": "IfStatement",
                  "src": "842:71:65",
                  "trueBody": {
                    "id": 23751,
                    "nodeType": "Block",
                    "src": "860:53:65",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 23744,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 23728,
                                  "src": "891:1:65",
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
                                "id": 23743,
                                "name": "abs",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 23705,
                                "src": "887:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                  "typeString": "function (int256) pure returns (uint256)"
                                }
                              },
                              "id": 23745,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "887:6:65",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 23747,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 23730,
                                  "src": "899:1:65",
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
                                "id": 23746,
                                "name": "abs",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 23705,
                                "src": "895:3:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                  "typeString": "function (int256) pure returns (uint256)"
                                }
                              },
                              "id": 23748,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "895:6:65",
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
                            "id": 23742,
                            "name": "delta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              23726,
                              23762
                            ],
                            "referencedDeclaration": 23726,
                            "src": "881:5:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 23749,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "881:21:65",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 23734,
                        "id": 23750,
                        "nodeType": "Return",
                        "src": "874:28:65"
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
                    "id": 23759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 23754,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23728,
                          "src": "975:1:65",
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
                        "id": 23753,
                        "name": "abs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23705,
                        "src": "971:3:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                          "typeString": "function (int256) pure returns (uint256)"
                        }
                      },
                      "id": 23755,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "971:6:65",
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
                          "id": 23757,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23730,
                          "src": "984:1:65",
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
                        "id": 23756,
                        "name": "abs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23705,
                        "src": "980:3:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                          "typeString": "function (int256) pure returns (uint256)"
                        }
                      },
                      "id": 23758,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "980:6:65",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "971:15:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23734,
                  "id": 23760,
                  "nodeType": "Return",
                  "src": "964:22:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "delta",
            "nameLocation": "650:5:65",
            "parameters": {
              "id": 23731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23728,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "663:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 23762,
                  "src": "656:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23727,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "656:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23730,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "673:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 23762,
                  "src": "666:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23729,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "666:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "655:20:65"
            },
            "returnParameters": {
              "id": 23734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23733,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23762,
                  "src": "699:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23732,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "698:9:65"
            },
            "scope": 23815,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23785,
            "nodeType": "FunctionDefinition",
            "src": "999:160:65",
            "nodes": [],
            "body": {
              "id": 23784,
              "nodeType": "Block",
              "src": "1075:84:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    23772
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23772,
                      "mutability": "mutable",
                      "name": "absDelta",
                      "nameLocation": "1093:8:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 23784,
                      "src": "1085:16:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 23771,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1085:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23777,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23774,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23764,
                        "src": "1110:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 23775,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23766,
                        "src": "1113:1:65",
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
                      "id": 23773,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23726,
                        23762
                      ],
                      "referencedDeclaration": 23726,
                      "src": "1104:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 23776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1104:11:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1085:30:65"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 23782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 23780,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23778,
                        "name": "absDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23772,
                        "src": "1133:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "hexValue": "31653138",
                        "id": 23779,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1144:4:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                          "typeString": "int_const 1000000000000000000"
                        },
                        "value": "1e18"
                      },
                      "src": "1133:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 23781,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23766,
                      "src": "1151:1:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1133:19:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23770,
                  "id": 23783,
                  "nodeType": "Return",
                  "src": "1126:26:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "percentDelta",
            "nameLocation": "1008:12:65",
            "parameters": {
              "id": 23767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23764,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1029:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 23785,
                  "src": "1021:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23763,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1021:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23766,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1040:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 23785,
                  "src": "1032:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23765,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1032:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1020:22:65"
            },
            "returnParameters": {
              "id": 23770,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23769,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23785,
                  "src": "1066:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23768,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1066:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1065:9:65"
            },
            "scope": 23815,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23814,
            "nodeType": "FunctionDefinition",
            "src": "1165:192:65",
            "nodes": [],
            "body": {
              "id": 23813,
              "nodeType": "Block",
              "src": "1239:118:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    23795
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23795,
                      "mutability": "mutable",
                      "name": "absDelta",
                      "nameLocation": "1257:8:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 23813,
                      "src": "1249:16:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 23794,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1249:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23800,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23797,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23787,
                        "src": "1274:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 23798,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23789,
                        "src": "1277:1:65",
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
                      "id": 23796,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23726,
                        23762
                      ],
                      "referencedDeclaration": 23762,
                      "src": "1268:5:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 23799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1268:11:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1249:30:65"
                },
                {
                  "assignments": [
                    23802
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23802,
                      "mutability": "mutable",
                      "name": "absB",
                      "nameLocation": "1297:4:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 23813,
                      "src": "1289:12:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 23801,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1289:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23806,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23804,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23789,
                        "src": "1308:1:65",
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
                      "id": 23803,
                      "name": "abs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23705,
                      "src": "1304:3:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256) pure returns (uint256)"
                      }
                    },
                    "id": 23805,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1304:6:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1289:21:65"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 23811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 23809,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 23807,
                        "name": "absDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23795,
                        "src": "1328:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "hexValue": "31653138",
                        "id": 23808,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1339:4:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                          "typeString": "int_const 1000000000000000000"
                        },
                        "value": "1e18"
                      },
                      "src": "1328:15:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 23810,
                      "name": "absB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23802,
                      "src": "1346:4:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1328:22:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 23793,
                  "id": 23812,
                  "nodeType": "Return",
                  "src": "1321:29:65"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "percentDelta",
            "nameLocation": "1174:12:65",
            "parameters": {
              "id": 23790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23787,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1194:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 23814,
                  "src": "1187:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23786,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1187:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23789,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1204:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 23814,
                  "src": "1197:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 23788,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1197:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1186:20:65"
            },
            "returnParameters": {
              "id": 23793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23792,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23814,
                  "src": "1230:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23791,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1230:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1229:9:65"
            },
            "scope": 23815,
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
          23815
        ],
        "name": "stdMath",
        "nameLocation": "73:7:65",
        "scope": 23816,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 65
} as const;
