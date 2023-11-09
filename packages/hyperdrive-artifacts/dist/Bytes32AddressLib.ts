export const Bytes32AddressLib = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ef04f6acfce34e725e239d64f5e844a066c32a0dc6bdb5583c5a98acb40a529564736f6c63430008130033",
    "sourceMap": "248:311:101:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;248:311:101;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ef04f6acfce34e725e239d64f5e844a066c32a0dc6bdb5583c5a98acb40a529564736f6c63430008130033",
    "sourceMap": "248:311:101:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/Bytes32AddressLib.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Library for converting between addresses and bytes32 values.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/Bytes32AddressLib.sol\":\"Bytes32AddressLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/solmate/src/utils/Bytes32AddressLib.sol\":{\"keccak256\":\"0xe709c9f2c6fb8bfe1158fa31967c0a2109844c52079fe4e327baec82fb87acb6\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://9633ab7c471e653dfb37c78b6475db47924c9ee731118545b5bc28aad97f2434\",\"dweb:/ipfs/Qmbt9gLb3hrs21nQxwSiG1ciE56Y73LLt1iPDfnmkcz27E\"]}},\"version\":1}",
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
    "id": 63996,
    "exportedSymbols": {
      "Bytes32AddressLib": [
        63995
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:518:101",
    "nodes": [
      {
        "id": 63958,
        "nodeType": "PragmaDirective",
        "src": "42:24:101",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 63995,
        "nodeType": "ContractDefinition",
        "src": "248:311:101",
        "nodes": [
          {
            "id": 63978,
            "nodeType": "FunctionDefinition",
            "src": "280:138:101",
            "nodes": [],
            "body": {
              "id": 63977,
              "nodeType": "Block",
              "src": "357:61:101",
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
                                "id": 63972,
                                "name": "bytesValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63961,
                                "src": "398:10:101",
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
                              "id": 63971,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "390:7:101",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 63970,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "390:7:101",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 63973,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "390:19:101",
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
                          "id": 63969,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "382:7:101",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": {
                            "id": 63968,
                            "name": "uint160",
                            "nodeType": "ElementaryTypeName",
                            "src": "382:7:101",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63974,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "382:28:101",
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
                      "id": 63967,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "374:7:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 63966,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "374:7:101",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 63975,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "374:37:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 63965,
                  "id": 63976,
                  "nodeType": "Return",
                  "src": "367:44:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fromLast20Bytes",
            "nameLocation": "289:15:101",
            "parameters": {
              "id": 63962,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63961,
                  "mutability": "mutable",
                  "name": "bytesValue",
                  "nameLocation": "313:10:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 63978,
                  "src": "305:18:101",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 63960,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "305:7:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "304:20:101"
            },
            "returnParameters": {
              "id": 63965,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63964,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63978,
                  "src": "348:7:101",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63963,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "348:7:101",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "347:9:101"
            },
            "scope": 63995,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63994,
            "nodeType": "FunctionDefinition",
            "src": "424:133:101",
            "nodes": [],
            "body": {
              "id": 63993,
              "nodeType": "Block",
              "src": "503:54:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 63989,
                            "name": "addressValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63980,
                            "src": "536:12:101",
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
                          "id": 63988,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "528:7:101",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes20_$",
                            "typeString": "type(bytes20)"
                          },
                          "typeName": {
                            "id": 63987,
                            "name": "bytes20",
                            "nodeType": "ElementaryTypeName",
                            "src": "528:7:101",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63990,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "528:21:101",
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
                      "id": 63986,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "520:7:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 63985,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "520:7:101",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 63991,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "520:30:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 63984,
                  "id": 63992,
                  "nodeType": "Return",
                  "src": "513:37:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fillLast12Bytes",
            "nameLocation": "433:15:101",
            "parameters": {
              "id": 63981,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63980,
                  "mutability": "mutable",
                  "name": "addressValue",
                  "nameLocation": "457:12:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 63994,
                  "src": "449:20:101",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63979,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:101",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "448:22:101"
            },
            "returnParameters": {
              "id": 63984,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63983,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63994,
                  "src": "494:7:101",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 63982,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "494:7:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "493:9:101"
            },
            "scope": 63995,
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
          "id": 63959,
          "nodeType": "StructuredDocumentation",
          "src": "68:180:101",
          "text": "@notice Library for converting between addresses and bytes32 values.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/Bytes32AddressLib.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          63995
        ],
        "name": "Bytes32AddressLib",
        "nameLocation": "256:17:101",
        "scope": 63996,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 101
} as const;
