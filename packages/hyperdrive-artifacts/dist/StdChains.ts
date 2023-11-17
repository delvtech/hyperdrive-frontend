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
    "id": 20570,
    "exportedSymbols": {
      "StdChains": [
        20569
      ],
      "VmSafe": [
        29055
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:10885:66",
    "nodes": [
      {
        "id": 19851,
        "nodeType": "PragmaDirective",
        "src": "32:31:66",
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
        "id": 19853,
        "nodeType": "ImportDirective",
        "src": "65:32:66",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20570,
        "sourceUnit": 29528,
        "symbolAliases": [
          {
            "foreign": {
              "id": 19852,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 29055,
              "src": "73:6:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20569,
        "nodeType": "ContractDefinition",
        "src": "1899:9017:66",
        "nodes": [
          {
            "id": 19871,
            "nodeType": "VariableDeclaration",
            "src": "1933:92:66",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "1957:2:66",
            "scope": 20569,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$29055",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 19856,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 19855,
                "name": "VmSafe",
                "nameLocations": [
                  "1933:6:66"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 29055,
                "src": "1933:6:66"
              },
              "referencedDeclaration": 29055,
              "src": "1933:6:66",
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
                                  "id": 19865,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2003:17:66",
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
                                "id": 19864,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "1993:9:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 19866,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1993:28:66",
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
                            "id": 19863,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1985:7:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 19862,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "1985:7:66",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 19867,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1985:37:66",
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
                        "id": 19861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1977:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 19860,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "1977:7:66",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 19868,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1977:46:66",
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
                    "id": 19859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "1969:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 19858,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1969:7:66",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 19869,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1969:55:66",
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
                "id": 19857,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 29055,
                "src": "1962:6:66",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$29055_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 19870,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1962:63:66",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$29055",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 19873,
            "nodeType": "VariableDeclaration",
            "src": "2032:33:66",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "stdChainsInitialized",
            "nameLocation": "2045:20:66",
            "scope": 20569,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 19872,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "2032:4:66",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "private"
          },
          {
            "id": 19880,
            "nodeType": "StructDefinition",
            "src": "2072:93:66",
            "nodes": [],
            "canonicalName": "StdChains.ChainData",
            "members": [
              {
                "constant": false,
                "id": 19875,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "2106:4:66",
                "nodeType": "VariableDeclaration",
                "scope": 19880,
                "src": "2099:11:66",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19874,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2099:6:66",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19877,
                "mutability": "mutable",
                "name": "chainId",
                "nameLocation": "2128:7:66",
                "nodeType": "VariableDeclaration",
                "scope": 19880,
                "src": "2120:15:66",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 19876,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2120:7:66",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19879,
                "mutability": "mutable",
                "name": "rpcUrl",
                "nameLocation": "2152:6:66",
                "nodeType": "VariableDeclaration",
                "scope": 19880,
                "src": "2145:13:66",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19878,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2145:6:66",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ChainData",
            "nameLocation": "2079:9:66",
            "scope": 20569,
            "visibility": "public"
          },
          {
            "id": 19889,
            "nodeType": "StructDefinition",
            "src": "2171:598:66",
            "nodes": [],
            "canonicalName": "StdChains.Chain",
            "members": [
              {
                "constant": false,
                "id": 19882,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "2228:4:66",
                "nodeType": "VariableDeclaration",
                "scope": 19889,
                "src": "2221:11:66",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19881,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2221:6:66",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19884,
                "mutability": "mutable",
                "name": "chainId",
                "nameLocation": "2283:7:66",
                "nodeType": "VariableDeclaration",
                "scope": 19889,
                "src": "2275:15:66",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 19883,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2275:7:66",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19886,
                "mutability": "mutable",
                "name": "chainAlias",
                "nameLocation": "2383:10:66",
                "nodeType": "VariableDeclaration",
                "scope": 19889,
                "src": "2376:17:66",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19885,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2376:6:66",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19888,
                "mutability": "mutable",
                "name": "rpcUrl",
                "nameLocation": "2756:6:66",
                "nodeType": "VariableDeclaration",
                "scope": 19889,
                "src": "2749:13:66",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19887,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2749:6:66",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Chain",
            "nameLocation": "2178:5:66",
            "scope": 20569,
            "visibility": "public"
          },
          {
            "id": 19894,
            "nodeType": "VariableDeclaration",
            "src": "2873:39:66",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "chains",
            "nameLocation": "2906:6:66",
            "scope": 20569,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19889_storage_$",
              "typeString": "mapping(string => struct StdChains.Chain)"
            },
            "typeName": {
              "id": 19893,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 19890,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2881:6:66",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "2873:24:66",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19889_storage_$",
                "typeString": "mapping(string => struct StdChains.Chain)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 19892,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 19891,
                  "name": "Chain",
                  "nameLocations": [
                    "2891:5:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 19889,
                  "src": "2891:5:66"
                },
                "referencedDeclaration": 19889,
                "src": "2891:5:66",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Chain_$19889_storage_ptr",
                  "typeString": "struct StdChains.Chain"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 19898,
            "nodeType": "VariableDeclaration",
            "src": "2978:48:66",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "defaultRpcUrls",
            "nameLocation": "3012:14:66",
            "scope": 20569,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
              "typeString": "mapping(string => string)"
            },
            "typeName": {
              "id": 19897,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 19895,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2986:6:66",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "2978:25:66",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                "typeString": "mapping(string => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 19896,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2996:6:66",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 19902,
            "nodeType": "VariableDeclaration",
            "src": "3075:44:66",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "idToAlias",
            "nameLocation": "3110:9:66",
            "scope": 20569,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 19901,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 19899,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "3083:7:66",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "3075:26:66",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 19900,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "3094:6:66",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 19905,
            "nodeType": "VariableDeclaration",
            "src": "3126:44:66",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "fallbackToDefaultRpcUrls",
            "nameLocation": "3139:24:66",
            "scope": 20569,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 19903,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "3126:4:66",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "hexValue": "74727565",
              "id": 19904,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3166:4:66",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "true"
            },
            "visibility": "private"
          },
          {
            "id": 19957,
            "nodeType": "FunctionDefinition",
            "src": "3255:524:66",
            "nodes": [],
            "body": {
              "id": 19956,
              "nodeType": "Block",
              "src": "3345:434:66",
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
                        "id": 19920,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 19916,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19907,
                                "src": "3369:10:66",
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
                              "id": 19915,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3363:5:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 19914,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3363:5:66",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 19917,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3363:17:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 19918,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3381:6:66",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "3363:24:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19919,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3391:1:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3363:29:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        "id": 19921,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3394:69:66",
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
                      "id": 19913,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3355:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3355:109:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19923,
                  "nodeType": "ExpressionStatement",
                  "src": "3355:109:66"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 19924,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20531,
                      "src": "3475:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 19925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3475:21:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19926,
                  "nodeType": "ExpressionStatement",
                  "src": "3475:21:66"
                },
                {
                  "expression": {
                    "id": 19931,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19927,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19911,
                      "src": "3506:5:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 19928,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19894,
                        "src": "3514:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19889_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 19930,
                      "indexExpression": {
                        "id": 19929,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19907,
                        "src": "3521:10:66",
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
                      "src": "3514:18:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "src": "3506:26:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 19932,
                  "nodeType": "ExpressionStatement",
                  "src": "3506:26:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 19937,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 19934,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19911,
                            "src": "3563:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                              "typeString": "struct StdChains.Chain memory"
                            }
                          },
                          "id": 19935,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3569:7:66",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19884,
                          "src": "3563:13:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19936,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3580:1:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3563:18:66",
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
                                "id": 19942,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3619:49:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                  "typeString": "literal_string \"StdChains getChain(string): Chain with alias \"\""
                                },
                                "value": "StdChains getChain(string): Chain with alias \""
                              },
                              {
                                "id": 19943,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19907,
                                "src": "3670:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "22206e6f7420666f756e642e",
                                "id": 19944,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3682:15:66",
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
                                "id": 19940,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "3602:3:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 19941,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "3606:12:66",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "3602:16:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 19945,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3602:96:66",
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
                          "id": 19939,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3595:6:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 19938,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "3595:6:66",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 19946,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3595:104:66",
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
                      "id": 19933,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3542:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19947,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3542:167:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19948,
                  "nodeType": "ExpressionStatement",
                  "src": "3542:167:66"
                },
                {
                  "expression": {
                    "id": 19954,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19949,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19911,
                      "src": "3720:5:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 19951,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19907,
                          "src": "3754:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "id": 19952,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19911,
                          "src": "3766:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
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
                            "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
                          }
                        ],
                        "id": 19950,
                        "name": "getChainWithUpdatedRpcUrl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20339,
                        "src": "3728:25:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$19889_memory_ptr_$returns$_t_struct$_Chain_$19889_memory_ptr_$",
                          "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                        }
                      },
                      "id": 19953,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3728:44:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "3720:52:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 19955,
                  "nodeType": "ExpressionStatement",
                  "src": "3720:52:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChain",
            "nameLocation": "3264:8:66",
            "parameters": {
              "id": 19908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19907,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "3287:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 19957,
                  "src": "3273:24:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19906,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3273:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3272:26:66"
            },
            "returnParameters": {
              "id": 19912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19911,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "3338:5:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 19957,
                  "src": "3325:18:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 19910,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 19909,
                      "name": "Chain",
                      "nameLocations": [
                        "3325:5:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19889,
                      "src": "3325:5:66"
                    },
                    "referencedDeclaration": 19889,
                    "src": "3325:5:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3324:20:66"
            },
            "scope": 20569,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 20014,
            "nodeType": "FunctionDefinition",
            "src": "3785:541:66",
            "nodes": [],
            "body": {
              "id": 20013,
              "nodeType": "Block",
              "src": "3866:460:66",
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
                        "id": 19968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 19966,
                          "name": "chainId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19959,
                          "src": "3884:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19967,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3895:1:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3884:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e",
                        "id": 19969,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3898:52:66",
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
                      "id": 19965,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3876:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3876:75:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19971,
                  "nodeType": "ExpressionStatement",
                  "src": "3876:75:66"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 19972,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20531,
                      "src": "3961:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 19973,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3961:21:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19974,
                  "nodeType": "ExpressionStatement",
                  "src": "3961:21:66"
                },
                {
                  "assignments": [
                    19976
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19976,
                      "mutability": "mutable",
                      "name": "chainAlias",
                      "nameLocation": "4006:10:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 20013,
                      "src": "3992:24:66",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 19975,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3992:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19980,
                  "initialValue": {
                    "baseExpression": {
                      "id": 19977,
                      "name": "idToAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19902,
                      "src": "4019:9:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 19979,
                    "indexExpression": {
                      "id": 19978,
                      "name": "chainId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19959,
                      "src": "4029:7:66",
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
                    "src": "4019:18:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3992:45:66"
                },
                {
                  "expression": {
                    "id": 19985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19981,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19963,
                      "src": "4048:5:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 19982,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19894,
                        "src": "4056:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19889_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 19984,
                      "indexExpression": {
                        "id": 19983,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19976,
                        "src": "4063:10:66",
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
                      "src": "4056:18:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "src": "4048:26:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 19986,
                  "nodeType": "ExpressionStatement",
                  "src": "4048:26:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 19991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 19988,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19963,
                            "src": "4106:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                              "typeString": "struct StdChains.Chain memory"
                            }
                          },
                          "id": 19989,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4112:7:66",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19884,
                          "src": "4106:13:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4123:1:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4106:18:66",
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
                                "id": 19996,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4162:45:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                  "typeString": "literal_string \"StdChains getChain(uint256): Chain with ID \""
                                },
                                "value": "StdChains getChain(uint256): Chain with ID "
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 19999,
                                    "name": "chainId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19959,
                                    "src": "4221:7:66",
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
                                    "id": 19997,
                                    "name": "vm",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19871,
                                    "src": "4209:2:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VmSafe_$29055",
                                      "typeString": "contract VmSafe"
                                    }
                                  },
                                  "id": 19998,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4212:8:66",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 28587,
                                  "src": "4209:11:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure external returns (string memory)"
                                  }
                                },
                                "id": 20000,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4209:20:66",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "206e6f7420666f756e642e",
                                "id": 20001,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4231:13:66",
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
                                "id": 19994,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "4145:3:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 19995,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "4149:12:66",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "4145:16:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 20002,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4145:100:66",
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
                          "id": 19993,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4138:6:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 19992,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4138:6:66",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 20003,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4138:108:66",
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
                      "id": 19987,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4085:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 20004,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4085:171:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20005,
                  "nodeType": "ExpressionStatement",
                  "src": "4085:171:66"
                },
                {
                  "expression": {
                    "id": 20011,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20006,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19963,
                      "src": "4267:5:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 20008,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19976,
                          "src": "4301:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "id": 20009,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19963,
                          "src": "4313:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
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
                            "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
                          }
                        ],
                        "id": 20007,
                        "name": "getChainWithUpdatedRpcUrl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20339,
                        "src": "4275:25:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$19889_memory_ptr_$returns$_t_struct$_Chain_$19889_memory_ptr_$",
                          "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                        }
                      },
                      "id": 20010,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4275:44:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "4267:52:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 20012,
                  "nodeType": "ExpressionStatement",
                  "src": "4267:52:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChain",
            "nameLocation": "3794:8:66",
            "parameters": {
              "id": 19960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19959,
                  "mutability": "mutable",
                  "name": "chainId",
                  "nameLocation": "3811:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20014,
                  "src": "3803:15:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19958,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3803:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3802:17:66"
            },
            "returnParameters": {
              "id": 19964,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19963,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "3859:5:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20014,
                  "src": "3846:18:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 19962,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 19961,
                      "name": "Chain",
                      "nameLocations": [
                        "3846:5:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19889,
                      "src": "3846:5:66"
                    },
                    "referencedDeclaration": 19889,
                    "src": "3846:5:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3845:20:66"
            },
            "scope": 20569,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 20124,
            "nodeType": "FunctionDefinition",
            "src": "4397:1173:66",
            "nodes": [],
            "body": {
              "id": 20123,
              "nodeType": "Block",
              "src": "4482:1088:66",
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
                        "id": 20029,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 20025,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20016,
                                "src": "4519:10:66",
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
                              "id": 20024,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4513:5:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 20023,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "4513:5:66",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 20026,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4513:17:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 20027,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4531:6:66",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "4513:24:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 20028,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4541:1:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4513:29:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        "id": 20030,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4556:79:66",
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
                      "id": 20022,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4492:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 20031,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4492:153:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20032,
                  "nodeType": "ExpressionStatement",
                  "src": "4492:153:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 20037,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 20034,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20019,
                            "src": "4664:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 20035,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4670:7:66",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19877,
                          "src": "4664:13:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 20036,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4681:1:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4664:18:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e",
                        "id": 20038,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4684:61:66",
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
                      "id": 20033,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4656:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 20039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4656:90:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20040,
                  "nodeType": "ExpressionStatement",
                  "src": "4656:90:66"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 20041,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20531,
                      "src": "4757:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 20042,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4757:21:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20043,
                  "nodeType": "ExpressionStatement",
                  "src": "4757:21:66"
                },
                {
                  "assignments": [
                    20045
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20045,
                      "mutability": "mutable",
                      "name": "foundAlias",
                      "nameLocation": "4802:10:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 20123,
                      "src": "4788:24:66",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 20044,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "4788:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20050,
                  "initialValue": {
                    "baseExpression": {
                      "id": 20046,
                      "name": "idToAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19902,
                      "src": "4815:9:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 20049,
                    "indexExpression": {
                      "expression": {
                        "id": 20047,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20019,
                        "src": "4825:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 20048,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4831:7:66",
                      "memberName": "chainId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 19877,
                      "src": "4825:13:66",
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
                    "src": "4815:24:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4788:51:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 20072,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 20058,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 20054,
                                  "name": "foundAlias",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20045,
                                  "src": "4877:10:66",
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
                                "id": 20053,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4871:5:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 20052,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4871:5:66",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 20055,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4871:17:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 20056,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4889:6:66",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "4871:24:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 20057,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4899:1:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4871:29:66",
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
                          "id": 20071,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 20062,
                                    "name": "foundAlias",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20045,
                                    "src": "4920:10:66",
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
                                  "id": 20061,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4914:5:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                    "typeString": "type(bytes storage pointer)"
                                  },
                                  "typeName": {
                                    "id": 20060,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4914:5:66",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 20063,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4914:17:66",
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
                              "id": 20059,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "4904:9:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 20064,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4904:28:66",
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
                                    "id": 20068,
                                    "name": "chainAlias",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20016,
                                    "src": "4952:10:66",
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
                                  "id": 20067,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4946:5:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                    "typeString": "type(bytes storage pointer)"
                                  },
                                  "typeName": {
                                    "id": 20066,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4946:5:66",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 20069,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4946:17:66",
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
                              "id": 20065,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "4936:9:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 20070,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4936:28:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4904:60:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4871:93:66",
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
                                "id": 20077,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5040:49:66",
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
                                      "id": 20080,
                                      "name": "chain",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20019,
                                      "src": "5123:5:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                                        "typeString": "struct StdChains.ChainData memory"
                                      }
                                    },
                                    "id": 20081,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "5129:7:66",
                                    "memberName": "chainId",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 19877,
                                    "src": "5123:13:66",
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
                                    "id": 20078,
                                    "name": "vm",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19871,
                                    "src": "5111:2:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VmSafe_$29055",
                                      "typeString": "contract VmSafe"
                                    }
                                  },
                                  "id": 20079,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5114:8:66",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 28587,
                                  "src": "5111:11:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure external returns (string memory)"
                                  }
                                },
                                "id": 20082,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5111:26:66",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "20616c726561647920757365642062792022",
                                "id": 20083,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5159:21:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                  "typeString": "literal_string \" already used by \"\""
                                },
                                "value": " already used by \""
                              },
                              {
                                "id": 20084,
                                "name": "foundAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20045,
                                "src": "5202:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "222e",
                                "id": 20085,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5234:5:66",
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
                                "id": 20075,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "5002:3:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 20076,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "5006:12:66",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "5002:16:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 20086,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5002:255:66",
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
                          "id": 20074,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4978:6:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 20073,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4978:6:66",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 20087,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4978:293:66",
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
                      "id": 20051,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4850:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 20088,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4850:431:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20089,
                  "nodeType": "ExpressionStatement",
                  "src": "4850:431:66"
                },
                {
                  "assignments": [
                    20091
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20091,
                      "mutability": "mutable",
                      "name": "oldChainId",
                      "nameLocation": "5300:10:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 20123,
                      "src": "5292:18:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 20090,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5292:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20096,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 20092,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19894,
                        "src": "5313:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19889_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 20094,
                      "indexExpression": {
                        "id": 20093,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20016,
                        "src": "5320:10:66",
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
                      "src": "5313:18:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "id": 20095,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5332:7:66",
                    "memberName": "chainId",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 19884,
                    "src": "5313:26:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5292:47:66"
                },
                {
                  "expression": {
                    "id": 20100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "5349:28:66",
                    "subExpression": {
                      "baseExpression": {
                        "id": 20097,
                        "name": "idToAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19902,
                        "src": "5356:9:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 20099,
                      "indexExpression": {
                        "id": 20098,
                        "name": "oldChainId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20091,
                        "src": "5366:10:66",
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
                      "src": "5356:21:66",
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
                  "id": 20101,
                  "nodeType": "ExpressionStatement",
                  "src": "5349:28:66"
                },
                {
                  "expression": {
                    "id": 20114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 20102,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19894,
                        "src": "5388:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19889_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 20104,
                      "indexExpression": {
                        "id": 20103,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20016,
                        "src": "5395:10:66",
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
                      "src": "5388:18:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 20106,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20019,
                            "src": "5434:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 20107,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5440:4:66",
                          "memberName": "name",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19875,
                          "src": "5434:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 20108,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20019,
                            "src": "5455:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 20109,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5461:7:66",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19877,
                          "src": "5455:13:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20110,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20016,
                          "src": "5482:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 20111,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20019,
                            "src": "5502:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 20112,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5508:6:66",
                          "memberName": "rpcUrl",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19879,
                          "src": "5502:12:66",
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
                        "id": 20105,
                        "name": "Chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19889,
                        "src": "5421:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Chain_$19889_storage_ptr_$",
                          "typeString": "type(struct StdChains.Chain storage pointer)"
                        }
                      },
                      "id": 20113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "5428:4:66",
                        "5446:7:66",
                        "5470:10:66",
                        "5494:6:66"
                      ],
                      "names": [
                        "name",
                        "chainId",
                        "chainAlias",
                        "rpcUrl"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "5421:95:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "5388:128:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_storage",
                      "typeString": "struct StdChains.Chain storage ref"
                    }
                  },
                  "id": 20115,
                  "nodeType": "ExpressionStatement",
                  "src": "5388:128:66"
                },
                {
                  "expression": {
                    "id": 20121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 20116,
                        "name": "idToAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19902,
                        "src": "5526:9:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 20119,
                      "indexExpression": {
                        "expression": {
                          "id": 20117,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20019,
                          "src": "5536:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                            "typeString": "struct StdChains.ChainData memory"
                          }
                        },
                        "id": 20118,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5542:7:66",
                        "memberName": "chainId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 19877,
                        "src": "5536:13:66",
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
                      "src": "5526:24:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 20120,
                      "name": "chainAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20016,
                      "src": "5553:10:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "5526:37:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 20122,
                  "nodeType": "ExpressionStatement",
                  "src": "5526:37:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChain",
            "nameLocation": "4406:8:66",
            "parameters": {
              "id": 20020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20016,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "4429:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20124,
                  "src": "4415:24:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20015,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4415:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20019,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "4458:5:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20124,
                  "src": "4441:22:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                    "typeString": "struct StdChains.ChainData"
                  },
                  "typeName": {
                    "id": 20018,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20017,
                      "name": "ChainData",
                      "nameLocations": [
                        "4441:9:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19880,
                      "src": "4441:9:66"
                    },
                    "referencedDeclaration": 19880,
                    "src": "4441:9:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ChainData_$19880_storage_ptr",
                      "typeString": "struct StdChains.ChainData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4414:50:66"
            },
            "returnParameters": {
              "id": 20021,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4482:0:66"
            },
            "scope": 20569,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 20145,
            "nodeType": "FunctionDefinition",
            "src": "5641:195:66",
            "nodes": [],
            "body": {
              "id": 20144,
              "nodeType": "Block",
              "src": "5722:114:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 20133,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20126,
                        "src": "5741:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 20135,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20129,
                              "src": "5770:5:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 20136,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5776:4:66",
                            "memberName": "name",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19882,
                            "src": "5770:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "expression": {
                              "id": 20137,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20129,
                              "src": "5791:5:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 20138,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5797:7:66",
                            "memberName": "chainId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19884,
                            "src": "5791:13:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 20139,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20129,
                              "src": "5814:5:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 20140,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5820:6:66",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19888,
                            "src": "5814:12:66",
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
                          "id": 20134,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "5753:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [
                          "5764:4:66",
                          "5782:7:66",
                          "5806:6:66"
                        ],
                        "names": [
                          "name",
                          "chainId",
                          "rpcUrl"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "5753:75:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20132,
                      "name": "setChain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20124,
                        20145
                      ],
                      "referencedDeclaration": 20124,
                      "src": "5732:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5732:97:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20143,
                  "nodeType": "ExpressionStatement",
                  "src": "5732:97:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChain",
            "nameLocation": "5650:8:66",
            "parameters": {
              "id": 20130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20126,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "5673:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20145,
                  "src": "5659:24:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20125,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5659:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20129,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "5698:5:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20145,
                  "src": "5685:18:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 20128,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20127,
                      "name": "Chain",
                      "nameLocations": [
                        "5685:5:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19889,
                      "src": "5685:5:66"
                    },
                    "referencedDeclaration": 19889,
                    "src": "5685:5:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5658:46:66"
            },
            "returnParameters": {
              "id": 20131,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5722:0:66"
            },
            "scope": 20569,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 20222,
            "nodeType": "FunctionDefinition",
            "src": "5842:451:66",
            "nodes": [],
            "body": {
              "id": 20221,
              "nodeType": "Block",
              "src": "5916:377:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    20153
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20153,
                      "mutability": "mutable",
                      "name": "strb",
                      "nameLocation": "5939:4:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 20221,
                      "src": "5926:17:66",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 20152,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5926:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20158,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 20156,
                        "name": "str",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20147,
                        "src": "5952:3:66",
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
                      "id": 20155,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5946:5:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": {
                        "id": 20154,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5946:5:66",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 20157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5946:10:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5926:30:66"
                },
                {
                  "assignments": [
                    20160
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20160,
                      "mutability": "mutable",
                      "name": "copy",
                      "nameLocation": "5979:4:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 20221,
                      "src": "5966:17:66",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 20159,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5966:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20166,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 20163,
                          "name": "strb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20153,
                          "src": "5996:4:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 20164,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6001:6:66",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "5996:11:66",
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
                      "id": 20162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "5986:9:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 20161,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5990:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 20165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5986:22:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5966:42:66"
                },
                {
                  "body": {
                    "id": 20214,
                    "nodeType": "Block",
                    "src": "6060:198:66",
                    "statements": [
                      {
                        "assignments": [
                          20179
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 20179,
                            "mutability": "mutable",
                            "name": "b",
                            "nameLocation": "6081:1:66",
                            "nodeType": "VariableDeclaration",
                            "scope": 20214,
                            "src": "6074:8:66",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            "typeName": {
                              "id": 20178,
                              "name": "bytes1",
                              "nodeType": "ElementaryTypeName",
                              "src": "6074:6:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 20183,
                        "initialValue": {
                          "baseExpression": {
                            "id": 20180,
                            "name": "strb",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20153,
                            "src": "6085:4:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 20182,
                          "indexExpression": {
                            "id": 20181,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20168,
                            "src": "6090:1:66",
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
                          "src": "6085:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6074:18:66"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 20190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            "id": 20186,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 20184,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20179,
                              "src": "6110:1:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "hexValue": "30783631",
                              "id": 20185,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6115:4:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_97_by_1",
                                "typeString": "int_const 97"
                              },
                              "value": "0x61"
                            },
                            "src": "6110:9:66",
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
                            "id": 20189,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 20187,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20179,
                              "src": "6123:1:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "hexValue": "30783741",
                              "id": 20188,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6128:4:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_122_by_1",
                                "typeString": "int_const 122"
                              },
                              "value": "0x7A"
                            },
                            "src": "6123:9:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "6110:22:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 20212,
                          "nodeType": "Block",
                          "src": "6204:44:66",
                          "statements": [
                            {
                              "expression": {
                                "id": 20210,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 20206,
                                    "name": "copy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20160,
                                    "src": "6222:4:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 20208,
                                  "indexExpression": {
                                    "id": 20207,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20168,
                                    "src": "6227:1:66",
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
                                  "src": "6222:7:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 20209,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20179,
                                  "src": "6232:1:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "6222:11:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 20211,
                              "nodeType": "ExpressionStatement",
                              "src": "6222:11:66"
                            }
                          ]
                        },
                        "id": 20213,
                        "nodeType": "IfStatement",
                        "src": "6106:142:66",
                        "trueBody": {
                          "id": 20205,
                          "nodeType": "Block",
                          "src": "6134:64:66",
                          "statements": [
                            {
                              "expression": {
                                "id": 20203,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 20191,
                                    "name": "copy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20160,
                                    "src": "6152:4:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 20193,
                                  "indexExpression": {
                                    "id": 20192,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20168,
                                    "src": "6157:1:66",
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
                                  "src": "6152:7:66",
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
                                      "id": 20201,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 20198,
                                            "name": "b",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20179,
                                            "src": "6175:1:66",
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
                                          "id": 20197,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "6169:5:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_uint8_$",
                                            "typeString": "type(uint8)"
                                          },
                                          "typeName": {
                                            "id": 20196,
                                            "name": "uint8",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6169:5:66",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 20199,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6169:8:66",
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
                                        "id": 20200,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6180:2:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_32_by_1",
                                          "typeString": "int_const 32"
                                        },
                                        "value": "32"
                                      },
                                      "src": "6169:13:66",
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
                                    "id": 20195,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6162:6:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 20194,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6162:6:66",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 20202,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6162:21:66",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "6152:31:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 20204,
                              "nodeType": "ExpressionStatement",
                              "src": "6152:31:66"
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
                    "id": 20174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 20171,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20168,
                      "src": "6038:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 20172,
                        "name": "strb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20153,
                        "src": "6042:4:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 20173,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6047:6:66",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6042:11:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6038:15:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 20215,
                  "initializationExpression": {
                    "assignments": [
                      20168
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 20168,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6031:1:66",
                        "nodeType": "VariableDeclaration",
                        "scope": 20215,
                        "src": "6023:9:66",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 20167,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6023:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 20170,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 20169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6035:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6023:13:66"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 20176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6055:3:66",
                      "subExpression": {
                        "id": 20175,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20168,
                        "src": "6055:1:66",
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
                    "id": 20177,
                    "nodeType": "ExpressionStatement",
                    "src": "6055:3:66"
                  },
                  "nodeType": "ForStatement",
                  "src": "6018:240:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 20218,
                        "name": "copy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20160,
                        "src": "6281:4:66",
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
                      "id": 20217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6274:6:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 20216,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "6274:6:66",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 20219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6274:12:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 20151,
                  "id": 20220,
                  "nodeType": "Return",
                  "src": "6267:19:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_toUpper",
            "nameLocation": "5851:8:66",
            "parameters": {
              "id": 20148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20147,
                  "mutability": "mutable",
                  "name": "str",
                  "nameLocation": "5874:3:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20222,
                  "src": "5860:17:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20146,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5860:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5859:19:66"
            },
            "returnParameters": {
              "id": 20151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20150,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20222,
                  "src": "5901:13:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20149,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5901:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5900:15:66"
            },
            "scope": 20569,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 20339,
            "nodeType": "FunctionDefinition",
            "src": "6429:1218:66",
            "nodes": [],
            "body": {
              "id": 20338,
              "nodeType": "Block",
              "src": "6541:1106:66",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 20240,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 20235,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20227,
                              "src": "6561:5:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 20236,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6567:6:66",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19888,
                            "src": "6561:12:66",
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
                          "id": 20234,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6555:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 20233,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "6555:5:66",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 20237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6555:19:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 20238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6575:6:66",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6555:26:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 20239,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6585:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6555:31:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 20335,
                  "nodeType": "IfStatement",
                  "src": "6551:1068:66",
                  "trueBody": {
                    "id": 20334,
                    "nodeType": "Block",
                    "src": "6588:1031:66",
                    "statements": [
                      {
                        "clauses": [
                          {
                            "block": {
                              "id": 20254,
                              "nodeType": "Block",
                              "src": "6665:60:66",
                              "statements": [
                                {
                                  "expression": {
                                    "id": 20252,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "expression": {
                                        "id": 20248,
                                        "name": "chain",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20227,
                                        "src": "6683:5:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                                          "typeString": "struct StdChains.Chain memory"
                                        }
                                      },
                                      "id": 20250,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "memberLocation": "6689:6:66",
                                      "memberName": "rpcUrl",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 19888,
                                      "src": "6683:12:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "nodeType": "Assignment",
                                    "operator": "=",
                                    "rightHandSide": {
                                      "id": 20251,
                                      "name": "configRpcUrl",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20246,
                                      "src": "6698:12:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "src": "6683:27:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "id": 20253,
                                  "nodeType": "ExpressionStatement",
                                  "src": "6683:27:66"
                                }
                              ]
                            },
                            "errorName": "",
                            "id": 20255,
                            "nodeType": "TryCatchClause",
                            "parameters": {
                              "id": 20247,
                              "nodeType": "ParameterList",
                              "parameters": [
                                {
                                  "constant": false,
                                  "id": 20246,
                                  "mutability": "mutable",
                                  "name": "configRpcUrl",
                                  "nameLocation": "6651:12:66",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 20255,
                                  "src": "6637:26:66",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string"
                                  },
                                  "typeName": {
                                    "id": 20245,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6637:6:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_storage_ptr",
                                      "typeString": "string"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "src": "6636:28:66"
                            },
                            "src": "6628:97:66"
                          },
                          {
                            "block": {
                              "id": 20331,
                              "nodeType": "Block",
                              "src": "6751:858:66",
                              "statements": [
                                {
                                  "assignments": [
                                    20260
                                  ],
                                  "declarations": [
                                    {
                                      "constant": false,
                                      "id": 20260,
                                      "mutability": "mutable",
                                      "name": "envName",
                                      "nameLocation": "6783:7:66",
                                      "nodeType": "VariableDeclaration",
                                      "scope": 20331,
                                      "src": "6769:21:66",
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                      },
                                      "typeName": {
                                        "id": 20259,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6769:6:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_string_storage_ptr",
                                          "typeString": "string"
                                        }
                                      },
                                      "visibility": "internal"
                                    }
                                  ],
                                  "id": 20271,
                                  "initialValue": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "id": 20266,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20224,
                                                "src": "6826:10:66",
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
                                              "id": 20265,
                                              "name": "_toUpper",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 20222,
                                              "src": "6817:8:66",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                              }
                                            },
                                            "id": 20267,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6817:20:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          {
                                            "hexValue": "5f5250435f55524c",
                                            "id": 20268,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6839:10:66",
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
                                            "id": 20263,
                                            "name": "abi",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -1,
                                            "src": "6800:3:66",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_abi",
                                              "typeString": "abi"
                                            }
                                          },
                                          "id": 20264,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "memberLocation": "6804:12:66",
                                          "memberName": "encodePacked",
                                          "nodeType": "MemberAccess",
                                          "src": "6800:16:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                            "typeString": "function () pure returns (bytes memory)"
                                          }
                                        },
                                        "id": 20269,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6800:50:66",
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
                                      "id": 20262,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "6793:6:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                        "typeString": "type(string storage pointer)"
                                      },
                                      "typeName": {
                                        "id": 20261,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6793:6:66",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 20270,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "6793:58:66",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "nodeType": "VariableDeclarationStatement",
                                  "src": "6769:82:66"
                                },
                                {
                                  "condition": {
                                    "id": 20272,
                                    "name": "fallbackToDefaultRpcUrls",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19905,
                                    "src": "6873:24:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "falseBody": {
                                    "id": 20295,
                                    "nodeType": "Block",
                                    "src": "7006:77:66",
                                    "statements": [
                                      {
                                        "expression": {
                                          "id": 20293,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftHandSide": {
                                            "expression": {
                                              "id": 20286,
                                              "name": "chain",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 20227,
                                              "src": "7028:5:66",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                              }
                                            },
                                            "id": 20288,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "7034:6:66",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19888,
                                            "src": "7028:12:66",
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
                                                "id": 20291,
                                                "name": "envName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20260,
                                                "src": "7056:7:66",
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
                                                "id": 20289,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19871,
                                                "src": "7043:2:66",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_VmSafe_$29055",
                                                  "typeString": "contract VmSafe"
                                                }
                                              },
                                              "id": 20290,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "7046:9:66",
                                              "memberName": "envString",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 28131,
                                              "src": "7043:12:66",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) view external returns (string memory)"
                                              }
                                            },
                                            "id": 20292,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7043:21:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "src": "7028:36:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "id": 20294,
                                        "nodeType": "ExpressionStatement",
                                        "src": "7028:36:66"
                                      }
                                    ]
                                  },
                                  "id": 20296,
                                  "nodeType": "IfStatement",
                                  "src": "6869:214:66",
                                  "trueBody": {
                                    "id": 20285,
                                    "nodeType": "Block",
                                    "src": "6899:101:66",
                                    "statements": [
                                      {
                                        "expression": {
                                          "id": 20283,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftHandSide": {
                                            "expression": {
                                              "id": 20273,
                                              "name": "chain",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 20227,
                                              "src": "6921:5:66",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                              }
                                            },
                                            "id": 20275,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "6927:6:66",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19888,
                                            "src": "6921:12:66",
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
                                                "id": 20278,
                                                "name": "envName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20260,
                                                "src": "6945:7:66",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              },
                                              {
                                                "baseExpression": {
                                                  "id": 20279,
                                                  "name": "defaultRpcUrls",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 19898,
                                                  "src": "6954:14:66",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                    "typeString": "mapping(string memory => string storage ref)"
                                                  }
                                                },
                                                "id": 20281,
                                                "indexExpression": {
                                                  "id": 20280,
                                                  "name": "chainAlias",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 20224,
                                                  "src": "6969:10:66",
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
                                                "src": "6954:26:66",
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
                                                "id": 20276,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19871,
                                                "src": "6936:2:66",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_VmSafe_$29055",
                                                  "typeString": "contract VmSafe"
                                                }
                                              },
                                              "id": 20277,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "6939:5:66",
                                              "memberName": "envOr",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 28262,
                                              "src": "6936:8:66",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                              }
                                            },
                                            "id": 20282,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6936:45:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "src": "6921:60:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "id": 20284,
                                        "nodeType": "ExpressionStatement",
                                        "src": "6921:60:66"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "assignments": [
                                    20298
                                  ],
                                  "declarations": [
                                    {
                                      "constant": false,
                                      "id": 20298,
                                      "mutability": "mutable",
                                      "name": "notFoundError",
                                      "nameLocation": "7175:13:66",
                                      "nodeType": "VariableDeclaration",
                                      "scope": 20331,
                                      "src": "7162:26:66",
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                      },
                                      "typeName": {
                                        "id": 20297,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7162:5:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes_storage_ptr",
                                          "typeString": "bytes"
                                        }
                                      },
                                      "visibility": "internal"
                                    }
                                  ],
                                  "id": 20311,
                                  "initialValue": {
                                    "arguments": [
                                      {
                                        "hexValue": "4368656174436f64654572726f72",
                                        "id": 20301,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7235:16:66",
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
                                                "id": 20306,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7277:18:66",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                  "typeString": "literal_string \"invalid rpc url \""
                                                },
                                                "value": "invalid rpc url "
                                              },
                                              {
                                                "id": 20307,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20224,
                                                "src": "7297:10:66",
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
                                                "id": 20304,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "7260:3:66",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_abi",
                                                  "typeString": "abi"
                                                }
                                              },
                                              "id": 20305,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "memberLocation": "7264:12:66",
                                              "memberName": "encodePacked",
                                              "nodeType": "MemberAccess",
                                              "src": "7260:16:66",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function () pure returns (bytes memory)"
                                              }
                                            },
                                            "id": 20308,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7260:48:66",
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
                                          "id": 20303,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "7253:6:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                            "typeString": "type(string storage pointer)"
                                          },
                                          "typeName": {
                                            "id": 20302,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7253:6:66",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 20309,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7253:56:66",
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
                                        "id": 20299,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -1,
                                        "src": "7211:3:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 20300,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberLocation": "7215:19:66",
                                      "memberName": "encodeWithSignature",
                                      "nodeType": "MemberAccess",
                                      "src": "7211:23:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function (string memory) pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 20310,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7211:99:66",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "nodeType": "VariableDeclarationStatement",
                                  "src": "7162:148:66"
                                },
                                {
                                  "condition": {
                                    "commonType": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "id": 20327,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      "id": 20318,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 20313,
                                            "name": "notFoundError",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20298,
                                            "src": "7342:13:66",
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
                                          "id": 20312,
                                          "name": "keccak256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -8,
                                          "src": "7332:9:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 20314,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7332:24:66",
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
                                            "id": 20316,
                                            "name": "err",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20257,
                                            "src": "7370:3:66",
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
                                          "id": 20315,
                                          "name": "keccak256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -8,
                                          "src": "7360:9:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 20317,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7360:14:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "src": "7332:42:66",
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
                                      "id": 20326,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "expression": {
                                          "arguments": [
                                            {
                                              "expression": {
                                                "id": 20321,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20227,
                                                "src": "7384:5:66",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                                                  "typeString": "struct StdChains.Chain memory"
                                                }
                                              },
                                              "id": 20322,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "7390:6:66",
                                              "memberName": "rpcUrl",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 19888,
                                              "src": "7384:12:66",
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
                                            "id": 20320,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "7378:5:66",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                              "typeString": "type(bytes storage pointer)"
                                            },
                                            "typeName": {
                                              "id": 20319,
                                              "name": "bytes",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "7378:5:66",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 20323,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "7378:19:66",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        },
                                        "id": 20324,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "7398:6:66",
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "src": "7378:26:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "==",
                                      "rightExpression": {
                                        "hexValue": "30",
                                        "id": 20325,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7408:1:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                      },
                                      "src": "7378:31:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "src": "7332:77:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "id": 20330,
                                  "nodeType": "IfStatement",
                                  "src": "7328:267:66",
                                  "trueBody": {
                                    "id": 20329,
                                    "nodeType": "Block",
                                    "src": "7411:184:66",
                                    "statements": [
                                      {
                                        "AST": {
                                          "nodeType": "YulBlock",
                                          "src": "7497:80:66",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "arguments": [
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "7534:2:66",
                                                        "type": "",
                                                        "value": "32"
                                                      },
                                                      {
                                                        "name": "err",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7538:3:66"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "add",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "7530:3:66"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7530:12:66"
                                                  },
                                                  {
                                                    "arguments": [
                                                      {
                                                        "name": "err",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7550:3:66"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "mload",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "7544:5:66"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7544:10:66"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "7523:6:66"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7523:32:66"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "7523:32:66"
                                            }
                                          ]
                                        },
                                        "documentation": "@solidity memory-safe-assembly",
                                        "evmVersion": "paris",
                                        "externalReferences": [
                                          {
                                            "declaration": 20257,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7538:3:66",
                                            "valueSize": 1
                                          },
                                          {
                                            "declaration": 20257,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7550:3:66",
                                            "valueSize": 1
                                          }
                                        ],
                                        "id": 20328,
                                        "nodeType": "InlineAssembly",
                                        "src": "7488:89:66"
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            "errorName": "",
                            "id": 20332,
                            "nodeType": "TryCatchClause",
                            "parameters": {
                              "id": 20258,
                              "nodeType": "ParameterList",
                              "parameters": [
                                {
                                  "constant": false,
                                  "id": 20257,
                                  "mutability": "mutable",
                                  "name": "err",
                                  "nameLocation": "6746:3:66",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 20332,
                                  "src": "6733:16:66",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes"
                                  },
                                  "typeName": {
                                    "id": 20256,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6733:5:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_storage_ptr",
                                      "typeString": "bytes"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "src": "6732:18:66"
                            },
                            "src": "6726:883:66"
                          }
                        ],
                        "externalCall": {
                          "arguments": [
                            {
                              "id": 20243,
                              "name": "chainAlias",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20224,
                              "src": "6616:10:66",
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
                              "id": 20241,
                              "name": "vm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19871,
                              "src": "6606:2:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$29055",
                                "typeString": "contract VmSafe"
                              }
                            },
                            "id": 20242,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6609:6:66",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 29016,
                            "src": "6606:9:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                              "typeString": "function (string memory) view external returns (string memory)"
                            }
                          },
                          "id": 20244,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6606:21:66",
                          "tryCall": true,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 20333,
                        "nodeType": "TryStatement",
                        "src": "6602:1007:66"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 20336,
                    "name": "chain",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20227,
                    "src": "7635:5:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "functionReturnParameters": 20232,
                  "id": 20337,
                  "nodeType": "Return",
                  "src": "7628:12:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChainWithUpdatedRpcUrl",
            "nameLocation": "6438:25:66",
            "parameters": {
              "id": 20228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20224,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "6478:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20339,
                  "src": "6464:24:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20223,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6464:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20227,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "6503:5:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20339,
                  "src": "6490:18:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 20226,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20225,
                      "name": "Chain",
                      "nameLocations": [
                        "6490:5:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19889,
                      "src": "6490:5:66"
                    },
                    "referencedDeclaration": 19889,
                    "src": "6490:5:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6463:46:66"
            },
            "returnParameters": {
              "id": 20232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20231,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20339,
                  "src": "6527:12:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19889_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 20230,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20229,
                      "name": "Chain",
                      "nameLocations": [
                        "6527:5:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19889,
                      "src": "6527:5:66"
                    },
                    "referencedDeclaration": 19889,
                    "src": "6527:5:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19889_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6526:14:66"
            },
            "scope": 20569,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 20349,
            "nodeType": "FunctionDefinition",
            "src": "7653:117:66",
            "nodes": [],
            "body": {
              "id": 20348,
              "nodeType": "Block",
              "src": "7716:54:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 20346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20344,
                      "name": "fallbackToDefaultRpcUrls",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19905,
                      "src": "7726:24:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 20345,
                      "name": "useDefault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20341,
                      "src": "7753:10:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7726:37:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 20347,
                  "nodeType": "ExpressionStatement",
                  "src": "7726:37:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setFallbackToDefaultRpcUrls",
            "nameLocation": "7662:27:66",
            "parameters": {
              "id": 20342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20341,
                  "mutability": "mutable",
                  "name": "useDefault",
                  "nameLocation": "7695:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20349,
                  "src": "7690:15:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 20340,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7690:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7689:17:66"
            },
            "returnParameters": {
              "id": 20343,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7716:0:66"
            },
            "scope": 20569,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 20531,
            "nodeType": "FunctionDefinition",
            "src": "7776:2751:66",
            "nodes": [],
            "body": {
              "id": 20530,
              "nodeType": "Block",
              "src": "7815:2712:66",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 20352,
                    "name": "stdChainsInitialized",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19873,
                    "src": "7829:20:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 20354,
                  "nodeType": "IfStatement",
                  "src": "7825:33:66",
                  "trueBody": {
                    "functionReturnParameters": 20351,
                    "id": 20353,
                    "nodeType": "Return",
                    "src": "7851:7:66"
                  }
                },
                {
                  "expression": {
                    "id": 20357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20355,
                      "name": "stdChainsInitialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19873,
                      "src": "7868:20:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 20356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7891:4:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "7868:27:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 20358,
                  "nodeType": "ExpressionStatement",
                  "src": "7868:27:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "616e76696c",
                        "id": 20360,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8018:7:66",
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
                            "id": 20362,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8037:7:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                              "typeString": "literal_string \"Anvil\""
                            },
                            "value": "Anvil"
                          },
                          {
                            "hexValue": "3331333337",
                            "id": 20363,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8046:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31337_by_1",
                              "typeString": "int_const 31337"
                            },
                            "value": "31337"
                          },
                          {
                            "hexValue": "687474703a2f2f3132372e302e302e313a38353435",
                            "id": 20364,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8053:23:66",
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
                          "id": 20361,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "8027:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20365,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8027:50:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20359,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "7992:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20366,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7992:86:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20367,
                  "nodeType": "ExpressionStatement",
                  "src": "7992:86:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d61696e6e6574",
                        "id": 20369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8127:9:66",
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
                            "id": 20371,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8148:9:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                              "typeString": "literal_string \"Mainnet\""
                            },
                            "value": "Mainnet"
                          },
                          {
                            "hexValue": "31",
                            "id": 20372,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8159:1:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          {
                            "hexValue": "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 20373,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8162:63:66",
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
                          "id": 20370,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "8138:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20374,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8138:88:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20368,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "8088:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8088:148:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20376,
                  "nodeType": "ExpressionStatement",
                  "src": "8088:148:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "676f65726c69",
                        "id": 20378,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8285:8:66",
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
                            "id": 20380,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8305:8:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                              "typeString": "literal_string \"Goerli\""
                            },
                            "value": "Goerli"
                          },
                          {
                            "hexValue": "35",
                            "id": 20381,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8315:1:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5_by_1",
                              "typeString": "int_const 5"
                            },
                            "value": "5"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 20382,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8318:62:66",
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
                          "id": 20379,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "8295:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20383,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8295:86:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20377,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "8246:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20384,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8246:145:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20385,
                  "nodeType": "ExpressionStatement",
                  "src": "8246:145:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "7365706f6c6961",
                        "id": 20387,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8440:9:66",
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
                            "id": 20389,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8461:9:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                              "typeString": "literal_string \"Sepolia\""
                            },
                            "value": "Sepolia"
                          },
                          {
                            "hexValue": "3131313535313131",
                            "id": 20390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8472:8:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_11155111_by_1",
                              "typeString": "int_const 11155111"
                            },
                            "value": "11155111"
                          },
                          {
                            "hexValue": "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 20391,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8482:63:66",
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
                          "id": 20388,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "8451:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20392,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8451:95:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20386,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "8401:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20393,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8401:155:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20394,
                  "nodeType": "ExpressionStatement",
                  "src": "8401:155:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6f7074696d69736d",
                        "id": 20396,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8592:10:66",
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
                            "id": 20398,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8614:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                              "typeString": "literal_string \"Optimism\""
                            },
                            "value": "Optimism"
                          },
                          {
                            "hexValue": "3130",
                            "id": 20399,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8626:2:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          {
                            "hexValue": "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f",
                            "id": 20400,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8630:29:66",
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
                          "id": 20397,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "8604:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20401,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8604:56:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20395,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "8566:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8566:95:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20403,
                  "nodeType": "ExpressionStatement",
                  "src": "8566:95:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6f7074696d69736d5f676f65726c69",
                        "id": 20405,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8697:17:66",
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
                            "id": 20407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8726:17:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                              "typeString": "literal_string \"Optimism Goerli\""
                            },
                            "value": "Optimism Goerli"
                          },
                          {
                            "hexValue": "343230",
                            "id": 20408,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8745:3:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_420_by_1",
                              "typeString": "int_const 420"
                            },
                            "value": "420"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f",
                            "id": 20409,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8750:28:66",
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
                          "id": 20406,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "8716:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20410,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8716:63:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20404,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "8671:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8671:109:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20412,
                  "nodeType": "ExpressionStatement",
                  "src": "8671:109:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6f6e65",
                        "id": 20414,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8816:14:66",
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
                            "id": 20416,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8842:14:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                              "typeString": "literal_string \"Arbitrum One\""
                            },
                            "value": "Arbitrum One"
                          },
                          {
                            "hexValue": "3432313631",
                            "id": 20417,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8858:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42161_by_1",
                              "typeString": "int_const 42161"
                            },
                            "value": "42161"
                          },
                          {
                            "hexValue": "68747470733a2f2f617262312e617262697472756d2e696f2f727063",
                            "id": 20418,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8865:30:66",
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
                          "id": 20415,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "8832:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8832:64:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20413,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "8790:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20420,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8790:107:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20421,
                  "nodeType": "ExpressionStatement",
                  "src": "8790:107:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6f6e655f676f65726c69",
                        "id": 20423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8946:21:66",
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
                            "id": 20425,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8979:21:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                              "typeString": "literal_string \"Arbitrum One Goerli\""
                            },
                            "value": "Arbitrum One Goerli"
                          },
                          {
                            "hexValue": "343231363133",
                            "id": 20426,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9002:6:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_421613_by_1",
                              "typeString": "int_const 421613"
                            },
                            "value": "421613"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063",
                            "id": 20427,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9010:39:66",
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
                          "id": 20424,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "8969:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20428,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8969:81:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20422,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "8907:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20429,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8907:153:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20430,
                  "nodeType": "ExpressionStatement",
                  "src": "8907:153:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6e6f7661",
                        "id": 20432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9096:15:66",
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
                            "id": 20434,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9123:15:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                              "typeString": "literal_string \"Arbitrum Nova\""
                            },
                            "value": "Arbitrum Nova"
                          },
                          {
                            "hexValue": "3432313730",
                            "id": 20435,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9140:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42170_by_1",
                              "typeString": "int_const 42170"
                            },
                            "value": "42170"
                          },
                          {
                            "hexValue": "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063",
                            "id": 20436,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9147:30:66",
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
                          "id": 20433,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "9113:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20437,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9113:65:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20431,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "9070:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9070:109:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20439,
                  "nodeType": "ExpressionStatement",
                  "src": "9070:109:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "706f6c79676f6e",
                        "id": 20441,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9215:9:66",
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
                            "id": 20443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9236:9:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                              "typeString": "literal_string \"Polygon\""
                            },
                            "value": "Polygon"
                          },
                          {
                            "hexValue": "313337",
                            "id": 20444,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9247:3:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_137_by_1",
                              "typeString": "int_const 137"
                            },
                            "value": "137"
                          },
                          {
                            "hexValue": "68747470733a2f2f706f6c79676f6e2d7270632e636f6d",
                            "id": 20445,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9252:25:66",
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
                          "id": 20442,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "9226:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9226:52:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20440,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "9189:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9189:90:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20448,
                  "nodeType": "ExpressionStatement",
                  "src": "9189:90:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "706f6c79676f6e5f6d756d626169",
                        "id": 20450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9328:16:66",
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
                            "id": 20452,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9356:16:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                              "typeString": "literal_string \"Polygon Mumbai\""
                            },
                            "value": "Polygon Mumbai"
                          },
                          {
                            "hexValue": "3830303031",
                            "id": 20453,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9374:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_80001_by_1",
                              "typeString": "int_const 80001"
                            },
                            "value": "80001"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d",
                            "id": 20454,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9381:35:66",
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
                          "id": 20451,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "9346:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20455,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9346:71:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20449,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "9289:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9289:138:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20457,
                  "nodeType": "ExpressionStatement",
                  "src": "9289:138:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6176616c616e636865",
                        "id": 20459,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9463:11:66",
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
                            "id": 20461,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9486:11:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                              "typeString": "literal_string \"Avalanche\""
                            },
                            "value": "Avalanche"
                          },
                          {
                            "hexValue": "3433313134",
                            "id": 20462,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9499:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43114_by_1",
                              "typeString": "int_const 43114"
                            },
                            "value": "43114"
                          },
                          {
                            "hexValue": "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063",
                            "id": 20463,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9506:39:66",
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
                          "id": 20460,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "9476:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20464,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9476:70:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20458,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "9437:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9437:110:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20466,
                  "nodeType": "ExpressionStatement",
                  "src": "9437:110:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6176616c616e6368655f66756a69",
                        "id": 20468,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9596:16:66",
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
                            "id": 20470,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9624:16:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                              "typeString": "literal_string \"Avalanche Fuji\""
                            },
                            "value": "Avalanche Fuji"
                          },
                          {
                            "hexValue": "3433313133",
                            "id": 20471,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9642:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43113_by_1",
                              "typeString": "int_const 43113"
                            },
                            "value": "43113"
                          },
                          {
                            "hexValue": "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063",
                            "id": 20472,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9649:44:66",
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
                          "id": 20469,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "9614:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9614:80:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20467,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "9557:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9557:147:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20475,
                  "nodeType": "ExpressionStatement",
                  "src": "9557:147:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "626e625f736d6172745f636861696e",
                        "id": 20477,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9753:17:66",
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
                            "id": 20479,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9782:17:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                              "typeString": "literal_string \"BNB Smart Chain\""
                            },
                            "value": "BNB Smart Chain"
                          },
                          {
                            "hexValue": "3536",
                            "id": 20480,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9801:2:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_56_by_1",
                              "typeString": "int_const 56"
                            },
                            "value": "56"
                          },
                          {
                            "hexValue": "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267",
                            "id": 20481,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9805:35:66",
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
                          "id": 20478,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "9772:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9772:69:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20476,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "9714:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9714:137:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20484,
                  "nodeType": "ExpressionStatement",
                  "src": "9714:137:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "626e625f736d6172745f636861696e5f746573746e6574",
                        "id": 20486,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9900:25:66",
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
                            "id": 20488,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9949:25:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                              "typeString": "literal_string \"BNB Smart Chain Testnet\""
                            },
                            "value": "BNB Smart Chain Testnet"
                          },
                          {
                            "hexValue": "3937",
                            "id": 20489,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9976:2:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_97_by_1",
                              "typeString": "int_const 97"
                            },
                            "value": "97"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c",
                            "id": 20490,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9980:41:66",
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
                          "id": 20487,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "9939:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20491,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9939:83:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20485,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "9861:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9861:171:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20493,
                  "nodeType": "ExpressionStatement",
                  "src": "9861:171:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "676e6f7369735f636861696e",
                        "id": 20495,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10068:14:66",
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
                            "id": 20497,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10094:14:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                              "typeString": "literal_string \"Gnosis Chain\""
                            },
                            "value": "Gnosis Chain"
                          },
                          {
                            "hexValue": "313030",
                            "id": 20498,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10110:3:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d",
                            "id": 20499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10115:29:66",
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
                          "id": 20496,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "10084:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10084:61:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20494,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "10042:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10042:104:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20502,
                  "nodeType": "ExpressionStatement",
                  "src": "10042:104:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e6265616d",
                        "id": 20504,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10182:10:66",
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
                            "id": 20506,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10204:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                              "typeString": "literal_string \"Moonbeam\""
                            },
                            "value": "Moonbeam"
                          },
                          {
                            "hexValue": "31323834",
                            "id": 20507,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10216:4:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1284_by_1",
                              "typeString": "int_const 1284"
                            },
                            "value": "1284"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 20508,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10222:34:66",
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
                          "id": 20505,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "10194:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20509,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10194:63:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20503,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "10156:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10156:102:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20511,
                  "nodeType": "ExpressionStatement",
                  "src": "10156:102:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e7269766572",
                        "id": 20513,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10307:11:66",
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
                            "id": 20515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10330:11:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                              "typeString": "literal_string \"Moonriver\""
                            },
                            "value": "Moonriver"
                          },
                          {
                            "hexValue": "31323835",
                            "id": 20516,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10343:4:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1285_by_1",
                              "typeString": "int_const 1285"
                            },
                            "value": "1285"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 20517,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10349:44:66",
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
                          "id": 20514,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "10320:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20518,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10320:74:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20512,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "10268:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10268:136:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20520,
                  "nodeType": "ExpressionStatement",
                  "src": "10268:136:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e62617365",
                        "id": 20522,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10440:10:66",
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
                            "id": 20524,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10462:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                              "typeString": "literal_string \"Moonbase\""
                            },
                            "value": "Moonbase"
                          },
                          {
                            "hexValue": "31323837",
                            "id": 20525,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10474:4:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1287_by_1",
                              "typeString": "int_const 1287"
                            },
                            "value": "1287"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 20526,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10480:38:66",
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
                          "id": 20523,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19880,
                          "src": "10452:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19880_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 20527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10452:67:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20521,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20568,
                      "src": "10414:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10414:106:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20529,
                  "nodeType": "ExpressionStatement",
                  "src": "10414:106:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initializeStdChains",
            "nameLocation": "7785:19:66",
            "parameters": {
              "id": 20350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7804:2:66"
            },
            "returnParameters": {
              "id": 20351,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7815:0:66"
            },
            "scope": 20569,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 20568,
            "nodeType": "FunctionDefinition",
            "src": "10609:305:66",
            "nodes": [],
            "body": {
              "id": 20567,
              "nodeType": "Block",
              "src": "10702:212:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    20540
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20540,
                      "mutability": "mutable",
                      "name": "rpcUrl",
                      "nameLocation": "10726:6:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 20567,
                      "src": "10712:20:66",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 20539,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "10712:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20543,
                  "initialValue": {
                    "expression": {
                      "id": 20541,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20536,
                      "src": "10735:5:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                        "typeString": "struct StdChains.ChainData memory"
                      }
                    },
                    "id": 20542,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "10741:6:66",
                    "memberName": "rpcUrl",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 19879,
                    "src": "10735:12:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10712:35:66"
                },
                {
                  "expression": {
                    "id": 20548,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 20544,
                        "name": "defaultRpcUrls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19898,
                        "src": "10757:14:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                          "typeString": "mapping(string memory => string storage ref)"
                        }
                      },
                      "id": 20546,
                      "indexExpression": {
                        "id": 20545,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20533,
                        "src": "10772:10:66",
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
                      "src": "10757:26:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 20547,
                      "name": "rpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20540,
                      "src": "10786:6:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "10757:35:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 20549,
                  "nodeType": "ExpressionStatement",
                  "src": "10757:35:66"
                },
                {
                  "expression": {
                    "id": 20554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 20550,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20536,
                        "src": "10802:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 20552,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10808:6:66",
                      "memberName": "rpcUrl",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 19879,
                      "src": "10802:12:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "",
                      "id": 20553,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10817:2:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                        "typeString": "literal_string \"\""
                      },
                      "value": ""
                    },
                    "src": "10802:17:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 20555,
                  "nodeType": "ExpressionStatement",
                  "src": "10802:17:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 20557,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20533,
                        "src": "10838:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 20558,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20536,
                        "src": "10850:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 20556,
                      "name": "setChain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20124,
                        20145
                      ],
                      "referencedDeclaration": 20124,
                      "src": "10829:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19880_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 20559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10829:27:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20560,
                  "nodeType": "ExpressionStatement",
                  "src": "10829:27:66"
                },
                {
                  "expression": {
                    "id": 20565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 20561,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20536,
                        "src": "10866:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 20563,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10872:6:66",
                      "memberName": "rpcUrl",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 19879,
                      "src": "10866:12:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 20564,
                      "name": "rpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20540,
                      "src": "10881:6:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "10866:21:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 20566,
                  "nodeType": "ExpressionStatement",
                  "src": "10866:21:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChainWithDefaultRpcUrl",
            "nameLocation": "10618:25:66",
            "parameters": {
              "id": 20537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20533,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "10658:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20568,
                  "src": "10644:24:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20532,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10644:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20536,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "10687:5:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 20568,
                  "src": "10670:22:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ChainData_$19880_memory_ptr",
                    "typeString": "struct StdChains.ChainData"
                  },
                  "typeName": {
                    "id": 20535,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20534,
                      "name": "ChainData",
                      "nameLocations": [
                        "10670:9:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19880,
                      "src": "10670:9:66"
                    },
                    "referencedDeclaration": 19880,
                    "src": "10670:9:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ChainData_$19880_storage_ptr",
                      "typeString": "struct StdChains.ChainData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10643:50:66"
            },
            "returnParameters": {
              "id": 20538,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10702:0:66"
            },
            "scope": 20569,
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
          "id": 19854,
          "nodeType": "StructuredDocumentation",
          "src": "99:1799:66",
          "text": " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          20569
        ],
        "name": "StdChains",
        "nameLocation": "1917:9:66",
        "scope": 20570,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 66
} as const;
