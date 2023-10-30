export const SignedMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205473858d25bdf2c3274b9c1c355f3766c46cafa3148a97cb3ff6da3d001758c064736f6c63430008130033",
    "sourceMap": "215:1047:89:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;215:1047:89;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205473858d25bdf2c3274b9c1c355f3766c46cafa3148a97cb3ff6da3d001758c064736f6c63430008130033",
    "sourceMap": "215:1047:89:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Standard signed math utilities missing in the Solidity language.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":\"SignedMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]}},\"version\":1}",
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
    "id": 61252,
    "exportedSymbols": {
      "SignedMath": [
        61251
      ]
    },
    "nodeType": "SourceUnit",
    "src": "109:1154:89",
    "nodes": [
      {
        "id": 61148,
        "nodeType": "PragmaDirective",
        "src": "109:23:89",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 61251,
        "nodeType": "ContractDefinition",
        "src": "215:1047:89",
        "nodes": [
          {
            "id": 61167,
            "nodeType": "FunctionDefinition",
            "src": "311:101:89",
            "nodes": [],
            "body": {
              "id": 61166,
              "nodeType": "Block",
              "src": "375:37:89",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 61161,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61159,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61152,
                        "src": "392:1:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 61160,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61154,
                        "src": "396:1:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "392:5:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 61163,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61154,
                      "src": "404:1:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 61164,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "392:13:89",
                    "trueExpression": {
                      "id": 61162,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61152,
                      "src": "400:1:89",
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
                  "functionReturnParameters": 61158,
                  "id": 61165,
                  "nodeType": "Return",
                  "src": "385:20:89"
                }
              ]
            },
            "documentation": {
              "id": 61150,
              "nodeType": "StructuredDocumentation",
              "src": "240:66:89",
              "text": " @dev Returns the largest of two signed numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "320:3:89",
            "parameters": {
              "id": 61155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61152,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "331:1:89",
                  "nodeType": "VariableDeclaration",
                  "scope": 61167,
                  "src": "324:8:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61151,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "324:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61154,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "341:1:89",
                  "nodeType": "VariableDeclaration",
                  "scope": 61167,
                  "src": "334:8:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61153,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "334:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "323:20:89"
            },
            "returnParameters": {
              "id": 61158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61157,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61167,
                  "src": "367:6:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61156,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "367:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "366:8:89"
            },
            "scope": 61251,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61185,
            "nodeType": "FunctionDefinition",
            "src": "490:101:89",
            "nodes": [],
            "body": {
              "id": 61184,
              "nodeType": "Block",
              "src": "554:37:89",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 61179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61177,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61170,
                        "src": "571:1:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 61178,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61172,
                        "src": "575:1:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "571:5:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 61181,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61172,
                      "src": "583:1:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 61182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "571:13:89",
                    "trueExpression": {
                      "id": 61180,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61170,
                      "src": "579:1:89",
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
                  "functionReturnParameters": 61176,
                  "id": 61183,
                  "nodeType": "Return",
                  "src": "564:20:89"
                }
              ]
            },
            "documentation": {
              "id": 61168,
              "nodeType": "StructuredDocumentation",
              "src": "418:67:89",
              "text": " @dev Returns the smallest of two signed numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "499:3:89",
            "parameters": {
              "id": 61173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61170,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "510:1:89",
                  "nodeType": "VariableDeclaration",
                  "scope": 61185,
                  "src": "503:8:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61169,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61172,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "520:1:89",
                  "nodeType": "VariableDeclaration",
                  "scope": 61185,
                  "src": "513:8:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61171,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "513:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "502:20:89"
            },
            "returnParameters": {
              "id": 61176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61175,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61185,
                  "src": "546:6:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61174,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "546:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "545:8:89"
            },
            "scope": 61251,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61229,
            "nodeType": "FunctionDefinition",
            "src": "728:230:89",
            "nodes": [],
            "body": {
              "id": 61228,
              "nodeType": "Block",
              "src": "796:162:89",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61196
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61196,
                      "mutability": "mutable",
                      "name": "x",
                      "nameLocation": "865:1:89",
                      "nodeType": "VariableDeclaration",
                      "scope": 61228,
                      "src": "858:8:89",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 61195,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "858:6:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61209,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 61208,
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
                          "id": 61199,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61197,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61188,
                            "src": "870:1:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "id": 61198,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61190,
                            "src": "874:1:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "870:5:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 61200,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "869:7:89",
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
                          "id": 61206,
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
                                "id": 61203,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61201,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61188,
                                  "src": "881:1:89",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "^",
                                "rightExpression": {
                                  "id": 61202,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61190,
                                  "src": "885:1:89",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "881:5:89",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 61204,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "880:7:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61205,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "891:1:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "880:12:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 61207,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "879:14:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "869:24:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "858:35:89"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 61226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61210,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61196,
                      "src": "910:1:89",
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
                          "id": 61224,
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
                                "id": 61218,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "arguments": [
                                    {
                                      "id": 61215,
                                      "name": "x",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61196,
                                      "src": "930:1:89",
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
                                    "id": 61214,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "922:7:89",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 61213,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "922:7:89",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 61216,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "922:10:89",
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
                                  "id": 61217,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "936:3:89",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_255_by_1",
                                    "typeString": "int_const 255"
                                  },
                                  "value": "255"
                                },
                                "src": "922:17:89",
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
                              "id": 61212,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "915:6:89",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_int256_$",
                                "typeString": "type(int256)"
                              },
                              "typeName": {
                                "id": 61211,
                                "name": "int256",
                                "nodeType": "ElementaryTypeName",
                                "src": "915:6:89",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 61219,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "915:25:89",
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
                                "id": 61222,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61220,
                                  "name": "a",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61188,
                                  "src": "944:1:89",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "^",
                                "rightExpression": {
                                  "id": 61221,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61190,
                                  "src": "948:1:89",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "944:5:89",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 61223,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "943:7:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "915:35:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 61225,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "914:37:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "910:41:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 61194,
                  "id": 61227,
                  "nodeType": "Return",
                  "src": "903:48:89"
                }
              ]
            },
            "documentation": {
              "id": 61186,
              "nodeType": "StructuredDocumentation",
              "src": "597:126:89",
              "text": " @dev Returns the average of two signed numbers without overflow.\n The result is rounded towards zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "average",
            "nameLocation": "737:7:89",
            "parameters": {
              "id": 61191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61188,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "752:1:89",
                  "nodeType": "VariableDeclaration",
                  "scope": 61229,
                  "src": "745:8:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61187,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "745:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61190,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "762:1:89",
                  "nodeType": "VariableDeclaration",
                  "scope": 61229,
                  "src": "755:8:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61189,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "744:20:89"
            },
            "returnParameters": {
              "id": 61194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61193,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61229,
                  "src": "788:6:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61192,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "788:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "787:8:89"
            },
            "scope": 61251,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61250,
            "nodeType": "FunctionDefinition",
            "src": "1047:213:89",
            "nodes": [],
            "body": {
              "id": 61249,
              "nodeType": "Block",
              "src": "1102:158:89",
              "nodes": [],
              "statements": [
                {
                  "id": 61248,
                  "nodeType": "UncheckedBlock",
                  "src": "1112:142:89",
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
                              "id": 61241,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 61239,
                                "name": "n",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61232,
                                "src": "1227:1:89",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 61240,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1232:1:89",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "1227:6:89",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseExpression": {
                              "id": 61244,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "-",
                              "prefix": true,
                              "src": "1240:2:89",
                              "subExpression": {
                                "id": 61243,
                                "name": "n",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61232,
                                "src": "1241:1:89",
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
                            "id": 61245,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "Conditional",
                            "src": "1227:15:89",
                            "trueExpression": {
                              "id": 61242,
                              "name": "n",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61232,
                              "src": "1236:1:89",
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
                          "id": 61238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1219:7:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 61237,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1219:7:89",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 61246,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1219:24:89",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 61236,
                      "id": 61247,
                      "nodeType": "Return",
                      "src": "1212:31:89"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 61230,
              "nodeType": "StructuredDocumentation",
              "src": "964:78:89",
              "text": " @dev Returns the absolute unsigned value of a signed value."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "abs",
            "nameLocation": "1056:3:89",
            "parameters": {
              "id": 61233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61232,
                  "mutability": "mutable",
                  "name": "n",
                  "nameLocation": "1067:1:89",
                  "nodeType": "VariableDeclaration",
                  "scope": 61250,
                  "src": "1060:8:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 61231,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1060:6:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1059:10:89"
            },
            "returnParameters": {
              "id": 61236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61235,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61250,
                  "src": "1093:7:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61234,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1093:7:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1092:9:89"
            },
            "scope": 61251,
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
          "id": 61149,
          "nodeType": "StructuredDocumentation",
          "src": "134:80:89",
          "text": " @dev Standard signed math utilities missing in the Solidity language."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          61251
        ],
        "name": "SignedMath",
        "nameLocation": "223:10:89",
        "scope": 61252,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 89
} as const;
