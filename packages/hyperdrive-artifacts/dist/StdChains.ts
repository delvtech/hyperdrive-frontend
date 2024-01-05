export const StdChains = 
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"StdChains provides information about EVM compatible chains that can be used in scripts/tests. For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the alias used in this contract, which can be found as the first argument to the `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function. There are two main ways to use this contract:   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or      `setChain(string memory chainAlias, Chain memory chain)`   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`. The first time either of those are used, chains are initialized with the default set of RPC URLs. This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in `defaultRpcUrls`. The `setChain` function is straightforward, and it simply saves off the given chain data. The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say we want to retrieve the RPC URL for `mainnet`:   - If you have specified data with `setChain`, it will return that.   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it     is valid (e.g. a URL is specified, or an environment variable is given and exists).   - If neither of the above conditions is met, the default data is returned. Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdChains.sol\":\"StdChains\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
        "lib/forge-std/src/StdChains.sol": "StdChains"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/StdChains.sol": {
        "keccak256": "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d",
        "urls": [
          "bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4",
          "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"
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
    "absolutePath": "lib/forge-std/src/StdChains.sol",
    "id": 23920,
    "exportedSymbols": {
      "StdChains": [
        23919
      ],
      "VmSafe": [
        32405
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:10885:77",
    "nodes": [
      {
        "id": 23201,
        "nodeType": "PragmaDirective",
        "src": "32:31:77",
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
        "id": 23203,
        "nodeType": "ImportDirective",
        "src": "65:32:77",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 23920,
        "sourceUnit": 32878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 23202,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 32405,
              "src": "73:6:77",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 23919,
        "nodeType": "ContractDefinition",
        "src": "1899:9017:77",
        "nodes": [
          {
            "id": 23221,
            "nodeType": "VariableDeclaration",
            "src": "1933:92:77",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "1957:2:77",
            "scope": 23919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$32405",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 23206,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 23205,
                "name": "VmSafe",
                "nameLocations": [
                  "1933:6:77"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 32405,
                "src": "1933:6:77"
              },
              "referencedDeclaration": 32405,
              "src": "1933:6:77",
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
                                  "id": 23215,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2003:17:77",
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
                                "id": 23214,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "1993:9:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 23216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1993:28:77",
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
                            "id": 23213,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1985:7:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 23212,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "1985:7:77",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 23217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1985:37:77",
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
                        "id": 23211,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1977:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 23210,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "1977:7:77",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 23218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1977:46:77",
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
                    "id": 23209,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "1969:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 23208,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1969:7:77",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 23219,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1969:55:77",
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
                "id": 23207,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 32405,
                "src": "1962:6:77",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$32405_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 23220,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1962:63:77",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$32405",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23223,
            "nodeType": "VariableDeclaration",
            "src": "2032:33:77",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "stdChainsInitialized",
            "nameLocation": "2045:20:77",
            "scope": 23919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 23222,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "2032:4:77",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23230,
            "nodeType": "StructDefinition",
            "src": "2072:93:77",
            "nodes": [],
            "canonicalName": "StdChains.ChainData",
            "members": [
              {
                "constant": false,
                "id": 23225,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "2106:4:77",
                "nodeType": "VariableDeclaration",
                "scope": 23230,
                "src": "2099:11:77",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 23224,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2099:6:77",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 23227,
                "mutability": "mutable",
                "name": "chainId",
                "nameLocation": "2128:7:77",
                "nodeType": "VariableDeclaration",
                "scope": 23230,
                "src": "2120:15:77",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 23226,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2120:7:77",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 23229,
                "mutability": "mutable",
                "name": "rpcUrl",
                "nameLocation": "2152:6:77",
                "nodeType": "VariableDeclaration",
                "scope": 23230,
                "src": "2145:13:77",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 23228,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2145:6:77",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ChainData",
            "nameLocation": "2079:9:77",
            "scope": 23919,
            "visibility": "public"
          },
          {
            "id": 23239,
            "nodeType": "StructDefinition",
            "src": "2171:598:77",
            "nodes": [],
            "canonicalName": "StdChains.Chain",
            "members": [
              {
                "constant": false,
                "id": 23232,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "2228:4:77",
                "nodeType": "VariableDeclaration",
                "scope": 23239,
                "src": "2221:11:77",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 23231,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2221:6:77",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 23234,
                "mutability": "mutable",
                "name": "chainId",
                "nameLocation": "2283:7:77",
                "nodeType": "VariableDeclaration",
                "scope": 23239,
                "src": "2275:15:77",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 23233,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2275:7:77",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 23236,
                "mutability": "mutable",
                "name": "chainAlias",
                "nameLocation": "2383:10:77",
                "nodeType": "VariableDeclaration",
                "scope": 23239,
                "src": "2376:17:77",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 23235,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2376:6:77",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 23238,
                "mutability": "mutable",
                "name": "rpcUrl",
                "nameLocation": "2756:6:77",
                "nodeType": "VariableDeclaration",
                "scope": 23239,
                "src": "2749:13:77",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 23237,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2749:6:77",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Chain",
            "nameLocation": "2178:5:77",
            "scope": 23919,
            "visibility": "public"
          },
          {
            "id": 23244,
            "nodeType": "VariableDeclaration",
            "src": "2873:39:77",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "chains",
            "nameLocation": "2906:6:77",
            "scope": 23919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$23239_storage_$",
              "typeString": "mapping(string => struct StdChains.Chain)"
            },
            "typeName": {
              "id": 23243,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 23240,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2881:6:77",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "2873:24:77",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$23239_storage_$",
                "typeString": "mapping(string => struct StdChains.Chain)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 23242,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 23241,
                  "name": "Chain",
                  "nameLocations": [
                    "2891:5:77"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 23239,
                  "src": "2891:5:77"
                },
                "referencedDeclaration": 23239,
                "src": "2891:5:77",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Chain_$23239_storage_ptr",
                  "typeString": "struct StdChains.Chain"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 23248,
            "nodeType": "VariableDeclaration",
            "src": "2978:48:77",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "defaultRpcUrls",
            "nameLocation": "3012:14:77",
            "scope": 23919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
              "typeString": "mapping(string => string)"
            },
            "typeName": {
              "id": 23247,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 23245,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2986:6:77",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "2978:25:77",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                "typeString": "mapping(string => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 23246,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2996:6:77",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 23252,
            "nodeType": "VariableDeclaration",
            "src": "3075:44:77",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "idToAlias",
            "nameLocation": "3110:9:77",
            "scope": 23919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 23251,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 23249,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "3083:7:77",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "3075:26:77",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 23250,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "3094:6:77",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 23255,
            "nodeType": "VariableDeclaration",
            "src": "3126:44:77",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "fallbackToDefaultRpcUrls",
            "nameLocation": "3139:24:77",
            "scope": 23919,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 23253,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "3126:4:77",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "hexValue": "74727565",
              "id": 23254,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3166:4:77",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "true"
            },
            "visibility": "private"
          },
          {
            "id": 23307,
            "nodeType": "FunctionDefinition",
            "src": "3255:524:77",
            "nodes": [],
            "body": {
              "id": 23306,
              "nodeType": "Block",
              "src": "3345:434:77",
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
                        "id": 23270,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 23266,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 23257,
                                "src": "3369:10:77",
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
                              "id": 23265,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3363:5:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 23264,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3363:5:77",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 23267,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3363:17:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 23268,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3381:6:77",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "3363:24:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 23269,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3391:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3363:29:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        "id": 23271,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3394:69:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3d920aad82cc068f1a73b0fb2c703d0169baa46c8c67097012e1aca0cc8c8b70",
                          "typeString": "literal_string \"StdChains getChain(string): Chain alias cannot be the empty string.\""
                        },
                        "value": "StdChains getChain(string): Chain alias cannot be the empty string."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3d920aad82cc068f1a73b0fb2c703d0169baa46c8c67097012e1aca0cc8c8b70",
                          "typeString": "literal_string \"StdChains getChain(string): Chain alias cannot be the empty string.\""
                        }
                      ],
                      "id": 23263,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3355:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 23272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3355:109:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23273,
                  "nodeType": "ExpressionStatement",
                  "src": "3355:109:77"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 23274,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23881,
                      "src": "3475:19:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 23275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3475:21:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23276,
                  "nodeType": "ExpressionStatement",
                  "src": "3475:21:77"
                },
                {
                  "expression": {
                    "id": 23281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23277,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23261,
                      "src": "3506:5:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 23278,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23244,
                        "src": "3514:6:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$23239_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 23280,
                      "indexExpression": {
                        "id": 23279,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23257,
                        "src": "3521:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3514:18:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "src": "3506:26:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 23282,
                  "nodeType": "ExpressionStatement",
                  "src": "3506:26:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 23287,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 23284,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23261,
                            "src": "3563:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                              "typeString": "struct StdChains.Chain memory"
                            }
                          },
                          "id": 23285,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3569:7:77",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23234,
                          "src": "3563:13:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 23286,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3580:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3563:18:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "hexValue": "537464436861696e7320676574436861696e28737472696e67293a20436861696e207769746820616c6961732022",
                                "id": 23292,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3619:49:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                  "typeString": "literal_string \"StdChains getChain(string): Chain with alias \"\""
                                },
                                "value": "StdChains getChain(string): Chain with alias \""
                              },
                              {
                                "id": 23293,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 23257,
                                "src": "3670:10:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "22206e6f7420666f756e642e",
                                "id": 23294,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3682:15:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_be956cec6682d51b49f30c9beff2857436402411b7eee4082594e44819bcd397",
                                  "typeString": "literal_string \"\" not found.\""
                                },
                                "value": "\" not found."
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                  "typeString": "literal_string \"StdChains getChain(string): Chain with alias \"\""
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_be956cec6682d51b49f30c9beff2857436402411b7eee4082594e44819bcd397",
                                  "typeString": "literal_string \"\" not found.\""
                                }
                              ],
                              "expression": {
                                "id": 23290,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "3602:3:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 23291,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "3606:12:77",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "3602:16:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 23295,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3602:96:77",
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
                          "id": 23289,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3595:6:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 23288,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "3595:6:77",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 23296,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3595:104:77",
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 23283,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3542:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 23297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3542:167:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23298,
                  "nodeType": "ExpressionStatement",
                  "src": "3542:167:77"
                },
                {
                  "expression": {
                    "id": 23304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23299,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23261,
                      "src": "3720:5:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 23301,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23257,
                          "src": "3754:10:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "id": 23302,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23261,
                          "src": "3766:5:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
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
                            "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
                          }
                        ],
                        "id": 23300,
                        "name": "getChainWithUpdatedRpcUrl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23689,
                        "src": "3728:25:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$23239_memory_ptr_$returns$_t_struct$_Chain_$23239_memory_ptr_$",
                          "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                        }
                      },
                      "id": 23303,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3728:44:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "3720:52:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 23305,
                  "nodeType": "ExpressionStatement",
                  "src": "3720:52:77"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChain",
            "nameLocation": "3264:8:77",
            "parameters": {
              "id": 23258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23257,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "3287:10:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23307,
                  "src": "3273:24:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23256,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3273:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3272:26:77"
            },
            "returnParameters": {
              "id": 23262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23261,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "3338:5:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23307,
                  "src": "3325:18:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 23260,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 23259,
                      "name": "Chain",
                      "nameLocations": [
                        "3325:5:77"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 23239,
                      "src": "3325:5:77"
                    },
                    "referencedDeclaration": 23239,
                    "src": "3325:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3324:20:77"
            },
            "scope": 23919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 23364,
            "nodeType": "FunctionDefinition",
            "src": "3785:541:77",
            "nodes": [],
            "body": {
              "id": 23363,
              "nodeType": "Block",
              "src": "3866:460:77",
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
                        "id": 23318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 23316,
                          "name": "chainId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23309,
                          "src": "3884:7:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 23317,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3895:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3884:12:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e",
                        "id": 23319,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3898:52:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_64f1cd082b277ed92a70b6890cc1e3b6ebd77bc6c9299e7ce82305de04926a4a",
                          "typeString": "literal_string \"StdChains getChain(uint256): Chain ID cannot be 0.\""
                        },
                        "value": "StdChains getChain(uint256): Chain ID cannot be 0."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_64f1cd082b277ed92a70b6890cc1e3b6ebd77bc6c9299e7ce82305de04926a4a",
                          "typeString": "literal_string \"StdChains getChain(uint256): Chain ID cannot be 0.\""
                        }
                      ],
                      "id": 23315,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3876:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 23320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3876:75:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23321,
                  "nodeType": "ExpressionStatement",
                  "src": "3876:75:77"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 23322,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23881,
                      "src": "3961:19:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 23323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3961:21:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23324,
                  "nodeType": "ExpressionStatement",
                  "src": "3961:21:77"
                },
                {
                  "assignments": [
                    23326
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23326,
                      "mutability": "mutable",
                      "name": "chainAlias",
                      "nameLocation": "4006:10:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 23363,
                      "src": "3992:24:77",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 23325,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3992:6:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23330,
                  "initialValue": {
                    "baseExpression": {
                      "id": 23327,
                      "name": "idToAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23252,
                      "src": "4019:9:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 23329,
                    "indexExpression": {
                      "id": 23328,
                      "name": "chainId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23309,
                      "src": "4029:7:77",
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
                    "src": "4019:18:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3992:45:77"
                },
                {
                  "expression": {
                    "id": 23335,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23331,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23313,
                      "src": "4048:5:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 23332,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23244,
                        "src": "4056:6:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$23239_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 23334,
                      "indexExpression": {
                        "id": 23333,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23326,
                        "src": "4063:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4056:18:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "src": "4048:26:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 23336,
                  "nodeType": "ExpressionStatement",
                  "src": "4048:26:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 23341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 23338,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23313,
                            "src": "4106:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                              "typeString": "struct StdChains.Chain memory"
                            }
                          },
                          "id": 23339,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4112:7:77",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23234,
                          "src": "4106:13:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 23340,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4123:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4106:18:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "hexValue": "537464436861696e7320676574436861696e2875696e74323536293a20436861696e207769746820494420",
                                "id": 23346,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4162:45:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                  "typeString": "literal_string \"StdChains getChain(uint256): Chain with ID \""
                                },
                                "value": "StdChains getChain(uint256): Chain with ID "
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 23349,
                                    "name": "chainId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23309,
                                    "src": "4221:7:77",
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
                                    "id": 23347,
                                    "name": "vm",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23221,
                                    "src": "4209:2:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VmSafe_$32405",
                                      "typeString": "contract VmSafe"
                                    }
                                  },
                                  "id": 23348,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4212:8:77",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 31937,
                                  "src": "4209:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure external returns (string memory)"
                                  }
                                },
                                "id": 23350,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4209:20:77",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "206e6f7420666f756e642e",
                                "id": 23351,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4231:13:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_f310d2efb88747fac959fa7567a0a1a161dd43a77ba9af074f6191cf5bcf4f8b",
                                  "typeString": "literal_string \" not found.\""
                                },
                                "value": " not found."
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                  "typeString": "literal_string \"StdChains getChain(uint256): Chain with ID \""
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_f310d2efb88747fac959fa7567a0a1a161dd43a77ba9af074f6191cf5bcf4f8b",
                                  "typeString": "literal_string \" not found.\""
                                }
                              ],
                              "expression": {
                                "id": 23344,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "4145:3:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 23345,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "4149:12:77",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "4145:16:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 23352,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4145:100:77",
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
                          "id": 23343,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4138:6:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 23342,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4138:6:77",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 23353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4138:108:77",
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 23337,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4085:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 23354,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4085:171:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23355,
                  "nodeType": "ExpressionStatement",
                  "src": "4085:171:77"
                },
                {
                  "expression": {
                    "id": 23361,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23356,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23313,
                      "src": "4267:5:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 23358,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23326,
                          "src": "4301:10:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "id": 23359,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23313,
                          "src": "4313:5:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
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
                            "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
                          }
                        ],
                        "id": 23357,
                        "name": "getChainWithUpdatedRpcUrl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23689,
                        "src": "4275:25:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$23239_memory_ptr_$returns$_t_struct$_Chain_$23239_memory_ptr_$",
                          "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                        }
                      },
                      "id": 23360,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4275:44:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "4267:52:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 23362,
                  "nodeType": "ExpressionStatement",
                  "src": "4267:52:77"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChain",
            "nameLocation": "3794:8:77",
            "parameters": {
              "id": 23310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23309,
                  "mutability": "mutable",
                  "name": "chainId",
                  "nameLocation": "3811:7:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23364,
                  "src": "3803:15:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23308,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3803:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3802:17:77"
            },
            "returnParameters": {
              "id": 23314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23313,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "3859:5:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23364,
                  "src": "3846:18:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 23312,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 23311,
                      "name": "Chain",
                      "nameLocations": [
                        "3846:5:77"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 23239,
                      "src": "3846:5:77"
                    },
                    "referencedDeclaration": 23239,
                    "src": "3846:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3845:20:77"
            },
            "scope": 23919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 23474,
            "nodeType": "FunctionDefinition",
            "src": "4397:1173:77",
            "nodes": [],
            "body": {
              "id": 23473,
              "nodeType": "Block",
              "src": "4482:1088:77",
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
                        "id": 23379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 23375,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 23366,
                                "src": "4519:10:77",
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
                              "id": 23374,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4513:5:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 23373,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "4513:5:77",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 23376,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4513:17:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 23377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4531:6:77",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "4513:24:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 23378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4541:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4513:29:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        "id": 23380,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4556:79:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_30b2334ec57cbeeece39c6405e10d3437560135ecd84835d6b9144db1d575354",
                          "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain alias cannot be the empty string.\""
                        },
                        "value": "StdChains setChain(string,ChainData): Chain alias cannot be the empty string."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_30b2334ec57cbeeece39c6405e10d3437560135ecd84835d6b9144db1d575354",
                          "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain alias cannot be the empty string.\""
                        }
                      ],
                      "id": 23372,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4492:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 23381,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4492:153:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23382,
                  "nodeType": "ExpressionStatement",
                  "src": "4492:153:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 23387,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 23384,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23369,
                            "src": "4664:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 23385,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4670:7:77",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23227,
                          "src": "4664:13:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 23386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4681:1:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4664:18:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e",
                        "id": 23388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4684:61:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ab0ba8dace83d80dc1941286e8d0551223497db1b420e58abff2f3db2ad3fbf4",
                          "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain ID cannot be 0.\""
                        },
                        "value": "StdChains setChain(string,ChainData): Chain ID cannot be 0."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ab0ba8dace83d80dc1941286e8d0551223497db1b420e58abff2f3db2ad3fbf4",
                          "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain ID cannot be 0.\""
                        }
                      ],
                      "id": 23383,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4656:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 23389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4656:90:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23390,
                  "nodeType": "ExpressionStatement",
                  "src": "4656:90:77"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 23391,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23881,
                      "src": "4757:19:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 23392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4757:21:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23393,
                  "nodeType": "ExpressionStatement",
                  "src": "4757:21:77"
                },
                {
                  "assignments": [
                    23395
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23395,
                      "mutability": "mutable",
                      "name": "foundAlias",
                      "nameLocation": "4802:10:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 23473,
                      "src": "4788:24:77",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 23394,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "4788:6:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23400,
                  "initialValue": {
                    "baseExpression": {
                      "id": 23396,
                      "name": "idToAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23252,
                      "src": "4815:9:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 23399,
                    "indexExpression": {
                      "expression": {
                        "id": 23397,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23369,
                        "src": "4825:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 23398,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4831:7:77",
                      "memberName": "chainId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23227,
                      "src": "4825:13:77",
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
                    "src": "4815:24:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4788:51:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 23422,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 23408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 23404,
                                  "name": "foundAlias",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 23395,
                                  "src": "4877:10:77",
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
                                "id": 23403,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4871:5:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 23402,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4871:5:77",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 23405,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4871:17:77",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 23406,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4889:6:77",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "4871:24:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 23407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4899:1:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4871:29:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 23421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 23412,
                                    "name": "foundAlias",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23395,
                                    "src": "4920:10:77",
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
                                  "id": 23411,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4914:5:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                    "typeString": "type(bytes storage pointer)"
                                  },
                                  "typeName": {
                                    "id": 23410,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4914:5:77",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 23413,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4914:17:77",
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
                              "id": 23409,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "4904:9:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 23414,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4904:28:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 23418,
                                    "name": "chainAlias",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23366,
                                    "src": "4952:10:77",
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
                                  "id": 23417,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4946:5:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                    "typeString": "type(bytes storage pointer)"
                                  },
                                  "typeName": {
                                    "id": 23416,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4946:5:77",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 23419,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4946:17:77",
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
                              "id": 23415,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "4936:9:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 23420,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4936:28:77",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4904:60:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4871:93:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20494420",
                                "id": 23427,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5040:49:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0",
                                  "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain ID \""
                                },
                                "value": "StdChains setChain(string,ChainData): Chain ID "
                              },
                              {
                                "arguments": [
                                  {
                                    "expression": {
                                      "id": 23430,
                                      "name": "chain",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 23369,
                                      "src": "5123:5:77",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                                        "typeString": "struct StdChains.ChainData memory"
                                      }
                                    },
                                    "id": 23431,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "5129:7:77",
                                    "memberName": "chainId",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 23227,
                                    "src": "5123:13:77",
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
                                    "id": 23428,
                                    "name": "vm",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23221,
                                    "src": "5111:2:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VmSafe_$32405",
                                      "typeString": "contract VmSafe"
                                    }
                                  },
                                  "id": 23429,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5114:8:77",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 31937,
                                  "src": "5111:11:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure external returns (string memory)"
                                  }
                                },
                                "id": 23432,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5111:26:77",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "20616c726561647920757365642062792022",
                                "id": 23433,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5159:21:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                  "typeString": "literal_string \" already used by \"\""
                                },
                                "value": " already used by \""
                              },
                              {
                                "id": 23434,
                                "name": "foundAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 23395,
                                "src": "5202:10:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "222e",
                                "id": 23435,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5234:5:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_cb54fc3dbdac1cb7b87378fdaddeb9e7549db2a108b5270efaa4bcd576270193",
                                  "typeString": "literal_string \"\".\""
                                },
                                "value": "\"."
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0",
                                  "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain ID \""
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                  "typeString": "literal_string \" already used by \"\""
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_cb54fc3dbdac1cb7b87378fdaddeb9e7549db2a108b5270efaa4bcd576270193",
                                  "typeString": "literal_string \"\".\""
                                }
                              ],
                              "expression": {
                                "id": 23425,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "5002:3:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 23426,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "5006:12:77",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "5002:16:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 23436,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5002:255:77",
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
                          "id": 23424,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4978:6:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 23423,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4978:6:77",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 23437,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4978:293:77",
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 23401,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4850:7:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 23438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4850:431:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23439,
                  "nodeType": "ExpressionStatement",
                  "src": "4850:431:77"
                },
                {
                  "assignments": [
                    23441
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23441,
                      "mutability": "mutable",
                      "name": "oldChainId",
                      "nameLocation": "5300:10:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 23473,
                      "src": "5292:18:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 23440,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5292:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23446,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 23442,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23244,
                        "src": "5313:6:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$23239_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 23444,
                      "indexExpression": {
                        "id": 23443,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23366,
                        "src": "5320:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5313:18:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "id": 23445,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5332:7:77",
                    "memberName": "chainId",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 23234,
                    "src": "5313:26:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5292:47:77"
                },
                {
                  "expression": {
                    "id": 23450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "5349:28:77",
                    "subExpression": {
                      "baseExpression": {
                        "id": 23447,
                        "name": "idToAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23252,
                        "src": "5356:9:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 23449,
                      "indexExpression": {
                        "id": 23448,
                        "name": "oldChainId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23441,
                        "src": "5366:10:77",
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
                      "src": "5356:21:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23451,
                  "nodeType": "ExpressionStatement",
                  "src": "5349:28:77"
                },
                {
                  "expression": {
                    "id": 23464,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 23452,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23244,
                        "src": "5388:6:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$23239_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 23454,
                      "indexExpression": {
                        "id": 23453,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23366,
                        "src": "5395:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5388:18:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 23456,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23369,
                            "src": "5434:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 23457,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5440:4:77",
                          "memberName": "name",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23225,
                          "src": "5434:10:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 23458,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23369,
                            "src": "5455:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 23459,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5461:7:77",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23227,
                          "src": "5455:13:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 23460,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23366,
                          "src": "5482:10:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 23461,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23369,
                            "src": "5502:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 23462,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5508:6:77",
                          "memberName": "rpcUrl",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23229,
                          "src": "5502:12:77",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
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
                        "id": 23455,
                        "name": "Chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23239,
                        "src": "5421:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Chain_$23239_storage_ptr_$",
                          "typeString": "type(struct StdChains.Chain storage pointer)"
                        }
                      },
                      "id": 23463,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "5428:4:77",
                        "5446:7:77",
                        "5470:10:77",
                        "5494:6:77"
                      ],
                      "names": [
                        "name",
                        "chainId",
                        "chainAlias",
                        "rpcUrl"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "5421:95:77",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "5388:128:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_storage",
                      "typeString": "struct StdChains.Chain storage ref"
                    }
                  },
                  "id": 23465,
                  "nodeType": "ExpressionStatement",
                  "src": "5388:128:77"
                },
                {
                  "expression": {
                    "id": 23471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 23466,
                        "name": "idToAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23252,
                        "src": "5526:9:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 23469,
                      "indexExpression": {
                        "expression": {
                          "id": 23467,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23369,
                          "src": "5536:5:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                            "typeString": "struct StdChains.ChainData memory"
                          }
                        },
                        "id": 23468,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5542:7:77",
                        "memberName": "chainId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 23227,
                        "src": "5536:13:77",
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
                      "src": "5526:24:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23470,
                      "name": "chainAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23366,
                      "src": "5553:10:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "5526:37:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 23472,
                  "nodeType": "ExpressionStatement",
                  "src": "5526:37:77"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChain",
            "nameLocation": "4406:8:77",
            "parameters": {
              "id": 23370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23366,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "4429:10:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23474,
                  "src": "4415:24:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23365,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4415:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23369,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "4458:5:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23474,
                  "src": "4441:22:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                    "typeString": "struct StdChains.ChainData"
                  },
                  "typeName": {
                    "id": 23368,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 23367,
                      "name": "ChainData",
                      "nameLocations": [
                        "4441:9:77"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 23230,
                      "src": "4441:9:77"
                    },
                    "referencedDeclaration": 23230,
                    "src": "4441:9:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ChainData_$23230_storage_ptr",
                      "typeString": "struct StdChains.ChainData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4414:50:77"
            },
            "returnParameters": {
              "id": 23371,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4482:0:77"
            },
            "scope": 23919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 23495,
            "nodeType": "FunctionDefinition",
            "src": "5641:195:77",
            "nodes": [],
            "body": {
              "id": 23494,
              "nodeType": "Block",
              "src": "5722:114:77",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23483,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23476,
                        "src": "5741:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 23485,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23479,
                              "src": "5770:5:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 23486,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5776:4:77",
                            "memberName": "name",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 23232,
                            "src": "5770:10:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "expression": {
                              "id": 23487,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23479,
                              "src": "5791:5:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 23488,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5797:7:77",
                            "memberName": "chainId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 23234,
                            "src": "5791:13:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 23489,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23479,
                              "src": "5814:5:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 23490,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5820:6:77",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 23238,
                            "src": "5814:12:77",
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 23484,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "5753:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23491,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [
                          "5764:4:77",
                          "5782:7:77",
                          "5806:6:77"
                        ],
                        "names": [
                          "name",
                          "chainId",
                          "rpcUrl"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "5753:75:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
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
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23482,
                      "name": "setChain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23474,
                        23495
                      ],
                      "referencedDeclaration": 23474,
                      "src": "5732:8:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5732:97:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23493,
                  "nodeType": "ExpressionStatement",
                  "src": "5732:97:77"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChain",
            "nameLocation": "5650:8:77",
            "parameters": {
              "id": 23480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23476,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "5673:10:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23495,
                  "src": "5659:24:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23475,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5659:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23479,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "5698:5:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23495,
                  "src": "5685:18:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 23478,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 23477,
                      "name": "Chain",
                      "nameLocations": [
                        "5685:5:77"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 23239,
                      "src": "5685:5:77"
                    },
                    "referencedDeclaration": 23239,
                    "src": "5685:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5658:46:77"
            },
            "returnParameters": {
              "id": 23481,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5722:0:77"
            },
            "scope": 23919,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 23572,
            "nodeType": "FunctionDefinition",
            "src": "5842:451:77",
            "nodes": [],
            "body": {
              "id": 23571,
              "nodeType": "Block",
              "src": "5916:377:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    23503
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23503,
                      "mutability": "mutable",
                      "name": "strb",
                      "nameLocation": "5939:4:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 23571,
                      "src": "5926:17:77",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 23502,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5926:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23508,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 23506,
                        "name": "str",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23497,
                        "src": "5952:3:77",
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
                      "id": 23505,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5946:5:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": {
                        "id": 23504,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5946:5:77",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 23507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5946:10:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5926:30:77"
                },
                {
                  "assignments": [
                    23510
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23510,
                      "mutability": "mutable",
                      "name": "copy",
                      "nameLocation": "5979:4:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 23571,
                      "src": "5966:17:77",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 23509,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5966:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23516,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 23513,
                          "name": "strb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23503,
                          "src": "5996:4:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 23514,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6001:6:77",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "5996:11:77",
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
                      "id": 23512,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "5986:9:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 23511,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5990:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 23515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5986:22:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5966:42:77"
                },
                {
                  "body": {
                    "id": 23564,
                    "nodeType": "Block",
                    "src": "6060:198:77",
                    "statements": [
                      {
                        "assignments": [
                          23529
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 23529,
                            "mutability": "mutable",
                            "name": "b",
                            "nameLocation": "6081:1:77",
                            "nodeType": "VariableDeclaration",
                            "scope": 23564,
                            "src": "6074:8:77",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            "typeName": {
                              "id": 23528,
                              "name": "bytes1",
                              "nodeType": "ElementaryTypeName",
                              "src": "6074:6:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 23533,
                        "initialValue": {
                          "baseExpression": {
                            "id": 23530,
                            "name": "strb",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23503,
                            "src": "6085:4:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 23532,
                          "indexExpression": {
                            "id": 23531,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23518,
                            "src": "6090:1:77",
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
                          "src": "6085:7:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6074:18:77"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 23540,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            "id": 23536,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 23534,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23529,
                              "src": "6110:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "hexValue": "30783631",
                              "id": 23535,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6115:4:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_97_by_1",
                                "typeString": "int_const 97"
                              },
                              "value": "0x61"
                            },
                            "src": "6110:9:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            "id": 23539,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 23537,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23529,
                              "src": "6123:1:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "hexValue": "30783741",
                              "id": 23538,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6128:4:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_122_by_1",
                                "typeString": "int_const 122"
                              },
                              "value": "0x7A"
                            },
                            "src": "6123:9:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "6110:22:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 23562,
                          "nodeType": "Block",
                          "src": "6204:44:77",
                          "statements": [
                            {
                              "expression": {
                                "id": 23560,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 23556,
                                    "name": "copy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23510,
                                    "src": "6222:4:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 23558,
                                  "indexExpression": {
                                    "id": 23557,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23518,
                                    "src": "6227:1:77",
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
                                  "src": "6222:7:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 23559,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 23529,
                                  "src": "6232:1:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "6222:11:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 23561,
                              "nodeType": "ExpressionStatement",
                              "src": "6222:11:77"
                            }
                          ]
                        },
                        "id": 23563,
                        "nodeType": "IfStatement",
                        "src": "6106:142:77",
                        "trueBody": {
                          "id": 23555,
                          "nodeType": "Block",
                          "src": "6134:64:77",
                          "statements": [
                            {
                              "expression": {
                                "id": 23553,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 23541,
                                    "name": "copy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23510,
                                    "src": "6152:4:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 23543,
                                  "indexExpression": {
                                    "id": 23542,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23518,
                                    "src": "6157:1:77",
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
                                  "src": "6152:7:77",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "arguments": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 23551,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 23548,
                                            "name": "b",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23529,
                                            "src": "6175:1:77",
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
                                            }
                                          ],
                                          "id": 23547,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "6169:5:77",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_uint8_$",
                                            "typeString": "type(uint8)"
                                          },
                                          "typeName": {
                                            "id": 23546,
                                            "name": "uint8",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6169:5:77",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 23549,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6169:8:77",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "hexValue": "3332",
                                        "id": 23550,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6180:2:77",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_32_by_1",
                                          "typeString": "int_const 32"
                                        },
                                        "value": "32"
                                      },
                                      "src": "6169:13:77",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    ],
                                    "id": 23545,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6162:6:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 23544,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6162:6:77",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 23552,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6162:21:77",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "6152:31:77",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 23554,
                              "nodeType": "ExpressionStatement",
                              "src": "6152:31:77"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 23524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 23521,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23518,
                      "src": "6038:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 23522,
                        "name": "strb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23503,
                        "src": "6042:4:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 23523,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6047:6:77",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6042:11:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6038:15:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23565,
                  "initializationExpression": {
                    "assignments": [
                      23518
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 23518,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6031:1:77",
                        "nodeType": "VariableDeclaration",
                        "scope": 23565,
                        "src": "6023:9:77",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 23517,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6023:7:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 23520,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 23519,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6035:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6023:13:77"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 23526,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6055:3:77",
                      "subExpression": {
                        "id": 23525,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23518,
                        "src": "6055:1:77",
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
                    "id": 23527,
                    "nodeType": "ExpressionStatement",
                    "src": "6055:3:77"
                  },
                  "nodeType": "ForStatement",
                  "src": "6018:240:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23568,
                        "name": "copy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23510,
                        "src": "6281:4:77",
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
                      "id": 23567,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6274:6:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 23566,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "6274:6:77",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 23569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6274:12:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 23501,
                  "id": 23570,
                  "nodeType": "Return",
                  "src": "6267:19:77"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_toUpper",
            "nameLocation": "5851:8:77",
            "parameters": {
              "id": 23498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23497,
                  "mutability": "mutable",
                  "name": "str",
                  "nameLocation": "5874:3:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23572,
                  "src": "5860:17:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23496,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5860:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5859:19:77"
            },
            "returnParameters": {
              "id": 23501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23500,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23572,
                  "src": "5901:13:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23499,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5901:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5900:15:77"
            },
            "scope": 23919,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 23689,
            "nodeType": "FunctionDefinition",
            "src": "6429:1218:77",
            "nodes": [],
            "body": {
              "id": 23688,
              "nodeType": "Block",
              "src": "6541:1106:77",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 23590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 23585,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23577,
                              "src": "6561:5:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 23586,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6567:6:77",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 23238,
                            "src": "6561:12:77",
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
                          "id": 23584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6555:5:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 23583,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "6555:5:77",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 23587,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6555:19:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 23588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6575:6:77",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6555:26:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 23589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6585:1:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6555:31:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23685,
                  "nodeType": "IfStatement",
                  "src": "6551:1068:77",
                  "trueBody": {
                    "id": 23684,
                    "nodeType": "Block",
                    "src": "6588:1031:77",
                    "statements": [
                      {
                        "clauses": [
                          {
                            "block": {
                              "id": 23604,
                              "nodeType": "Block",
                              "src": "6665:60:77",
                              "statements": [
                                {
                                  "expression": {
                                    "id": 23602,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "expression": {
                                        "id": 23598,
                                        "name": "chain",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23577,
                                        "src": "6683:5:77",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                                          "typeString": "struct StdChains.Chain memory"
                                        }
                                      },
                                      "id": 23600,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "memberLocation": "6689:6:77",
                                      "memberName": "rpcUrl",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 23238,
                                      "src": "6683:12:77",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "nodeType": "Assignment",
                                    "operator": "=",
                                    "rightHandSide": {
                                      "id": 23601,
                                      "name": "configRpcUrl",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 23596,
                                      "src": "6698:12:77",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "src": "6683:27:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "id": 23603,
                                  "nodeType": "ExpressionStatement",
                                  "src": "6683:27:77"
                                }
                              ]
                            },
                            "errorName": "",
                            "id": 23605,
                            "nodeType": "TryCatchClause",
                            "parameters": {
                              "id": 23597,
                              "nodeType": "ParameterList",
                              "parameters": [
                                {
                                  "constant": false,
                                  "id": 23596,
                                  "mutability": "mutable",
                                  "name": "configRpcUrl",
                                  "nameLocation": "6651:12:77",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 23605,
                                  "src": "6637:26:77",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string"
                                  },
                                  "typeName": {
                                    "id": 23595,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6637:6:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_storage_ptr",
                                      "typeString": "string"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "src": "6636:28:77"
                            },
                            "src": "6628:97:77"
                          },
                          {
                            "block": {
                              "id": 23681,
                              "nodeType": "Block",
                              "src": "6751:858:77",
                              "statements": [
                                {
                                  "assignments": [
                                    23610
                                  ],
                                  "declarations": [
                                    {
                                      "constant": false,
                                      "id": 23610,
                                      "mutability": "mutable",
                                      "name": "envName",
                                      "nameLocation": "6783:7:77",
                                      "nodeType": "VariableDeclaration",
                                      "scope": 23681,
                                      "src": "6769:21:77",
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                      },
                                      "typeName": {
                                        "id": 23609,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6769:6:77",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_string_storage_ptr",
                                          "typeString": "string"
                                        }
                                      },
                                      "visibility": "internal"
                                    }
                                  ],
                                  "id": 23621,
                                  "initialValue": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "id": 23616,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23574,
                                                "src": "6826:10:77",
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
                                              "id": 23615,
                                              "name": "_toUpper",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 23572,
                                              "src": "6817:8:77",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                              }
                                            },
                                            "id": 23617,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6817:20:77",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          {
                                            "hexValue": "5f5250435f55524c",
                                            "id": 23618,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6839:10:77",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_stringliteral_2186fe596dea1a615b7a1cb43899fd18c5b434aa29c8de36d4b8fcc67e3d6ad9",
                                              "typeString": "literal_string \"_RPC_URL\""
                                            },
                                            "value": "_RPC_URL"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            },
                                            {
                                              "typeIdentifier": "t_stringliteral_2186fe596dea1a615b7a1cb43899fd18c5b434aa29c8de36d4b8fcc67e3d6ad9",
                                              "typeString": "literal_string \"_RPC_URL\""
                                            }
                                          ],
                                          "expression": {
                                            "id": 23613,
                                            "name": "abi",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -1,
                                            "src": "6800:3:77",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_abi",
                                              "typeString": "abi"
                                            }
                                          },
                                          "id": 23614,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "memberLocation": "6804:12:77",
                                          "memberName": "encodePacked",
                                          "nodeType": "MemberAccess",
                                          "src": "6800:16:77",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                            "typeString": "function () pure returns (bytes memory)"
                                          }
                                        },
                                        "id": 23619,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6800:50:77",
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
                                      "id": 23612,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "6793:6:77",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                        "typeString": "type(string storage pointer)"
                                      },
                                      "typeName": {
                                        "id": 23611,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6793:6:77",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 23620,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "6793:58:77",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "nodeType": "VariableDeclarationStatement",
                                  "src": "6769:82:77"
                                },
                                {
                                  "condition": {
                                    "id": 23622,
                                    "name": "fallbackToDefaultRpcUrls",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 23255,
                                    "src": "6873:24:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "falseBody": {
                                    "id": 23645,
                                    "nodeType": "Block",
                                    "src": "7006:77:77",
                                    "statements": [
                                      {
                                        "expression": {
                                          "id": 23643,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftHandSide": {
                                            "expression": {
                                              "id": 23636,
                                              "name": "chain",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 23577,
                                              "src": "7028:5:77",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                              }
                                            },
                                            "id": 23638,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "7034:6:77",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 23238,
                                            "src": "7028:12:77",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "nodeType": "Assignment",
                                          "operator": "=",
                                          "rightHandSide": {
                                            "arguments": [
                                              {
                                                "id": 23641,
                                                "name": "envName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23610,
                                                "src": "7056:7:77",
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
                                              "expression": {
                                                "id": 23639,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23221,
                                                "src": "7043:2:77",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_VmSafe_$32405",
                                                  "typeString": "contract VmSafe"
                                                }
                                              },
                                              "id": 23640,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "7046:9:77",
                                              "memberName": "envString",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 31481,
                                              "src": "7043:12:77",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) view external returns (string memory)"
                                              }
                                            },
                                            "id": 23642,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7043:21:77",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "src": "7028:36:77",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "id": 23644,
                                        "nodeType": "ExpressionStatement",
                                        "src": "7028:36:77"
                                      }
                                    ]
                                  },
                                  "id": 23646,
                                  "nodeType": "IfStatement",
                                  "src": "6869:214:77",
                                  "trueBody": {
                                    "id": 23635,
                                    "nodeType": "Block",
                                    "src": "6899:101:77",
                                    "statements": [
                                      {
                                        "expression": {
                                          "id": 23633,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftHandSide": {
                                            "expression": {
                                              "id": 23623,
                                              "name": "chain",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 23577,
                                              "src": "6921:5:77",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                              }
                                            },
                                            "id": 23625,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "6927:6:77",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 23238,
                                            "src": "6921:12:77",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "nodeType": "Assignment",
                                          "operator": "=",
                                          "rightHandSide": {
                                            "arguments": [
                                              {
                                                "id": 23628,
                                                "name": "envName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23610,
                                                "src": "6945:7:77",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              },
                                              {
                                                "baseExpression": {
                                                  "id": 23629,
                                                  "name": "defaultRpcUrls",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 23248,
                                                  "src": "6954:14:77",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                    "typeString": "mapping(string memory => string storage ref)"
                                                  }
                                                },
                                                "id": 23631,
                                                "indexExpression": {
                                                  "id": 23630,
                                                  "name": "chainAlias",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 23574,
                                                  "src": "6969:10:77",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                  }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "6954:26:77",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_string_storage",
                                                  "typeString": "string storage ref"
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
                                                  "typeIdentifier": "t_string_storage",
                                                  "typeString": "string storage ref"
                                                }
                                              ],
                                              "expression": {
                                                "id": 23626,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23221,
                                                "src": "6936:2:77",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_VmSafe_$32405",
                                                  "typeString": "contract VmSafe"
                                                }
                                              },
                                              "id": 23627,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "6939:5:77",
                                              "memberName": "envOr",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 31612,
                                              "src": "6936:8:77",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                              }
                                            },
                                            "id": 23632,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6936:45:77",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "src": "6921:60:77",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "id": 23634,
                                        "nodeType": "ExpressionStatement",
                                        "src": "6921:60:77"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "assignments": [
                                    23648
                                  ],
                                  "declarations": [
                                    {
                                      "constant": false,
                                      "id": 23648,
                                      "mutability": "mutable",
                                      "name": "notFoundError",
                                      "nameLocation": "7175:13:77",
                                      "nodeType": "VariableDeclaration",
                                      "scope": 23681,
                                      "src": "7162:26:77",
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                      },
                                      "typeName": {
                                        "id": 23647,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7162:5:77",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes_storage_ptr",
                                          "typeString": "bytes"
                                        }
                                      },
                                      "visibility": "internal"
                                    }
                                  ],
                                  "id": 23661,
                                  "initialValue": {
                                    "arguments": [
                                      {
                                        "hexValue": "4368656174436f64654572726f72",
                                        "id": 23651,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7235:16:77",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf",
                                          "typeString": "literal_string \"CheatCodeError\""
                                        },
                                        "value": "CheatCodeError"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "hexValue": "696e76616c6964207270632075726c20",
                                                "id": 23656,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7277:18:77",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                  "typeString": "literal_string \"invalid rpc url \""
                                                },
                                                "value": "invalid rpc url "
                                              },
                                              {
                                                "id": 23657,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23574,
                                                "src": "7297:10:77",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                  "typeString": "literal_string \"invalid rpc url \""
                                                },
                                                {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              ],
                                              "expression": {
                                                "id": 23654,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "7260:3:77",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_abi",
                                                  "typeString": "abi"
                                                }
                                              },
                                              "id": 23655,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "memberLocation": "7264:12:77",
                                              "memberName": "encodePacked",
                                              "nodeType": "MemberAccess",
                                              "src": "7260:16:77",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function () pure returns (bytes memory)"
                                              }
                                            },
                                            "id": 23658,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7260:48:77",
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
                                          "id": 23653,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "7253:6:77",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                            "typeString": "type(string storage pointer)"
                                          },
                                          "typeName": {
                                            "id": 23652,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7253:6:77",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 23659,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7253:56:77",
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
                                          "typeIdentifier": "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf",
                                          "typeString": "literal_string \"CheatCodeError\""
                                        },
                                        {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        }
                                      ],
                                      "expression": {
                                        "id": 23649,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -1,
                                        "src": "7211:3:77",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 23650,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberLocation": "7215:19:77",
                                      "memberName": "encodeWithSignature",
                                      "nodeType": "MemberAccess",
                                      "src": "7211:23:77",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function (string memory) pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 23660,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7211:99:77",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "nodeType": "VariableDeclarationStatement",
                                  "src": "7162:148:77"
                                },
                                {
                                  "condition": {
                                    "commonType": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "id": 23677,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      "id": 23668,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 23663,
                                            "name": "notFoundError",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23648,
                                            "src": "7342:13:77",
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
                                          "id": 23662,
                                          "name": "keccak256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -8,
                                          "src": "7332:9:77",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 23664,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7332:24:77",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "!=",
                                      "rightExpression": {
                                        "arguments": [
                                          {
                                            "id": 23666,
                                            "name": "err",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23607,
                                            "src": "7370:3:77",
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
                                          "id": 23665,
                                          "name": "keccak256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -8,
                                          "src": "7360:9:77",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 23667,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7360:14:77",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "src": "7332:42:77",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "||",
                                    "rightExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 23676,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "expression": {
                                          "arguments": [
                                            {
                                              "expression": {
                                                "id": 23671,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23577,
                                                "src": "7384:5:77",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                                                  "typeString": "struct StdChains.Chain memory"
                                                }
                                              },
                                              "id": 23672,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "7390:6:77",
                                              "memberName": "rpcUrl",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 23238,
                                              "src": "7384:12:77",
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
                                            "id": 23670,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "7378:5:77",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                              "typeString": "type(bytes storage pointer)"
                                            },
                                            "typeName": {
                                              "id": 23669,
                                              "name": "bytes",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "7378:5:77",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 23673,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "7378:19:77",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        },
                                        "id": 23674,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "7398:6:77",
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "src": "7378:26:77",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "==",
                                      "rightExpression": {
                                        "hexValue": "30",
                                        "id": 23675,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7408:1:77",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                      },
                                      "src": "7378:31:77",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "src": "7332:77:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "id": 23680,
                                  "nodeType": "IfStatement",
                                  "src": "7328:267:77",
                                  "trueBody": {
                                    "id": 23679,
                                    "nodeType": "Block",
                                    "src": "7411:184:77",
                                    "statements": [
                                      {
                                        "AST": {
                                          "nodeType": "YulBlock",
                                          "src": "7497:80:77",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "arguments": [
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "7534:2:77",
                                                        "type": "",
                                                        "value": "32"
                                                      },
                                                      {
                                                        "name": "err",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7538:3:77"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "add",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "7530:3:77"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7530:12:77"
                                                  },
                                                  {
                                                    "arguments": [
                                                      {
                                                        "name": "err",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7550:3:77"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "mload",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "7544:5:77"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7544:10:77"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "7523:6:77"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7523:32:77"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "7523:32:77"
                                            }
                                          ]
                                        },
                                        "documentation": "@solidity memory-safe-assembly",
                                        "evmVersion": "paris",
                                        "externalReferences": [
                                          {
                                            "declaration": 23607,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7538:3:77",
                                            "valueSize": 1
                                          },
                                          {
                                            "declaration": 23607,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7550:3:77",
                                            "valueSize": 1
                                          }
                                        ],
                                        "id": 23678,
                                        "nodeType": "InlineAssembly",
                                        "src": "7488:89:77"
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            "errorName": "",
                            "id": 23682,
                            "nodeType": "TryCatchClause",
                            "parameters": {
                              "id": 23608,
                              "nodeType": "ParameterList",
                              "parameters": [
                                {
                                  "constant": false,
                                  "id": 23607,
                                  "mutability": "mutable",
                                  "name": "err",
                                  "nameLocation": "6746:3:77",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 23682,
                                  "src": "6733:16:77",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes"
                                  },
                                  "typeName": {
                                    "id": 23606,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6733:5:77",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_storage_ptr",
                                      "typeString": "bytes"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "src": "6732:18:77"
                            },
                            "src": "6726:883:77"
                          }
                        ],
                        "externalCall": {
                          "arguments": [
                            {
                              "id": 23593,
                              "name": "chainAlias",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23574,
                              "src": "6616:10:77",
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
                            "expression": {
                              "id": 23591,
                              "name": "vm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 23221,
                              "src": "6606:2:77",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$32405",
                                "typeString": "contract VmSafe"
                              }
                            },
                            "id": 23592,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6609:6:77",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 32366,
                            "src": "6606:9:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                              "typeString": "function (string memory) view external returns (string memory)"
                            }
                          },
                          "id": 23594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6606:21:77",
                          "tryCall": true,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 23683,
                        "nodeType": "TryStatement",
                        "src": "6602:1007:77"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 23686,
                    "name": "chain",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 23577,
                    "src": "7635:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "functionReturnParameters": 23582,
                  "id": 23687,
                  "nodeType": "Return",
                  "src": "7628:12:77"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChainWithUpdatedRpcUrl",
            "nameLocation": "6438:25:77",
            "parameters": {
              "id": 23578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23574,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "6478:10:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23689,
                  "src": "6464:24:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23573,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6464:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23577,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "6503:5:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23689,
                  "src": "6490:18:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 23576,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 23575,
                      "name": "Chain",
                      "nameLocations": [
                        "6490:5:77"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 23239,
                      "src": "6490:5:77"
                    },
                    "referencedDeclaration": 23239,
                    "src": "6490:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6463:46:77"
            },
            "returnParameters": {
              "id": 23582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23581,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 23689,
                  "src": "6527:12:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$23239_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 23580,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 23579,
                      "name": "Chain",
                      "nameLocations": [
                        "6527:5:77"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 23239,
                      "src": "6527:5:77"
                    },
                    "referencedDeclaration": 23239,
                    "src": "6527:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$23239_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6526:14:77"
            },
            "scope": 23919,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 23699,
            "nodeType": "FunctionDefinition",
            "src": "7653:117:77",
            "nodes": [],
            "body": {
              "id": 23698,
              "nodeType": "Block",
              "src": "7716:54:77",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23696,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23694,
                      "name": "fallbackToDefaultRpcUrls",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23255,
                      "src": "7726:24:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23695,
                      "name": "useDefault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23691,
                      "src": "7753:10:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7726:37:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23697,
                  "nodeType": "ExpressionStatement",
                  "src": "7726:37:77"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setFallbackToDefaultRpcUrls",
            "nameLocation": "7662:27:77",
            "parameters": {
              "id": 23692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23691,
                  "mutability": "mutable",
                  "name": "useDefault",
                  "nameLocation": "7695:10:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23699,
                  "src": "7690:15:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 23690,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7690:4:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7689:17:77"
            },
            "returnParameters": {
              "id": 23693,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7716:0:77"
            },
            "scope": 23919,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23881,
            "nodeType": "FunctionDefinition",
            "src": "7776:2751:77",
            "nodes": [],
            "body": {
              "id": 23880,
              "nodeType": "Block",
              "src": "7815:2712:77",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 23702,
                    "name": "stdChainsInitialized",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 23223,
                    "src": "7829:20:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23704,
                  "nodeType": "IfStatement",
                  "src": "7825:33:77",
                  "trueBody": {
                    "functionReturnParameters": 23701,
                    "id": 23703,
                    "nodeType": "Return",
                    "src": "7851:7:77"
                  }
                },
                {
                  "expression": {
                    "id": 23707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23705,
                      "name": "stdChainsInitialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23223,
                      "src": "7868:20:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 23706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7891:4:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "7868:27:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 23708,
                  "nodeType": "ExpressionStatement",
                  "src": "7868:27:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "616e76696c",
                        "id": 23710,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8018:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b",
                          "typeString": "literal_string \"anvil\""
                        },
                        "value": "anvil"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "416e76696c",
                            "id": 23712,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8037:7:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                              "typeString": "literal_string \"Anvil\""
                            },
                            "value": "Anvil"
                          },
                          {
                            "hexValue": "3331333337",
                            "id": 23713,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8046:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31337_by_1",
                              "typeString": "int_const 31337"
                            },
                            "value": "31337"
                          },
                          {
                            "hexValue": "687474703a2f2f3132372e302e302e313a38353435",
                            "id": 23714,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8053:23:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_308a18cf3d9de3b161a842ef1e873581d7b16a5d4ea08170e123f95d25f33fe0",
                              "typeString": "literal_string \"http://127.0.0.1:8545\""
                            },
                            "value": "http://127.0.0.1:8545"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                              "typeString": "literal_string \"Anvil\""
                            },
                            {
                              "typeIdentifier": "t_rational_31337_by_1",
                              "typeString": "int_const 31337"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_308a18cf3d9de3b161a842ef1e873581d7b16a5d4ea08170e123f95d25f33fe0",
                              "typeString": "literal_string \"http://127.0.0.1:8545\""
                            }
                          ],
                          "id": 23711,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "8027:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23715,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8027:50:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b",
                          "typeString": "literal_string \"anvil\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23709,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "7992:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7992:86:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23717,
                  "nodeType": "ExpressionStatement",
                  "src": "7992:86:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d61696e6e6574",
                        "id": 23719,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8127:9:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff",
                          "typeString": "literal_string \"mainnet\""
                        },
                        "value": "mainnet"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "4d61696e6e6574",
                            "id": 23721,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8148:9:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                              "typeString": "literal_string \"Mainnet\""
                            },
                            "value": "Mainnet"
                          },
                          {
                            "hexValue": "31",
                            "id": 23722,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8159:1:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          {
                            "hexValue": "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 23723,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8162:63:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_1373fea4c12f646a43ebc6d1ea0e596114d1b5b436526018c86d996c7250aef0",
                              "typeString": "literal_string \"https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                            },
                            "value": "https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                              "typeString": "literal_string \"Mainnet\""
                            },
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_1373fea4c12f646a43ebc6d1ea0e596114d1b5b436526018c86d996c7250aef0",
                              "typeString": "literal_string \"https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                            }
                          ],
                          "id": 23720,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "8138:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23724,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8138:88:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff",
                          "typeString": "literal_string \"mainnet\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23718,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "8088:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8088:148:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23726,
                  "nodeType": "ExpressionStatement",
                  "src": "8088:148:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "676f65726c69",
                        "id": 23728,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8285:8:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a",
                          "typeString": "literal_string \"goerli\""
                        },
                        "value": "goerli"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "476f65726c69",
                            "id": 23730,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8305:8:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                              "typeString": "literal_string \"Goerli\""
                            },
                            "value": "Goerli"
                          },
                          {
                            "hexValue": "35",
                            "id": 23731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8315:1:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5_by_1",
                              "typeString": "int_const 5"
                            },
                            "value": "5"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 23732,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8318:62:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_eb46d1ff6486ad38c99bfbe75b668c3e422a65114b7e15a3a7eeca36edb48a42",
                              "typeString": "literal_string \"https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                            },
                            "value": "https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                              "typeString": "literal_string \"Goerli\""
                            },
                            {
                              "typeIdentifier": "t_rational_5_by_1",
                              "typeString": "int_const 5"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_eb46d1ff6486ad38c99bfbe75b668c3e422a65114b7e15a3a7eeca36edb48a42",
                              "typeString": "literal_string \"https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                            }
                          ],
                          "id": 23729,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "8295:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23733,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8295:86:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a",
                          "typeString": "literal_string \"goerli\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23727,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "8246:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23734,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8246:145:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23735,
                  "nodeType": "ExpressionStatement",
                  "src": "8246:145:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "7365706f6c6961",
                        "id": 23737,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8440:9:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a",
                          "typeString": "literal_string \"sepolia\""
                        },
                        "value": "sepolia"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "5365706f6c6961",
                            "id": 23739,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8461:9:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                              "typeString": "literal_string \"Sepolia\""
                            },
                            "value": "Sepolia"
                          },
                          {
                            "hexValue": "3131313535313131",
                            "id": 23740,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8472:8:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_11155111_by_1",
                              "typeString": "int_const 11155111"
                            },
                            "value": "11155111"
                          },
                          {
                            "hexValue": "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 23741,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8482:63:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_167447379e730a7d89231aec25edd721d4e0b02c818e31467228ef4a7c09810f",
                              "typeString": "literal_string \"https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                            },
                            "value": "https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                              "typeString": "literal_string \"Sepolia\""
                            },
                            {
                              "typeIdentifier": "t_rational_11155111_by_1",
                              "typeString": "int_const 11155111"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_167447379e730a7d89231aec25edd721d4e0b02c818e31467228ef4a7c09810f",
                              "typeString": "literal_string \"https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                            }
                          ],
                          "id": 23738,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "8451:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23742,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8451:95:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a",
                          "typeString": "literal_string \"sepolia\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23736,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "8401:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23743,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8401:155:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23744,
                  "nodeType": "ExpressionStatement",
                  "src": "8401:155:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6f7074696d69736d",
                        "id": 23746,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8592:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05",
                          "typeString": "literal_string \"optimism\""
                        },
                        "value": "optimism"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "4f7074696d69736d",
                            "id": 23748,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8614:10:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                              "typeString": "literal_string \"Optimism\""
                            },
                            "value": "Optimism"
                          },
                          {
                            "hexValue": "3130",
                            "id": 23749,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8626:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          {
                            "hexValue": "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f",
                            "id": 23750,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8630:29:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_38b9211512154272cdc8d9677b3720aef06041b8d31b5e68a6ffc7a4bb22d93e",
                              "typeString": "literal_string \"https://mainnet.optimism.io\""
                            },
                            "value": "https://mainnet.optimism.io"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                              "typeString": "literal_string \"Optimism\""
                            },
                            {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_38b9211512154272cdc8d9677b3720aef06041b8d31b5e68a6ffc7a4bb22d93e",
                              "typeString": "literal_string \"https://mainnet.optimism.io\""
                            }
                          ],
                          "id": 23747,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "8604:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23751,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8604:56:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05",
                          "typeString": "literal_string \"optimism\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23745,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "8566:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8566:95:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23753,
                  "nodeType": "ExpressionStatement",
                  "src": "8566:95:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6f7074696d69736d5f676f65726c69",
                        "id": 23755,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8697:17:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c",
                          "typeString": "literal_string \"optimism_goerli\""
                        },
                        "value": "optimism_goerli"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "4f7074696d69736d20476f65726c69",
                            "id": 23757,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8726:17:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                              "typeString": "literal_string \"Optimism Goerli\""
                            },
                            "value": "Optimism Goerli"
                          },
                          {
                            "hexValue": "343230",
                            "id": 23758,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8745:3:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_420_by_1",
                              "typeString": "int_const 420"
                            },
                            "value": "420"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f",
                            "id": 23759,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8750:28:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_ef3dbe59ba72d73e51c1959c67c0485880270dce59b4642a5dff6497ea5e55ad",
                              "typeString": "literal_string \"https://goerli.optimism.io\""
                            },
                            "value": "https://goerli.optimism.io"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                              "typeString": "literal_string \"Optimism Goerli\""
                            },
                            {
                              "typeIdentifier": "t_rational_420_by_1",
                              "typeString": "int_const 420"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_ef3dbe59ba72d73e51c1959c67c0485880270dce59b4642a5dff6497ea5e55ad",
                              "typeString": "literal_string \"https://goerli.optimism.io\""
                            }
                          ],
                          "id": 23756,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "8716:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23760,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8716:63:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c",
                          "typeString": "literal_string \"optimism_goerli\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23754,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "8671:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8671:109:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23762,
                  "nodeType": "ExpressionStatement",
                  "src": "8671:109:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6f6e65",
                        "id": 23764,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8816:14:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4",
                          "typeString": "literal_string \"arbitrum_one\""
                        },
                        "value": "arbitrum_one"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "417262697472756d204f6e65",
                            "id": 23766,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8842:14:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                              "typeString": "literal_string \"Arbitrum One\""
                            },
                            "value": "Arbitrum One"
                          },
                          {
                            "hexValue": "3432313631",
                            "id": 23767,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8858:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42161_by_1",
                              "typeString": "int_const 42161"
                            },
                            "value": "42161"
                          },
                          {
                            "hexValue": "68747470733a2f2f617262312e617262697472756d2e696f2f727063",
                            "id": 23768,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8865:30:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_ff28c1a1bf3c117d5956efad529d0ee22dcfc0fe5cbf5a03e0bdfcc3c6cac126",
                              "typeString": "literal_string \"https://arb1.arbitrum.io/rpc\""
                            },
                            "value": "https://arb1.arbitrum.io/rpc"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                              "typeString": "literal_string \"Arbitrum One\""
                            },
                            {
                              "typeIdentifier": "t_rational_42161_by_1",
                              "typeString": "int_const 42161"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_ff28c1a1bf3c117d5956efad529d0ee22dcfc0fe5cbf5a03e0bdfcc3c6cac126",
                              "typeString": "literal_string \"https://arb1.arbitrum.io/rpc\""
                            }
                          ],
                          "id": 23765,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "8832:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23769,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8832:64:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4",
                          "typeString": "literal_string \"arbitrum_one\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23763,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "8790:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8790:107:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23771,
                  "nodeType": "ExpressionStatement",
                  "src": "8790:107:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6f6e655f676f65726c69",
                        "id": 23773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8946:21:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4",
                          "typeString": "literal_string \"arbitrum_one_goerli\""
                        },
                        "value": "arbitrum_one_goerli"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "417262697472756d204f6e6520476f65726c69",
                            "id": 23775,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8979:21:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                              "typeString": "literal_string \"Arbitrum One Goerli\""
                            },
                            "value": "Arbitrum One Goerli"
                          },
                          {
                            "hexValue": "343231363133",
                            "id": 23776,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9002:6:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_421613_by_1",
                              "typeString": "int_const 421613"
                            },
                            "value": "421613"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063",
                            "id": 23777,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9010:39:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_d65fa49ed6bf0763184aace821262295f8ad23c20b74cd1f836fe5e06f5dd8ea",
                              "typeString": "literal_string \"https://goerli-rollup.arbitrum.io/rpc\""
                            },
                            "value": "https://goerli-rollup.arbitrum.io/rpc"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                              "typeString": "literal_string \"Arbitrum One Goerli\""
                            },
                            {
                              "typeIdentifier": "t_rational_421613_by_1",
                              "typeString": "int_const 421613"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_d65fa49ed6bf0763184aace821262295f8ad23c20b74cd1f836fe5e06f5dd8ea",
                              "typeString": "literal_string \"https://goerli-rollup.arbitrum.io/rpc\""
                            }
                          ],
                          "id": 23774,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "8969:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23778,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8969:81:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4",
                          "typeString": "literal_string \"arbitrum_one_goerli\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23772,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "8907:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23779,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8907:153:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23780,
                  "nodeType": "ExpressionStatement",
                  "src": "8907:153:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6e6f7661",
                        "id": 23782,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9096:15:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac",
                          "typeString": "literal_string \"arbitrum_nova\""
                        },
                        "value": "arbitrum_nova"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "417262697472756d204e6f7661",
                            "id": 23784,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9123:15:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                              "typeString": "literal_string \"Arbitrum Nova\""
                            },
                            "value": "Arbitrum Nova"
                          },
                          {
                            "hexValue": "3432313730",
                            "id": 23785,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9140:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42170_by_1",
                              "typeString": "int_const 42170"
                            },
                            "value": "42170"
                          },
                          {
                            "hexValue": "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063",
                            "id": 23786,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9147:30:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_a77f0a686c95785c75ada33247e30dc9ac80330a7f8eb521bebdf48f492ee4ac",
                              "typeString": "literal_string \"https://nova.arbitrum.io/rpc\""
                            },
                            "value": "https://nova.arbitrum.io/rpc"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                              "typeString": "literal_string \"Arbitrum Nova\""
                            },
                            {
                              "typeIdentifier": "t_rational_42170_by_1",
                              "typeString": "int_const 42170"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_a77f0a686c95785c75ada33247e30dc9ac80330a7f8eb521bebdf48f492ee4ac",
                              "typeString": "literal_string \"https://nova.arbitrum.io/rpc\""
                            }
                          ],
                          "id": 23783,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "9113:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23787,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9113:65:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac",
                          "typeString": "literal_string \"arbitrum_nova\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23781,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "9070:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23788,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9070:109:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23789,
                  "nodeType": "ExpressionStatement",
                  "src": "9070:109:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "706f6c79676f6e",
                        "id": 23791,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9215:9:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408",
                          "typeString": "literal_string \"polygon\""
                        },
                        "value": "polygon"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "506f6c79676f6e",
                            "id": 23793,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9236:9:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                              "typeString": "literal_string \"Polygon\""
                            },
                            "value": "Polygon"
                          },
                          {
                            "hexValue": "313337",
                            "id": 23794,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9247:3:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_137_by_1",
                              "typeString": "int_const 137"
                            },
                            "value": "137"
                          },
                          {
                            "hexValue": "68747470733a2f2f706f6c79676f6e2d7270632e636f6d",
                            "id": 23795,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9252:25:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_fda46ab670b83929623b4aa9bcfa97ff7b7376fa90a24a450a8561482232c5c0",
                              "typeString": "literal_string \"https://polygon-rpc.com\""
                            },
                            "value": "https://polygon-rpc.com"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                              "typeString": "literal_string \"Polygon\""
                            },
                            {
                              "typeIdentifier": "t_rational_137_by_1",
                              "typeString": "int_const 137"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_fda46ab670b83929623b4aa9bcfa97ff7b7376fa90a24a450a8561482232c5c0",
                              "typeString": "literal_string \"https://polygon-rpc.com\""
                            }
                          ],
                          "id": 23792,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "9226:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23796,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9226:52:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408",
                          "typeString": "literal_string \"polygon\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23790,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "9189:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23797,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9189:90:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23798,
                  "nodeType": "ExpressionStatement",
                  "src": "9189:90:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "706f6c79676f6e5f6d756d626169",
                        "id": 23800,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9328:16:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0",
                          "typeString": "literal_string \"polygon_mumbai\""
                        },
                        "value": "polygon_mumbai"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "506f6c79676f6e204d756d626169",
                            "id": 23802,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9356:16:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                              "typeString": "literal_string \"Polygon Mumbai\""
                            },
                            "value": "Polygon Mumbai"
                          },
                          {
                            "hexValue": "3830303031",
                            "id": 23803,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9374:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_80001_by_1",
                              "typeString": "int_const 80001"
                            },
                            "value": "80001"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d",
                            "id": 23804,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9381:35:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_73b526a6131ddfd959c21485254bd24a6ab94de746e87b78a515c1d42c7ee121",
                              "typeString": "literal_string \"https://rpc-mumbai.maticvigil.com\""
                            },
                            "value": "https://rpc-mumbai.maticvigil.com"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                              "typeString": "literal_string \"Polygon Mumbai\""
                            },
                            {
                              "typeIdentifier": "t_rational_80001_by_1",
                              "typeString": "int_const 80001"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_73b526a6131ddfd959c21485254bd24a6ab94de746e87b78a515c1d42c7ee121",
                              "typeString": "literal_string \"https://rpc-mumbai.maticvigil.com\""
                            }
                          ],
                          "id": 23801,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "9346:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23805,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9346:71:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0",
                          "typeString": "literal_string \"polygon_mumbai\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23799,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "9289:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23806,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9289:138:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23807,
                  "nodeType": "ExpressionStatement",
                  "src": "9289:138:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6176616c616e636865",
                        "id": 23809,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9463:11:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55",
                          "typeString": "literal_string \"avalanche\""
                        },
                        "value": "avalanche"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "4176616c616e636865",
                            "id": 23811,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9486:11:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                              "typeString": "literal_string \"Avalanche\""
                            },
                            "value": "Avalanche"
                          },
                          {
                            "hexValue": "3433313134",
                            "id": 23812,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9499:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43114_by_1",
                              "typeString": "int_const 43114"
                            },
                            "value": "43114"
                          },
                          {
                            "hexValue": "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063",
                            "id": 23813,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9506:39:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_429365eac47ed6b261c38927d854e528b743fc5a678b1b4ba631c511f305886a",
                              "typeString": "literal_string \"https://api.avax.network/ext/bc/C/rpc\""
                            },
                            "value": "https://api.avax.network/ext/bc/C/rpc"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                              "typeString": "literal_string \"Avalanche\""
                            },
                            {
                              "typeIdentifier": "t_rational_43114_by_1",
                              "typeString": "int_const 43114"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_429365eac47ed6b261c38927d854e528b743fc5a678b1b4ba631c511f305886a",
                              "typeString": "literal_string \"https://api.avax.network/ext/bc/C/rpc\""
                            }
                          ],
                          "id": 23810,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "9476:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23814,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9476:70:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55",
                          "typeString": "literal_string \"avalanche\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23808,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "9437:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23815,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9437:110:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23816,
                  "nodeType": "ExpressionStatement",
                  "src": "9437:110:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6176616c616e6368655f66756a69",
                        "id": 23818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9596:16:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692",
                          "typeString": "literal_string \"avalanche_fuji\""
                        },
                        "value": "avalanche_fuji"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "4176616c616e6368652046756a69",
                            "id": 23820,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9624:16:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                              "typeString": "literal_string \"Avalanche Fuji\""
                            },
                            "value": "Avalanche Fuji"
                          },
                          {
                            "hexValue": "3433313133",
                            "id": 23821,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9642:5:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43113_by_1",
                              "typeString": "int_const 43113"
                            },
                            "value": "43113"
                          },
                          {
                            "hexValue": "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063",
                            "id": 23822,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9649:44:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_d6621ea822eabf6c190358ea82de0c52d3503dcce8117b3366a8a3bd96eb422d",
                              "typeString": "literal_string \"https://api.avax-test.network/ext/bc/C/rpc\""
                            },
                            "value": "https://api.avax-test.network/ext/bc/C/rpc"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                              "typeString": "literal_string \"Avalanche Fuji\""
                            },
                            {
                              "typeIdentifier": "t_rational_43113_by_1",
                              "typeString": "int_const 43113"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_d6621ea822eabf6c190358ea82de0c52d3503dcce8117b3366a8a3bd96eb422d",
                              "typeString": "literal_string \"https://api.avax-test.network/ext/bc/C/rpc\""
                            }
                          ],
                          "id": 23819,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "9614:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9614:80:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692",
                          "typeString": "literal_string \"avalanche_fuji\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23817,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "9557:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23824,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9557:147:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23825,
                  "nodeType": "ExpressionStatement",
                  "src": "9557:147:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "626e625f736d6172745f636861696e",
                        "id": 23827,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9753:17:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e",
                          "typeString": "literal_string \"bnb_smart_chain\""
                        },
                        "value": "bnb_smart_chain"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "424e4220536d61727420436861696e",
                            "id": 23829,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9782:17:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                              "typeString": "literal_string \"BNB Smart Chain\""
                            },
                            "value": "BNB Smart Chain"
                          },
                          {
                            "hexValue": "3536",
                            "id": 23830,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9801:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_56_by_1",
                              "typeString": "int_const 56"
                            },
                            "value": "56"
                          },
                          {
                            "hexValue": "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267",
                            "id": 23831,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9805:35:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_e2b4215bd50ab260c8c9f18e36ea07b1f952450853bcf024123d5767a40d4719",
                              "typeString": "literal_string \"https://bsc-dataseed1.binance.org\""
                            },
                            "value": "https://bsc-dataseed1.binance.org"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                              "typeString": "literal_string \"BNB Smart Chain\""
                            },
                            {
                              "typeIdentifier": "t_rational_56_by_1",
                              "typeString": "int_const 56"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_e2b4215bd50ab260c8c9f18e36ea07b1f952450853bcf024123d5767a40d4719",
                              "typeString": "literal_string \"https://bsc-dataseed1.binance.org\""
                            }
                          ],
                          "id": 23828,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "9772:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23832,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9772:69:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e",
                          "typeString": "literal_string \"bnb_smart_chain\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23826,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "9714:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9714:137:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23834,
                  "nodeType": "ExpressionStatement",
                  "src": "9714:137:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "626e625f736d6172745f636861696e5f746573746e6574",
                        "id": 23836,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9900:25:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29",
                          "typeString": "literal_string \"bnb_smart_chain_testnet\""
                        },
                        "value": "bnb_smart_chain_testnet"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "424e4220536d61727420436861696e20546573746e6574",
                            "id": 23838,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9949:25:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                              "typeString": "literal_string \"BNB Smart Chain Testnet\""
                            },
                            "value": "BNB Smart Chain Testnet"
                          },
                          {
                            "hexValue": "3937",
                            "id": 23839,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9976:2:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_97_by_1",
                              "typeString": "int_const 97"
                            },
                            "value": "97"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c",
                            "id": 23840,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9980:41:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6660930de41ed298fb6a2348f33b08e5736a3823e6ffb86942097b237e075960",
                              "typeString": "literal_string \"https://rpc.ankr.com/bsc_testnet_chapel\""
                            },
                            "value": "https://rpc.ankr.com/bsc_testnet_chapel"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                              "typeString": "literal_string \"BNB Smart Chain Testnet\""
                            },
                            {
                              "typeIdentifier": "t_rational_97_by_1",
                              "typeString": "int_const 97"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_6660930de41ed298fb6a2348f33b08e5736a3823e6ffb86942097b237e075960",
                              "typeString": "literal_string \"https://rpc.ankr.com/bsc_testnet_chapel\""
                            }
                          ],
                          "id": 23837,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "9939:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23841,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9939:83:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29",
                          "typeString": "literal_string \"bnb_smart_chain_testnet\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23835,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "9861:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23842,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9861:171:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23843,
                  "nodeType": "ExpressionStatement",
                  "src": "9861:171:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "676e6f7369735f636861696e",
                        "id": 23845,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10068:14:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595",
                          "typeString": "literal_string \"gnosis_chain\""
                        },
                        "value": "gnosis_chain"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "476e6f73697320436861696e",
                            "id": 23847,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10094:14:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                              "typeString": "literal_string \"Gnosis Chain\""
                            },
                            "value": "Gnosis Chain"
                          },
                          {
                            "hexValue": "313030",
                            "id": 23848,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10110:3:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d",
                            "id": 23849,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10115:29:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_127e02590d58e22164456f76136047039faabc2ca27eb41939081a3e775b50df",
                              "typeString": "literal_string \"https://rpc.gnosischain.com\""
                            },
                            "value": "https://rpc.gnosischain.com"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                              "typeString": "literal_string \"Gnosis Chain\""
                            },
                            {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_127e02590d58e22164456f76136047039faabc2ca27eb41939081a3e775b50df",
                              "typeString": "literal_string \"https://rpc.gnosischain.com\""
                            }
                          ],
                          "id": 23846,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "10084:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23850,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10084:61:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595",
                          "typeString": "literal_string \"gnosis_chain\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23844,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "10042:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10042:104:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23852,
                  "nodeType": "ExpressionStatement",
                  "src": "10042:104:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e6265616d",
                        "id": 23854,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10182:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d",
                          "typeString": "literal_string \"moonbeam\""
                        },
                        "value": "moonbeam"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "4d6f6f6e6265616d",
                            "id": 23856,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10204:10:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                              "typeString": "literal_string \"Moonbeam\""
                            },
                            "value": "Moonbeam"
                          },
                          {
                            "hexValue": "31323834",
                            "id": 23857,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10216:4:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1284_by_1",
                              "typeString": "int_const 1284"
                            },
                            "value": "1284"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 23858,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10222:34:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_cf5d37a68a82777d3f0adcdf64b39d98f1e820688e4ced698cd753bbd1e32191",
                              "typeString": "literal_string \"https://rpc.api.moonbeam.network\""
                            },
                            "value": "https://rpc.api.moonbeam.network"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                              "typeString": "literal_string \"Moonbeam\""
                            },
                            {
                              "typeIdentifier": "t_rational_1284_by_1",
                              "typeString": "int_const 1284"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_cf5d37a68a82777d3f0adcdf64b39d98f1e820688e4ced698cd753bbd1e32191",
                              "typeString": "literal_string \"https://rpc.api.moonbeam.network\""
                            }
                          ],
                          "id": 23855,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "10194:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23859,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10194:63:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d",
                          "typeString": "literal_string \"moonbeam\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23853,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "10156:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10156:102:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23861,
                  "nodeType": "ExpressionStatement",
                  "src": "10156:102:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e7269766572",
                        "id": 23863,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10307:11:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a",
                          "typeString": "literal_string \"moonriver\""
                        },
                        "value": "moonriver"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "4d6f6f6e7269766572",
                            "id": 23865,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10330:11:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                              "typeString": "literal_string \"Moonriver\""
                            },
                            "value": "Moonriver"
                          },
                          {
                            "hexValue": "31323835",
                            "id": 23866,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10343:4:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1285_by_1",
                              "typeString": "int_const 1285"
                            },
                            "value": "1285"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 23867,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10349:44:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_cdf0715ef9b420dea4501d55a4c023de5bc6e2be267c3e3ec8345021a77f3e46",
                              "typeString": "literal_string \"https://rpc.api.moonriver.moonbeam.network\""
                            },
                            "value": "https://rpc.api.moonriver.moonbeam.network"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                              "typeString": "literal_string \"Moonriver\""
                            },
                            {
                              "typeIdentifier": "t_rational_1285_by_1",
                              "typeString": "int_const 1285"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_cdf0715ef9b420dea4501d55a4c023de5bc6e2be267c3e3ec8345021a77f3e46",
                              "typeString": "literal_string \"https://rpc.api.moonriver.moonbeam.network\""
                            }
                          ],
                          "id": 23864,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "10320:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23868,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10320:74:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a",
                          "typeString": "literal_string \"moonriver\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23862,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "10268:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23869,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10268:136:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23870,
                  "nodeType": "ExpressionStatement",
                  "src": "10268:136:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e62617365",
                        "id": 23872,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10440:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e",
                          "typeString": "literal_string \"moonbase\""
                        },
                        "value": "moonbase"
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "4d6f6f6e62617365",
                            "id": 23874,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10462:10:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                              "typeString": "literal_string \"Moonbase\""
                            },
                            "value": "Moonbase"
                          },
                          {
                            "hexValue": "31323837",
                            "id": 23875,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10474:4:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1287_by_1",
                              "typeString": "int_const 1287"
                            },
                            "value": "1287"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 23876,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10480:38:77",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_611da7a50d9bf940412b47209c78030562dd2047afcf97dad69e15217355b585",
                              "typeString": "literal_string \"https://rpc.testnet.moonbeam.network\""
                            },
                            "value": "https://rpc.testnet.moonbeam.network"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                              "typeString": "literal_string \"Moonbase\""
                            },
                            {
                              "typeIdentifier": "t_rational_1287_by_1",
                              "typeString": "int_const 1287"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_611da7a50d9bf940412b47209c78030562dd2047afcf97dad69e15217355b585",
                              "typeString": "literal_string \"https://rpc.testnet.moonbeam.network\""
                            }
                          ],
                          "id": 23873,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23230,
                          "src": "10452:9:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$23230_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 23877,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10452:67:77",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e",
                          "typeString": "literal_string \"moonbase\""
                        },
                        {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23871,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23918,
                      "src": "10414:25:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10414:106:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23879,
                  "nodeType": "ExpressionStatement",
                  "src": "10414:106:77"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initializeStdChains",
            "nameLocation": "7785:19:77",
            "parameters": {
              "id": 23700,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7804:2:77"
            },
            "returnParameters": {
              "id": 23701,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7815:0:77"
            },
            "scope": 23919,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 23918,
            "nodeType": "FunctionDefinition",
            "src": "10609:305:77",
            "nodes": [],
            "body": {
              "id": 23917,
              "nodeType": "Block",
              "src": "10702:212:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    23890
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 23890,
                      "mutability": "mutable",
                      "name": "rpcUrl",
                      "nameLocation": "10726:6:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 23917,
                      "src": "10712:20:77",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 23889,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "10712:6:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 23893,
                  "initialValue": {
                    "expression": {
                      "id": 23891,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23886,
                      "src": "10735:5:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                        "typeString": "struct StdChains.ChainData memory"
                      }
                    },
                    "id": 23892,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "10741:6:77",
                    "memberName": "rpcUrl",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 23229,
                    "src": "10735:12:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10712:35:77"
                },
                {
                  "expression": {
                    "id": 23898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 23894,
                        "name": "defaultRpcUrls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23248,
                        "src": "10757:14:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                          "typeString": "mapping(string memory => string storage ref)"
                        }
                      },
                      "id": 23896,
                      "indexExpression": {
                        "id": 23895,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23883,
                        "src": "10772:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10757:26:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23897,
                      "name": "rpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23890,
                      "src": "10786:6:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "10757:35:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 23899,
                  "nodeType": "ExpressionStatement",
                  "src": "10757:35:77"
                },
                {
                  "expression": {
                    "id": 23904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 23900,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23886,
                        "src": "10802:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 23902,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10808:6:77",
                      "memberName": "rpcUrl",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23229,
                      "src": "10802:12:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "",
                      "id": 23903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10817:2:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                        "typeString": "literal_string \"\""
                      },
                      "value": ""
                    },
                    "src": "10802:17:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 23905,
                  "nodeType": "ExpressionStatement",
                  "src": "10802:17:77"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23907,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23883,
                        "src": "10838:10:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 23908,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23886,
                        "src": "10850:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
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
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 23906,
                      "name": "setChain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        23474,
                        23495
                      ],
                      "referencedDeclaration": 23474,
                      "src": "10829:8:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$23230_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 23909,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10829:27:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23910,
                  "nodeType": "ExpressionStatement",
                  "src": "10829:27:77"
                },
                {
                  "expression": {
                    "id": 23915,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 23911,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23886,
                        "src": "10866:5:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 23913,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10872:6:77",
                      "memberName": "rpcUrl",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23229,
                      "src": "10866:12:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23914,
                      "name": "rpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23890,
                      "src": "10881:6:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "10866:21:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 23916,
                  "nodeType": "ExpressionStatement",
                  "src": "10866:21:77"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChainWithDefaultRpcUrl",
            "nameLocation": "10618:25:77",
            "parameters": {
              "id": 23887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23883,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "10658:10:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23918,
                  "src": "10644:24:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23882,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10644:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23886,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "10687:5:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 23918,
                  "src": "10670:22:77",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ChainData_$23230_memory_ptr",
                    "typeString": "struct StdChains.ChainData"
                  },
                  "typeName": {
                    "id": 23885,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 23884,
                      "name": "ChainData",
                      "nameLocations": [
                        "10670:9:77"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 23230,
                      "src": "10670:9:77"
                    },
                    "referencedDeclaration": 23230,
                    "src": "10670:9:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ChainData_$23230_storage_ptr",
                      "typeString": "struct StdChains.ChainData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10643:50:77"
            },
            "returnParameters": {
              "id": 23888,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10702:0:77"
            },
            "scope": 23919,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "StdChains",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 23204,
          "nodeType": "StructuredDocumentation",
          "src": "99:1799:77",
          "text": " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          23919
        ],
        "name": "StdChains",
        "nameLocation": "1917:9:77",
        "scope": 23920,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 77
} as const;
