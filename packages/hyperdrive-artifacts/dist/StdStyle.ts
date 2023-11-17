export const StdStyle = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203527ed4746236c1b78c58cddc9f1521237ba3dbdd99c975ec8b99c914b939b5864736f6c63430008130033",
    "sourceMap": "100:10361:73:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;100:10361:73;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203527ed4746236c1b78c58cddc9f1521237ba3dbdd99c975ec8b99c914b939b5864736f6c63430008130033",
    "sourceMap": "100:10361:73:-:0;;;;;;;;",
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
    "id": 27092,
    "exportedSymbols": {
      "StdStyle": [
        27091
      ],
      "VmSafe": [
        29055
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:10430:73",
    "nodes": [
      {
        "id": 25882,
        "nodeType": "PragmaDirective",
        "src": "32:32:73",
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
        "id": 25884,
        "nodeType": "ImportDirective",
        "src": "66:32:73",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 27092,
        "sourceUnit": 29528,
        "symbolAliases": [
          {
            "foreign": {
              "id": 25883,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 29055,
              "src": "74:6:73",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 27091,
        "nodeType": "ContractDefinition",
        "src": "100:10361:73",
        "nodes": [
          {
            "id": 25901,
            "nodeType": "VariableDeclaration",
            "src": "123:92:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "147:2:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$29055",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 25886,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 25885,
                "name": "VmSafe",
                "nameLocations": [
                  "123:6:73"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 29055,
                "src": "123:6:73"
              },
              "referencedDeclaration": 29055,
              "src": "123:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$29055",
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
                                  "id": 25895,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "193:17:73",
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
                                "id": 25894,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "183:9:73",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 25896,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "183:28:73",
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
                            "id": 25893,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "175:7:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 25892,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "175:7:73",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 25897,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "175:37:73",
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
                        "id": 25891,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "167:7:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 25890,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "167:7:73",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 25898,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "167:46:73",
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
                    "id": 25889,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "159:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 25888,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "159:7:73",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 25899,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "159:55:73",
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
                "id": 25887,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29055,
                "src": "152:6:73",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$29055_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 25900,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "152:63:73",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$29055",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 25904,
            "nodeType": "VariableDeclaration",
            "src": "222:34:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RED",
            "nameLocation": "238:3:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25902,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "222:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39316d",
              "id": 25903,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "244:12:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_e865f62b1188865fdbe08fdbe8546369f5c78a8f677a27514aadc154b4263c18",
                "typeString": "literal_string hex\"1b5b39316d\""
              },
              "value": "\u001b[91m"
            },
            "visibility": "internal"
          },
          {
            "id": 25907,
            "nodeType": "VariableDeclaration",
            "src": "262:36:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "GREEN",
            "nameLocation": "278:5:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25905,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "262:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39326d",
              "id": 25906,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "286:12:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_250c6c79af2fd59b948ba31b977e669524bbf27faba009961b135f1635e1e32b",
                "typeString": "literal_string hex\"1b5b39326d\""
              },
              "value": "\u001b[92m"
            },
            "visibility": "internal"
          },
          {
            "id": 25910,
            "nodeType": "VariableDeclaration",
            "src": "304:37:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "YELLOW",
            "nameLocation": "320:6:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25908,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "304:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39336d",
              "id": 25909,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "329:12:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_801b445b8c4f71d86cf740b8fd9f85e172d35421144725dd58fed362de2e6cf5",
                "typeString": "literal_string hex\"1b5b39336d\""
              },
              "value": "\u001b[93m"
            },
            "visibility": "internal"
          },
          {
            "id": 25913,
            "nodeType": "VariableDeclaration",
            "src": "347:35:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BLUE",
            "nameLocation": "363:4:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25911,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "347:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39346d",
              "id": 25912,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "370:12:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_66ecf2e89553c52e360a74737e5e4e3d15e4d08217c17497ca50efb90c95d593",
                "typeString": "literal_string hex\"1b5b39346d\""
              },
              "value": "\u001b[94m"
            },
            "visibility": "internal"
          },
          {
            "id": 25916,
            "nodeType": "VariableDeclaration",
            "src": "388:38:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAGENTA",
            "nameLocation": "404:7:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25914,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "388:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39356d",
              "id": 25915,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "414:12:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_b81cf1fd9bcd2b49f14457c6168490b5ff507c85cc3778934da8235d270d6b5b",
                "typeString": "literal_string hex\"1b5b39356d\""
              },
              "value": "\u001b[95m"
            },
            "visibility": "internal"
          },
          {
            "id": 25919,
            "nodeType": "VariableDeclaration",
            "src": "432:35:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CYAN",
            "nameLocation": "448:4:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25917,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "432:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b39366d",
              "id": 25918,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "455:12:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_f73c74e3aa04446480bd18c1b857a46321f6d66d2bfb703d52333566c779447b",
                "typeString": "literal_string hex\"1b5b39366d\""
              },
              "value": "\u001b[96m"
            },
            "visibility": "internal"
          },
          {
            "id": 25922,
            "nodeType": "VariableDeclaration",
            "src": "473:34:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "BOLD",
            "nameLocation": "489:4:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25920,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "473:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b316d",
              "id": 25921,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "496:11:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_b25b1471c5d449346ad6b37b501b2d5911d6e2bad13ad71d09cdfa3d3b140a17",
                "typeString": "literal_string hex\"1b5b316d\""
              },
              "value": "\u001b[1m"
            },
            "visibility": "internal"
          },
          {
            "id": 25925,
            "nodeType": "VariableDeclaration",
            "src": "513:33:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "DIM",
            "nameLocation": "529:3:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25923,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "513:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b326d",
              "id": 25924,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "535:11:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_2f556fa434add49eadfa043e74ff00496b89a16068544c1118ec19f5d8603d51",
                "typeString": "literal_string hex\"1b5b326d\""
              },
              "value": "\u001b[2m"
            },
            "visibility": "internal"
          },
          {
            "id": 25928,
            "nodeType": "VariableDeclaration",
            "src": "552:36:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ITALIC",
            "nameLocation": "568:6:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25926,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "552:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b336d",
              "id": 25927,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "577:11:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_3889f2814cfbcc60c7a881028023c05aed4a6dae60be0df554f690b1f4e7411f",
                "typeString": "literal_string hex\"1b5b336d\""
              },
              "value": "\u001b[3m"
            },
            "visibility": "internal"
          },
          {
            "id": 25931,
            "nodeType": "VariableDeclaration",
            "src": "594:39:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UNDERLINE",
            "nameLocation": "610:9:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25929,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "594:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b346d",
              "id": 25930,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "622:11:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_48cbbbbdbcd789b35edf67deaad6f96f406603d9181318ca90ef32f90fedb5bb",
                "typeString": "literal_string hex\"1b5b346d\""
              },
              "value": "\u001b[4m"
            },
            "visibility": "internal"
          },
          {
            "id": 25934,
            "nodeType": "VariableDeclaration",
            "src": "639:37:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INVERSE",
            "nameLocation": "655:7:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25932,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "639:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b376d",
              "id": 25933,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "665:11:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_963e08c830a620b3640a99ac46ac6850f28c8f20be064518b3acc7016c3e286e",
                "typeString": "literal_string hex\"1b5b376d\""
              },
              "value": "\u001b[7m"
            },
            "visibility": "internal"
          },
          {
            "id": 25937,
            "nodeType": "VariableDeclaration",
            "src": "682:35:73",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "RESET",
            "nameLocation": "698:5:73",
            "scope": 27091,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 25935,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "682:6:73",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "1b5b306d",
              "id": 25936,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "706:11:73",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_289c700ce2c600d61adfc66f83b41c26150052f3ea6c772e582ea6afd03d1949",
                "typeString": "literal_string hex\"1b5b306d\""
              },
              "value": "\u001b[0m"
            },
            "visibility": "internal"
          },
          {
            "id": 25957,
            "nodeType": "FunctionDefinition",
            "src": "724:167:73",
            "nodes": [],
            "body": {
              "id": 25956,
              "nodeType": "Block",
              "src": "823:68:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25950,
                            "name": "style",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25939,
                            "src": "864:5:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "id": 25951,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25941,
                            "src": "871:4:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "id": 25952,
                            "name": "RESET",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25937,
                            "src": "877:5:73",
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
                            "id": 25948,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "847:3:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 25949,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "851:12:73",
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "src": "847:16:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 25953,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "847:36:73",
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
                      "id": 25947,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "840:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 25946,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "840:6:73",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 25954,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "840:44:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 25945,
                  "id": 25955,
                  "nodeType": "Return",
                  "src": "833:51:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "styleConcat",
            "nameLocation": "733:11:73",
            "parameters": {
              "id": 25942,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25939,
                  "mutability": "mutable",
                  "name": "style",
                  "nameLocation": "759:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 25957,
                  "src": "745:19:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25938,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "745:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25941,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "780:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 25957,
                  "src": "766:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25940,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "766:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "744:41:73"
            },
            "returnParameters": {
              "id": 25945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25944,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25957,
                  "src": "808:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25943,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "807:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 25970,
            "nodeType": "FunctionDefinition",
            "src": "897:117:73",
            "nodes": [],
            "body": {
              "id": 25969,
              "nodeType": "Block",
              "src": "968:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 25965,
                        "name": "RED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25904,
                        "src": "997:3:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 25966,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25959,
                        "src": "1002:4:73",
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
                      "id": 25964,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "985:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 25967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "985:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 25963,
                  "id": 25968,
                  "nodeType": "Return",
                  "src": "978:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "906:3:73",
            "parameters": {
              "id": 25960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25959,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "924:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 25970,
                  "src": "910:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25958,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "910:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "909:20:73"
            },
            "returnParameters": {
              "id": 25963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25962,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25970,
                  "src": "953:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25961,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "953:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "952:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 25985,
            "nodeType": "FunctionDefinition",
            "src": "1020:111:73",
            "nodes": [],
            "body": {
              "id": 25984,
              "nodeType": "Block",
              "src": "1085:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25980,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25972,
                            "src": "1118:4:73",
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
                            "id": 25978,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "1106:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 25979,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1109:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "1106:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 25981,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1106:17:73",
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
                      "id": 25977,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25970,
                        25985,
                        26000,
                        26015,
                        26030
                      ],
                      "referencedDeclaration": 25970,
                      "src": "1102:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 25982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1102:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 25976,
                  "id": 25983,
                  "nodeType": "Return",
                  "src": "1095:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "1029:3:73",
            "parameters": {
              "id": 25973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25972,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1041:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 25985,
                  "src": "1033:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1033:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1032:14:73"
            },
            "returnParameters": {
              "id": 25976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25975,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 25985,
                  "src": "1070:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25974,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1070:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1069:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26000,
            "nodeType": "FunctionDefinition",
            "src": "1137:110:73",
            "nodes": [],
            "body": {
              "id": 25999,
              "nodeType": "Block",
              "src": "1201:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 25995,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25987,
                            "src": "1234:4:73",
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
                            "id": 25993,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "1222:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 25994,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1225:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "1222:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 25996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1222:17:73",
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
                      "id": 25992,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25970,
                        25985,
                        26000,
                        26015,
                        26030
                      ],
                      "referencedDeclaration": 25970,
                      "src": "1218:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 25997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1218:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 25991,
                  "id": 25998,
                  "nodeType": "Return",
                  "src": "1211:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "1146:3:73",
            "parameters": {
              "id": 25988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25987,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1157:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26000,
                  "src": "1150:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 25986,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1150:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1149:13:73"
            },
            "returnParameters": {
              "id": 25991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25990,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26000,
                  "src": "1186:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25989,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1186:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1185:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26015,
            "nodeType": "FunctionDefinition",
            "src": "1253:111:73",
            "nodes": [],
            "body": {
              "id": 26014,
              "nodeType": "Block",
              "src": "1318:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26010,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26002,
                            "src": "1351:4:73",
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
                            "id": 26008,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "1339:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1342:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "1339:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26011,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1339:17:73",
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
                      "id": 26007,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25970,
                        25985,
                        26000,
                        26015,
                        26030
                      ],
                      "referencedDeclaration": 25970,
                      "src": "1335:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1335:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26006,
                  "id": 26013,
                  "nodeType": "Return",
                  "src": "1328:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "1262:3:73",
            "parameters": {
              "id": 26003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26002,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1274:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26015,
                  "src": "1266:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26001,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1266:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1265:14:73"
            },
            "returnParameters": {
              "id": 26006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26005,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26015,
                  "src": "1303:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26004,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1303:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1302:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26030,
            "nodeType": "FunctionDefinition",
            "src": "1370:108:73",
            "nodes": [],
            "body": {
              "id": 26029,
              "nodeType": "Block",
              "src": "1432:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26025,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26017,
                            "src": "1465:4:73",
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
                            "id": 26023,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "1453:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26024,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1456:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "1453:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26026,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1453:17:73",
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
                      "id": 26022,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25970,
                        25985,
                        26000,
                        26015,
                        26030
                      ],
                      "referencedDeclaration": 25970,
                      "src": "1449:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1449:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26021,
                  "id": 26028,
                  "nodeType": "Return",
                  "src": "1442:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "red",
            "nameLocation": "1379:3:73",
            "parameters": {
              "id": 26018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26017,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1388:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26030,
                  "src": "1383:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26016,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1383:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1382:11:73"
            },
            "returnParameters": {
              "id": 26021,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26020,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26030,
                  "src": "1417:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26019,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1417:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1416:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26045,
            "nodeType": "FunctionDefinition",
            "src": "1484:121:73",
            "nodes": [],
            "body": {
              "id": 26044,
              "nodeType": "Block",
              "src": "1559:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26040,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26032,
                            "src": "1592:4:73",
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
                            "id": 26038,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "1580:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26039,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1583:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "1580:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26041,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1580:17:73",
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
                      "id": 26037,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25970,
                        25985,
                        26000,
                        26015,
                        26030
                      ],
                      "referencedDeclaration": 25970,
                      "src": "1576:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26042,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1576:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26036,
                  "id": 26043,
                  "nodeType": "Return",
                  "src": "1569:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redBytes",
            "nameLocation": "1493:8:73",
            "parameters": {
              "id": 26033,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26032,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1515:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26045,
                  "src": "1502:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26031,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1502:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1501:19:73"
            },
            "returnParameters": {
              "id": 26036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26035,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26045,
                  "src": "1544:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26034,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1544:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1543:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26060,
            "nodeType": "FunctionDefinition",
            "src": "1611:118:73",
            "nodes": [],
            "body": {
              "id": 26059,
              "nodeType": "Block",
              "src": "1683:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26055,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26047,
                            "src": "1716:4:73",
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
                            "id": 26053,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "1704:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1707:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "1704:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1704:17:73",
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
                      "id": 26052,
                      "name": "red",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        25970,
                        25985,
                        26000,
                        26015,
                        26030
                      ],
                      "referencedDeclaration": 25970,
                      "src": "1700:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26057,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1700:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26051,
                  "id": 26058,
                  "nodeType": "Return",
                  "src": "1693:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redBytes32",
            "nameLocation": "1620:10:73",
            "parameters": {
              "id": 26048,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26047,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1639:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26060,
                  "src": "1631:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26046,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1630:14:73"
            },
            "returnParameters": {
              "id": 26051,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26050,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26060,
                  "src": "1668:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26049,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1668:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1667:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26073,
            "nodeType": "FunctionDefinition",
            "src": "1735:121:73",
            "nodes": [],
            "body": {
              "id": 26072,
              "nodeType": "Block",
              "src": "1808:48:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26068,
                        "name": "GREEN",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25907,
                        "src": "1837:5:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26069,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26062,
                        "src": "1844:4:73",
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
                      "id": 26067,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "1825:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1825:24:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26066,
                  "id": 26071,
                  "nodeType": "Return",
                  "src": "1818:31:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "1744:5:73",
            "parameters": {
              "id": 26063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26062,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1764:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26073,
                  "src": "1750:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26061,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1750:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1749:20:73"
            },
            "returnParameters": {
              "id": 26066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26065,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26073,
                  "src": "1793:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26064,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1793:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1792:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26088,
            "nodeType": "FunctionDefinition",
            "src": "1862:115:73",
            "nodes": [],
            "body": {
              "id": 26087,
              "nodeType": "Block",
              "src": "1929:48:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26083,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26075,
                            "src": "1964:4:73",
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
                            "id": 26081,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "1952:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26082,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1955:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "1952:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 26084,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1952:17:73",
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
                      "id": 26080,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26073,
                        26088,
                        26103,
                        26118,
                        26133
                      ],
                      "referencedDeclaration": 26073,
                      "src": "1946:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26085,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1946:24:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26079,
                  "id": 26086,
                  "nodeType": "Return",
                  "src": "1939:31:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "1871:5:73",
            "parameters": {
              "id": 26076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26075,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "1885:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26088,
                  "src": "1877:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26074,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1877:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1876:14:73"
            },
            "returnParameters": {
              "id": 26079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26078,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26088,
                  "src": "1914:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26077,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1914:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1913:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26103,
            "nodeType": "FunctionDefinition",
            "src": "1983:114:73",
            "nodes": [],
            "body": {
              "id": 26102,
              "nodeType": "Block",
              "src": "2049:48:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26098,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26090,
                            "src": "2084:4:73",
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
                            "id": 26096,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "2072:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26097,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2075:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "2072:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 26099,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2072:17:73",
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
                      "id": 26095,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26073,
                        26088,
                        26103,
                        26118,
                        26133
                      ],
                      "referencedDeclaration": 26073,
                      "src": "2066:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2066:24:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26094,
                  "id": 26101,
                  "nodeType": "Return",
                  "src": "2059:31:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "1992:5:73",
            "parameters": {
              "id": 26091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26090,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2005:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26103,
                  "src": "1998:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26089,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1998:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1997:13:73"
            },
            "returnParameters": {
              "id": 26094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26093,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26103,
                  "src": "2034:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26092,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2034:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2033:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26118,
            "nodeType": "FunctionDefinition",
            "src": "2103:115:73",
            "nodes": [],
            "body": {
              "id": 26117,
              "nodeType": "Block",
              "src": "2170:48:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26113,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26105,
                            "src": "2205:4:73",
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
                            "id": 26111,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "2193:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26112,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2196:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "2193:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2193:17:73",
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
                      "id": 26110,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26073,
                        26088,
                        26103,
                        26118,
                        26133
                      ],
                      "referencedDeclaration": 26073,
                      "src": "2187:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2187:24:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26109,
                  "id": 26116,
                  "nodeType": "Return",
                  "src": "2180:31:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "2112:5:73",
            "parameters": {
              "id": 26106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26105,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2126:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26118,
                  "src": "2118:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26104,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2118:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2117:14:73"
            },
            "returnParameters": {
              "id": 26109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26108,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26118,
                  "src": "2155:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26107,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2155:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2154:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26133,
            "nodeType": "FunctionDefinition",
            "src": "2224:112:73",
            "nodes": [],
            "body": {
              "id": 26132,
              "nodeType": "Block",
              "src": "2288:48:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26128,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26120,
                            "src": "2323:4:73",
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
                            "id": 26126,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "2311:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2314:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "2311:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2311:17:73",
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
                      "id": 26125,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26073,
                        26088,
                        26103,
                        26118,
                        26133
                      ],
                      "referencedDeclaration": 26073,
                      "src": "2305:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2305:24:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26124,
                  "id": 26131,
                  "nodeType": "Return",
                  "src": "2298:31:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "green",
            "nameLocation": "2233:5:73",
            "parameters": {
              "id": 26121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26120,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2244:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26133,
                  "src": "2239:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26119,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2239:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2238:11:73"
            },
            "returnParameters": {
              "id": 26124,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26123,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26133,
                  "src": "2273:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26122,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2273:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2272:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26148,
            "nodeType": "FunctionDefinition",
            "src": "2342:125:73",
            "nodes": [],
            "body": {
              "id": 26147,
              "nodeType": "Block",
              "src": "2419:48:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26143,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26135,
                            "src": "2454:4:73",
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
                            "id": 26141,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "2442:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2445:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "2442:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26144,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2442:17:73",
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
                      "id": 26140,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26073,
                        26088,
                        26103,
                        26118,
                        26133
                      ],
                      "referencedDeclaration": 26073,
                      "src": "2436:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2436:24:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26139,
                  "id": 26146,
                  "nodeType": "Return",
                  "src": "2429:31:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "greenBytes",
            "nameLocation": "2351:10:73",
            "parameters": {
              "id": 26136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26135,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2375:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26148,
                  "src": "2362:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26134,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2361:19:73"
            },
            "returnParameters": {
              "id": 26139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26138,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26148,
                  "src": "2404:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26137,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2404:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2403:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26163,
            "nodeType": "FunctionDefinition",
            "src": "2473:122:73",
            "nodes": [],
            "body": {
              "id": 26162,
              "nodeType": "Block",
              "src": "2547:48:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26158,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26150,
                            "src": "2582:4:73",
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
                            "id": 26156,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "2570:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2573:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "2570:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26159,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2570:17:73",
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
                      "id": 26155,
                      "name": "green",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26073,
                        26088,
                        26103,
                        26118,
                        26133
                      ],
                      "referencedDeclaration": 26073,
                      "src": "2564:5:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2564:24:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26154,
                  "id": 26161,
                  "nodeType": "Return",
                  "src": "2557:31:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "greenBytes32",
            "nameLocation": "2482:12:73",
            "parameters": {
              "id": 26151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26150,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2503:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26163,
                  "src": "2495:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26149,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2495:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2494:14:73"
            },
            "returnParameters": {
              "id": 26154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26153,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26163,
                  "src": "2532:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26152,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2532:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2531:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26176,
            "nodeType": "FunctionDefinition",
            "src": "2601:123:73",
            "nodes": [],
            "body": {
              "id": 26175,
              "nodeType": "Block",
              "src": "2675:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26171,
                        "name": "YELLOW",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25910,
                        "src": "2704:6:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26172,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26165,
                        "src": "2712:4:73",
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
                      "id": 26170,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "2692:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2692:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26169,
                  "id": 26174,
                  "nodeType": "Return",
                  "src": "2685:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "2610:6:73",
            "parameters": {
              "id": 26166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26165,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2631:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26176,
                  "src": "2617:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26164,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2617:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2616:20:73"
            },
            "returnParameters": {
              "id": 26169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26168,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26176,
                  "src": "2660:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26167,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2660:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2659:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26191,
            "nodeType": "FunctionDefinition",
            "src": "2730:117:73",
            "nodes": [],
            "body": {
              "id": 26190,
              "nodeType": "Block",
              "src": "2798:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26186,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26178,
                            "src": "2834:4:73",
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
                            "id": 26184,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "2822:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26185,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2825:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "2822:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 26187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2822:17:73",
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
                      "id": 26183,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26176,
                        26191,
                        26206,
                        26221,
                        26236
                      ],
                      "referencedDeclaration": 26176,
                      "src": "2815:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2815:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26182,
                  "id": 26189,
                  "nodeType": "Return",
                  "src": "2808:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "2739:6:73",
            "parameters": {
              "id": 26179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26178,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2754:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26191,
                  "src": "2746:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2746:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2745:14:73"
            },
            "returnParameters": {
              "id": 26182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26181,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26191,
                  "src": "2783:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26180,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2783:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2782:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26206,
            "nodeType": "FunctionDefinition",
            "src": "2853:116:73",
            "nodes": [],
            "body": {
              "id": 26205,
              "nodeType": "Block",
              "src": "2920:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26201,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26193,
                            "src": "2956:4:73",
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
                            "id": 26199,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "2944:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2947:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "2944:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 26202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2944:17:73",
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
                      "id": 26198,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26176,
                        26191,
                        26206,
                        26221,
                        26236
                      ],
                      "referencedDeclaration": 26176,
                      "src": "2937:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26203,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2937:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26197,
                  "id": 26204,
                  "nodeType": "Return",
                  "src": "2930:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "2862:6:73",
            "parameters": {
              "id": 26194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26193,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2876:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26206,
                  "src": "2869:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26192,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2869:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2868:13:73"
            },
            "returnParameters": {
              "id": 26197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26196,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26206,
                  "src": "2905:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26195,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2905:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2904:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26221,
            "nodeType": "FunctionDefinition",
            "src": "2975:117:73",
            "nodes": [],
            "body": {
              "id": 26220,
              "nodeType": "Block",
              "src": "3043:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26216,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26208,
                            "src": "3079:4:73",
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
                            "id": 26214,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "3067:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26215,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3070:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "3067:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26217,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3067:17:73",
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
                      "id": 26213,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26176,
                        26191,
                        26206,
                        26221,
                        26236
                      ],
                      "referencedDeclaration": 26176,
                      "src": "3060:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3060:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26212,
                  "id": 26219,
                  "nodeType": "Return",
                  "src": "3053:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "2984:6:73",
            "parameters": {
              "id": 26209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26208,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "2999:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26221,
                  "src": "2991:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26207,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2991:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2990:14:73"
            },
            "returnParameters": {
              "id": 26212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26211,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26221,
                  "src": "3028:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26210,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3028:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3027:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26236,
            "nodeType": "FunctionDefinition",
            "src": "3098:114:73",
            "nodes": [],
            "body": {
              "id": 26235,
              "nodeType": "Block",
              "src": "3163:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26231,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26223,
                            "src": "3199:4:73",
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
                            "id": 26229,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "3187:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3190:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "3187:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26232,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3187:17:73",
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
                      "id": 26228,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26176,
                        26191,
                        26206,
                        26221,
                        26236
                      ],
                      "referencedDeclaration": 26176,
                      "src": "3180:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26233,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3180:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26227,
                  "id": 26234,
                  "nodeType": "Return",
                  "src": "3173:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellow",
            "nameLocation": "3107:6:73",
            "parameters": {
              "id": 26224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26223,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3119:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26236,
                  "src": "3114:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26222,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3114:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3113:11:73"
            },
            "returnParameters": {
              "id": 26227,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26226,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26236,
                  "src": "3148:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26225,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3148:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3147:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26251,
            "nodeType": "FunctionDefinition",
            "src": "3218:127:73",
            "nodes": [],
            "body": {
              "id": 26250,
              "nodeType": "Block",
              "src": "3296:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26246,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26238,
                            "src": "3332:4:73",
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
                            "id": 26244,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "3320:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26245,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3323:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "3320:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3320:17:73",
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
                      "id": 26243,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26176,
                        26191,
                        26206,
                        26221,
                        26236
                      ],
                      "referencedDeclaration": 26176,
                      "src": "3313:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26248,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3313:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26242,
                  "id": 26249,
                  "nodeType": "Return",
                  "src": "3306:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellowBytes",
            "nameLocation": "3227:11:73",
            "parameters": {
              "id": 26239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26238,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3252:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26251,
                  "src": "3239:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26237,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3239:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3238:19:73"
            },
            "returnParameters": {
              "id": 26242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26241,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26251,
                  "src": "3281:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26240,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3281:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3280:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26266,
            "nodeType": "FunctionDefinition",
            "src": "3351:124:73",
            "nodes": [],
            "body": {
              "id": 26265,
              "nodeType": "Block",
              "src": "3426:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26261,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26253,
                            "src": "3462:4:73",
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
                            "id": 26259,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "3450:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26260,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3453:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "3450:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26262,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3450:17:73",
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
                      "id": 26258,
                      "name": "yellow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26176,
                        26191,
                        26206,
                        26221,
                        26236
                      ],
                      "referencedDeclaration": 26176,
                      "src": "3443:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3443:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26257,
                  "id": 26264,
                  "nodeType": "Return",
                  "src": "3436:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "yellowBytes32",
            "nameLocation": "3360:13:73",
            "parameters": {
              "id": 26254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26253,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3382:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26266,
                  "src": "3374:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26252,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3374:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3373:14:73"
            },
            "returnParameters": {
              "id": 26257,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26256,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26266,
                  "src": "3411:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26255,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3411:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3410:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26279,
            "nodeType": "FunctionDefinition",
            "src": "3481:119:73",
            "nodes": [],
            "body": {
              "id": 26278,
              "nodeType": "Block",
              "src": "3553:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26274,
                        "name": "BLUE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25913,
                        "src": "3582:4:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26275,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26268,
                        "src": "3588:4:73",
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
                      "id": 26273,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "3570:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3570:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26272,
                  "id": 26277,
                  "nodeType": "Return",
                  "src": "3563:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3490:4:73",
            "parameters": {
              "id": 26269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26268,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3509:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26279,
                  "src": "3495:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26267,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3495:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3494:20:73"
            },
            "returnParameters": {
              "id": 26272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26271,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26279,
                  "src": "3538:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26270,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3538:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3537:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26294,
            "nodeType": "FunctionDefinition",
            "src": "3606:113:73",
            "nodes": [],
            "body": {
              "id": 26293,
              "nodeType": "Block",
              "src": "3672:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26289,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26281,
                            "src": "3706:4:73",
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
                            "id": 26287,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "3694:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26288,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3697:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "3694:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 26290,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3694:17:73",
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
                      "id": 26286,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26279,
                        26294,
                        26309,
                        26324,
                        26339
                      ],
                      "referencedDeclaration": 26279,
                      "src": "3689:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3689:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26285,
                  "id": 26292,
                  "nodeType": "Return",
                  "src": "3682:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3615:4:73",
            "parameters": {
              "id": 26282,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26281,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3628:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26294,
                  "src": "3620:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26280,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3620:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3619:14:73"
            },
            "returnParameters": {
              "id": 26285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26284,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26294,
                  "src": "3657:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26283,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3657:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3656:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26309,
            "nodeType": "FunctionDefinition",
            "src": "3725:112:73",
            "nodes": [],
            "body": {
              "id": 26308,
              "nodeType": "Block",
              "src": "3790:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26304,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26296,
                            "src": "3824:4:73",
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
                            "id": 26302,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "3812:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3815:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "3812:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 26305,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3812:17:73",
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
                      "id": 26301,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26279,
                        26294,
                        26309,
                        26324,
                        26339
                      ],
                      "referencedDeclaration": 26279,
                      "src": "3807:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3807:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26300,
                  "id": 26307,
                  "nodeType": "Return",
                  "src": "3800:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3734:4:73",
            "parameters": {
              "id": 26297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26296,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3746:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26309,
                  "src": "3739:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26295,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3739:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3738:13:73"
            },
            "returnParameters": {
              "id": 26300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26299,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26309,
                  "src": "3775:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26298,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3775:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3774:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26324,
            "nodeType": "FunctionDefinition",
            "src": "3843:113:73",
            "nodes": [],
            "body": {
              "id": 26323,
              "nodeType": "Block",
              "src": "3909:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26319,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26311,
                            "src": "3943:4:73",
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
                            "id": 26317,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "3931:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26318,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3934:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "3931:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26320,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3931:17:73",
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
                      "id": 26316,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26279,
                        26294,
                        26309,
                        26324,
                        26339
                      ],
                      "referencedDeclaration": 26279,
                      "src": "3926:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26321,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3926:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26315,
                  "id": 26322,
                  "nodeType": "Return",
                  "src": "3919:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3852:4:73",
            "parameters": {
              "id": 26312,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26311,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3865:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26324,
                  "src": "3857:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26310,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3857:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3856:14:73"
            },
            "returnParameters": {
              "id": 26315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26314,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26324,
                  "src": "3894:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26313,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3894:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3893:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26339,
            "nodeType": "FunctionDefinition",
            "src": "3962:110:73",
            "nodes": [],
            "body": {
              "id": 26338,
              "nodeType": "Block",
              "src": "4025:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26334,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26326,
                            "src": "4059:4:73",
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
                            "id": 26332,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "4047:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4050:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "4047:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26335,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4047:17:73",
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
                      "id": 26331,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26279,
                        26294,
                        26309,
                        26324,
                        26339
                      ],
                      "referencedDeclaration": 26279,
                      "src": "4042:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26336,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4042:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26330,
                  "id": 26337,
                  "nodeType": "Return",
                  "src": "4035:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blue",
            "nameLocation": "3971:4:73",
            "parameters": {
              "id": 26327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26326,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "3981:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26339,
                  "src": "3976:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26325,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3976:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3975:11:73"
            },
            "returnParameters": {
              "id": 26330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26329,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26339,
                  "src": "4010:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26328,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4010:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4009:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26354,
            "nodeType": "FunctionDefinition",
            "src": "4078:123:73",
            "nodes": [],
            "body": {
              "id": 26353,
              "nodeType": "Block",
              "src": "4154:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26349,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26341,
                            "src": "4188:4:73",
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
                            "id": 26347,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "4176:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26348,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4179:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "4176:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4176:17:73",
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
                      "id": 26346,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26279,
                        26294,
                        26309,
                        26324,
                        26339
                      ],
                      "referencedDeclaration": 26279,
                      "src": "4171:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4171:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26345,
                  "id": 26352,
                  "nodeType": "Return",
                  "src": "4164:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blueBytes",
            "nameLocation": "4087:9:73",
            "parameters": {
              "id": 26342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26341,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4110:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26354,
                  "src": "4097:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26340,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4097:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4096:19:73"
            },
            "returnParameters": {
              "id": 26345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26344,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26354,
                  "src": "4139:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26343,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4139:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4138:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26369,
            "nodeType": "FunctionDefinition",
            "src": "4207:120:73",
            "nodes": [],
            "body": {
              "id": 26368,
              "nodeType": "Block",
              "src": "4280:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26364,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26356,
                            "src": "4314:4:73",
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
                            "id": 26362,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "4302:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26363,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4305:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "4302:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26365,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4302:17:73",
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
                      "id": 26361,
                      "name": "blue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26279,
                        26294,
                        26309,
                        26324,
                        26339
                      ],
                      "referencedDeclaration": 26279,
                      "src": "4297:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26366,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4297:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26360,
                  "id": 26367,
                  "nodeType": "Return",
                  "src": "4290:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "blueBytes32",
            "nameLocation": "4216:11:73",
            "parameters": {
              "id": 26357,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26356,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4236:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26369,
                  "src": "4228:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26355,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4228:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4227:14:73"
            },
            "returnParameters": {
              "id": 26360,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26359,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26369,
                  "src": "4265:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26358,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4265:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4264:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26382,
            "nodeType": "FunctionDefinition",
            "src": "4333:125:73",
            "nodes": [],
            "body": {
              "id": 26381,
              "nodeType": "Block",
              "src": "4408:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26377,
                        "name": "MAGENTA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25916,
                        "src": "4437:7:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26378,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26371,
                        "src": "4446:4:73",
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
                      "id": 26376,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "4425:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4425:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26375,
                  "id": 26380,
                  "nodeType": "Return",
                  "src": "4418:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4342:7:73",
            "parameters": {
              "id": 26372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26371,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4364:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26382,
                  "src": "4350:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26370,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4350:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4349:20:73"
            },
            "returnParameters": {
              "id": 26375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26374,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26382,
                  "src": "4393:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26373,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4393:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4392:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26397,
            "nodeType": "FunctionDefinition",
            "src": "4464:119:73",
            "nodes": [],
            "body": {
              "id": 26396,
              "nodeType": "Block",
              "src": "4533:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26392,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26384,
                            "src": "4570:4:73",
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
                            "id": 26390,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "4558:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4561:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "4558:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 26393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4558:17:73",
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
                      "id": 26389,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26382,
                        26397,
                        26412,
                        26427,
                        26442
                      ],
                      "referencedDeclaration": 26382,
                      "src": "4550:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4550:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26388,
                  "id": 26395,
                  "nodeType": "Return",
                  "src": "4543:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4473:7:73",
            "parameters": {
              "id": 26385,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26384,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4489:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26397,
                  "src": "4481:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26383,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4481:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4480:14:73"
            },
            "returnParameters": {
              "id": 26388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26387,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26397,
                  "src": "4518:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26386,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4518:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4517:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26412,
            "nodeType": "FunctionDefinition",
            "src": "4589:118:73",
            "nodes": [],
            "body": {
              "id": 26411,
              "nodeType": "Block",
              "src": "4657:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26407,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26399,
                            "src": "4694:4:73",
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
                            "id": 26405,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "4682:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26406,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4685:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "4682:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 26408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4682:17:73",
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
                      "id": 26404,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26382,
                        26397,
                        26412,
                        26427,
                        26442
                      ],
                      "referencedDeclaration": 26382,
                      "src": "4674:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4674:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26403,
                  "id": 26410,
                  "nodeType": "Return",
                  "src": "4667:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4598:7:73",
            "parameters": {
              "id": 26400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26399,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4613:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26412,
                  "src": "4606:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26398,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4606:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4605:13:73"
            },
            "returnParameters": {
              "id": 26403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26402,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26412,
                  "src": "4642:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26401,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4642:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4641:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26427,
            "nodeType": "FunctionDefinition",
            "src": "4713:119:73",
            "nodes": [],
            "body": {
              "id": 26426,
              "nodeType": "Block",
              "src": "4782:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26422,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26414,
                            "src": "4819:4:73",
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
                            "id": 26420,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "4807:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4810:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "4807:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4807:17:73",
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
                      "id": 26419,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26382,
                        26397,
                        26412,
                        26427,
                        26442
                      ],
                      "referencedDeclaration": 26382,
                      "src": "4799:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4799:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26418,
                  "id": 26425,
                  "nodeType": "Return",
                  "src": "4792:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4722:7:73",
            "parameters": {
              "id": 26415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26414,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4738:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26427,
                  "src": "4730:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26413,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4730:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4729:14:73"
            },
            "returnParameters": {
              "id": 26418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26417,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26427,
                  "src": "4767:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26416,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4767:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4766:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26442,
            "nodeType": "FunctionDefinition",
            "src": "4838:116:73",
            "nodes": [],
            "body": {
              "id": 26441,
              "nodeType": "Block",
              "src": "4904:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26437,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26429,
                            "src": "4941:4:73",
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
                            "id": 26435,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "4929:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26436,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4932:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "4929:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26438,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4929:17:73",
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
                      "id": 26434,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26382,
                        26397,
                        26412,
                        26427,
                        26442
                      ],
                      "referencedDeclaration": 26382,
                      "src": "4921:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4921:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26433,
                  "id": 26440,
                  "nodeType": "Return",
                  "src": "4914:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magenta",
            "nameLocation": "4847:7:73",
            "parameters": {
              "id": 26430,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26429,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4860:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26442,
                  "src": "4855:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26428,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4855:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4854:11:73"
            },
            "returnParameters": {
              "id": 26433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26432,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26442,
                  "src": "4889:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26431,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4889:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4888:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26457,
            "nodeType": "FunctionDefinition",
            "src": "4960:129:73",
            "nodes": [],
            "body": {
              "id": 26456,
              "nodeType": "Block",
              "src": "5039:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26452,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26444,
                            "src": "5076:4:73",
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
                            "id": 26450,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "5064:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26451,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5067:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "5064:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26453,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5064:17:73",
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
                      "id": 26449,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26382,
                        26397,
                        26412,
                        26427,
                        26442
                      ],
                      "referencedDeclaration": 26382,
                      "src": "5056:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5056:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26448,
                  "id": 26455,
                  "nodeType": "Return",
                  "src": "5049:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magentaBytes",
            "nameLocation": "4969:12:73",
            "parameters": {
              "id": 26445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26444,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "4995:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26457,
                  "src": "4982:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26443,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4982:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4981:19:73"
            },
            "returnParameters": {
              "id": 26448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26447,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26457,
                  "src": "5024:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26446,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5024:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5023:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26472,
            "nodeType": "FunctionDefinition",
            "src": "5095:126:73",
            "nodes": [],
            "body": {
              "id": 26471,
              "nodeType": "Block",
              "src": "5171:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26467,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26459,
                            "src": "5208:4:73",
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
                            "id": 26465,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "5196:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26466,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5199:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "5196:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26468,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5196:17:73",
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
                      "id": 26464,
                      "name": "magenta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26382,
                        26397,
                        26412,
                        26427,
                        26442
                      ],
                      "referencedDeclaration": 26382,
                      "src": "5188:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5188:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26463,
                  "id": 26470,
                  "nodeType": "Return",
                  "src": "5181:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "magentaBytes32",
            "nameLocation": "5104:14:73",
            "parameters": {
              "id": 26460,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26459,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5127:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26472,
                  "src": "5119:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26458,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5119:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5118:14:73"
            },
            "returnParameters": {
              "id": 26463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26462,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26472,
                  "src": "5156:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26461,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5156:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5155:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26485,
            "nodeType": "FunctionDefinition",
            "src": "5227:119:73",
            "nodes": [],
            "body": {
              "id": 26484,
              "nodeType": "Block",
              "src": "5299:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26480,
                        "name": "CYAN",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25919,
                        "src": "5328:4:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26481,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26474,
                        "src": "5334:4:73",
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
                      "id": 26479,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "5316:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5316:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26478,
                  "id": 26483,
                  "nodeType": "Return",
                  "src": "5309:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5236:4:73",
            "parameters": {
              "id": 26475,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26474,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5255:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26485,
                  "src": "5241:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26473,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5241:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5240:20:73"
            },
            "returnParameters": {
              "id": 26478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26477,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26485,
                  "src": "5284:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26476,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5284:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5283:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26500,
            "nodeType": "FunctionDefinition",
            "src": "5352:113:73",
            "nodes": [],
            "body": {
              "id": 26499,
              "nodeType": "Block",
              "src": "5418:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26495,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26487,
                            "src": "5452:4:73",
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
                            "id": 26493,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "5440:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26494,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5443:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "5440:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 26496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5440:17:73",
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
                      "id": 26492,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26485,
                        26500,
                        26515,
                        26530,
                        26545
                      ],
                      "referencedDeclaration": 26485,
                      "src": "5435:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5435:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26491,
                  "id": 26498,
                  "nodeType": "Return",
                  "src": "5428:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5361:4:73",
            "parameters": {
              "id": 26488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26487,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5374:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26500,
                  "src": "5366:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26486,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5366:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5365:14:73"
            },
            "returnParameters": {
              "id": 26491,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26490,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26500,
                  "src": "5403:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26489,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5403:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5402:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26515,
            "nodeType": "FunctionDefinition",
            "src": "5471:112:73",
            "nodes": [],
            "body": {
              "id": 26514,
              "nodeType": "Block",
              "src": "5536:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26510,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26502,
                            "src": "5570:4:73",
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
                            "id": 26508,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "5558:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5561:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "5558:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 26511,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5558:17:73",
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
                      "id": 26507,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26485,
                        26500,
                        26515,
                        26530,
                        26545
                      ],
                      "referencedDeclaration": 26485,
                      "src": "5553:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26512,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5553:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26506,
                  "id": 26513,
                  "nodeType": "Return",
                  "src": "5546:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5480:4:73",
            "parameters": {
              "id": 26503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26502,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5492:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26515,
                  "src": "5485:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26501,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5485:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5484:13:73"
            },
            "returnParameters": {
              "id": 26506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26505,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26515,
                  "src": "5521:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26504,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5521:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5520:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26530,
            "nodeType": "FunctionDefinition",
            "src": "5589:113:73",
            "nodes": [],
            "body": {
              "id": 26529,
              "nodeType": "Block",
              "src": "5655:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26525,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26517,
                            "src": "5689:4:73",
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
                            "id": 26523,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "5677:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5680:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "5677:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26526,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5677:17:73",
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
                      "id": 26522,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26485,
                        26500,
                        26515,
                        26530,
                        26545
                      ],
                      "referencedDeclaration": 26485,
                      "src": "5672:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26527,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5672:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26521,
                  "id": 26528,
                  "nodeType": "Return",
                  "src": "5665:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5598:4:73",
            "parameters": {
              "id": 26518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26517,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5611:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26530,
                  "src": "5603:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26516,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5603:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5602:14:73"
            },
            "returnParameters": {
              "id": 26521,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26520,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26530,
                  "src": "5640:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26519,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5640:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5639:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26545,
            "nodeType": "FunctionDefinition",
            "src": "5708:110:73",
            "nodes": [],
            "body": {
              "id": 26544,
              "nodeType": "Block",
              "src": "5771:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26540,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26532,
                            "src": "5805:4:73",
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
                            "id": 26538,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "5793:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26539,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5796:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "5793:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26541,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5793:17:73",
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
                      "id": 26537,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26485,
                        26500,
                        26515,
                        26530,
                        26545
                      ],
                      "referencedDeclaration": 26485,
                      "src": "5788:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26542,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5788:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26536,
                  "id": 26543,
                  "nodeType": "Return",
                  "src": "5781:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyan",
            "nameLocation": "5717:4:73",
            "parameters": {
              "id": 26533,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26532,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5727:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26545,
                  "src": "5722:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26531,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5722:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5721:11:73"
            },
            "returnParameters": {
              "id": 26536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26535,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26545,
                  "src": "5756:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26534,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5756:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5755:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26560,
            "nodeType": "FunctionDefinition",
            "src": "5824:123:73",
            "nodes": [],
            "body": {
              "id": 26559,
              "nodeType": "Block",
              "src": "5900:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26555,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26547,
                            "src": "5934:4:73",
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
                            "id": 26553,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "5922:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5925:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "5922:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5922:17:73",
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
                      "id": 26552,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26485,
                        26500,
                        26515,
                        26530,
                        26545
                      ],
                      "referencedDeclaration": 26485,
                      "src": "5917:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5917:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26551,
                  "id": 26558,
                  "nodeType": "Return",
                  "src": "5910:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyanBytes",
            "nameLocation": "5833:9:73",
            "parameters": {
              "id": 26548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26547,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5856:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26560,
                  "src": "5843:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26546,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5843:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5842:19:73"
            },
            "returnParameters": {
              "id": 26551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26550,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26560,
                  "src": "5885:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26549,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5885:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5884:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26575,
            "nodeType": "FunctionDefinition",
            "src": "5953:120:73",
            "nodes": [],
            "body": {
              "id": 26574,
              "nodeType": "Block",
              "src": "6026:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26570,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26562,
                            "src": "6060:4:73",
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
                            "id": 26568,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "6048:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26569,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6051:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "6048:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26571,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6048:17:73",
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
                      "id": 26567,
                      "name": "cyan",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26485,
                        26500,
                        26515,
                        26530,
                        26545
                      ],
                      "referencedDeclaration": 26485,
                      "src": "6043:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6043:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26566,
                  "id": 26573,
                  "nodeType": "Return",
                  "src": "6036:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "cyanBytes32",
            "nameLocation": "5962:11:73",
            "parameters": {
              "id": 26563,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26562,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "5982:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26575,
                  "src": "5974:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26561,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5974:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5973:14:73"
            },
            "returnParameters": {
              "id": 26566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26565,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26575,
                  "src": "6011:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26564,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6011:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6010:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26588,
            "nodeType": "FunctionDefinition",
            "src": "6079:119:73",
            "nodes": [],
            "body": {
              "id": 26587,
              "nodeType": "Block",
              "src": "6151:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26583,
                        "name": "BOLD",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25922,
                        "src": "6180:4:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26584,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26577,
                        "src": "6186:4:73",
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
                      "id": 26582,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "6168:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26585,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6168:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26581,
                  "id": 26586,
                  "nodeType": "Return",
                  "src": "6161:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6088:4:73",
            "parameters": {
              "id": 26578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26577,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6107:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26588,
                  "src": "6093:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26576,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6093:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6092:20:73"
            },
            "returnParameters": {
              "id": 26581,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26580,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26588,
                  "src": "6136:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26579,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6136:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6135:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26603,
            "nodeType": "FunctionDefinition",
            "src": "6204:113:73",
            "nodes": [],
            "body": {
              "id": 26602,
              "nodeType": "Block",
              "src": "6270:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26598,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26590,
                            "src": "6304:4:73",
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
                            "id": 26596,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "6292:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26597,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6295:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "6292:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 26599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6292:17:73",
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
                      "id": 26595,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26588,
                        26603,
                        26618,
                        26633,
                        26648
                      ],
                      "referencedDeclaration": 26588,
                      "src": "6287:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6287:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26594,
                  "id": 26601,
                  "nodeType": "Return",
                  "src": "6280:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6213:4:73",
            "parameters": {
              "id": 26591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26590,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6226:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26603,
                  "src": "6218:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26589,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6218:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6217:14:73"
            },
            "returnParameters": {
              "id": 26594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26593,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26603,
                  "src": "6255:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26592,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6255:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6254:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26618,
            "nodeType": "FunctionDefinition",
            "src": "6323:112:73",
            "nodes": [],
            "body": {
              "id": 26617,
              "nodeType": "Block",
              "src": "6388:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26613,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26605,
                            "src": "6422:4:73",
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
                            "id": 26611,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "6410:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26612,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6413:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "6410:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 26614,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6410:17:73",
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
                      "id": 26610,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26588,
                        26603,
                        26618,
                        26633,
                        26648
                      ],
                      "referencedDeclaration": 26588,
                      "src": "6405:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26615,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6405:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26609,
                  "id": 26616,
                  "nodeType": "Return",
                  "src": "6398:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6332:4:73",
            "parameters": {
              "id": 26606,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26605,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6344:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26618,
                  "src": "6337:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26604,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6337:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6336:13:73"
            },
            "returnParameters": {
              "id": 26609,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26608,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26618,
                  "src": "6373:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26607,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6373:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6372:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26633,
            "nodeType": "FunctionDefinition",
            "src": "6441:113:73",
            "nodes": [],
            "body": {
              "id": 26632,
              "nodeType": "Block",
              "src": "6507:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26628,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26620,
                            "src": "6541:4:73",
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
                            "id": 26626,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "6529:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26627,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6532:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "6529:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26629,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6529:17:73",
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
                      "id": 26625,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26588,
                        26603,
                        26618,
                        26633,
                        26648
                      ],
                      "referencedDeclaration": 26588,
                      "src": "6524:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26630,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6524:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26624,
                  "id": 26631,
                  "nodeType": "Return",
                  "src": "6517:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6450:4:73",
            "parameters": {
              "id": 26621,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26620,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6463:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26633,
                  "src": "6455:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26619,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6455:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6454:14:73"
            },
            "returnParameters": {
              "id": 26624,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26623,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26633,
                  "src": "6492:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26622,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6492:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6491:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26648,
            "nodeType": "FunctionDefinition",
            "src": "6560:110:73",
            "nodes": [],
            "body": {
              "id": 26647,
              "nodeType": "Block",
              "src": "6623:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26643,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26635,
                            "src": "6657:4:73",
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
                            "id": 26641,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "6645:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26642,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6648:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "6645:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26644,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6645:17:73",
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
                      "id": 26640,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26588,
                        26603,
                        26618,
                        26633,
                        26648
                      ],
                      "referencedDeclaration": 26588,
                      "src": "6640:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26645,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6640:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26639,
                  "id": 26646,
                  "nodeType": "Return",
                  "src": "6633:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bold",
            "nameLocation": "6569:4:73",
            "parameters": {
              "id": 26636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26635,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6579:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26648,
                  "src": "6574:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26634,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6574:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6573:11:73"
            },
            "returnParameters": {
              "id": 26639,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26638,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26648,
                  "src": "6608:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26637,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6608:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6607:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26663,
            "nodeType": "FunctionDefinition",
            "src": "6676:123:73",
            "nodes": [],
            "body": {
              "id": 26662,
              "nodeType": "Block",
              "src": "6752:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26658,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26650,
                            "src": "6786:4:73",
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
                            "id": 26656,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "6774:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6777:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "6774:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6774:17:73",
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
                      "id": 26655,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26588,
                        26603,
                        26618,
                        26633,
                        26648
                      ],
                      "referencedDeclaration": 26588,
                      "src": "6769:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6769:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26654,
                  "id": 26661,
                  "nodeType": "Return",
                  "src": "6762:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "boldBytes",
            "nameLocation": "6685:9:73",
            "parameters": {
              "id": 26651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26650,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6708:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26663,
                  "src": "6695:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26649,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6695:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6694:19:73"
            },
            "returnParameters": {
              "id": 26654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26653,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26663,
                  "src": "6737:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26652,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6737:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6736:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26678,
            "nodeType": "FunctionDefinition",
            "src": "6805:120:73",
            "nodes": [],
            "body": {
              "id": 26677,
              "nodeType": "Block",
              "src": "6878:47:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26673,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26665,
                            "src": "6912:4:73",
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
                            "id": 26671,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "6900:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26672,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6903:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "6900:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26674,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6900:17:73",
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
                      "id": 26670,
                      "name": "bold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26588,
                        26603,
                        26618,
                        26633,
                        26648
                      ],
                      "referencedDeclaration": 26588,
                      "src": "6895:4:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6895:23:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26669,
                  "id": 26676,
                  "nodeType": "Return",
                  "src": "6888:30:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "boldBytes32",
            "nameLocation": "6814:11:73",
            "parameters": {
              "id": 26666,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26665,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6834:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26678,
                  "src": "6826:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26664,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6826:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6825:14:73"
            },
            "returnParameters": {
              "id": 26669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26668,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26678,
                  "src": "6863:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26667,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6863:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6862:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26691,
            "nodeType": "FunctionDefinition",
            "src": "6931:117:73",
            "nodes": [],
            "body": {
              "id": 26690,
              "nodeType": "Block",
              "src": "7002:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26686,
                        "name": "DIM",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25925,
                        "src": "7031:3:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26687,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26680,
                        "src": "7036:4:73",
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
                      "id": 26685,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "7019:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7019:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26684,
                  "id": 26689,
                  "nodeType": "Return",
                  "src": "7012:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "6940:3:73",
            "parameters": {
              "id": 26681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26680,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "6958:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26691,
                  "src": "6944:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26679,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6944:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6943:20:73"
            },
            "returnParameters": {
              "id": 26684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26683,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26691,
                  "src": "6987:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26682,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6987:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6986:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26706,
            "nodeType": "FunctionDefinition",
            "src": "7054:111:73",
            "nodes": [],
            "body": {
              "id": 26705,
              "nodeType": "Block",
              "src": "7119:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26701,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26693,
                            "src": "7152:4:73",
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
                            "id": 26699,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "7140:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26700,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7143:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "7140:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 26702,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7140:17:73",
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
                      "id": 26698,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26691,
                        26706,
                        26721,
                        26736,
                        26751
                      ],
                      "referencedDeclaration": 26691,
                      "src": "7136:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7136:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26697,
                  "id": 26704,
                  "nodeType": "Return",
                  "src": "7129:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "7063:3:73",
            "parameters": {
              "id": 26694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26693,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7075:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26706,
                  "src": "7067:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26692,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7067:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7066:14:73"
            },
            "returnParameters": {
              "id": 26697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26696,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26706,
                  "src": "7104:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26695,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7104:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7103:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26721,
            "nodeType": "FunctionDefinition",
            "src": "7171:110:73",
            "nodes": [],
            "body": {
              "id": 26720,
              "nodeType": "Block",
              "src": "7235:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26716,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26708,
                            "src": "7268:4:73",
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
                            "id": 26714,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "7256:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26715,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7259:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "7256:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 26717,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7256:17:73",
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
                      "id": 26713,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26691,
                        26706,
                        26721,
                        26736,
                        26751
                      ],
                      "referencedDeclaration": 26691,
                      "src": "7252:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26718,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7252:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26712,
                  "id": 26719,
                  "nodeType": "Return",
                  "src": "7245:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "7180:3:73",
            "parameters": {
              "id": 26709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26708,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7191:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26721,
                  "src": "7184:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26707,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7184:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7183:13:73"
            },
            "returnParameters": {
              "id": 26712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26711,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26721,
                  "src": "7220:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26710,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7220:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7219:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26736,
            "nodeType": "FunctionDefinition",
            "src": "7287:111:73",
            "nodes": [],
            "body": {
              "id": 26735,
              "nodeType": "Block",
              "src": "7352:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26731,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26723,
                            "src": "7385:4:73",
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
                            "id": 26729,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "7373:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7376:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "7373:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7373:17:73",
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
                      "id": 26728,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26691,
                        26706,
                        26721,
                        26736,
                        26751
                      ],
                      "referencedDeclaration": 26691,
                      "src": "7369:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7369:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26727,
                  "id": 26734,
                  "nodeType": "Return",
                  "src": "7362:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "7296:3:73",
            "parameters": {
              "id": 26724,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26723,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7308:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26736,
                  "src": "7300:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26722,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7300:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7299:14:73"
            },
            "returnParameters": {
              "id": 26727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26726,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26736,
                  "src": "7337:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26725,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7337:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7336:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26751,
            "nodeType": "FunctionDefinition",
            "src": "7404:108:73",
            "nodes": [],
            "body": {
              "id": 26750,
              "nodeType": "Block",
              "src": "7466:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26746,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26738,
                            "src": "7499:4:73",
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
                            "id": 26744,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "7487:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26745,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7490:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "7487:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7487:17:73",
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
                      "id": 26743,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26691,
                        26706,
                        26721,
                        26736,
                        26751
                      ],
                      "referencedDeclaration": 26691,
                      "src": "7483:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7483:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26742,
                  "id": 26749,
                  "nodeType": "Return",
                  "src": "7476:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dim",
            "nameLocation": "7413:3:73",
            "parameters": {
              "id": 26739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26738,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7422:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26751,
                  "src": "7417:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26737,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7417:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7416:11:73"
            },
            "returnParameters": {
              "id": 26742,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26741,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26751,
                  "src": "7451:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26740,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7451:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7450:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26766,
            "nodeType": "FunctionDefinition",
            "src": "7518:121:73",
            "nodes": [],
            "body": {
              "id": 26765,
              "nodeType": "Block",
              "src": "7593:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26761,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26753,
                            "src": "7626:4:73",
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
                            "id": 26759,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "7614:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26760,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7617:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "7614:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26762,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7614:17:73",
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
                      "id": 26758,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26691,
                        26706,
                        26721,
                        26736,
                        26751
                      ],
                      "referencedDeclaration": 26691,
                      "src": "7610:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26763,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7610:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26757,
                  "id": 26764,
                  "nodeType": "Return",
                  "src": "7603:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dimBytes",
            "nameLocation": "7527:8:73",
            "parameters": {
              "id": 26754,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26753,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7549:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26766,
                  "src": "7536:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26752,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7536:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7535:19:73"
            },
            "returnParameters": {
              "id": 26757,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26756,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26766,
                  "src": "7578:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26755,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7578:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7577:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26781,
            "nodeType": "FunctionDefinition",
            "src": "7645:118:73",
            "nodes": [],
            "body": {
              "id": 26780,
              "nodeType": "Block",
              "src": "7717:46:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26776,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26768,
                            "src": "7750:4:73",
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
                            "id": 26774,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "7738:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26775,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7741:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "7738:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26777,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7738:17:73",
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
                      "id": 26773,
                      "name": "dim",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26691,
                        26706,
                        26721,
                        26736,
                        26751
                      ],
                      "referencedDeclaration": 26691,
                      "src": "7734:3:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7734:22:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26772,
                  "id": 26779,
                  "nodeType": "Return",
                  "src": "7727:29:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "dimBytes32",
            "nameLocation": "7654:10:73",
            "parameters": {
              "id": 26769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26768,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7673:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26781,
                  "src": "7665:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26767,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7665:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7664:14:73"
            },
            "returnParameters": {
              "id": 26772,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26771,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26781,
                  "src": "7702:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26770,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7702:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7701:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26794,
            "nodeType": "FunctionDefinition",
            "src": "7769:123:73",
            "nodes": [],
            "body": {
              "id": 26793,
              "nodeType": "Block",
              "src": "7843:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26789,
                        "name": "ITALIC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25928,
                        "src": "7872:6:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26790,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26783,
                        "src": "7880:4:73",
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
                      "id": 26788,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "7860:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7860:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26787,
                  "id": 26792,
                  "nodeType": "Return",
                  "src": "7853:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "7778:6:73",
            "parameters": {
              "id": 26784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26783,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7799:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26794,
                  "src": "7785:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26782,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7785:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7784:20:73"
            },
            "returnParameters": {
              "id": 26787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26786,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26794,
                  "src": "7828:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26785,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7828:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7827:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26809,
            "nodeType": "FunctionDefinition",
            "src": "7898:117:73",
            "nodes": [],
            "body": {
              "id": 26808,
              "nodeType": "Block",
              "src": "7966:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26804,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26796,
                            "src": "8002:4:73",
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
                            "id": 26802,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "7990:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26803,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7993:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "7990:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 26805,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7990:17:73",
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
                      "id": 26801,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26794,
                        26809,
                        26824,
                        26839,
                        26854
                      ],
                      "referencedDeclaration": 26794,
                      "src": "7983:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26806,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7983:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26800,
                  "id": 26807,
                  "nodeType": "Return",
                  "src": "7976:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "7907:6:73",
            "parameters": {
              "id": 26797,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26796,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "7922:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26809,
                  "src": "7914:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26795,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7914:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7913:14:73"
            },
            "returnParameters": {
              "id": 26800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26799,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26809,
                  "src": "7951:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26798,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7951:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7950:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26824,
            "nodeType": "FunctionDefinition",
            "src": "8021:116:73",
            "nodes": [],
            "body": {
              "id": 26823,
              "nodeType": "Block",
              "src": "8088:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26819,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26811,
                            "src": "8124:4:73",
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
                            "id": 26817,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "8112:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26818,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8115:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "8112:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 26820,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8112:17:73",
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
                      "id": 26816,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26794,
                        26809,
                        26824,
                        26839,
                        26854
                      ],
                      "referencedDeclaration": 26794,
                      "src": "8105:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26821,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8105:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26815,
                  "id": 26822,
                  "nodeType": "Return",
                  "src": "8098:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "8030:6:73",
            "parameters": {
              "id": 26812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26811,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8044:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26824,
                  "src": "8037:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26810,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8037:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8036:13:73"
            },
            "returnParameters": {
              "id": 26815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26814,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26824,
                  "src": "8073:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26813,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8073:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8072:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26839,
            "nodeType": "FunctionDefinition",
            "src": "8143:117:73",
            "nodes": [],
            "body": {
              "id": 26838,
              "nodeType": "Block",
              "src": "8211:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26834,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26826,
                            "src": "8247:4:73",
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
                            "id": 26832,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "8235:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26833,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8238:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "8235:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26835,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8235:17:73",
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
                      "id": 26831,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26794,
                        26809,
                        26824,
                        26839,
                        26854
                      ],
                      "referencedDeclaration": 26794,
                      "src": "8228:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26836,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8228:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26830,
                  "id": 26837,
                  "nodeType": "Return",
                  "src": "8221:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "8152:6:73",
            "parameters": {
              "id": 26827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26826,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8167:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26839,
                  "src": "8159:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26825,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8159:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8158:14:73"
            },
            "returnParameters": {
              "id": 26830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26829,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26839,
                  "src": "8196:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26828,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8196:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8195:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26854,
            "nodeType": "FunctionDefinition",
            "src": "8266:114:73",
            "nodes": [],
            "body": {
              "id": 26853,
              "nodeType": "Block",
              "src": "8331:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26849,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26841,
                            "src": "8367:4:73",
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
                            "id": 26847,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "8355:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8358:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "8355:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26850,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8355:17:73",
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
                      "id": 26846,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26794,
                        26809,
                        26824,
                        26839,
                        26854
                      ],
                      "referencedDeclaration": 26794,
                      "src": "8348:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8348:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26845,
                  "id": 26852,
                  "nodeType": "Return",
                  "src": "8341:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italic",
            "nameLocation": "8275:6:73",
            "parameters": {
              "id": 26842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26841,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8287:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26854,
                  "src": "8282:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26840,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8282:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8281:11:73"
            },
            "returnParameters": {
              "id": 26845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26844,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26854,
                  "src": "8316:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26843,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8316:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8315:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26869,
            "nodeType": "FunctionDefinition",
            "src": "8386:127:73",
            "nodes": [],
            "body": {
              "id": 26868,
              "nodeType": "Block",
              "src": "8464:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26864,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26856,
                            "src": "8500:4:73",
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
                            "id": 26862,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "8488:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26863,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8491:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "8488:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26865,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8488:17:73",
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
                      "id": 26861,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26794,
                        26809,
                        26824,
                        26839,
                        26854
                      ],
                      "referencedDeclaration": 26794,
                      "src": "8481:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8481:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26860,
                  "id": 26867,
                  "nodeType": "Return",
                  "src": "8474:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italicBytes",
            "nameLocation": "8395:11:73",
            "parameters": {
              "id": 26857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26856,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8420:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26869,
                  "src": "8407:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26855,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8407:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8406:19:73"
            },
            "returnParameters": {
              "id": 26860,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26859,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26869,
                  "src": "8449:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26858,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8449:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8448:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26884,
            "nodeType": "FunctionDefinition",
            "src": "8519:124:73",
            "nodes": [],
            "body": {
              "id": 26883,
              "nodeType": "Block",
              "src": "8594:49:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26879,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26871,
                            "src": "8630:4:73",
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
                            "id": 26877,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "8618:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26878,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8621:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "8618:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8618:17:73",
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
                      "id": 26876,
                      "name": "italic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26794,
                        26809,
                        26824,
                        26839,
                        26854
                      ],
                      "referencedDeclaration": 26794,
                      "src": "8611:6:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8611:25:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26875,
                  "id": 26882,
                  "nodeType": "Return",
                  "src": "8604:32:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "italicBytes32",
            "nameLocation": "8528:13:73",
            "parameters": {
              "id": 26872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26871,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8550:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26884,
                  "src": "8542:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26870,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8542:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8541:14:73"
            },
            "returnParameters": {
              "id": 26875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26874,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26884,
                  "src": "8579:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26873,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8579:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8578:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26897,
            "nodeType": "FunctionDefinition",
            "src": "8649:129:73",
            "nodes": [],
            "body": {
              "id": 26896,
              "nodeType": "Block",
              "src": "8726:52:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26892,
                        "name": "UNDERLINE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25931,
                        "src": "8755:9:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26893,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26886,
                        "src": "8766:4:73",
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
                      "id": 26891,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "8743:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26894,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8743:28:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26890,
                  "id": 26895,
                  "nodeType": "Return",
                  "src": "8736:35:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "8658:9:73",
            "parameters": {
              "id": 26887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26886,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8682:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26897,
                  "src": "8668:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26885,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8668:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8667:20:73"
            },
            "returnParameters": {
              "id": 26890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26889,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26897,
                  "src": "8711:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26888,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8711:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8710:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26912,
            "nodeType": "FunctionDefinition",
            "src": "8784:123:73",
            "nodes": [],
            "body": {
              "id": 26911,
              "nodeType": "Block",
              "src": "8855:52:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26907,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26899,
                            "src": "8894:4:73",
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
                            "id": 26905,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "8882:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26906,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8885:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "8882:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 26908,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8882:17:73",
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
                      "id": 26904,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26897,
                        26912,
                        26927,
                        26942,
                        26957
                      ],
                      "referencedDeclaration": 26897,
                      "src": "8872:9:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26909,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8872:28:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26903,
                  "id": 26910,
                  "nodeType": "Return",
                  "src": "8865:35:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "8793:9:73",
            "parameters": {
              "id": 26900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26899,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8811:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26912,
                  "src": "8803:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26898,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8803:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8802:14:73"
            },
            "returnParameters": {
              "id": 26903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26902,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26912,
                  "src": "8840:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26901,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8840:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8839:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26927,
            "nodeType": "FunctionDefinition",
            "src": "8913:122:73",
            "nodes": [],
            "body": {
              "id": 26926,
              "nodeType": "Block",
              "src": "8983:52:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26922,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26914,
                            "src": "9022:4:73",
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
                            "id": 26920,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "9010:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26921,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9013:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "9010:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 26923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9010:17:73",
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
                      "id": 26919,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26897,
                        26912,
                        26927,
                        26942,
                        26957
                      ],
                      "referencedDeclaration": 26897,
                      "src": "9000:9:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9000:28:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26918,
                  "id": 26925,
                  "nodeType": "Return",
                  "src": "8993:35:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "8922:9:73",
            "parameters": {
              "id": 26915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26914,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "8939:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26927,
                  "src": "8932:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 26913,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8932:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8931:13:73"
            },
            "returnParameters": {
              "id": 26918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26917,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26927,
                  "src": "8968:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26916,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8968:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8967:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26942,
            "nodeType": "FunctionDefinition",
            "src": "9041:123:73",
            "nodes": [],
            "body": {
              "id": 26941,
              "nodeType": "Block",
              "src": "9112:52:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26937,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26929,
                            "src": "9151:4:73",
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
                            "id": 26935,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "9139:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26936,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9142:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "9139:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 26938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9139:17:73",
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
                      "id": 26934,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26897,
                        26912,
                        26927,
                        26942,
                        26957
                      ],
                      "referencedDeclaration": 26897,
                      "src": "9129:9:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9129:28:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26933,
                  "id": 26940,
                  "nodeType": "Return",
                  "src": "9122:35:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "9050:9:73",
            "parameters": {
              "id": 26930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26929,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9068:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26942,
                  "src": "9060:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26928,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9060:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9059:14:73"
            },
            "returnParameters": {
              "id": 26933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26932,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26942,
                  "src": "9097:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26931,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9097:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9096:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26957,
            "nodeType": "FunctionDefinition",
            "src": "9170:120:73",
            "nodes": [],
            "body": {
              "id": 26956,
              "nodeType": "Block",
              "src": "9238:52:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26952,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26944,
                            "src": "9277:4:73",
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
                            "id": 26950,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "9265:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26951,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9268:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "9265:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 26953,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9265:17:73",
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
                      "id": 26949,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26897,
                        26912,
                        26927,
                        26942,
                        26957
                      ],
                      "referencedDeclaration": 26897,
                      "src": "9255:9:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26954,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9255:28:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26948,
                  "id": 26955,
                  "nodeType": "Return",
                  "src": "9248:35:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underline",
            "nameLocation": "9179:9:73",
            "parameters": {
              "id": 26945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26944,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9194:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26957,
                  "src": "9189:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26943,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9189:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9188:11:73"
            },
            "returnParameters": {
              "id": 26948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26947,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26957,
                  "src": "9223:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26946,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9223:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9222:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26972,
            "nodeType": "FunctionDefinition",
            "src": "9296:133:73",
            "nodes": [],
            "body": {
              "id": 26971,
              "nodeType": "Block",
              "src": "9377:52:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26967,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26959,
                            "src": "9416:4:73",
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
                            "id": 26965,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "9404:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26966,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9407:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "9404:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 26968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9404:17:73",
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
                      "id": 26964,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26897,
                        26912,
                        26927,
                        26942,
                        26957
                      ],
                      "referencedDeclaration": 26897,
                      "src": "9394:9:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26969,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9394:28:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26963,
                  "id": 26970,
                  "nodeType": "Return",
                  "src": "9387:35:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underlineBytes",
            "nameLocation": "9305:14:73",
            "parameters": {
              "id": 26960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26959,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9333:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26972,
                  "src": "9320:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26958,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "9320:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9319:19:73"
            },
            "returnParameters": {
              "id": 26963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26962,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26972,
                  "src": "9362:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26961,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9362:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9361:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26987,
            "nodeType": "FunctionDefinition",
            "src": "9435:130:73",
            "nodes": [],
            "body": {
              "id": 26986,
              "nodeType": "Block",
              "src": "9513:52:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 26982,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26974,
                            "src": "9552:4:73",
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
                            "id": 26980,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "9540:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 26981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9543:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "9540:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 26983,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9540:17:73",
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
                      "id": 26979,
                      "name": "underline",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26897,
                        26912,
                        26927,
                        26942,
                        26957
                      ],
                      "referencedDeclaration": 26897,
                      "src": "9530:9:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9530:28:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26978,
                  "id": 26985,
                  "nodeType": "Return",
                  "src": "9523:35:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "underlineBytes32",
            "nameLocation": "9444:16:73",
            "parameters": {
              "id": 26975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26974,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9469:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 26987,
                  "src": "9461:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 26973,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9461:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9460:14:73"
            },
            "returnParameters": {
              "id": 26978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26977,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26987,
                  "src": "9498:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26976,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9498:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9497:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27000,
            "nodeType": "FunctionDefinition",
            "src": "9571:125:73",
            "nodes": [],
            "body": {
              "id": 26999,
              "nodeType": "Block",
              "src": "9646:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26995,
                        "name": "INVERSE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25934,
                        "src": "9675:7:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 26996,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26989,
                        "src": "9684:4:73",
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
                      "id": 26994,
                      "name": "styleConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25957,
                      "src": "9663:11:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) pure returns (string memory)"
                      }
                    },
                    "id": 26997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9663:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26993,
                  "id": 26998,
                  "nodeType": "Return",
                  "src": "9656:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "9580:7:73",
            "parameters": {
              "id": 26990,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26989,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9602:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 27000,
                  "src": "9588:18:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26988,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9588:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9587:20:73"
            },
            "returnParameters": {
              "id": 26993,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26992,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27000,
                  "src": "9631:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26991,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9631:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9630:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27015,
            "nodeType": "FunctionDefinition",
            "src": "9702:119:73",
            "nodes": [],
            "body": {
              "id": 27014,
              "nodeType": "Block",
              "src": "9771:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 27010,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27002,
                            "src": "9808:4:73",
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
                            "id": 27008,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "9796:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 27009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9799:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28587,
                          "src": "9796:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure external returns (string memory)"
                          }
                        },
                        "id": 27011,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9796:17:73",
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
                      "id": 27007,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27000,
                        27015,
                        27030,
                        27045,
                        27060
                      ],
                      "referencedDeclaration": 27000,
                      "src": "9788:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 27012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9788:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27006,
                  "id": 27013,
                  "nodeType": "Return",
                  "src": "9781:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "9711:7:73",
            "parameters": {
              "id": 27003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27002,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9727:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 27015,
                  "src": "9719:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27001,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9719:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9718:14:73"
            },
            "returnParameters": {
              "id": 27006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27005,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27015,
                  "src": "9756:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27004,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9756:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9755:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27030,
            "nodeType": "FunctionDefinition",
            "src": "9827:118:73",
            "nodes": [],
            "body": {
              "id": 27029,
              "nodeType": "Block",
              "src": "9895:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 27025,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27017,
                            "src": "9932:4:73",
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
                            "id": 27023,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "9920:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 27024,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9923:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "9920:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 27026,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9920:17:73",
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
                      "id": 27022,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27000,
                        27015,
                        27030,
                        27045,
                        27060
                      ],
                      "referencedDeclaration": 27000,
                      "src": "9912:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 27027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9912:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27021,
                  "id": 27028,
                  "nodeType": "Return",
                  "src": "9905:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "9836:7:73",
            "parameters": {
              "id": 27018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27017,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9851:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 27030,
                  "src": "9844:11:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27016,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9844:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9843:13:73"
            },
            "returnParameters": {
              "id": 27021,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27020,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27030,
                  "src": "9880:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27019,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9880:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9879:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27045,
            "nodeType": "FunctionDefinition",
            "src": "9951:119:73",
            "nodes": [],
            "body": {
              "id": 27044,
              "nodeType": "Block",
              "src": "10020:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 27040,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27032,
                            "src": "10057:4:73",
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
                            "id": 27038,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "10045:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 27039,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10048:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28559,
                          "src": "10045:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure external returns (string memory)"
                          }
                        },
                        "id": 27041,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10045:17:73",
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
                      "id": 27037,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27000,
                        27015,
                        27030,
                        27045,
                        27060
                      ],
                      "referencedDeclaration": 27000,
                      "src": "10037:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 27042,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10037:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27036,
                  "id": 27043,
                  "nodeType": "Return",
                  "src": "10030:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "9960:7:73",
            "parameters": {
              "id": 27033,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27032,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "9976:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 27045,
                  "src": "9968:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27031,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9968:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9967:14:73"
            },
            "returnParameters": {
              "id": 27036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27035,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27045,
                  "src": "10005:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27034,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10005:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10004:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27060,
            "nodeType": "FunctionDefinition",
            "src": "10076:116:73",
            "nodes": [],
            "body": {
              "id": 27059,
              "nodeType": "Block",
              "src": "10142:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 27055,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27047,
                            "src": "10179:4:73",
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
                            "id": 27053,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "10167:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 27054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10170:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28580,
                          "src": "10167:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bool) pure external returns (string memory)"
                          }
                        },
                        "id": 27056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10167:17:73",
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
                      "id": 27052,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27000,
                        27015,
                        27030,
                        27045,
                        27060
                      ],
                      "referencedDeclaration": 27000,
                      "src": "10159:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 27057,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10159:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27051,
                  "id": 27058,
                  "nodeType": "Return",
                  "src": "10152:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverse",
            "nameLocation": "10085:7:73",
            "parameters": {
              "id": 27048,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27047,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10098:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 27060,
                  "src": "10093:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27046,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10093:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10092:11:73"
            },
            "returnParameters": {
              "id": 27051,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27050,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27060,
                  "src": "10127:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27049,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10127:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10126:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27075,
            "nodeType": "FunctionDefinition",
            "src": "10198:129:73",
            "nodes": [],
            "body": {
              "id": 27074,
              "nodeType": "Block",
              "src": "10277:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 27070,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27062,
                            "src": "10314:4:73",
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
                            "id": 27068,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "10302:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 27069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10305:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28566,
                          "src": "10302:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes memory) pure external returns (string memory)"
                          }
                        },
                        "id": 27071,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10302:17:73",
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
                      "id": 27067,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27000,
                        27015,
                        27030,
                        27045,
                        27060
                      ],
                      "referencedDeclaration": 27000,
                      "src": "10294:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 27072,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10294:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27066,
                  "id": 27073,
                  "nodeType": "Return",
                  "src": "10287:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverseBytes",
            "nameLocation": "10207:12:73",
            "parameters": {
              "id": 27063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27062,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10233:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 27075,
                  "src": "10220:17:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27061,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "10220:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10219:19:73"
            },
            "returnParameters": {
              "id": 27066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27065,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27075,
                  "src": "10262:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27064,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10262:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10261:15:73"
            },
            "scope": 27091,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27090,
            "nodeType": "FunctionDefinition",
            "src": "10333:126:73",
            "nodes": [],
            "body": {
              "id": 27089,
              "nodeType": "Block",
              "src": "10409:50:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 27085,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27077,
                            "src": "10446:4:73",
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
                            "id": 27083,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25901,
                            "src": "10434:2:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 27084,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10437:8:73",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28573,
                          "src": "10434:11:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (bytes32) pure external returns (string memory)"
                          }
                        },
                        "id": 27086,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10434:17:73",
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
                      "id": 27082,
                      "name": "inverse",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27000,
                        27015,
                        27030,
                        27045,
                        27060
                      ],
                      "referencedDeclaration": 27000,
                      "src": "10426:7:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory) pure returns (string memory)"
                      }
                    },
                    "id": 27087,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10426:26:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 27081,
                  "id": 27088,
                  "nodeType": "Return",
                  "src": "10419:33:73"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "inverseBytes32",
            "nameLocation": "10342:14:73",
            "parameters": {
              "id": 27078,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27077,
                  "mutability": "mutable",
                  "name": "self",
                  "nameLocation": "10365:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 27090,
                  "src": "10357:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27076,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10357:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10356:14:73"
            },
            "returnParameters": {
              "id": 27081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27080,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27090,
                  "src": "10394:13:73",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27079,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10394:6:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10393:15:73"
            },
            "scope": 27091,
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
          27091
        ],
        "name": "StdStyle",
        "nameLocation": "108:8:73",
        "scope": 27092,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 73
} as const;
