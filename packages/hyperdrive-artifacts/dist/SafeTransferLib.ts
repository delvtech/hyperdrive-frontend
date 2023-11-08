export const SafeTransferLib = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122066bc8404bf1e96f47746df9254e96be35901673cfdae934aeb6f8211293c34a464736f6c63430008130033",
    "sourceMap": "586:5368:104:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;586:5368:104;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122066bc8404bf1e96f47746df9254e96be35901673cfdae934aeb6f8211293c34a464736f6c63430008130033",
    "sourceMap": "586:5368:104:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\",\"details\":\"Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe ETH and ERC20 transfer library that gracefully handles missing return values.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/SafeTransferLib.sol\":\"SafeTransferLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
    "id": 64266,
    "exportedSymbols": {
      "ERC20": [
        63956
      ],
      "SafeTransferLib": [
        64265
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:5913:104",
    "nodes": [
      {
        "id": 64182,
        "nodeType": "PragmaDirective",
        "src": "42:24:104",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 64184,
        "nodeType": "ImportDirective",
        "src": "68:42:104",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "../tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 64266,
        "sourceUnit": 63957,
        "symbolAliases": [
          {
            "foreign": {
              "id": 64183,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63956,
              "src": "76:5:104",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 64265,
        "nodeType": "ContractDefinition",
        "src": "586:5368:104",
        "nodes": [
          {
            "id": 64202,
            "nodeType": "FunctionDefinition",
            "src": "799:339:104",
            "nodes": [],
            "body": {
              "id": 64201,
              "nodeType": "Block",
              "src": "861:277:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    64193
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 64193,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "876:7:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 64201,
                      "src": "871:12:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 64192,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "871:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 64194,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "871:12:104"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "946:136:104",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1026:46:104",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nodeType": "YulIdentifier",
                                "src": "1042:3:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1042:5:104"
                            },
                            {
                              "name": "to",
                              "nodeType": "YulIdentifier",
                              "src": "1049:2:104"
                            },
                            {
                              "name": "amount",
                              "nodeType": "YulIdentifier",
                              "src": "1053:6:104"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1061:1:104",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1064:1:104",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1067:1:104",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1070:1:104",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nodeType": "YulIdentifier",
                            "src": "1037:4:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1037:35:104"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nodeType": "YulIdentifier",
                            "src": "1026:7:104"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64189,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1053:6:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64193,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1026:7:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1049:2:104",
                      "valueSize": 1
                    }
                  ],
                  "id": 64195,
                  "nodeType": "InlineAssembly",
                  "src": "937:145:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 64197,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64193,
                        "src": "1100:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4554485f5452414e534645525f4641494c4544",
                        "id": 64198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1109:21:104",
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
                      "id": 64196,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1092:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 64199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1092:39:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 64200,
                  "nodeType": "ExpressionStatement",
                  "src": "1092:39:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferETH",
            "nameLocation": "808:15:104",
            "parameters": {
              "id": 64190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64187,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "832:2:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64202,
                  "src": "824:10:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64186,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "824:7:104",
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
                  "id": 64189,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "844:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64202,
                  "src": "836:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "836:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "823:28:104"
            },
            "returnParameters": {
              "id": 64191,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "861:0:104"
            },
            "scope": 64265,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64224,
            "nodeType": "FunctionDefinition",
            "src": "1328:1616:104",
            "nodes": [],
            "body": {
              "id": 64223,
              "nodeType": "Block",
              "src": "1456:1488:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    64215
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 64215,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "1471:7:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 64223,
                      "src": "1466:12:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 64214,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1466:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 64216,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1466:12:104"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1541:1346:104",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1605:36:104",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1636:4:104",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1630:5:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1630:11:104"
                        },
                        "variables": [
                          {
                            "name": "freeMemoryPointer",
                            "nodeType": "YulTypedName",
                            "src": "1609:17:104",
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
                              "src": "1759:17:104"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1778:66:104",
                              "type": "",
                              "value": "0x23b872dd00000000000000000000000000000000000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1752:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1752:93:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1752:93:104"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "1869:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1888:1:104",
                                  "type": "",
                                  "value": "4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1865:3:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1865:25:104"
                            },
                            {
                              "name": "from",
                              "nodeType": "YulIdentifier",
                              "src": "1892:4:104"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1858:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1858:39:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1858:39:104"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "1952:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1971:2:104",
                                  "type": "",
                                  "value": "36"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1948:3:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1948:26:104"
                            },
                            {
                              "name": "to",
                              "nodeType": "YulIdentifier",
                              "src": "1976:2:104"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1941:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1941:38:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1941:38:104"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "2032:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2051:2:104",
                                  "type": "",
                                  "value": "68"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2028:3:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2028:26:104"
                            },
                            {
                              "name": "amount",
                              "nodeType": "YulIdentifier",
                              "src": "2056:6:104"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2021:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2021:42:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2021:42:104"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2110:767:104",
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
                                              "src": "2337:1:104",
                                              "type": "",
                                              "value": "0"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "2331:5:104"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2331:8:104"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2341:1:104",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "2328:2:104"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2328:15:104"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nodeType": "YulIdentifier",
                                            "src": "2348:14:104"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2348:16:104"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2366:2:104",
                                          "type": "",
                                          "value": "31"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "gt",
                                        "nodeType": "YulIdentifier",
                                        "src": "2345:2:104"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2345:24:104"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "2324:3:104"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2324:46:104"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nodeType": "YulIdentifier",
                                        "src": "2379:14:104"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2379:16:104"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2372:6:104"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2372:24:104"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "2321:2:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2321:76:104"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nodeType": "YulIdentifier",
                                    "src": "2816:3:104"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2816:5:104"
                                },
                                {
                                  "name": "token",
                                  "nodeType": "YulIdentifier",
                                  "src": "2823:5:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2830:1:104",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "2833:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2852:3:104",
                                  "type": "",
                                  "value": "100"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2857:1:104",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2860:2:104",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nodeType": "YulIdentifier",
                                "src": "2811:4:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2811:52:104"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2121:3:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2121:756:104"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nodeType": "YulIdentifier",
                            "src": "2110:7:104"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64211,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2056:6:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64207,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1892:4:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64215,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2110:7:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64209,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1976:2:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64205,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2823:5:104",
                      "valueSize": 1
                    }
                  ],
                  "id": 64217,
                  "nodeType": "InlineAssembly",
                  "src": "1532:1355:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 64219,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64215,
                        "src": "2905:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5452414e534645525f46524f4d5f4641494c4544",
                        "id": 64220,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2914:22:104",
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
                      "id": 64218,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2897:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 64221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2897:40:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 64222,
                  "nodeType": "ExpressionStatement",
                  "src": "2897:40:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "1337:16:104",
            "parameters": {
              "id": 64212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64205,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "1369:5:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64224,
                  "src": "1363:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63956",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 64204,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 64203,
                      "name": "ERC20",
                      "nameLocations": [
                        "1363:5:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63956,
                      "src": "1363:5:104"
                    },
                    "referencedDeclaration": 63956,
                    "src": "1363:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63956",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64207,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1392:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64224,
                  "src": "1384:12:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64206,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1384:7:104",
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
                  "id": 64209,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1414:2:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64224,
                  "src": "1406:10:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64208,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1406:7:104",
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
                  "id": 64211,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1434:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64224,
                  "src": "1426:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64210,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1426:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1353:93:104"
            },
            "returnParameters": {
              "id": 64213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1456:0:104"
            },
            "scope": 64265,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64244,
            "nodeType": "FunctionDefinition",
            "src": "2950:1499:104",
            "nodes": [],
            "body": {
              "id": 64243,
              "nodeType": "Block",
              "src": "3052:1397:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    64235
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 64235,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "3067:7:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 64243,
                      "src": "3062:12:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 64234,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3062:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 64236,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3062:12:104"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "3137:1260:104",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3201:36:104",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3232:4:104",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "3226:5:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3226:11:104"
                        },
                        "variables": [
                          {
                            "name": "freeMemoryPointer",
                            "nodeType": "YulTypedName",
                            "src": "3205:17:104",
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
                              "src": "3355:17:104"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3374:66:104",
                              "type": "",
                              "value": "0xa9059cbb00000000000000000000000000000000000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3348:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3348:93:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3348:93:104"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "3465:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3484:1:104",
                                  "type": "",
                                  "value": "4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3461:3:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3461:25:104"
                            },
                            {
                              "name": "to",
                              "nodeType": "YulIdentifier",
                              "src": "3488:2:104"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3454:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3454:37:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3454:37:104"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "3544:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3563:2:104",
                                  "type": "",
                                  "value": "36"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3540:3:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3540:26:104"
                            },
                            {
                              "name": "amount",
                              "nodeType": "YulIdentifier",
                              "src": "3568:6:104"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3533:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3533:42:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3533:42:104"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3622:765:104",
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
                                              "src": "3849:1:104",
                                              "type": "",
                                              "value": "0"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "3843:5:104"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3843:8:104"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3853:1:104",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "3840:2:104"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3840:15:104"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nodeType": "YulIdentifier",
                                            "src": "3860:14:104"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3860:16:104"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3878:2:104",
                                          "type": "",
                                          "value": "31"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "gt",
                                        "nodeType": "YulIdentifier",
                                        "src": "3857:2:104"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3857:24:104"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "3836:3:104"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3836:46:104"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nodeType": "YulIdentifier",
                                        "src": "3891:14:104"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3891:16:104"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "3884:6:104"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3884:24:104"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "3833:2:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3833:76:104"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nodeType": "YulIdentifier",
                                    "src": "4327:3:104"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4327:5:104"
                                },
                                {
                                  "name": "token",
                                  "nodeType": "YulIdentifier",
                                  "src": "4334:5:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4341:1:104",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "4344:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4363:2:104",
                                  "type": "",
                                  "value": "68"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4367:1:104",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4370:2:104",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nodeType": "YulIdentifier",
                                "src": "4322:4:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4322:51:104"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "3633:3:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3633:754:104"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nodeType": "YulIdentifier",
                            "src": "3622:7:104"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64231,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3568:6:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64235,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3622:7:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64229,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3488:2:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64227,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4334:5:104",
                      "valueSize": 1
                    }
                  ],
                  "id": 64237,
                  "nodeType": "InlineAssembly",
                  "src": "3128:1269:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 64239,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64235,
                        "src": "4415:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5452414e534645525f4641494c4544",
                        "id": 64240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4424:17:104",
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
                      "id": 64238,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4407:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 64241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4407:35:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 64242,
                  "nodeType": "ExpressionStatement",
                  "src": "4407:35:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransfer",
            "nameLocation": "2959:12:104",
            "parameters": {
              "id": 64232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64227,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "2987:5:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64244,
                  "src": "2981:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63956",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 64226,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 64225,
                      "name": "ERC20",
                      "nameLocations": [
                        "2981:5:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63956,
                      "src": "2981:5:104"
                    },
                    "referencedDeclaration": 63956,
                    "src": "2981:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63956",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64229,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3010:2:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64244,
                  "src": "3002:10:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64228,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3002:7:104",
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
                  "id": 64231,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3030:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64244,
                  "src": "3022:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64230,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3022:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2971:71:104"
            },
            "returnParameters": {
              "id": 64233,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3052:0:104"
            },
            "scope": 64265,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 64264,
            "nodeType": "FunctionDefinition",
            "src": "4455:1497:104",
            "nodes": [],
            "body": {
              "id": 64263,
              "nodeType": "Block",
              "src": "4556:1396:104",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    64255
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 64255,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "4571:7:104",
                      "nodeType": "VariableDeclaration",
                      "scope": 64263,
                      "src": "4566:12:104",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 64254,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4566:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 64256,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4566:12:104"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "4641:1260:104",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4705:36:104",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4736:4:104",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "4730:5:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4730:11:104"
                        },
                        "variables": [
                          {
                            "name": "freeMemoryPointer",
                            "nodeType": "YulTypedName",
                            "src": "4709:17:104",
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
                              "src": "4859:17:104"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4878:66:104",
                              "type": "",
                              "value": "0x095ea7b300000000000000000000000000000000000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4852:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4852:93:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4852:93:104"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "4969:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4988:1:104",
                                  "type": "",
                                  "value": "4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4965:3:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4965:25:104"
                            },
                            {
                              "name": "to",
                              "nodeType": "YulIdentifier",
                              "src": "4992:2:104"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4958:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4958:37:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4958:37:104"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "5048:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5067:2:104",
                                  "type": "",
                                  "value": "36"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5044:3:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5044:26:104"
                            },
                            {
                              "name": "amount",
                              "nodeType": "YulIdentifier",
                              "src": "5072:6:104"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5037:6:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5037:42:104"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5037:42:104"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5126:765:104",
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
                                              "src": "5353:1:104",
                                              "type": "",
                                              "value": "0"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "5347:5:104"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "5347:8:104"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "5357:1:104",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nodeType": "YulIdentifier",
                                        "src": "5344:2:104"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5344:15:104"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nodeType": "YulIdentifier",
                                            "src": "5364:14:104"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "5364:16:104"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "5382:2:104",
                                          "type": "",
                                          "value": "31"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "gt",
                                        "nodeType": "YulIdentifier",
                                        "src": "5361:2:104"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5361:24:104"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "5340:3:104"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5340:46:104"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nodeType": "YulIdentifier",
                                        "src": "5395:14:104"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "5395:16:104"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "5388:6:104"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5388:24:104"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "5337:2:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5337:76:104"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nodeType": "YulIdentifier",
                                    "src": "5831:3:104"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5831:5:104"
                                },
                                {
                                  "name": "token",
                                  "nodeType": "YulIdentifier",
                                  "src": "5838:5:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5845:1:104",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "name": "freeMemoryPointer",
                                  "nodeType": "YulIdentifier",
                                  "src": "5848:17:104"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5867:2:104",
                                  "type": "",
                                  "value": "68"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5871:1:104",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5874:2:104",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nodeType": "YulIdentifier",
                                "src": "5826:4:104"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5826:51:104"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "5137:3:104"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5137:754:104"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nodeType": "YulIdentifier",
                            "src": "5126:7:104"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 64251,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5072:6:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64255,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5126:7:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64249,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4992:2:104",
                      "valueSize": 1
                    },
                    {
                      "declaration": 64247,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5838:5:104",
                      "valueSize": 1
                    }
                  ],
                  "id": 64257,
                  "nodeType": "InlineAssembly",
                  "src": "4632:1269:104"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 64259,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 64255,
                        "src": "5919:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "415050524f56455f4641494c4544",
                        "id": 64260,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5928:16:104",
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
                      "id": 64258,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5911:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 64261,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5911:34:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 64262,
                  "nodeType": "ExpressionStatement",
                  "src": "5911:34:104"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeApprove",
            "nameLocation": "4464:11:104",
            "parameters": {
              "id": 64252,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64247,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "4491:5:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64264,
                  "src": "4485:11:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63956",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 64246,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 64245,
                      "name": "ERC20",
                      "nameLocations": [
                        "4485:5:104"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63956,
                      "src": "4485:5:104"
                    },
                    "referencedDeclaration": 63956,
                    "src": "4485:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63956",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64249,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4514:2:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64264,
                  "src": "4506:10:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64248,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4506:7:104",
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
                  "id": 64251,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4534:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 64264,
                  "src": "4526:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64250,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4526:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4475:71:104"
            },
            "returnParameters": {
              "id": 64253,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4556:0:104"
            },
            "scope": 64265,
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
          "id": 64185,
          "nodeType": "StructuredDocumentation",
          "src": "112:474:104",
          "text": "@notice Safe ETH and ERC20 transfer library that gracefully handles missing return values.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\n @dev Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.\n @dev Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          64265
        ],
        "name": "SafeTransferLib",
        "nameLocation": "594:15:104",
        "scope": 64266,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 104
} as const;
