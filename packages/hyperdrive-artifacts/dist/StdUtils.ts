export const StdUtils = 
{
  "abi": [],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdUtils.sol\":\"StdUtils\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}",
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
        "lib/forge-std/src/StdUtils.sol": "StdUtils"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/StdUtils.sol": {
        "keccak256": "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1",
        "urls": [
          "bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140",
          "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"
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
      },
      "lib/forge-std/src/interfaces/IMulticall3.sol": {
        "keccak256": "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
        "urls": [
          "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
          "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/StdUtils.sol",
    "id": 27940,
    "exportedSymbols": {
      "IMulticall3": [
        45879
      ],
      "StdUtils": [
        27939
      ],
      "VmSafe": [
        29055
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:10492:74",
    "nodes": [
      {
        "id": 27093,
        "nodeType": "PragmaDirective",
        "src": "32:31:74",
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
        "id": 27094,
        "nodeType": "PragmaDirective",
        "src": "65:33:74",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 27096,
        "nodeType": "ImportDirective",
        "src": "100:57:74",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/interfaces/IMulticall3.sol",
        "file": "./interfaces/IMulticall3.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 27940,
        "sourceUnit": 45880,
        "symbolAliases": [
          {
            "foreign": {
              "id": 27095,
              "name": "IMulticall3",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 45879,
              "src": "108:11:74",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 27098,
        "nodeType": "ImportDirective",
        "src": "158:32:74",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 27940,
        "sourceUnit": 29528,
        "symbolAliases": [
          {
            "foreign": {
              "id": 27097,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 29055,
              "src": "166:6:74",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 27939,
        "nodeType": "ContractDefinition",
        "src": "192:10331:74",
        "nodes": [
          {
            "id": 27104,
            "nodeType": "VariableDeclaration",
            "src": "435:96:74",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "multicall",
            "nameLocation": "464:9:74",
            "scope": 27939,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IMulticall3_$45879",
              "typeString": "contract IMulticall3"
            },
            "typeName": {
              "id": 27100,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 27099,
                "name": "IMulticall3",
                "nameLocations": [
                  "435:11:74"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 45879,
                "src": "435:11:74"
              },
              "referencedDeclaration": 45879,
              "src": "435:11:74",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IMulticall3_$45879",
                "typeString": "contract IMulticall3"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "307863413131626465303539373762333633313136373032383836326245326131373339373643413131",
                  "id": 27102,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "488:42:74",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "value": "0xcA11bde05977b3631167028862bE2a173976CA11"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                ],
                "id": 27101,
                "name": "IMulticall3",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 45879,
                "src": "476:11:74",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_IMulticall3_$45879_$",
                  "typeString": "type(contract IMulticall3)"
                }
              },
              "id": 27103,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "476:55:74",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IMulticall3_$45879",
                "typeString": "contract IMulticall3"
              }
            },
            "visibility": "private"
          },
          {
            "id": 27121,
            "nodeType": "VariableDeclaration",
            "src": "537:92:74",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "561:2:74",
            "scope": 27939,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$29055",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 27106,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 27105,
                "name": "VmSafe",
                "nameLocations": [
                  "537:6:74"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 29055,
                "src": "537:6:74"
              },
              "referencedDeclaration": 29055,
              "src": "537:6:74",
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
                                  "id": 27115,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "607:17:74",
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
                                "id": 27114,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "597:9:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 27116,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "597:28:74",
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
                            "id": 27113,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "589:7:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 27112,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "589:7:74",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 27117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "589:37:74",
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
                        "id": 27111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "581:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 27110,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "581:7:74",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 27118,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "581:46:74",
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
                    "id": 27109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "573:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 27108,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "573:7:74",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 27119,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "573:55:74",
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
                "id": 27107,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29055,
                "src": "566:6:74",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$29055_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 27120,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "566:63:74",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$29055",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 27124,
            "nodeType": "VariableDeclaration",
            "src": "635:86:74",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CONSOLE2_ADDRESS",
            "nameLocation": "660:16:74",
            "scope": 27939,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 27122,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "635:7:74",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307830303030303030303030303030303030303036333646366537333646366336353265366336663637",
              "id": 27123,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "679:42:74",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0x000000000000000000636F6e736F6c652e6c6f67"
            },
            "visibility": "private"
          },
          {
            "id": 27127,
            "nodeType": "VariableDeclaration",
            "src": "727:127:74",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INT256_MIN_ABS",
            "nameLocation": "752:14:74",
            "scope": 27939,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27125,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "727:7:74",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
              "id": 27126,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "777:77:74",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                "typeString": "int_const 5789...(69 digits omitted)...9968"
              },
              "value": "57896044618658097711785492504343953926634992332820282019728792003956564819968"
            },
            "visibility": "private"
          },
          {
            "id": 27130,
            "nodeType": "VariableDeclaration",
            "src": "860:129:74",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "SECP256K1_ORDER",
            "nameLocation": "885:15:74",
            "scope": 27939,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27128,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "860:7:74",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313135373932303839323337333136313935343233353730393835303038363837393037383532383337353634323739303734393034333832363035313633313431353138313631343934333337",
              "id": 27129,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "911:78:74",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907852837564279074904382605163141518161494337_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...4337"
              },
              "value": "115792089237316195423570985008687907852837564279074904382605163141518161494337"
            },
            "visibility": "private"
          },
          {
            "id": 27133,
            "nodeType": "VariableDeclaration",
            "src": "995:125:74",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "UINT256_MAX",
            "nameLocation": "1020:11:74",
            "scope": 27939,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27131,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "995:7:74",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313135373932303839323337333136313935343233353730393835303038363837393037383533323639393834363635363430353634303339343537353834303037393133313239363339393335",
              "id": 27132,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1042:78:74",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              },
              "value": "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            },
            "visibility": "private"
          },
          {
            "id": 27136,
            "nodeType": "VariableDeclaration",
            "src": "1239:85:74",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "CREATE2_FACTORY",
            "nameLocation": "1264:15:74",
            "scope": 27939,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 27134,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1239:7:74",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307834653539623434383437623337393537383538383932306341373846624632366330423439353643",
              "id": 27135,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1282:42:74",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0x4e59b44847b379578588920cA78FbF26c0B4956C"
            },
            "visibility": "private"
          },
          {
            "id": 27266,
            "nodeType": "FunctionDefinition",
            "src": "1546:1263:74",
            "nodes": [],
            "body": {
              "id": 27265,
              "nodeType": "Block",
              "src": "1646:1163:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 27150,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 27148,
                          "name": "min",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27140,
                          "src": "1664:3:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 27149,
                          "name": "max",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27142,
                          "src": "1671:3:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1664:10:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5374645574696c7320626f756e642875696e743235362c75696e743235362c75696e74323536293a204d6178206973206c657373207468616e206d696e2e",
                        "id": 27151,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1676:64:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_16c21f4eccdbbd49e5dc1331f271d929c25cafaf25207892b67e15553a16c5f2",
                          "typeString": "literal_string \"StdUtils bound(uint256,uint256,uint256): Max is less than min.\""
                        },
                        "value": "StdUtils bound(uint256,uint256,uint256): Max is less than min."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_16c21f4eccdbbd49e5dc1331f271d929c25cafaf25207892b67e15553a16c5f2",
                          "typeString": "literal_string \"StdUtils bound(uint256,uint256,uint256): Max is less than min.\""
                        }
                      ],
                      "id": 27147,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1656:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 27152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1656:85:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27153,
                  "nodeType": "ExpressionStatement",
                  "src": "1656:85:74"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 27160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 27156,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27154,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27138,
                        "src": "1970:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "id": 27155,
                        "name": "min",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27140,
                        "src": "1975:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1970:8:74",
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
                      "id": 27159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27157,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27138,
                        "src": "1982:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<=",
                      "rightExpression": {
                        "id": 27158,
                        "name": "max",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27142,
                        "src": "1987:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1982:8:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1970:20:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27163,
                  "nodeType": "IfStatement",
                  "src": "1966:34:74",
                  "trueBody": {
                    "expression": {
                      "id": 27161,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27138,
                      "src": "1999:1:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 27146,
                    "id": 27162,
                    "nodeType": "Return",
                    "src": "1992:8:74"
                  }
                },
                {
                  "assignments": [
                    27165
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27165,
                      "mutability": "mutable",
                      "name": "size",
                      "nameLocation": "2019:4:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27265,
                      "src": "2011:12:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27164,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2011:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27171,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 27168,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27166,
                        "name": "max",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27142,
                        "src": "2026:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 27167,
                        "name": "min",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27140,
                        "src": "2032:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2026:9:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 27169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2038:1:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2026:13:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2011:28:74"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 27178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 27174,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27172,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27138,
                        "src": "2229:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<=",
                      "rightExpression": {
                        "hexValue": "33",
                        "id": 27173,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2234:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "2229:6:74",
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
                      "id": 27177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27175,
                        "name": "size",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27165,
                        "src": "2239:4:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 27176,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27138,
                        "src": "2246:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2239:8:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2229:18:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27183,
                  "nodeType": "IfStatement",
                  "src": "2225:38:74",
                  "trueBody": {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 27181,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27179,
                        "name": "min",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27140,
                        "src": "2256:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 27180,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27138,
                        "src": "2262:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2256:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 27146,
                    "id": 27182,
                    "nodeType": "Return",
                    "src": "2249:14:74"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 27194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 27188,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27184,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27138,
                        "src": "2277:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 27187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 27185,
                          "name": "UINT256_MAX",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27133,
                          "src": "2282:11:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 27186,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2296:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "2282:15:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2277:20:74",
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
                      "id": 27193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27189,
                        "name": "size",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27165,
                        "src": "2301:4:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 27192,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 27190,
                          "name": "UINT256_MAX",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27133,
                          "src": "2308:11:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 27191,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27138,
                          "src": "2322:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2308:15:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2301:22:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2277:46:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27202,
                  "nodeType": "IfStatement",
                  "src": "2273:82:74",
                  "trueBody": {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 27200,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27195,
                        "name": "max",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27142,
                        "src": "2332:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 27198,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 27196,
                              "name": "UINT256_MAX",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27133,
                              "src": "2339:11:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 27197,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27138,
                              "src": "2353:1:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2339:15:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 27199,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2338:17:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2332:23:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 27146,
                    "id": 27201,
                    "nodeType": "Return",
                    "src": "2325:30:74"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 27203,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27138,
                      "src": "2455:1:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 27204,
                      "name": "max",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27142,
                      "src": "2459:3:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2455:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 27235,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27233,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27138,
                        "src": "2634:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 27234,
                        "name": "min",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27140,
                        "src": "2638:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2634:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 27263,
                    "nodeType": "IfStatement",
                    "src": "2630:173:74",
                    "trueBody": {
                      "id": 27262,
                      "nodeType": "Block",
                      "src": "2643:160:74",
                      "statements": [
                        {
                          "assignments": [
                            27237
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 27237,
                              "mutability": "mutable",
                              "name": "diff",
                              "nameLocation": "2665:4:74",
                              "nodeType": "VariableDeclaration",
                              "scope": 27262,
                              "src": "2657:12:74",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 27236,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2657:7:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "visibility": "internal"
                            }
                          ],
                          "id": 27241,
                          "initialValue": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 27240,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 27238,
                              "name": "min",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27140,
                              "src": "2672:3:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 27239,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27138,
                              "src": "2678:1:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2672:7:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "2657:22:74"
                        },
                        {
                          "assignments": [
                            27243
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 27243,
                              "mutability": "mutable",
                              "name": "rem",
                              "nameLocation": "2701:3:74",
                              "nodeType": "VariableDeclaration",
                              "scope": 27262,
                              "src": "2693:11:74",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 27242,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2693:7:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "visibility": "internal"
                            }
                          ],
                          "id": 27247,
                          "initialValue": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 27246,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 27244,
                              "name": "diff",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27237,
                              "src": "2707:4:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "%",
                            "rightExpression": {
                              "id": 27245,
                              "name": "size",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27165,
                              "src": "2714:4:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2707:11:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "2693:25:74"
                        },
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 27250,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 27248,
                              "name": "rem",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27243,
                              "src": "2736:3:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 27249,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2743:1:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "2736:8:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 27253,
                          "nodeType": "IfStatement",
                          "src": "2732:24:74",
                          "trueBody": {
                            "expression": {
                              "id": 27251,
                              "name": "min",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27140,
                              "src": "2753:3:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "functionReturnParameters": 27146,
                            "id": 27252,
                            "nodeType": "Return",
                            "src": "2746:10:74"
                          }
                        },
                        {
                          "expression": {
                            "id": 27260,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 27254,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27145,
                              "src": "2770:6:74",
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
                              "id": 27259,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 27257,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 27255,
                                  "name": "max",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27142,
                                  "src": "2779:3:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 27256,
                                  "name": "rem",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27243,
                                  "src": "2785:3:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2779:9:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 27258,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2791:1:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "2779:13:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2770:22:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 27261,
                          "nodeType": "ExpressionStatement",
                          "src": "2770:22:74"
                        }
                      ]
                    }
                  },
                  "id": 27264,
                  "nodeType": "IfStatement",
                  "src": "2451:352:74",
                  "trueBody": {
                    "id": 27232,
                    "nodeType": "Block",
                    "src": "2464:160:74",
                    "statements": [
                      {
                        "assignments": [
                          27207
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 27207,
                            "mutability": "mutable",
                            "name": "diff",
                            "nameLocation": "2486:4:74",
                            "nodeType": "VariableDeclaration",
                            "scope": 27232,
                            "src": "2478:12:74",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 27206,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2478:7:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 27211,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 27208,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27138,
                            "src": "2493:1:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 27209,
                            "name": "max",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27142,
                            "src": "2497:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2493:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2478:22:74"
                      },
                      {
                        "assignments": [
                          27213
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 27213,
                            "mutability": "mutable",
                            "name": "rem",
                            "nameLocation": "2522:3:74",
                            "nodeType": "VariableDeclaration",
                            "scope": 27232,
                            "src": "2514:11:74",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 27212,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2514:7:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 27217,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 27214,
                            "name": "diff",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27207,
                            "src": "2528:4:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "id": 27215,
                            "name": "size",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27165,
                            "src": "2535:4:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2528:11:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2514:25:74"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 27218,
                            "name": "rem",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27213,
                            "src": "2557:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 27219,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2564:1:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2557:8:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 27223,
                        "nodeType": "IfStatement",
                        "src": "2553:24:74",
                        "trueBody": {
                          "expression": {
                            "id": 27221,
                            "name": "max",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27142,
                            "src": "2574:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "functionReturnParameters": 27146,
                          "id": 27222,
                          "nodeType": "Return",
                          "src": "2567:10:74"
                        }
                      },
                      {
                        "expression": {
                          "id": 27230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 27224,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27145,
                            "src": "2591:6:74",
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
                            "id": 27229,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 27227,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 27225,
                                "name": "min",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27140,
                                "src": "2600:3:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "id": 27226,
                                "name": "rem",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27213,
                                "src": "2606:3:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2600:9:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 27228,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2612:1:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "2600:13:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2591:22:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 27231,
                        "nodeType": "ExpressionStatement",
                        "src": "2591:22:74"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_bound",
            "nameLocation": "1555:6:74",
            "parameters": {
              "id": 27143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27138,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1570:1:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27266,
                  "src": "1562:9:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27137,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1562:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27140,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "1581:3:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27266,
                  "src": "1573:11:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27139,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1573:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27142,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "1594:3:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27266,
                  "src": "1586:11:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27141,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1561:37:74"
            },
            "returnParameters": {
              "id": 27146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27145,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "1638:6:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27266,
                  "src": "1630:14:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27144,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1630:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1629:16:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 27291,
            "nodeType": "FunctionDefinition",
            "src": "2815:190:74",
            "nodes": [],
            "body": {
              "id": 27290,
              "nodeType": "Block",
              "src": "2914:91:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 27283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 27277,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27275,
                      "src": "2924:6:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 27279,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27268,
                          "src": "2940:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 27280,
                          "name": "min",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27270,
                          "src": "2943:3:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 27281,
                          "name": "max",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27272,
                          "src": "2948:3:74",
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
                        "id": 27278,
                        "name": "_bound",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          27266,
                          27413
                        ],
                        "referencedDeclaration": 27266,
                        "src": "2933:6:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 27282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2933:19:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2924:28:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27284,
                  "nodeType": "ExpressionStatement",
                  "src": "2924:28:74"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "426f756e6420526573756c74",
                        "id": 27286,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2975:14:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_237b64d156191d73cf174e4433495e27feb7a7083e87d06235be591548fb5c52",
                          "typeString": "literal_string \"Bound Result\""
                        },
                        "value": "Bound Result"
                      },
                      {
                        "id": 27287,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27275,
                        "src": "2991:6:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_237b64d156191d73cf174e4433495e27feb7a7083e87d06235be591548fb5c52",
                          "typeString": "literal_string \"Bound Result\""
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 27285,
                      "name": "console2_log",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27913,
                        27938
                      ],
                      "referencedDeclaration": 27913,
                      "src": "2962:12:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256) view"
                      }
                    },
                    "id": 27288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2962:36:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27289,
                  "nodeType": "ExpressionStatement",
                  "src": "2962:36:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bound",
            "nameLocation": "2824:5:74",
            "parameters": {
              "id": 27273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27268,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2838:1:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27291,
                  "src": "2830:9:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27267,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2830:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27270,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "2849:3:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27291,
                  "src": "2841:11:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27269,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2841:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27272,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "2862:3:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27291,
                  "src": "2854:11:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27271,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2854:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2829:37:74"
            },
            "returnParameters": {
              "id": 27276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27275,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2906:6:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27291,
                  "src": "2898:14:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27274,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2898:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2897:16:74"
            },
            "scope": 27939,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 27413,
            "nodeType": "FunctionDefinition",
            "src": "3011:1145:74",
            "nodes": [],
            "body": {
              "id": 27412,
              "nodeType": "Block",
              "src": "3107:1049:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 27305,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 27303,
                          "name": "min",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27295,
                          "src": "3125:3:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 27304,
                          "name": "max",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27297,
                          "src": "3132:3:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "3125:10:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5374645574696c7320626f756e6428696e743235362c696e743235362c696e74323536293a204d6178206973206c657373207468616e206d696e2e",
                        "id": 27306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3137:61:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0fd736be0f0596d130ab62399a2ecc4855db1de6a3b01be590df45aa0de73247",
                          "typeString": "literal_string \"StdUtils bound(int256,int256,int256): Max is less than min.\""
                        },
                        "value": "StdUtils bound(int256,int256,int256): Max is less than min."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0fd736be0f0596d130ab62399a2ecc4855db1de6a3b01be590df45aa0de73247",
                          "typeString": "literal_string \"StdUtils bound(int256,int256,int256): Max is less than min.\""
                        }
                      ],
                      "id": 27302,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3117:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 27307,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3117:82:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27308,
                  "nodeType": "ExpressionStatement",
                  "src": "3117:82:74"
                },
                {
                  "assignments": [
                    27310
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27310,
                      "mutability": "mutable",
                      "name": "_x",
                      "nameLocation": "3635:2:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27412,
                      "src": "3627:10:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27309,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3627:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27332,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 27313,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27311,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27293,
                        "src": "3640:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 27312,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3644:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3640:5:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 27326,
                                "name": "x",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27293,
                                "src": "3694:1:74",
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
                              "id": 27325,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3686:7:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 27324,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "3686:7:74",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 27327,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3686:10:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 27328,
                            "name": "INT256_MIN_ABS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27127,
                            "src": "3699:14:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3686:27:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 27330,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3685:29:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "3640:74:74",
                    "trueExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27322,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 27320,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 27314,
                              "name": "INT256_MIN_ABS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27127,
                              "src": "3649:14:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 27319,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "~",
                              "prefix": true,
                              "src": "3666:11:74",
                              "subExpression": {
                                "arguments": [
                                  {
                                    "id": 27317,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27293,
                                    "src": "3675:1:74",
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
                                  "id": 27316,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3667:7:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 27315,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3667:7:74",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 27318,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3667:10:74",
                                "tryCall": false,
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
                            "src": "3649:28:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 27321,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3680:1:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3649:32:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 27323,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3648:34:74",
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
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3627:87:74"
                },
                {
                  "assignments": [
                    27334
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27334,
                      "mutability": "mutable",
                      "name": "_min",
                      "nameLocation": "3732:4:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27412,
                      "src": "3724:12:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27333,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3724:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27356,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 27337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27335,
                        "name": "min",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27295,
                        "src": "3739:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 27336,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3745:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3739:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27353,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 27350,
                                "name": "min",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27295,
                                "src": "3797:3:74",
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
                              "id": 27349,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3789:7:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 27348,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "3789:7:74",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 27351,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3789:12:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 27352,
                            "name": "INT256_MIN_ABS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27127,
                            "src": "3804:14:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3789:29:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 27354,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3788:31:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27355,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "3739:80:74",
                    "trueExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27346,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 27344,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 27338,
                              "name": "INT256_MIN_ABS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27127,
                              "src": "3750:14:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 27343,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "~",
                              "prefix": true,
                              "src": "3767:13:74",
                              "subExpression": {
                                "arguments": [
                                  {
                                    "id": 27341,
                                    "name": "min",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27295,
                                    "src": "3776:3:74",
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
                                  "id": 27340,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3768:7:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 27339,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3768:7:74",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 27342,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3768:12:74",
                                "tryCall": false,
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
                            "src": "3750:30:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 27345,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3783:1:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3750:34:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 27347,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3749:36:74",
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
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3724:95:74"
                },
                {
                  "assignments": [
                    27358
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27358,
                      "mutability": "mutable",
                      "name": "_max",
                      "nameLocation": "3837:4:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27412,
                      "src": "3829:12:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27357,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3829:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27380,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 27361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 27359,
                        "name": "max",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27297,
                        "src": "3844:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 27360,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3850:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3844:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 27374,
                                "name": "max",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27297,
                                "src": "3902:3:74",
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
                              "id": 27373,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3894:7:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 27372,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "3894:7:74",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 27375,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3894:12:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 27376,
                            "name": "INT256_MIN_ABS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27127,
                            "src": "3909:14:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3894:29:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 27378,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3893:31:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "3844:80:74",
                    "trueExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27370,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 27368,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 27362,
                              "name": "INT256_MIN_ABS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27127,
                              "src": "3855:14:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 27367,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "~",
                              "prefix": true,
                              "src": "3872:13:74",
                              "subExpression": {
                                "arguments": [
                                  {
                                    "id": 27365,
                                    "name": "max",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27297,
                                    "src": "3881:3:74",
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
                                  "id": 27364,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3873:7:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 27363,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3873:7:74",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 27366,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3873:12:74",
                                "tryCall": false,
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
                            "src": "3855:30:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 27369,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3888:1:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "3855:34:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 27371,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3854:36:74",
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
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3829:95:74"
                },
                {
                  "assignments": [
                    27382
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27382,
                      "mutability": "mutable",
                      "name": "y",
                      "nameLocation": "3943:1:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27412,
                      "src": "3935:9:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27381,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3935:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27388,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 27384,
                        "name": "_x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27310,
                        "src": "3954:2:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 27385,
                        "name": "_min",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27334,
                        "src": "3958:4:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 27386,
                        "name": "_max",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27358,
                        "src": "3964:4:74",
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
                      "id": 27383,
                      "name": "_bound",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27266,
                        27413
                      ],
                      "referencedDeclaration": 27266,
                      "src": "3947:6:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 27387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3947:22:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3935:34:74"
                },
                {
                  "expression": {
                    "id": 27410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 27389,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27300,
                      "src": "4057:6:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 27392,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 27390,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27382,
                          "src": "4066:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 27391,
                          "name": "INT256_MIN_ABS",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27127,
                          "src": "4070:14:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4066:18:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 27407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 27405,
                              "name": "y",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27382,
                              "src": "4130:1:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 27406,
                              "name": "INT256_MIN_ABS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27127,
                              "src": "4134:14:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4130:18:74",
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
                          "id": 27404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4123:6:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 27403,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4123:6:74",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 27408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4123:26:74",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 27409,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "4066:83:74",
                      "trueExpression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 27401,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 27399,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "~",
                              "prefix": true,
                              "src": "4094:21:74",
                              "subExpression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 27397,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 27395,
                                      "name": "INT256_MIN_ABS",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27127,
                                      "src": "4096:14:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "id": 27396,
                                      "name": "y",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27382,
                                      "src": "4113:1:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "4096:18:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 27398,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "4095:20:74",
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
                              "id": 27400,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4118:1:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "4094:25:74",
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
                          "id": 27394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4087:6:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 27393,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4087:6:74",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 27402,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4087:33:74",
                        "tryCall": false,
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
                    "src": "4057:92:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 27411,
                  "nodeType": "ExpressionStatement",
                  "src": "4057:92:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_bound",
            "nameLocation": "3020:6:74",
            "parameters": {
              "id": 27298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27293,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "3034:1:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27413,
                  "src": "3027:8:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27292,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3027:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27295,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "3044:3:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27413,
                  "src": "3037:10:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27294,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3037:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27297,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "3056:3:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27413,
                  "src": "3049:10:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27296,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3049:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3026:34:74"
            },
            "returnParameters": {
              "id": 27301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27300,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "3099:6:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27413,
                  "src": "3092:13:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27299,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3092:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3091:15:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 27441,
            "nodeType": "FunctionDefinition",
            "src": "4162:199:74",
            "nodes": [],
            "body": {
              "id": 27440,
              "nodeType": "Block",
              "src": "4257:104:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 27430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 27424,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27422,
                      "src": "4267:6:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 27426,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27415,
                          "src": "4283:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 27427,
                          "name": "min",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27417,
                          "src": "4286:3:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 27428,
                          "name": "max",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27419,
                          "src": "4291:3:74",
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
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        ],
                        "id": 27425,
                        "name": "_bound",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          27266,
                          27413
                        ],
                        "referencedDeclaration": 27413,
                        "src": "4276:6:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$_t_int256_$returns$_t_int256_$",
                          "typeString": "function (int256,int256,int256) pure returns (int256)"
                        }
                      },
                      "id": 27429,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4276:19:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "4267:28:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 27431,
                  "nodeType": "ExpressionStatement",
                  "src": "4267:28:74"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "426f756e6420726573756c74",
                        "id": 27433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4318:14:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_81387530263afdcc351da6c89e6a10d49583b5beb1fecaddd0371443f1cd026f",
                          "typeString": "literal_string \"Bound result\""
                        },
                        "value": "Bound result"
                      },
                      {
                        "arguments": [
                          {
                            "id": 27436,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27422,
                            "src": "4346:6:74",
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
                            "id": 27434,
                            "name": "vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27121,
                            "src": "4334:2:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VmSafe_$29055",
                              "typeString": "contract VmSafe"
                            }
                          },
                          "id": 27435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4337:8:74",
                          "memberName": "toString",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 28594,
                          "src": "4334:11:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (int256) pure external returns (string memory)"
                          }
                        },
                        "id": 27437,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4334:19:74",
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
                          "typeIdentifier": "t_stringliteral_81387530263afdcc351da6c89e6a10d49583b5beb1fecaddd0371443f1cd026f",
                          "typeString": "literal_string \"Bound result\""
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 27432,
                      "name": "console2_log",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27913,
                        27938
                      ],
                      "referencedDeclaration": 27938,
                      "src": "4305:12:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory) view"
                      }
                    },
                    "id": 27438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4305:49:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27439,
                  "nodeType": "ExpressionStatement",
                  "src": "4305:49:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bound",
            "nameLocation": "4171:5:74",
            "parameters": {
              "id": 27420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27415,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "4184:1:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27441,
                  "src": "4177:8:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27414,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4177:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27417,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "4194:3:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27441,
                  "src": "4187:10:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27416,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4187:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27419,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "4206:3:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27441,
                  "src": "4199:10:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27418,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4199:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4176:34:74"
            },
            "returnParameters": {
              "id": 27423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27422,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4249:6:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27441,
                  "src": "4242:13:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 27421,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4242:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4241:15:74"
            },
            "scope": 27939,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 27459,
            "nodeType": "FunctionDefinition",
            "src": "4367:160:74",
            "nodes": [],
            "body": {
              "id": 27458,
              "nodeType": "Block",
              "src": "4459:68:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 27456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 27448,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27446,
                      "src": "4469:6:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 27450,
                          "name": "privateKey",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27443,
                          "src": "4485:10:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "31",
                          "id": 27451,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4497:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 27454,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 27452,
                            "name": "SECP256K1_ORDER",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27130,
                            "src": "4500:15:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 27453,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4518:1:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "4500:19:74",
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
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 27449,
                        "name": "_bound",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          27266,
                          27413
                        ],
                        "referencedDeclaration": 27266,
                        "src": "4478:6:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 27455,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4478:42:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4469:51:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27457,
                  "nodeType": "ExpressionStatement",
                  "src": "4469:51:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "boundPrivateKey",
            "nameLocation": "4376:15:74",
            "parameters": {
              "id": 27444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27443,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "4400:10:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27459,
                  "src": "4392:18:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4392:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4391:20:74"
            },
            "returnParameters": {
              "id": 27447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27446,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4451:6:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27459,
                  "src": "4443:14:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27445,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4443:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4442:16:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 27493,
            "nodeType": "FunctionDefinition",
            "src": "4533:259:74",
            "nodes": [],
            "body": {
              "id": 27492,
              "nodeType": "Block",
              "src": "4610:182:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 27470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 27467,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27461,
                            "src": "4628:1:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 27468,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4630:6:74",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "4628:8:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "hexValue": "3332",
                          "id": 27469,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4640:2:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_32_by_1",
                            "typeString": "int_const 32"
                          },
                          "value": "32"
                        },
                        "src": "4628:14:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5374645574696c73206279746573546f55696e74286279746573293a204279746573206c656e67746820657863656564732033322e",
                        "id": 27471,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4644:55:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_15bc16f8ce72c26d4fbf91f28e31f7cbe900e6386b04cf90f353bff0f5b2da88",
                          "typeString": "literal_string \"StdUtils bytesToUint(bytes): Bytes length exceeds 32.\""
                        },
                        "value": "StdUtils bytesToUint(bytes): Bytes length exceeds 32."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_15bc16f8ce72c26d4fbf91f28e31f7cbe900e6386b04cf90f353bff0f5b2da88",
                          "typeString": "literal_string \"StdUtils bytesToUint(bytes): Bytes length exceeds 32.\""
                        }
                      ],
                      "id": 27466,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4620:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 27472,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4620:80:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27473,
                  "nodeType": "ExpressionStatement",
                  "src": "4620:80:74"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 27483,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3332",
                                  "id": 27480,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4755:2:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_32_by_1",
                                    "typeString": "int_const 32"
                                  },
                                  "value": "32"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "expression": {
                                    "id": 27481,
                                    "name": "b",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27461,
                                    "src": "4760:1:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 27482,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4762:6:74",
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "src": "4760:8:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "4755:13:74",
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
                              "id": 27479,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "NewExpression",
                              "src": "4745:9:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (bytes memory)"
                              },
                              "typeName": {
                                "id": 27478,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "4749:5:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_storage_ptr",
                                  "typeString": "bytes"
                                }
                              }
                            },
                            "id": 27484,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4745:24:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          {
                            "id": 27485,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27461,
                            "src": "4771:1:74",
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
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 27476,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4728:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 27477,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4732:12:74",
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "src": "4728:16:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 27486,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4728:45:74",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 27488,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4776:7:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 27487,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "4776:7:74",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 27489,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "4775:9:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        }
                      ],
                      "expression": {
                        "id": 27474,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "4717:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 27475,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "4721:6:74",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "4717:10:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 27490,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4717:68:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 27465,
                  "id": 27491,
                  "nodeType": "Return",
                  "src": "4710:75:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bytesToUint",
            "nameLocation": "4542:11:74",
            "parameters": {
              "id": 27462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27461,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4567:1:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27493,
                  "src": "4554:14:74",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27460,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4554:5:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4553:16:74"
            },
            "returnParameters": {
              "id": 27465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27464,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27493,
                  "src": "4601:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27463,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4601:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4600:9:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 27678,
            "nodeType": "FunctionDefinition",
            "src": "5026:1962:74",
            "nodes": [],
            "body": {
              "id": 27677,
              "nodeType": "Block",
              "src": "5129:1859:74",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 27503,
                      "name": "nonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27498,
                      "src": "5455:5:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30783030",
                      "id": 27504,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5464:4:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0x00"
                    },
                    "src": "5455:13:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27527,
                  "nodeType": "IfStatement",
                  "src": "5451:134:74",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30786436",
                                      "id": 27512,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5539:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_214_by_1",
                                        "typeString": "int_const 214"
                                      },
                                      "value": "0xd6"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_214_by_1",
                                        "typeString": "int_const 214"
                                      }
                                    ],
                                    "id": 27511,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5532:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27510,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5532:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27513,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5532:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30783934",
                                      "id": 27516,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5553:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      },
                                      "value": "0x94"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      }
                                    ],
                                    "id": 27515,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5546:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27514,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5546:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27517,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5546:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "id": 27518,
                                  "name": "deployer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27496,
                                  "src": "5560:8:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30783830",
                                      "id": 27521,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5577:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_128_by_1",
                                        "typeString": "int_const 128"
                                      },
                                      "value": "0x80"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_128_by_1",
                                        "typeString": "int_const 128"
                                      }
                                    ],
                                    "id": 27520,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5570:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27519,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5570:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27522,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5570:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                ],
                                "expression": {
                                  "id": 27508,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "5515:3:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 27509,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "5519:12:74",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "5515:16:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 27523,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5515:68:74",
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
                            "id": 27507,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "5505:9:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 27524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5505:79:74",
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
                        "id": 27506,
                        "name": "addressFromLast20Bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27888,
                        "src": "5482:22:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                          "typeString": "function (bytes32) pure returns (address)"
                        }
                      },
                      "id": 27525,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5482:103:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 27502,
                    "id": 27526,
                    "nodeType": "Return",
                    "src": "5475:110:74"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27530,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 27528,
                      "name": "nonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27498,
                      "src": "5599:5:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "hexValue": "30783766",
                      "id": 27529,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5608:4:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_127_by_1",
                        "typeString": "int_const 127"
                      },
                      "value": "0x7f"
                    },
                    "src": "5599:13:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27552,
                  "nodeType": "IfStatement",
                  "src": "5595:134:74",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30786436",
                                      "id": 27537,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5683:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_214_by_1",
                                        "typeString": "int_const 214"
                                      },
                                      "value": "0xd6"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_214_by_1",
                                        "typeString": "int_const 214"
                                      }
                                    ],
                                    "id": 27536,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5676:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27535,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5676:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27538,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5676:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30783934",
                                      "id": 27541,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5697:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      },
                                      "value": "0x94"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      }
                                    ],
                                    "id": 27540,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5690:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27539,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5690:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27542,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5690:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "id": 27543,
                                  "name": "deployer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27496,
                                  "src": "5704:8:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "id": 27546,
                                      "name": "nonce",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27498,
                                      "src": "5720:5:74",
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
                                    "id": 27545,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5714:5:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint8_$",
                                      "typeString": "type(uint8)"
                                    },
                                    "typeName": {
                                      "id": 27544,
                                      "name": "uint8",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5714:5:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27547,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5714:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                ],
                                "expression": {
                                  "id": 27533,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "5659:3:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 27534,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "5663:12:74",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "5659:16:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 27548,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5659:68:74",
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
                            "id": 27532,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "5649:9:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 27549,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5649:79:74",
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
                        "id": 27531,
                        "name": "addressFromLast20Bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27888,
                        "src": "5626:22:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                          "typeString": "function (bytes32) pure returns (address)"
                        }
                      },
                      "id": 27550,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5626:103:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 27502,
                    "id": 27551,
                    "nodeType": "Return",
                    "src": "5619:110:74"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 27553,
                      "name": "nonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27498,
                      "src": "5882:5:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_rational_255_by_1",
                        "typeString": "int_const 255"
                      },
                      "id": 27558,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_rational_256_by_1",
                          "typeString": "int_const 256"
                        },
                        "id": 27556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "32",
                          "id": 27554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5891:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "hexValue": "38",
                          "id": 27555,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5894:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_8_by_1",
                            "typeString": "int_const 8"
                          },
                          "value": "8"
                        },
                        "src": "5891:4:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_256_by_1",
                          "typeString": "int_const 256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 27557,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5898:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "5891:8:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_255_by_1",
                        "typeString": "int_const 255"
                      }
                    },
                    "src": "5882:17:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27585,
                  "nodeType": "IfStatement",
                  "src": "5878:148:74",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30786437",
                                      "id": 27566,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5966:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_215_by_1",
                                        "typeString": "int_const 215"
                                      },
                                      "value": "0xd7"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_215_by_1",
                                        "typeString": "int_const 215"
                                      }
                                    ],
                                    "id": 27565,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5959:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27564,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5959:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27567,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5959:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30783934",
                                      "id": 27570,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5980:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      },
                                      "value": "0x94"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      }
                                    ],
                                    "id": 27569,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5973:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27568,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5973:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27571,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5973:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "id": 27572,
                                  "name": "deployer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27496,
                                  "src": "5987:8:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30783831",
                                      "id": 27575,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6004:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_129_by_1",
                                        "typeString": "int_const 129"
                                      },
                                      "value": "0x81"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_129_by_1",
                                        "typeString": "int_const 129"
                                      }
                                    ],
                                    "id": 27574,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5997:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27573,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5997:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27576,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5997:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "id": 27579,
                                      "name": "nonce",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27498,
                                      "src": "6017:5:74",
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
                                    "id": 27578,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6011:5:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint8_$",
                                      "typeString": "type(uint8)"
                                    },
                                    "typeName": {
                                      "id": 27577,
                                      "name": "uint8",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6011:5:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27580,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6011:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                ],
                                "expression": {
                                  "id": 27562,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "5942:3:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 27563,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "5946:12:74",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "5942:16:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 27581,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5942:82:74",
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
                            "id": 27561,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "5932:9:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 27582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5932:93:74",
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
                        "id": 27560,
                        "name": "addressFromLast20Bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27888,
                        "src": "5909:22:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                          "typeString": "function (bytes32) pure returns (address)"
                        }
                      },
                      "id": 27583,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5909:117:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 27502,
                    "id": 27584,
                    "nodeType": "Return",
                    "src": "5902:124:74"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 27586,
                      "name": "nonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27498,
                      "src": "6040:5:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_rational_65535_by_1",
                        "typeString": "int_const 65535"
                      },
                      "id": 27591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_rational_65536_by_1",
                          "typeString": "int_const 65536"
                        },
                        "id": 27589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "32",
                          "id": 27587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6049:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "hexValue": "3136",
                          "id": 27588,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6052:2:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_16_by_1",
                            "typeString": "int_const 16"
                          },
                          "value": "16"
                        },
                        "src": "6049:5:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_65536_by_1",
                          "typeString": "int_const 65536"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 27590,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6057:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "6049:9:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_65535_by_1",
                        "typeString": "int_const 65535"
                      }
                    },
                    "src": "6040:18:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27618,
                  "nodeType": "IfStatement",
                  "src": "6036:149:74",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30786438",
                                      "id": 27599,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6124:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_216_by_1",
                                        "typeString": "int_const 216"
                                      },
                                      "value": "0xd8"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_216_by_1",
                                        "typeString": "int_const 216"
                                      }
                                    ],
                                    "id": 27598,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6117:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27597,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6117:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27600,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6117:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30783934",
                                      "id": 27603,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6138:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      },
                                      "value": "0x94"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      }
                                    ],
                                    "id": 27602,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6131:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27601,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6131:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27604,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6131:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "id": 27605,
                                  "name": "deployer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27496,
                                  "src": "6145:8:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30783832",
                                      "id": 27608,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6162:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_130_by_1",
                                        "typeString": "int_const 130"
                                      },
                                      "value": "0x82"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_130_by_1",
                                        "typeString": "int_const 130"
                                      }
                                    ],
                                    "id": 27607,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6155:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27606,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6155:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27609,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6155:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "id": 27612,
                                      "name": "nonce",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27498,
                                      "src": "6176:5:74",
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
                                    "id": 27611,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6169:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint16_$",
                                      "typeString": "type(uint16)"
                                    },
                                    "typeName": {
                                      "id": 27610,
                                      "name": "uint16",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6169:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27613,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6169:13:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                ],
                                "expression": {
                                  "id": 27595,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "6100:3:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 27596,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "6104:12:74",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "6100:16:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 27614,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6100:83:74",
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
                            "id": 27594,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "6090:9:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 27615,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6090:94:74",
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
                        "id": 27593,
                        "name": "addressFromLast20Bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27888,
                        "src": "6067:22:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                          "typeString": "function (bytes32) pure returns (address)"
                        }
                      },
                      "id": 27616,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6067:118:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 27502,
                    "id": 27617,
                    "nodeType": "Return",
                    "src": "6060:125:74"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27625,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 27619,
                      "name": "nonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27498,
                      "src": "6199:5:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_rational_16777215_by_1",
                        "typeString": "int_const 16777215"
                      },
                      "id": 27624,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_rational_16777216_by_1",
                          "typeString": "int_const 16777216"
                        },
                        "id": 27622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "32",
                          "id": 27620,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6208:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "hexValue": "3234",
                          "id": 27621,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6211:2:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_24_by_1",
                            "typeString": "int_const 24"
                          },
                          "value": "24"
                        },
                        "src": "6208:5:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_16777216_by_1",
                          "typeString": "int_const 16777216"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 27623,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6216:1:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "6208:9:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_16777215_by_1",
                        "typeString": "int_const 16777215"
                      }
                    },
                    "src": "6199:18:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27651,
                  "nodeType": "IfStatement",
                  "src": "6195:149:74",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30786439",
                                      "id": 27632,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6283:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_217_by_1",
                                        "typeString": "int_const 217"
                                      },
                                      "value": "0xd9"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_217_by_1",
                                        "typeString": "int_const 217"
                                      }
                                    ],
                                    "id": 27631,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6276:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27630,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6276:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27633,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6276:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30783934",
                                      "id": 27636,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6297:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      },
                                      "value": "0x94"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_148_by_1",
                                        "typeString": "int_const 148"
                                      }
                                    ],
                                    "id": 27635,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6290:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27634,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6290:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27637,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6290:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "id": 27638,
                                  "name": "deployer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27496,
                                  "src": "6304:8:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30783833",
                                      "id": 27641,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6321:4:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_131_by_1",
                                        "typeString": "int_const 131"
                                      },
                                      "value": "0x83"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_131_by_1",
                                        "typeString": "int_const 131"
                                      }
                                    ],
                                    "id": 27640,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6314:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 27639,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6314:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27642,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6314:12:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                {
                                  "arguments": [
                                    {
                                      "id": 27645,
                                      "name": "nonce",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27498,
                                      "src": "6335:5:74",
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
                                    "id": 27644,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6328:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint24_$",
                                      "typeString": "type(uint24)"
                                    },
                                    "typeName": {
                                      "id": 27643,
                                      "name": "uint24",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6328:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 27646,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6328:13:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint24",
                                    "typeString": "uint24"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  },
                                  {
                                    "typeIdentifier": "t_uint24",
                                    "typeString": "uint24"
                                  }
                                ],
                                "expression": {
                                  "id": 27628,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "6259:3:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 27629,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "6263:12:74",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "6259:16:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 27647,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6259:83:74",
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
                            "id": 27627,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "6249:9:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 27648,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6249:94:74",
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
                        "id": 27626,
                        "name": "addressFromLast20Bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27888,
                        "src": "6226:22:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                          "typeString": "function (bytes32) pure returns (address)"
                        }
                      },
                      "id": 27649,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6226:118:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 27502,
                    "id": 27650,
                    "nodeType": "Return",
                    "src": "6219:125:74"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "hexValue": "30786461",
                                    "id": 27658,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6911:4:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_218_by_1",
                                      "typeString": "int_const 218"
                                    },
                                    "value": "0xda"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_218_by_1",
                                      "typeString": "int_const 218"
                                    }
                                  ],
                                  "id": 27657,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6904:6:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                    "typeString": "type(bytes1)"
                                  },
                                  "typeName": {
                                    "id": 27656,
                                    "name": "bytes1",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6904:6:74",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 27659,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6904:12:74",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "hexValue": "30783934",
                                    "id": 27662,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6925:4:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_148_by_1",
                                      "typeString": "int_const 148"
                                    },
                                    "value": "0x94"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_148_by_1",
                                      "typeString": "int_const 148"
                                    }
                                  ],
                                  "id": 27661,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6918:6:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                    "typeString": "type(bytes1)"
                                  },
                                  "typeName": {
                                    "id": 27660,
                                    "name": "bytes1",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6918:6:74",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 27663,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6918:12:74",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              {
                                "id": 27664,
                                "name": "deployer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27496,
                                "src": "6932:8:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "hexValue": "30783834",
                                    "id": 27667,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6949:4:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_132_by_1",
                                      "typeString": "int_const 132"
                                    },
                                    "value": "0x84"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_132_by_1",
                                      "typeString": "int_const 132"
                                    }
                                  ],
                                  "id": 27666,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6942:6:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                    "typeString": "type(bytes1)"
                                  },
                                  "typeName": {
                                    "id": 27665,
                                    "name": "bytes1",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6942:6:74",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 27668,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6942:12:74",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 27671,
                                    "name": "nonce",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27498,
                                    "src": "6963:5:74",
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
                                  "id": 27670,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6956:6:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint32_$",
                                    "typeString": "type(uint32)"
                                  },
                                  "typeName": {
                                    "id": 27669,
                                    "name": "uint32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6956:6:74",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 27672,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6956:13:74",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                },
                                {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                },
                                {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              ],
                              "expression": {
                                "id": 27654,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "6887:3:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27655,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6891:12:74",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "6887:16:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 27673,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6887:83:74",
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
                          "id": 27653,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "6877:9:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 27674,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6877:94:74",
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
                      "id": 27652,
                      "name": "addressFromLast20Bytes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27888,
                      "src": "6841:22:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) pure returns (address)"
                      }
                    },
                    "id": 27675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6841:140:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 27502,
                  "id": 27676,
                  "nodeType": "Return",
                  "src": "6834:147:74"
                }
              ]
            },
            "documentation": {
              "id": 27494,
              "nodeType": "StructuredDocumentation",
              "src": "4798:223:74",
              "text": "@dev Compute the address a contract will be deployed at for a given deployer address and nonce\n @notice adapted from Solmate implementation (https://github.com/Rari-Capital/solmate/blob/main/src/utils/LibRLP.sol)"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeCreateAddress",
            "nameLocation": "5035:20:74",
            "parameters": {
              "id": 27499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27496,
                  "mutability": "mutable",
                  "name": "deployer",
                  "nameLocation": "5064:8:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27678,
                  "src": "5056:16:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27495,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5056:7:74",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27498,
                  "mutability": "mutable",
                  "name": "nonce",
                  "nameLocation": "5082:5:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27678,
                  "src": "5074:13:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27497,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5074:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5055:33:74"
            },
            "returnParameters": {
              "id": 27502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27501,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27678,
                  "src": "5120:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5120:7:74",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5119:9:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 27705,
            "nodeType": "FunctionDefinition",
            "src": "6994:280:74",
            "nodes": [],
            "body": {
              "id": 27704,
              "nodeType": "Block",
              "src": "7155:119:74",
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
                                "arguments": [
                                  {
                                    "hexValue": "30786666",
                                    "id": 27695,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "7229:4:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "0xff"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    }
                                  ],
                                  "id": 27694,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7222:6:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                    "typeString": "type(bytes1)"
                                  },
                                  "typeName": {
                                    "id": 27693,
                                    "name": "bytes1",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "7222:6:74",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 27696,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7222:12:74",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              {
                                "id": 27697,
                                "name": "deployer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27684,
                                "src": "7236:8:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 27698,
                                "name": "salt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27680,
                                "src": "7246:4:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 27699,
                                "name": "initcodeHash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27682,
                                "src": "7252:12:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "id": 27691,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "7205:3:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27692,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "7209:12:74",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "7205:16:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 27700,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7205:60:74",
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
                          "id": 27690,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "7195:9:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 27701,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7195:71:74",
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
                      "id": 27689,
                      "name": "addressFromLast20Bytes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27888,
                      "src": "7172:22:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) pure returns (address)"
                      }
                    },
                    "id": 27702,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7172:95:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 27688,
                  "id": 27703,
                  "nodeType": "Return",
                  "src": "7165:102:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeCreate2Address",
            "nameLocation": "7003:21:74",
            "parameters": {
              "id": 27685,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27680,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "7033:4:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27705,
                  "src": "7025:12:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27679,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7025:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27682,
                  "mutability": "mutable",
                  "name": "initcodeHash",
                  "nameLocation": "7047:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27705,
                  "src": "7039:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27681,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7039:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27684,
                  "mutability": "mutable",
                  "name": "deployer",
                  "nameLocation": "7069:8:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27705,
                  "src": "7061:16:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27683,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7061:7:74",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7024:54:74"
            },
            "returnParameters": {
              "id": 27688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27687,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27705,
                  "src": "7142:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27686,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7142:7:74",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7141:9:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 27722,
            "nodeType": "FunctionDefinition",
            "src": "7383:181:74",
            "nodes": [],
            "body": {
              "id": 27721,
              "nodeType": "Block",
              "src": "7482:82:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27716,
                        "name": "salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27708,
                        "src": "7521:4:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 27717,
                        "name": "initCodeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27710,
                        "src": "7527:12:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 27718,
                        "name": "CREATE2_FACTORY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27136,
                        "src": "7541:15:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 27715,
                      "name": "computeCreate2Address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27705,
                        27722
                      ],
                      "referencedDeclaration": 27705,
                      "src": "7499:21:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$_t_address_$returns$_t_address_$",
                        "typeString": "function (bytes32,bytes32,address) pure returns (address)"
                      }
                    },
                    "id": 27719,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7499:58:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 27714,
                  "id": 27720,
                  "nodeType": "Return",
                  "src": "7492:65:74"
                }
              ]
            },
            "documentation": {
              "id": 27706,
              "nodeType": "StructuredDocumentation",
              "src": "7280:98:74",
              "text": "@dev returns the address of a contract created with CREATE2 using the default CREATE2 deployer"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeCreate2Address",
            "nameLocation": "7392:21:74",
            "parameters": {
              "id": 27711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27708,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "7422:4:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27722,
                  "src": "7414:12:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27707,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7414:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27710,
                  "mutability": "mutable",
                  "name": "initCodeHash",
                  "nameLocation": "7436:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27722,
                  "src": "7428:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27709,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7428:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7413:36:74"
            },
            "returnParameters": {
              "id": 27714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27713,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27722,
                  "src": "7473:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27712,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7473:7:74",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7472:9:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27736,
            "nodeType": "FunctionDefinition",
            "src": "7788:135:74",
            "nodes": [],
            "body": {
              "id": 27735,
              "nodeType": "Block",
              "src": "7869:54:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27731,
                        "name": "creationCode",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27725,
                        "src": "7899:12:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 27732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7913:2:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 27730,
                      "name": "hashInitCode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27736,
                        27755
                      ],
                      "referencedDeclaration": 27755,
                      "src": "7886:12:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory,bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 27733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7886:30:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 27729,
                  "id": 27734,
                  "nodeType": "Return",
                  "src": "7879:37:74"
                }
              ]
            },
            "documentation": {
              "id": 27723,
              "nodeType": "StructuredDocumentation",
              "src": "7570:213:74",
              "text": "@dev returns the hash of the init code (creation code + no args) used in CREATE2 with no constructor arguments\n @param creationCode the creation code of a contract C, as returned by type(C).creationCode"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hashInitCode",
            "nameLocation": "7797:12:74",
            "parameters": {
              "id": 27726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27725,
                  "mutability": "mutable",
                  "name": "creationCode",
                  "nameLocation": "7823:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27736,
                  "src": "7810:25:74",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27724,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7810:5:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7809:27:74"
            },
            "returnParameters": {
              "id": 27729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27728,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27736,
                  "src": "7860:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27727,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7860:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7859:9:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27755,
            "nodeType": "FunctionDefinition",
            "src": "8196:171:74",
            "nodes": [],
            "body": {
              "id": 27754,
              "nodeType": "Block",
              "src": "8296:71:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 27749,
                            "name": "creationCode",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27739,
                            "src": "8340:12:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          {
                            "id": 27750,
                            "name": "args",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27741,
                            "src": "8354:4:74",
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
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 27747,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "8323:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 27748,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "8327:12:74",
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "src": "8323:16:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 27751,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8323:36:74",
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
                      "id": 27746,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "8313:9:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 27752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8313:47:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 27745,
                  "id": 27753,
                  "nodeType": "Return",
                  "src": "8306:54:74"
                }
              ]
            },
            "documentation": {
              "id": 27737,
              "nodeType": "StructuredDocumentation",
              "src": "7929:262:74",
              "text": "@dev returns the hash of the init code (creation code + ABI-encoded args) used in CREATE2\n @param creationCode the creation code of a contract C, as returned by type(C).creationCode\n @param args the ABI-encoded arguments to the constructor of C"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hashInitCode",
            "nameLocation": "8205:12:74",
            "parameters": {
              "id": 27742,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27739,
                  "mutability": "mutable",
                  "name": "creationCode",
                  "nameLocation": "8231:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27755,
                  "src": "8218:25:74",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27738,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8218:5:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27741,
                  "mutability": "mutable",
                  "name": "args",
                  "nameLocation": "8258:4:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27755,
                  "src": "8245:17:74",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 27740,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8245:5:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8217:46:74"
            },
            "returnParameters": {
              "id": 27745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27744,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27755,
                  "src": "8287:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27743,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8287:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8286:9:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27869,
            "nodeType": "FunctionDefinition",
            "src": "8478:1124:74",
            "nodes": [],
            "body": {
              "id": 27868,
              "nodeType": "Block",
              "src": "8628:974:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    27767
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27767,
                      "mutability": "mutable",
                      "name": "tokenCodeSize",
                      "nameLocation": "8646:13:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27868,
                      "src": "8638:21:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27766,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8638:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27768,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8638:21:74"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "8678:59:74",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "8692:35:74",
                        "value": {
                          "arguments": [
                            {
                              "name": "token",
                              "nodeType": "YulIdentifier",
                              "src": "8721:5:74"
                            }
                          ],
                          "functionName": {
                            "name": "extcodesize",
                            "nodeType": "YulIdentifier",
                            "src": "8709:11:74"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8709:18:74"
                        },
                        "variableNames": [
                          {
                            "name": "tokenCodeSize",
                            "nodeType": "YulIdentifier",
                            "src": "8692:13:74"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 27757,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8721:5:74",
                      "valueSize": 1
                    },
                    {
                      "declaration": 27767,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8692:13:74",
                      "valueSize": 1
                    }
                  ],
                  "id": 27769,
                  "nodeType": "InlineAssembly",
                  "src": "8669:68:74"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 27773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 27771,
                          "name": "tokenCodeSize",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27767,
                          "src": "8754:13:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 27772,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8770:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "8754:17:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5374645574696c7320676574546f6b656e42616c616e63657328616464726573732c616464726573735b5d293a20546f6b656e2061646472657373206973206e6f74206120636f6e74726163742e",
                        "id": 27774,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8773:80:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e1cfd8db054d28c838f90dd4aca17e279a1b93ad4e1fab977a6ceb92cad655fe",
                          "typeString": "literal_string \"StdUtils getTokenBalances(address,address[]): Token address is not a contract.\""
                        },
                        "value": "StdUtils getTokenBalances(address,address[]): Token address is not a contract."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e1cfd8db054d28c838f90dd4aca17e279a1b93ad4e1fab977a6ceb92cad655fe",
                          "typeString": "literal_string \"StdUtils getTokenBalances(address,address[]): Token address is not a contract.\""
                        }
                      ],
                      "id": 27770,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "8746:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 27775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8746:108:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27776,
                  "nodeType": "ExpressionStatement",
                  "src": "8746:108:74"
                },
                {
                  "assignments": [
                    27778
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27778,
                      "mutability": "mutable",
                      "name": "length",
                      "nameLocation": "8929:6:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27868,
                      "src": "8921:14:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27777,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8921:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27781,
                  "initialValue": {
                    "expression": {
                      "id": 27779,
                      "name": "addresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27760,
                      "src": "8938:9:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 27780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "8948:6:74",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "8938:16:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8921:33:74"
                },
                {
                  "assignments": [
                    27787
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27787,
                      "mutability": "mutable",
                      "name": "calls",
                      "nameLocation": "8990:5:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27868,
                      "src": "8964:31:74",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Call_$45724_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct IMulticall3.Call[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 27785,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 27784,
                            "name": "IMulticall3.Call",
                            "nameLocations": [
                              "8964:11:74",
                              "8976:4:74"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 45724,
                            "src": "8964:16:74"
                          },
                          "referencedDeclaration": 45724,
                          "src": "8964:16:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Call_$45724_storage_ptr",
                            "typeString": "struct IMulticall3.Call"
                          }
                        },
                        "id": 27786,
                        "nodeType": "ArrayTypeName",
                        "src": "8964:18:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Call_$45724_storage_$dyn_storage_ptr",
                          "typeString": "struct IMulticall3.Call[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27794,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 27792,
                        "name": "length",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27778,
                        "src": "9021:6:74",
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
                      "id": 27791,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "8998:22:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Call_$45724_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (struct IMulticall3.Call memory[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 27789,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 27788,
                            "name": "IMulticall3.Call",
                            "nameLocations": [
                              "9002:11:74",
                              "9014:4:74"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 45724,
                            "src": "9002:16:74"
                          },
                          "referencedDeclaration": 45724,
                          "src": "9002:16:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Call_$45724_storage_ptr",
                            "typeString": "struct IMulticall3.Call"
                          }
                        },
                        "id": 27790,
                        "nodeType": "ArrayTypeName",
                        "src": "9002:18:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Call_$45724_storage_$dyn_storage_ptr",
                          "typeString": "struct IMulticall3.Call[]"
                        }
                      }
                    },
                    "id": 27793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8998:30:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$45724_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct IMulticall3.Call memory[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8964:64:74"
                },
                {
                  "body": {
                    "id": 27822,
                    "nodeType": "Block",
                    "src": "9075:189:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 27820,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 27805,
                              "name": "calls",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27787,
                              "src": "9147:5:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Call_$45724_memory_ptr_$dyn_memory_ptr",
                                "typeString": "struct IMulticall3.Call memory[] memory"
                              }
                            },
                            "id": 27807,
                            "indexExpression": {
                              "id": 27806,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27796,
                              "src": "9153:1:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "9147:8:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Call_$45724_memory_ptr",
                              "typeString": "struct IMulticall3.Call memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 27810,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27757,
                                "src": "9184:5:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "hexValue": "30783730613038323331",
                                    "id": 27813,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "9224:10:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1889567281_by_1",
                                      "typeString": "int_const 1889567281"
                                    },
                                    "value": "0x70a08231"
                                  },
                                  {
                                    "components": [
                                      {
                                        "baseExpression": {
                                          "id": 27814,
                                          "name": "addresses",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 27760,
                                          "src": "9237:9:74",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                          }
                                        },
                                        "id": 27816,
                                        "indexExpression": {
                                          "id": 27815,
                                          "name": "i",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 27796,
                                          "src": "9247:1:74",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "9237:12:74",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      }
                                    ],
                                    "id": 27817,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "9236:14:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1889567281_by_1",
                                      "typeString": "int_const 1889567281"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "id": 27811,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -1,
                                    "src": "9201:3:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 27812,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "9205:18:74",
                                  "memberName": "encodeWithSelector",
                                  "nodeType": "MemberAccess",
                                  "src": "9201:22:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function (bytes4) pure returns (bytes memory)"
                                  }
                                },
                                "id": 27818,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9201:50:74",
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "expression": {
                                "id": 27808,
                                "name": "IMulticall3",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 45879,
                                "src": "9158:11:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IMulticall3_$45879_$",
                                  "typeString": "type(contract IMulticall3)"
                                }
                              },
                              "id": 27809,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9170:4:74",
                              "memberName": "Call",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 45724,
                              "src": "9158:16:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_Call_$45724_storage_ptr_$",
                                "typeString": "type(struct IMulticall3.Call storage pointer)"
                              }
                            },
                            "id": 27819,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "nameLocations": [
                              "9176:6:74",
                              "9191:8:74"
                            ],
                            "names": [
                              "target",
                              "callData"
                            ],
                            "nodeType": "FunctionCall",
                            "src": "9158:95:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Call_$45724_memory_ptr",
                              "typeString": "struct IMulticall3.Call memory"
                            }
                          },
                          "src": "9147:106:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Call_$45724_memory_ptr",
                            "typeString": "struct IMulticall3.Call memory"
                          }
                        },
                        "id": 27821,
                        "nodeType": "ExpressionStatement",
                        "src": "9147:106:74"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27801,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 27799,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27796,
                      "src": "9058:1:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 27800,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27778,
                      "src": "9062:6:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9058:10:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27823,
                  "initializationExpression": {
                    "assignments": [
                      27796
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 27796,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "9051:1:74",
                        "nodeType": "VariableDeclaration",
                        "scope": 27823,
                        "src": "9043:9:74",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 27795,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9043:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 27798,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 27797,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9055:1:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "9043:13:74"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 27803,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "9070:3:74",
                      "subExpression": {
                        "id": 27802,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27796,
                        "src": "9072:1:74",
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
                    "id": 27804,
                    "nodeType": "ExpressionStatement",
                    "src": "9070:3:74"
                  },
                  "nodeType": "ForStatement",
                  "src": "9038:226:74"
                },
                {
                  "assignments": [
                    null,
                    27828
                  ],
                  "declarations": [
                    null,
                    {
                      "constant": false,
                      "id": 27828,
                      "mutability": "mutable",
                      "name": "returnData",
                      "nameLocation": "9328:10:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27868,
                      "src": "9313:25:74",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                        "typeString": "bytes[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 27826,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "9313:5:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        },
                        "id": 27827,
                        "nodeType": "ArrayTypeName",
                        "src": "9313:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                          "typeString": "bytes[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27833,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 27831,
                        "name": "calls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27787,
                        "src": "9362:5:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Call_$45724_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct IMulticall3.Call memory[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_struct$_Call_$45724_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct IMulticall3.Call memory[] memory"
                        }
                      ],
                      "expression": {
                        "id": 27829,
                        "name": "multicall",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27104,
                        "src": "9342:9:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IMulticall3_$45879",
                          "typeString": "contract IMulticall3"
                        }
                      },
                      "id": 27830,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9352:9:74",
                      "memberName": "aggregate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 45757,
                      "src": "9342:19:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_array$_t_struct$_Call_$45724_memory_ptr_$dyn_memory_ptr_$returns$_t_uint256_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (struct IMulticall3.Call memory[] memory) payable external returns (uint256,bytes memory[] memory)"
                      }
                    },
                    "id": 27832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9342:26:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                      "typeString": "tuple(uint256,bytes memory[] memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9310:58:74"
                },
                {
                  "expression": {
                    "id": 27840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 27834,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27764,
                      "src": "9442:8:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 27838,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27778,
                          "src": "9467:6:74",
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
                        "id": 27837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "9453:13:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (uint256[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 27835,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9457:7:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 27836,
                          "nodeType": "ArrayTypeName",
                          "src": "9457:9:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        }
                      },
                      "id": 27839,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9453:21:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "src": "9442:32:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "id": 27841,
                  "nodeType": "ExpressionStatement",
                  "src": "9442:32:74"
                },
                {
                  "body": {
                    "id": 27866,
                    "nodeType": "Block",
                    "src": "9521:75:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 27864,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 27852,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27764,
                              "src": "9535:8:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 27854,
                            "indexExpression": {
                              "id": 27853,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27843,
                              "src": "9544:1:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "9535:11:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "baseExpression": {
                                  "id": 27857,
                                  "name": "returnData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27828,
                                  "src": "9560:10:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                    "typeString": "bytes memory[] memory"
                                  }
                                },
                                "id": 27859,
                                "indexExpression": {
                                  "id": 27858,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27843,
                                  "src": "9571:1:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9560:13:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              {
                                "components": [
                                  {
                                    "id": 27861,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "9576:7:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 27860,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "9576:7:74",
                                      "typeDescriptions": {}
                                    }
                                  }
                                ],
                                "id": 27862,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "9575:9:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                },
                                {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                }
                              ],
                              "expression": {
                                "id": 27855,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "9549:3:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27856,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "9553:6:74",
                              "memberName": "decode",
                              "nodeType": "MemberAccess",
                              "src": "9549:10:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 27863,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9549:36:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9535:50:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 27865,
                        "nodeType": "ExpressionStatement",
                        "src": "9535:50:74"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27848,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 27846,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27843,
                      "src": "9504:1:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 27847,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27778,
                      "src": "9508:6:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9504:10:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27867,
                  "initializationExpression": {
                    "assignments": [
                      27843
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 27843,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "9497:1:74",
                        "nodeType": "VariableDeclaration",
                        "scope": 27867,
                        "src": "9489:9:74",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 27842,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9489:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 27845,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 27844,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9501:1:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "9489:13:74"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 27850,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "9516:3:74",
                      "subExpression": {
                        "id": 27849,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27843,
                        "src": "9518:1:74",
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
                    "id": 27851,
                    "nodeType": "ExpressionStatement",
                    "src": "9516:3:74"
                  },
                  "nodeType": "ForStatement",
                  "src": "9484:112:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenBalances",
            "nameLocation": "8487:16:74",
            "parameters": {
              "id": 27761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27757,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "8512:5:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27869,
                  "src": "8504:13:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8504:7:74",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27760,
                  "mutability": "mutable",
                  "name": "addresses",
                  "nameLocation": "8536:9:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27869,
                  "src": "8519:26:74",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27758,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "8519:7:74",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27759,
                    "nodeType": "ArrayTypeName",
                    "src": "8519:9:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8503:43:74"
            },
            "returnParameters": {
              "id": 27765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27764,
                  "mutability": "mutable",
                  "name": "balances",
                  "nameLocation": "8614:8:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27869,
                  "src": "8597:25:74",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27762,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8597:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 27763,
                    "nodeType": "ArrayTypeName",
                    "src": "8597:9:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8596:27:74"
            },
            "scope": 27939,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 27888,
            "nodeType": "FunctionDefinition",
            "src": "9822:144:74",
            "nodes": [],
            "body": {
              "id": 27887,
              "nodeType": "Block",
              "src": "9905:61:74",
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
                                "id": 27882,
                                "name": "bytesValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27871,
                                "src": "9946:10:74",
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
                              "id": 27881,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9938:7:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 27880,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9938:7:74",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 27883,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9938:19:74",
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
                          "id": 27879,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9930:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint160_$",
                            "typeString": "type(uint160)"
                          },
                          "typeName": {
                            "id": 27878,
                            "name": "uint160",
                            "nodeType": "ElementaryTypeName",
                            "src": "9930:7:74",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 27884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9930:28:74",
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
                      "id": 27877,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9922:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 27876,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9922:7:74",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 27885,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9922:37:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 27875,
                  "id": 27886,
                  "nodeType": "Return",
                  "src": "9915:44:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addressFromLast20Bytes",
            "nameLocation": "9831:22:74",
            "parameters": {
              "id": 27872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27871,
                  "mutability": "mutable",
                  "name": "bytesValue",
                  "nameLocation": "9862:10:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27888,
                  "src": "9854:18:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27870,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9854:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9853:20:74"
            },
            "returnParameters": {
              "id": 27875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27874,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27888,
                  "src": "9896:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27873,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9896:7:74",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9895:9:74"
            },
            "scope": 27939,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 27913,
            "nodeType": "FunctionDefinition",
            "src": "10096:207:74",
            "nodes": [],
            "body": {
              "id": 27912,
              "nodeType": "Block",
              "src": "10161:142:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    27896,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27896,
                      "mutability": "mutable",
                      "name": "status",
                      "nameLocation": "10177:6:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27912,
                      "src": "10172:11:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 27895,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "10172:4:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 27909,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "6c6f6728737472696e672c75696e7432353629",
                            "id": 27904,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10249:21:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_b60e72ccf6d57ab53eb84d7e94a9545806ed7f93c4d5673f11a64f03471e584e",
                              "typeString": "literal_string \"log(string,uint256)\""
                            },
                            "value": "log(string,uint256)"
                          },
                          {
                            "id": 27905,
                            "name": "p0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27890,
                            "src": "10272:2:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "id": 27906,
                            "name": "p1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27892,
                            "src": "10276:2:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_b60e72ccf6d57ab53eb84d7e94a9545806ed7f93c4d5673f11a64f03471e584e",
                              "typeString": "literal_string \"log(string,uint256)\""
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 27902,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "10225:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 27903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "10229:19:74",
                          "memberName": "encodeWithSignature",
                          "nodeType": "MemberAccess",
                          "src": "10225:23:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (string memory) pure returns (bytes memory)"
                          }
                        },
                        "id": 27907,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10225:54:74",
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
                      "expression": {
                        "arguments": [
                          {
                            "id": 27899,
                            "name": "CONSOLE2_ADDRESS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27124,
                            "src": "10196:16:74",
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
                          "id": 27898,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "10188:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 27897,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "10188:7:74",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 27900,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10188:25:74",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 27901,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10214:10:74",
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "10188:36:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 27908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10188:92:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10171:109:74"
                },
                {
                  "expression": {
                    "id": 27910,
                    "name": "status",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27896,
                    "src": "10290:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27911,
                  "nodeType": "ExpressionStatement",
                  "src": "10290:6:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "console2_log",
            "nameLocation": "10105:12:74",
            "parameters": {
              "id": 27893,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27890,
                  "mutability": "mutable",
                  "name": "p0",
                  "nameLocation": "10132:2:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27913,
                  "src": "10118:16:74",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27889,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10118:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27892,
                  "mutability": "mutable",
                  "name": "p1",
                  "nameLocation": "10144:2:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27913,
                  "src": "10136:10:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27891,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10136:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10117:30:74"
            },
            "returnParameters": {
              "id": 27894,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10161:0:74"
            },
            "scope": 27939,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 27938,
            "nodeType": "FunctionDefinition",
            "src": "10309:212:74",
            "nodes": [],
            "body": {
              "id": 27937,
              "nodeType": "Block",
              "src": "10380:141:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    27921,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27921,
                      "mutability": "mutable",
                      "name": "status",
                      "nameLocation": "10396:6:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 27937,
                      "src": "10391:11:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 27920,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "10391:4:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 27934,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "6c6f6728737472696e672c737472696e6729",
                            "id": 27929,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10468:20:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_4b5c4277d556d03fbf5ee534fba41dc13982b44f2fa82f1d48fdd8b5b5b692ac",
                              "typeString": "literal_string \"log(string,string)\""
                            },
                            "value": "log(string,string)"
                          },
                          {
                            "id": 27930,
                            "name": "p0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27915,
                            "src": "10490:2:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "id": 27931,
                            "name": "p1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27917,
                            "src": "10494:2:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_4b5c4277d556d03fbf5ee534fba41dc13982b44f2fa82f1d48fdd8b5b5b692ac",
                              "typeString": "literal_string \"log(string,string)\""
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
                            "id": 27927,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "10444:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 27928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "10448:19:74",
                          "memberName": "encodeWithSignature",
                          "nodeType": "MemberAccess",
                          "src": "10444:23:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (string memory) pure returns (bytes memory)"
                          }
                        },
                        "id": 27932,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10444:53:74",
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
                      "expression": {
                        "arguments": [
                          {
                            "id": 27924,
                            "name": "CONSOLE2_ADDRESS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27124,
                            "src": "10415:16:74",
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
                          "id": 27923,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "10407:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 27922,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "10407:7:74",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 27925,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10407:25:74",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 27926,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10433:10:74",
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "10407:36:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 27933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10407:91:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10390:108:74"
                },
                {
                  "expression": {
                    "id": 27935,
                    "name": "status",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27921,
                    "src": "10508:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27936,
                  "nodeType": "ExpressionStatement",
                  "src": "10508:6:74"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "console2_log",
            "nameLocation": "10318:12:74",
            "parameters": {
              "id": 27918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27915,
                  "mutability": "mutable",
                  "name": "p0",
                  "nameLocation": "10345:2:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27938,
                  "src": "10331:16:74",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27914,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10331:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27917,
                  "mutability": "mutable",
                  "name": "p1",
                  "nameLocation": "10363:2:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 27938,
                  "src": "10349:16:74",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27916,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10349:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10330:36:74"
            },
            "returnParameters": {
              "id": 27919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10380:0:74"
            },
            "scope": 27939,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "StdUtils",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          27939
        ],
        "name": "StdUtils",
        "nameLocation": "210:8:74",
        "scope": 27940,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 74
} as const;
