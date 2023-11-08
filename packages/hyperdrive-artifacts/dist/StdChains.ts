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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"StdChains provides information about EVM compatible chains that can be used in scripts/tests. For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the alias used in this contract, which can be found as the first argument to the `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function. There are two main ways to use this contract:   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or      `setChain(string memory chainAlias, Chain memory chain)`   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`. The first time either of those are used, chains are initialized with the default set of RPC URLs. This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in `defaultRpcUrls`. The `setChain` function is straightforward, and it simply saves off the given chain data. The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say we want to retrieve the RPC URL for `mainnet`:   - If you have specified data with `setChain`, it will return that.   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it     is valid (e.g. a URL is specified, or an environment variable is given and exists).   - If neither of the above conditions is met, the default data is returned. Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdChains.sol\":\"StdChains\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
    "id": 19990,
    "exportedSymbols": {
      "StdChains": [
        19989
      ],
      "VmSafe": [
        28475
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:10885:60",
    "nodes": [
      {
        "id": 19271,
        "nodeType": "PragmaDirective",
        "src": "32:31:60",
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
        "id": 19273,
        "nodeType": "ImportDirective",
        "src": "65:32:60",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 19990,
        "sourceUnit": 28948,
        "symbolAliases": [
          {
            "foreign": {
              "id": 19272,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 28475,
              "src": "73:6:60",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 19989,
        "nodeType": "ContractDefinition",
        "src": "1899:9017:60",
        "nodes": [
          {
            "id": 19291,
            "nodeType": "VariableDeclaration",
            "src": "1933:92:60",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "1957:2:60",
            "scope": 19989,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$28475",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 19276,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 19275,
                "name": "VmSafe",
                "nameLocations": [
                  "1933:6:60"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 28475,
                "src": "1933:6:60"
              },
              "referencedDeclaration": 28475,
              "src": "1933:6:60",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$28475",
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
                                  "id": 19285,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2003:17:60",
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
                                "id": 19284,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "1993:9:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 19286,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1993:28:60",
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
                            "id": 19283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1985:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 19282,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "1985:7:60",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 19287,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1985:37:60",
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
                        "id": 19281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1977:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 19280,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "1977:7:60",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 19288,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1977:46:60",
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
                    "id": 19279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "1969:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 19278,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1969:7:60",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 19289,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1969:55:60",
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
                "id": 19277,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 28475,
                "src": "1962:6:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$28475_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 19290,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1962:63:60",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$28475",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 19293,
            "nodeType": "VariableDeclaration",
            "src": "2032:33:60",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "stdChainsInitialized",
            "nameLocation": "2045:20:60",
            "scope": 19989,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 19292,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "2032:4:60",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "private"
          },
          {
            "id": 19300,
            "nodeType": "StructDefinition",
            "src": "2072:93:60",
            "nodes": [],
            "canonicalName": "StdChains.ChainData",
            "members": [
              {
                "constant": false,
                "id": 19295,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "2106:4:60",
                "nodeType": "VariableDeclaration",
                "scope": 19300,
                "src": "2099:11:60",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19294,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2099:6:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19297,
                "mutability": "mutable",
                "name": "chainId",
                "nameLocation": "2128:7:60",
                "nodeType": "VariableDeclaration",
                "scope": 19300,
                "src": "2120:15:60",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 19296,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2120:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19299,
                "mutability": "mutable",
                "name": "rpcUrl",
                "nameLocation": "2152:6:60",
                "nodeType": "VariableDeclaration",
                "scope": 19300,
                "src": "2145:13:60",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19298,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2145:6:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ChainData",
            "nameLocation": "2079:9:60",
            "scope": 19989,
            "visibility": "public"
          },
          {
            "id": 19309,
            "nodeType": "StructDefinition",
            "src": "2171:598:60",
            "nodes": [],
            "canonicalName": "StdChains.Chain",
            "members": [
              {
                "constant": false,
                "id": 19302,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "2228:4:60",
                "nodeType": "VariableDeclaration",
                "scope": 19309,
                "src": "2221:11:60",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19301,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2221:6:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19304,
                "mutability": "mutable",
                "name": "chainId",
                "nameLocation": "2283:7:60",
                "nodeType": "VariableDeclaration",
                "scope": 19309,
                "src": "2275:15:60",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 19303,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2275:7:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19306,
                "mutability": "mutable",
                "name": "chainAlias",
                "nameLocation": "2383:10:60",
                "nodeType": "VariableDeclaration",
                "scope": 19309,
                "src": "2376:17:60",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19305,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2376:6:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 19308,
                "mutability": "mutable",
                "name": "rpcUrl",
                "nameLocation": "2756:6:60",
                "nodeType": "VariableDeclaration",
                "scope": 19309,
                "src": "2749:13:60",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 19307,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2749:6:60",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Chain",
            "nameLocation": "2178:5:60",
            "scope": 19989,
            "visibility": "public"
          },
          {
            "id": 19314,
            "nodeType": "VariableDeclaration",
            "src": "2873:39:60",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "chains",
            "nameLocation": "2906:6:60",
            "scope": 19989,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19309_storage_$",
              "typeString": "mapping(string => struct StdChains.Chain)"
            },
            "typeName": {
              "id": 19313,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 19310,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2881:6:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "2873:24:60",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19309_storage_$",
                "typeString": "mapping(string => struct StdChains.Chain)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 19312,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 19311,
                  "name": "Chain",
                  "nameLocations": [
                    "2891:5:60"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 19309,
                  "src": "2891:5:60"
                },
                "referencedDeclaration": 19309,
                "src": "2891:5:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Chain_$19309_storage_ptr",
                  "typeString": "struct StdChains.Chain"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 19318,
            "nodeType": "VariableDeclaration",
            "src": "2978:48:60",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "defaultRpcUrls",
            "nameLocation": "3012:14:60",
            "scope": 19989,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
              "typeString": "mapping(string => string)"
            },
            "typeName": {
              "id": 19317,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 19315,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2986:6:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "2978:25:60",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                "typeString": "mapping(string => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 19316,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2996:6:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 19322,
            "nodeType": "VariableDeclaration",
            "src": "3075:44:60",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "idToAlias",
            "nameLocation": "3110:9:60",
            "scope": 19989,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 19321,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 19319,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "3083:7:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "3075:26:60",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 19320,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "3094:6:60",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 19325,
            "nodeType": "VariableDeclaration",
            "src": "3126:44:60",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "fallbackToDefaultRpcUrls",
            "nameLocation": "3139:24:60",
            "scope": 19989,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 19323,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "3126:4:60",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "hexValue": "74727565",
              "id": 19324,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3166:4:60",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "true"
            },
            "visibility": "private"
          },
          {
            "id": 19377,
            "nodeType": "FunctionDefinition",
            "src": "3255:524:60",
            "nodes": [],
            "body": {
              "id": 19376,
              "nodeType": "Block",
              "src": "3345:434:60",
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
                        "id": 19340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 19336,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19327,
                                "src": "3369:10:60",
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
                              "id": 19335,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3363:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 19334,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3363:5:60",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 19337,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3363:17:60",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 19338,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3381:6:60",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "3363:24:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19339,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3391:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3363:29:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        "id": 19341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3394:69:60",
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
                      "id": 19333,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3355:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3355:109:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19343,
                  "nodeType": "ExpressionStatement",
                  "src": "3355:109:60"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 19344,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19951,
                      "src": "3475:19:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 19345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3475:21:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19346,
                  "nodeType": "ExpressionStatement",
                  "src": "3475:21:60"
                },
                {
                  "expression": {
                    "id": 19351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19347,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19331,
                      "src": "3506:5:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 19348,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19314,
                        "src": "3514:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19309_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 19350,
                      "indexExpression": {
                        "id": 19349,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19327,
                        "src": "3521:10:60",
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
                      "src": "3514:18:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "src": "3506:26:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 19352,
                  "nodeType": "ExpressionStatement",
                  "src": "3506:26:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 19357,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 19354,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19331,
                            "src": "3563:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                              "typeString": "struct StdChains.Chain memory"
                            }
                          },
                          "id": 19355,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3569:7:60",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19304,
                          "src": "3563:13:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19356,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3580:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3563:18:60",
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
                                "id": 19362,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3619:49:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                  "typeString": "literal_string \"StdChains getChain(string): Chain with alias \"\""
                                },
                                "value": "StdChains getChain(string): Chain with alias \""
                              },
                              {
                                "id": 19363,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19327,
                                "src": "3670:10:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "22206e6f7420666f756e642e",
                                "id": 19364,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3682:15:60",
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
                                "id": 19360,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "3602:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 19361,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "3606:12:60",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "3602:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 19365,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3602:96:60",
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
                          "id": 19359,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3595:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 19358,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "3595:6:60",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 19366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3595:104:60",
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
                      "id": 19353,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3542:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3542:167:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19368,
                  "nodeType": "ExpressionStatement",
                  "src": "3542:167:60"
                },
                {
                  "expression": {
                    "id": 19374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19369,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19331,
                      "src": "3720:5:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 19371,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19327,
                          "src": "3754:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "id": 19372,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19331,
                          "src": "3766:5:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
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
                            "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
                          }
                        ],
                        "id": 19370,
                        "name": "getChainWithUpdatedRpcUrl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19759,
                        "src": "3728:25:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$19309_memory_ptr_$returns$_t_struct$_Chain_$19309_memory_ptr_$",
                          "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                        }
                      },
                      "id": 19373,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3728:44:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "3720:52:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 19375,
                  "nodeType": "ExpressionStatement",
                  "src": "3720:52:60"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChain",
            "nameLocation": "3264:8:60",
            "parameters": {
              "id": 19328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19327,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "3287:10:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19377,
                  "src": "3273:24:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19326,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3273:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3272:26:60"
            },
            "returnParameters": {
              "id": 19332,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19331,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "3338:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19377,
                  "src": "3325:18:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 19330,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 19329,
                      "name": "Chain",
                      "nameLocations": [
                        "3325:5:60"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19309,
                      "src": "3325:5:60"
                    },
                    "referencedDeclaration": 19309,
                    "src": "3325:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3324:20:60"
            },
            "scope": 19989,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19434,
            "nodeType": "FunctionDefinition",
            "src": "3785:541:60",
            "nodes": [],
            "body": {
              "id": 19433,
              "nodeType": "Block",
              "src": "3866:460:60",
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
                        "id": 19388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 19386,
                          "name": "chainId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19379,
                          "src": "3884:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3895:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3884:12:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e",
                        "id": 19389,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3898:52:60",
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
                      "id": 19385,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3876:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3876:75:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19391,
                  "nodeType": "ExpressionStatement",
                  "src": "3876:75:60"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 19392,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19951,
                      "src": "3961:19:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 19393,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3961:21:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19394,
                  "nodeType": "ExpressionStatement",
                  "src": "3961:21:60"
                },
                {
                  "assignments": [
                    19396
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19396,
                      "mutability": "mutable",
                      "name": "chainAlias",
                      "nameLocation": "4006:10:60",
                      "nodeType": "VariableDeclaration",
                      "scope": 19433,
                      "src": "3992:24:60",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 19395,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3992:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19400,
                  "initialValue": {
                    "baseExpression": {
                      "id": 19397,
                      "name": "idToAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19322,
                      "src": "4019:9:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 19399,
                    "indexExpression": {
                      "id": 19398,
                      "name": "chainId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19379,
                      "src": "4029:7:60",
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
                    "src": "4019:18:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3992:45:60"
                },
                {
                  "expression": {
                    "id": 19405,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19401,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19383,
                      "src": "4048:5:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 19402,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19314,
                        "src": "4056:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19309_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 19404,
                      "indexExpression": {
                        "id": 19403,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19396,
                        "src": "4063:10:60",
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
                      "src": "4056:18:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "src": "4048:26:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 19406,
                  "nodeType": "ExpressionStatement",
                  "src": "4048:26:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 19411,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 19408,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19383,
                            "src": "4106:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                              "typeString": "struct StdChains.Chain memory"
                            }
                          },
                          "id": 19409,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4112:7:60",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19304,
                          "src": "4106:13:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19410,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4123:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4106:18:60",
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
                                "id": 19416,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4162:45:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                  "typeString": "literal_string \"StdChains getChain(uint256): Chain with ID \""
                                },
                                "value": "StdChains getChain(uint256): Chain with ID "
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 19419,
                                    "name": "chainId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19379,
                                    "src": "4221:7:60",
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
                                    "id": 19417,
                                    "name": "vm",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19291,
                                    "src": "4209:2:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VmSafe_$28475",
                                      "typeString": "contract VmSafe"
                                    }
                                  },
                                  "id": 19418,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4212:8:60",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 28007,
                                  "src": "4209:11:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure external returns (string memory)"
                                  }
                                },
                                "id": 19420,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4209:20:60",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "206e6f7420666f756e642e",
                                "id": 19421,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4231:13:60",
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
                                "id": 19414,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "4145:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 19415,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "4149:12:60",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "4145:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 19422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4145:100:60",
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
                          "id": 19413,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4138:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 19412,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4138:6:60",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 19423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4138:108:60",
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
                      "id": 19407,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4085:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4085:171:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19425,
                  "nodeType": "ExpressionStatement",
                  "src": "4085:171:60"
                },
                {
                  "expression": {
                    "id": 19431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19426,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19383,
                      "src": "4267:5:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 19428,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19396,
                          "src": "4301:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "id": 19429,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19383,
                          "src": "4313:5:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
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
                            "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
                          }
                        ],
                        "id": 19427,
                        "name": "getChainWithUpdatedRpcUrl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19759,
                        "src": "4275:25:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$19309_memory_ptr_$returns$_t_struct$_Chain_$19309_memory_ptr_$",
                          "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                        }
                      },
                      "id": 19430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4275:44:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "4267:52:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 19432,
                  "nodeType": "ExpressionStatement",
                  "src": "4267:52:60"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChain",
            "nameLocation": "3794:8:60",
            "parameters": {
              "id": 19380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19379,
                  "mutability": "mutable",
                  "name": "chainId",
                  "nameLocation": "3811:7:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19434,
                  "src": "3803:15:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19378,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3803:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3802:17:60"
            },
            "returnParameters": {
              "id": 19384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19383,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "3859:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19434,
                  "src": "3846:18:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 19382,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 19381,
                      "name": "Chain",
                      "nameLocations": [
                        "3846:5:60"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19309,
                      "src": "3846:5:60"
                    },
                    "referencedDeclaration": 19309,
                    "src": "3846:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3845:20:60"
            },
            "scope": 19989,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19544,
            "nodeType": "FunctionDefinition",
            "src": "4397:1173:60",
            "nodes": [],
            "body": {
              "id": 19543,
              "nodeType": "Block",
              "src": "4482:1088:60",
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
                        "id": 19449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 19445,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19436,
                                "src": "4519:10:60",
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
                              "id": 19444,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4513:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 19443,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "4513:5:60",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 19446,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4513:17:60",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 19447,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4531:6:60",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "4513:24:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19448,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4541:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4513:29:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        "id": 19450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4556:79:60",
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
                      "id": 19442,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4492:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4492:153:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19452,
                  "nodeType": "ExpressionStatement",
                  "src": "4492:153:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 19457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 19454,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19439,
                            "src": "4664:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 19455,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4670:7:60",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19297,
                          "src": "4664:13:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 19456,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4681:1:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4664:18:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e",
                        "id": 19458,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4684:61:60",
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
                      "id": 19453,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4656:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4656:90:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19460,
                  "nodeType": "ExpressionStatement",
                  "src": "4656:90:60"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 19461,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19951,
                      "src": "4757:19:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 19462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4757:21:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19463,
                  "nodeType": "ExpressionStatement",
                  "src": "4757:21:60"
                },
                {
                  "assignments": [
                    19465
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19465,
                      "mutability": "mutable",
                      "name": "foundAlias",
                      "nameLocation": "4802:10:60",
                      "nodeType": "VariableDeclaration",
                      "scope": 19543,
                      "src": "4788:24:60",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 19464,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "4788:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19470,
                  "initialValue": {
                    "baseExpression": {
                      "id": 19466,
                      "name": "idToAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19322,
                      "src": "4815:9:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 19469,
                    "indexExpression": {
                      "expression": {
                        "id": 19467,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19439,
                        "src": "4825:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 19468,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4831:7:60",
                      "memberName": "chainId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 19297,
                      "src": "4825:13:60",
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
                    "src": "4815:24:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4788:51:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 19492,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 19478,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 19474,
                                  "name": "foundAlias",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 19465,
                                  "src": "4877:10:60",
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
                                "id": 19473,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4871:5:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 19472,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4871:5:60",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 19475,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4871:17:60",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 19476,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4889:6:60",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "4871:24:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 19477,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4899:1:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4871:29:60",
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
                          "id": 19491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 19482,
                                    "name": "foundAlias",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19465,
                                    "src": "4920:10:60",
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
                                  "id": 19481,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4914:5:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                    "typeString": "type(bytes storage pointer)"
                                  },
                                  "typeName": {
                                    "id": 19480,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4914:5:60",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 19483,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4914:17:60",
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
                              "id": 19479,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "4904:9:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 19484,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4904:28:60",
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
                                    "id": 19488,
                                    "name": "chainAlias",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19436,
                                    "src": "4952:10:60",
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
                                  "id": 19487,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4946:5:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                    "typeString": "type(bytes storage pointer)"
                                  },
                                  "typeName": {
                                    "id": 19486,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4946:5:60",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 19489,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4946:17:60",
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
                              "id": 19485,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "4936:9:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 19490,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4936:28:60",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4904:60:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4871:93:60",
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
                                "id": 19497,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5040:49:60",
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
                                      "id": 19500,
                                      "name": "chain",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 19439,
                                      "src": "5123:5:60",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                                        "typeString": "struct StdChains.ChainData memory"
                                      }
                                    },
                                    "id": 19501,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "5129:7:60",
                                    "memberName": "chainId",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 19297,
                                    "src": "5123:13:60",
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
                                    "id": 19498,
                                    "name": "vm",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19291,
                                    "src": "5111:2:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VmSafe_$28475",
                                      "typeString": "contract VmSafe"
                                    }
                                  },
                                  "id": 19499,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5114:8:60",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 28007,
                                  "src": "5111:11:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure external returns (string memory)"
                                  }
                                },
                                "id": 19502,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5111:26:60",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "20616c726561647920757365642062792022",
                                "id": 19503,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5159:21:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                  "typeString": "literal_string \" already used by \"\""
                                },
                                "value": " already used by \""
                              },
                              {
                                "id": 19504,
                                "name": "foundAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19465,
                                "src": "5202:10:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "222e",
                                "id": 19505,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5234:5:60",
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
                                "id": 19495,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "5002:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 19496,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "5006:12:60",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "5002:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 19506,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5002:255:60",
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
                          "id": 19494,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4978:6:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 19493,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4978:6:60",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 19507,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4978:293:60",
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
                      "id": 19471,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4850:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 19508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4850:431:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19509,
                  "nodeType": "ExpressionStatement",
                  "src": "4850:431:60"
                },
                {
                  "assignments": [
                    19511
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19511,
                      "mutability": "mutable",
                      "name": "oldChainId",
                      "nameLocation": "5300:10:60",
                      "nodeType": "VariableDeclaration",
                      "scope": 19543,
                      "src": "5292:18:60",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19510,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5292:7:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19516,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 19512,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19314,
                        "src": "5313:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19309_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 19514,
                      "indexExpression": {
                        "id": 19513,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19436,
                        "src": "5320:10:60",
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
                      "src": "5313:18:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "id": 19515,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5332:7:60",
                    "memberName": "chainId",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 19304,
                    "src": "5313:26:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5292:47:60"
                },
                {
                  "expression": {
                    "id": 19520,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "5349:28:60",
                    "subExpression": {
                      "baseExpression": {
                        "id": 19517,
                        "name": "idToAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19322,
                        "src": "5356:9:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 19519,
                      "indexExpression": {
                        "id": 19518,
                        "name": "oldChainId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19511,
                        "src": "5366:10:60",
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
                      "src": "5356:21:60",
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
                  "id": 19521,
                  "nodeType": "ExpressionStatement",
                  "src": "5349:28:60"
                },
                {
                  "expression": {
                    "id": 19534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 19522,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19314,
                        "src": "5388:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$19309_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 19524,
                      "indexExpression": {
                        "id": 19523,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19436,
                        "src": "5395:10:60",
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
                      "src": "5388:18:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 19526,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19439,
                            "src": "5434:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 19527,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5440:4:60",
                          "memberName": "name",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19295,
                          "src": "5434:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 19528,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19439,
                            "src": "5455:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 19529,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5461:7:60",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19297,
                          "src": "5455:13:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 19530,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19436,
                          "src": "5482:10:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 19531,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19439,
                            "src": "5502:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 19532,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5508:6:60",
                          "memberName": "rpcUrl",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 19299,
                          "src": "5502:12:60",
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
                        "id": 19525,
                        "name": "Chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19309,
                        "src": "5421:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Chain_$19309_storage_ptr_$",
                          "typeString": "type(struct StdChains.Chain storage pointer)"
                        }
                      },
                      "id": 19533,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "5428:4:60",
                        "5446:7:60",
                        "5470:10:60",
                        "5494:6:60"
                      ],
                      "names": [
                        "name",
                        "chainId",
                        "chainAlias",
                        "rpcUrl"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "5421:95:60",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "5388:128:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_storage",
                      "typeString": "struct StdChains.Chain storage ref"
                    }
                  },
                  "id": 19535,
                  "nodeType": "ExpressionStatement",
                  "src": "5388:128:60"
                },
                {
                  "expression": {
                    "id": 19541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 19536,
                        "name": "idToAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19322,
                        "src": "5526:9:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 19539,
                      "indexExpression": {
                        "expression": {
                          "id": 19537,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19439,
                          "src": "5536:5:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                            "typeString": "struct StdChains.ChainData memory"
                          }
                        },
                        "id": 19538,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5542:7:60",
                        "memberName": "chainId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 19297,
                        "src": "5536:13:60",
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
                      "src": "5526:24:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 19540,
                      "name": "chainAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19436,
                      "src": "5553:10:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "5526:37:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 19542,
                  "nodeType": "ExpressionStatement",
                  "src": "5526:37:60"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChain",
            "nameLocation": "4406:8:60",
            "parameters": {
              "id": 19440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19436,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "4429:10:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19544,
                  "src": "4415:24:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19435,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4415:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19439,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "4458:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19544,
                  "src": "4441:22:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                    "typeString": "struct StdChains.ChainData"
                  },
                  "typeName": {
                    "id": 19438,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 19437,
                      "name": "ChainData",
                      "nameLocations": [
                        "4441:9:60"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19300,
                      "src": "4441:9:60"
                    },
                    "referencedDeclaration": 19300,
                    "src": "4441:9:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ChainData_$19300_storage_ptr",
                      "typeString": "struct StdChains.ChainData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4414:50:60"
            },
            "returnParameters": {
              "id": 19441,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4482:0:60"
            },
            "scope": 19989,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19565,
            "nodeType": "FunctionDefinition",
            "src": "5641:195:60",
            "nodes": [],
            "body": {
              "id": 19564,
              "nodeType": "Block",
              "src": "5722:114:60",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 19553,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19546,
                        "src": "5741:10:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 19555,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19549,
                              "src": "5770:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 19556,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5776:4:60",
                            "memberName": "name",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19302,
                            "src": "5770:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "expression": {
                              "id": 19557,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19549,
                              "src": "5791:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 19558,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5797:7:60",
                            "memberName": "chainId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19304,
                            "src": "5791:13:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 19559,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19549,
                              "src": "5814:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 19560,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5820:6:60",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19308,
                            "src": "5814:12:60",
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
                          "id": 19554,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "5753:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [
                          "5764:4:60",
                          "5782:7:60",
                          "5806:6:60"
                        ],
                        "names": [
                          "name",
                          "chainId",
                          "rpcUrl"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "5753:75:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19552,
                      "name": "setChain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19544,
                        19565
                      ],
                      "referencedDeclaration": 19544,
                      "src": "5732:8:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5732:97:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19563,
                  "nodeType": "ExpressionStatement",
                  "src": "5732:97:60"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChain",
            "nameLocation": "5650:8:60",
            "parameters": {
              "id": 19550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19546,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "5673:10:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19565,
                  "src": "5659:24:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19545,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5659:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19549,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "5698:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19565,
                  "src": "5685:18:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 19548,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 19547,
                      "name": "Chain",
                      "nameLocations": [
                        "5685:5:60"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19309,
                      "src": "5685:5:60"
                    },
                    "referencedDeclaration": 19309,
                    "src": "5685:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5658:46:60"
            },
            "returnParameters": {
              "id": 19551,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5722:0:60"
            },
            "scope": 19989,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 19642,
            "nodeType": "FunctionDefinition",
            "src": "5842:451:60",
            "nodes": [],
            "body": {
              "id": 19641,
              "nodeType": "Block",
              "src": "5916:377:60",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19573
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19573,
                      "mutability": "mutable",
                      "name": "strb",
                      "nameLocation": "5939:4:60",
                      "nodeType": "VariableDeclaration",
                      "scope": 19641,
                      "src": "5926:17:60",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 19572,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5926:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19578,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19576,
                        "name": "str",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19567,
                        "src": "5952:3:60",
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
                      "id": 19575,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5946:5:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": {
                        "id": 19574,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5946:5:60",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 19577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5946:10:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5926:30:60"
                },
                {
                  "assignments": [
                    19580
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19580,
                      "mutability": "mutable",
                      "name": "copy",
                      "nameLocation": "5979:4:60",
                      "nodeType": "VariableDeclaration",
                      "scope": 19641,
                      "src": "5966:17:60",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 19579,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5966:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19586,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 19583,
                          "name": "strb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19573,
                          "src": "5996:4:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 19584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6001:6:60",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "5996:11:60",
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
                      "id": 19582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "5986:9:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 19581,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5990:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 19585,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5986:22:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5966:42:60"
                },
                {
                  "body": {
                    "id": 19634,
                    "nodeType": "Block",
                    "src": "6060:198:60",
                    "statements": [
                      {
                        "assignments": [
                          19599
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 19599,
                            "mutability": "mutable",
                            "name": "b",
                            "nameLocation": "6081:1:60",
                            "nodeType": "VariableDeclaration",
                            "scope": 19634,
                            "src": "6074:8:60",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            "typeName": {
                              "id": 19598,
                              "name": "bytes1",
                              "nodeType": "ElementaryTypeName",
                              "src": "6074:6:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 19603,
                        "initialValue": {
                          "baseExpression": {
                            "id": 19600,
                            "name": "strb",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19573,
                            "src": "6085:4:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 19602,
                          "indexExpression": {
                            "id": 19601,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19588,
                            "src": "6090:1:60",
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
                          "src": "6085:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6074:18:60"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 19610,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            "id": 19606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 19604,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19599,
                              "src": "6110:1:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "hexValue": "30783631",
                              "id": 19605,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6115:4:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_97_by_1",
                                "typeString": "int_const 97"
                              },
                              "value": "0x61"
                            },
                            "src": "6110:9:60",
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
                            "id": 19609,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 19607,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19599,
                              "src": "6123:1:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "hexValue": "30783741",
                              "id": 19608,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6128:4:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_122_by_1",
                                "typeString": "int_const 122"
                              },
                              "value": "0x7A"
                            },
                            "src": "6123:9:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "6110:22:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 19632,
                          "nodeType": "Block",
                          "src": "6204:44:60",
                          "statements": [
                            {
                              "expression": {
                                "id": 19630,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 19626,
                                    "name": "copy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19580,
                                    "src": "6222:4:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 19628,
                                  "indexExpression": {
                                    "id": 19627,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19588,
                                    "src": "6227:1:60",
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
                                  "src": "6222:7:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 19629,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 19599,
                                  "src": "6232:1:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "6222:11:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 19631,
                              "nodeType": "ExpressionStatement",
                              "src": "6222:11:60"
                            }
                          ]
                        },
                        "id": 19633,
                        "nodeType": "IfStatement",
                        "src": "6106:142:60",
                        "trueBody": {
                          "id": 19625,
                          "nodeType": "Block",
                          "src": "6134:64:60",
                          "statements": [
                            {
                              "expression": {
                                "id": 19623,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 19611,
                                    "name": "copy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19580,
                                    "src": "6152:4:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 19613,
                                  "indexExpression": {
                                    "id": 19612,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19588,
                                    "src": "6157:1:60",
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
                                  "src": "6152:7:60",
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
                                      "id": 19621,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 19618,
                                            "name": "b",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 19599,
                                            "src": "6175:1:60",
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
                                          "id": 19617,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "6169:5:60",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_uint8_$",
                                            "typeString": "type(uint8)"
                                          },
                                          "typeName": {
                                            "id": 19616,
                                            "name": "uint8",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6169:5:60",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 19619,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6169:8:60",
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
                                        "id": 19620,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6180:2:60",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_32_by_1",
                                          "typeString": "int_const 32"
                                        },
                                        "value": "32"
                                      },
                                      "src": "6169:13:60",
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
                                    "id": 19615,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6162:6:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 19614,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6162:6:60",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 19622,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6162:21:60",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "6152:31:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 19624,
                              "nodeType": "ExpressionStatement",
                              "src": "6152:31:60"
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
                    "id": 19594,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 19591,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19588,
                      "src": "6038:1:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 19592,
                        "name": "strb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19573,
                        "src": "6042:4:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 19593,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6047:6:60",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6042:11:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6038:15:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19635,
                  "initializationExpression": {
                    "assignments": [
                      19588
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 19588,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6031:1:60",
                        "nodeType": "VariableDeclaration",
                        "scope": 19635,
                        "src": "6023:9:60",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 19587,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6023:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 19590,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 19589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6035:1:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6023:13:60"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 19596,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6055:3:60",
                      "subExpression": {
                        "id": 19595,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19588,
                        "src": "6055:1:60",
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
                    "id": 19597,
                    "nodeType": "ExpressionStatement",
                    "src": "6055:3:60"
                  },
                  "nodeType": "ForStatement",
                  "src": "6018:240:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 19638,
                        "name": "copy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19580,
                        "src": "6281:4:60",
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
                      "id": 19637,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6274:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 19636,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "6274:6:60",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 19639,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6274:12:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 19571,
                  "id": 19640,
                  "nodeType": "Return",
                  "src": "6267:19:60"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_toUpper",
            "nameLocation": "5851:8:60",
            "parameters": {
              "id": 19568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19567,
                  "mutability": "mutable",
                  "name": "str",
                  "nameLocation": "5874:3:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19642,
                  "src": "5860:17:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19566,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5860:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5859:19:60"
            },
            "returnParameters": {
              "id": 19571,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19570,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 19642,
                  "src": "5901:13:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19569,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5901:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5900:15:60"
            },
            "scope": 19989,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 19759,
            "nodeType": "FunctionDefinition",
            "src": "6429:1218:60",
            "nodes": [],
            "body": {
              "id": 19758,
              "nodeType": "Block",
              "src": "6541:1106:60",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 19660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 19655,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19647,
                              "src": "6561:5:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 19656,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6567:6:60",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19308,
                            "src": "6561:12:60",
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
                          "id": 19654,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6555:5:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 19653,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "6555:5:60",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 19657,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6555:19:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 19658,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6575:6:60",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6555:26:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 19659,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6585:1:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6555:31:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19755,
                  "nodeType": "IfStatement",
                  "src": "6551:1068:60",
                  "trueBody": {
                    "id": 19754,
                    "nodeType": "Block",
                    "src": "6588:1031:60",
                    "statements": [
                      {
                        "clauses": [
                          {
                            "block": {
                              "id": 19674,
                              "nodeType": "Block",
                              "src": "6665:60:60",
                              "statements": [
                                {
                                  "expression": {
                                    "id": 19672,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "expression": {
                                        "id": 19668,
                                        "name": "chain",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 19647,
                                        "src": "6683:5:60",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                                          "typeString": "struct StdChains.Chain memory"
                                        }
                                      },
                                      "id": 19670,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "memberLocation": "6689:6:60",
                                      "memberName": "rpcUrl",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 19308,
                                      "src": "6683:12:60",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "nodeType": "Assignment",
                                    "operator": "=",
                                    "rightHandSide": {
                                      "id": 19671,
                                      "name": "configRpcUrl",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 19666,
                                      "src": "6698:12:60",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "src": "6683:27:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "id": 19673,
                                  "nodeType": "ExpressionStatement",
                                  "src": "6683:27:60"
                                }
                              ]
                            },
                            "errorName": "",
                            "id": 19675,
                            "nodeType": "TryCatchClause",
                            "parameters": {
                              "id": 19667,
                              "nodeType": "ParameterList",
                              "parameters": [
                                {
                                  "constant": false,
                                  "id": 19666,
                                  "mutability": "mutable",
                                  "name": "configRpcUrl",
                                  "nameLocation": "6651:12:60",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 19675,
                                  "src": "6637:26:60",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string"
                                  },
                                  "typeName": {
                                    "id": 19665,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6637:6:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_storage_ptr",
                                      "typeString": "string"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "src": "6636:28:60"
                            },
                            "src": "6628:97:60"
                          },
                          {
                            "block": {
                              "id": 19751,
                              "nodeType": "Block",
                              "src": "6751:858:60",
                              "statements": [
                                {
                                  "assignments": [
                                    19680
                                  ],
                                  "declarations": [
                                    {
                                      "constant": false,
                                      "id": 19680,
                                      "mutability": "mutable",
                                      "name": "envName",
                                      "nameLocation": "6783:7:60",
                                      "nodeType": "VariableDeclaration",
                                      "scope": 19751,
                                      "src": "6769:21:60",
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                      },
                                      "typeName": {
                                        "id": 19679,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6769:6:60",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_string_storage_ptr",
                                          "typeString": "string"
                                        }
                                      },
                                      "visibility": "internal"
                                    }
                                  ],
                                  "id": 19691,
                                  "initialValue": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "id": 19686,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19644,
                                                "src": "6826:10:60",
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
                                              "id": 19685,
                                              "name": "_toUpper",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 19642,
                                              "src": "6817:8:60",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                              }
                                            },
                                            "id": 19687,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6817:20:60",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          {
                                            "hexValue": "5f5250435f55524c",
                                            "id": 19688,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6839:10:60",
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
                                            "id": 19683,
                                            "name": "abi",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -1,
                                            "src": "6800:3:60",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_abi",
                                              "typeString": "abi"
                                            }
                                          },
                                          "id": 19684,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "memberLocation": "6804:12:60",
                                          "memberName": "encodePacked",
                                          "nodeType": "MemberAccess",
                                          "src": "6800:16:60",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                            "typeString": "function () pure returns (bytes memory)"
                                          }
                                        },
                                        "id": 19689,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6800:50:60",
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
                                      "id": 19682,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "6793:6:60",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                        "typeString": "type(string storage pointer)"
                                      },
                                      "typeName": {
                                        "id": 19681,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6793:6:60",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 19690,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "6793:58:60",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "nodeType": "VariableDeclarationStatement",
                                  "src": "6769:82:60"
                                },
                                {
                                  "condition": {
                                    "id": 19692,
                                    "name": "fallbackToDefaultRpcUrls",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 19325,
                                    "src": "6873:24:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "falseBody": {
                                    "id": 19715,
                                    "nodeType": "Block",
                                    "src": "7006:77:60",
                                    "statements": [
                                      {
                                        "expression": {
                                          "id": 19713,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftHandSide": {
                                            "expression": {
                                              "id": 19706,
                                              "name": "chain",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 19647,
                                              "src": "7028:5:60",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                              }
                                            },
                                            "id": 19708,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "7034:6:60",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19308,
                                            "src": "7028:12:60",
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
                                                "id": 19711,
                                                "name": "envName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19680,
                                                "src": "7056:7:60",
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
                                                "id": 19709,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19291,
                                                "src": "7043:2:60",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_VmSafe_$28475",
                                                  "typeString": "contract VmSafe"
                                                }
                                              },
                                              "id": 19710,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "7046:9:60",
                                              "memberName": "envString",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 27551,
                                              "src": "7043:12:60",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) view external returns (string memory)"
                                              }
                                            },
                                            "id": 19712,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7043:21:60",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "src": "7028:36:60",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "id": 19714,
                                        "nodeType": "ExpressionStatement",
                                        "src": "7028:36:60"
                                      }
                                    ]
                                  },
                                  "id": 19716,
                                  "nodeType": "IfStatement",
                                  "src": "6869:214:60",
                                  "trueBody": {
                                    "id": 19705,
                                    "nodeType": "Block",
                                    "src": "6899:101:60",
                                    "statements": [
                                      {
                                        "expression": {
                                          "id": 19703,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftHandSide": {
                                            "expression": {
                                              "id": 19693,
                                              "name": "chain",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 19647,
                                              "src": "6921:5:60",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                              }
                                            },
                                            "id": 19695,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "6927:6:60",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19308,
                                            "src": "6921:12:60",
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
                                                "id": 19698,
                                                "name": "envName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19680,
                                                "src": "6945:7:60",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              },
                                              {
                                                "baseExpression": {
                                                  "id": 19699,
                                                  "name": "defaultRpcUrls",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 19318,
                                                  "src": "6954:14:60",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                    "typeString": "mapping(string memory => string storage ref)"
                                                  }
                                                },
                                                "id": 19701,
                                                "indexExpression": {
                                                  "id": 19700,
                                                  "name": "chainAlias",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 19644,
                                                  "src": "6969:10:60",
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
                                                "src": "6954:26:60",
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
                                                "id": 19696,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19291,
                                                "src": "6936:2:60",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_VmSafe_$28475",
                                                  "typeString": "contract VmSafe"
                                                }
                                              },
                                              "id": 19697,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "6939:5:60",
                                              "memberName": "envOr",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 27682,
                                              "src": "6936:8:60",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                              }
                                            },
                                            "id": 19702,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6936:45:60",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "src": "6921:60:60",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "id": 19704,
                                        "nodeType": "ExpressionStatement",
                                        "src": "6921:60:60"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "assignments": [
                                    19718
                                  ],
                                  "declarations": [
                                    {
                                      "constant": false,
                                      "id": 19718,
                                      "mutability": "mutable",
                                      "name": "notFoundError",
                                      "nameLocation": "7175:13:60",
                                      "nodeType": "VariableDeclaration",
                                      "scope": 19751,
                                      "src": "7162:26:60",
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                      },
                                      "typeName": {
                                        "id": 19717,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7162:5:60",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes_storage_ptr",
                                          "typeString": "bytes"
                                        }
                                      },
                                      "visibility": "internal"
                                    }
                                  ],
                                  "id": 19731,
                                  "initialValue": {
                                    "arguments": [
                                      {
                                        "hexValue": "4368656174436f64654572726f72",
                                        "id": 19721,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7235:16:60",
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
                                                "id": 19726,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7277:18:60",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                  "typeString": "literal_string \"invalid rpc url \""
                                                },
                                                "value": "invalid rpc url "
                                              },
                                              {
                                                "id": 19727,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19644,
                                                "src": "7297:10:60",
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
                                                "id": 19724,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "7260:3:60",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_abi",
                                                  "typeString": "abi"
                                                }
                                              },
                                              "id": 19725,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "memberLocation": "7264:12:60",
                                              "memberName": "encodePacked",
                                              "nodeType": "MemberAccess",
                                              "src": "7260:16:60",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function () pure returns (bytes memory)"
                                              }
                                            },
                                            "id": 19728,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7260:48:60",
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
                                          "id": 19723,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "7253:6:60",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                            "typeString": "type(string storage pointer)"
                                          },
                                          "typeName": {
                                            "id": 19722,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7253:6:60",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 19729,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7253:56:60",
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
                                        "id": 19719,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -1,
                                        "src": "7211:3:60",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 19720,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberLocation": "7215:19:60",
                                      "memberName": "encodeWithSignature",
                                      "nodeType": "MemberAccess",
                                      "src": "7211:23:60",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function (string memory) pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 19730,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7211:99:60",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "nodeType": "VariableDeclarationStatement",
                                  "src": "7162:148:60"
                                },
                                {
                                  "condition": {
                                    "commonType": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "id": 19747,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      "id": 19738,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 19733,
                                            "name": "notFoundError",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 19718,
                                            "src": "7342:13:60",
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
                                          "id": 19732,
                                          "name": "keccak256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -8,
                                          "src": "7332:9:60",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 19734,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7332:24:60",
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
                                            "id": 19736,
                                            "name": "err",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 19677,
                                            "src": "7370:3:60",
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
                                          "id": 19735,
                                          "name": "keccak256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -8,
                                          "src": "7360:9:60",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 19737,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7360:14:60",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "src": "7332:42:60",
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
                                      "id": 19746,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "expression": {
                                          "arguments": [
                                            {
                                              "expression": {
                                                "id": 19741,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19647,
                                                "src": "7384:5:60",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                                                  "typeString": "struct StdChains.Chain memory"
                                                }
                                              },
                                              "id": 19742,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "7390:6:60",
                                              "memberName": "rpcUrl",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 19308,
                                              "src": "7384:12:60",
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
                                            "id": 19740,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "7378:5:60",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                              "typeString": "type(bytes storage pointer)"
                                            },
                                            "typeName": {
                                              "id": 19739,
                                              "name": "bytes",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "7378:5:60",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 19743,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "7378:19:60",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        },
                                        "id": 19744,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "7398:6:60",
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "src": "7378:26:60",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "==",
                                      "rightExpression": {
                                        "hexValue": "30",
                                        "id": 19745,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7408:1:60",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                      },
                                      "src": "7378:31:60",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "src": "7332:77:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "id": 19750,
                                  "nodeType": "IfStatement",
                                  "src": "7328:267:60",
                                  "trueBody": {
                                    "id": 19749,
                                    "nodeType": "Block",
                                    "src": "7411:184:60",
                                    "statements": [
                                      {
                                        "AST": {
                                          "nodeType": "YulBlock",
                                          "src": "7497:80:60",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "arguments": [
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "7534:2:60",
                                                        "type": "",
                                                        "value": "32"
                                                      },
                                                      {
                                                        "name": "err",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7538:3:60"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "add",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "7530:3:60"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7530:12:60"
                                                  },
                                                  {
                                                    "arguments": [
                                                      {
                                                        "name": "err",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7550:3:60"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "mload",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "7544:5:60"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7544:10:60"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "7523:6:60"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7523:32:60"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "7523:32:60"
                                            }
                                          ]
                                        },
                                        "documentation": "@solidity memory-safe-assembly",
                                        "evmVersion": "paris",
                                        "externalReferences": [
                                          {
                                            "declaration": 19677,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7538:3:60",
                                            "valueSize": 1
                                          },
                                          {
                                            "declaration": 19677,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7550:3:60",
                                            "valueSize": 1
                                          }
                                        ],
                                        "id": 19748,
                                        "nodeType": "InlineAssembly",
                                        "src": "7488:89:60"
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            "errorName": "",
                            "id": 19752,
                            "nodeType": "TryCatchClause",
                            "parameters": {
                              "id": 19678,
                              "nodeType": "ParameterList",
                              "parameters": [
                                {
                                  "constant": false,
                                  "id": 19677,
                                  "mutability": "mutable",
                                  "name": "err",
                                  "nameLocation": "6746:3:60",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 19752,
                                  "src": "6733:16:60",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes"
                                  },
                                  "typeName": {
                                    "id": 19676,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6733:5:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_storage_ptr",
                                      "typeString": "bytes"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "src": "6732:18:60"
                            },
                            "src": "6726:883:60"
                          }
                        ],
                        "externalCall": {
                          "arguments": [
                            {
                              "id": 19663,
                              "name": "chainAlias",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19644,
                              "src": "6616:10:60",
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
                              "id": 19661,
                              "name": "vm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19291,
                              "src": "6606:2:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$28475",
                                "typeString": "contract VmSafe"
                              }
                            },
                            "id": 19662,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6609:6:60",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 28436,
                            "src": "6606:9:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                              "typeString": "function (string memory) view external returns (string memory)"
                            }
                          },
                          "id": 19664,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6606:21:60",
                          "tryCall": true,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 19753,
                        "nodeType": "TryStatement",
                        "src": "6602:1007:60"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 19756,
                    "name": "chain",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19647,
                    "src": "7635:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "functionReturnParameters": 19652,
                  "id": 19757,
                  "nodeType": "Return",
                  "src": "7628:12:60"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChainWithUpdatedRpcUrl",
            "nameLocation": "6438:25:60",
            "parameters": {
              "id": 19648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19644,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "6478:10:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19759,
                  "src": "6464:24:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19643,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6464:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19647,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "6503:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19759,
                  "src": "6490:18:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 19646,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 19645,
                      "name": "Chain",
                      "nameLocations": [
                        "6490:5:60"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19309,
                      "src": "6490:5:60"
                    },
                    "referencedDeclaration": 19309,
                    "src": "6490:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6463:46:60"
            },
            "returnParameters": {
              "id": 19652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19651,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 19759,
                  "src": "6527:12:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$19309_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 19650,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 19649,
                      "name": "Chain",
                      "nameLocations": [
                        "6527:5:60"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19309,
                      "src": "6527:5:60"
                    },
                    "referencedDeclaration": 19309,
                    "src": "6527:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$19309_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6526:14:60"
            },
            "scope": 19989,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 19769,
            "nodeType": "FunctionDefinition",
            "src": "7653:117:60",
            "nodes": [],
            "body": {
              "id": 19768,
              "nodeType": "Block",
              "src": "7716:54:60",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 19766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19764,
                      "name": "fallbackToDefaultRpcUrls",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19325,
                      "src": "7726:24:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 19765,
                      "name": "useDefault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19761,
                      "src": "7753:10:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7726:37:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19767,
                  "nodeType": "ExpressionStatement",
                  "src": "7726:37:60"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setFallbackToDefaultRpcUrls",
            "nameLocation": "7662:27:60",
            "parameters": {
              "id": 19762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19761,
                  "mutability": "mutable",
                  "name": "useDefault",
                  "nameLocation": "7695:10:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19769,
                  "src": "7690:15:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19760,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7690:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7689:17:60"
            },
            "returnParameters": {
              "id": 19763,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7716:0:60"
            },
            "scope": 19989,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 19951,
            "nodeType": "FunctionDefinition",
            "src": "7776:2751:60",
            "nodes": [],
            "body": {
              "id": 19950,
              "nodeType": "Block",
              "src": "7815:2712:60",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 19772,
                    "name": "stdChainsInitialized",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19293,
                    "src": "7829:20:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19774,
                  "nodeType": "IfStatement",
                  "src": "7825:33:60",
                  "trueBody": {
                    "functionReturnParameters": 19771,
                    "id": 19773,
                    "nodeType": "Return",
                    "src": "7851:7:60"
                  }
                },
                {
                  "expression": {
                    "id": 19777,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19775,
                      "name": "stdChainsInitialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19293,
                      "src": "7868:20:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 19776,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7891:4:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "7868:27:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 19778,
                  "nodeType": "ExpressionStatement",
                  "src": "7868:27:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "616e76696c",
                        "id": 19780,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8018:7:60",
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
                            "id": 19782,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8037:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                              "typeString": "literal_string \"Anvil\""
                            },
                            "value": "Anvil"
                          },
                          {
                            "hexValue": "3331333337",
                            "id": 19783,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8046:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31337_by_1",
                              "typeString": "int_const 31337"
                            },
                            "value": "31337"
                          },
                          {
                            "hexValue": "687474703a2f2f3132372e302e302e313a38353435",
                            "id": 19784,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8053:23:60",
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
                          "id": 19781,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "8027:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19785,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8027:50:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19779,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "7992:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19786,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7992:86:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19787,
                  "nodeType": "ExpressionStatement",
                  "src": "7992:86:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d61696e6e6574",
                        "id": 19789,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8127:9:60",
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
                            "id": 19791,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8148:9:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                              "typeString": "literal_string \"Mainnet\""
                            },
                            "value": "Mainnet"
                          },
                          {
                            "hexValue": "31",
                            "id": 19792,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8159:1:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          {
                            "hexValue": "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 19793,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8162:63:60",
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
                          "id": 19790,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "8138:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19794,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8138:88:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19788,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "8088:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8088:148:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19796,
                  "nodeType": "ExpressionStatement",
                  "src": "8088:148:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "676f65726c69",
                        "id": 19798,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8285:8:60",
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
                            "id": 19800,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8305:8:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                              "typeString": "literal_string \"Goerli\""
                            },
                            "value": "Goerli"
                          },
                          {
                            "hexValue": "35",
                            "id": 19801,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8315:1:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5_by_1",
                              "typeString": "int_const 5"
                            },
                            "value": "5"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 19802,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8318:62:60",
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
                          "id": 19799,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "8295:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19803,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8295:86:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19797,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "8246:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8246:145:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19805,
                  "nodeType": "ExpressionStatement",
                  "src": "8246:145:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "7365706f6c6961",
                        "id": 19807,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8440:9:60",
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
                            "id": 19809,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8461:9:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                              "typeString": "literal_string \"Sepolia\""
                            },
                            "value": "Sepolia"
                          },
                          {
                            "hexValue": "3131313535313131",
                            "id": 19810,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8472:8:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_11155111_by_1",
                              "typeString": "int_const 11155111"
                            },
                            "value": "11155111"
                          },
                          {
                            "hexValue": "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 19811,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8482:63:60",
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
                          "id": 19808,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "8451:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19812,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8451:95:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19806,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "8401:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8401:155:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19814,
                  "nodeType": "ExpressionStatement",
                  "src": "8401:155:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6f7074696d69736d",
                        "id": 19816,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8592:10:60",
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
                            "id": 19818,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8614:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                              "typeString": "literal_string \"Optimism\""
                            },
                            "value": "Optimism"
                          },
                          {
                            "hexValue": "3130",
                            "id": 19819,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8626:2:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          {
                            "hexValue": "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f",
                            "id": 19820,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8630:29:60",
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
                          "id": 19817,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "8604:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8604:56:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19815,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "8566:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19822,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8566:95:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19823,
                  "nodeType": "ExpressionStatement",
                  "src": "8566:95:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6f7074696d69736d5f676f65726c69",
                        "id": 19825,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8697:17:60",
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
                            "id": 19827,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8726:17:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                              "typeString": "literal_string \"Optimism Goerli\""
                            },
                            "value": "Optimism Goerli"
                          },
                          {
                            "hexValue": "343230",
                            "id": 19828,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8745:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_420_by_1",
                              "typeString": "int_const 420"
                            },
                            "value": "420"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f",
                            "id": 19829,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8750:28:60",
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
                          "id": 19826,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "8716:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19830,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8716:63:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19824,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "8671:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8671:109:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19832,
                  "nodeType": "ExpressionStatement",
                  "src": "8671:109:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6f6e65",
                        "id": 19834,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8816:14:60",
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
                            "id": 19836,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8842:14:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                              "typeString": "literal_string \"Arbitrum One\""
                            },
                            "value": "Arbitrum One"
                          },
                          {
                            "hexValue": "3432313631",
                            "id": 19837,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8858:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42161_by_1",
                              "typeString": "int_const 42161"
                            },
                            "value": "42161"
                          },
                          {
                            "hexValue": "68747470733a2f2f617262312e617262697472756d2e696f2f727063",
                            "id": 19838,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8865:30:60",
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
                          "id": 19835,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "8832:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19839,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8832:64:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19833,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "8790:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8790:107:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19841,
                  "nodeType": "ExpressionStatement",
                  "src": "8790:107:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6f6e655f676f65726c69",
                        "id": 19843,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8946:21:60",
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
                            "id": 19845,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8979:21:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                              "typeString": "literal_string \"Arbitrum One Goerli\""
                            },
                            "value": "Arbitrum One Goerli"
                          },
                          {
                            "hexValue": "343231363133",
                            "id": 19846,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9002:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_421613_by_1",
                              "typeString": "int_const 421613"
                            },
                            "value": "421613"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063",
                            "id": 19847,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9010:39:60",
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
                          "id": 19844,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "8969:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19848,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8969:81:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19842,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "8907:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8907:153:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19850,
                  "nodeType": "ExpressionStatement",
                  "src": "8907:153:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6e6f7661",
                        "id": 19852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9096:15:60",
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
                            "id": 19854,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9123:15:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                              "typeString": "literal_string \"Arbitrum Nova\""
                            },
                            "value": "Arbitrum Nova"
                          },
                          {
                            "hexValue": "3432313730",
                            "id": 19855,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9140:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42170_by_1",
                              "typeString": "int_const 42170"
                            },
                            "value": "42170"
                          },
                          {
                            "hexValue": "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063",
                            "id": 19856,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9147:30:60",
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
                          "id": 19853,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "9113:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19857,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9113:65:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19851,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "9070:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9070:109:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19859,
                  "nodeType": "ExpressionStatement",
                  "src": "9070:109:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "706f6c79676f6e",
                        "id": 19861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9215:9:60",
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
                            "id": 19863,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9236:9:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                              "typeString": "literal_string \"Polygon\""
                            },
                            "value": "Polygon"
                          },
                          {
                            "hexValue": "313337",
                            "id": 19864,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9247:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_137_by_1",
                              "typeString": "int_const 137"
                            },
                            "value": "137"
                          },
                          {
                            "hexValue": "68747470733a2f2f706f6c79676f6e2d7270632e636f6d",
                            "id": 19865,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9252:25:60",
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
                          "id": 19862,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "9226:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19866,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9226:52:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19860,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "9189:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9189:90:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19868,
                  "nodeType": "ExpressionStatement",
                  "src": "9189:90:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "706f6c79676f6e5f6d756d626169",
                        "id": 19870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9328:16:60",
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
                            "id": 19872,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9356:16:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                              "typeString": "literal_string \"Polygon Mumbai\""
                            },
                            "value": "Polygon Mumbai"
                          },
                          {
                            "hexValue": "3830303031",
                            "id": 19873,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9374:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_80001_by_1",
                              "typeString": "int_const 80001"
                            },
                            "value": "80001"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d",
                            "id": 19874,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9381:35:60",
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
                          "id": 19871,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "9346:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9346:71:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19869,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "9289:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9289:138:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19877,
                  "nodeType": "ExpressionStatement",
                  "src": "9289:138:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6176616c616e636865",
                        "id": 19879,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9463:11:60",
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
                            "id": 19881,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9486:11:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                              "typeString": "literal_string \"Avalanche\""
                            },
                            "value": "Avalanche"
                          },
                          {
                            "hexValue": "3433313134",
                            "id": 19882,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9499:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43114_by_1",
                              "typeString": "int_const 43114"
                            },
                            "value": "43114"
                          },
                          {
                            "hexValue": "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063",
                            "id": 19883,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9506:39:60",
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
                          "id": 19880,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "9476:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9476:70:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19878,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "9437:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19885,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9437:110:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19886,
                  "nodeType": "ExpressionStatement",
                  "src": "9437:110:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6176616c616e6368655f66756a69",
                        "id": 19888,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9596:16:60",
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
                            "id": 19890,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9624:16:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                              "typeString": "literal_string \"Avalanche Fuji\""
                            },
                            "value": "Avalanche Fuji"
                          },
                          {
                            "hexValue": "3433313133",
                            "id": 19891,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9642:5:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43113_by_1",
                              "typeString": "int_const 43113"
                            },
                            "value": "43113"
                          },
                          {
                            "hexValue": "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063",
                            "id": 19892,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9649:44:60",
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
                          "id": 19889,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "9614:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19893,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9614:80:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19887,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "9557:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19894,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9557:147:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19895,
                  "nodeType": "ExpressionStatement",
                  "src": "9557:147:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "626e625f736d6172745f636861696e",
                        "id": 19897,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9753:17:60",
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
                            "id": 19899,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9782:17:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                              "typeString": "literal_string \"BNB Smart Chain\""
                            },
                            "value": "BNB Smart Chain"
                          },
                          {
                            "hexValue": "3536",
                            "id": 19900,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9801:2:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_56_by_1",
                              "typeString": "int_const 56"
                            },
                            "value": "56"
                          },
                          {
                            "hexValue": "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267",
                            "id": 19901,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9805:35:60",
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
                          "id": 19898,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "9772:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19902,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9772:69:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19896,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "9714:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19903,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9714:137:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19904,
                  "nodeType": "ExpressionStatement",
                  "src": "9714:137:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "626e625f736d6172745f636861696e5f746573746e6574",
                        "id": 19906,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9900:25:60",
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
                            "id": 19908,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9949:25:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                              "typeString": "literal_string \"BNB Smart Chain Testnet\""
                            },
                            "value": "BNB Smart Chain Testnet"
                          },
                          {
                            "hexValue": "3937",
                            "id": 19909,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9976:2:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_97_by_1",
                              "typeString": "int_const 97"
                            },
                            "value": "97"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c",
                            "id": 19910,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9980:41:60",
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
                          "id": 19907,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "9939:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19911,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9939:83:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19905,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "9861:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9861:171:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19913,
                  "nodeType": "ExpressionStatement",
                  "src": "9861:171:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "676e6f7369735f636861696e",
                        "id": 19915,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10068:14:60",
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
                            "id": 19917,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10094:14:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                              "typeString": "literal_string \"Gnosis Chain\""
                            },
                            "value": "Gnosis Chain"
                          },
                          {
                            "hexValue": "313030",
                            "id": 19918,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10110:3:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d",
                            "id": 19919,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10115:29:60",
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
                          "id": 19916,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "10084:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19920,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10084:61:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19914,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "10042:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19921,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10042:104:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19922,
                  "nodeType": "ExpressionStatement",
                  "src": "10042:104:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e6265616d",
                        "id": 19924,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10182:10:60",
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
                            "id": 19926,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10204:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                              "typeString": "literal_string \"Moonbeam\""
                            },
                            "value": "Moonbeam"
                          },
                          {
                            "hexValue": "31323834",
                            "id": 19927,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10216:4:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1284_by_1",
                              "typeString": "int_const 1284"
                            },
                            "value": "1284"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 19928,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10222:34:60",
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
                          "id": 19925,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "10194:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10194:63:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19923,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "10156:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10156:102:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19931,
                  "nodeType": "ExpressionStatement",
                  "src": "10156:102:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e7269766572",
                        "id": 19933,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10307:11:60",
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
                            "id": 19935,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10330:11:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                              "typeString": "literal_string \"Moonriver\""
                            },
                            "value": "Moonriver"
                          },
                          {
                            "hexValue": "31323835",
                            "id": 19936,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10343:4:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1285_by_1",
                              "typeString": "int_const 1285"
                            },
                            "value": "1285"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 19937,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10349:44:60",
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
                          "id": 19934,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "10320:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10320:74:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19932,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "10268:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10268:136:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19940,
                  "nodeType": "ExpressionStatement",
                  "src": "10268:136:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e62617365",
                        "id": 19942,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10440:10:60",
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
                            "id": 19944,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10462:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                              "typeString": "literal_string \"Moonbase\""
                            },
                            "value": "Moonbase"
                          },
                          {
                            "hexValue": "31323837",
                            "id": 19945,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10474:4:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1287_by_1",
                              "typeString": "int_const 1287"
                            },
                            "value": "1287"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 19946,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10480:38:60",
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
                          "id": 19943,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19300,
                          "src": "10452:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$19300_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 19947,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10452:67:60",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19941,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19988,
                      "src": "10414:25:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10414:106:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19949,
                  "nodeType": "ExpressionStatement",
                  "src": "10414:106:60"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initializeStdChains",
            "nameLocation": "7785:19:60",
            "parameters": {
              "id": 19770,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7804:2:60"
            },
            "returnParameters": {
              "id": 19771,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7815:0:60"
            },
            "scope": 19989,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 19988,
            "nodeType": "FunctionDefinition",
            "src": "10609:305:60",
            "nodes": [],
            "body": {
              "id": 19987,
              "nodeType": "Block",
              "src": "10702:212:60",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19960
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19960,
                      "mutability": "mutable",
                      "name": "rpcUrl",
                      "nameLocation": "10726:6:60",
                      "nodeType": "VariableDeclaration",
                      "scope": 19987,
                      "src": "10712:20:60",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 19959,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "10712:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 19963,
                  "initialValue": {
                    "expression": {
                      "id": 19961,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19956,
                      "src": "10735:5:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                        "typeString": "struct StdChains.ChainData memory"
                      }
                    },
                    "id": 19962,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "10741:6:60",
                    "memberName": "rpcUrl",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 19299,
                    "src": "10735:12:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10712:35:60"
                },
                {
                  "expression": {
                    "id": 19968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 19964,
                        "name": "defaultRpcUrls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19318,
                        "src": "10757:14:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                          "typeString": "mapping(string memory => string storage ref)"
                        }
                      },
                      "id": 19966,
                      "indexExpression": {
                        "id": 19965,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19953,
                        "src": "10772:10:60",
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
                      "src": "10757:26:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 19967,
                      "name": "rpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19960,
                      "src": "10786:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "10757:35:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 19969,
                  "nodeType": "ExpressionStatement",
                  "src": "10757:35:60"
                },
                {
                  "expression": {
                    "id": 19974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 19970,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19956,
                        "src": "10802:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 19972,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10808:6:60",
                      "memberName": "rpcUrl",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 19299,
                      "src": "10802:12:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "",
                      "id": 19973,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10817:2:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                        "typeString": "literal_string \"\""
                      },
                      "value": ""
                    },
                    "src": "10802:17:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 19975,
                  "nodeType": "ExpressionStatement",
                  "src": "10802:17:60"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 19977,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19953,
                        "src": "10838:10:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 19978,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19956,
                        "src": "10850:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 19976,
                      "name": "setChain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        19544,
                        19565
                      ],
                      "referencedDeclaration": 19544,
                      "src": "10829:8:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$19300_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 19979,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10829:27:60",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19980,
                  "nodeType": "ExpressionStatement",
                  "src": "10829:27:60"
                },
                {
                  "expression": {
                    "id": 19985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 19981,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19956,
                        "src": "10866:5:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 19983,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10872:6:60",
                      "memberName": "rpcUrl",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 19299,
                      "src": "10866:12:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 19984,
                      "name": "rpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19960,
                      "src": "10881:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "10866:21:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 19986,
                  "nodeType": "ExpressionStatement",
                  "src": "10866:21:60"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChainWithDefaultRpcUrl",
            "nameLocation": "10618:25:60",
            "parameters": {
              "id": 19957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19953,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "10658:10:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19988,
                  "src": "10644:24:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 19952,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10644:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19956,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "10687:5:60",
                  "nodeType": "VariableDeclaration",
                  "scope": 19988,
                  "src": "10670:22:60",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ChainData_$19300_memory_ptr",
                    "typeString": "struct StdChains.ChainData"
                  },
                  "typeName": {
                    "id": 19955,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 19954,
                      "name": "ChainData",
                      "nameLocations": [
                        "10670:9:60"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 19300,
                      "src": "10670:9:60"
                    },
                    "referencedDeclaration": 19300,
                    "src": "10670:9:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ChainData_$19300_storage_ptr",
                      "typeString": "struct StdChains.ChainData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10643:50:60"
            },
            "returnParameters": {
              "id": 19958,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10702:0:60"
            },
            "scope": 19989,
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
          "id": 19274,
          "nodeType": "StructuredDocumentation",
          "src": "99:1799:60",
          "text": " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          19989
        ],
        "name": "StdChains",
        "nameLocation": "1917:9:60",
        "scope": 19990,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 60
} as const;
