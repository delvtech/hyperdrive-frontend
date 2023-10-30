export const Math = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122010c86a86f9841cda171ac99c8b6c918e6f573e47e2735fbdf0c215aaf4ef8db364736f6c63430008130033",
    "sourceMap": "202:12582:88:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;202:12582:88;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122010c86a86f9841cda171ac99c8b6c918e6f573e47e2735fbdf0c215aaf4ef8db364736f6c63430008130033",
    "sourceMap": "202:12582:88:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Standard math utilities missing in the Solidity language.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":\"Math\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4\",\"dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij\"]}},\"version\":1}",
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
        "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": "Math"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        "keccak256": "0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858",
        "urls": [
          "bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4",
          "dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/utils/math/Math.sol",
    "id": 61147,
    "exportedSymbols": {
      "Math": [
        61146
      ]
    },
    "nodeType": "SourceUnit",
    "src": "103:12682:88",
    "nodes": [
      {
        "id": 60282,
        "nodeType": "PragmaDirective",
        "src": "103:23:88",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 61146,
        "nodeType": "ContractDefinition",
        "src": "202:12582:88",
        "nodes": [
          {
            "id": 60287,
            "nodeType": "EnumDefinition",
            "src": "221:122:88",
            "nodes": [],
            "canonicalName": "Math.Rounding",
            "members": [
              {
                "id": 60284,
                "name": "Down",
                "nameLocation": "245:4:88",
                "nodeType": "EnumValue",
                "src": "245:4:88"
              },
              {
                "id": 60285,
                "name": "Up",
                "nameLocation": "287:2:88",
                "nodeType": "EnumValue",
                "src": "287:2:88"
              },
              {
                "id": 60286,
                "name": "Zero",
                "nameLocation": "318:4:88",
                "nodeType": "EnumValue",
                "src": "318:4:88"
              }
            ],
            "name": "Rounding",
            "nameLocation": "226:8:88"
          },
          {
            "id": 60305,
            "nodeType": "FunctionDefinition",
            "src": "413:104:88",
            "nodes": [],
            "body": {
              "id": 60304,
              "nodeType": "Block",
              "src": "480:37:88",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 60299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 60297,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60290,
                        "src": "497:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 60298,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60292,
                        "src": "501:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "497:5:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 60301,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60292,
                      "src": "509:1:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 60302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "497:13:88",
                    "trueExpression": {
                      "id": 60300,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60290,
                      "src": "505:1:88",
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
                  "functionReturnParameters": 60296,
                  "id": 60303,
                  "nodeType": "Return",
                  "src": "490:20:88"
                }
              ]
            },
            "documentation": {
              "id": 60288,
              "nodeType": "StructuredDocumentation",
              "src": "349:59:88",
              "text": " @dev Returns the largest of two numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "422:3:88",
            "parameters": {
              "id": 60293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60290,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "434:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60305,
                  "src": "426:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60289,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60292,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "445:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60305,
                  "src": "437:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60291,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "437:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "425:22:88"
            },
            "returnParameters": {
              "id": 60296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60295,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60305,
                  "src": "471:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60294,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "471:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "470:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60323,
            "nodeType": "FunctionDefinition",
            "src": "588:104:88",
            "nodes": [],
            "body": {
              "id": 60322,
              "nodeType": "Block",
              "src": "655:37:88",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 60317,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 60315,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60308,
                        "src": "672:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 60316,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60310,
                        "src": "676:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "672:5:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 60319,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60310,
                      "src": "684:1:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 60320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "672:13:88",
                    "trueExpression": {
                      "id": 60318,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60308,
                      "src": "680:1:88",
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
                  "functionReturnParameters": 60314,
                  "id": 60321,
                  "nodeType": "Return",
                  "src": "665:20:88"
                }
              ]
            },
            "documentation": {
              "id": 60306,
              "nodeType": "StructuredDocumentation",
              "src": "523:60:88",
              "text": " @dev Returns the smallest of two numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "597:3:88",
            "parameters": {
              "id": 60311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60308,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "609:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60323,
                  "src": "601:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60307,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "601:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60310,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "620:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60323,
                  "src": "612:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60309,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "612:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "600:22:88"
            },
            "returnParameters": {
              "id": 60314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60313,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60323,
                  "src": "646:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60312,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "646:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "645:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60346,
            "nodeType": "FunctionDefinition",
            "src": "805:153:88",
            "nodes": [],
            "body": {
              "id": 60345,
              "nodeType": "Block",
              "src": "876:82:88",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60335,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60333,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60326,
                            "src": "931:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "id": 60334,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60328,
                            "src": "935:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "931:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 60336,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "930:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 60342,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60339,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60337,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60326,
                              "src": "941:1:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "^",
                            "rightExpression": {
                              "id": 60338,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60328,
                              "src": "945:1:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "941:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 60340,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "940:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 60341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "950:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "940:11:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "930:21:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60332,
                  "id": 60344,
                  "nodeType": "Return",
                  "src": "923:28:88"
                }
              ]
            },
            "documentation": {
              "id": 60324,
              "nodeType": "StructuredDocumentation",
              "src": "698:102:88",
              "text": " @dev Returns the average of two numbers. The result is rounded towards\n zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "average",
            "nameLocation": "814:7:88",
            "parameters": {
              "id": 60329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60326,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "830:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60346,
                  "src": "822:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60325,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "822:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60328,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "841:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60346,
                  "src": "833:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60327,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "833:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "821:22:88"
            },
            "returnParameters": {
              "id": 60332,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60331,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60346,
                  "src": "867:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60330,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "867:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "866:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60371,
            "nodeType": "FunctionDefinition",
            "src": "1157:194:88",
            "nodes": [],
            "body": {
              "id": 60370,
              "nodeType": "Block",
              "src": "1228:123:88",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 60358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 60356,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60349,
                        "src": "1316:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 60357,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1321:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1316:6:88",
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
                      "id": 60367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60365,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 60362,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 60360,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60349,
                                "src": "1330:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 60361,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1334:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "1330:5:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 60363,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1329:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "id": 60364,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60351,
                          "src": "1339:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1329:11:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 60366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1343:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1329:15:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 60368,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "1316:28:88",
                    "trueExpression": {
                      "hexValue": "30",
                      "id": 60359,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1325:1:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60355,
                  "id": 60369,
                  "nodeType": "Return",
                  "src": "1309:35:88"
                }
              ]
            },
            "documentation": {
              "id": 60347,
              "nodeType": "StructuredDocumentation",
              "src": "964:188:88",
              "text": " @dev Returns the ceiling of the division of two numbers.\n This differs from standard division with `/` in that it rounds up instead\n of rounding down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ceilDiv",
            "nameLocation": "1166:7:88",
            "parameters": {
              "id": 60352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60349,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1182:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60371,
                  "src": "1174:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60348,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1174:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60351,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1193:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60371,
                  "src": "1185:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60350,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1173:22:88"
            },
            "returnParameters": {
              "id": 60355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60354,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60371,
                  "src": "1219:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60353,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1219:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1218:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60494,
            "nodeType": "FunctionDefinition",
            "src": "1667:4213:88",
            "nodes": [],
            "body": {
              "id": 60493,
              "nodeType": "Block",
              "src": "1765:4115:88",
              "nodes": [],
              "statements": [
                {
                  "id": 60492,
                  "nodeType": "UncheckedBlock",
                  "src": "1775:4099:88",
                  "statements": [
                    {
                      "assignments": [
                        60384
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 60384,
                          "mutability": "mutable",
                          "name": "prod0",
                          "nameLocation": "2104:5:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 60492,
                          "src": "2096:13:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 60383,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2096:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 60385,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "2096:13:88"
                    },
                    {
                      "assignments": [
                        60387
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 60387,
                          "mutability": "mutable",
                          "name": "prod1",
                          "nameLocation": "2176:5:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 60492,
                          "src": "2168:13:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 60386,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2168:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 60388,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "2168:13:88"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "2248:157:88",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2266:30:88",
                            "value": {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "2283:1:88"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "2286:1:88"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2293:1:88",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "2289:3:88"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2289:6:88"
                                }
                              ],
                              "functionName": {
                                "name": "mulmod",
                                "nodeType": "YulIdentifier",
                                "src": "2276:6:88"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2276:20:88"
                            },
                            "variables": [
                              {
                                "name": "mm",
                                "nodeType": "YulTypedName",
                                "src": "2270:2:88",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "2313:18:88",
                            "value": {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "2326:1:88"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "2329:1:88"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2322:3:88"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2322:9:88"
                            },
                            "variableNames": [
                              {
                                "name": "prod0",
                                "nodeType": "YulIdentifier",
                                "src": "2313:5:88"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "2348:43:88",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "mm",
                                      "nodeType": "YulIdentifier",
                                      "src": "2365:2:88"
                                    },
                                    {
                                      "name": "prod0",
                                      "nodeType": "YulIdentifier",
                                      "src": "2369:5:88"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "2361:3:88"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2361:14:88"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "mm",
                                      "nodeType": "YulIdentifier",
                                      "src": "2380:2:88"
                                    },
                                    {
                                      "name": "prod0",
                                      "nodeType": "YulIdentifier",
                                      "src": "2384:5:88"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "2377:2:88"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2377:13:88"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2357:3:88"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2357:34:88"
                            },
                            "variableNames": [
                              {
                                "name": "prod1",
                                "nodeType": "YulIdentifier",
                                "src": "2348:5:88"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 60384,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2313:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60384,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2369:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60384,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2384:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60387,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2348:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60374,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2283:1:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60374,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2326:1:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60376,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2286:1:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60376,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2329:1:88",
                          "valueSize": 1
                        }
                      ],
                      "id": 60389,
                      "nodeType": "InlineAssembly",
                      "src": "2239:166:88"
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60392,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60390,
                          "name": "prod1",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60387,
                          "src": "2486:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 60391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2495:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2486:10:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60398,
                      "nodeType": "IfStatement",
                      "src": "2482:368:88",
                      "trueBody": {
                        "id": 60397,
                        "nodeType": "Block",
                        "src": "2498:352:88",
                        "statements": [
                          {
                            "expression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 60395,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 60393,
                                "name": "prod0",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60384,
                                "src": "2816:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "id": 60394,
                                "name": "denominator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60378,
                                "src": "2824:11:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2816:19:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "functionReturnParameters": 60382,
                            "id": 60396,
                            "nodeType": "Return",
                            "src": "2809:26:88"
                          }
                        ]
                      }
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60402,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60400,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60378,
                              "src": "2960:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "id": 60401,
                              "name": "prod1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60387,
                              "src": "2974:5:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2960:19:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "hexValue": "4d6174683a206d756c446976206f766572666c6f77",
                            "id": 60403,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2981:23:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_d87093691d63b122ac2c14d1b11554b287e2431cf2b03550b3be7cffb0f86851",
                              "typeString": "literal_string \"Math: mulDiv overflow\""
                            },
                            "value": "Math: mulDiv overflow"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_d87093691d63b122ac2c14d1b11554b287e2431cf2b03550b3be7cffb0f86851",
                              "typeString": "literal_string \"Math: mulDiv overflow\""
                            }
                          ],
                          "id": 60399,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            -18,
                            -18
                          ],
                          "referencedDeclaration": -18,
                          "src": "2952:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 60404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2952:53:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 60405,
                      "nodeType": "ExpressionStatement",
                      "src": "2952:53:88"
                    },
                    {
                      "assignments": [
                        60407
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 60407,
                          "mutability": "mutable",
                          "name": "remainder",
                          "nameLocation": "3269:9:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 60492,
                          "src": "3261:17:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 60406,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3261:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 60408,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "3261:17:88"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "3301:291:88",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "3370:38:88",
                            "value": {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "3390:1:88"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "3393:1:88"
                                },
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "3396:11:88"
                                }
                              ],
                              "functionName": {
                                "name": "mulmod",
                                "nodeType": "YulIdentifier",
                                "src": "3383:6:88"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3383:25:88"
                            },
                            "variableNames": [
                              {
                                "name": "remainder",
                                "nodeType": "YulIdentifier",
                                "src": "3370:9:88"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "3490:41:88",
                            "value": {
                              "arguments": [
                                {
                                  "name": "prod1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3503:5:88"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "remainder",
                                      "nodeType": "YulIdentifier",
                                      "src": "3513:9:88"
                                    },
                                    {
                                      "name": "prod0",
                                      "nodeType": "YulIdentifier",
                                      "src": "3524:5:88"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nodeType": "YulIdentifier",
                                    "src": "3510:2:88"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3510:20:88"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3499:3:88"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3499:32:88"
                            },
                            "variableNames": [
                              {
                                "name": "prod1",
                                "nodeType": "YulIdentifier",
                                "src": "3490:5:88"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "3548:30:88",
                            "value": {
                              "arguments": [
                                {
                                  "name": "prod0",
                                  "nodeType": "YulIdentifier",
                                  "src": "3561:5:88"
                                },
                                {
                                  "name": "remainder",
                                  "nodeType": "YulIdentifier",
                                  "src": "3568:9:88"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3557:3:88"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3557:21:88"
                            },
                            "variableNames": [
                              {
                                "name": "prod0",
                                "nodeType": "YulIdentifier",
                                "src": "3548:5:88"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 60378,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3396:11:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60384,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3524:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60384,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3548:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60384,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3561:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60387,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3490:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60387,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3503:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60407,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3370:9:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60407,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3513:9:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60407,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3568:9:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60374,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3390:1:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60376,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3393:1:88",
                          "valueSize": 1
                        }
                      ],
                      "id": 60409,
                      "nodeType": "InlineAssembly",
                      "src": "3292:300:88"
                    },
                    {
                      "assignments": [
                        60411
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 60411,
                          "mutability": "mutable",
                          "name": "twos",
                          "nameLocation": "3907:4:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 60492,
                          "src": "3899:12:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 60410,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3899:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 60419,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60418,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60412,
                          "name": "denominator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60378,
                          "src": "3914:11:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&",
                        "rightExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 60416,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 60414,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "~",
                                "prefix": true,
                                "src": "3929:12:88",
                                "subExpression": {
                                  "id": 60413,
                                  "name": "denominator",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60378,
                                  "src": "3930:11:88",
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
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 60415,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3944:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "3929:16:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 60417,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "3928:18:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3914:32:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "3899:47:88"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "3969:362:88",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "4034:37:88",
                            "value": {
                              "arguments": [
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "4053:11:88"
                                },
                                {
                                  "name": "twos",
                                  "nodeType": "YulIdentifier",
                                  "src": "4066:4:88"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "4049:3:88"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4049:22:88"
                            },
                            "variableNames": [
                              {
                                "name": "denominator",
                                "nodeType": "YulIdentifier",
                                "src": "4034:11:88"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4138:25:88",
                            "value": {
                              "arguments": [
                                {
                                  "name": "prod0",
                                  "nodeType": "YulIdentifier",
                                  "src": "4151:5:88"
                                },
                                {
                                  "name": "twos",
                                  "nodeType": "YulIdentifier",
                                  "src": "4158:4:88"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "4147:3:88"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4147:16:88"
                            },
                            "variableNames": [
                              {
                                "name": "prod0",
                                "nodeType": "YulIdentifier",
                                "src": "4138:5:88"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4278:39:88",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4298:1:88",
                                          "type": "",
                                          "value": "0"
                                        },
                                        {
                                          "name": "twos",
                                          "nodeType": "YulIdentifier",
                                          "src": "4301:4:88"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "4294:3:88"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4294:12:88"
                                    },
                                    {
                                      "name": "twos",
                                      "nodeType": "YulIdentifier",
                                      "src": "4308:4:88"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "4290:3:88"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4290:23:88"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4315:1:88",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4286:3:88"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4286:31:88"
                            },
                            "variableNames": [
                              {
                                "name": "twos",
                                "nodeType": "YulIdentifier",
                                "src": "4278:4:88"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 60378,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4034:11:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60378,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4053:11:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60384,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4138:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60384,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4151:5:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60411,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4066:4:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60411,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4158:4:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60411,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4278:4:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60411,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4301:4:88",
                          "valueSize": 1
                        },
                        {
                          "declaration": 60411,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4308:4:88",
                          "valueSize": 1
                        }
                      ],
                      "id": 60420,
                      "nodeType": "InlineAssembly",
                      "src": "3960:371:88"
                    },
                    {
                      "expression": {
                        "id": 60425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60421,
                          "name": "prod0",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60384,
                          "src": "4397:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "|=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60424,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60422,
                            "name": "prod1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60387,
                            "src": "4406:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 60423,
                            "name": "twos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60411,
                            "src": "4414:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4406:12:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4397:21:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60426,
                      "nodeType": "ExpressionStatement",
                      "src": "4397:21:88"
                    },
                    {
                      "assignments": [
                        60428
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 60428,
                          "mutability": "mutable",
                          "name": "inverse",
                          "nameLocation": "4744:7:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 60492,
                          "src": "4736:15:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 60427,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4736:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 60435,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60434,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 60431,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "33",
                                "id": 60429,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4755:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_3_by_1",
                                  "typeString": "int_const 3"
                                },
                                "value": "3"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 60430,
                                "name": "denominator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60378,
                                "src": "4759:11:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "4755:15:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 60432,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "4754:17:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "^",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 60433,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4774:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "4754:21:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4736:39:88"
                    },
                    {
                      "expression": {
                        "id": 60442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60436,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60428,
                          "src": "4992:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60441,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 60437,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5003:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60440,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60438,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60378,
                              "src": "5007:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 60439,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60428,
                              "src": "5021:7:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5007:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5003:25:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4992:36:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60443,
                      "nodeType": "ExpressionStatement",
                      "src": "4992:36:88"
                    },
                    {
                      "expression": {
                        "id": 60450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60444,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60428,
                          "src": "5061:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60449,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 60445,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5072:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60448,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60446,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60378,
                              "src": "5076:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 60447,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60428,
                              "src": "5090:7:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5076:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5072:25:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5061:36:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60451,
                      "nodeType": "ExpressionStatement",
                      "src": "5061:36:88"
                    },
                    {
                      "expression": {
                        "id": 60458,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60452,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60428,
                          "src": "5131:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60457,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 60453,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5142:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60456,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60454,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60378,
                              "src": "5146:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 60455,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60428,
                              "src": "5160:7:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5146:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5142:25:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5131:36:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60459,
                      "nodeType": "ExpressionStatement",
                      "src": "5131:36:88"
                    },
                    {
                      "expression": {
                        "id": 60466,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60460,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60428,
                          "src": "5201:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60465,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 60461,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5212:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60464,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60462,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60378,
                              "src": "5216:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 60463,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60428,
                              "src": "5230:7:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5216:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5212:25:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5201:36:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60467,
                      "nodeType": "ExpressionStatement",
                      "src": "5201:36:88"
                    },
                    {
                      "expression": {
                        "id": 60474,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60468,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60428,
                          "src": "5271:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60473,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 60469,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5282:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60472,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60470,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60378,
                              "src": "5286:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 60471,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60428,
                              "src": "5300:7:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5286:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5282:25:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5271:36:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60475,
                      "nodeType": "ExpressionStatement",
                      "src": "5271:36:88"
                    },
                    {
                      "expression": {
                        "id": 60482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60476,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60428,
                          "src": "5342:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60481,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 60477,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5353:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60480,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60478,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60378,
                              "src": "5357:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 60479,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60428,
                              "src": "5371:7:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5357:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5353:25:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5342:36:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60483,
                      "nodeType": "ExpressionStatement",
                      "src": "5342:36:88"
                    },
                    {
                      "expression": {
                        "id": 60488,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60484,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60381,
                          "src": "5812:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60487,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60485,
                            "name": "prod0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60384,
                            "src": "5821:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 60486,
                            "name": "inverse",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60428,
                            "src": "5829:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5821:15:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5812:24:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60489,
                      "nodeType": "ExpressionStatement",
                      "src": "5812:24:88"
                    },
                    {
                      "expression": {
                        "id": 60490,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60381,
                        "src": "5857:6:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 60382,
                      "id": 60491,
                      "nodeType": "Return",
                      "src": "5850:13:88"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 60372,
              "nodeType": "StructuredDocumentation",
              "src": "1357:305:88",
              "text": " @notice Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or denominator == 0\n @dev Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv)\n with further edits by Uniswap Labs also under MIT license."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDiv",
            "nameLocation": "1676:6:88",
            "parameters": {
              "id": 60379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60374,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1691:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60494,
                  "src": "1683:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60373,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1683:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60376,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1702:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60494,
                  "src": "1694:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60375,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1694:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60378,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "1713:11:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60494,
                  "src": "1705:19:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60377,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1705:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1682:43:88"
            },
            "returnParameters": {
              "id": 60382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60381,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "1757:6:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60494,
                  "src": "1749:14:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1749:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1748:16:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60538,
            "nodeType": "FunctionDefinition",
            "src": "6012:299:88",
            "nodes": [],
            "body": {
              "id": 60537,
              "nodeType": "Block",
              "src": "6122:189:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60510
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60510,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "6140:6:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60537,
                      "src": "6132:14:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60509,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6132:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60516,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60512,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60497,
                        "src": "6156:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60513,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60499,
                        "src": "6159:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 60514,
                        "name": "denominator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60501,
                        "src": "6162:11:88",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 60511,
                      "name": "mulDiv",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        60494,
                        60538
                      ],
                      "referencedDeclaration": 60494,
                      "src": "6149:6:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 60515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6149:25:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6132:42:88"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 60528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_enum$_Rounding_$60287",
                        "typeString": "enum Math.Rounding"
                      },
                      "id": 60520,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 60517,
                        "name": "rounding",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60504,
                        "src": "6188:8:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_Rounding_$60287",
                          "typeString": "enum Math.Rounding"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "id": 60518,
                          "name": "Rounding",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60287,
                          "src": "6200:8:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_Rounding_$60287_$",
                            "typeString": "type(enum Math.Rounding)"
                          }
                        },
                        "id": 60519,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6209:2:88",
                        "memberName": "Up",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60285,
                        "src": "6200:11:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_Rounding_$60287",
                          "typeString": "enum Math.Rounding"
                        }
                      },
                      "src": "6188:23:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 60527,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 60522,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60497,
                            "src": "6222:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 60523,
                            "name": "y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60499,
                            "src": "6225:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 60524,
                            "name": "denominator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60501,
                            "src": "6228:11:88",
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
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 60521,
                          "name": "mulmod",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -16,
                          "src": "6215:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_mulmod_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 60525,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6215:25:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 60526,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6243:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "6215:29:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6188:56:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60534,
                  "nodeType": "IfStatement",
                  "src": "6184:98:88",
                  "trueBody": {
                    "id": 60533,
                    "nodeType": "Block",
                    "src": "6246:36:88",
                    "statements": [
                      {
                        "expression": {
                          "id": 60531,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 60529,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60510,
                            "src": "6260:6:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "hexValue": "31",
                            "id": 60530,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6270:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "6260:11:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 60532,
                        "nodeType": "ExpressionStatement",
                        "src": "6260:11:88"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 60535,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60510,
                    "src": "6298:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60508,
                  "id": 60536,
                  "nodeType": "Return",
                  "src": "6291:13:88"
                }
              ]
            },
            "documentation": {
              "id": 60495,
              "nodeType": "StructuredDocumentation",
              "src": "5886:121:88",
              "text": " @notice Calculates x * y / denominator with full precision, following the selected rounding direction."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDiv",
            "nameLocation": "6021:6:88",
            "parameters": {
              "id": 60505,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60497,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "6036:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60538,
                  "src": "6028:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60496,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6028:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60499,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "6047:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60538,
                  "src": "6039:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60498,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6039:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60501,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "6058:11:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60538,
                  "src": "6050:19:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60500,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6050:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60504,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "6080:8:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60538,
                  "src": "6071:17:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60287",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 60503,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60502,
                      "name": "Rounding",
                      "nameLocations": [
                        "6071:8:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60287,
                      "src": "6071:8:88"
                    },
                    "referencedDeclaration": 60287,
                    "src": "6071:8:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60287",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6027:62:88"
            },
            "returnParameters": {
              "id": 60508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60507,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60538,
                  "src": "6113:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60506,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6113:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6112:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60650,
            "nodeType": "FunctionDefinition",
            "src": "6530:1642:88",
            "nodes": [],
            "body": {
              "id": 60649,
              "nodeType": "Block",
              "src": "6587:1585:88",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60548,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60546,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60541,
                      "src": "6601:1:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 60547,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6606:1:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6601:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60552,
                  "nodeType": "IfStatement",
                  "src": "6597:45:88",
                  "trueBody": {
                    "id": 60551,
                    "nodeType": "Block",
                    "src": "6609:33:88",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 60549,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6630:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 60545,
                        "id": 60550,
                        "nodeType": "Return",
                        "src": "6623:8:88"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    60554
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60554,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7329:6:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60649,
                      "src": "7321:14:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60553,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7321:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60563,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "31",
                      "id": 60555,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7338:1:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<<",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60560,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 60557,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60541,
                                "src": "7349:1:88",
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
                              "id": 60556,
                              "name": "log2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                60818,
                                60854
                              ],
                              "referencedDeclaration": 60818,
                              "src": "7344:4:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (uint256)"
                              }
                            },
                            "id": 60558,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7344:7:88",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60559,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7355:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7344:12:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 60561,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "7343:14:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7338:19:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7321:36:88"
                },
                {
                  "id": 60648,
                  "nodeType": "UncheckedBlock",
                  "src": "7758:408:88",
                  "statements": [
                    {
                      "expression": {
                        "id": 60573,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60564,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60554,
                          "src": "7782:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60572,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 60569,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 60565,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60554,
                                  "src": "7792:6:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 60568,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 60566,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60541,
                                    "src": "7801:1:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 60567,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60554,
                                    "src": "7805:6:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7801:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7792:19:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 60570,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7791:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60571,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7816:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7791:26:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7782:35:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60574,
                      "nodeType": "ExpressionStatement",
                      "src": "7782:35:88"
                    },
                    {
                      "expression": {
                        "id": 60584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60575,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60554,
                          "src": "7831:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60583,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 60580,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 60576,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60554,
                                  "src": "7841:6:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 60579,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 60577,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60541,
                                    "src": "7850:1:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 60578,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60554,
                                    "src": "7854:6:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7850:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7841:19:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 60581,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7840:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60582,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7865:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7840:26:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7831:35:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60585,
                      "nodeType": "ExpressionStatement",
                      "src": "7831:35:88"
                    },
                    {
                      "expression": {
                        "id": 60595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60586,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60554,
                          "src": "7880:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 60591,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 60587,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60554,
                                  "src": "7890:6:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 60590,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 60588,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60541,
                                    "src": "7899:1:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 60589,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60554,
                                    "src": "7903:6:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7899:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7890:19:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 60592,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7889:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60593,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7914:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7889:26:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7880:35:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60596,
                      "nodeType": "ExpressionStatement",
                      "src": "7880:35:88"
                    },
                    {
                      "expression": {
                        "id": 60606,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60597,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60554,
                          "src": "7929:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60605,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 60602,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 60598,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60554,
                                  "src": "7939:6:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 60601,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 60599,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60541,
                                    "src": "7948:1:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 60600,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60554,
                                    "src": "7952:6:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7948:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7939:19:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 60603,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7938:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60604,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7963:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7938:26:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7929:35:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60607,
                      "nodeType": "ExpressionStatement",
                      "src": "7929:35:88"
                    },
                    {
                      "expression": {
                        "id": 60617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60608,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60554,
                          "src": "7978:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60616,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 60613,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 60609,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60554,
                                  "src": "7988:6:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 60612,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 60610,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60541,
                                    "src": "7997:1:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 60611,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60554,
                                    "src": "8001:6:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7997:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7988:19:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 60614,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7987:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60615,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8012:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7987:26:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7978:35:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60618,
                      "nodeType": "ExpressionStatement",
                      "src": "7978:35:88"
                    },
                    {
                      "expression": {
                        "id": 60628,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60619,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60554,
                          "src": "8027:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60627,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 60624,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 60620,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60554,
                                  "src": "8037:6:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 60623,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 60621,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60541,
                                    "src": "8046:1:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 60622,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60554,
                                    "src": "8050:6:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "8046:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "8037:19:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 60625,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8036:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60626,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8061:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "8036:26:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8027:35:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60629,
                      "nodeType": "ExpressionStatement",
                      "src": "8027:35:88"
                    },
                    {
                      "expression": {
                        "id": 60639,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 60630,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60554,
                          "src": "8076:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60638,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 60635,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 60631,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60554,
                                  "src": "8086:6:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 60634,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 60632,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60541,
                                    "src": "8095:1:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 60633,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60554,
                                    "src": "8099:6:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "8095:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "8086:19:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 60636,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8085:21:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60637,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8110:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "8085:26:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8076:35:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 60640,
                      "nodeType": "ExpressionStatement",
                      "src": "8076:35:88"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 60642,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60554,
                            "src": "8136:6:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60645,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60643,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60541,
                              "src": "8144:1:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 60644,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60554,
                              "src": "8148:6:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "8144:10:88",
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
                          "id": 60641,
                          "name": "min",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60323,
                          "src": "8132:3:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 60646,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8132:23:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 60545,
                      "id": 60647,
                      "nodeType": "Return",
                      "src": "8125:30:88"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 60539,
              "nodeType": "StructuredDocumentation",
              "src": "6317:208:88",
              "text": " @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded down.\n Inspired by Henry S. Warren, Jr.'s \"Hacker's Delight\" (Chapter 11)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "6539:4:88",
            "parameters": {
              "id": 60542,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60541,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6552:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60650,
                  "src": "6544:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60540,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6544:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6543:11:88"
            },
            "returnParameters": {
              "id": 60545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60544,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60650,
                  "src": "6578:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60543,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6578:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6577:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60686,
            "nodeType": "FunctionDefinition",
            "src": "8272:237:88",
            "nodes": [],
            "body": {
              "id": 60685,
              "nodeType": "Block",
              "src": "8348:161:88",
              "nodes": [],
              "statements": [
                {
                  "id": 60684,
                  "nodeType": "UncheckedBlock",
                  "src": "8358:145:88",
                  "statements": [
                    {
                      "assignments": [
                        60662
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 60662,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "8390:6:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 60684,
                          "src": "8382:14:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 60661,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8382:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 60666,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 60664,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60653,
                            "src": "8404:1:88",
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
                          "id": 60663,
                          "name": "sqrt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            60650,
                            60686
                          ],
                          "referencedDeclaration": 60650,
                          "src": "8399:4:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 60665,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8399:7:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "8382:24:88"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60682,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60667,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60662,
                          "src": "8427:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "components": [
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 60677,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_Rounding_$60287",
                                    "typeString": "enum Math.Rounding"
                                  },
                                  "id": 60671,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 60668,
                                    "name": "rounding",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60656,
                                    "src": "8437:8:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60287",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "expression": {
                                      "id": 60669,
                                      "name": "Rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60287,
                                      "src": "8449:8:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_Rounding_$60287_$",
                                        "typeString": "type(enum Math.Rounding)"
                                      }
                                    },
                                    "id": 60670,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "8458:2:88",
                                    "memberName": "Up",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 60285,
                                    "src": "8449:11:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60287",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "src": "8437:23:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&&",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 60676,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 60674,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 60672,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60662,
                                      "src": "8464:6:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "*",
                                    "rightExpression": {
                                      "id": 60673,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60662,
                                      "src": "8473:6:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "8464:15:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 60675,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60653,
                                    "src": "8482:1:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "8464:19:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "8437:46:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 60679,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8490:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 60680,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "8437:54:88",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 60678,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8486:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 60681,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "8436:56:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "8427:65:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 60660,
                      "id": 60683,
                      "nodeType": "Return",
                      "src": "8420:72:88"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 60651,
              "nodeType": "StructuredDocumentation",
              "src": "8178:89:88",
              "text": " @notice Calculates sqrt(a), following the selected rounding direction."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "8281:4:88",
            "parameters": {
              "id": 60657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60653,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "8294:1:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60686,
                  "src": "8286:9:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60652,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8286:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60656,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "8306:8:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60686,
                  "src": "8297:17:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60287",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 60655,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60654,
                      "name": "Rounding",
                      "nameLocations": [
                        "8297:8:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60287,
                      "src": "8297:8:88"
                    },
                    "referencedDeclaration": 60287,
                    "src": "8297:8:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60287",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8285:30:88"
            },
            "returnParameters": {
              "id": 60660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60659,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60686,
                  "src": "8339:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60658,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8339:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8338:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60818,
            "nodeType": "FunctionDefinition",
            "src": "8633:983:88",
            "nodes": [],
            "body": {
              "id": 60817,
              "nodeType": "Block",
              "src": "8694:922:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60695
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60695,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "8712:6:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60817,
                      "src": "8704:14:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60694,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8704:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60697,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 60696,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "8721:1:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8704:18:88"
                },
                {
                  "id": 60814,
                  "nodeType": "UncheckedBlock",
                  "src": "8732:855:88",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60702,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60700,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60698,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60689,
                            "src": "8760:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "313238",
                            "id": 60699,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8769:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_128_by_1",
                              "typeString": "int_const 128"
                            },
                            "value": "128"
                          },
                          "src": "8760:12:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 60701,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8775:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "8760:16:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60712,
                      "nodeType": "IfStatement",
                      "src": "8756:99:88",
                      "trueBody": {
                        "id": 60711,
                        "nodeType": "Block",
                        "src": "8778:77:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60705,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60703,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60689,
                                "src": "8796:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "313238",
                                "id": 60704,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8806:3:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_128_by_1",
                                  "typeString": "int_const 128"
                                },
                                "value": "128"
                              },
                              "src": "8796:13:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60706,
                            "nodeType": "ExpressionStatement",
                            "src": "8796:13:88"
                          },
                          {
                            "expression": {
                              "id": 60709,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60707,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60695,
                                "src": "8827:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "313238",
                                "id": 60708,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8837:3:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_128_by_1",
                                  "typeString": "int_const 128"
                                },
                                "value": "128"
                              },
                              "src": "8827:13:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60710,
                            "nodeType": "ExpressionStatement",
                            "src": "8827:13:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60717,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60715,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60713,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60689,
                            "src": "8872:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3634",
                            "id": 60714,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8881:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_64_by_1",
                              "typeString": "int_const 64"
                            },
                            "value": "64"
                          },
                          "src": "8872:11:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 60716,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8886:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "8872:15:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60727,
                      "nodeType": "IfStatement",
                      "src": "8868:96:88",
                      "trueBody": {
                        "id": 60726,
                        "nodeType": "Block",
                        "src": "8889:75:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60720,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60718,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60689,
                                "src": "8907:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 60719,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8917:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "8907:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60721,
                            "nodeType": "ExpressionStatement",
                            "src": "8907:12:88"
                          },
                          {
                            "expression": {
                              "id": 60724,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60722,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60695,
                                "src": "8937:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 60723,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8947:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "8937:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60725,
                            "nodeType": "ExpressionStatement",
                            "src": "8937:12:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60728,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60689,
                            "src": "8981:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3332",
                            "id": 60729,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8990:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_32_by_1",
                              "typeString": "int_const 32"
                            },
                            "value": "32"
                          },
                          "src": "8981:11:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 60731,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8995:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "8981:15:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60742,
                      "nodeType": "IfStatement",
                      "src": "8977:96:88",
                      "trueBody": {
                        "id": 60741,
                        "nodeType": "Block",
                        "src": "8998:75:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60735,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60733,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60689,
                                "src": "9016:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 60734,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9026:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "9016:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60736,
                            "nodeType": "ExpressionStatement",
                            "src": "9016:12:88"
                          },
                          {
                            "expression": {
                              "id": 60739,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60737,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60695,
                                "src": "9046:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 60738,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9056:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "9046:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60740,
                            "nodeType": "ExpressionStatement",
                            "src": "9046:12:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60745,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60743,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60689,
                            "src": "9090:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3136",
                            "id": 60744,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9099:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "9090:11:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 60746,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9104:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9090:15:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60757,
                      "nodeType": "IfStatement",
                      "src": "9086:96:88",
                      "trueBody": {
                        "id": 60756,
                        "nodeType": "Block",
                        "src": "9107:75:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60750,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60748,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60689,
                                "src": "9125:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 60749,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9135:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "9125:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60751,
                            "nodeType": "ExpressionStatement",
                            "src": "9125:12:88"
                          },
                          {
                            "expression": {
                              "id": 60754,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60752,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60695,
                                "src": "9155:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 60753,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9165:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "9155:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60755,
                            "nodeType": "ExpressionStatement",
                            "src": "9155:12:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60762,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60760,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60758,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60689,
                            "src": "9199:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "38",
                            "id": 60759,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9208:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "9199:10:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 60761,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9212:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9199:14:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60772,
                      "nodeType": "IfStatement",
                      "src": "9195:93:88",
                      "trueBody": {
                        "id": 60771,
                        "nodeType": "Block",
                        "src": "9215:73:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60765,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60763,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60689,
                                "src": "9233:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 60764,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9243:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "9233:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60766,
                            "nodeType": "ExpressionStatement",
                            "src": "9233:11:88"
                          },
                          {
                            "expression": {
                              "id": 60769,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60767,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60695,
                                "src": "9262:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 60768,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9272:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "9262:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60770,
                            "nodeType": "ExpressionStatement",
                            "src": "9262:11:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60777,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60775,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60773,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60689,
                            "src": "9305:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "34",
                            "id": 60774,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9314:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "9305:10:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 60776,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9318:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9305:14:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60787,
                      "nodeType": "IfStatement",
                      "src": "9301:93:88",
                      "trueBody": {
                        "id": 60786,
                        "nodeType": "Block",
                        "src": "9321:73:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60780,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60778,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60689,
                                "src": "9339:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 60779,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9349:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "9339:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60781,
                            "nodeType": "ExpressionStatement",
                            "src": "9339:11:88"
                          },
                          {
                            "expression": {
                              "id": 60784,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60782,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60695,
                                "src": "9368:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 60783,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9378:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "9368:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60785,
                            "nodeType": "ExpressionStatement",
                            "src": "9368:11:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60792,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60790,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60788,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60689,
                            "src": "9411:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "32",
                            "id": 60789,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9420:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "9411:10:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 60791,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9424:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9411:14:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60802,
                      "nodeType": "IfStatement",
                      "src": "9407:93:88",
                      "trueBody": {
                        "id": 60801,
                        "nodeType": "Block",
                        "src": "9427:73:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60795,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60793,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60689,
                                "src": "9445:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 60794,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9455:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "9445:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60796,
                            "nodeType": "ExpressionStatement",
                            "src": "9445:11:88"
                          },
                          {
                            "expression": {
                              "id": 60799,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60797,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60695,
                                "src": "9474:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 60798,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9484:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "9474:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60800,
                            "nodeType": "ExpressionStatement",
                            "src": "9474:11:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60807,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60805,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60803,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60689,
                            "src": "9517:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60804,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9526:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "9517:10:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 60806,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9530:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9517:14:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60813,
                      "nodeType": "IfStatement",
                      "src": "9513:64:88",
                      "trueBody": {
                        "id": 60812,
                        "nodeType": "Block",
                        "src": "9533:44:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60810,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60808,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60695,
                                "src": "9551:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 60809,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9561:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "9551:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60811,
                            "nodeType": "ExpressionStatement",
                            "src": "9551:11:88"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 60815,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60695,
                    "src": "9603:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60693,
                  "id": 60816,
                  "nodeType": "Return",
                  "src": "9596:13:88"
                }
              ]
            },
            "documentation": {
              "id": 60687,
              "nodeType": "StructuredDocumentation",
              "src": "8515:113:88",
              "text": " @dev Return the log in base 2, rounded down, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log2",
            "nameLocation": "8642:4:88",
            "parameters": {
              "id": 60690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60689,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8655:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60818,
                  "src": "8647:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60688,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8647:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8646:15:88"
            },
            "returnParameters": {
              "id": 60693,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60692,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60818,
                  "src": "8685:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60691,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8685:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8684:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60854,
            "nodeType": "FunctionDefinition",
            "src": "9769:245:88",
            "nodes": [],
            "body": {
              "id": 60853,
              "nodeType": "Block",
              "src": "9849:165:88",
              "nodes": [],
              "statements": [
                {
                  "id": 60852,
                  "nodeType": "UncheckedBlock",
                  "src": "9859:149:88",
                  "statements": [
                    {
                      "assignments": [
                        60830
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 60830,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "9891:6:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 60852,
                          "src": "9883:14:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 60829,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9883:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 60834,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 60832,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60821,
                            "src": "9905:5:88",
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
                          "id": 60831,
                          "name": "log2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            60818,
                            60854
                          ],
                          "referencedDeclaration": 60818,
                          "src": "9900:4:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 60833,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9900:11:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "9883:28:88"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60850,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60835,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60830,
                          "src": "9932:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "components": [
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 60845,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_Rounding_$60287",
                                    "typeString": "enum Math.Rounding"
                                  },
                                  "id": 60839,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 60836,
                                    "name": "rounding",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60824,
                                    "src": "9942:8:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60287",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "expression": {
                                      "id": 60837,
                                      "name": "Rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60287,
                                      "src": "9954:8:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_Rounding_$60287_$",
                                        "typeString": "type(enum Math.Rounding)"
                                      }
                                    },
                                    "id": 60838,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "9963:2:88",
                                    "memberName": "Up",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 60285,
                                    "src": "9954:11:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60287",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "src": "9942:23:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&&",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 60844,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 60842,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "31",
                                      "id": 60840,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "9969:1:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "<<",
                                    "rightExpression": {
                                      "id": 60841,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60830,
                                      "src": "9974:6:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "9969:11:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 60843,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60821,
                                    "src": "9983:5:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "9969:19:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "9942:46:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 60847,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9995:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 60848,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "9942:54:88",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 60846,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9991:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 60849,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "9941:56:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "9932:65:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 60828,
                      "id": 60851,
                      "nodeType": "Return",
                      "src": "9925:72:88"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 60819,
              "nodeType": "StructuredDocumentation",
              "src": "9622:142:88",
              "text": " @dev Return the log in base 2, following the selected rounding direction, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log2",
            "nameLocation": "9778:4:88",
            "parameters": {
              "id": 60825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60821,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9791:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60854,
                  "src": "9783:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9783:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60824,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "9807:8:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60854,
                  "src": "9798:17:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60287",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 60823,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60822,
                      "name": "Rounding",
                      "nameLocations": [
                        "9798:8:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60287,
                      "src": "9798:8:88"
                    },
                    "referencedDeclaration": 60287,
                    "src": "9798:8:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60287",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9782:34:88"
            },
            "returnParameters": {
              "id": 60828,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60827,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60854,
                  "src": "9840:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60826,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9840:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9839:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60983,
            "nodeType": "FunctionDefinition",
            "src": "10139:916:88",
            "nodes": [],
            "body": {
              "id": 60982,
              "nodeType": "Block",
              "src": "10201:854:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60863
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60863,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "10219:6:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 60982,
                      "src": "10211:14:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60862,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10211:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60865,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 60864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "10228:1:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10211:18:88"
                },
                {
                  "id": 60979,
                  "nodeType": "UncheckedBlock",
                  "src": "10239:787:88",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60866,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60857,
                          "src": "10267:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(57 digits omitted)...0000"
                          },
                          "id": 60869,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 60867,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10276:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "3634",
                            "id": 60868,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10282:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_64_by_1",
                              "typeString": "int_const 64"
                            },
                            "value": "64"
                          },
                          "src": "10276:8:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(57 digits omitted)...0000"
                          }
                        },
                        "src": "10267:17:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60882,
                      "nodeType": "IfStatement",
                      "src": "10263:103:88",
                      "trueBody": {
                        "id": 60881,
                        "nodeType": "Block",
                        "src": "10286:80:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60875,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60871,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60857,
                                "src": "10304:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(57 digits omitted)...0000"
                                },
                                "id": 60874,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 60872,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10313:2:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "3634",
                                  "id": 60873,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10319:2:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_64_by_1",
                                    "typeString": "int_const 64"
                                  },
                                  "value": "64"
                                },
                                "src": "10313:8:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(57 digits omitted)...0000"
                                }
                              },
                              "src": "10304:17:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60876,
                            "nodeType": "ExpressionStatement",
                            "src": "10304:17:88"
                          },
                          {
                            "expression": {
                              "id": 60879,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60877,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60863,
                                "src": "10339:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 60878,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10349:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "10339:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60880,
                            "nodeType": "ExpressionStatement",
                            "src": "10339:12:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60887,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60883,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60857,
                          "src": "10383:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(25 digits omitted)...0000"
                          },
                          "id": 60886,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 60884,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10392:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "3332",
                            "id": 60885,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10398:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_32_by_1",
                              "typeString": "int_const 32"
                            },
                            "value": "32"
                          },
                          "src": "10392:8:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(25 digits omitted)...0000"
                          }
                        },
                        "src": "10383:17:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60899,
                      "nodeType": "IfStatement",
                      "src": "10379:103:88",
                      "trueBody": {
                        "id": 60898,
                        "nodeType": "Block",
                        "src": "10402:80:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60892,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60888,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60857,
                                "src": "10420:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(25 digits omitted)...0000"
                                },
                                "id": 60891,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 60889,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10429:2:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "3332",
                                  "id": 60890,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10435:2:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_32_by_1",
                                    "typeString": "int_const 32"
                                  },
                                  "value": "32"
                                },
                                "src": "10429:8:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(25 digits omitted)...0000"
                                }
                              },
                              "src": "10420:17:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60893,
                            "nodeType": "ExpressionStatement",
                            "src": "10420:17:88"
                          },
                          {
                            "expression": {
                              "id": 60896,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60894,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60863,
                                "src": "10455:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 60895,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10465:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "10455:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60897,
                            "nodeType": "ExpressionStatement",
                            "src": "10455:12:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60900,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60857,
                          "src": "10499:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_10000000000000000_by_1",
                            "typeString": "int_const 10000000000000000"
                          },
                          "id": 60903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 60901,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10508:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "3136",
                            "id": 60902,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10514:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "10508:8:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000_by_1",
                            "typeString": "int_const 10000000000000000"
                          }
                        },
                        "src": "10499:17:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60916,
                      "nodeType": "IfStatement",
                      "src": "10495:103:88",
                      "trueBody": {
                        "id": 60915,
                        "nodeType": "Block",
                        "src": "10518:80:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60909,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60905,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60857,
                                "src": "10536:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_10000000000000000_by_1",
                                  "typeString": "int_const 10000000000000000"
                                },
                                "id": 60908,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 60906,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10545:2:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "3136",
                                  "id": 60907,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10551:2:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "10545:8:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10000000000000000_by_1",
                                  "typeString": "int_const 10000000000000000"
                                }
                              },
                              "src": "10536:17:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60910,
                            "nodeType": "ExpressionStatement",
                            "src": "10536:17:88"
                          },
                          {
                            "expression": {
                              "id": 60913,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60911,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60863,
                                "src": "10571:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 60912,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10581:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "10571:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60914,
                            "nodeType": "ExpressionStatement",
                            "src": "10571:12:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60921,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60917,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60857,
                          "src": "10615:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_100000000_by_1",
                            "typeString": "int_const 100000000"
                          },
                          "id": 60920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 60918,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10624:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "38",
                            "id": 60919,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10630:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "10624:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000000_by_1",
                            "typeString": "int_const 100000000"
                          }
                        },
                        "src": "10615:16:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60933,
                      "nodeType": "IfStatement",
                      "src": "10611:100:88",
                      "trueBody": {
                        "id": 60932,
                        "nodeType": "Block",
                        "src": "10633:78:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60926,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60922,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60857,
                                "src": "10651:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_100000000_by_1",
                                  "typeString": "int_const 100000000"
                                },
                                "id": 60925,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 60923,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10660:2:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "38",
                                  "id": 60924,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10666:1:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "10660:7:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100000000_by_1",
                                  "typeString": "int_const 100000000"
                                }
                              },
                              "src": "10651:16:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60927,
                            "nodeType": "ExpressionStatement",
                            "src": "10651:16:88"
                          },
                          {
                            "expression": {
                              "id": 60930,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60928,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60863,
                                "src": "10685:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 60929,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10695:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "10685:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60931,
                            "nodeType": "ExpressionStatement",
                            "src": "10685:11:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60934,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60857,
                          "src": "10728:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_10000_by_1",
                            "typeString": "int_const 10000"
                          },
                          "id": 60937,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 60935,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10737:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "34",
                            "id": 60936,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10743:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "10737:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000_by_1",
                            "typeString": "int_const 10000"
                          }
                        },
                        "src": "10728:16:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60950,
                      "nodeType": "IfStatement",
                      "src": "10724:100:88",
                      "trueBody": {
                        "id": 60949,
                        "nodeType": "Block",
                        "src": "10746:78:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60943,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60939,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60857,
                                "src": "10764:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_10000_by_1",
                                  "typeString": "int_const 10000"
                                },
                                "id": 60942,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 60940,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10773:2:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "34",
                                  "id": 60941,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10779:1:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_4_by_1",
                                    "typeString": "int_const 4"
                                  },
                                  "value": "4"
                                },
                                "src": "10773:7:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10000_by_1",
                                  "typeString": "int_const 10000"
                                }
                              },
                              "src": "10764:16:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60944,
                            "nodeType": "ExpressionStatement",
                            "src": "10764:16:88"
                          },
                          {
                            "expression": {
                              "id": 60947,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60945,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60863,
                                "src": "10798:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 60946,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10808:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "10798:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60948,
                            "nodeType": "ExpressionStatement",
                            "src": "10798:11:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60955,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60951,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60857,
                          "src": "10841:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_100_by_1",
                            "typeString": "int_const 100"
                          },
                          "id": 60954,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 60952,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10850:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "32",
                            "id": 60953,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10856:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "10850:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100_by_1",
                            "typeString": "int_const 100"
                          }
                        },
                        "src": "10841:16:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60967,
                      "nodeType": "IfStatement",
                      "src": "10837:100:88",
                      "trueBody": {
                        "id": 60966,
                        "nodeType": "Block",
                        "src": "10859:78:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60960,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60956,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60857,
                                "src": "10877:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                },
                                "id": 60959,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 60957,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10886:2:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "32",
                                  "id": 60958,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10892:1:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_2_by_1",
                                    "typeString": "int_const 2"
                                  },
                                  "value": "2"
                                },
                                "src": "10886:7:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                }
                              },
                              "src": "10877:16:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60961,
                            "nodeType": "ExpressionStatement",
                            "src": "10877:16:88"
                          },
                          {
                            "expression": {
                              "id": 60964,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60962,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60863,
                                "src": "10911:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 60963,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10921:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "10911:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60965,
                            "nodeType": "ExpressionStatement",
                            "src": "10911:11:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 60972,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 60968,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60857,
                          "src": "10954:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "id": 60971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 60969,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10963:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 60970,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10969:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "10963:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          }
                        },
                        "src": "10954:16:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 60978,
                      "nodeType": "IfStatement",
                      "src": "10950:66:88",
                      "trueBody": {
                        "id": 60977,
                        "nodeType": "Block",
                        "src": "10972:44:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 60975,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 60973,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60863,
                                "src": "10990:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 60974,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11000:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "10990:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 60976,
                            "nodeType": "ExpressionStatement",
                            "src": "10990:11:88"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 60980,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60863,
                    "src": "11042:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60861,
                  "id": 60981,
                  "nodeType": "Return",
                  "src": "11035:13:88"
                }
              ]
            },
            "documentation": {
              "id": 60855,
              "nodeType": "StructuredDocumentation",
              "src": "10020:114:88",
              "text": " @dev Return the log in base 10, rounded down, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log10",
            "nameLocation": "10148:5:88",
            "parameters": {
              "id": 60858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60857,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10162:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 60983,
                  "src": "10154:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60856,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10154:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10153:15:88"
            },
            "returnParameters": {
              "id": 60861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60860,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60983,
                  "src": "10192:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60859,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10192:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10191:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61019,
            "nodeType": "FunctionDefinition",
            "src": "11209:248:88",
            "nodes": [],
            "body": {
              "id": 61018,
              "nodeType": "Block",
              "src": "11290:167:88",
              "nodes": [],
              "statements": [
                {
                  "id": 61017,
                  "nodeType": "UncheckedBlock",
                  "src": "11300:151:88",
                  "statements": [
                    {
                      "assignments": [
                        60995
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 60995,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "11332:6:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 61017,
                          "src": "11324:14:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 60994,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11324:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 60999,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 60997,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60986,
                            "src": "11347:5:88",
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
                          "id": 60996,
                          "name": "log10",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            60983,
                            61019
                          ],
                          "referencedDeclaration": 60983,
                          "src": "11341:5:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 60998,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11341:12:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "11324:29:88"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61015,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61000,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60995,
                          "src": "11374:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "components": [
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 61010,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_Rounding_$60287",
                                    "typeString": "enum Math.Rounding"
                                  },
                                  "id": 61004,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61001,
                                    "name": "rounding",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60989,
                                    "src": "11384:8:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60287",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "expression": {
                                      "id": 61002,
                                      "name": "Rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60287,
                                      "src": "11396:8:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_Rounding_$60287_$",
                                        "typeString": "type(enum Math.Rounding)"
                                      }
                                    },
                                    "id": 61003,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "11405:2:88",
                                    "memberName": "Up",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 60285,
                                    "src": "11396:11:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60287",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "src": "11384:23:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&&",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 61009,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 61007,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "3130",
                                      "id": 61005,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "11411:2:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_10_by_1",
                                        "typeString": "int_const 10"
                                      },
                                      "value": "10"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "**",
                                    "rightExpression": {
                                      "id": 61006,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60995,
                                      "src": "11417:6:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "11411:12:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 61008,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60986,
                                    "src": "11426:5:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "11411:20:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "11384:47:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 61012,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11438:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 61013,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "11384:55:88",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 61011,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11434:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 61014,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "11383:57:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "11374:66:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 60993,
                      "id": 61016,
                      "nodeType": "Return",
                      "src": "11367:73:88"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 60984,
              "nodeType": "StructuredDocumentation",
              "src": "11061:143:88",
              "text": " @dev Return the log in base 10, following the selected rounding direction, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log10",
            "nameLocation": "11218:5:88",
            "parameters": {
              "id": 60990,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60986,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11232:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 61019,
                  "src": "11224:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60985,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11224:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60989,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "11248:8:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 61019,
                  "src": "11239:17:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60287",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 60988,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60987,
                      "name": "Rounding",
                      "nameLocations": [
                        "11239:8:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60287,
                      "src": "11239:8:88"
                    },
                    "referencedDeclaration": 60287,
                    "src": "11239:8:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60287",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11223:34:88"
            },
            "returnParameters": {
              "id": 60993,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60992,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61019,
                  "src": "11281:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60991,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11281:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11280:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61106,
            "nodeType": "FunctionDefinition",
            "src": "11708:663:88",
            "nodes": [],
            "body": {
              "id": 61105,
              "nodeType": "Block",
              "src": "11771:600:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61028
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61028,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "11789:6:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 61105,
                      "src": "11781:14:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 61027,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11781:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61030,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 61029,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "11798:1:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11781:18:88"
                },
                {
                  "id": 61102,
                  "nodeType": "UncheckedBlock",
                  "src": "11809:533:88",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61035,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61033,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61031,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61022,
                            "src": "11837:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "313238",
                            "id": 61032,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11846:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_128_by_1",
                              "typeString": "int_const 128"
                            },
                            "value": "128"
                          },
                          "src": "11837:12:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61034,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11852:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11837:16:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61045,
                      "nodeType": "IfStatement",
                      "src": "11833:98:88",
                      "trueBody": {
                        "id": 61044,
                        "nodeType": "Block",
                        "src": "11855:76:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 61038,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61036,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61022,
                                "src": "11873:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "313238",
                                "id": 61037,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11883:3:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_128_by_1",
                                  "typeString": "int_const 128"
                                },
                                "value": "128"
                              },
                              "src": "11873:13:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61039,
                            "nodeType": "ExpressionStatement",
                            "src": "11873:13:88"
                          },
                          {
                            "expression": {
                              "id": 61042,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61040,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61028,
                                "src": "11904:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 61041,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11914:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "11904:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61043,
                            "nodeType": "ExpressionStatement",
                            "src": "11904:12:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61050,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61048,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61046,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61022,
                            "src": "11948:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3634",
                            "id": 61047,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11957:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_64_by_1",
                              "typeString": "int_const 64"
                            },
                            "value": "64"
                          },
                          "src": "11948:11:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61049,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11962:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11948:15:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61060,
                      "nodeType": "IfStatement",
                      "src": "11944:95:88",
                      "trueBody": {
                        "id": 61059,
                        "nodeType": "Block",
                        "src": "11965:74:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 61053,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61051,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61022,
                                "src": "11983:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 61052,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11993:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "11983:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61054,
                            "nodeType": "ExpressionStatement",
                            "src": "11983:12:88"
                          },
                          {
                            "expression": {
                              "id": 61057,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61055,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61028,
                                "src": "12013:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 61056,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12023:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "12013:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61058,
                            "nodeType": "ExpressionStatement",
                            "src": "12013:11:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61065,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61063,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61061,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61022,
                            "src": "12056:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3332",
                            "id": 61062,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12065:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_32_by_1",
                              "typeString": "int_const 32"
                            },
                            "value": "32"
                          },
                          "src": "12056:11:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61064,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12070:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "12056:15:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61075,
                      "nodeType": "IfStatement",
                      "src": "12052:95:88",
                      "trueBody": {
                        "id": 61074,
                        "nodeType": "Block",
                        "src": "12073:74:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 61068,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61066,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61022,
                                "src": "12091:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 61067,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12101:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "12091:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61069,
                            "nodeType": "ExpressionStatement",
                            "src": "12091:12:88"
                          },
                          {
                            "expression": {
                              "id": 61072,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61070,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61028,
                                "src": "12121:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 61071,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12131:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "12121:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61073,
                            "nodeType": "ExpressionStatement",
                            "src": "12121:11:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61080,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61078,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61076,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61022,
                            "src": "12164:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3136",
                            "id": 61077,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12173:2:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "12164:11:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61079,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12178:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "12164:15:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61090,
                      "nodeType": "IfStatement",
                      "src": "12160:95:88",
                      "trueBody": {
                        "id": 61089,
                        "nodeType": "Block",
                        "src": "12181:74:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 61083,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61081,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61022,
                                "src": "12199:5:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 61082,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12209:2:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "12199:12:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61084,
                            "nodeType": "ExpressionStatement",
                            "src": "12199:12:88"
                          },
                          {
                            "expression": {
                              "id": 61087,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61085,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61028,
                                "src": "12229:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 61086,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12239:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "12229:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61088,
                            "nodeType": "ExpressionStatement",
                            "src": "12229:11:88"
                          }
                        ]
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61095,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61093,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61091,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61022,
                            "src": "12272:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "38",
                            "id": 61092,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12281:1:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "12272:10:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61094,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12285:1:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "12272:14:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61101,
                      "nodeType": "IfStatement",
                      "src": "12268:64:88",
                      "trueBody": {
                        "id": 61100,
                        "nodeType": "Block",
                        "src": "12288:44:88",
                        "statements": [
                          {
                            "expression": {
                              "id": 61098,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61096,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61028,
                                "src": "12306:6:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 61097,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12316:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "12306:11:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61099,
                            "nodeType": "ExpressionStatement",
                            "src": "12306:11:88"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 61103,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61028,
                    "src": "12358:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61026,
                  "id": 61104,
                  "nodeType": "Return",
                  "src": "12351:13:88"
                }
              ]
            },
            "documentation": {
              "id": 61020,
              "nodeType": "StructuredDocumentation",
              "src": "11463:240:88",
              "text": " @dev Return the log in base 256, rounded down, of a positive value.\n Returns 0 if given 0.\n Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log256",
            "nameLocation": "11717:6:88",
            "parameters": {
              "id": 61023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61022,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11732:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 61106,
                  "src": "11724:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61021,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11724:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11723:15:88"
            },
            "returnParameters": {
              "id": 61026,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61025,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61106,
                  "src": "11762:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61024,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11762:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11761:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61145,
            "nodeType": "FunctionDefinition",
            "src": "12526:256:88",
            "nodes": [],
            "body": {
              "id": 61144,
              "nodeType": "Block",
              "src": "12608:174:88",
              "nodes": [],
              "statements": [
                {
                  "id": 61143,
                  "nodeType": "UncheckedBlock",
                  "src": "12618:158:88",
                  "statements": [
                    {
                      "assignments": [
                        61118
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61118,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "12650:6:88",
                          "nodeType": "VariableDeclaration",
                          "scope": 61143,
                          "src": "12642:14:88",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61117,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12642:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61122,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 61120,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61109,
                            "src": "12666:5:88",
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
                          "id": 61119,
                          "name": "log256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            61106,
                            61145
                          ],
                          "referencedDeclaration": 61106,
                          "src": "12659:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 61121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12659:13:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "12642:30:88"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61123,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61118,
                          "src": "12693:6:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "components": [
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 61136,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_Rounding_$60287",
                                    "typeString": "enum Math.Rounding"
                                  },
                                  "id": 61127,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61124,
                                    "name": "rounding",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61112,
                                    "src": "12703:8:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60287",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "expression": {
                                      "id": 61125,
                                      "name": "Rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60287,
                                      "src": "12715:8:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_Rounding_$60287_$",
                                        "typeString": "type(enum Math.Rounding)"
                                      }
                                    },
                                    "id": 61126,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "12724:2:88",
                                    "memberName": "Up",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 60285,
                                    "src": "12715:11:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60287",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "src": "12703:23:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&&",
                                "rightExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 61135,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 61133,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "31",
                                      "id": 61128,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "12730:1:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "<<",
                                    "rightExpression": {
                                      "components": [
                                        {
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 61131,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "id": 61129,
                                            "name": "result",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 61118,
                                            "src": "12736:6:88",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "<<",
                                          "rightExpression": {
                                            "hexValue": "33",
                                            "id": 61130,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "12746:1:88",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_3_by_1",
                                              "typeString": "int_const 3"
                                            },
                                            "value": "3"
                                          },
                                          "src": "12736:11:88",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "id": 61132,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "12735:13:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "12730:18:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 61134,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61109,
                                    "src": "12751:5:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "12730:26:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "12703:53:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 61138,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12763:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 61139,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "12703:61:88",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 61137,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12759:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 61140,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "12702:63:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "12693:72:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 61116,
                      "id": 61142,
                      "nodeType": "Return",
                      "src": "12686:79:88"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 61107,
              "nodeType": "StructuredDocumentation",
              "src": "12377:144:88",
              "text": " @dev Return the log in base 256, following the selected rounding direction, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log256",
            "nameLocation": "12535:6:88",
            "parameters": {
              "id": 61113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61109,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12550:5:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 61145,
                  "src": "12542:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61108,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12542:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61112,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "12566:8:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 61145,
                  "src": "12557:17:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60287",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 61111,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61110,
                      "name": "Rounding",
                      "nameLocations": [
                        "12557:8:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60287,
                      "src": "12557:8:88"
                    },
                    "referencedDeclaration": 60287,
                    "src": "12557:8:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60287",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12541:34:88"
            },
            "returnParameters": {
              "id": 61116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61115,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61145,
                  "src": "12599:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61114,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12599:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12598:9:88"
            },
            "scope": 61146,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Math",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 60283,
          "nodeType": "StructuredDocumentation",
          "src": "128:73:88",
          "text": " @dev Standard math utilities missing in the Solidity language."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          61146
        ],
        "name": "Math",
        "nameLocation": "210:4:88",
        "scope": 61147,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 88
} as const;
