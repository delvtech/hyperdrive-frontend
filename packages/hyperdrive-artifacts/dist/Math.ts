export const Math = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220628076df6f80b4aee1372e0fd38bc3faf5088b0060db7a5eee43ed050a01134164736f6c63430008130033",
    "sourceMap": "202:12582:94:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;202:12582:94;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220628076df6f80b4aee1372e0fd38bc3faf5088b0060db7a5eee43ed050a01134164736f6c63430008130033",
    "sourceMap": "202:12582:94:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Standard math utilities missing in the Solidity language.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":\"Math\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4\",\"dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij\"]}},\"version\":1}",
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
    "id": 61853,
    "exportedSymbols": {
      "Math": [
        61852
      ]
    },
    "nodeType": "SourceUnit",
    "src": "103:12682:94",
    "nodes": [
      {
        "id": 60988,
        "nodeType": "PragmaDirective",
        "src": "103:23:94",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 61852,
        "nodeType": "ContractDefinition",
        "src": "202:12582:94",
        "nodes": [
          {
            "id": 60993,
            "nodeType": "EnumDefinition",
            "src": "221:122:94",
            "nodes": [],
            "canonicalName": "Math.Rounding",
            "members": [
              {
                "id": 60990,
                "name": "Down",
                "nameLocation": "245:4:94",
                "nodeType": "EnumValue",
                "src": "245:4:94"
              },
              {
                "id": 60991,
                "name": "Up",
                "nameLocation": "287:2:94",
                "nodeType": "EnumValue",
                "src": "287:2:94"
              },
              {
                "id": 60992,
                "name": "Zero",
                "nameLocation": "318:4:94",
                "nodeType": "EnumValue",
                "src": "318:4:94"
              }
            ],
            "name": "Rounding",
            "nameLocation": "226:8:94"
          },
          {
            "id": 61011,
            "nodeType": "FunctionDefinition",
            "src": "413:104:94",
            "nodes": [],
            "body": {
              "id": 61010,
              "nodeType": "Block",
              "src": "480:37:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 61005,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61003,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60996,
                        "src": "497:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 61004,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60998,
                        "src": "501:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "497:5:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 61007,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60998,
                      "src": "509:1:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 61008,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "497:13:94",
                    "trueExpression": {
                      "id": 61006,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60996,
                      "src": "505:1:94",
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
                  "functionReturnParameters": 61002,
                  "id": 61009,
                  "nodeType": "Return",
                  "src": "490:20:94"
                }
              ]
            },
            "documentation": {
              "id": 60994,
              "nodeType": "StructuredDocumentation",
              "src": "349:59:94",
              "text": " @dev Returns the largest of two numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "422:3:94",
            "parameters": {
              "id": 60999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60996,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "434:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61011,
                  "src": "426:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60995,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60998,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "445:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61011,
                  "src": "437:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "437:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "425:22:94"
            },
            "returnParameters": {
              "id": 61002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61001,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61011,
                  "src": "471:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "471:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "470:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61029,
            "nodeType": "FunctionDefinition",
            "src": "588:104:94",
            "nodes": [],
            "body": {
              "id": 61028,
              "nodeType": "Block",
              "src": "655:37:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 61023,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61021,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61014,
                        "src": "672:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 61022,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61016,
                        "src": "676:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "672:5:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 61025,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61016,
                      "src": "684:1:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 61026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "672:13:94",
                    "trueExpression": {
                      "id": 61024,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61014,
                      "src": "680:1:94",
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
                  "functionReturnParameters": 61020,
                  "id": 61027,
                  "nodeType": "Return",
                  "src": "665:20:94"
                }
              ]
            },
            "documentation": {
              "id": 61012,
              "nodeType": "StructuredDocumentation",
              "src": "523:60:94",
              "text": " @dev Returns the smallest of two numbers."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "597:3:94",
            "parameters": {
              "id": 61017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61014,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "609:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61029,
                  "src": "601:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61013,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "601:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61016,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "620:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61029,
                  "src": "612:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61015,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "612:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "600:22:94"
            },
            "returnParameters": {
              "id": 61020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61019,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61029,
                  "src": "646:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61018,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "646:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "645:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61052,
            "nodeType": "FunctionDefinition",
            "src": "805:153:94",
            "nodes": [],
            "body": {
              "id": 61051,
              "nodeType": "Block",
              "src": "876:82:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61049,
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
                          "id": 61041,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61039,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61032,
                            "src": "931:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "id": 61040,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61034,
                            "src": "935:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "931:5:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 61042,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "930:7:94",
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
                      "id": 61048,
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
                            "id": 61045,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61043,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61032,
                              "src": "941:1:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "^",
                            "rightExpression": {
                              "id": 61044,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61034,
                              "src": "945:1:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "941:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 61046,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "940:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 61047,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "950:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "940:11:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "930:21:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61038,
                  "id": 61050,
                  "nodeType": "Return",
                  "src": "923:28:94"
                }
              ]
            },
            "documentation": {
              "id": 61030,
              "nodeType": "StructuredDocumentation",
              "src": "698:102:94",
              "text": " @dev Returns the average of two numbers. The result is rounded towards\n zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "average",
            "nameLocation": "814:7:94",
            "parameters": {
              "id": 61035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61032,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "830:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61052,
                  "src": "822:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61031,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "822:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61034,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "841:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61052,
                  "src": "833:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61033,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "833:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "821:22:94"
            },
            "returnParameters": {
              "id": 61038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61037,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61052,
                  "src": "867:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61036,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "867:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "866:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61077,
            "nodeType": "FunctionDefinition",
            "src": "1157:194:94",
            "nodes": [],
            "body": {
              "id": 61076,
              "nodeType": "Block",
              "src": "1228:123:94",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 61064,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61062,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61055,
                        "src": "1316:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 61063,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1321:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1316:6:94",
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
                      "id": 61073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61071,
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
                              "id": 61068,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 61066,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61055,
                                "src": "1330:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 61067,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1334:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "1330:5:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 61069,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1329:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "id": 61070,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61057,
                          "src": "1339:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1329:11:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 61072,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1343:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1329:15:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 61074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "1316:28:94",
                    "trueExpression": {
                      "hexValue": "30",
                      "id": 61065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1325:1:94",
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
                  "functionReturnParameters": 61061,
                  "id": 61075,
                  "nodeType": "Return",
                  "src": "1309:35:94"
                }
              ]
            },
            "documentation": {
              "id": 61053,
              "nodeType": "StructuredDocumentation",
              "src": "964:188:94",
              "text": " @dev Returns the ceiling of the division of two numbers.\n This differs from standard division with `/` in that it rounds up instead\n of rounding down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ceilDiv",
            "nameLocation": "1166:7:94",
            "parameters": {
              "id": 61058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61055,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1182:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61077,
                  "src": "1174:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61054,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1174:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61057,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1193:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61077,
                  "src": "1185:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61056,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1173:22:94"
            },
            "returnParameters": {
              "id": 61061,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61060,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61077,
                  "src": "1219:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61059,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1219:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1218:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61200,
            "nodeType": "FunctionDefinition",
            "src": "1667:4213:94",
            "nodes": [],
            "body": {
              "id": 61199,
              "nodeType": "Block",
              "src": "1765:4115:94",
              "nodes": [],
              "statements": [
                {
                  "id": 61198,
                  "nodeType": "UncheckedBlock",
                  "src": "1775:4099:94",
                  "statements": [
                    {
                      "assignments": [
                        61090
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61090,
                          "mutability": "mutable",
                          "name": "prod0",
                          "nameLocation": "2104:5:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 61198,
                          "src": "2096:13:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61089,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2096:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61091,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "2096:13:94"
                    },
                    {
                      "assignments": [
                        61093
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61093,
                          "mutability": "mutable",
                          "name": "prod1",
                          "nameLocation": "2176:5:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 61198,
                          "src": "2168:13:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61092,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2168:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61094,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "2168:13:94"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "2248:157:94",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2266:30:94",
                            "value": {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "2283:1:94"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "2286:1:94"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2293:1:94",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "2289:3:94"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2289:6:94"
                                }
                              ],
                              "functionName": {
                                "name": "mulmod",
                                "nodeType": "YulIdentifier",
                                "src": "2276:6:94"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2276:20:94"
                            },
                            "variables": [
                              {
                                "name": "mm",
                                "nodeType": "YulTypedName",
                                "src": "2270:2:94",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "2313:18:94",
                            "value": {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "2326:1:94"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "2329:1:94"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "2322:3:94"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2322:9:94"
                            },
                            "variableNames": [
                              {
                                "name": "prod0",
                                "nodeType": "YulIdentifier",
                                "src": "2313:5:94"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "2348:43:94",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "mm",
                                      "nodeType": "YulIdentifier",
                                      "src": "2365:2:94"
                                    },
                                    {
                                      "name": "prod0",
                                      "nodeType": "YulIdentifier",
                                      "src": "2369:5:94"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "2361:3:94"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2361:14:94"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "mm",
                                      "nodeType": "YulIdentifier",
                                      "src": "2380:2:94"
                                    },
                                    {
                                      "name": "prod0",
                                      "nodeType": "YulIdentifier",
                                      "src": "2384:5:94"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "2377:2:94"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2377:13:94"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2357:3:94"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2357:34:94"
                            },
                            "variableNames": [
                              {
                                "name": "prod1",
                                "nodeType": "YulIdentifier",
                                "src": "2348:5:94"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 61090,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2313:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61090,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2369:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61090,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2384:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61093,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2348:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61080,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2283:1:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61080,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2326:1:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61082,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2286:1:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61082,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "2329:1:94",
                          "valueSize": 1
                        }
                      ],
                      "id": 61095,
                      "nodeType": "InlineAssembly",
                      "src": "2239:166:94"
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61098,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61096,
                          "name": "prod1",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61093,
                          "src": "2486:5:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61097,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2495:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2486:10:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61104,
                      "nodeType": "IfStatement",
                      "src": "2482:368:94",
                      "trueBody": {
                        "id": 61103,
                        "nodeType": "Block",
                        "src": "2498:352:94",
                        "statements": [
                          {
                            "expression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 61101,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 61099,
                                "name": "prod0",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61090,
                                "src": "2816:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "id": 61100,
                                "name": "denominator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61084,
                                "src": "2824:11:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2816:19:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "functionReturnParameters": 61088,
                            "id": 61102,
                            "nodeType": "Return",
                            "src": "2809:26:94"
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
                            "id": 61108,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61106,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61084,
                              "src": "2960:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "id": 61107,
                              "name": "prod1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61093,
                              "src": "2974:5:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2960:19:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "hexValue": "4d6174683a206d756c446976206f766572666c6f77",
                            "id": 61109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2981:23:94",
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
                          "id": 61105,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            -18,
                            -18
                          ],
                          "referencedDeclaration": -18,
                          "src": "2952:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 61110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2952:53:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 61111,
                      "nodeType": "ExpressionStatement",
                      "src": "2952:53:94"
                    },
                    {
                      "assignments": [
                        61113
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61113,
                          "mutability": "mutable",
                          "name": "remainder",
                          "nameLocation": "3269:9:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 61198,
                          "src": "3261:17:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61112,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3261:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61114,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "3261:17:94"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "3301:291:94",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "3370:38:94",
                            "value": {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "3390:1:94"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "3393:1:94"
                                },
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "3396:11:94"
                                }
                              ],
                              "functionName": {
                                "name": "mulmod",
                                "nodeType": "YulIdentifier",
                                "src": "3383:6:94"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3383:25:94"
                            },
                            "variableNames": [
                              {
                                "name": "remainder",
                                "nodeType": "YulIdentifier",
                                "src": "3370:9:94"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "3490:41:94",
                            "value": {
                              "arguments": [
                                {
                                  "name": "prod1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3503:5:94"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "remainder",
                                      "nodeType": "YulIdentifier",
                                      "src": "3513:9:94"
                                    },
                                    {
                                      "name": "prod0",
                                      "nodeType": "YulIdentifier",
                                      "src": "3524:5:94"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nodeType": "YulIdentifier",
                                    "src": "3510:2:94"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3510:20:94"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3499:3:94"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3499:32:94"
                            },
                            "variableNames": [
                              {
                                "name": "prod1",
                                "nodeType": "YulIdentifier",
                                "src": "3490:5:94"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "3548:30:94",
                            "value": {
                              "arguments": [
                                {
                                  "name": "prod0",
                                  "nodeType": "YulIdentifier",
                                  "src": "3561:5:94"
                                },
                                {
                                  "name": "remainder",
                                  "nodeType": "YulIdentifier",
                                  "src": "3568:9:94"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3557:3:94"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3557:21:94"
                            },
                            "variableNames": [
                              {
                                "name": "prod0",
                                "nodeType": "YulIdentifier",
                                "src": "3548:5:94"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 61084,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3396:11:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61090,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3524:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61090,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3548:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61090,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3561:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61093,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3490:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61093,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3503:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61113,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3370:9:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61113,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3513:9:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61113,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3568:9:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61080,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3390:1:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61082,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "3393:1:94",
                          "valueSize": 1
                        }
                      ],
                      "id": 61115,
                      "nodeType": "InlineAssembly",
                      "src": "3292:300:94"
                    },
                    {
                      "assignments": [
                        61117
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61117,
                          "mutability": "mutable",
                          "name": "twos",
                          "nameLocation": "3907:4:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 61198,
                          "src": "3899:12:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61116,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3899:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61125,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61118,
                          "name": "denominator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61084,
                          "src": "3914:11:94",
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
                              "id": 61122,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 61120,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "~",
                                "prefix": true,
                                "src": "3929:12:94",
                                "subExpression": {
                                  "id": 61119,
                                  "name": "denominator",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61084,
                                  "src": "3930:11:94",
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
                                "id": 61121,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3944:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "3929:16:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 61123,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "3928:18:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3914:32:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "3899:47:94"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "3969:362:94",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "4034:37:94",
                            "value": {
                              "arguments": [
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "4053:11:94"
                                },
                                {
                                  "name": "twos",
                                  "nodeType": "YulIdentifier",
                                  "src": "4066:4:94"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "4049:3:94"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4049:22:94"
                            },
                            "variableNames": [
                              {
                                "name": "denominator",
                                "nodeType": "YulIdentifier",
                                "src": "4034:11:94"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4138:25:94",
                            "value": {
                              "arguments": [
                                {
                                  "name": "prod0",
                                  "nodeType": "YulIdentifier",
                                  "src": "4151:5:94"
                                },
                                {
                                  "name": "twos",
                                  "nodeType": "YulIdentifier",
                                  "src": "4158:4:94"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "4147:3:94"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4147:16:94"
                            },
                            "variableNames": [
                              {
                                "name": "prod0",
                                "nodeType": "YulIdentifier",
                                "src": "4138:5:94"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4278:39:94",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4298:1:94",
                                          "type": "",
                                          "value": "0"
                                        },
                                        {
                                          "name": "twos",
                                          "nodeType": "YulIdentifier",
                                          "src": "4301:4:94"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "4294:3:94"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4294:12:94"
                                    },
                                    {
                                      "name": "twos",
                                      "nodeType": "YulIdentifier",
                                      "src": "4308:4:94"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "4290:3:94"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4290:23:94"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4315:1:94",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4286:3:94"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4286:31:94"
                            },
                            "variableNames": [
                              {
                                "name": "twos",
                                "nodeType": "YulIdentifier",
                                "src": "4278:4:94"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 61084,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4034:11:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61084,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4053:11:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61090,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4138:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61090,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4151:5:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61117,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4066:4:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61117,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4158:4:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61117,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4278:4:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61117,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4301:4:94",
                          "valueSize": 1
                        },
                        {
                          "declaration": 61117,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "4308:4:94",
                          "valueSize": 1
                        }
                      ],
                      "id": 61126,
                      "nodeType": "InlineAssembly",
                      "src": "3960:371:94"
                    },
                    {
                      "expression": {
                        "id": 61131,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61127,
                          "name": "prod0",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61090,
                          "src": "4397:5:94",
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
                          "id": 61130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61128,
                            "name": "prod1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61093,
                            "src": "4406:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 61129,
                            "name": "twos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61117,
                            "src": "4414:4:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4406:12:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4397:21:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61132,
                      "nodeType": "ExpressionStatement",
                      "src": "4397:21:94"
                    },
                    {
                      "assignments": [
                        61134
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61134,
                          "mutability": "mutable",
                          "name": "inverse",
                          "nameLocation": "4744:7:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 61198,
                          "src": "4736:15:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61133,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4736:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61141,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61140,
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
                              "id": 61137,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "33",
                                "id": 61135,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4755:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_3_by_1",
                                  "typeString": "int_const 3"
                                },
                                "value": "3"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 61136,
                                "name": "denominator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61084,
                                "src": "4759:11:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "4755:15:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 61138,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "4754:17:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "^",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 61139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4774:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "4754:21:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4736:39:94"
                    },
                    {
                      "expression": {
                        "id": 61148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61142,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61134,
                          "src": "4992:7:94",
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
                          "id": 61147,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 61143,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5003:1:94",
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
                            "id": 61146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61144,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61084,
                              "src": "5007:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 61145,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61134,
                              "src": "5021:7:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5007:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5003:25:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4992:36:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61149,
                      "nodeType": "ExpressionStatement",
                      "src": "4992:36:94"
                    },
                    {
                      "expression": {
                        "id": 61156,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61150,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61134,
                          "src": "5061:7:94",
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
                          "id": 61155,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 61151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5072:1:94",
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
                            "id": 61154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61152,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61084,
                              "src": "5076:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 61153,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61134,
                              "src": "5090:7:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5076:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5072:25:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5061:36:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61157,
                      "nodeType": "ExpressionStatement",
                      "src": "5061:36:94"
                    },
                    {
                      "expression": {
                        "id": 61164,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61158,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61134,
                          "src": "5131:7:94",
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
                          "id": 61163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 61159,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5142:1:94",
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
                            "id": 61162,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61160,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61084,
                              "src": "5146:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 61161,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61134,
                              "src": "5160:7:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5146:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5142:25:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5131:36:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61165,
                      "nodeType": "ExpressionStatement",
                      "src": "5131:36:94"
                    },
                    {
                      "expression": {
                        "id": 61172,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61166,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61134,
                          "src": "5201:7:94",
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
                          "id": 61171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 61167,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5212:1:94",
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
                            "id": 61170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61168,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61084,
                              "src": "5216:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 61169,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61134,
                              "src": "5230:7:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5216:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5212:25:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5201:36:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61173,
                      "nodeType": "ExpressionStatement",
                      "src": "5201:36:94"
                    },
                    {
                      "expression": {
                        "id": 61180,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61174,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61134,
                          "src": "5271:7:94",
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
                          "id": 61179,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 61175,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5282:1:94",
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
                            "id": 61178,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61176,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61084,
                              "src": "5286:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 61177,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61134,
                              "src": "5300:7:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5286:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5282:25:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5271:36:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61181,
                      "nodeType": "ExpressionStatement",
                      "src": "5271:36:94"
                    },
                    {
                      "expression": {
                        "id": 61188,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61182,
                          "name": "inverse",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61134,
                          "src": "5342:7:94",
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
                          "id": 61187,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 61183,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5353:1:94",
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
                            "id": 61186,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61184,
                              "name": "denominator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61084,
                              "src": "5357:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 61185,
                              "name": "inverse",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61134,
                              "src": "5371:7:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5357:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5353:25:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5342:36:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61189,
                      "nodeType": "ExpressionStatement",
                      "src": "5342:36:94"
                    },
                    {
                      "expression": {
                        "id": 61194,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61190,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61087,
                          "src": "5812:6:94",
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
                          "id": 61193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61191,
                            "name": "prod0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61090,
                            "src": "5821:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 61192,
                            "name": "inverse",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61134,
                            "src": "5829:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5821:15:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5812:24:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61195,
                      "nodeType": "ExpressionStatement",
                      "src": "5812:24:94"
                    },
                    {
                      "expression": {
                        "id": 61196,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61087,
                        "src": "5857:6:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 61088,
                      "id": 61197,
                      "nodeType": "Return",
                      "src": "5850:13:94"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 61078,
              "nodeType": "StructuredDocumentation",
              "src": "1357:305:94",
              "text": " @notice Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or denominator == 0\n @dev Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv)\n with further edits by Uniswap Labs also under MIT license."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDiv",
            "nameLocation": "1676:6:94",
            "parameters": {
              "id": 61085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61080,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1691:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61200,
                  "src": "1683:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61079,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1683:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61082,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1702:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61200,
                  "src": "1694:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1694:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61084,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "1713:11:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61200,
                  "src": "1705:19:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61083,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1705:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1682:43:94"
            },
            "returnParameters": {
              "id": 61088,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61087,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "1757:6:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61200,
                  "src": "1749:14:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61086,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1749:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1748:16:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61244,
            "nodeType": "FunctionDefinition",
            "src": "6012:299:94",
            "nodes": [],
            "body": {
              "id": 61243,
              "nodeType": "Block",
              "src": "6122:189:94",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61216
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61216,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "6140:6:94",
                      "nodeType": "VariableDeclaration",
                      "scope": 61243,
                      "src": "6132:14:94",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 61215,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6132:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61222,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 61218,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61203,
                        "src": "6156:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 61219,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61205,
                        "src": "6159:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 61220,
                        "name": "denominator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61207,
                        "src": "6162:11:94",
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
                      "id": 61217,
                      "name": "mulDiv",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        61200,
                        61244
                      ],
                      "referencedDeclaration": 61200,
                      "src": "6149:6:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 61221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6149:25:94",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6132:42:94"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 61234,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_enum$_Rounding_$60993",
                        "typeString": "enum Math.Rounding"
                      },
                      "id": 61226,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61223,
                        "name": "rounding",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61210,
                        "src": "6188:8:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_Rounding_$60993",
                          "typeString": "enum Math.Rounding"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "id": 61224,
                          "name": "Rounding",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60993,
                          "src": "6200:8:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_Rounding_$60993_$",
                            "typeString": "type(enum Math.Rounding)"
                          }
                        },
                        "id": 61225,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6209:2:94",
                        "memberName": "Up",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60991,
                        "src": "6200:11:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_Rounding_$60993",
                          "typeString": "enum Math.Rounding"
                        }
                      },
                      "src": "6188:23:94",
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
                      "id": 61233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 61228,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61203,
                            "src": "6222:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 61229,
                            "name": "y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61205,
                            "src": "6225:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 61230,
                            "name": "denominator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61207,
                            "src": "6228:11:94",
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
                          "id": 61227,
                          "name": "mulmod",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -16,
                          "src": "6215:6:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_mulmod_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 61231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6215:25:94",
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
                        "id": 61232,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6243:1:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "6215:29:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6188:56:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61240,
                  "nodeType": "IfStatement",
                  "src": "6184:98:94",
                  "trueBody": {
                    "id": 61239,
                    "nodeType": "Block",
                    "src": "6246:36:94",
                    "statements": [
                      {
                        "expression": {
                          "id": 61237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 61235,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61216,
                            "src": "6260:6:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "hexValue": "31",
                            "id": 61236,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6270:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "6260:11:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 61238,
                        "nodeType": "ExpressionStatement",
                        "src": "6260:11:94"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 61241,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61216,
                    "src": "6298:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61214,
                  "id": 61242,
                  "nodeType": "Return",
                  "src": "6291:13:94"
                }
              ]
            },
            "documentation": {
              "id": 61201,
              "nodeType": "StructuredDocumentation",
              "src": "5886:121:94",
              "text": " @notice Calculates x * y / denominator with full precision, following the selected rounding direction."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDiv",
            "nameLocation": "6021:6:94",
            "parameters": {
              "id": 61211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61203,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "6036:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61244,
                  "src": "6028:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61202,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6028:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61205,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "6047:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61244,
                  "src": "6039:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61204,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6039:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61207,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "6058:11:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61244,
                  "src": "6050:19:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61206,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6050:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61210,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "6080:8:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61244,
                  "src": "6071:17:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60993",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 61209,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61208,
                      "name": "Rounding",
                      "nameLocations": [
                        "6071:8:94"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60993,
                      "src": "6071:8:94"
                    },
                    "referencedDeclaration": 60993,
                    "src": "6071:8:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60993",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6027:62:94"
            },
            "returnParameters": {
              "id": 61214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61213,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61244,
                  "src": "6113:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6113:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6112:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61356,
            "nodeType": "FunctionDefinition",
            "src": "6530:1642:94",
            "nodes": [],
            "body": {
              "id": 61355,
              "nodeType": "Block",
              "src": "6587:1585:94",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 61252,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61247,
                      "src": "6601:1:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 61253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6606:1:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6601:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 61258,
                  "nodeType": "IfStatement",
                  "src": "6597:45:94",
                  "trueBody": {
                    "id": 61257,
                    "nodeType": "Block",
                    "src": "6609:33:94",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 61255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6630:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 61251,
                        "id": 61256,
                        "nodeType": "Return",
                        "src": "6623:8:94"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    61260
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61260,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "7329:6:94",
                      "nodeType": "VariableDeclaration",
                      "scope": 61355,
                      "src": "7321:14:94",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 61259,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7321:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61269,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 61268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "31",
                      "id": 61261,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7338:1:94",
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
                          "id": 61266,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 61263,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61247,
                                "src": "7349:1:94",
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
                              "id": 61262,
                              "name": "log2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                61524,
                                61560
                              ],
                              "referencedDeclaration": 61524,
                              "src": "7344:4:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (uint256)"
                              }
                            },
                            "id": 61264,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7344:7:94",
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
                            "id": 61265,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7355:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7344:12:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 61267,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "7343:14:94",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7338:19:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7321:36:94"
                },
                {
                  "id": 61354,
                  "nodeType": "UncheckedBlock",
                  "src": "7758:408:94",
                  "statements": [
                    {
                      "expression": {
                        "id": 61279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61270,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61260,
                          "src": "7782:6:94",
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
                          "id": 61278,
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
                                "id": 61275,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61271,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61260,
                                  "src": "7792:6:94",
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
                                  "id": 61274,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61272,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61247,
                                    "src": "7801:1:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 61273,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61260,
                                    "src": "7805:6:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7801:10:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7792:19:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 61276,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7791:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7816:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7791:26:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7782:35:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61280,
                      "nodeType": "ExpressionStatement",
                      "src": "7782:35:94"
                    },
                    {
                      "expression": {
                        "id": 61290,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61281,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61260,
                          "src": "7831:6:94",
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
                          "id": 61289,
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
                                "id": 61286,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61282,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61260,
                                  "src": "7841:6:94",
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
                                  "id": 61285,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61283,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61247,
                                    "src": "7850:1:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 61284,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61260,
                                    "src": "7854:6:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7850:10:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7841:19:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 61287,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7840:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61288,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7865:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7840:26:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7831:35:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61291,
                      "nodeType": "ExpressionStatement",
                      "src": "7831:35:94"
                    },
                    {
                      "expression": {
                        "id": 61301,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61292,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61260,
                          "src": "7880:6:94",
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
                          "id": 61300,
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
                                "id": 61297,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61293,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61260,
                                  "src": "7890:6:94",
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
                                  "id": 61296,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61294,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61247,
                                    "src": "7899:1:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 61295,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61260,
                                    "src": "7903:6:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7899:10:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7890:19:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 61298,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7889:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61299,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7914:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7889:26:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7880:35:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61302,
                      "nodeType": "ExpressionStatement",
                      "src": "7880:35:94"
                    },
                    {
                      "expression": {
                        "id": 61312,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61303,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61260,
                          "src": "7929:6:94",
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
                          "id": 61311,
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
                                "id": 61308,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61304,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61260,
                                  "src": "7939:6:94",
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
                                  "id": 61307,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61305,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61247,
                                    "src": "7948:1:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 61306,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61260,
                                    "src": "7952:6:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7948:10:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7939:19:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 61309,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7938:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61310,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7963:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7938:26:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7929:35:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61313,
                      "nodeType": "ExpressionStatement",
                      "src": "7929:35:94"
                    },
                    {
                      "expression": {
                        "id": 61323,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61314,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61260,
                          "src": "7978:6:94",
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
                          "id": 61322,
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
                                "id": 61319,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61315,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61260,
                                  "src": "7988:6:94",
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
                                  "id": 61318,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61316,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61247,
                                    "src": "7997:1:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 61317,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61260,
                                    "src": "8001:6:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7997:10:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "7988:19:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 61320,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7987:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61321,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8012:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7987:26:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7978:35:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61324,
                      "nodeType": "ExpressionStatement",
                      "src": "7978:35:94"
                    },
                    {
                      "expression": {
                        "id": 61334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61325,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61260,
                          "src": "8027:6:94",
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
                          "id": 61333,
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
                                "id": 61330,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61326,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61260,
                                  "src": "8037:6:94",
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
                                  "id": 61329,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61327,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61247,
                                    "src": "8046:1:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 61328,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61260,
                                    "src": "8050:6:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "8046:10:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "8037:19:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 61331,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8036:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8061:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "8036:26:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8027:35:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61335,
                      "nodeType": "ExpressionStatement",
                      "src": "8027:35:94"
                    },
                    {
                      "expression": {
                        "id": 61345,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 61336,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61260,
                          "src": "8076:6:94",
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
                          "id": 61344,
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
                                "id": 61341,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 61337,
                                  "name": "result",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61260,
                                  "src": "8086:6:94",
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
                                  "id": 61340,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61338,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61247,
                                    "src": "8095:1:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "id": 61339,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61260,
                                    "src": "8099:6:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "8095:10:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "8086:19:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 61342,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8085:21:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61343,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8110:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "8085:26:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8076:35:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 61346,
                      "nodeType": "ExpressionStatement",
                      "src": "8076:35:94"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 61348,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61260,
                            "src": "8136:6:94",
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
                            "id": 61351,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 61349,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61247,
                              "src": "8144:1:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 61350,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61260,
                              "src": "8148:6:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "8144:10:94",
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
                          "id": 61347,
                          "name": "min",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61029,
                          "src": "8132:3:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 61352,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8132:23:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 61251,
                      "id": 61353,
                      "nodeType": "Return",
                      "src": "8125:30:94"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 61245,
              "nodeType": "StructuredDocumentation",
              "src": "6317:208:94",
              "text": " @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded down.\n Inspired by Henry S. Warren, Jr.'s \"Hacker's Delight\" (Chapter 11)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "6539:4:94",
            "parameters": {
              "id": 61248,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61247,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6552:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61356,
                  "src": "6544:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61246,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6544:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6543:11:94"
            },
            "returnParameters": {
              "id": 61251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61250,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61356,
                  "src": "6578:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61249,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6578:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6577:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61392,
            "nodeType": "FunctionDefinition",
            "src": "8272:237:94",
            "nodes": [],
            "body": {
              "id": 61391,
              "nodeType": "Block",
              "src": "8348:161:94",
              "nodes": [],
              "statements": [
                {
                  "id": 61390,
                  "nodeType": "UncheckedBlock",
                  "src": "8358:145:94",
                  "statements": [
                    {
                      "assignments": [
                        61368
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61368,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "8390:6:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 61390,
                          "src": "8382:14:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61367,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8382:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61372,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 61370,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61359,
                            "src": "8404:1:94",
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
                          "id": 61369,
                          "name": "sqrt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            61356,
                            61392
                          ],
                          "referencedDeclaration": 61356,
                          "src": "8399:4:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 61371,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8399:7:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "8382:24:94"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61373,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61368,
                          "src": "8427:6:94",
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
                                "id": 61383,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_Rounding_$60993",
                                    "typeString": "enum Math.Rounding"
                                  },
                                  "id": 61377,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61374,
                                    "name": "rounding",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61362,
                                    "src": "8437:8:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60993",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "expression": {
                                      "id": 61375,
                                      "name": "Rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60993,
                                      "src": "8449:8:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_Rounding_$60993_$",
                                        "typeString": "type(enum Math.Rounding)"
                                      }
                                    },
                                    "id": 61376,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "8458:2:94",
                                    "memberName": "Up",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 60991,
                                    "src": "8449:11:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60993",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "src": "8437:23:94",
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
                                  "id": 61382,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 61380,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 61378,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61368,
                                      "src": "8464:6:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "*",
                                    "rightExpression": {
                                      "id": 61379,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61368,
                                      "src": "8473:6:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "8464:15:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 61381,
                                    "name": "a",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61359,
                                    "src": "8482:1:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "8464:19:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "8437:46:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 61385,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8490:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 61386,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "8437:54:94",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 61384,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8486:1:94",
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
                          "id": 61387,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "8436:56:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "8427:65:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 61366,
                      "id": 61389,
                      "nodeType": "Return",
                      "src": "8420:72:94"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 61357,
              "nodeType": "StructuredDocumentation",
              "src": "8178:89:94",
              "text": " @notice Calculates sqrt(a), following the selected rounding direction."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sqrt",
            "nameLocation": "8281:4:94",
            "parameters": {
              "id": 61363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61359,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "8294:1:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61392,
                  "src": "8286:9:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61358,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8286:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61362,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "8306:8:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61392,
                  "src": "8297:17:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60993",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 61361,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61360,
                      "name": "Rounding",
                      "nameLocations": [
                        "8297:8:94"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60993,
                      "src": "8297:8:94"
                    },
                    "referencedDeclaration": 60993,
                    "src": "8297:8:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60993",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8285:30:94"
            },
            "returnParameters": {
              "id": 61366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61365,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61392,
                  "src": "8339:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61364,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8339:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8338:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61524,
            "nodeType": "FunctionDefinition",
            "src": "8633:983:94",
            "nodes": [],
            "body": {
              "id": 61523,
              "nodeType": "Block",
              "src": "8694:922:94",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61401
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61401,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "8712:6:94",
                      "nodeType": "VariableDeclaration",
                      "scope": 61523,
                      "src": "8704:14:94",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 61400,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8704:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61403,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 61402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "8721:1:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8704:18:94"
                },
                {
                  "id": 61520,
                  "nodeType": "UncheckedBlock",
                  "src": "8732:855:94",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61406,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61404,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61395,
                            "src": "8760:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "313238",
                            "id": 61405,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8769:3:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_128_by_1",
                              "typeString": "int_const 128"
                            },
                            "value": "128"
                          },
                          "src": "8760:12:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61407,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8775:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "8760:16:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61418,
                      "nodeType": "IfStatement",
                      "src": "8756:99:94",
                      "trueBody": {
                        "id": 61417,
                        "nodeType": "Block",
                        "src": "8778:77:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61411,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61409,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61395,
                                "src": "8796:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "313238",
                                "id": 61410,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8806:3:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_128_by_1",
                                  "typeString": "int_const 128"
                                },
                                "value": "128"
                              },
                              "src": "8796:13:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61412,
                            "nodeType": "ExpressionStatement",
                            "src": "8796:13:94"
                          },
                          {
                            "expression": {
                              "id": 61415,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61413,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61401,
                                "src": "8827:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "313238",
                                "id": 61414,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8837:3:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_128_by_1",
                                  "typeString": "int_const 128"
                                },
                                "value": "128"
                              },
                              "src": "8827:13:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61416,
                            "nodeType": "ExpressionStatement",
                            "src": "8827:13:94"
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
                        "id": 61423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61419,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61395,
                            "src": "8872:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3634",
                            "id": 61420,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8881:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_64_by_1",
                              "typeString": "int_const 64"
                            },
                            "value": "64"
                          },
                          "src": "8872:11:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61422,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8886:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "8872:15:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61433,
                      "nodeType": "IfStatement",
                      "src": "8868:96:94",
                      "trueBody": {
                        "id": 61432,
                        "nodeType": "Block",
                        "src": "8889:75:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61426,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61424,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61395,
                                "src": "8907:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 61425,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8917:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "8907:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61427,
                            "nodeType": "ExpressionStatement",
                            "src": "8907:12:94"
                          },
                          {
                            "expression": {
                              "id": 61430,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61428,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61401,
                                "src": "8937:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 61429,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8947:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "8937:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61431,
                            "nodeType": "ExpressionStatement",
                            "src": "8937:12:94"
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
                        "id": 61438,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61436,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61434,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61395,
                            "src": "8981:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3332",
                            "id": 61435,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8990:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_32_by_1",
                              "typeString": "int_const 32"
                            },
                            "value": "32"
                          },
                          "src": "8981:11:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61437,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8995:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "8981:15:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61448,
                      "nodeType": "IfStatement",
                      "src": "8977:96:94",
                      "trueBody": {
                        "id": 61447,
                        "nodeType": "Block",
                        "src": "8998:75:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61441,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61439,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61395,
                                "src": "9016:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 61440,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9026:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "9016:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61442,
                            "nodeType": "ExpressionStatement",
                            "src": "9016:12:94"
                          },
                          {
                            "expression": {
                              "id": 61445,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61443,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61401,
                                "src": "9046:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 61444,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9056:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "9046:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61446,
                            "nodeType": "ExpressionStatement",
                            "src": "9046:12:94"
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
                        "id": 61453,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61451,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61449,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61395,
                            "src": "9090:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3136",
                            "id": 61450,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9099:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "9090:11:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61452,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9104:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9090:15:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61463,
                      "nodeType": "IfStatement",
                      "src": "9086:96:94",
                      "trueBody": {
                        "id": 61462,
                        "nodeType": "Block",
                        "src": "9107:75:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61456,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61454,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61395,
                                "src": "9125:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 61455,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9135:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "9125:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61457,
                            "nodeType": "ExpressionStatement",
                            "src": "9125:12:94"
                          },
                          {
                            "expression": {
                              "id": 61460,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61458,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61401,
                                "src": "9155:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 61459,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9165:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "9155:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61461,
                            "nodeType": "ExpressionStatement",
                            "src": "9155:12:94"
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
                        "id": 61468,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61466,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61464,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61395,
                            "src": "9199:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "38",
                            "id": 61465,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9208:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "9199:10:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9212:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9199:14:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61478,
                      "nodeType": "IfStatement",
                      "src": "9195:93:94",
                      "trueBody": {
                        "id": 61477,
                        "nodeType": "Block",
                        "src": "9215:73:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61471,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61469,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61395,
                                "src": "9233:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 61470,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9243:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "9233:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61472,
                            "nodeType": "ExpressionStatement",
                            "src": "9233:11:94"
                          },
                          {
                            "expression": {
                              "id": 61475,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61473,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61401,
                                "src": "9262:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 61474,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9272:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "9262:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61476,
                            "nodeType": "ExpressionStatement",
                            "src": "9262:11:94"
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
                        "id": 61483,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61481,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61479,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61395,
                            "src": "9305:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "34",
                            "id": 61480,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9314:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "9305:10:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61482,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9318:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9305:14:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61493,
                      "nodeType": "IfStatement",
                      "src": "9301:93:94",
                      "trueBody": {
                        "id": 61492,
                        "nodeType": "Block",
                        "src": "9321:73:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61486,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61484,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61395,
                                "src": "9339:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 61485,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9349:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "9339:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61487,
                            "nodeType": "ExpressionStatement",
                            "src": "9339:11:94"
                          },
                          {
                            "expression": {
                              "id": 61490,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61488,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61401,
                                "src": "9368:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 61489,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9378:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "9368:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61491,
                            "nodeType": "ExpressionStatement",
                            "src": "9368:11:94"
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
                        "id": 61498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61494,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61395,
                            "src": "9411:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "32",
                            "id": 61495,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9420:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "9411:10:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9424:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9411:14:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61508,
                      "nodeType": "IfStatement",
                      "src": "9407:93:94",
                      "trueBody": {
                        "id": 61507,
                        "nodeType": "Block",
                        "src": "9427:73:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61501,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61499,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61395,
                                "src": "9445:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 61500,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9455:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "9445:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61502,
                            "nodeType": "ExpressionStatement",
                            "src": "9445:11:94"
                          },
                          {
                            "expression": {
                              "id": 61505,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61503,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61401,
                                "src": "9474:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 61504,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9484:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "9474:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61506,
                            "nodeType": "ExpressionStatement",
                            "src": "9474:11:94"
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
                        "id": 61513,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61511,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61509,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61395,
                            "src": "9517:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 61510,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9526:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "9517:10:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61512,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9530:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9517:14:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61519,
                      "nodeType": "IfStatement",
                      "src": "9513:64:94",
                      "trueBody": {
                        "id": 61518,
                        "nodeType": "Block",
                        "src": "9533:44:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61516,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61514,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61401,
                                "src": "9551:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 61515,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9561:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "9551:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61517,
                            "nodeType": "ExpressionStatement",
                            "src": "9551:11:94"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 61521,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61401,
                    "src": "9603:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61399,
                  "id": 61522,
                  "nodeType": "Return",
                  "src": "9596:13:94"
                }
              ]
            },
            "documentation": {
              "id": 61393,
              "nodeType": "StructuredDocumentation",
              "src": "8515:113:94",
              "text": " @dev Return the log in base 2, rounded down, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log2",
            "nameLocation": "8642:4:94",
            "parameters": {
              "id": 61396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61395,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8655:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61524,
                  "src": "8647:13:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61394,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8647:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8646:15:94"
            },
            "returnParameters": {
              "id": 61399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61398,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61524,
                  "src": "8685:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61397,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8685:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8684:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61560,
            "nodeType": "FunctionDefinition",
            "src": "9769:245:94",
            "nodes": [],
            "body": {
              "id": 61559,
              "nodeType": "Block",
              "src": "9849:165:94",
              "nodes": [],
              "statements": [
                {
                  "id": 61558,
                  "nodeType": "UncheckedBlock",
                  "src": "9859:149:94",
                  "statements": [
                    {
                      "assignments": [
                        61536
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61536,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "9891:6:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 61558,
                          "src": "9883:14:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61535,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9883:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61540,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 61538,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61527,
                            "src": "9905:5:94",
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
                          "id": 61537,
                          "name": "log2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            61524,
                            61560
                          ],
                          "referencedDeclaration": 61524,
                          "src": "9900:4:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 61539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9900:11:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "9883:28:94"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61541,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61536,
                          "src": "9932:6:94",
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
                                "id": 61551,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_Rounding_$60993",
                                    "typeString": "enum Math.Rounding"
                                  },
                                  "id": 61545,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61542,
                                    "name": "rounding",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61530,
                                    "src": "9942:8:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60993",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "expression": {
                                      "id": 61543,
                                      "name": "Rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60993,
                                      "src": "9954:8:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_Rounding_$60993_$",
                                        "typeString": "type(enum Math.Rounding)"
                                      }
                                    },
                                    "id": 61544,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "9963:2:94",
                                    "memberName": "Up",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 60991,
                                    "src": "9954:11:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60993",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "src": "9942:23:94",
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
                                  "id": 61550,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 61548,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "31",
                                      "id": 61546,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "9969:1:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "<<",
                                    "rightExpression": {
                                      "id": 61547,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61536,
                                      "src": "9974:6:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "9969:11:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 61549,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61527,
                                    "src": "9983:5:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "9969:19:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "9942:46:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 61553,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9995:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 61554,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "9942:54:94",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 61552,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9991:1:94",
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
                          "id": 61555,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "9941:56:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "9932:65:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 61534,
                      "id": 61557,
                      "nodeType": "Return",
                      "src": "9925:72:94"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 61525,
              "nodeType": "StructuredDocumentation",
              "src": "9622:142:94",
              "text": " @dev Return the log in base 2, following the selected rounding direction, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log2",
            "nameLocation": "9778:4:94",
            "parameters": {
              "id": 61531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61527,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9791:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61560,
                  "src": "9783:13:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61526,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9783:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61530,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "9807:8:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61560,
                  "src": "9798:17:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60993",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 61529,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61528,
                      "name": "Rounding",
                      "nameLocations": [
                        "9798:8:94"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60993,
                      "src": "9798:8:94"
                    },
                    "referencedDeclaration": 60993,
                    "src": "9798:8:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60993",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9782:34:94"
            },
            "returnParameters": {
              "id": 61534,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61533,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61560,
                  "src": "9840:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61532,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9840:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9839:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61689,
            "nodeType": "FunctionDefinition",
            "src": "10139:916:94",
            "nodes": [],
            "body": {
              "id": 61688,
              "nodeType": "Block",
              "src": "10201:854:94",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61569
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61569,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "10219:6:94",
                      "nodeType": "VariableDeclaration",
                      "scope": 61688,
                      "src": "10211:14:94",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 61568,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10211:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61571,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 61570,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "10228:1:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10211:18:94"
                },
                {
                  "id": 61685,
                  "nodeType": "UncheckedBlock",
                  "src": "10239:787:94",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61572,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61563,
                          "src": "10267:5:94",
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
                          "id": 61575,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 61573,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10276:2:94",
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
                            "id": 61574,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10282:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_64_by_1",
                              "typeString": "int_const 64"
                            },
                            "value": "64"
                          },
                          "src": "10276:8:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(57 digits omitted)...0000"
                          }
                        },
                        "src": "10267:17:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61588,
                      "nodeType": "IfStatement",
                      "src": "10263:103:94",
                      "trueBody": {
                        "id": 61587,
                        "nodeType": "Block",
                        "src": "10286:80:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61581,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61577,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61563,
                                "src": "10304:5:94",
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
                                "id": 61580,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 61578,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10313:2:94",
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
                                  "id": 61579,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10319:2:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_64_by_1",
                                    "typeString": "int_const 64"
                                  },
                                  "value": "64"
                                },
                                "src": "10313:8:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10000000000000000000000000000000000000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(57 digits omitted)...0000"
                                }
                              },
                              "src": "10304:17:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61582,
                            "nodeType": "ExpressionStatement",
                            "src": "10304:17:94"
                          },
                          {
                            "expression": {
                              "id": 61585,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61583,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61569,
                                "src": "10339:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 61584,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10349:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "10339:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61586,
                            "nodeType": "ExpressionStatement",
                            "src": "10339:12:94"
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
                        "id": 61593,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61589,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61563,
                          "src": "10383:5:94",
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
                          "id": 61592,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 61590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10392:2:94",
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
                            "id": 61591,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10398:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_32_by_1",
                              "typeString": "int_const 32"
                            },
                            "value": "32"
                          },
                          "src": "10392:8:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                            "typeString": "int_const 1000...(25 digits omitted)...0000"
                          }
                        },
                        "src": "10383:17:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61605,
                      "nodeType": "IfStatement",
                      "src": "10379:103:94",
                      "trueBody": {
                        "id": 61604,
                        "nodeType": "Block",
                        "src": "10402:80:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61598,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61594,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61563,
                                "src": "10420:5:94",
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
                                "id": 61597,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 61595,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10429:2:94",
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
                                  "id": 61596,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10435:2:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_32_by_1",
                                    "typeString": "int_const 32"
                                  },
                                  "value": "32"
                                },
                                "src": "10429:8:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                                  "typeString": "int_const 1000...(25 digits omitted)...0000"
                                }
                              },
                              "src": "10420:17:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61599,
                            "nodeType": "ExpressionStatement",
                            "src": "10420:17:94"
                          },
                          {
                            "expression": {
                              "id": 61602,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61600,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61569,
                                "src": "10455:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 61601,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10465:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "10455:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61603,
                            "nodeType": "ExpressionStatement",
                            "src": "10455:12:94"
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
                        "id": 61610,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61606,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61563,
                          "src": "10499:5:94",
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
                          "id": 61609,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 61607,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10508:2:94",
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
                            "id": 61608,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10514:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "10508:8:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000_by_1",
                            "typeString": "int_const 10000000000000000"
                          }
                        },
                        "src": "10499:17:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61622,
                      "nodeType": "IfStatement",
                      "src": "10495:103:94",
                      "trueBody": {
                        "id": 61621,
                        "nodeType": "Block",
                        "src": "10518:80:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61615,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61611,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61563,
                                "src": "10536:5:94",
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
                                "id": 61614,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 61612,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10545:2:94",
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
                                  "id": 61613,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10551:2:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "10545:8:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10000000000000000_by_1",
                                  "typeString": "int_const 10000000000000000"
                                }
                              },
                              "src": "10536:17:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61616,
                            "nodeType": "ExpressionStatement",
                            "src": "10536:17:94"
                          },
                          {
                            "expression": {
                              "id": 61619,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61617,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61569,
                                "src": "10571:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 61618,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10581:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "10571:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61620,
                            "nodeType": "ExpressionStatement",
                            "src": "10571:12:94"
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
                        "id": 61627,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61623,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61563,
                          "src": "10615:5:94",
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
                          "id": 61626,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 61624,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10624:2:94",
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
                            "id": 61625,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10630:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "10624:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000000_by_1",
                            "typeString": "int_const 100000000"
                          }
                        },
                        "src": "10615:16:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61639,
                      "nodeType": "IfStatement",
                      "src": "10611:100:94",
                      "trueBody": {
                        "id": 61638,
                        "nodeType": "Block",
                        "src": "10633:78:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61632,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61628,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61563,
                                "src": "10651:5:94",
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
                                "id": 61631,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 61629,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10660:2:94",
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
                                  "id": 61630,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10666:1:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "10660:7:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100000000_by_1",
                                  "typeString": "int_const 100000000"
                                }
                              },
                              "src": "10651:16:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61633,
                            "nodeType": "ExpressionStatement",
                            "src": "10651:16:94"
                          },
                          {
                            "expression": {
                              "id": 61636,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61634,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61569,
                                "src": "10685:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 61635,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10695:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "10685:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61637,
                            "nodeType": "ExpressionStatement",
                            "src": "10685:11:94"
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
                        "id": 61644,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61640,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61563,
                          "src": "10728:5:94",
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
                          "id": 61643,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 61641,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10737:2:94",
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
                            "id": 61642,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10743:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "10737:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000_by_1",
                            "typeString": "int_const 10000"
                          }
                        },
                        "src": "10728:16:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61656,
                      "nodeType": "IfStatement",
                      "src": "10724:100:94",
                      "trueBody": {
                        "id": 61655,
                        "nodeType": "Block",
                        "src": "10746:78:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61649,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61645,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61563,
                                "src": "10764:5:94",
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
                                "id": 61648,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 61646,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10773:2:94",
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
                                  "id": 61647,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10779:1:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_4_by_1",
                                    "typeString": "int_const 4"
                                  },
                                  "value": "4"
                                },
                                "src": "10773:7:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10000_by_1",
                                  "typeString": "int_const 10000"
                                }
                              },
                              "src": "10764:16:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61650,
                            "nodeType": "ExpressionStatement",
                            "src": "10764:16:94"
                          },
                          {
                            "expression": {
                              "id": 61653,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61651,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61569,
                                "src": "10798:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 61652,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10808:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "10798:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61654,
                            "nodeType": "ExpressionStatement",
                            "src": "10798:11:94"
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
                        "id": 61661,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61657,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61563,
                          "src": "10841:5:94",
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
                          "id": 61660,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 61658,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10850:2:94",
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
                            "id": 61659,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10856:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "10850:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100_by_1",
                            "typeString": "int_const 100"
                          }
                        },
                        "src": "10841:16:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61673,
                      "nodeType": "IfStatement",
                      "src": "10837:100:94",
                      "trueBody": {
                        "id": 61672,
                        "nodeType": "Block",
                        "src": "10859:78:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61666,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61662,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61563,
                                "src": "10877:5:94",
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
                                "id": 61665,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 61663,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10886:2:94",
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
                                  "id": 61664,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10892:1:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_2_by_1",
                                    "typeString": "int_const 2"
                                  },
                                  "value": "2"
                                },
                                "src": "10886:7:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_100_by_1",
                                  "typeString": "int_const 100"
                                }
                              },
                              "src": "10877:16:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61667,
                            "nodeType": "ExpressionStatement",
                            "src": "10877:16:94"
                          },
                          {
                            "expression": {
                              "id": 61670,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61668,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61569,
                                "src": "10911:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 61669,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10921:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "10911:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61671,
                            "nodeType": "ExpressionStatement",
                            "src": "10911:11:94"
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
                        "id": 61678,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61674,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61563,
                          "src": "10954:5:94",
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
                          "id": 61677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 61675,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10963:2:94",
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
                            "id": 61676,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10969:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "10963:7:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          }
                        },
                        "src": "10954:16:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61684,
                      "nodeType": "IfStatement",
                      "src": "10950:66:94",
                      "trueBody": {
                        "id": 61683,
                        "nodeType": "Block",
                        "src": "10972:44:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61681,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61679,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61569,
                                "src": "10990:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 61680,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11000:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "10990:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61682,
                            "nodeType": "ExpressionStatement",
                            "src": "10990:11:94"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 61686,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61569,
                    "src": "11042:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61567,
                  "id": 61687,
                  "nodeType": "Return",
                  "src": "11035:13:94"
                }
              ]
            },
            "documentation": {
              "id": 61561,
              "nodeType": "StructuredDocumentation",
              "src": "10020:114:94",
              "text": " @dev Return the log in base 10, rounded down, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log10",
            "nameLocation": "10148:5:94",
            "parameters": {
              "id": 61564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61563,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10162:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61689,
                  "src": "10154:13:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10154:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10153:15:94"
            },
            "returnParameters": {
              "id": 61567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61566,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61689,
                  "src": "10192:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61565,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10192:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10191:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61725,
            "nodeType": "FunctionDefinition",
            "src": "11209:248:94",
            "nodes": [],
            "body": {
              "id": 61724,
              "nodeType": "Block",
              "src": "11290:167:94",
              "nodes": [],
              "statements": [
                {
                  "id": 61723,
                  "nodeType": "UncheckedBlock",
                  "src": "11300:151:94",
                  "statements": [
                    {
                      "assignments": [
                        61701
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61701,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "11332:6:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 61723,
                          "src": "11324:14:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61700,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11324:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61705,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 61703,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61692,
                            "src": "11347:5:94",
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
                          "id": 61702,
                          "name": "log10",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            61689,
                            61725
                          ],
                          "referencedDeclaration": 61689,
                          "src": "11341:5:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 61704,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11341:12:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "11324:29:94"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61721,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61706,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61701,
                          "src": "11374:6:94",
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
                                "id": 61716,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_Rounding_$60993",
                                    "typeString": "enum Math.Rounding"
                                  },
                                  "id": 61710,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61707,
                                    "name": "rounding",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61695,
                                    "src": "11384:8:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60993",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "expression": {
                                      "id": 61708,
                                      "name": "Rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60993,
                                      "src": "11396:8:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_Rounding_$60993_$",
                                        "typeString": "type(enum Math.Rounding)"
                                      }
                                    },
                                    "id": 61709,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "11405:2:94",
                                    "memberName": "Up",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 60991,
                                    "src": "11396:11:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60993",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "src": "11384:23:94",
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
                                  "id": 61715,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 61713,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "3130",
                                      "id": 61711,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "11411:2:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_10_by_1",
                                        "typeString": "int_const 10"
                                      },
                                      "value": "10"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "**",
                                    "rightExpression": {
                                      "id": 61712,
                                      "name": "result",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61701,
                                      "src": "11417:6:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "11411:12:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 61714,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61692,
                                    "src": "11426:5:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "11411:20:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "11384:47:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 61718,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11438:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 61719,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "11384:55:94",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 61717,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11434:1:94",
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
                          "id": 61720,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "11383:57:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "11374:66:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 61699,
                      "id": 61722,
                      "nodeType": "Return",
                      "src": "11367:73:94"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 61690,
              "nodeType": "StructuredDocumentation",
              "src": "11061:143:94",
              "text": " @dev Return the log in base 10, following the selected rounding direction, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log10",
            "nameLocation": "11218:5:94",
            "parameters": {
              "id": 61696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61692,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11232:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61725,
                  "src": "11224:13:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61691,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11224:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61695,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "11248:8:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61725,
                  "src": "11239:17:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60993",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 61694,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61693,
                      "name": "Rounding",
                      "nameLocations": [
                        "11239:8:94"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60993,
                      "src": "11239:8:94"
                    },
                    "referencedDeclaration": 60993,
                    "src": "11239:8:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60993",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11223:34:94"
            },
            "returnParameters": {
              "id": 61699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61698,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61725,
                  "src": "11281:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11281:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11280:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61812,
            "nodeType": "FunctionDefinition",
            "src": "11708:663:94",
            "nodes": [],
            "body": {
              "id": 61811,
              "nodeType": "Block",
              "src": "11771:600:94",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61734
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61734,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "11789:6:94",
                      "nodeType": "VariableDeclaration",
                      "scope": 61811,
                      "src": "11781:14:94",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 61733,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11781:7:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61736,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 61735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "11798:1:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11781:18:94"
                },
                {
                  "id": 61808,
                  "nodeType": "UncheckedBlock",
                  "src": "11809:533:94",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61741,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61739,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61737,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61728,
                            "src": "11837:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "313238",
                            "id": 61738,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11846:3:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_128_by_1",
                              "typeString": "int_const 128"
                            },
                            "value": "128"
                          },
                          "src": "11837:12:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61740,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11852:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11837:16:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61751,
                      "nodeType": "IfStatement",
                      "src": "11833:98:94",
                      "trueBody": {
                        "id": 61750,
                        "nodeType": "Block",
                        "src": "11855:76:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61744,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61742,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61728,
                                "src": "11873:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "313238",
                                "id": 61743,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11883:3:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_128_by_1",
                                  "typeString": "int_const 128"
                                },
                                "value": "128"
                              },
                              "src": "11873:13:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61745,
                            "nodeType": "ExpressionStatement",
                            "src": "11873:13:94"
                          },
                          {
                            "expression": {
                              "id": 61748,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61746,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61734,
                                "src": "11904:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 61747,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11914:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "11904:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61749,
                            "nodeType": "ExpressionStatement",
                            "src": "11904:12:94"
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
                        "id": 61756,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61754,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61752,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61728,
                            "src": "11948:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3634",
                            "id": 61753,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11957:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_64_by_1",
                              "typeString": "int_const 64"
                            },
                            "value": "64"
                          },
                          "src": "11948:11:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61755,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11962:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11948:15:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61766,
                      "nodeType": "IfStatement",
                      "src": "11944:95:94",
                      "trueBody": {
                        "id": 61765,
                        "nodeType": "Block",
                        "src": "11965:74:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61759,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61757,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61728,
                                "src": "11983:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3634",
                                "id": 61758,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11993:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_64_by_1",
                                  "typeString": "int_const 64"
                                },
                                "value": "64"
                              },
                              "src": "11983:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61760,
                            "nodeType": "ExpressionStatement",
                            "src": "11983:12:94"
                          },
                          {
                            "expression": {
                              "id": 61763,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61761,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61734,
                                "src": "12013:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "38",
                                "id": 61762,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12023:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_8_by_1",
                                  "typeString": "int_const 8"
                                },
                                "value": "8"
                              },
                              "src": "12013:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61764,
                            "nodeType": "ExpressionStatement",
                            "src": "12013:11:94"
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
                        "id": 61771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61769,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61767,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61728,
                            "src": "12056:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3332",
                            "id": 61768,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12065:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_32_by_1",
                              "typeString": "int_const 32"
                            },
                            "value": "32"
                          },
                          "src": "12056:11:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61770,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12070:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "12056:15:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61781,
                      "nodeType": "IfStatement",
                      "src": "12052:95:94",
                      "trueBody": {
                        "id": 61780,
                        "nodeType": "Block",
                        "src": "12073:74:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61774,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61772,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61728,
                                "src": "12091:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3332",
                                "id": 61773,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12101:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_32_by_1",
                                  "typeString": "int_const 32"
                                },
                                "value": "32"
                              },
                              "src": "12091:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61775,
                            "nodeType": "ExpressionStatement",
                            "src": "12091:12:94"
                          },
                          {
                            "expression": {
                              "id": 61778,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61776,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61734,
                                "src": "12121:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "34",
                                "id": 61777,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12131:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "12121:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61779,
                            "nodeType": "ExpressionStatement",
                            "src": "12121:11:94"
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
                        "id": 61786,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61784,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61782,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61728,
                            "src": "12164:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "3136",
                            "id": 61783,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12173:2:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16_by_1",
                              "typeString": "int_const 16"
                            },
                            "value": "16"
                          },
                          "src": "12164:11:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61785,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12178:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "12164:15:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61796,
                      "nodeType": "IfStatement",
                      "src": "12160:95:94",
                      "trueBody": {
                        "id": 61795,
                        "nodeType": "Block",
                        "src": "12181:74:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61789,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61787,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61728,
                                "src": "12199:5:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": ">>=",
                              "rightHandSide": {
                                "hexValue": "3136",
                                "id": 61788,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12209:2:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_16_by_1",
                                  "typeString": "int_const 16"
                                },
                                "value": "16"
                              },
                              "src": "12199:12:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61790,
                            "nodeType": "ExpressionStatement",
                            "src": "12199:12:94"
                          },
                          {
                            "expression": {
                              "id": 61793,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61791,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61734,
                                "src": "12229:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "32",
                                "id": 61792,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12239:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "12229:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61794,
                            "nodeType": "ExpressionStatement",
                            "src": "12229:11:94"
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
                        "id": 61801,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 61799,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 61797,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61728,
                            "src": "12272:5:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">>",
                          "rightExpression": {
                            "hexValue": "38",
                            "id": 61798,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12281:1:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_8_by_1",
                              "typeString": "int_const 8"
                            },
                            "value": "8"
                          },
                          "src": "12272:10:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 61800,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12285:1:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "12272:14:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 61807,
                      "nodeType": "IfStatement",
                      "src": "12268:64:94",
                      "trueBody": {
                        "id": 61806,
                        "nodeType": "Block",
                        "src": "12288:44:94",
                        "statements": [
                          {
                            "expression": {
                              "id": 61804,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 61802,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61734,
                                "src": "12306:6:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "hexValue": "31",
                                "id": 61803,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12316:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "12306:11:94",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 61805,
                            "nodeType": "ExpressionStatement",
                            "src": "12306:11:94"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 61809,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61734,
                    "src": "12358:6:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 61732,
                  "id": 61810,
                  "nodeType": "Return",
                  "src": "12351:13:94"
                }
              ]
            },
            "documentation": {
              "id": 61726,
              "nodeType": "StructuredDocumentation",
              "src": "11463:240:94",
              "text": " @dev Return the log in base 256, rounded down, of a positive value.\n Returns 0 if given 0.\n Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log256",
            "nameLocation": "11717:6:94",
            "parameters": {
              "id": 61729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61728,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11732:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61812,
                  "src": "11724:13:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11724:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11723:15:94"
            },
            "returnParameters": {
              "id": 61732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61731,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61812,
                  "src": "11762:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11762:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11761:9:94"
            },
            "scope": 61852,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61851,
            "nodeType": "FunctionDefinition",
            "src": "12526:256:94",
            "nodes": [],
            "body": {
              "id": 61850,
              "nodeType": "Block",
              "src": "12608:174:94",
              "nodes": [],
              "statements": [
                {
                  "id": 61849,
                  "nodeType": "UncheckedBlock",
                  "src": "12618:158:94",
                  "statements": [
                    {
                      "assignments": [
                        61824
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 61824,
                          "mutability": "mutable",
                          "name": "result",
                          "nameLocation": "12650:6:94",
                          "nodeType": "VariableDeclaration",
                          "scope": 61849,
                          "src": "12642:14:94",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 61823,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "12642:7:94",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 61828,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 61826,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61815,
                            "src": "12666:5:94",
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
                          "id": 61825,
                          "name": "log256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            61812,
                            61851
                          ],
                          "referencedDeclaration": 61812,
                          "src": "12659:6:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) pure returns (uint256)"
                          }
                        },
                        "id": 61827,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12659:13:94",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "12642:30:94"
                    },
                    {
                      "expression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 61847,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 61829,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61824,
                          "src": "12693:6:94",
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
                                "id": 61842,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_Rounding_$60993",
                                    "typeString": "enum Math.Rounding"
                                  },
                                  "id": 61833,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 61830,
                                    "name": "rounding",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61818,
                                    "src": "12703:8:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60993",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "expression": {
                                      "id": 61831,
                                      "name": "Rounding",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60993,
                                      "src": "12715:8:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_Rounding_$60993_$",
                                        "typeString": "type(enum Math.Rounding)"
                                      }
                                    },
                                    "id": 61832,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "12724:2:94",
                                    "memberName": "Up",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 60991,
                                    "src": "12715:11:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_Rounding_$60993",
                                      "typeString": "enum Math.Rounding"
                                    }
                                  },
                                  "src": "12703:23:94",
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
                                  "id": 61841,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 61839,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "31",
                                      "id": 61834,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "12730:1:94",
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
                                          "id": 61837,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "id": 61835,
                                            "name": "result",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 61824,
                                            "src": "12736:6:94",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "<<",
                                          "rightExpression": {
                                            "hexValue": "33",
                                            "id": 61836,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "12746:1:94",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_3_by_1",
                                              "typeString": "int_const 3"
                                            },
                                            "value": "3"
                                          },
                                          "src": "12736:11:94",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "id": 61838,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "12735:13:94",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "12730:18:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<",
                                  "rightExpression": {
                                    "id": 61840,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 61815,
                                    "src": "12751:5:94",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "12730:26:94",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "12703:53:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseExpression": {
                                "hexValue": "30",
                                "id": 61844,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12763:1:94",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "id": 61845,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "Conditional",
                              "src": "12703:61:94",
                              "trueExpression": {
                                "hexValue": "31",
                                "id": 61843,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "12759:1:94",
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
                          "id": 61846,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "12702:63:94",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "12693:72:94",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 61822,
                      "id": 61848,
                      "nodeType": "Return",
                      "src": "12686:79:94"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 61813,
              "nodeType": "StructuredDocumentation",
              "src": "12377:144:94",
              "text": " @dev Return the log in base 256, following the selected rounding direction, of a positive value.\n Returns 0 if given 0."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "log256",
            "nameLocation": "12535:6:94",
            "parameters": {
              "id": 61819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61815,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12550:5:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61851,
                  "src": "12542:13:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12542:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 61818,
                  "mutability": "mutable",
                  "name": "rounding",
                  "nameLocation": "12566:8:94",
                  "nodeType": "VariableDeclaration",
                  "scope": 61851,
                  "src": "12557:17:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Rounding_$60993",
                    "typeString": "enum Math.Rounding"
                  },
                  "typeName": {
                    "id": 61817,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61816,
                      "name": "Rounding",
                      "nameLocations": [
                        "12557:8:94"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60993,
                      "src": "12557:8:94"
                    },
                    "referencedDeclaration": 60993,
                    "src": "12557:8:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Rounding_$60993",
                      "typeString": "enum Math.Rounding"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12541:34:94"
            },
            "returnParameters": {
              "id": 61822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61821,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61851,
                  "src": "12599:7:94",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12599:7:94",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12598:9:94"
            },
            "scope": 61852,
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
          "id": 60989,
          "nodeType": "StructuredDocumentation",
          "src": "128:73:94",
          "text": " @dev Standard math utilities missing in the Solidity language."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          61852
        ],
        "name": "Math",
        "nameLocation": "210:4:94",
        "scope": 61853,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 94
} as const;
