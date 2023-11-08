export const SignedMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b23ed048b27e9310bbddfda1c1c2d9bf3be8e40a65532c9c5ec2d5f6235d0c8a64736f6c63430008130033",
    "sourceMap": "215:1047:95:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;215:1047:95;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b23ed048b27e9310bbddfda1c1c2d9bf3be8e40a65532c9c5ec2d5f6235d0c8a64736f6c63430008130033",
    "sourceMap": "215:1047:95:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Standard signed math utilities missing in the Solidity language.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":\"SignedMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]}},\"version\":1}",
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
        "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": "SignedMath"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc",
        "urls": [
          "bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7",
          "dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol",
    "id": 61958,
    "exportedSymbols": {
      "SignedMath": [
        61957
      ]
    },
    "nodeType": "SourceUnit",
    "src": "109:1154:95",
    "nodes": [
      {
        "id": 61854,
        "nodeType": "PragmaDirective",
        "src": "109:23:95",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 61957,
        "nodeType": "ContractDefinition",
        "src": "215:1047:95",
        "nodes": [
          {
            "id": 61873,
            "nodeType": "FunctionDefinition",
            "src": "311:101:95",
            "nodes": [],
            "body": {
              "id": 61872,
              "nodeType": "Block",
              "src": "375:37:95",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 61867,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61865,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61858,
                        "src": "392:1:95",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 61866,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61860,
                        "src": "396:1:95",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "392:5:95",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 61869,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61860,
                      "src": "404:1:95",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 61870,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "392:13:95",
                    "trueExpression": {
                      "id": 61868,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61858,
                      "src": "400:1:95",
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
                  "functionReturnParameters": 61864,
                  "id": 61871,
                  "nodeType": "Return",
                  "src": "385:20:95"
                }
              ]
            },
            "documentation": {
              "id": 61856,
              "nodeType": "StructuredDocumentation",
              "src": "240:66:95",
              "text": " @dev Returns the largest of two signed numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "320:3:95",
            "parameters": {
              "id": 61861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61858,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "331:1:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 61873,
                  "src": "324:8:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61857,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "324:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61860,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "341:1:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 61873,
                  "src": "334:8:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61859,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "334:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "323:20:95"
            },
            "returnParameters": {
              "id": 61864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61863,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61873,
                  "src": "367:6:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61862,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "367:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "366:8:95"
            },
            "scope": 61957,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61891,
            "nodeType": "FunctionDefinition",
            "src": "490:101:95",
            "nodes": [],
            "body": {
              "id": 61890,
              "nodeType": "Block",
              "src": "554:37:95",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 61885,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61883,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61876,
                        "src": "571:1:95",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 61884,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61878,
                        "src": "575:1:95",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "571:5:95",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 61887,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61878,
                      "src": "583:1:95",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 61888,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "571:13:95",
                    "trueExpression": {
                      "id": 61886,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61876,
                      "src": "579:1:95",
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
                  "functionReturnParameters": 61882,
                  "id": 61889,
                  "nodeType": "Return",
                  "src": "564:20:95"
                }
              ]
            },
            "documentation": {
              "id": 61874,
              "nodeType": "StructuredDocumentation",
              "src": "418:67:95",
              "text": " @dev Returns the smallest of two signed numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "499:3:95",
            "parameters": {
              "id": 61879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61876,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "510:1:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 61891,
                  "src": "503:8:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61875,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61878,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "520:1:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 61891,
                  "src": "513:8:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61877,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "513:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "502:20:95"
            },
            "returnParameters": {
              "id": 61882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61881,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61891,
                  "src": "546:6:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61880,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "546:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "545:8:95"
            },
            "scope": 61957,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61935,
            "nodeType": "FunctionDefinition",
            "src": "728:230:95",
            "nodes": [],
            "body": {
              "id": 61934,
              "nodeType": "Block",
              "src": "796:162:95",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61902
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61902,
                      "mutability": "mutable",
                      "name": "x",
                      "nameLocation": "865:1:95",
                      "nodeType": "VariableDeclaration",
                      "scope": 61934,
                      "src": "858:8:95",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 61901,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "858:6:95",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61915,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 61914,
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
                          "id": 61905,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61903,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61894,
                            "src": "870:1:95",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "id": 61904,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61896,
                            "src": "874:1:95",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "870:5:95",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 61906,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "869:7:95",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 61912,
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
                                "id": 61909,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61907,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61894,
                                  "src": "881:1:95",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "^",
                                "rightExpression": {
                                  "id": 61908,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61896,
                                  "src": "885:1:95",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "881:5:95",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 61910,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "880:7:95",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61911,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "891:1:95",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "880:12:95",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 61913,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "879:14:95",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "869:24:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "858:35:95"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 61932,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61916,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61902,
                      "src": "910:1:95",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 61930,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 61924,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "arguments": [
                                    {
                                      "id": 61921,
                                      "name": "x",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61902,
                                      "src": "930:1:95",
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
                                    "id": 61920,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "922:7:95",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 61919,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "922:7:95",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 61922,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "922:10:95",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "323535",
                                  "id": 61923,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "936:3:95",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_255_by_1",
                                    "typeString": "int_const 255"
                                  },
                                  "value": "255"
                                },
                                "src": "922:17:95",
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
                              "id": 61918,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "915:6:95",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_int256_$",
                                "typeString": "type(int256)"
                              },
                              "typeName": {
                                "id": 61917,
                                "name": "int256",
                                "nodeType": "ElementaryTypeName",
                                "src": "915:6:95",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 61925,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "915:25:95",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 61928,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61926,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61894,
                                  "src": "944:1:95",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "^",
                                "rightExpression": {
                                  "id": 61927,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61896,
                                  "src": "948:1:95",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "944:5:95",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 61929,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "943:7:95",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "915:35:95",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 61931,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "914:37:95",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "910:41:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 61900,
                  "id": 61933,
                  "nodeType": "Return",
                  "src": "903:48:95"
                }
              ]
            },
            "documentation": {
              "id": 61892,
              "nodeType": "StructuredDocumentation",
              "src": "597:126:95",
              "text": " @dev Returns the average of two signed numbers without overflow.\n The result is rounded towards zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "average",
            "nameLocation": "737:7:95",
            "parameters": {
              "id": 61897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61894,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "752:1:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 61935,
                  "src": "745:8:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61893,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "745:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61896,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "762:1:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 61935,
                  "src": "755:8:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61895,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "744:20:95"
            },
            "returnParameters": {
              "id": 61900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61899,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61935,
                  "src": "788:6:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61898,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "788:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "787:8:95"
            },
            "scope": 61957,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61956,
            "nodeType": "FunctionDefinition",
            "src": "1047:213:95",
            "nodes": [],
            "body": {
              "id": 61955,
              "nodeType": "Block",
              "src": "1102:158:95",
              "nodes": [],
              "statements": [
                {
                  "id": 61954,
                  "nodeType": "UncheckedBlock",
                  "src": "1112:142:95",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "condition": {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 61947,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 61945,
                                "name": "n",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61938,
                                "src": "1227:1:95",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 61946,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1232:1:95",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "1227:6:95",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseExpression": {
                              "id": 61950,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "-",
                              "prefix": true,
                              "src": "1240:2:95",
                              "subExpression": {
                                "id": 61949,
                                "name": "n",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61938,
                                "src": "1241:1:95",
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
                            "id": 61951,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "Conditional",
                            "src": "1227:15:95",
                            "trueExpression": {
                              "id": 61948,
                              "name": "n",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61938,
                              "src": "1236:1:95",
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
                          "id": 61944,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1219:7:95",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 61943,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1219:7:95",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61952,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1219:24:95",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 61942,
                      "id": 61953,
                      "nodeType": "Return",
                      "src": "1212:31:95"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 61936,
              "nodeType": "StructuredDocumentation",
              "src": "964:78:95",
              "text": " @dev Returns the absolute unsigned value of a signed value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "abs",
            "nameLocation": "1056:3:95",
            "parameters": {
              "id": 61939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61938,
                  "mutability": "mutable",
                  "name": "n",
                  "nameLocation": "1067:1:95",
                  "nodeType": "VariableDeclaration",
                  "scope": 61956,
                  "src": "1060:8:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61937,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1060:6:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1059:10:95"
            },
            "returnParameters": {
              "id": 61942,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61941,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61956,
                  "src": "1093:7:95",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61940,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1093:7:95",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1092:9:95"
            },
            "scope": 61957,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SignedMath",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 61855,
          "nodeType": "StructuredDocumentation",
          "src": "134:80:95",
          "text": " @dev Standard signed math utilities missing in the Solidity language."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          61957
        ],
        "name": "SignedMath",
        "nameLocation": "223:10:95",
        "scope": 61958,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 95
} as const;
