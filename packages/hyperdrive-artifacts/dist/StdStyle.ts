export const StdStyle = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203527ed4746236c1b78c58cddc9f1521237ba3dbdd99c975ec8b99c914b939b5864736f6c63430008130033",
    "sourceMap": "100:10361:84:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;100:10361:84;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203527ed4746236c1b78c58cddc9f1521237ba3dbdd99c975ec8b99c914b939b5864736f6c63430008130033",
    "sourceMap": "100:10361:84:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdStyle.sol\":\"StdStyle\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
        "lib/forge-std/src/StdStyle.sol": "StdStyle"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/StdStyle.sol": {
        "keccak256": "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d",
        "urls": [
          "bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8",
          "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"
        ],
        "license": "MIT"
      },
      "lib/forge-std/src/Vm.sol": {
        "keccak256": "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
        "urls": [
          "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
          "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/StdStyle.sol",
    "id": 30442,
    "exportedSymbols": {
      "StdStyle": [
        30441
      ],
      "VmSafe": [
        32405
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:10430:84",
    "nodes": [
      {
        "id": 29232,
        "nodeType": "PragmaDirective",
        "src": "32:32:84",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".22",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 29234,
        "nodeType": "ImportDirective",
        "src": "66:32:84",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 30442,
        "sourceUnit": 32878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 29233,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 32405,
              "src": "74:6:84",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 30441,
        "nodeType": "ContractDefinition",
        "src": "100:10361:84",
        "nodes": [
          {
            "id": 29251,
            "nodeType": "VariableDeclaration",
            "src": "123:92:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "147:2:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$32405",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 29236,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 29235,
                "name": "VmSafe",
                "nameLocations": [
                  "123:6:84"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 32405,
                "src": "123:6:84"
              },
              "referencedDeclaration": 32405,
              "src": "123:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$32405",
                "typeString": "contract VmSafe"
              }
            },
            "value": {
              "arguments": [
                {
                  "arguments": [
                    {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "6865766d20636865617420636f6465",
                                  "id": 29245,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "193:17:84",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                    "typeString": "literal_string \"hevm cheat code\""
                                  },
                                  "value": "hevm cheat code"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                    "typeString": "literal_string \"hevm cheat code\""
                                  }
                                ],
                                "id": 29244,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "183:9:84",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 29246,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "183:28:84",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 29243,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "175:7:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 29242,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "175:7:84",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 29247,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "175:37:84",
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
                          }
                        ],
                        "id": 29241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "167:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 29240,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "167:7:84",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 29248,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "167:46:84",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint160",
                        "typeString": "uint160"
                      }
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_uint160",
                        "typeString": "uint160"
                      }
                    ],
                    "id": 29239,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "159:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 29238,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "159:7:84",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 29249,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "159:55:84",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                ],
                "id": 29237,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 32405,
                "src": "152:6:84",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$32405_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 29250,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "152:63:84",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$32405",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 29254,
            "nodeType": "VariableDeclaration",
            "src": "222:34:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RED",
            "nameLocation": "238:3:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29252,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "222:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39316d",
              "id": 29253,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "244:12:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_e865f62b1188865fdbe08fdbe8546369f5c78a8f677a27514aadc154b4263c18",
                "typeString": "literal_string hex\"1b5b39316d\""
              },
              "value": "\u001b[91m"
            },
            "visibility": "internal"
          },
          {
            "id": 29257,
            "nodeType": "VariableDeclaration",
            "src": "262:36:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "GREEN",
            "nameLocation": "278:5:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29255,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "262:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39326d",
              "id": 29256,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "286:12:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_250c6c79af2fd59b948ba31b977e669524bbf27faba009961b135f1635e1e32b",
                "typeString": "literal_string hex\"1b5b39326d\""
              },
              "value": "\u001b[92m"
            },
            "visibility": "internal"
          },
          {
            "id": 29260,
            "nodeType": "VariableDeclaration",
            "src": "304:37:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "YELLOW",
            "nameLocation": "320:6:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29258,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "304:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39336d",
              "id": 29259,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "329:12:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_801b445b8c4f71d86cf740b8fd9f85e172d35421144725dd58fed362de2e6cf5",
                "typeString": "literal_string hex\"1b5b39336d\""
              },
              "value": "\u001b[93m"
            },
            "visibility": "internal"
          },
          {
            "id": 29263,
            "nodeType": "VariableDeclaration",
            "src": "347:35:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BLUE",
            "nameLocation": "363:4:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29261,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "347:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39346d",
              "id": 29262,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "370:12:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_66ecf2e89553c52e360a74737e5e4e3d15e4d08217c17497ca50efb90c95d593",
                "typeString": "literal_string hex\"1b5b39346d\""
              },
              "value": "\u001b[94m"
            },
            "visibility": "internal"
          },
          {
            "id": 29266,
            "nodeType": "VariableDeclaration",
            "src": "388:38:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAGENTA",
            "nameLocation": "404:7:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29264,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "388:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39356d",
              "id": 29265,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "414:12:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_b81cf1fd9bcd2b49f14457c6168490b5ff507c85cc3778934da8235d270d6b5b",
                "typeString": "literal_string hex\"1b5b39356d\""
              },
              "value": "\u001b[95m"
            },
            "visibility": "internal"
          },
          {
            "id": 29269,
            "nodeType": "VariableDeclaration",
            "src": "432:35:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CYAN",
            "nameLocation": "448:4:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29267,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "432:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39366d",
              "id": 29268,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "455:12:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_f73c74e3aa04446480bd18c1b857a46321f6d66d2bfb703d52333566c779447b",
                "typeString": "literal_string hex\"1b5b39366d\""
              },
              "value": "\u001b[96m"
            },
            "visibility": "internal"
          },
          {
            "id": 29272,
            "nodeType": "VariableDeclaration",
            "src": "473:34:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BOLD",
            "nameLocation": "489:4:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29270,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "473:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b316d",
              "id": 29271,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "496:11:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_b25b1471c5d449346ad6b37b501b2d5911d6e2bad13ad71d09cdfa3d3b140a17",
                "typeString": "literal_string hex\"1b5b316d\""
              },
              "value": "\u001b[1m"
            },
            "visibility": "internal"
          },
          {
            "id": 29275,
            "nodeType": "VariableDeclaration",
            "src": "513:33:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "DIM",
            "nameLocation": "529:3:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29273,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "513:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b326d",
              "id": 29274,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "535:11:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_2f556fa434add49eadfa043e74ff00496b89a16068544c1118ec19f5d8603d51",
                "typeString": "literal_string hex\"1b5b326d\""
              },
              "value": "\u001b[2m"
            },
            "visibility": "internal"
          },
          {
            "id": 29278,
            "nodeType": "VariableDeclaration",
            "src": "552:36:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ITALIC",
            "nameLocation": "568:6:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29276,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "552:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b336d",
              "id": 29277,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "577:11:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_3889f2814cfbcc60c7a881028023c05aed4a6dae60be0df554f690b1f4e7411f",
                "typeString": "literal_string hex\"1b5b336d\""
              },
              "value": "\u001b[3m"
            },
            "visibility": "internal"
          },
          {
            "id": 29281,
            "nodeType": "VariableDeclaration",
            "src": "594:39:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNDERLINE",
            "nameLocation": "610:9:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29279,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "594:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b346d",
              "id": 29280,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "622:11:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_48cbbbbdbcd789b35edf67deaad6f96f406603d9181318ca90ef32f90fedb5bb",
                "typeString": "literal_string hex\"1b5b346d\""
              },
              "value": "\u001b[4m"
            },
            "visibility": "internal"
          },
          {
            "id": 29284,
            "nodeType": "VariableDeclaration",
            "src": "639:37:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVERSE",
            "nameLocation": "655:7:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29282,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "639:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b376d",
              "id": 29283,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "665:11:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_963e08c830a620b3640a99ac46ac6850f28c8f20be064518b3acc7016c3e286e",
                "typeString": "literal_string hex\"1b5b376d\""
              },
              "value": "\u001b[7m"
            },
            "visibility": "internal"
          },
          {
            "id": 29287,
            "nodeType": "VariableDeclaration",
            "src": "682:35:84",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RESET",
            "nameLocation": "698:5:84",
            "scope": 30441,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 29285,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "682:6:84",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b306d",
              "id": 29286,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "706:11:84",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_289c700ce2c600d61adfc66f83b41c26150052f3ea6c772e582ea6afd03d1949",
                "typeString": "literal_string hex\"1b5b306d\""
              },
              "value": "\u001b[0m"
            },
            "visibility": "internal"
          },
          {
            "id": 29307,
            "nodeType": "FunctionDefinition",
            "src": "724:167:84",
            "nodes": [],
            "body": {
              "id": 29306,
              "nodeType": "Block",
              "src": "823:68:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29300,
                            "name": "style",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29289,
                            "src": "864:5:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "id": 29301,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29291,
                            "src": "871:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "id": 29302,
                            "name": "RESET",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29287,
                            "src": "877:5:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "id": 29298,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "847:3:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 29299,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "851:12:84",
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "src": "847:16:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 29303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "847:36:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 29297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "840:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 29296,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "840:6:84",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 29304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "840:44:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29295,
                  "id": 29305,
                  "nodeType": "Return",
                  "src": "833:51:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "styleConcat",
            "nameLocation": "733:11:84",
            "parameters": {
              "id": 29292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29289,
                  "mutability": "mutable",
                  "name": "style",
                  "nameLocation": "759:5:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29307,
                  "src": "745:19:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29288,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "745:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29291,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "780:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29307,
                  "src": "766:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29290,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "766:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "744:41:84"
            },
            "returnParameters": {
              "id": 29295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29294,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29307,
                  "src": "808:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29293,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "807:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 29320,
            "nodeType": "FunctionDefinition",
            "src": "897:117:84",
            "nodes": [],
            "body": {
              "id": 29319,
              "nodeType": "Block",
              "src": "968:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29315,
                        "name": "RED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29254,
                        "src": "997:3:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 29316,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29309,
                        "src": "1002:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29314,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "985:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "985:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29313,
                  "id": 29318,
                  "nodeType": "Return",
                  "src": "978:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "906:3:84",
            "parameters": {
              "id": 29310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29309,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "924:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29320,
                  "src": "910:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29308,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "910:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "909:20:84"
            },
            "returnParameters": {
              "id": 29313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29312,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29320,
                  "src": "953:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29311,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "953:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "952:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29335,
            "nodeType": "FunctionDefinition",
            "src": "1020:111:84",
            "nodes": [],
            "body": {
              "id": 29334,
              "nodeType": "Block",
              "src": "1085:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29330,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29322,
                            "src": "1118:4:84",
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
                          "expression": {
                            "id": 29328,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "1106:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1109:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "1106:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 29331,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1106:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29327,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29320,
                        29335,
                        29350,
                        29365,
                        29380
                      ],
                      "referencedDeclaration": 29320,
                      "src": "1102:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29332,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1102:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29326,
                  "id": 29333,
                  "nodeType": "Return",
                  "src": "1095:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "1029:3:84",
            "parameters": {
              "id": 29323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29322,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1041:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29335,
                  "src": "1033:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29321,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1033:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1032:14:84"
            },
            "returnParameters": {
              "id": 29326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29325,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29335,
                  "src": "1070:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29324,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1070:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1069:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29350,
            "nodeType": "FunctionDefinition",
            "src": "1137:110:84",
            "nodes": [],
            "body": {
              "id": 29349,
              "nodeType": "Block",
              "src": "1201:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29345,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29337,
                            "src": "1234:4:84",
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
                          "expression": {
                            "id": 29343,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "1222:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29344,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1225:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "1222:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 29346,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1222:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29342,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29320,
                        29335,
                        29350,
                        29365,
                        29380
                      ],
                      "referencedDeclaration": 29320,
                      "src": "1218:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29347,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1218:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29341,
                  "id": 29348,
                  "nodeType": "Return",
                  "src": "1211:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "1146:3:84",
            "parameters": {
              "id": 29338,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29337,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1157:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29350,
                  "src": "1150:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 29336,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1150:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1149:13:84"
            },
            "returnParameters": {
              "id": 29341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29340,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29350,
                  "src": "1186:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29339,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1186:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1185:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29365,
            "nodeType": "FunctionDefinition",
            "src": "1253:111:84",
            "nodes": [],
            "body": {
              "id": 29364,
              "nodeType": "Block",
              "src": "1318:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29360,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29352,
                            "src": "1351:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 29358,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "1339:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29359,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1342:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "1339:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 29361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1339:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29357,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29320,
                        29335,
                        29350,
                        29365,
                        29380
                      ],
                      "referencedDeclaration": 29320,
                      "src": "1335:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1335:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29356,
                  "id": 29363,
                  "nodeType": "Return",
                  "src": "1328:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "1262:3:84",
            "parameters": {
              "id": 29353,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29352,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1274:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29365,
                  "src": "1266:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29351,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1266:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1265:14:84"
            },
            "returnParameters": {
              "id": 29356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29355,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29365,
                  "src": "1303:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29354,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1303:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1302:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29380,
            "nodeType": "FunctionDefinition",
            "src": "1370:108:84",
            "nodes": [],
            "body": {
              "id": 29379,
              "nodeType": "Block",
              "src": "1432:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29375,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29367,
                            "src": "1465:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 29373,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "1453:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1456:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "1453:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 29376,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1453:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29372,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29320,
                        29335,
                        29350,
                        29365,
                        29380
                      ],
                      "referencedDeclaration": 29320,
                      "src": "1449:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1449:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29371,
                  "id": 29378,
                  "nodeType": "Return",
                  "src": "1442:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "1379:3:84",
            "parameters": {
              "id": 29368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29367,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1388:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29380,
                  "src": "1383:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29366,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1383:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1382:11:84"
            },
            "returnParameters": {
              "id": 29371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29370,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29380,
                  "src": "1417:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29369,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1417:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1416:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29395,
            "nodeType": "FunctionDefinition",
            "src": "1484:121:84",
            "nodes": [],
            "body": {
              "id": 29394,
              "nodeType": "Block",
              "src": "1559:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29390,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29382,
                            "src": "1592:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 29388,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "1580:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29389,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1583:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "1580:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 29391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1580:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29387,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29320,
                        29335,
                        29350,
                        29365,
                        29380
                      ],
                      "referencedDeclaration": 29320,
                      "src": "1576:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1576:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29386,
                  "id": 29393,
                  "nodeType": "Return",
                  "src": "1569:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redBytes",
            "nameLocation": "1493:8:84",
            "parameters": {
              "id": 29383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29382,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1515:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29395,
                  "src": "1502:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29381,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1502:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1501:19:84"
            },
            "returnParameters": {
              "id": 29386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29385,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29395,
                  "src": "1544:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29384,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1544:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1543:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29410,
            "nodeType": "FunctionDefinition",
            "src": "1611:118:84",
            "nodes": [],
            "body": {
              "id": 29409,
              "nodeType": "Block",
              "src": "1683:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29405,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29397,
                            "src": "1716:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 29403,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "1704:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1707:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "1704:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 29406,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1704:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29402,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29320,
                        29335,
                        29350,
                        29365,
                        29380
                      ],
                      "referencedDeclaration": 29320,
                      "src": "1700:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29407,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1700:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29401,
                  "id": 29408,
                  "nodeType": "Return",
                  "src": "1693:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redBytes32",
            "nameLocation": "1620:10:84",
            "parameters": {
              "id": 29398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29397,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1639:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29410,
                  "src": "1631:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29396,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1630:14:84"
            },
            "returnParameters": {
              "id": 29401,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29400,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29410,
                  "src": "1668:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29399,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1668:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1667:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29423,
            "nodeType": "FunctionDefinition",
            "src": "1735:121:84",
            "nodes": [],
            "body": {
              "id": 29422,
              "nodeType": "Block",
              "src": "1808:48:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29418,
                        "name": "GREEN",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29257,
                        "src": "1837:5:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 29419,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29412,
                        "src": "1844:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29417,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "1825:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29420,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1825:24:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29416,
                  "id": 29421,
                  "nodeType": "Return",
                  "src": "1818:31:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "1744:5:84",
            "parameters": {
              "id": 29413,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29412,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1764:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29423,
                  "src": "1750:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29411,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1750:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1749:20:84"
            },
            "returnParameters": {
              "id": 29416,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29415,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29423,
                  "src": "1793:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29414,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1793:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1792:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29438,
            "nodeType": "FunctionDefinition",
            "src": "1862:115:84",
            "nodes": [],
            "body": {
              "id": 29437,
              "nodeType": "Block",
              "src": "1929:48:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29433,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29425,
                            "src": "1964:4:84",
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
                          "expression": {
                            "id": 29431,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "1952:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1955:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "1952:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 29434,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1952:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29430,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29423,
                        29438,
                        29453,
                        29468,
                        29483
                      ],
                      "referencedDeclaration": 29423,
                      "src": "1946:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1946:24:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29429,
                  "id": 29436,
                  "nodeType": "Return",
                  "src": "1939:31:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "1871:5:84",
            "parameters": {
              "id": 29426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29425,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1885:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29438,
                  "src": "1877:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29424,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1877:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1876:14:84"
            },
            "returnParameters": {
              "id": 29429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29428,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29438,
                  "src": "1914:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29427,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1914:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1913:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29453,
            "nodeType": "FunctionDefinition",
            "src": "1983:114:84",
            "nodes": [],
            "body": {
              "id": 29452,
              "nodeType": "Block",
              "src": "2049:48:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29448,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29440,
                            "src": "2084:4:84",
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
                          "expression": {
                            "id": 29446,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "2072:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29447,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2075:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "2072:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 29449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2072:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29445,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29423,
                        29438,
                        29453,
                        29468,
                        29483
                      ],
                      "referencedDeclaration": 29423,
                      "src": "2066:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2066:24:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29444,
                  "id": 29451,
                  "nodeType": "Return",
                  "src": "2059:31:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "1992:5:84",
            "parameters": {
              "id": 29441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29440,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2005:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29453,
                  "src": "1998:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 29439,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1998:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1997:13:84"
            },
            "returnParameters": {
              "id": 29444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29443,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29453,
                  "src": "2034:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29442,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2034:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2033:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29468,
            "nodeType": "FunctionDefinition",
            "src": "2103:115:84",
            "nodes": [],
            "body": {
              "id": 29467,
              "nodeType": "Block",
              "src": "2170:48:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29463,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29455,
                            "src": "2205:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 29461,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "2193:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29462,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2196:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "2193:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 29464,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2193:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29460,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29423,
                        29438,
                        29453,
                        29468,
                        29483
                      ],
                      "referencedDeclaration": 29423,
                      "src": "2187:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2187:24:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29459,
                  "id": 29466,
                  "nodeType": "Return",
                  "src": "2180:31:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "2112:5:84",
            "parameters": {
              "id": 29456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29455,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2126:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29468,
                  "src": "2118:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29454,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2118:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2117:14:84"
            },
            "returnParameters": {
              "id": 29459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29458,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29468,
                  "src": "2155:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29457,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2155:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2154:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29483,
            "nodeType": "FunctionDefinition",
            "src": "2224:112:84",
            "nodes": [],
            "body": {
              "id": 29482,
              "nodeType": "Block",
              "src": "2288:48:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29478,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29470,
                            "src": "2323:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 29476,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "2311:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29477,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2314:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "2311:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 29479,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2311:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29475,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29423,
                        29438,
                        29453,
                        29468,
                        29483
                      ],
                      "referencedDeclaration": 29423,
                      "src": "2305:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2305:24:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29474,
                  "id": 29481,
                  "nodeType": "Return",
                  "src": "2298:31:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "2233:5:84",
            "parameters": {
              "id": 29471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29470,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2244:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29483,
                  "src": "2239:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29469,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2239:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2238:11:84"
            },
            "returnParameters": {
              "id": 29474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29473,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29483,
                  "src": "2273:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29472,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2273:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2272:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29498,
            "nodeType": "FunctionDefinition",
            "src": "2342:125:84",
            "nodes": [],
            "body": {
              "id": 29497,
              "nodeType": "Block",
              "src": "2419:48:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29493,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29485,
                            "src": "2454:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 29491,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "2442:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2445:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "2442:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 29494,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2442:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29490,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29423,
                        29438,
                        29453,
                        29468,
                        29483
                      ],
                      "referencedDeclaration": 29423,
                      "src": "2436:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2436:24:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29489,
                  "id": 29496,
                  "nodeType": "Return",
                  "src": "2429:31:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "greenBytes",
            "nameLocation": "2351:10:84",
            "parameters": {
              "id": 29486,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29485,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2375:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29498,
                  "src": "2362:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29484,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2361:19:84"
            },
            "returnParameters": {
              "id": 29489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29488,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29498,
                  "src": "2404:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29487,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2404:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2403:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29513,
            "nodeType": "FunctionDefinition",
            "src": "2473:122:84",
            "nodes": [],
            "body": {
              "id": 29512,
              "nodeType": "Block",
              "src": "2547:48:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29508,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29500,
                            "src": "2582:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 29506,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "2570:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29507,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2573:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "2570:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 29509,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2570:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29505,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29423,
                        29438,
                        29453,
                        29468,
                        29483
                      ],
                      "referencedDeclaration": 29423,
                      "src": "2564:5:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2564:24:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29504,
                  "id": 29511,
                  "nodeType": "Return",
                  "src": "2557:31:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "greenBytes32",
            "nameLocation": "2482:12:84",
            "parameters": {
              "id": 29501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29500,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2503:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29513,
                  "src": "2495:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29499,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2495:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2494:14:84"
            },
            "returnParameters": {
              "id": 29504,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29503,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29513,
                  "src": "2532:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29502,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2532:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2531:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29526,
            "nodeType": "FunctionDefinition",
            "src": "2601:123:84",
            "nodes": [],
            "body": {
              "id": 29525,
              "nodeType": "Block",
              "src": "2675:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29521,
                        "name": "YELLOW",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29260,
                        "src": "2704:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 29522,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29515,
                        "src": "2712:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29520,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "2692:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2692:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29519,
                  "id": 29524,
                  "nodeType": "Return",
                  "src": "2685:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "2610:6:84",
            "parameters": {
              "id": 29516,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29515,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2631:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29526,
                  "src": "2617:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29514,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2617:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2616:20:84"
            },
            "returnParameters": {
              "id": 29519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29518,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29526,
                  "src": "2660:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29517,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2660:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2659:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29541,
            "nodeType": "FunctionDefinition",
            "src": "2730:117:84",
            "nodes": [],
            "body": {
              "id": 29540,
              "nodeType": "Block",
              "src": "2798:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29536,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29528,
                            "src": "2834:4:84",
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
                          "expression": {
                            "id": 29534,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "2822:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29535,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2825:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "2822:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 29537,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2822:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29533,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29526,
                        29541,
                        29556,
                        29571,
                        29586
                      ],
                      "referencedDeclaration": 29526,
                      "src": "2815:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29538,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2815:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29532,
                  "id": 29539,
                  "nodeType": "Return",
                  "src": "2808:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "2739:6:84",
            "parameters": {
              "id": 29529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29528,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2754:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29541,
                  "src": "2746:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29527,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2746:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2745:14:84"
            },
            "returnParameters": {
              "id": 29532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29531,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29541,
                  "src": "2783:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29530,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2783:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2782:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29556,
            "nodeType": "FunctionDefinition",
            "src": "2853:116:84",
            "nodes": [],
            "body": {
              "id": 29555,
              "nodeType": "Block",
              "src": "2920:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29551,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29543,
                            "src": "2956:4:84",
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
                          "expression": {
                            "id": 29549,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "2944:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29550,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2947:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "2944:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 29552,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2944:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29548,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29526,
                        29541,
                        29556,
                        29571,
                        29586
                      ],
                      "referencedDeclaration": 29526,
                      "src": "2937:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2937:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29547,
                  "id": 29554,
                  "nodeType": "Return",
                  "src": "2930:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "2862:6:84",
            "parameters": {
              "id": 29544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29543,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2876:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29556,
                  "src": "2869:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 29542,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2869:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2868:13:84"
            },
            "returnParameters": {
              "id": 29547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29546,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29556,
                  "src": "2905:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29545,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2905:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2904:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29571,
            "nodeType": "FunctionDefinition",
            "src": "2975:117:84",
            "nodes": [],
            "body": {
              "id": 29570,
              "nodeType": "Block",
              "src": "3043:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29566,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29558,
                            "src": "3079:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 29564,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "3067:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29565,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3070:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "3067:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 29567,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3067:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29563,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29526,
                        29541,
                        29556,
                        29571,
                        29586
                      ],
                      "referencedDeclaration": 29526,
                      "src": "3060:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3060:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29562,
                  "id": 29569,
                  "nodeType": "Return",
                  "src": "3053:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "2984:6:84",
            "parameters": {
              "id": 29559,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29558,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2999:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29571,
                  "src": "2991:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29557,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2991:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2990:14:84"
            },
            "returnParameters": {
              "id": 29562,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29561,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29571,
                  "src": "3028:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29560,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3028:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3027:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29586,
            "nodeType": "FunctionDefinition",
            "src": "3098:114:84",
            "nodes": [],
            "body": {
              "id": 29585,
              "nodeType": "Block",
              "src": "3163:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29581,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29573,
                            "src": "3199:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 29579,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "3187:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29580,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3190:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "3187:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 29582,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3187:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29578,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29526,
                        29541,
                        29556,
                        29571,
                        29586
                      ],
                      "referencedDeclaration": 29526,
                      "src": "3180:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3180:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29577,
                  "id": 29584,
                  "nodeType": "Return",
                  "src": "3173:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "3107:6:84",
            "parameters": {
              "id": 29574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29573,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3119:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29586,
                  "src": "3114:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29572,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3114:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3113:11:84"
            },
            "returnParameters": {
              "id": 29577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29576,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29586,
                  "src": "3148:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29575,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3148:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3147:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29601,
            "nodeType": "FunctionDefinition",
            "src": "3218:127:84",
            "nodes": [],
            "body": {
              "id": 29600,
              "nodeType": "Block",
              "src": "3296:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29596,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29588,
                            "src": "3332:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 29594,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "3320:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29595,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3323:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "3320:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 29597,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3320:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29593,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29526,
                        29541,
                        29556,
                        29571,
                        29586
                      ],
                      "referencedDeclaration": 29526,
                      "src": "3313:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3313:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29592,
                  "id": 29599,
                  "nodeType": "Return",
                  "src": "3306:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellowBytes",
            "nameLocation": "3227:11:84",
            "parameters": {
              "id": 29589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29588,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3252:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29601,
                  "src": "3239:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29587,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3239:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3238:19:84"
            },
            "returnParameters": {
              "id": 29592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29591,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29601,
                  "src": "3281:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29590,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3281:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3280:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29616,
            "nodeType": "FunctionDefinition",
            "src": "3351:124:84",
            "nodes": [],
            "body": {
              "id": 29615,
              "nodeType": "Block",
              "src": "3426:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29611,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29603,
                            "src": "3462:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 29609,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "3450:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29610,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3453:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "3450:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 29612,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3450:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29608,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29526,
                        29541,
                        29556,
                        29571,
                        29586
                      ],
                      "referencedDeclaration": 29526,
                      "src": "3443:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29613,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3443:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29607,
                  "id": 29614,
                  "nodeType": "Return",
                  "src": "3436:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellowBytes32",
            "nameLocation": "3360:13:84",
            "parameters": {
              "id": 29604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29603,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3382:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29616,
                  "src": "3374:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29602,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3374:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3373:14:84"
            },
            "returnParameters": {
              "id": 29607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29606,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29616,
                  "src": "3411:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29605,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3411:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3410:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29629,
            "nodeType": "FunctionDefinition",
            "src": "3481:119:84",
            "nodes": [],
            "body": {
              "id": 29628,
              "nodeType": "Block",
              "src": "3553:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29624,
                        "name": "BLUE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29263,
                        "src": "3582:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 29625,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29618,
                        "src": "3588:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29623,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "3570:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3570:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29622,
                  "id": 29627,
                  "nodeType": "Return",
                  "src": "3563:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3490:4:84",
            "parameters": {
              "id": 29619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29618,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3509:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29629,
                  "src": "3495:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29617,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3495:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3494:20:84"
            },
            "returnParameters": {
              "id": 29622,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29621,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29629,
                  "src": "3538:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29620,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3538:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3537:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29644,
            "nodeType": "FunctionDefinition",
            "src": "3606:113:84",
            "nodes": [],
            "body": {
              "id": 29643,
              "nodeType": "Block",
              "src": "3672:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29639,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29631,
                            "src": "3706:4:84",
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
                          "expression": {
                            "id": 29637,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "3694:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29638,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3697:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "3694:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 29640,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3694:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29636,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29629,
                        29644,
                        29659,
                        29674,
                        29689
                      ],
                      "referencedDeclaration": 29629,
                      "src": "3689:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29641,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3689:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29635,
                  "id": 29642,
                  "nodeType": "Return",
                  "src": "3682:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3615:4:84",
            "parameters": {
              "id": 29632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29631,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3628:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29644,
                  "src": "3620:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29630,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3620:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3619:14:84"
            },
            "returnParameters": {
              "id": 29635,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29634,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29644,
                  "src": "3657:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29633,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3657:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3656:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29659,
            "nodeType": "FunctionDefinition",
            "src": "3725:112:84",
            "nodes": [],
            "body": {
              "id": 29658,
              "nodeType": "Block",
              "src": "3790:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29654,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29646,
                            "src": "3824:4:84",
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
                          "expression": {
                            "id": 29652,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "3812:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29653,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3815:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "3812:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 29655,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3812:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29651,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29629,
                        29644,
                        29659,
                        29674,
                        29689
                      ],
                      "referencedDeclaration": 29629,
                      "src": "3807:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3807:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29650,
                  "id": 29657,
                  "nodeType": "Return",
                  "src": "3800:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3734:4:84",
            "parameters": {
              "id": 29647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29646,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3746:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29659,
                  "src": "3739:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 29645,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3739:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3738:13:84"
            },
            "returnParameters": {
              "id": 29650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29649,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29659,
                  "src": "3775:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29648,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3775:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3774:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29674,
            "nodeType": "FunctionDefinition",
            "src": "3843:113:84",
            "nodes": [],
            "body": {
              "id": 29673,
              "nodeType": "Block",
              "src": "3909:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29669,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29661,
                            "src": "3943:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 29667,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "3931:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29668,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3934:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "3931:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 29670,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3931:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29666,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29629,
                        29644,
                        29659,
                        29674,
                        29689
                      ],
                      "referencedDeclaration": 29629,
                      "src": "3926:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3926:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29665,
                  "id": 29672,
                  "nodeType": "Return",
                  "src": "3919:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3852:4:84",
            "parameters": {
              "id": 29662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29661,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3865:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29674,
                  "src": "3857:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29660,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3857:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3856:14:84"
            },
            "returnParameters": {
              "id": 29665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29664,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29674,
                  "src": "3894:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29663,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3894:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3893:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29689,
            "nodeType": "FunctionDefinition",
            "src": "3962:110:84",
            "nodes": [],
            "body": {
              "id": 29688,
              "nodeType": "Block",
              "src": "4025:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29684,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29676,
                            "src": "4059:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 29682,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "4047:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29683,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4050:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "4047:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 29685,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4047:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29681,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29629,
                        29644,
                        29659,
                        29674,
                        29689
                      ],
                      "referencedDeclaration": 29629,
                      "src": "4042:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29686,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4042:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29680,
                  "id": 29687,
                  "nodeType": "Return",
                  "src": "4035:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3971:4:84",
            "parameters": {
              "id": 29677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29676,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3981:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29689,
                  "src": "3976:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29675,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3976:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3975:11:84"
            },
            "returnParameters": {
              "id": 29680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29679,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29689,
                  "src": "4010:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29678,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4010:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4009:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29704,
            "nodeType": "FunctionDefinition",
            "src": "4078:123:84",
            "nodes": [],
            "body": {
              "id": 29703,
              "nodeType": "Block",
              "src": "4154:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29699,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29691,
                            "src": "4188:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 29697,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "4176:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29698,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4179:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "4176:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 29700,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4176:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29696,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29629,
                        29644,
                        29659,
                        29674,
                        29689
                      ],
                      "referencedDeclaration": 29629,
                      "src": "4171:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4171:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29695,
                  "id": 29702,
                  "nodeType": "Return",
                  "src": "4164:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blueBytes",
            "nameLocation": "4087:9:84",
            "parameters": {
              "id": 29692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29691,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4110:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29704,
                  "src": "4097:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29690,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4097:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4096:19:84"
            },
            "returnParameters": {
              "id": 29695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29694,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29704,
                  "src": "4139:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29693,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4139:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4138:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29719,
            "nodeType": "FunctionDefinition",
            "src": "4207:120:84",
            "nodes": [],
            "body": {
              "id": 29718,
              "nodeType": "Block",
              "src": "4280:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29714,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29706,
                            "src": "4314:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 29712,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "4302:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29713,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4305:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "4302:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 29715,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4302:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29711,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29629,
                        29644,
                        29659,
                        29674,
                        29689
                      ],
                      "referencedDeclaration": 29629,
                      "src": "4297:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4297:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29710,
                  "id": 29717,
                  "nodeType": "Return",
                  "src": "4290:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blueBytes32",
            "nameLocation": "4216:11:84",
            "parameters": {
              "id": 29707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29706,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4236:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29719,
                  "src": "4228:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29705,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4228:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4227:14:84"
            },
            "returnParameters": {
              "id": 29710,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29709,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29719,
                  "src": "4265:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29708,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4265:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4264:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29732,
            "nodeType": "FunctionDefinition",
            "src": "4333:125:84",
            "nodes": [],
            "body": {
              "id": 29731,
              "nodeType": "Block",
              "src": "4408:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29727,
                        "name": "MAGENTA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29266,
                        "src": "4437:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 29728,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29721,
                        "src": "4446:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29726,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "4425:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4425:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29725,
                  "id": 29730,
                  "nodeType": "Return",
                  "src": "4418:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4342:7:84",
            "parameters": {
              "id": 29722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29721,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4364:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29732,
                  "src": "4350:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29720,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4350:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4349:20:84"
            },
            "returnParameters": {
              "id": 29725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29724,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29732,
                  "src": "4393:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29723,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4393:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4392:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29747,
            "nodeType": "FunctionDefinition",
            "src": "4464:119:84",
            "nodes": [],
            "body": {
              "id": 29746,
              "nodeType": "Block",
              "src": "4533:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29742,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29734,
                            "src": "4570:4:84",
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
                          "expression": {
                            "id": 29740,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "4558:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29741,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4561:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "4558:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 29743,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4558:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29739,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29732,
                        29747,
                        29762,
                        29777,
                        29792
                      ],
                      "referencedDeclaration": 29732,
                      "src": "4550:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29744,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4550:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29738,
                  "id": 29745,
                  "nodeType": "Return",
                  "src": "4543:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4473:7:84",
            "parameters": {
              "id": 29735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29734,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4489:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29747,
                  "src": "4481:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29733,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4481:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4480:14:84"
            },
            "returnParameters": {
              "id": 29738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29737,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29747,
                  "src": "4518:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29736,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4518:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4517:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29762,
            "nodeType": "FunctionDefinition",
            "src": "4589:118:84",
            "nodes": [],
            "body": {
              "id": 29761,
              "nodeType": "Block",
              "src": "4657:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29757,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29749,
                            "src": "4694:4:84",
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
                          "expression": {
                            "id": 29755,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "4682:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29756,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4685:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "4682:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 29758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4682:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29754,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29732,
                        29747,
                        29762,
                        29777,
                        29792
                      ],
                      "referencedDeclaration": 29732,
                      "src": "4674:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4674:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29753,
                  "id": 29760,
                  "nodeType": "Return",
                  "src": "4667:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4598:7:84",
            "parameters": {
              "id": 29750,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29749,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4613:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29762,
                  "src": "4606:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 29748,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4606:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4605:13:84"
            },
            "returnParameters": {
              "id": 29753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29752,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29762,
                  "src": "4642:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29751,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4642:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4641:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29777,
            "nodeType": "FunctionDefinition",
            "src": "4713:119:84",
            "nodes": [],
            "body": {
              "id": 29776,
              "nodeType": "Block",
              "src": "4782:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29772,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29764,
                            "src": "4819:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 29770,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "4807:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29771,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4810:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "4807:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 29773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4807:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29769,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29732,
                        29747,
                        29762,
                        29777,
                        29792
                      ],
                      "referencedDeclaration": 29732,
                      "src": "4799:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4799:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29768,
                  "id": 29775,
                  "nodeType": "Return",
                  "src": "4792:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4722:7:84",
            "parameters": {
              "id": 29765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29764,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4738:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29777,
                  "src": "4730:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29763,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4730:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4729:14:84"
            },
            "returnParameters": {
              "id": 29768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29767,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29777,
                  "src": "4767:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29766,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4767:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4766:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29792,
            "nodeType": "FunctionDefinition",
            "src": "4838:116:84",
            "nodes": [],
            "body": {
              "id": 29791,
              "nodeType": "Block",
              "src": "4904:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29787,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29779,
                            "src": "4941:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 29785,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "4929:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29786,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4932:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "4929:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 29788,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4929:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29784,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29732,
                        29747,
                        29762,
                        29777,
                        29792
                      ],
                      "referencedDeclaration": 29732,
                      "src": "4921:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4921:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29783,
                  "id": 29790,
                  "nodeType": "Return",
                  "src": "4914:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4847:7:84",
            "parameters": {
              "id": 29780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29779,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4860:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29792,
                  "src": "4855:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29778,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4855:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4854:11:84"
            },
            "returnParameters": {
              "id": 29783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29782,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29792,
                  "src": "4889:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29781,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4889:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4888:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29807,
            "nodeType": "FunctionDefinition",
            "src": "4960:129:84",
            "nodes": [],
            "body": {
              "id": 29806,
              "nodeType": "Block",
              "src": "5039:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29802,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29794,
                            "src": "5076:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 29800,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "5064:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29801,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5067:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "5064:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 29803,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5064:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29799,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29732,
                        29747,
                        29762,
                        29777,
                        29792
                      ],
                      "referencedDeclaration": 29732,
                      "src": "5056:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5056:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29798,
                  "id": 29805,
                  "nodeType": "Return",
                  "src": "5049:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magentaBytes",
            "nameLocation": "4969:12:84",
            "parameters": {
              "id": 29795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29794,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4995:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29807,
                  "src": "4982:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29793,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4982:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4981:19:84"
            },
            "returnParameters": {
              "id": 29798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29797,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29807,
                  "src": "5024:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29796,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5024:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5023:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29822,
            "nodeType": "FunctionDefinition",
            "src": "5095:126:84",
            "nodes": [],
            "body": {
              "id": 29821,
              "nodeType": "Block",
              "src": "5171:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29817,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29809,
                            "src": "5208:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 29815,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "5196:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29816,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5199:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "5196:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 29818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5196:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29814,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29732,
                        29747,
                        29762,
                        29777,
                        29792
                      ],
                      "referencedDeclaration": 29732,
                      "src": "5188:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5188:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29813,
                  "id": 29820,
                  "nodeType": "Return",
                  "src": "5181:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magentaBytes32",
            "nameLocation": "5104:14:84",
            "parameters": {
              "id": 29810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29809,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5127:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29822,
                  "src": "5119:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29808,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5119:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5118:14:84"
            },
            "returnParameters": {
              "id": 29813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29812,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29822,
                  "src": "5156:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29811,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5156:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5155:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29835,
            "nodeType": "FunctionDefinition",
            "src": "5227:119:84",
            "nodes": [],
            "body": {
              "id": 29834,
              "nodeType": "Block",
              "src": "5299:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29830,
                        "name": "CYAN",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29269,
                        "src": "5328:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 29831,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29824,
                        "src": "5334:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29829,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "5316:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5316:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29828,
                  "id": 29833,
                  "nodeType": "Return",
                  "src": "5309:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5236:4:84",
            "parameters": {
              "id": 29825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29824,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5255:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29835,
                  "src": "5241:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29823,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5241:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5240:20:84"
            },
            "returnParameters": {
              "id": 29828,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29827,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29835,
                  "src": "5284:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29826,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5284:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5283:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29850,
            "nodeType": "FunctionDefinition",
            "src": "5352:113:84",
            "nodes": [],
            "body": {
              "id": 29849,
              "nodeType": "Block",
              "src": "5418:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29845,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29837,
                            "src": "5452:4:84",
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
                          "expression": {
                            "id": 29843,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "5440:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29844,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5443:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "5440:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 29846,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5440:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29842,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29835,
                        29850,
                        29865,
                        29880,
                        29895
                      ],
                      "referencedDeclaration": 29835,
                      "src": "5435:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29847,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5435:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29841,
                  "id": 29848,
                  "nodeType": "Return",
                  "src": "5428:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5361:4:84",
            "parameters": {
              "id": 29838,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29837,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5374:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29850,
                  "src": "5366:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29836,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5366:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5365:14:84"
            },
            "returnParameters": {
              "id": 29841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29840,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29850,
                  "src": "5403:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29839,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5403:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5402:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29865,
            "nodeType": "FunctionDefinition",
            "src": "5471:112:84",
            "nodes": [],
            "body": {
              "id": 29864,
              "nodeType": "Block",
              "src": "5536:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29860,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29852,
                            "src": "5570:4:84",
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
                          "expression": {
                            "id": 29858,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "5558:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29859,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5561:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "5558:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 29861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5558:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29857,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29835,
                        29850,
                        29865,
                        29880,
                        29895
                      ],
                      "referencedDeclaration": 29835,
                      "src": "5553:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5553:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29856,
                  "id": 29863,
                  "nodeType": "Return",
                  "src": "5546:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5480:4:84",
            "parameters": {
              "id": 29853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29852,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5492:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29865,
                  "src": "5485:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 29851,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5485:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5484:13:84"
            },
            "returnParameters": {
              "id": 29856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29855,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29865,
                  "src": "5521:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29854,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5521:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5520:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29880,
            "nodeType": "FunctionDefinition",
            "src": "5589:113:84",
            "nodes": [],
            "body": {
              "id": 29879,
              "nodeType": "Block",
              "src": "5655:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29875,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29867,
                            "src": "5689:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 29873,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "5677:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5680:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "5677:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 29876,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5677:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29872,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29835,
                        29850,
                        29865,
                        29880,
                        29895
                      ],
                      "referencedDeclaration": 29835,
                      "src": "5672:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29877,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5672:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29871,
                  "id": 29878,
                  "nodeType": "Return",
                  "src": "5665:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5598:4:84",
            "parameters": {
              "id": 29868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29867,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5611:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29880,
                  "src": "5603:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5603:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5602:14:84"
            },
            "returnParameters": {
              "id": 29871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29870,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29880,
                  "src": "5640:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29869,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5640:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5639:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29895,
            "nodeType": "FunctionDefinition",
            "src": "5708:110:84",
            "nodes": [],
            "body": {
              "id": 29894,
              "nodeType": "Block",
              "src": "5771:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29890,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29882,
                            "src": "5805:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 29888,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "5793:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29889,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5796:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "5793:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 29891,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5793:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29887,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29835,
                        29850,
                        29865,
                        29880,
                        29895
                      ],
                      "referencedDeclaration": 29835,
                      "src": "5788:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29892,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5788:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29886,
                  "id": 29893,
                  "nodeType": "Return",
                  "src": "5781:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5717:4:84",
            "parameters": {
              "id": 29883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29882,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5727:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29895,
                  "src": "5722:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29881,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5722:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5721:11:84"
            },
            "returnParameters": {
              "id": 29886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29885,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29895,
                  "src": "5756:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29884,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5756:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5755:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29910,
            "nodeType": "FunctionDefinition",
            "src": "5824:123:84",
            "nodes": [],
            "body": {
              "id": 29909,
              "nodeType": "Block",
              "src": "5900:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29905,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29897,
                            "src": "5934:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 29903,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "5922:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29904,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5925:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "5922:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 29906,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5922:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29902,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29835,
                        29850,
                        29865,
                        29880,
                        29895
                      ],
                      "referencedDeclaration": 29835,
                      "src": "5917:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29907,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5917:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29901,
                  "id": 29908,
                  "nodeType": "Return",
                  "src": "5910:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyanBytes",
            "nameLocation": "5833:9:84",
            "parameters": {
              "id": 29898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29897,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5856:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29910,
                  "src": "5843:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29896,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5843:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5842:19:84"
            },
            "returnParameters": {
              "id": 29901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29900,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29910,
                  "src": "5885:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29899,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5885:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5884:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29925,
            "nodeType": "FunctionDefinition",
            "src": "5953:120:84",
            "nodes": [],
            "body": {
              "id": 29924,
              "nodeType": "Block",
              "src": "6026:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29920,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29912,
                            "src": "6060:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 29918,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "6048:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29919,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6051:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "6048:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 29921,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6048:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29917,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29835,
                        29850,
                        29865,
                        29880,
                        29895
                      ],
                      "referencedDeclaration": 29835,
                      "src": "6043:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6043:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29916,
                  "id": 29923,
                  "nodeType": "Return",
                  "src": "6036:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyanBytes32",
            "nameLocation": "5962:11:84",
            "parameters": {
              "id": 29913,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29912,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5982:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29925,
                  "src": "5974:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 29911,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5974:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5973:14:84"
            },
            "returnParameters": {
              "id": 29916,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29915,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29925,
                  "src": "6011:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29914,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6011:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6010:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29938,
            "nodeType": "FunctionDefinition",
            "src": "6079:119:84",
            "nodes": [],
            "body": {
              "id": 29937,
              "nodeType": "Block",
              "src": "6151:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 29933,
                        "name": "BOLD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29272,
                        "src": "6180:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 29934,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29927,
                        "src": "6186:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29932,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "6168:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6168:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29931,
                  "id": 29936,
                  "nodeType": "Return",
                  "src": "6161:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6088:4:84",
            "parameters": {
              "id": 29928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29927,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6107:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29938,
                  "src": "6093:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29926,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6093:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6092:20:84"
            },
            "returnParameters": {
              "id": 29931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29930,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29938,
                  "src": "6136:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29929,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6136:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6135:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29953,
            "nodeType": "FunctionDefinition",
            "src": "6204:113:84",
            "nodes": [],
            "body": {
              "id": 29952,
              "nodeType": "Block",
              "src": "6270:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29948,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29940,
                            "src": "6304:4:84",
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
                          "expression": {
                            "id": 29946,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "6292:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29947,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6295:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "6292:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 29949,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6292:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29945,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29938,
                        29953,
                        29968,
                        29983,
                        29998
                      ],
                      "referencedDeclaration": 29938,
                      "src": "6287:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29950,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6287:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29944,
                  "id": 29951,
                  "nodeType": "Return",
                  "src": "6280:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6213:4:84",
            "parameters": {
              "id": 29941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29940,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6226:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29953,
                  "src": "6218:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 29939,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6218:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6217:14:84"
            },
            "returnParameters": {
              "id": 29944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29943,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29953,
                  "src": "6255:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29942,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6255:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6254:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29968,
            "nodeType": "FunctionDefinition",
            "src": "6323:112:84",
            "nodes": [],
            "body": {
              "id": 29967,
              "nodeType": "Block",
              "src": "6388:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29963,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29955,
                            "src": "6422:4:84",
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
                          "expression": {
                            "id": 29961,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "6410:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29962,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6413:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "6410:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 29964,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6410:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29960,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29938,
                        29953,
                        29968,
                        29983,
                        29998
                      ],
                      "referencedDeclaration": 29938,
                      "src": "6405:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29965,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6405:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29959,
                  "id": 29966,
                  "nodeType": "Return",
                  "src": "6398:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6332:4:84",
            "parameters": {
              "id": 29956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29955,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6344:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29968,
                  "src": "6337:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 29954,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6337:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6336:13:84"
            },
            "returnParameters": {
              "id": 29959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29958,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29968,
                  "src": "6373:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29957,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6373:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6372:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29983,
            "nodeType": "FunctionDefinition",
            "src": "6441:113:84",
            "nodes": [],
            "body": {
              "id": 29982,
              "nodeType": "Block",
              "src": "6507:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29978,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29970,
                            "src": "6541:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 29976,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "6529:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29977,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6532:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "6529:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 29979,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6529:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29975,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29938,
                        29953,
                        29968,
                        29983,
                        29998
                      ],
                      "referencedDeclaration": 29938,
                      "src": "6524:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29980,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6524:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29974,
                  "id": 29981,
                  "nodeType": "Return",
                  "src": "6517:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6450:4:84",
            "parameters": {
              "id": 29971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29970,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6463:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29983,
                  "src": "6455:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29969,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6455:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6454:14:84"
            },
            "returnParameters": {
              "id": 29974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29973,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29983,
                  "src": "6492:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29972,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6492:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6491:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 29998,
            "nodeType": "FunctionDefinition",
            "src": "6560:110:84",
            "nodes": [],
            "body": {
              "id": 29997,
              "nodeType": "Block",
              "src": "6623:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 29993,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29985,
                            "src": "6657:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 29991,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "6645:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 29992,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6648:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "6645:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 29994,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6645:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29990,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29938,
                        29953,
                        29968,
                        29983,
                        29998
                      ],
                      "referencedDeclaration": 29938,
                      "src": "6640:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 29995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6640:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 29989,
                  "id": 29996,
                  "nodeType": "Return",
                  "src": "6633:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6569:4:84",
            "parameters": {
              "id": 29986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29985,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6579:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 29998,
                  "src": "6574:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29984,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6574:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6573:11:84"
            },
            "returnParameters": {
              "id": 29989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29988,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29998,
                  "src": "6608:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29987,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6608:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6607:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30013,
            "nodeType": "FunctionDefinition",
            "src": "6676:123:84",
            "nodes": [],
            "body": {
              "id": 30012,
              "nodeType": "Block",
              "src": "6752:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30008,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30000,
                            "src": "6786:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 30006,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "6774:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30007,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6777:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "6774:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 30009,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6774:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30005,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29938,
                        29953,
                        29968,
                        29983,
                        29998
                      ],
                      "referencedDeclaration": 29938,
                      "src": "6769:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30010,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6769:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30004,
                  "id": 30011,
                  "nodeType": "Return",
                  "src": "6762:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "boldBytes",
            "nameLocation": "6685:9:84",
            "parameters": {
              "id": 30001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30000,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6708:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30013,
                  "src": "6695:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 29999,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6695:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6694:19:84"
            },
            "returnParameters": {
              "id": 30004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30003,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30013,
                  "src": "6737:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30002,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6737:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6736:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30028,
            "nodeType": "FunctionDefinition",
            "src": "6805:120:84",
            "nodes": [],
            "body": {
              "id": 30027,
              "nodeType": "Block",
              "src": "6878:47:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30023,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30015,
                            "src": "6912:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 30021,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "6900:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30022,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6903:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "6900:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 30024,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6900:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30020,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        29938,
                        29953,
                        29968,
                        29983,
                        29998
                      ],
                      "referencedDeclaration": 29938,
                      "src": "6895:4:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30025,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6895:23:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30019,
                  "id": 30026,
                  "nodeType": "Return",
                  "src": "6888:30:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "boldBytes32",
            "nameLocation": "6814:11:84",
            "parameters": {
              "id": 30016,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30015,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6834:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30028,
                  "src": "6826:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30014,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6826:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6825:14:84"
            },
            "returnParameters": {
              "id": 30019,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30018,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30028,
                  "src": "6863:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30017,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6863:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6862:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30041,
            "nodeType": "FunctionDefinition",
            "src": "6931:117:84",
            "nodes": [],
            "body": {
              "id": 30040,
              "nodeType": "Block",
              "src": "7002:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30036,
                        "name": "DIM",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29275,
                        "src": "7031:3:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 30037,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30030,
                        "src": "7036:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30035,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "7019:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7019:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30034,
                  "id": 30039,
                  "nodeType": "Return",
                  "src": "7012:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "6940:3:84",
            "parameters": {
              "id": 30031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30030,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6958:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30041,
                  "src": "6944:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30029,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6944:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6943:20:84"
            },
            "returnParameters": {
              "id": 30034,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30033,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30041,
                  "src": "6987:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30032,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6987:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6986:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30056,
            "nodeType": "FunctionDefinition",
            "src": "7054:111:84",
            "nodes": [],
            "body": {
              "id": 30055,
              "nodeType": "Block",
              "src": "7119:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30051,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30043,
                            "src": "7152:4:84",
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
                          "expression": {
                            "id": 30049,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "7140:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30050,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7143:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "7140:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 30052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7140:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30048,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30041,
                        30056,
                        30071,
                        30086,
                        30101
                      ],
                      "referencedDeclaration": 30041,
                      "src": "7136:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7136:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30047,
                  "id": 30054,
                  "nodeType": "Return",
                  "src": "7129:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "7063:3:84",
            "parameters": {
              "id": 30044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30043,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7075:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30056,
                  "src": "7067:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30042,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7067:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7066:14:84"
            },
            "returnParameters": {
              "id": 30047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30046,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30056,
                  "src": "7104:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30045,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7104:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7103:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30071,
            "nodeType": "FunctionDefinition",
            "src": "7171:110:84",
            "nodes": [],
            "body": {
              "id": 30070,
              "nodeType": "Block",
              "src": "7235:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30066,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30058,
                            "src": "7268:4:84",
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
                          "expression": {
                            "id": 30064,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "7256:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30065,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7259:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "7256:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 30067,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7256:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30063,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30041,
                        30056,
                        30071,
                        30086,
                        30101
                      ],
                      "referencedDeclaration": 30041,
                      "src": "7252:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30068,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7252:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30062,
                  "id": 30069,
                  "nodeType": "Return",
                  "src": "7245:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "7180:3:84",
            "parameters": {
              "id": 30059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30058,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7191:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30071,
                  "src": "7184:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 30057,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7184:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7183:13:84"
            },
            "returnParameters": {
              "id": 30062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30061,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30071,
                  "src": "7220:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30060,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7220:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7219:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30086,
            "nodeType": "FunctionDefinition",
            "src": "7287:111:84",
            "nodes": [],
            "body": {
              "id": 30085,
              "nodeType": "Block",
              "src": "7352:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30081,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30073,
                            "src": "7385:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 30079,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "7373:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30080,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7376:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "7373:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 30082,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7373:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30078,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30041,
                        30056,
                        30071,
                        30086,
                        30101
                      ],
                      "referencedDeclaration": 30041,
                      "src": "7369:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30083,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7369:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30077,
                  "id": 30084,
                  "nodeType": "Return",
                  "src": "7362:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "7296:3:84",
            "parameters": {
              "id": 30074,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30073,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7308:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30086,
                  "src": "7300:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30072,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7300:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7299:14:84"
            },
            "returnParameters": {
              "id": 30077,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30076,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30086,
                  "src": "7337:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30075,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7337:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7336:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30101,
            "nodeType": "FunctionDefinition",
            "src": "7404:108:84",
            "nodes": [],
            "body": {
              "id": 30100,
              "nodeType": "Block",
              "src": "7466:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30096,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30088,
                            "src": "7499:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 30094,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "7487:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30095,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7490:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "7487:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 30097,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7487:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30093,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30041,
                        30056,
                        30071,
                        30086,
                        30101
                      ],
                      "referencedDeclaration": 30041,
                      "src": "7483:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30098,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7483:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30092,
                  "id": 30099,
                  "nodeType": "Return",
                  "src": "7476:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "7413:3:84",
            "parameters": {
              "id": 30089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30088,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7422:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30101,
                  "src": "7417:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30087,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7417:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7416:11:84"
            },
            "returnParameters": {
              "id": 30092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30091,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30101,
                  "src": "7451:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30090,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7451:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7450:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30116,
            "nodeType": "FunctionDefinition",
            "src": "7518:121:84",
            "nodes": [],
            "body": {
              "id": 30115,
              "nodeType": "Block",
              "src": "7593:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30111,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30103,
                            "src": "7626:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 30109,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "7614:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30110,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7617:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "7614:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 30112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7614:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30108,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30041,
                        30056,
                        30071,
                        30086,
                        30101
                      ],
                      "referencedDeclaration": 30041,
                      "src": "7610:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7610:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30107,
                  "id": 30114,
                  "nodeType": "Return",
                  "src": "7603:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dimBytes",
            "nameLocation": "7527:8:84",
            "parameters": {
              "id": 30104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30103,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7549:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30116,
                  "src": "7536:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 30102,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7536:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7535:19:84"
            },
            "returnParameters": {
              "id": 30107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30106,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30116,
                  "src": "7578:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30105,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7578:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7577:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30131,
            "nodeType": "FunctionDefinition",
            "src": "7645:118:84",
            "nodes": [],
            "body": {
              "id": 30130,
              "nodeType": "Block",
              "src": "7717:46:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30126,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30118,
                            "src": "7750:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 30124,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "7738:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30125,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7741:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "7738:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 30127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7738:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30123,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30041,
                        30056,
                        30071,
                        30086,
                        30101
                      ],
                      "referencedDeclaration": 30041,
                      "src": "7734:3:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7734:22:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30122,
                  "id": 30129,
                  "nodeType": "Return",
                  "src": "7727:29:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dimBytes32",
            "nameLocation": "7654:10:84",
            "parameters": {
              "id": 30119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30118,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7673:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30131,
                  "src": "7665:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30117,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7665:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7664:14:84"
            },
            "returnParameters": {
              "id": 30122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30121,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30131,
                  "src": "7702:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30120,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7702:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7701:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30144,
            "nodeType": "FunctionDefinition",
            "src": "7769:123:84",
            "nodes": [],
            "body": {
              "id": 30143,
              "nodeType": "Block",
              "src": "7843:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30139,
                        "name": "ITALIC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29278,
                        "src": "7872:6:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 30140,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30133,
                        "src": "7880:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30138,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "7860:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7860:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30137,
                  "id": 30142,
                  "nodeType": "Return",
                  "src": "7853:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "7778:6:84",
            "parameters": {
              "id": 30134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30133,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7799:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30144,
                  "src": "7785:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30132,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7785:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7784:20:84"
            },
            "returnParameters": {
              "id": 30137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30136,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30144,
                  "src": "7828:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30135,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7828:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7827:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30159,
            "nodeType": "FunctionDefinition",
            "src": "7898:117:84",
            "nodes": [],
            "body": {
              "id": 30158,
              "nodeType": "Block",
              "src": "7966:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30154,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30146,
                            "src": "8002:4:84",
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
                          "expression": {
                            "id": 30152,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "7990:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7993:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "7990:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 30155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7990:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30151,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30144,
                        30159,
                        30174,
                        30189,
                        30204
                      ],
                      "referencedDeclaration": 30144,
                      "src": "7983:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7983:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30150,
                  "id": 30157,
                  "nodeType": "Return",
                  "src": "7976:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "7907:6:84",
            "parameters": {
              "id": 30147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30146,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7922:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "7914:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30145,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7914:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7913:14:84"
            },
            "returnParameters": {
              "id": 30150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30149,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "7951:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30148,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7951:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7950:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30174,
            "nodeType": "FunctionDefinition",
            "src": "8021:116:84",
            "nodes": [],
            "body": {
              "id": 30173,
              "nodeType": "Block",
              "src": "8088:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30169,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30161,
                            "src": "8124:4:84",
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
                          "expression": {
                            "id": 30167,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "8112:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30168,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8115:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "8112:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 30170,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8112:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30166,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30144,
                        30159,
                        30174,
                        30189,
                        30204
                      ],
                      "referencedDeclaration": 30144,
                      "src": "8105:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8105:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30165,
                  "id": 30172,
                  "nodeType": "Return",
                  "src": "8098:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "8030:6:84",
            "parameters": {
              "id": 30162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30161,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8044:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30174,
                  "src": "8037:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 30160,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8037:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8036:13:84"
            },
            "returnParameters": {
              "id": 30165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30164,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30174,
                  "src": "8073:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30163,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8073:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8072:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30189,
            "nodeType": "FunctionDefinition",
            "src": "8143:117:84",
            "nodes": [],
            "body": {
              "id": 30188,
              "nodeType": "Block",
              "src": "8211:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30184,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30176,
                            "src": "8247:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 30182,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "8235:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30183,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8238:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "8235:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 30185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8235:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30181,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30144,
                        30159,
                        30174,
                        30189,
                        30204
                      ],
                      "referencedDeclaration": 30144,
                      "src": "8228:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8228:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30180,
                  "id": 30187,
                  "nodeType": "Return",
                  "src": "8221:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "8152:6:84",
            "parameters": {
              "id": 30177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30176,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8167:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30189,
                  "src": "8159:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30175,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8159:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8158:14:84"
            },
            "returnParameters": {
              "id": 30180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30179,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30189,
                  "src": "8196:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30178,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8196:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8195:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30204,
            "nodeType": "FunctionDefinition",
            "src": "8266:114:84",
            "nodes": [],
            "body": {
              "id": 30203,
              "nodeType": "Block",
              "src": "8331:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30199,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30191,
                            "src": "8367:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 30197,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "8355:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30198,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8358:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "8355:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 30200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8355:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30196,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30144,
                        30159,
                        30174,
                        30189,
                        30204
                      ],
                      "referencedDeclaration": 30144,
                      "src": "8348:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8348:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30195,
                  "id": 30202,
                  "nodeType": "Return",
                  "src": "8341:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "8275:6:84",
            "parameters": {
              "id": 30192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30191,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8287:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30204,
                  "src": "8282:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30190,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8282:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8281:11:84"
            },
            "returnParameters": {
              "id": 30195,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30194,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30204,
                  "src": "8316:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30193,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8316:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8315:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30219,
            "nodeType": "FunctionDefinition",
            "src": "8386:127:84",
            "nodes": [],
            "body": {
              "id": 30218,
              "nodeType": "Block",
              "src": "8464:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30214,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30206,
                            "src": "8500:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 30212,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "8488:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8491:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "8488:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 30215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8488:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30211,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30144,
                        30159,
                        30174,
                        30189,
                        30204
                      ],
                      "referencedDeclaration": 30144,
                      "src": "8481:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8481:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30210,
                  "id": 30217,
                  "nodeType": "Return",
                  "src": "8474:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italicBytes",
            "nameLocation": "8395:11:84",
            "parameters": {
              "id": 30207,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30206,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8420:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30219,
                  "src": "8407:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 30205,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8407:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8406:19:84"
            },
            "returnParameters": {
              "id": 30210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30209,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30219,
                  "src": "8449:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30208,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8449:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8448:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30234,
            "nodeType": "FunctionDefinition",
            "src": "8519:124:84",
            "nodes": [],
            "body": {
              "id": 30233,
              "nodeType": "Block",
              "src": "8594:49:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30229,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30221,
                            "src": "8630:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 30227,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "8618:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30228,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8621:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "8618:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 30230,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8618:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30226,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30144,
                        30159,
                        30174,
                        30189,
                        30204
                      ],
                      "referencedDeclaration": 30144,
                      "src": "8611:6:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8611:25:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30225,
                  "id": 30232,
                  "nodeType": "Return",
                  "src": "8604:32:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italicBytes32",
            "nameLocation": "8528:13:84",
            "parameters": {
              "id": 30222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30221,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8550:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "8542:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30220,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8542:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8541:14:84"
            },
            "returnParameters": {
              "id": 30225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30224,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "8579:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30223,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8579:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8578:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30247,
            "nodeType": "FunctionDefinition",
            "src": "8649:129:84",
            "nodes": [],
            "body": {
              "id": 30246,
              "nodeType": "Block",
              "src": "8726:52:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30242,
                        "name": "UNDERLINE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29281,
                        "src": "8755:9:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 30243,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30236,
                        "src": "8766:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30241,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "8743:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8743:28:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30240,
                  "id": 30245,
                  "nodeType": "Return",
                  "src": "8736:35:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "8658:9:84",
            "parameters": {
              "id": 30237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30236,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8682:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30247,
                  "src": "8668:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30235,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8668:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8667:20:84"
            },
            "returnParameters": {
              "id": 30240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30239,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30247,
                  "src": "8711:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30238,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8711:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8710:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30262,
            "nodeType": "FunctionDefinition",
            "src": "8784:123:84",
            "nodes": [],
            "body": {
              "id": 30261,
              "nodeType": "Block",
              "src": "8855:52:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30257,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30249,
                            "src": "8894:4:84",
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
                          "expression": {
                            "id": 30255,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "8882:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8885:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "8882:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 30258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8882:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30254,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30247,
                        30262,
                        30277,
                        30292,
                        30307
                      ],
                      "referencedDeclaration": 30247,
                      "src": "8872:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30259,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8872:28:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30253,
                  "id": 30260,
                  "nodeType": "Return",
                  "src": "8865:35:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "8793:9:84",
            "parameters": {
              "id": 30250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30249,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8811:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30262,
                  "src": "8803:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30248,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8803:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8802:14:84"
            },
            "returnParameters": {
              "id": 30253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30252,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30262,
                  "src": "8840:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30251,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8840:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8839:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30277,
            "nodeType": "FunctionDefinition",
            "src": "8913:122:84",
            "nodes": [],
            "body": {
              "id": 30276,
              "nodeType": "Block",
              "src": "8983:52:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30272,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30264,
                            "src": "9022:4:84",
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
                          "expression": {
                            "id": 30270,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "9010:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9013:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "9010:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 30273,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9010:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30269,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30247,
                        30262,
                        30277,
                        30292,
                        30307
                      ],
                      "referencedDeclaration": 30247,
                      "src": "9000:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9000:28:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30268,
                  "id": 30275,
                  "nodeType": "Return",
                  "src": "8993:35:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "8922:9:84",
            "parameters": {
              "id": 30265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30264,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8939:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30277,
                  "src": "8932:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 30263,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8932:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8931:13:84"
            },
            "returnParameters": {
              "id": 30268,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30267,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30277,
                  "src": "8968:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30266,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8968:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8967:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30292,
            "nodeType": "FunctionDefinition",
            "src": "9041:123:84",
            "nodes": [],
            "body": {
              "id": 30291,
              "nodeType": "Block",
              "src": "9112:52:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30287,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30279,
                            "src": "9151:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 30285,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "9139:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30286,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9142:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "9139:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 30288,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9139:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30284,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30247,
                        30262,
                        30277,
                        30292,
                        30307
                      ],
                      "referencedDeclaration": 30247,
                      "src": "9129:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30289,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9129:28:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30283,
                  "id": 30290,
                  "nodeType": "Return",
                  "src": "9122:35:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "9050:9:84",
            "parameters": {
              "id": 30280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30279,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9068:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30292,
                  "src": "9060:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30278,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9060:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9059:14:84"
            },
            "returnParameters": {
              "id": 30283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30282,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30292,
                  "src": "9097:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30281,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9097:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9096:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30307,
            "nodeType": "FunctionDefinition",
            "src": "9170:120:84",
            "nodes": [],
            "body": {
              "id": 30306,
              "nodeType": "Block",
              "src": "9238:52:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30302,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30294,
                            "src": "9277:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 30300,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "9265:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9268:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "9265:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 30303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9265:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30299,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30247,
                        30262,
                        30277,
                        30292,
                        30307
                      ],
                      "referencedDeclaration": 30247,
                      "src": "9255:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9255:28:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30298,
                  "id": 30305,
                  "nodeType": "Return",
                  "src": "9248:35:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "9179:9:84",
            "parameters": {
              "id": 30295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30294,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9194:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30307,
                  "src": "9189:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30293,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9189:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9188:11:84"
            },
            "returnParameters": {
              "id": 30298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30297,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30307,
                  "src": "9223:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30296,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9223:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9222:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30322,
            "nodeType": "FunctionDefinition",
            "src": "9296:133:84",
            "nodes": [],
            "body": {
              "id": 30321,
              "nodeType": "Block",
              "src": "9377:52:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30317,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30309,
                            "src": "9416:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 30315,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "9404:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9407:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "9404:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 30318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9404:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30314,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30247,
                        30262,
                        30277,
                        30292,
                        30307
                      ],
                      "referencedDeclaration": 30247,
                      "src": "9394:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9394:28:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30313,
                  "id": 30320,
                  "nodeType": "Return",
                  "src": "9387:35:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underlineBytes",
            "nameLocation": "9305:14:84",
            "parameters": {
              "id": 30310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30309,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9333:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30322,
                  "src": "9320:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 30308,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "9320:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9319:19:84"
            },
            "returnParameters": {
              "id": 30313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30312,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30322,
                  "src": "9362:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30311,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9362:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9361:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30337,
            "nodeType": "FunctionDefinition",
            "src": "9435:130:84",
            "nodes": [],
            "body": {
              "id": 30336,
              "nodeType": "Block",
              "src": "9513:52:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30332,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30324,
                            "src": "9552:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 30330,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "9540:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9543:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "9540:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 30333,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9540:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30329,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30247,
                        30262,
                        30277,
                        30292,
                        30307
                      ],
                      "referencedDeclaration": 30247,
                      "src": "9530:9:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9530:28:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30328,
                  "id": 30335,
                  "nodeType": "Return",
                  "src": "9523:35:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underlineBytes32",
            "nameLocation": "9444:16:84",
            "parameters": {
              "id": 30325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30324,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9469:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30337,
                  "src": "9461:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30323,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9461:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9460:14:84"
            },
            "returnParameters": {
              "id": 30328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30327,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30337,
                  "src": "9498:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30326,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9498:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9497:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30350,
            "nodeType": "FunctionDefinition",
            "src": "9571:125:84",
            "nodes": [],
            "body": {
              "id": 30349,
              "nodeType": "Block",
              "src": "9646:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30345,
                        "name": "INVERSE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29284,
                        "src": "9675:7:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 30346,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30339,
                        "src": "9684:4:84",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30344,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29307,
                      "src": "9663:11:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30347,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9663:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30343,
                  "id": 30348,
                  "nodeType": "Return",
                  "src": "9656:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "9580:7:84",
            "parameters": {
              "id": 30340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30339,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9602:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30350,
                  "src": "9588:18:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30338,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9588:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9587:20:84"
            },
            "returnParameters": {
              "id": 30343,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30342,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30350,
                  "src": "9631:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30341,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9631:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9630:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30365,
            "nodeType": "FunctionDefinition",
            "src": "9702:119:84",
            "nodes": [],
            "body": {
              "id": 30364,
              "nodeType": "Block",
              "src": "9771:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30360,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30352,
                            "src": "9808:4:84",
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
                          "expression": {
                            "id": 30358,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "9796:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30359,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9799:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31937,
                          "src": "9796:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 30361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9796:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30357,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30350,
                        30365,
                        30380,
                        30395,
                        30410
                      ],
                      "referencedDeclaration": 30350,
                      "src": "9788:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9788:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30356,
                  "id": 30363,
                  "nodeType": "Return",
                  "src": "9781:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "9711:7:84",
            "parameters": {
              "id": 30353,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30352,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9727:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30365,
                  "src": "9719:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30351,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9719:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9718:14:84"
            },
            "returnParameters": {
              "id": 30356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30355,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30365,
                  "src": "9756:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30354,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9756:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9755:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30380,
            "nodeType": "FunctionDefinition",
            "src": "9827:118:84",
            "nodes": [],
            "body": {
              "id": 30379,
              "nodeType": "Block",
              "src": "9895:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30375,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30367,
                            "src": "9932:4:84",
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
                          "expression": {
                            "id": 30373,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "9920:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9923:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31944,
                          "src": "9920:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 30376,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9920:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30372,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30350,
                        30365,
                        30380,
                        30395,
                        30410
                      ],
                      "referencedDeclaration": 30350,
                      "src": "9912:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9912:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30371,
                  "id": 30378,
                  "nodeType": "Return",
                  "src": "9905:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "9836:7:84",
            "parameters": {
              "id": 30368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30367,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9851:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30380,
                  "src": "9844:11:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 30366,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9844:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9843:13:84"
            },
            "returnParameters": {
              "id": 30371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30370,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30380,
                  "src": "9880:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30369,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9880:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9879:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30395,
            "nodeType": "FunctionDefinition",
            "src": "9951:119:84",
            "nodes": [],
            "body": {
              "id": 30394,
              "nodeType": "Block",
              "src": "10020:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30390,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30382,
                            "src": "10057:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 30388,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "10045:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30389,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10048:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31909,
                          "src": "10045:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 30391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10045:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30387,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30350,
                        30365,
                        30380,
                        30395,
                        30410
                      ],
                      "referencedDeclaration": 30350,
                      "src": "10037:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10037:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30386,
                  "id": 30393,
                  "nodeType": "Return",
                  "src": "10030:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "9960:7:84",
            "parameters": {
              "id": 30383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30382,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9976:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30395,
                  "src": "9968:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30381,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9968:7:84",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9967:14:84"
            },
            "returnParameters": {
              "id": 30386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30385,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30395,
                  "src": "10005:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30384,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10005:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10004:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30410,
            "nodeType": "FunctionDefinition",
            "src": "10076:116:84",
            "nodes": [],
            "body": {
              "id": 30409,
              "nodeType": "Block",
              "src": "10142:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30405,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30397,
                            "src": "10179:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 30403,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "10167:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10170:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31930,
                          "src": "10167:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 30406,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10167:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30402,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30350,
                        30365,
                        30380,
                        30395,
                        30410
                      ],
                      "referencedDeclaration": 30350,
                      "src": "10159:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30407,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10159:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30401,
                  "id": 30408,
                  "nodeType": "Return",
                  "src": "10152:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "10085:7:84",
            "parameters": {
              "id": 30398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30397,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10098:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30410,
                  "src": "10093:9:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30396,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10093:4:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10092:11:84"
            },
            "returnParameters": {
              "id": 30401,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30400,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30410,
                  "src": "10127:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30399,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10127:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10126:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30425,
            "nodeType": "FunctionDefinition",
            "src": "10198:129:84",
            "nodes": [],
            "body": {
              "id": 30424,
              "nodeType": "Block",
              "src": "10277:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30420,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30412,
                            "src": "10314:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 30418,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "10302:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30419,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10305:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31916,
                          "src": "10302:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 30421,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10302:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30417,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30350,
                        30365,
                        30380,
                        30395,
                        30410
                      ],
                      "referencedDeclaration": 30350,
                      "src": "10294:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10294:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30416,
                  "id": 30423,
                  "nodeType": "Return",
                  "src": "10287:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverseBytes",
            "nameLocation": "10207:12:84",
            "parameters": {
              "id": 30413,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30412,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10233:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30425,
                  "src": "10220:17:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 30411,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "10220:5:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10219:19:84"
            },
            "returnParameters": {
              "id": 30416,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30415,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30425,
                  "src": "10262:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30414,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10262:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10261:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30440,
            "nodeType": "FunctionDefinition",
            "src": "10333:126:84",
            "nodes": [],
            "body": {
              "id": 30439,
              "nodeType": "Block",
              "src": "10409:50:84",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 30435,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30427,
                            "src": "10446:4:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 30433,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29251,
                            "src": "10434:2:84",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$32405",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 30434,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10437:8:84",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 31923,
                          "src": "10434:11:84",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 30436,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10434:17:84",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 30432,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        30350,
                        30365,
                        30380,
                        30395,
                        30410
                      ],
                      "referencedDeclaration": 30350,
                      "src": "10426:7:84",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 30437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10426:26:84",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 30431,
                  "id": 30438,
                  "nodeType": "Return",
                  "src": "10419:33:84"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverseBytes32",
            "nameLocation": "10342:14:84",
            "parameters": {
              "id": 30428,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30427,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10365:4:84",
                  "nodeType": "VariableDeclaration",
                  "scope": 30440,
                  "src": "10357:12:84",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30426,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10357:7:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10356:14:84"
            },
            "returnParameters": {
              "id": 30431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30430,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30440,
                  "src": "10394:13:84",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30429,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10394:6:84",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10393:15:84"
            },
            "scope": 30441,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "StdStyle",
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          30441
        ],
        "name": "StdStyle",
        "nameLocation": "108:8:84",
        "scope": 30442,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 84
} as const;
