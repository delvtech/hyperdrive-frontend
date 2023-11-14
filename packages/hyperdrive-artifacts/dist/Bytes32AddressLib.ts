export const Bytes32AddressLib = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212204f0048ce9b343f8e9406b7162e99fd254fe83f8f221dd3192a8d4e99c183cf1464736f6c63430008130033",
    "sourceMap": "248:311:85:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;248:311:85;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212204f0048ce9b343f8e9406b7162e99fd254fe83f8f221dd3192a8d4e99c183cf1464736f6c63430008130033",
    "sourceMap": "248:311:85:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/Bytes32AddressLib.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Library for converting between addresses and bytes32 values.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/Bytes32AddressLib.sol\":\"Bytes32AddressLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/solmate/src/utils/Bytes32AddressLib.sol\":{\"keccak256\":\"0xe709c9f2c6fb8bfe1158fa31967c0a2109844c52079fe4e327baec82fb87acb6\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://9633ab7c471e653dfb37c78b6475db47924c9ee731118545b5bc28aad97f2434\",\"dweb:/ipfs/Qmbt9gLb3hrs21nQxwSiG1ciE56Y73LLt1iPDfnmkcz27E\"]}},\"version\":1}",
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
        "lib/solmate/src/utils/Bytes32AddressLib.sol": "Bytes32AddressLib"
      },
      "libraries": {}
    },
    "sources": {
      "lib/solmate/src/utils/Bytes32AddressLib.sol": {
        "keccak256": "0xe709c9f2c6fb8bfe1158fa31967c0a2109844c52079fe4e327baec82fb87acb6",
        "urls": [
          "bzz-raw://9633ab7c471e653dfb37c78b6475db47924c9ee731118545b5bc28aad97f2434",
          "dweb:/ipfs/Qmbt9gLb3hrs21nQxwSiG1ciE56Y73LLt1iPDfnmkcz27E"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/solmate/src/utils/Bytes32AddressLib.sol",
    "id": 60380,
    "exportedSymbols": {
      "Bytes32AddressLib": [
        60379
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:518:85",
    "nodes": [
      {
        "id": 60342,
        "nodeType": "PragmaDirective",
        "src": "42:24:85",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 60379,
        "nodeType": "ContractDefinition",
        "src": "248:311:85",
        "nodes": [
          {
            "id": 60362,
            "nodeType": "FunctionDefinition",
            "src": "280:138:85",
            "nodes": [],
            "body": {
              "id": 60361,
              "nodeType": "Block",
              "src": "357:61:85",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 60356,
                                "name": "bytesValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60345,
                                "src": "398:10:85",
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
                              "id": 60355,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "390:7:85",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 60354,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "390:7:85",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 60357,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "390:19:85",
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
                          "id": 60353,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "382:7:85",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": {
                            "id": 60352,
                            "name": "uint160",
                            "nodeType": "ElementaryTypeName",
                            "src": "382:7:85",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 60358,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "382:28:85",
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
                      "id": 60351,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "374:7:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 60350,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "374:7:85",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 60359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "374:37:85",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 60349,
                  "id": 60360,
                  "nodeType": "Return",
                  "src": "367:44:85"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fromLast20Bytes",
            "nameLocation": "289:15:85",
            "parameters": {
              "id": 60346,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60345,
                  "mutability": "mutable",
                  "name": "bytesValue",
                  "nameLocation": "313:10:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 60362,
                  "src": "305:18:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 60344,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "305:7:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "304:20:85"
            },
            "returnParameters": {
              "id": 60349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60348,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60362,
                  "src": "348:7:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60347,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "348:7:85",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "347:9:85"
            },
            "scope": 60379,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 60378,
            "nodeType": "FunctionDefinition",
            "src": "424:133:85",
            "nodes": [],
            "body": {
              "id": 60377,
              "nodeType": "Block",
              "src": "503:54:85",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 60373,
                            "name": "addressValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60364,
                            "src": "536:12:85",
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
                          "id": 60372,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "528:7:85",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes20_$",
                            "typeString": "type(bytes20)"
                          },
                          "typeName": {
                            "id": 60371,
                            "name": "bytes20",
                            "nodeType": "ElementaryTypeName",
                            "src": "528:7:85",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 60374,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "528:21:85",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes20",
                          "typeString": "bytes20"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes20",
                          "typeString": "bytes20"
                        }
                      ],
                      "id": 60370,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "520:7:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 60369,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "520:7:85",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 60375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "520:30:85",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 60368,
                  "id": 60376,
                  "nodeType": "Return",
                  "src": "513:37:85"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fillLast12Bytes",
            "nameLocation": "433:15:85",
            "parameters": {
              "id": 60365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60364,
                  "mutability": "mutable",
                  "name": "addressValue",
                  "nameLocation": "457:12:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 60378,
                  "src": "449:20:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60363,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:85",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "448:22:85"
            },
            "returnParameters": {
              "id": 60368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60367,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60378,
                  "src": "494:7:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 60366,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "494:7:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "493:9:85"
            },
            "scope": 60379,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Bytes32AddressLib",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 60343,
          "nodeType": "StructuredDocumentation",
          "src": "68:180:85",
          "text": "@notice Library for converting between addresses and bytes32 values.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/Bytes32AddressLib.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          60379
        ],
        "name": "Bytes32AddressLib",
        "nameLocation": "256:17:85",
        "scope": 60380,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 85
} as const;
