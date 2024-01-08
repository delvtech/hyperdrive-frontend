export const SafeTransferLib = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c4fbf7092d538c055ead602a62a110601fc4ca2b53568b53cef73a25ba92c6e764736f6c63430008130033",
    "sourceMap": "586:5368:99:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;586:5368:99;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c4fbf7092d538c055ead602a62a110601fc4ca2b53568b53cef73a25ba92c6e764736f6c63430008130033",
    "sourceMap": "586:5368:99:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\",\"details\":\"Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe ETH and ERC20 transfer library that gracefully handles missing return values.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/SafeTransferLib.sol\":\"SafeTransferLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
        "lib/solmate/src/utils/SafeTransferLib.sol": "SafeTransferLib"
      },
      "libraries": {}
    },
    "sources": {
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/SafeTransferLib.sol": {
        "keccak256": "0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a",
        "urls": [
          "bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4",
          "dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/solmate/src/utils/SafeTransferLib.sol",
    "id": 64000,
    "exportedSymbols": {
      "ERC20": [
        63690
      ],
      "SafeTransferLib": [
        63999
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:5913:99",
    "nodes": [
      {
        "id": 63916,
        "nodeType": "PragmaDirective",
        "src": "42:24:99",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 63918,
        "nodeType": "ImportDirective",
        "src": "68:42:99",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "../tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 64000,
        "sourceUnit": 63691,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63917,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63690,
              "src": "76:5:99",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63999,
        "nodeType": "ContractDefinition",
        "src": "586:5368:99",
        "nodes": [
          {
            "id": 63936,
            "nodeType": "FunctionDefinition",
            "src": "799:339:99",
            "nodes": [],
            "body": {
              "id": 63935,
              "nodeType": "Block",
              "src": "861:277:99",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    63927
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63927,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "876:7:99",
                      "nodeType": "VariableDeclaration",
                      "scope": 63935,
                      "src": "871:12:99",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 63926,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "871:4:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63928,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "871:12:99"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "946:136:99",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1026:46:99",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nodeType": "YulIdentifier",
                                "src": "1042:3:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1042:5:99"
                            },
                            {
                              "name": "to",
                              "nodeType": "YulIdentifier",
                              "src": "1049:2:99"
                            },
                            {
                              "name": "amount",
                              "nodeType": "YulIdentifier",
                              "src": "1053:6:99"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1061:1:99",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1064:1:99",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1067:1:99",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1070:1:99",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nodeType": "YulIdentifier",
                            "src": "1037:4:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1037:35:99"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nodeType": "YulIdentifier",
                            "src": "1026:7:99"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63923,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1053:6:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63927,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1026:7:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63921,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1049:2:99",
                      "valueSize": 1
                    }
                  ],
                  "id": 63929,
                  "nodeType": "InlineAssembly",
                  "src": "937:145:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63931,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63927,
                        "src": "1100:7:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4554485f5452414e534645525f4641494c4544",
                        "id": 63932,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1109:21:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_d383913ea1996930a2623a0d739b8fc033c734c1d71d4759d3ccba1d3a719c29",
                          "typeString": "literal_string \"ETH_TRANSFER_FAILED\""
                        },
                        "value": "ETH_TRANSFER_FAILED"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_d383913ea1996930a2623a0d739b8fc033c734c1d71d4759d3ccba1d3a719c29",
                          "typeString": "literal_string \"ETH_TRANSFER_FAILED\""
                        }
                      ],
                      "id": 63930,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1092:7:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1092:39:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63934,
                  "nodeType": "ExpressionStatement",
                  "src": "1092:39:99"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferETH",
            "nameLocation": "808:15:99",
            "parameters": {
              "id": 63924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63921,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "832:2:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63936,
                  "src": "824:10:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63920,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "824:7:99",
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
                  "id": 63923,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "844:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63936,
                  "src": "836:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63922,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "836:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "823:28:99"
            },
            "returnParameters": {
              "id": 63925,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "861:0:99"
            },
            "scope": 63999,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63958,
            "nodeType": "FunctionDefinition",
            "src": "1328:1616:99",
            "nodes": [],
            "body": {
              "id": 63957,
              "nodeType": "Block",
              "src": "1456:1488:99",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    63949
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63949,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "1471:7:99",
                      "nodeType": "VariableDeclaration",
                      "scope": 63957,
                      "src": "1466:12:99",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 63948,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1466:4:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63950,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1466:12:99"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1541:1346:99",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1605:36:99",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1636:4:99",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1630:5:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1630:11:99"
                        },
                        "variables": [
                          {
                            "name": "freeMemoryPointer",
                            "nodeType": "YulTypedName",
                            "src": "1609:17:99",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "freeMemoryPointer",
                              "nodeType": "YulIdentifier",
                              "src": "1759:17:99"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1778:66:99",
                              "type": "",
                              "value": "0x23b872dd00000000000000000000000000000000000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1752:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1752:93:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1752:93:99"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "1869:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1888:1:99",
                                  "type": "",
                                  "value": "4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1865:3:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1865:25:99"
                            },
                            {
                              "name": "from",
                              "nodeType": "YulIdentifier",
                              "src": "1892:4:99"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1858:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1858:39:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1858:39:99"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "1952:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1971:2:99",
                                  "type": "",
                                  "value": "36"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1948:3:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1948:26:99"
                            },
                            {
                              "name": "to",
                              "nodeType": "YulIdentifier",
                              "src": "1976:2:99"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1941:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1941:38:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1941:38:99"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "2032:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2051:2:99",
                                  "type": "",
                                  "value": "68"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2028:3:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2028:26:99"
                            },
                            {
                              "name": "amount",
                              "nodeType": "YulIdentifier",
                              "src": "2056:6:99"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2021:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2021:42:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2021:42:99"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2110:767:99",
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
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "2337:1:99",
                                              "type": "",
                                              "value": "0"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "2331:5:99"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2331:8:99"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2341:1:99",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "2328:2:99"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2328:15:99"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nodeType": "YulIdentifier",
                                            "src": "2348:14:99"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2348:16:99"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2366:2:99",
                                          "type": "",
                                          "value": "31"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "gt",
                                        "nodeType": "YulIdentifier",
                                        "src": "2345:2:99"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2345:24:99"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "2324:3:99"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2324:46:99"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nodeType": "YulIdentifier",
                                        "src": "2379:14:99"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2379:16:99"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2372:6:99"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2372:24:99"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "2321:2:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2321:76:99"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nodeType": "YulIdentifier",
                                    "src": "2816:3:99"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2816:5:99"
                                },
                                {
                                  "name": "token",
                                  "nodeType": "YulIdentifier",
                                  "src": "2823:5:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2830:1:99",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "2833:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2852:3:99",
                                  "type": "",
                                  "value": "100"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2857:1:99",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2860:2:99",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nodeType": "YulIdentifier",
                                "src": "2811:4:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2811:52:99"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2121:3:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2121:756:99"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nodeType": "YulIdentifier",
                            "src": "2110:7:99"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63945,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2056:6:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63941,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1892:4:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63949,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2110:7:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63943,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1976:2:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63939,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2823:5:99",
                      "valueSize": 1
                    }
                  ],
                  "id": 63951,
                  "nodeType": "InlineAssembly",
                  "src": "1532:1355:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63953,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63949,
                        "src": "2905:7:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5452414e534645525f46524f4d5f4641494c4544",
                        "id": 63954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2914:22:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_77631768048ee92f9dcf4b9b9d762877d6b9723214862c733f0596708fc219b7",
                          "typeString": "literal_string \"TRANSFER_FROM_FAILED\""
                        },
                        "value": "TRANSFER_FROM_FAILED"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_77631768048ee92f9dcf4b9b9d762877d6b9723214862c733f0596708fc219b7",
                          "typeString": "literal_string \"TRANSFER_FROM_FAILED\""
                        }
                      ],
                      "id": 63952,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2897:7:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2897:40:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63956,
                  "nodeType": "ExpressionStatement",
                  "src": "2897:40:99"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "1337:16:99",
            "parameters": {
              "id": 63946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63939,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "1369:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63958,
                  "src": "1363:11:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63690",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 63938,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63937,
                      "name": "ERC20",
                      "nameLocations": [
                        "1363:5:99"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63690,
                      "src": "1363:5:99"
                    },
                    "referencedDeclaration": 63690,
                    "src": "1363:5:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63690",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63941,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1392:4:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63958,
                  "src": "1384:12:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63940,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1384:7:99",
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
                  "id": 63943,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1414:2:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63958,
                  "src": "1406:10:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63942,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1406:7:99",
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
                  "id": 63945,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1434:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63958,
                  "src": "1426:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63944,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1426:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1353:93:99"
            },
            "returnParameters": {
              "id": 63947,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1456:0:99"
            },
            "scope": 63999,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63978,
            "nodeType": "FunctionDefinition",
            "src": "2950:1499:99",
            "nodes": [],
            "body": {
              "id": 63977,
              "nodeType": "Block",
              "src": "3052:1397:99",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    63969
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63969,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "3067:7:99",
                      "nodeType": "VariableDeclaration",
                      "scope": 63977,
                      "src": "3062:12:99",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 63968,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3062:4:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63970,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3062:12:99"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "3137:1260:99",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3201:36:99",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3232:4:99",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "3226:5:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3226:11:99"
                        },
                        "variables": [
                          {
                            "name": "freeMemoryPointer",
                            "nodeType": "YulTypedName",
                            "src": "3205:17:99",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "freeMemoryPointer",
                              "nodeType": "YulIdentifier",
                              "src": "3355:17:99"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3374:66:99",
                              "type": "",
                              "value": "0xa9059cbb00000000000000000000000000000000000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3348:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3348:93:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3348:93:99"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "3465:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3484:1:99",
                                  "type": "",
                                  "value": "4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3461:3:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3461:25:99"
                            },
                            {
                              "name": "to",
                              "nodeType": "YulIdentifier",
                              "src": "3488:2:99"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3454:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3454:37:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3454:37:99"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "3544:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3563:2:99",
                                  "type": "",
                                  "value": "36"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3540:3:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3540:26:99"
                            },
                            {
                              "name": "amount",
                              "nodeType": "YulIdentifier",
                              "src": "3568:6:99"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3533:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3533:42:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3533:42:99"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3622:765:99",
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
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "3849:1:99",
                                              "type": "",
                                              "value": "0"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "3843:5:99"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3843:8:99"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3853:1:99",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "3840:2:99"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3840:15:99"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nodeType": "YulIdentifier",
                                            "src": "3860:14:99"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3860:16:99"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3878:2:99",
                                          "type": "",
                                          "value": "31"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "gt",
                                        "nodeType": "YulIdentifier",
                                        "src": "3857:2:99"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3857:24:99"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "3836:3:99"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3836:46:99"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nodeType": "YulIdentifier",
                                        "src": "3891:14:99"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3891:16:99"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "3884:6:99"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3884:24:99"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "3833:2:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3833:76:99"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nodeType": "YulIdentifier",
                                    "src": "4327:3:99"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4327:5:99"
                                },
                                {
                                  "name": "token",
                                  "nodeType": "YulIdentifier",
                                  "src": "4334:5:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4341:1:99",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "4344:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4363:2:99",
                                  "type": "",
                                  "value": "68"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4367:1:99",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4370:2:99",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nodeType": "YulIdentifier",
                                "src": "4322:4:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4322:51:99"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "3633:3:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3633:754:99"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nodeType": "YulIdentifier",
                            "src": "3622:7:99"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63965,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3568:6:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63969,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3622:7:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63963,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3488:2:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63961,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4334:5:99",
                      "valueSize": 1
                    }
                  ],
                  "id": 63971,
                  "nodeType": "InlineAssembly",
                  "src": "3128:1269:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63973,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63969,
                        "src": "4415:7:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5452414e534645525f4641494c4544",
                        "id": 63974,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4424:17:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8bf8f0d780f13740660fe63233b17f96cb1813889e7dce4121e55b817b367b72",
                          "typeString": "literal_string \"TRANSFER_FAILED\""
                        },
                        "value": "TRANSFER_FAILED"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_8bf8f0d780f13740660fe63233b17f96cb1813889e7dce4121e55b817b367b72",
                          "typeString": "literal_string \"TRANSFER_FAILED\""
                        }
                      ],
                      "id": 63972,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4407:7:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63975,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4407:35:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63976,
                  "nodeType": "ExpressionStatement",
                  "src": "4407:35:99"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransfer",
            "nameLocation": "2959:12:99",
            "parameters": {
              "id": 63966,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63961,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "2987:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63978,
                  "src": "2981:11:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63690",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 63960,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63959,
                      "name": "ERC20",
                      "nameLocations": [
                        "2981:5:99"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63690,
                      "src": "2981:5:99"
                    },
                    "referencedDeclaration": 63690,
                    "src": "2981:5:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63690",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63963,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3010:2:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63978,
                  "src": "3002:10:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63962,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3002:7:99",
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
                  "id": 63965,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3030:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63978,
                  "src": "3022:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63964,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3022:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2971:71:99"
            },
            "returnParameters": {
              "id": 63967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3052:0:99"
            },
            "scope": 63999,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63998,
            "nodeType": "FunctionDefinition",
            "src": "4455:1497:99",
            "nodes": [],
            "body": {
              "id": 63997,
              "nodeType": "Block",
              "src": "4556:1396:99",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    63989
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63989,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "4571:7:99",
                      "nodeType": "VariableDeclaration",
                      "scope": 63997,
                      "src": "4566:12:99",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 63988,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4566:4:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63990,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4566:12:99"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "4641:1260:99",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4705:36:99",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4736:4:99",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "4730:5:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4730:11:99"
                        },
                        "variables": [
                          {
                            "name": "freeMemoryPointer",
                            "nodeType": "YulTypedName",
                            "src": "4709:17:99",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "freeMemoryPointer",
                              "nodeType": "YulIdentifier",
                              "src": "4859:17:99"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4878:66:99",
                              "type": "",
                              "value": "0x095ea7b300000000000000000000000000000000000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4852:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4852:93:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4852:93:99"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "4969:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4988:1:99",
                                  "type": "",
                                  "value": "4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4965:3:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4965:25:99"
                            },
                            {
                              "name": "to",
                              "nodeType": "YulIdentifier",
                              "src": "4992:2:99"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4958:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4958:37:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4958:37:99"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "5048:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5067:2:99",
                                  "type": "",
                                  "value": "36"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5044:3:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5044:26:99"
                            },
                            {
                              "name": "amount",
                              "nodeType": "YulIdentifier",
                              "src": "5072:6:99"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5037:6:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5037:42:99"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5037:42:99"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5126:765:99",
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
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "5353:1:99",
                                              "type": "",
                                              "value": "0"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "5347:5:99"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "5347:8:99"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "5357:1:99",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "5344:2:99"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5344:15:99"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nodeType": "YulIdentifier",
                                            "src": "5364:14:99"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "5364:16:99"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "5382:2:99",
                                          "type": "",
                                          "value": "31"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "gt",
                                        "nodeType": "YulIdentifier",
                                        "src": "5361:2:99"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5361:24:99"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "5340:3:99"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5340:46:99"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nodeType": "YulIdentifier",
                                        "src": "5395:14:99"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5395:16:99"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "5388:6:99"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5388:24:99"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "5337:2:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5337:76:99"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nodeType": "YulIdentifier",
                                    "src": "5831:3:99"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5831:5:99"
                                },
                                {
                                  "name": "token",
                                  "nodeType": "YulIdentifier",
                                  "src": "5838:5:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5845:1:99",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "5848:17:99"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5867:2:99",
                                  "type": "",
                                  "value": "68"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5871:1:99",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5874:2:99",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nodeType": "YulIdentifier",
                                "src": "5826:4:99"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5826:51:99"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "5137:3:99"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5137:754:99"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nodeType": "YulIdentifier",
                            "src": "5126:7:99"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 63985,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5072:6:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63989,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5126:7:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63983,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4992:2:99",
                      "valueSize": 1
                    },
                    {
                      "declaration": 63981,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5838:5:99",
                      "valueSize": 1
                    }
                  ],
                  "id": 63991,
                  "nodeType": "InlineAssembly",
                  "src": "4632:1269:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63993,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63989,
                        "src": "5919:7:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "415050524f56455f4641494c4544",
                        "id": 63994,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5928:16:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cd400c5237ae346977ee020ef8d0d26a880c07edf7eba69a8848f0d31e9a88f2",
                          "typeString": "literal_string \"APPROVE_FAILED\""
                        },
                        "value": "APPROVE_FAILED"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cd400c5237ae346977ee020ef8d0d26a880c07edf7eba69a8848f0d31e9a88f2",
                          "typeString": "literal_string \"APPROVE_FAILED\""
                        }
                      ],
                      "id": 63992,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5911:7:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5911:34:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63996,
                  "nodeType": "ExpressionStatement",
                  "src": "5911:34:99"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeApprove",
            "nameLocation": "4464:11:99",
            "parameters": {
              "id": 63986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63981,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "4491:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63998,
                  "src": "4485:11:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63690",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 63980,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63979,
                      "name": "ERC20",
                      "nameLocations": [
                        "4485:5:99"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63690,
                      "src": "4485:5:99"
                    },
                    "referencedDeclaration": 63690,
                    "src": "4485:5:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63690",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63983,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4514:2:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63998,
                  "src": "4506:10:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63982,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4506:7:99",
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
                  "id": 63985,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4534:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63998,
                  "src": "4526:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63984,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4526:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4475:71:99"
            },
            "returnParameters": {
              "id": 63987,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4556:0:99"
            },
            "scope": 63999,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SafeTransferLib",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 63919,
          "nodeType": "StructuredDocumentation",
          "src": "112:474:99",
          "text": "@notice Safe ETH and ERC20 transfer library that gracefully handles missing return values.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\n @dev Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.\n @dev Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          63999
        ],
        "name": "SafeTransferLib",
        "nameLocation": "594:15:99",
        "scope": 64000,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 99
} as const;
