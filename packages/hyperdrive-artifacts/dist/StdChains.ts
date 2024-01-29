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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"StdChains provides information about EVM compatible chains that can be used in scripts/tests. For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the alias used in this contract, which can be found as the first argument to the `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function. There are two main ways to use this contract:   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or      `setChain(string memory chainAlias, Chain memory chain)`   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`. The first time either of those are used, chains are initialized with the default set of RPC URLs. This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in `defaultRpcUrls`. The `setChain` function is straightforward, and it simply saves off the given chain data. The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say we want to retrieve the RPC URL for `mainnet`:   - If you have specified data with `setChain`, it will return that.   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it     is valid (e.g. a URL is specified, or an environment variable is given and exists).   - If neither of the above conditions is met, the default data is returned. Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdChains.sol\":\"StdChains\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
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
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/"
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
    "id": 27288,
    "exportedSymbols": {
      "StdChains": [
        27287
      ],
      "VmSafe": [
        35773
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:10885:98",
    "nodes": [
      {
        "id": 26569,
        "nodeType": "PragmaDirective",
        "src": "32:31:98",
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
        "id": 26571,
        "nodeType": "ImportDirective",
        "src": "65:32:98",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "./Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 27288,
        "sourceUnit": 36246,
        "symbolAliases": [
          {
            "foreign": {
              "id": 26570,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 35773,
              "src": "73:6:98",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 27287,
        "nodeType": "ContractDefinition",
        "src": "1899:9017:98",
        "nodes": [
          {
            "id": 26589,
            "nodeType": "VariableDeclaration",
            "src": "1933:92:98",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "vm",
            "nameLocation": "1957:2:98",
            "scope": 27287,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VmSafe_$35773",
              "typeString": "contract VmSafe"
            },
            "typeName": {
              "id": 26574,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 26573,
                "name": "VmSafe",
                "nameLocations": [
                  "1933:6:98"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 35773,
                "src": "1933:6:98"
              },
              "referencedDeclaration": 35773,
              "src": "1933:6:98",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$35773",
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
                                  "id": 26583,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2003:17:98",
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
                                "id": 26582,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "1993:9:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 26584,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1993:28:98",
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
                            "id": 26581,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1985:7:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 26580,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "1985:7:98",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 26585,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1985:37:98",
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
                        "id": 26579,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1977:7:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint160_$",
                          "typeString": "type(uint160)"
                        },
                        "typeName": {
                          "id": 26578,
                          "name": "uint160",
                          "nodeType": "ElementaryTypeName",
                          "src": "1977:7:98",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 26586,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1977:46:98",
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
                    "id": 26577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "1969:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_address_$",
                      "typeString": "type(address)"
                    },
                    "typeName": {
                      "id": 26576,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1969:7:98",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 26587,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1969:55:98",
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
                "id": 26575,
                "name": "VmSafe",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 35773,
                "src": "1962:6:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_contract$_VmSafe_$35773_$",
                  "typeString": "type(contract VmSafe)"
                }
              },
              "id": 26588,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1962:63:98",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VmSafe_$35773",
                "typeString": "contract VmSafe"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26591,
            "nodeType": "VariableDeclaration",
            "src": "2032:33:98",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "stdChainsInitialized",
            "nameLocation": "2045:20:98",
            "scope": 27287,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 26590,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "2032:4:98",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26598,
            "nodeType": "StructDefinition",
            "src": "2072:93:98",
            "nodes": [],
            "canonicalName": "StdChains.ChainData",
            "members": [
              {
                "constant": false,
                "id": 26593,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "2106:4:98",
                "nodeType": "VariableDeclaration",
                "scope": 26598,
                "src": "2099:11:98",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 26592,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2099:6:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26595,
                "mutability": "mutable",
                "name": "chainId",
                "nameLocation": "2128:7:98",
                "nodeType": "VariableDeclaration",
                "scope": 26598,
                "src": "2120:15:98",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 26594,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2120:7:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26597,
                "mutability": "mutable",
                "name": "rpcUrl",
                "nameLocation": "2152:6:98",
                "nodeType": "VariableDeclaration",
                "scope": 26598,
                "src": "2145:13:98",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 26596,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2145:6:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "ChainData",
            "nameLocation": "2079:9:98",
            "scope": 27287,
            "visibility": "public"
          },
          {
            "id": 26607,
            "nodeType": "StructDefinition",
            "src": "2171:598:98",
            "nodes": [],
            "canonicalName": "StdChains.Chain",
            "members": [
              {
                "constant": false,
                "id": 26600,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "2228:4:98",
                "nodeType": "VariableDeclaration",
                "scope": 26607,
                "src": "2221:11:98",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 26599,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2221:6:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26602,
                "mutability": "mutable",
                "name": "chainId",
                "nameLocation": "2283:7:98",
                "nodeType": "VariableDeclaration",
                "scope": 26607,
                "src": "2275:15:98",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 26601,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "2275:7:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26604,
                "mutability": "mutable",
                "name": "chainAlias",
                "nameLocation": "2383:10:98",
                "nodeType": "VariableDeclaration",
                "scope": 26607,
                "src": "2376:17:98",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 26603,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2376:6:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26606,
                "mutability": "mutable",
                "name": "rpcUrl",
                "nameLocation": "2756:6:98",
                "nodeType": "VariableDeclaration",
                "scope": 26607,
                "src": "2749:13:98",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 26605,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2749:6:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Chain",
            "nameLocation": "2178:5:98",
            "scope": 27287,
            "visibility": "public"
          },
          {
            "id": 26612,
            "nodeType": "VariableDeclaration",
            "src": "2873:39:98",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "chains",
            "nameLocation": "2906:6:98",
            "scope": 27287,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26607_storage_$",
              "typeString": "mapping(string => struct StdChains.Chain)"
            },
            "typeName": {
              "id": 26611,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 26608,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2881:6:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "2873:24:98",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26607_storage_$",
                "typeString": "mapping(string => struct StdChains.Chain)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 26610,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 26609,
                  "name": "Chain",
                  "nameLocations": [
                    "2891:5:98"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 26607,
                  "src": "2891:5:98"
                },
                "referencedDeclaration": 26607,
                "src": "2891:5:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Chain_$26607_storage_ptr",
                  "typeString": "struct StdChains.Chain"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 26616,
            "nodeType": "VariableDeclaration",
            "src": "2978:48:98",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "defaultRpcUrls",
            "nameLocation": "3012:14:98",
            "scope": 27287,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
              "typeString": "mapping(string => string)"
            },
            "typeName": {
              "id": 26615,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 26613,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2986:6:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "2978:25:98",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                "typeString": "mapping(string => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 26614,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2996:6:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 26620,
            "nodeType": "VariableDeclaration",
            "src": "3075:44:98",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "idToAlias",
            "nameLocation": "3110:9:98",
            "scope": 27287,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 26619,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 26617,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "3083:7:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "3075:26:98",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 26618,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "3094:6:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 26623,
            "nodeType": "VariableDeclaration",
            "src": "3126:44:98",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "fallbackToDefaultRpcUrls",
            "nameLocation": "3139:24:98",
            "scope": 27287,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 26621,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "3126:4:98",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "hexValue": "74727565",
              "id": 26622,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3166:4:98",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "true"
            },
            "visibility": "private"
          },
          {
            "id": 26675,
            "nodeType": "FunctionDefinition",
            "src": "3255:524:98",
            "nodes": [],
            "body": {
              "id": 26674,
              "nodeType": "Block",
              "src": "3345:434:98",
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
                        "id": 26638,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 26634,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26625,
                                "src": "3369:10:98",
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
                              "id": 26633,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3363:5:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 26632,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3363:5:98",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 26635,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3363:17:98",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 26636,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3381:6:98",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "3363:24:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 26637,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3391:1:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3363:29:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        "id": 26639,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3394:69:98",
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
                      "id": 26631,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3355:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 26640,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3355:109:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26641,
                  "nodeType": "ExpressionStatement",
                  "src": "3355:109:98"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 26642,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27249,
                      "src": "3475:19:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 26643,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3475:21:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26644,
                  "nodeType": "ExpressionStatement",
                  "src": "3475:21:98"
                },
                {
                  "expression": {
                    "id": 26649,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26645,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26629,
                      "src": "3506:5:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 26646,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26612,
                        "src": "3514:6:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26607_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 26648,
                      "indexExpression": {
                        "id": 26647,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26625,
                        "src": "3521:10:98",
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
                      "src": "3514:18:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "src": "3506:26:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 26650,
                  "nodeType": "ExpressionStatement",
                  "src": "3506:26:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 26655,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 26652,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26629,
                            "src": "3563:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                              "typeString": "struct StdChains.Chain memory"
                            }
                          },
                          "id": 26653,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3569:7:98",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 26602,
                          "src": "3563:13:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 26654,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3580:1:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3563:18:98",
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
                                "id": 26660,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3619:49:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                  "typeString": "literal_string \"StdChains getChain(string): Chain with alias \"\""
                                },
                                "value": "StdChains getChain(string): Chain with alias \""
                              },
                              {
                                "id": 26661,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26625,
                                "src": "3670:10:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "22206e6f7420666f756e642e",
                                "id": 26662,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3682:15:98",
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
                                "id": 26658,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "3602:3:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 26659,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "3606:12:98",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "3602:16:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 26663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3602:96:98",
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
                          "id": 26657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3595:6:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 26656,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "3595:6:98",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 26664,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3595:104:98",
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
                      "id": 26651,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3542:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 26665,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3542:167:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26666,
                  "nodeType": "ExpressionStatement",
                  "src": "3542:167:98"
                },
                {
                  "expression": {
                    "id": 26672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26667,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26629,
                      "src": "3720:5:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 26669,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26625,
                          "src": "3754:10:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "id": 26670,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26629,
                          "src": "3766:5:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
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
                            "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
                          }
                        ],
                        "id": 26668,
                        "name": "getChainWithUpdatedRpcUrl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27057,
                        "src": "3728:25:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$26607_memory_ptr_$returns$_t_struct$_Chain_$26607_memory_ptr_$",
                          "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                        }
                      },
                      "id": 26671,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3728:44:98",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "3720:52:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 26673,
                  "nodeType": "ExpressionStatement",
                  "src": "3720:52:98"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChain",
            "nameLocation": "3264:8:98",
            "parameters": {
              "id": 26626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26625,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "3287:10:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 26675,
                  "src": "3273:24:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26624,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3273:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3272:26:98"
            },
            "returnParameters": {
              "id": 26630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26629,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "3338:5:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 26675,
                  "src": "3325:18:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 26628,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 26627,
                      "name": "Chain",
                      "nameLocations": [
                        "3325:5:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26607,
                      "src": "3325:5:98"
                    },
                    "referencedDeclaration": 26607,
                    "src": "3325:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3324:20:98"
            },
            "scope": 27287,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26732,
            "nodeType": "FunctionDefinition",
            "src": "3785:541:98",
            "nodes": [],
            "body": {
              "id": 26731,
              "nodeType": "Block",
              "src": "3866:460:98",
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
                        "id": 26686,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 26684,
                          "name": "chainId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26677,
                          "src": "3884:7:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 26685,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3895:1:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3884:12:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e",
                        "id": 26687,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3898:52:98",
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
                      "id": 26683,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3876:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
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
                    "src": "3876:75:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26689,
                  "nodeType": "ExpressionStatement",
                  "src": "3876:75:98"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 26690,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27249,
                      "src": "3961:19:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 26691,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3961:21:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26692,
                  "nodeType": "ExpressionStatement",
                  "src": "3961:21:98"
                },
                {
                  "assignments": [
                    26694
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26694,
                      "mutability": "mutable",
                      "name": "chainAlias",
                      "nameLocation": "4006:10:98",
                      "nodeType": "VariableDeclaration",
                      "scope": 26731,
                      "src": "3992:24:98",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 26693,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3992:6:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26698,
                  "initialValue": {
                    "baseExpression": {
                      "id": 26695,
                      "name": "idToAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26620,
                      "src": "4019:9:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 26697,
                    "indexExpression": {
                      "id": 26696,
                      "name": "chainId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26677,
                      "src": "4029:7:98",
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
                    "src": "4019:18:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3992:45:98"
                },
                {
                  "expression": {
                    "id": 26703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26699,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26681,
                      "src": "4048:5:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 26700,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26612,
                        "src": "4056:6:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26607_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 26702,
                      "indexExpression": {
                        "id": 26701,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26694,
                        "src": "4063:10:98",
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
                      "src": "4056:18:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "src": "4048:26:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 26704,
                  "nodeType": "ExpressionStatement",
                  "src": "4048:26:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 26709,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 26706,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26681,
                            "src": "4106:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                              "typeString": "struct StdChains.Chain memory"
                            }
                          },
                          "id": 26707,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4112:7:98",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 26602,
                          "src": "4106:13:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 26708,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4123:1:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4106:18:98",
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
                                "id": 26714,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4162:45:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                  "typeString": "literal_string \"StdChains getChain(uint256): Chain with ID \""
                                },
                                "value": "StdChains getChain(uint256): Chain with ID "
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 26717,
                                    "name": "chainId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26677,
                                    "src": "4221:7:98",
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
                                    "id": 26715,
                                    "name": "vm",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26589,
                                    "src": "4209:2:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VmSafe_$35773",
                                      "typeString": "contract VmSafe"
                                    }
                                  },
                                  "id": 26716,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4212:8:98",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 35305,
                                  "src": "4209:11:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure external returns (string memory)"
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
                                "src": "4209:20:98",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "206e6f7420666f756e642e",
                                "id": 26719,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4231:13:98",
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
                                "id": 26712,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "4145:3:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 26713,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "4149:12:98",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "4145:16:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 26720,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4145:100:98",
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
                          "id": 26711,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4138:6:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 26710,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4138:6:98",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 26721,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4138:108:98",
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
                      "id": 26705,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4085:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 26722,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4085:171:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26723,
                  "nodeType": "ExpressionStatement",
                  "src": "4085:171:98"
                },
                {
                  "expression": {
                    "id": 26729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26724,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26681,
                      "src": "4267:5:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 26726,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26694,
                          "src": "4301:10:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "id": 26727,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26681,
                          "src": "4313:5:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
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
                            "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                            "typeString": "struct StdChains.Chain memory"
                          }
                        ],
                        "id": 26725,
                        "name": "getChainWithUpdatedRpcUrl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27057,
                        "src": "4275:25:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$26607_memory_ptr_$returns$_t_struct$_Chain_$26607_memory_ptr_$",
                          "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                        }
                      },
                      "id": 26728,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4275:44:98",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "4267:52:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "id": 26730,
                  "nodeType": "ExpressionStatement",
                  "src": "4267:52:98"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChain",
            "nameLocation": "3794:8:98",
            "parameters": {
              "id": 26678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26677,
                  "mutability": "mutable",
                  "name": "chainId",
                  "nameLocation": "3811:7:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 26732,
                  "src": "3803:15:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3803:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3802:17:98"
            },
            "returnParameters": {
              "id": 26682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26681,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "3859:5:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 26732,
                  "src": "3846:18:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 26680,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 26679,
                      "name": "Chain",
                      "nameLocations": [
                        "3846:5:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26607,
                      "src": "3846:5:98"
                    },
                    "referencedDeclaration": 26607,
                    "src": "3846:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3845:20:98"
            },
            "scope": 27287,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26842,
            "nodeType": "FunctionDefinition",
            "src": "4397:1173:98",
            "nodes": [],
            "body": {
              "id": 26841,
              "nodeType": "Block",
              "src": "4482:1088:98",
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
                        "id": 26747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 26743,
                                "name": "chainAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26734,
                                "src": "4519:10:98",
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
                              "id": 26742,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4513:5:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 26741,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "4513:5:98",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 26744,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4513:17:98",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 26745,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4531:6:98",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "4513:24:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 26746,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4541:1:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4513:29:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                        "id": 26748,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4556:79:98",
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
                      "id": 26740,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4492:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 26749,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4492:153:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26750,
                  "nodeType": "ExpressionStatement",
                  "src": "4492:153:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 26755,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 26752,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26737,
                            "src": "4664:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 26753,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4670:7:98",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 26595,
                          "src": "4664:13:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 26754,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4681:1:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4664:18:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e",
                        "id": 26756,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4684:61:98",
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
                      "id": 26751,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4656:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 26757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4656:90:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26758,
                  "nodeType": "ExpressionStatement",
                  "src": "4656:90:98"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 26759,
                      "name": "initializeStdChains",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27249,
                      "src": "4757:19:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 26760,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4757:21:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26761,
                  "nodeType": "ExpressionStatement",
                  "src": "4757:21:98"
                },
                {
                  "assignments": [
                    26763
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26763,
                      "mutability": "mutable",
                      "name": "foundAlias",
                      "nameLocation": "4802:10:98",
                      "nodeType": "VariableDeclaration",
                      "scope": 26841,
                      "src": "4788:24:98",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 26762,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "4788:6:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26768,
                  "initialValue": {
                    "baseExpression": {
                      "id": 26764,
                      "name": "idToAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26620,
                      "src": "4815:9:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 26767,
                    "indexExpression": {
                      "expression": {
                        "id": 26765,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26737,
                        "src": "4825:5:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 26766,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4831:7:98",
                      "memberName": "chainId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26595,
                      "src": "4825:13:98",
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
                    "src": "4815:24:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4788:51:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 26790,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 26776,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 26772,
                                  "name": "foundAlias",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 26763,
                                  "src": "4877:10:98",
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
                                "id": 26771,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4871:5:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 26770,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4871:5:98",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 26773,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4871:17:98",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 26774,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4889:6:98",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "4871:24:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 26775,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4899:1:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4871:29:98",
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
                          "id": 26789,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 26780,
                                    "name": "foundAlias",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26763,
                                    "src": "4920:10:98",
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
                                  "id": 26779,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4914:5:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                    "typeString": "type(bytes storage pointer)"
                                  },
                                  "typeName": {
                                    "id": 26778,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4914:5:98",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 26781,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4914:17:98",
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
                              "id": 26777,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "4904:9:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 26782,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4904:28:98",
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
                                    "id": 26786,
                                    "name": "chainAlias",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26734,
                                    "src": "4952:10:98",
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
                                  "id": 26785,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4946:5:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                    "typeString": "type(bytes storage pointer)"
                                  },
                                  "typeName": {
                                    "id": 26784,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4946:5:98",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 26787,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4946:17:98",
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
                              "id": 26783,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "4936:9:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 26788,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4936:28:98",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4904:60:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4871:93:98",
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
                                "id": 26795,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5040:49:98",
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
                                      "id": 26798,
                                      "name": "chain",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 26737,
                                      "src": "5123:5:98",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                                        "typeString": "struct StdChains.ChainData memory"
                                      }
                                    },
                                    "id": 26799,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "5129:7:98",
                                    "memberName": "chainId",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 26595,
                                    "src": "5123:13:98",
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
                                    "id": 26796,
                                    "name": "vm",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26589,
                                    "src": "5111:2:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VmSafe_$35773",
                                      "typeString": "contract VmSafe"
                                    }
                                  },
                                  "id": 26797,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5114:8:98",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 35305,
                                  "src": "5111:11:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure external returns (string memory)"
                                  }
                                },
                                "id": 26800,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5111:26:98",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "20616c726561647920757365642062792022",
                                "id": 26801,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5159:21:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                  "typeString": "literal_string \" already used by \"\""
                                },
                                "value": " already used by \""
                              },
                              {
                                "id": 26802,
                                "name": "foundAlias",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 26763,
                                "src": "5202:10:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "222e",
                                "id": 26803,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5234:5:98",
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
                                "id": 26793,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "5002:3:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 26794,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "5006:12:98",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "5002:16:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 26804,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5002:255:98",
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
                          "id": 26792,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4978:6:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 26791,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "4978:6:98",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 26805,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4978:293:98",
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
                      "id": 26769,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4850:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
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
                    "src": "4850:431:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26807,
                  "nodeType": "ExpressionStatement",
                  "src": "4850:431:98"
                },
                {
                  "assignments": [
                    26809
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26809,
                      "mutability": "mutable",
                      "name": "oldChainId",
                      "nameLocation": "5300:10:98",
                      "nodeType": "VariableDeclaration",
                      "scope": 26841,
                      "src": "5292:18:98",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 26808,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5292:7:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26814,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 26810,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26612,
                        "src": "5313:6:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26607_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 26812,
                      "indexExpression": {
                        "id": 26811,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26734,
                        "src": "5320:10:98",
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
                      "src": "5313:18:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "id": 26813,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5332:7:98",
                    "memberName": "chainId",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 26602,
                    "src": "5313:26:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5292:47:98"
                },
                {
                  "expression": {
                    "id": 26818,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "5349:28:98",
                    "subExpression": {
                      "baseExpression": {
                        "id": 26815,
                        "name": "idToAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26620,
                        "src": "5356:9:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 26817,
                      "indexExpression": {
                        "id": 26816,
                        "name": "oldChainId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26809,
                        "src": "5366:10:98",
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
                      "src": "5356:21:98",
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
                  "id": 26819,
                  "nodeType": "ExpressionStatement",
                  "src": "5349:28:98"
                },
                {
                  "expression": {
                    "id": 26832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 26820,
                        "name": "chains",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26612,
                        "src": "5388:6:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26607_storage_$",
                          "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                        }
                      },
                      "id": 26822,
                      "indexExpression": {
                        "id": 26821,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26734,
                        "src": "5395:10:98",
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
                      "src": "5388:18:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_storage",
                        "typeString": "struct StdChains.Chain storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 26824,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26737,
                            "src": "5434:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 26825,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5440:4:98",
                          "memberName": "name",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 26593,
                          "src": "5434:10:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 26826,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26737,
                            "src": "5455:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 26827,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5461:7:98",
                          "memberName": "chainId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 26595,
                          "src": "5455:13:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 26828,
                          "name": "chainAlias",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26734,
                          "src": "5482:10:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 26829,
                            "name": "chain",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26737,
                            "src": "5502:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                              "typeString": "struct StdChains.ChainData memory"
                            }
                          },
                          "id": 26830,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5508:6:98",
                          "memberName": "rpcUrl",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 26597,
                          "src": "5502:12:98",
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
                        "id": 26823,
                        "name": "Chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26607,
                        "src": "5421:5:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Chain_$26607_storage_ptr_$",
                          "typeString": "type(struct StdChains.Chain storage pointer)"
                        }
                      },
                      "id": 26831,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "5428:4:98",
                        "5446:7:98",
                        "5470:10:98",
                        "5494:6:98"
                      ],
                      "names": [
                        "name",
                        "chainId",
                        "chainAlias",
                        "rpcUrl"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "5421:95:98",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                        "typeString": "struct StdChains.Chain memory"
                      }
                    },
                    "src": "5388:128:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_storage",
                      "typeString": "struct StdChains.Chain storage ref"
                    }
                  },
                  "id": 26833,
                  "nodeType": "ExpressionStatement",
                  "src": "5388:128:98"
                },
                {
                  "expression": {
                    "id": 26839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 26834,
                        "name": "idToAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26620,
                        "src": "5526:9:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 26837,
                      "indexExpression": {
                        "expression": {
                          "id": 26835,
                          "name": "chain",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26737,
                          "src": "5536:5:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                            "typeString": "struct StdChains.ChainData memory"
                          }
                        },
                        "id": 26836,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5542:7:98",
                        "memberName": "chainId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 26595,
                        "src": "5536:13:98",
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
                      "src": "5526:24:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 26838,
                      "name": "chainAlias",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26734,
                      "src": "5553:10:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "5526:37:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 26840,
                  "nodeType": "ExpressionStatement",
                  "src": "5526:37:98"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChain",
            "nameLocation": "4406:8:98",
            "parameters": {
              "id": 26738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26734,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "4429:10:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 26842,
                  "src": "4415:24:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26733,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4415:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26737,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "4458:5:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 26842,
                  "src": "4441:22:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                    "typeString": "struct StdChains.ChainData"
                  },
                  "typeName": {
                    "id": 26736,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 26735,
                      "name": "ChainData",
                      "nameLocations": [
                        "4441:9:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26598,
                      "src": "4441:9:98"
                    },
                    "referencedDeclaration": 26598,
                    "src": "4441:9:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ChainData_$26598_storage_ptr",
                      "typeString": "struct StdChains.ChainData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4414:50:98"
            },
            "returnParameters": {
              "id": 26739,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4482:0:98"
            },
            "scope": 27287,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26863,
            "nodeType": "FunctionDefinition",
            "src": "5641:195:98",
            "nodes": [],
            "body": {
              "id": 26862,
              "nodeType": "Block",
              "src": "5722:114:98",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26851,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26844,
                        "src": "5741:10:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 26853,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26847,
                              "src": "5770:5:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 26854,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5776:4:98",
                            "memberName": "name",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 26600,
                            "src": "5770:10:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "expression": {
                              "id": 26855,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26847,
                              "src": "5791:5:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 26856,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5797:7:98",
                            "memberName": "chainId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 26602,
                            "src": "5791:13:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 26857,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26847,
                              "src": "5814:5:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 26858,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5820:6:98",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 26606,
                            "src": "5814:12:98",
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
                          "id": 26852,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "5753:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 26859,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [
                          "5764:4:98",
                          "5782:7:98",
                          "5806:6:98"
                        ],
                        "names": [
                          "name",
                          "chainId",
                          "rpcUrl"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "5753:75:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 26850,
                      "name": "setChain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26842,
                        26863
                      ],
                      "referencedDeclaration": 26842,
                      "src": "5732:8:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 26860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5732:97:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26861,
                  "nodeType": "ExpressionStatement",
                  "src": "5732:97:98"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChain",
            "nameLocation": "5650:8:98",
            "parameters": {
              "id": 26848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26844,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "5673:10:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 26863,
                  "src": "5659:24:98",
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
                    "src": "5659:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26847,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "5698:5:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 26863,
                  "src": "5685:18:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 26846,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 26845,
                      "name": "Chain",
                      "nameLocations": [
                        "5685:5:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26607,
                      "src": "5685:5:98"
                    },
                    "referencedDeclaration": 26607,
                    "src": "5685:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5658:46:98"
            },
            "returnParameters": {
              "id": 26849,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5722:0:98"
            },
            "scope": 27287,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 26940,
            "nodeType": "FunctionDefinition",
            "src": "5842:451:98",
            "nodes": [],
            "body": {
              "id": 26939,
              "nodeType": "Block",
              "src": "5916:377:98",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    26871
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26871,
                      "mutability": "mutable",
                      "name": "strb",
                      "nameLocation": "5939:4:98",
                      "nodeType": "VariableDeclaration",
                      "scope": 26939,
                      "src": "5926:17:98",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 26870,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5926:5:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26876,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 26874,
                        "name": "str",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26865,
                        "src": "5952:3:98",
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
                      "id": 26873,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5946:5:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": {
                        "id": 26872,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5946:5:98",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 26875,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5946:10:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5926:30:98"
                },
                {
                  "assignments": [
                    26878
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26878,
                      "mutability": "mutable",
                      "name": "copy",
                      "nameLocation": "5979:4:98",
                      "nodeType": "VariableDeclaration",
                      "scope": 26939,
                      "src": "5966:17:98",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 26877,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5966:5:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 26884,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 26881,
                          "name": "strb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26871,
                          "src": "5996:4:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 26882,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6001:6:98",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "5996:11:98",
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
                      "id": 26880,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "5986:9:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 26879,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5990:5:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 26883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5986:22:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5966:42:98"
                },
                {
                  "body": {
                    "id": 26932,
                    "nodeType": "Block",
                    "src": "6060:198:98",
                    "statements": [
                      {
                        "assignments": [
                          26897
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 26897,
                            "mutability": "mutable",
                            "name": "b",
                            "nameLocation": "6081:1:98",
                            "nodeType": "VariableDeclaration",
                            "scope": 26932,
                            "src": "6074:8:98",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            "typeName": {
                              "id": 26896,
                              "name": "bytes1",
                              "nodeType": "ElementaryTypeName",
                              "src": "6074:6:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 26901,
                        "initialValue": {
                          "baseExpression": {
                            "id": 26898,
                            "name": "strb",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26871,
                            "src": "6085:4:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 26900,
                          "indexExpression": {
                            "id": 26899,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26886,
                            "src": "6090:1:98",
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
                          "src": "6085:7:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6074:18:98"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 26908,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            },
                            "id": 26904,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 26902,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26897,
                              "src": "6110:1:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "hexValue": "30783631",
                              "id": 26903,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6115:4:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_97_by_1",
                                "typeString": "int_const 97"
                              },
                              "value": "0x61"
                            },
                            "src": "6110:9:98",
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
                            "id": 26907,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 26905,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26897,
                              "src": "6123:1:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes1",
                                "typeString": "bytes1"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "hexValue": "30783741",
                              "id": 26906,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6128:4:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_122_by_1",
                                "typeString": "int_const 122"
                              },
                              "value": "0x7A"
                            },
                            "src": "6123:9:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "6110:22:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 26930,
                          "nodeType": "Block",
                          "src": "6204:44:98",
                          "statements": [
                            {
                              "expression": {
                                "id": 26928,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 26924,
                                    "name": "copy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26878,
                                    "src": "6222:4:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 26926,
                                  "indexExpression": {
                                    "id": 26925,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26886,
                                    "src": "6227:1:98",
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
                                  "src": "6222:7:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 26927,
                                  "name": "b",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 26897,
                                  "src": "6232:1:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "6222:11:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 26929,
                              "nodeType": "ExpressionStatement",
                              "src": "6222:11:98"
                            }
                          ]
                        },
                        "id": 26931,
                        "nodeType": "IfStatement",
                        "src": "6106:142:98",
                        "trueBody": {
                          "id": 26923,
                          "nodeType": "Block",
                          "src": "6134:64:98",
                          "statements": [
                            {
                              "expression": {
                                "id": 26921,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 26909,
                                    "name": "copy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26878,
                                    "src": "6152:4:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 26911,
                                  "indexExpression": {
                                    "id": 26910,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26886,
                                    "src": "6157:1:98",
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
                                  "src": "6152:7:98",
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
                                      "id": 26919,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 26916,
                                            "name": "b",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26897,
                                            "src": "6175:1:98",
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
                                          "id": 26915,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "6169:5:98",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_uint8_$",
                                            "typeString": "type(uint8)"
                                          },
                                          "typeName": {
                                            "id": 26914,
                                            "name": "uint8",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6169:5:98",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 26917,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6169:8:98",
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
                                        "id": 26918,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6180:2:98",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_32_by_1",
                                          "typeString": "int_const 32"
                                        },
                                        "value": "32"
                                      },
                                      "src": "6169:13:98",
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
                                    "id": 26913,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6162:6:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 26912,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6162:6:98",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 26920,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6162:21:98",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "6152:31:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 26922,
                              "nodeType": "ExpressionStatement",
                              "src": "6152:31:98"
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
                    "id": 26892,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 26889,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26886,
                      "src": "6038:1:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 26890,
                        "name": "strb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26871,
                        "src": "6042:4:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 26891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6047:6:98",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6042:11:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6038:15:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26933,
                  "initializationExpression": {
                    "assignments": [
                      26886
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 26886,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6031:1:98",
                        "nodeType": "VariableDeclaration",
                        "scope": 26933,
                        "src": "6023:9:98",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 26885,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6023:7:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 26888,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 26887,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6035:1:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6023:13:98"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 26894,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6055:3:98",
                      "subExpression": {
                        "id": 26893,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26886,
                        "src": "6055:1:98",
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
                    "id": 26895,
                    "nodeType": "ExpressionStatement",
                    "src": "6055:3:98"
                  },
                  "nodeType": "ForStatement",
                  "src": "6018:240:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26936,
                        "name": "copy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26878,
                        "src": "6281:4:98",
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
                      "id": 26935,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6274:6:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 26934,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "6274:6:98",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 26937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6274:12:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 26869,
                  "id": 26938,
                  "nodeType": "Return",
                  "src": "6267:19:98"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_toUpper",
            "nameLocation": "5851:8:98",
            "parameters": {
              "id": 26866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26865,
                  "mutability": "mutable",
                  "name": "str",
                  "nameLocation": "5874:3:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 26940,
                  "src": "5860:17:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26864,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5860:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5859:19:98"
            },
            "returnParameters": {
              "id": 26869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26868,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26940,
                  "src": "5901:13:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26867,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5901:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5900:15:98"
            },
            "scope": 27287,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 27057,
            "nodeType": "FunctionDefinition",
            "src": "6429:1218:98",
            "nodes": [],
            "body": {
              "id": 27056,
              "nodeType": "Block",
              "src": "6541:1106:98",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 26958,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 26953,
                              "name": "chain",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26945,
                              "src": "6561:5:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                                "typeString": "struct StdChains.Chain memory"
                              }
                            },
                            "id": 26954,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6567:6:98",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 26606,
                            "src": "6561:12:98",
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
                          "id": 26952,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6555:5:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 26951,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "6555:5:98",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 26955,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6555:19:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 26956,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6575:6:98",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6555:26:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 26957,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6585:1:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6555:31:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27053,
                  "nodeType": "IfStatement",
                  "src": "6551:1068:98",
                  "trueBody": {
                    "id": 27052,
                    "nodeType": "Block",
                    "src": "6588:1031:98",
                    "statements": [
                      {
                        "clauses": [
                          {
                            "block": {
                              "id": 26972,
                              "nodeType": "Block",
                              "src": "6665:60:98",
                              "statements": [
                                {
                                  "expression": {
                                    "id": 26970,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "expression": {
                                        "id": 26966,
                                        "name": "chain",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26945,
                                        "src": "6683:5:98",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                                          "typeString": "struct StdChains.Chain memory"
                                        }
                                      },
                                      "id": 26968,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "memberLocation": "6689:6:98",
                                      "memberName": "rpcUrl",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 26606,
                                      "src": "6683:12:98",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "nodeType": "Assignment",
                                    "operator": "=",
                                    "rightHandSide": {
                                      "id": 26969,
                                      "name": "configRpcUrl",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 26964,
                                      "src": "6698:12:98",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "src": "6683:27:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "id": 26971,
                                  "nodeType": "ExpressionStatement",
                                  "src": "6683:27:98"
                                }
                              ]
                            },
                            "errorName": "",
                            "id": 26973,
                            "nodeType": "TryCatchClause",
                            "parameters": {
                              "id": 26965,
                              "nodeType": "ParameterList",
                              "parameters": [
                                {
                                  "constant": false,
                                  "id": 26964,
                                  "mutability": "mutable",
                                  "name": "configRpcUrl",
                                  "nameLocation": "6651:12:98",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 26973,
                                  "src": "6637:26:98",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string"
                                  },
                                  "typeName": {
                                    "id": 26963,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6637:6:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_storage_ptr",
                                      "typeString": "string"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "src": "6636:28:98"
                            },
                            "src": "6628:97:98"
                          },
                          {
                            "block": {
                              "id": 27049,
                              "nodeType": "Block",
                              "src": "6751:858:98",
                              "statements": [
                                {
                                  "assignments": [
                                    26978
                                  ],
                                  "declarations": [
                                    {
                                      "constant": false,
                                      "id": 26978,
                                      "mutability": "mutable",
                                      "name": "envName",
                                      "nameLocation": "6783:7:98",
                                      "nodeType": "VariableDeclaration",
                                      "scope": 27049,
                                      "src": "6769:21:98",
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                      },
                                      "typeName": {
                                        "id": 26977,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6769:6:98",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_string_storage_ptr",
                                          "typeString": "string"
                                        }
                                      },
                                      "visibility": "internal"
                                    }
                                  ],
                                  "id": 26989,
                                  "initialValue": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "id": 26984,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26942,
                                                "src": "6826:10:98",
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
                                              "id": 26983,
                                              "name": "_toUpper",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 26940,
                                              "src": "6817:8:98",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) pure returns (string memory)"
                                              }
                                            },
                                            "id": 26985,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6817:20:98",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          {
                                            "hexValue": "5f5250435f55524c",
                                            "id": 26986,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6839:10:98",
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
                                            "id": 26981,
                                            "name": "abi",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -1,
                                            "src": "6800:3:98",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_abi",
                                              "typeString": "abi"
                                            }
                                          },
                                          "id": 26982,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "memberLocation": "6804:12:98",
                                          "memberName": "encodePacked",
                                          "nodeType": "MemberAccess",
                                          "src": "6800:16:98",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                            "typeString": "function () pure returns (bytes memory)"
                                          }
                                        },
                                        "id": 26987,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6800:50:98",
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
                                      "id": 26980,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "6793:6:98",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                        "typeString": "type(string storage pointer)"
                                      },
                                      "typeName": {
                                        "id": 26979,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6793:6:98",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 26988,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "6793:58:98",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "nodeType": "VariableDeclarationStatement",
                                  "src": "6769:82:98"
                                },
                                {
                                  "condition": {
                                    "id": 26990,
                                    "name": "fallbackToDefaultRpcUrls",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 26623,
                                    "src": "6873:24:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "falseBody": {
                                    "id": 27013,
                                    "nodeType": "Block",
                                    "src": "7006:77:98",
                                    "statements": [
                                      {
                                        "expression": {
                                          "id": 27011,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftHandSide": {
                                            "expression": {
                                              "id": 27004,
                                              "name": "chain",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 26945,
                                              "src": "7028:5:98",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                              }
                                            },
                                            "id": 27006,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "7034:6:98",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 26606,
                                            "src": "7028:12:98",
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
                                                "id": 27009,
                                                "name": "envName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26978,
                                                "src": "7056:7:98",
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
                                                "id": 27007,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26589,
                                                "src": "7043:2:98",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_VmSafe_$35773",
                                                  "typeString": "contract VmSafe"
                                                }
                                              },
                                              "id": 27008,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "7046:9:98",
                                              "memberName": "envString",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 34849,
                                              "src": "7043:12:98",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory) view external returns (string memory)"
                                              }
                                            },
                                            "id": 27010,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7043:21:98",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "src": "7028:36:98",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "id": 27012,
                                        "nodeType": "ExpressionStatement",
                                        "src": "7028:36:98"
                                      }
                                    ]
                                  },
                                  "id": 27014,
                                  "nodeType": "IfStatement",
                                  "src": "6869:214:98",
                                  "trueBody": {
                                    "id": 27003,
                                    "nodeType": "Block",
                                    "src": "6899:101:98",
                                    "statements": [
                                      {
                                        "expression": {
                                          "id": 27001,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftHandSide": {
                                            "expression": {
                                              "id": 26991,
                                              "name": "chain",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 26945,
                                              "src": "6921:5:98",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                              }
                                            },
                                            "id": 26993,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "6927:6:98",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 26606,
                                            "src": "6921:12:98",
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
                                                "id": 26996,
                                                "name": "envName",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26978,
                                                "src": "6945:7:98",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              },
                                              {
                                                "baseExpression": {
                                                  "id": 26997,
                                                  "name": "defaultRpcUrls",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 26616,
                                                  "src": "6954:14:98",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                    "typeString": "mapping(string memory => string storage ref)"
                                                  }
                                                },
                                                "id": 26999,
                                                "indexExpression": {
                                                  "id": 26998,
                                                  "name": "chainAlias",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 26942,
                                                  "src": "6969:10:98",
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
                                                "src": "6954:26:98",
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
                                                "id": 26994,
                                                "name": "vm",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26589,
                                                "src": "6936:2:98",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_VmSafe_$35773",
                                                  "typeString": "contract VmSafe"
                                                }
                                              },
                                              "id": 26995,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "6939:5:98",
                                              "memberName": "envOr",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 34980,
                                              "src": "6936:8:98",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                              }
                                            },
                                            "id": 27000,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6936:45:98",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "src": "6921:60:98",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "id": 27002,
                                        "nodeType": "ExpressionStatement",
                                        "src": "6921:60:98"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "assignments": [
                                    27016
                                  ],
                                  "declarations": [
                                    {
                                      "constant": false,
                                      "id": 27016,
                                      "mutability": "mutable",
                                      "name": "notFoundError",
                                      "nameLocation": "7175:13:98",
                                      "nodeType": "VariableDeclaration",
                                      "scope": 27049,
                                      "src": "7162:26:98",
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                      },
                                      "typeName": {
                                        "id": 27015,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7162:5:98",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes_storage_ptr",
                                          "typeString": "bytes"
                                        }
                                      },
                                      "visibility": "internal"
                                    }
                                  ],
                                  "id": 27029,
                                  "initialValue": {
                                    "arguments": [
                                      {
                                        "hexValue": "4368656174436f64654572726f72",
                                        "id": 27019,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7235:16:98",
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
                                                "id": 27024,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7277:18:98",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                  "typeString": "literal_string \"invalid rpc url \""
                                                },
                                                "value": "invalid rpc url "
                                              },
                                              {
                                                "id": 27025,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26942,
                                                "src": "7297:10:98",
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
                                                "id": 27022,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "7260:3:98",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_abi",
                                                  "typeString": "abi"
                                                }
                                              },
                                              "id": 27023,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "memberLocation": "7264:12:98",
                                              "memberName": "encodePacked",
                                              "nodeType": "MemberAccess",
                                              "src": "7260:16:98",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function () pure returns (bytes memory)"
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
                                            "src": "7260:48:98",
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
                                          "id": 27021,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "7253:6:98",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                            "typeString": "type(string storage pointer)"
                                          },
                                          "typeName": {
                                            "id": 27020,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7253:6:98",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 27027,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7253:56:98",
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
                                        "id": 27017,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -1,
                                        "src": "7211:3:98",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 27018,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberLocation": "7215:19:98",
                                      "memberName": "encodeWithSignature",
                                      "nodeType": "MemberAccess",
                                      "src": "7211:23:98",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function (string memory) pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 27028,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7211:99:98",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "nodeType": "VariableDeclarationStatement",
                                  "src": "7162:148:98"
                                },
                                {
                                  "condition": {
                                    "commonType": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "id": 27045,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      "id": 27036,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 27031,
                                            "name": "notFoundError",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27016,
                                            "src": "7342:13:98",
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
                                          "id": 27030,
                                          "name": "keccak256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -8,
                                          "src": "7332:9:98",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 27032,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7332:24:98",
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
                                            "id": 27034,
                                            "name": "err",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26975,
                                            "src": "7370:3:98",
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
                                          "id": 27033,
                                          "name": "keccak256",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -8,
                                          "src": "7360:9:98",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                          }
                                        },
                                        "id": 27035,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7360:14:98",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "src": "7332:42:98",
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
                                      "id": 27044,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "expression": {
                                          "arguments": [
                                            {
                                              "expression": {
                                                "id": 27039,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26945,
                                                "src": "7384:5:98",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                                                  "typeString": "struct StdChains.Chain memory"
                                                }
                                              },
                                              "id": 27040,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "7390:6:98",
                                              "memberName": "rpcUrl",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 26606,
                                              "src": "7384:12:98",
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
                                            "id": 27038,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "7378:5:98",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                              "typeString": "type(bytes storage pointer)"
                                            },
                                            "typeName": {
                                              "id": 27037,
                                              "name": "bytes",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "7378:5:98",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 27041,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "7378:19:98",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        },
                                        "id": 27042,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "7398:6:98",
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "src": "7378:26:98",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "==",
                                      "rightExpression": {
                                        "hexValue": "30",
                                        "id": 27043,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "7408:1:98",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                      },
                                      "src": "7378:31:98",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    "src": "7332:77:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  "id": 27048,
                                  "nodeType": "IfStatement",
                                  "src": "7328:267:98",
                                  "trueBody": {
                                    "id": 27047,
                                    "nodeType": "Block",
                                    "src": "7411:184:98",
                                    "statements": [
                                      {
                                        "AST": {
                                          "nodeType": "YulBlock",
                                          "src": "7497:80:98",
                                          "statements": [
                                            {
                                              "expression": {
                                                "arguments": [
                                                  {
                                                    "arguments": [
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "7534:2:98",
                                                        "type": "",
                                                        "value": "32"
                                                      },
                                                      {
                                                        "name": "err",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7538:3:98"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "add",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "7530:3:98"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7530:12:98"
                                                  },
                                                  {
                                                    "arguments": [
                                                      {
                                                        "name": "err",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7550:3:98"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "mload",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "7544:5:98"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7544:10:98"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "revert",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "7523:6:98"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7523:32:98"
                                              },
                                              "nodeType": "YulExpressionStatement",
                                              "src": "7523:32:98"
                                            }
                                          ]
                                        },
                                        "documentation": "@solidity memory-safe-assembly",
                                        "evmVersion": "paris",
                                        "externalReferences": [
                                          {
                                            "declaration": 26975,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7538:3:98",
                                            "valueSize": 1
                                          },
                                          {
                                            "declaration": 26975,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "7550:3:98",
                                            "valueSize": 1
                                          }
                                        ],
                                        "id": 27046,
                                        "nodeType": "InlineAssembly",
                                        "src": "7488:89:98"
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            "errorName": "",
                            "id": 27050,
                            "nodeType": "TryCatchClause",
                            "parameters": {
                              "id": 26976,
                              "nodeType": "ParameterList",
                              "parameters": [
                                {
                                  "constant": false,
                                  "id": 26975,
                                  "mutability": "mutable",
                                  "name": "err",
                                  "nameLocation": "6746:3:98",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 27050,
                                  "src": "6733:16:98",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes"
                                  },
                                  "typeName": {
                                    "id": 26974,
                                    "name": "bytes",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6733:5:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_storage_ptr",
                                      "typeString": "bytes"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "src": "6732:18:98"
                            },
                            "src": "6726:883:98"
                          }
                        ],
                        "externalCall": {
                          "arguments": [
                            {
                              "id": 26961,
                              "name": "chainAlias",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26942,
                              "src": "6616:10:98",
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
                              "id": 26959,
                              "name": "vm",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26589,
                              "src": "6606:2:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$35773",
                                "typeString": "contract VmSafe"
                              }
                            },
                            "id": 26960,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6609:6:98",
                            "memberName": "rpcUrl",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 35734,
                            "src": "6606:9:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                              "typeString": "function (string memory) view external returns (string memory)"
                            }
                          },
                          "id": 26962,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6606:21:98",
                          "tryCall": true,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 27051,
                        "nodeType": "TryStatement",
                        "src": "6602:1007:98"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 27054,
                    "name": "chain",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 26945,
                    "src": "7635:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                      "typeString": "struct StdChains.Chain memory"
                    }
                  },
                  "functionReturnParameters": 26950,
                  "id": 27055,
                  "nodeType": "Return",
                  "src": "7628:12:98"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getChainWithUpdatedRpcUrl",
            "nameLocation": "6438:25:98",
            "parameters": {
              "id": 26946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26942,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "6478:10:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 27057,
                  "src": "6464:24:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26941,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6464:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 26945,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "6503:5:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 27057,
                  "src": "6490:18:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 26944,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 26943,
                      "name": "Chain",
                      "nameLocations": [
                        "6490:5:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26607,
                      "src": "6490:5:98"
                    },
                    "referencedDeclaration": 26607,
                    "src": "6490:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6463:46:98"
            },
            "returnParameters": {
              "id": 26950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26949,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 27057,
                  "src": "6527:12:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Chain_$26607_memory_ptr",
                    "typeString": "struct StdChains.Chain"
                  },
                  "typeName": {
                    "id": 26948,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 26947,
                      "name": "Chain",
                      "nameLocations": [
                        "6527:5:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26607,
                      "src": "6527:5:98"
                    },
                    "referencedDeclaration": 26607,
                    "src": "6527:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Chain_$26607_storage_ptr",
                      "typeString": "struct StdChains.Chain"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6526:14:98"
            },
            "scope": 27287,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 27067,
            "nodeType": "FunctionDefinition",
            "src": "7653:117:98",
            "nodes": [],
            "body": {
              "id": 27066,
              "nodeType": "Block",
              "src": "7716:54:98",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 27064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 27062,
                      "name": "fallbackToDefaultRpcUrls",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26623,
                      "src": "7726:24:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 27063,
                      "name": "useDefault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27059,
                      "src": "7753:10:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7726:37:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27065,
                  "nodeType": "ExpressionStatement",
                  "src": "7726:37:98"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setFallbackToDefaultRpcUrls",
            "nameLocation": "7662:27:98",
            "parameters": {
              "id": 27060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27059,
                  "mutability": "mutable",
                  "name": "useDefault",
                  "nameLocation": "7695:10:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 27067,
                  "src": "7690:15:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27058,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7690:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7689:17:98"
            },
            "returnParameters": {
              "id": 27061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7716:0:98"
            },
            "scope": 27287,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 27249,
            "nodeType": "FunctionDefinition",
            "src": "7776:2751:98",
            "nodes": [],
            "body": {
              "id": 27248,
              "nodeType": "Block",
              "src": "7815:2712:98",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 27070,
                    "name": "stdChainsInitialized",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 26591,
                    "src": "7829:20:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27072,
                  "nodeType": "IfStatement",
                  "src": "7825:33:98",
                  "trueBody": {
                    "functionReturnParameters": 27069,
                    "id": 27071,
                    "nodeType": "Return",
                    "src": "7851:7:98"
                  }
                },
                {
                  "expression": {
                    "id": 27075,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 27073,
                      "name": "stdChainsInitialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26591,
                      "src": "7868:20:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 27074,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7891:4:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "7868:27:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27076,
                  "nodeType": "ExpressionStatement",
                  "src": "7868:27:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "616e76696c",
                        "id": 27078,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8018:7:98",
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
                            "id": 27080,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8037:7:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                              "typeString": "literal_string \"Anvil\""
                            },
                            "value": "Anvil"
                          },
                          {
                            "hexValue": "3331333337",
                            "id": 27081,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8046:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31337_by_1",
                              "typeString": "int_const 31337"
                            },
                            "value": "31337"
                          },
                          {
                            "hexValue": "687474703a2f2f3132372e302e302e313a38353435",
                            "id": 27082,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8053:23:98",
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
                          "id": 27079,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "8027:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27083,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8027:50:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27077,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "7992:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7992:86:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27085,
                  "nodeType": "ExpressionStatement",
                  "src": "7992:86:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d61696e6e6574",
                        "id": 27087,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8127:9:98",
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
                            "id": 27089,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8148:9:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                              "typeString": "literal_string \"Mainnet\""
                            },
                            "value": "Mainnet"
                          },
                          {
                            "hexValue": "31",
                            "id": 27090,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8159:1:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          {
                            "hexValue": "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 27091,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8162:63:98",
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
                          "id": 27088,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "8138:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27092,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8138:88:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27086,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "8088:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27093,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8088:148:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27094,
                  "nodeType": "ExpressionStatement",
                  "src": "8088:148:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "676f65726c69",
                        "id": 27096,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8285:8:98",
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
                            "id": 27098,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8305:8:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                              "typeString": "literal_string \"Goerli\""
                            },
                            "value": "Goerli"
                          },
                          {
                            "hexValue": "35",
                            "id": 27099,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8315:1:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5_by_1",
                              "typeString": "int_const 5"
                            },
                            "value": "5"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 27100,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8318:62:98",
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
                          "id": 27097,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "8295:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27101,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8295:86:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27095,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "8246:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8246:145:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27103,
                  "nodeType": "ExpressionStatement",
                  "src": "8246:145:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "7365706f6c6961",
                        "id": 27105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8440:9:98",
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
                            "id": 27107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8461:9:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                              "typeString": "literal_string \"Sepolia\""
                            },
                            "value": "Sepolia"
                          },
                          {
                            "hexValue": "3131313535313131",
                            "id": 27108,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8472:8:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_11155111_by_1",
                              "typeString": "int_const 11155111"
                            },
                            "value": "11155111"
                          },
                          {
                            "hexValue": "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                            "id": 27109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8482:63:98",
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
                          "id": 27106,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "8451:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8451:95:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27104,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "8401:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8401:155:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27112,
                  "nodeType": "ExpressionStatement",
                  "src": "8401:155:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6f7074696d69736d",
                        "id": 27114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8592:10:98",
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
                            "id": 27116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8614:10:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                              "typeString": "literal_string \"Optimism\""
                            },
                            "value": "Optimism"
                          },
                          {
                            "hexValue": "3130",
                            "id": 27117,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8626:2:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          {
                            "hexValue": "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f",
                            "id": 27118,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8630:29:98",
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
                          "id": 27115,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "8604:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8604:56:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27113,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "8566:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8566:95:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27121,
                  "nodeType": "ExpressionStatement",
                  "src": "8566:95:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6f7074696d69736d5f676f65726c69",
                        "id": 27123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8697:17:98",
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
                            "id": 27125,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8726:17:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                              "typeString": "literal_string \"Optimism Goerli\""
                            },
                            "value": "Optimism Goerli"
                          },
                          {
                            "hexValue": "343230",
                            "id": 27126,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8745:3:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_420_by_1",
                              "typeString": "int_const 420"
                            },
                            "value": "420"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f",
                            "id": 27127,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8750:28:98",
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
                          "id": 27124,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "8716:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8716:63:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27122,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "8671:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8671:109:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27130,
                  "nodeType": "ExpressionStatement",
                  "src": "8671:109:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6f6e65",
                        "id": 27132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8816:14:98",
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
                            "id": 27134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8842:14:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                              "typeString": "literal_string \"Arbitrum One\""
                            },
                            "value": "Arbitrum One"
                          },
                          {
                            "hexValue": "3432313631",
                            "id": 27135,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8858:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42161_by_1",
                              "typeString": "int_const 42161"
                            },
                            "value": "42161"
                          },
                          {
                            "hexValue": "68747470733a2f2f617262312e617262697472756d2e696f2f727063",
                            "id": 27136,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8865:30:98",
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
                          "id": 27133,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "8832:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27137,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8832:64:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27131,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "8790:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27138,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8790:107:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27139,
                  "nodeType": "ExpressionStatement",
                  "src": "8790:107:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6f6e655f676f65726c69",
                        "id": 27141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8946:21:98",
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
                            "id": 27143,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8979:21:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                              "typeString": "literal_string \"Arbitrum One Goerli\""
                            },
                            "value": "Arbitrum One Goerli"
                          },
                          {
                            "hexValue": "343231363133",
                            "id": 27144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9002:6:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_421613_by_1",
                              "typeString": "int_const 421613"
                            },
                            "value": "421613"
                          },
                          {
                            "hexValue": "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063",
                            "id": 27145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9010:39:98",
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
                          "id": 27142,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "8969:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8969:81:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27140,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "8907:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8907:153:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27148,
                  "nodeType": "ExpressionStatement",
                  "src": "8907:153:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "617262697472756d5f6e6f7661",
                        "id": 27150,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9096:15:98",
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
                            "id": 27152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9123:15:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                              "typeString": "literal_string \"Arbitrum Nova\""
                            },
                            "value": "Arbitrum Nova"
                          },
                          {
                            "hexValue": "3432313730",
                            "id": 27153,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9140:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42170_by_1",
                              "typeString": "int_const 42170"
                            },
                            "value": "42170"
                          },
                          {
                            "hexValue": "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063",
                            "id": 27154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9147:30:98",
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
                          "id": 27151,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "9113:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9113:65:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27149,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "9070:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9070:109:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27157,
                  "nodeType": "ExpressionStatement",
                  "src": "9070:109:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "706f6c79676f6e",
                        "id": 27159,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9215:9:98",
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
                            "id": 27161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9236:9:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                              "typeString": "literal_string \"Polygon\""
                            },
                            "value": "Polygon"
                          },
                          {
                            "hexValue": "313337",
                            "id": 27162,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9247:3:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_137_by_1",
                              "typeString": "int_const 137"
                            },
                            "value": "137"
                          },
                          {
                            "hexValue": "68747470733a2f2f706f6c79676f6e2d7270632e636f6d",
                            "id": 27163,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9252:25:98",
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
                          "id": 27160,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "9226:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27164,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9226:52:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27158,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "9189:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9189:90:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27166,
                  "nodeType": "ExpressionStatement",
                  "src": "9189:90:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "706f6c79676f6e5f6d756d626169",
                        "id": 27168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9328:16:98",
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
                            "id": 27170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9356:16:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                              "typeString": "literal_string \"Polygon Mumbai\""
                            },
                            "value": "Polygon Mumbai"
                          },
                          {
                            "hexValue": "3830303031",
                            "id": 27171,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9374:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_80001_by_1",
                              "typeString": "int_const 80001"
                            },
                            "value": "80001"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d",
                            "id": 27172,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9381:35:98",
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
                          "id": 27169,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "9346:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27173,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9346:71:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27167,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "9289:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9289:138:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27175,
                  "nodeType": "ExpressionStatement",
                  "src": "9289:138:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6176616c616e636865",
                        "id": 27177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9463:11:98",
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
                            "id": 27179,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9486:11:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                              "typeString": "literal_string \"Avalanche\""
                            },
                            "value": "Avalanche"
                          },
                          {
                            "hexValue": "3433313134",
                            "id": 27180,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9499:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43114_by_1",
                              "typeString": "int_const 43114"
                            },
                            "value": "43114"
                          },
                          {
                            "hexValue": "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063",
                            "id": 27181,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9506:39:98",
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
                          "id": 27178,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "9476:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9476:70:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27176,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "9437:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9437:110:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27184,
                  "nodeType": "ExpressionStatement",
                  "src": "9437:110:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6176616c616e6368655f66756a69",
                        "id": 27186,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9596:16:98",
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
                            "id": 27188,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9624:16:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                              "typeString": "literal_string \"Avalanche Fuji\""
                            },
                            "value": "Avalanche Fuji"
                          },
                          {
                            "hexValue": "3433313133",
                            "id": 27189,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9642:5:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43113_by_1",
                              "typeString": "int_const 43113"
                            },
                            "value": "43113"
                          },
                          {
                            "hexValue": "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063",
                            "id": 27190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9649:44:98",
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
                          "id": 27187,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "9614:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9614:80:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27185,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "9557:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9557:147:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27193,
                  "nodeType": "ExpressionStatement",
                  "src": "9557:147:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "626e625f736d6172745f636861696e",
                        "id": 27195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9753:17:98",
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
                            "id": 27197,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9782:17:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                              "typeString": "literal_string \"BNB Smart Chain\""
                            },
                            "value": "BNB Smart Chain"
                          },
                          {
                            "hexValue": "3536",
                            "id": 27198,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9801:2:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_56_by_1",
                              "typeString": "int_const 56"
                            },
                            "value": "56"
                          },
                          {
                            "hexValue": "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267",
                            "id": 27199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9805:35:98",
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
                          "id": 27196,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "9772:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9772:69:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27194,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "9714:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9714:137:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27202,
                  "nodeType": "ExpressionStatement",
                  "src": "9714:137:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "626e625f736d6172745f636861696e5f746573746e6574",
                        "id": 27204,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9900:25:98",
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
                            "id": 27206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9949:25:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                              "typeString": "literal_string \"BNB Smart Chain Testnet\""
                            },
                            "value": "BNB Smart Chain Testnet"
                          },
                          {
                            "hexValue": "3937",
                            "id": 27207,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9976:2:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_97_by_1",
                              "typeString": "int_const 97"
                            },
                            "value": "97"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c",
                            "id": 27208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9980:41:98",
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
                          "id": 27205,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "9939:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9939:83:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27203,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "9861:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9861:171:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27211,
                  "nodeType": "ExpressionStatement",
                  "src": "9861:171:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "676e6f7369735f636861696e",
                        "id": 27213,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10068:14:98",
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
                            "id": 27215,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10094:14:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                              "typeString": "literal_string \"Gnosis Chain\""
                            },
                            "value": "Gnosis Chain"
                          },
                          {
                            "hexValue": "313030",
                            "id": 27216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10110:3:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d",
                            "id": 27217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10115:29:98",
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
                          "id": 27214,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "10084:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10084:61:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27212,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "10042:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10042:104:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27220,
                  "nodeType": "ExpressionStatement",
                  "src": "10042:104:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e6265616d",
                        "id": 27222,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10182:10:98",
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
                            "id": 27224,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10204:10:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                              "typeString": "literal_string \"Moonbeam\""
                            },
                            "value": "Moonbeam"
                          },
                          {
                            "hexValue": "31323834",
                            "id": 27225,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10216:4:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1284_by_1",
                              "typeString": "int_const 1284"
                            },
                            "value": "1284"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 27226,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10222:34:98",
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
                          "id": 27223,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "10194:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10194:63:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27221,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "10156:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10156:102:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27229,
                  "nodeType": "ExpressionStatement",
                  "src": "10156:102:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e7269766572",
                        "id": 27231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10307:11:98",
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
                            "id": 27233,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10330:11:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                              "typeString": "literal_string \"Moonriver\""
                            },
                            "value": "Moonriver"
                          },
                          {
                            "hexValue": "31323835",
                            "id": 27234,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10343:4:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1285_by_1",
                              "typeString": "int_const 1285"
                            },
                            "value": "1285"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 27235,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10349:44:98",
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
                          "id": 27232,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "10320:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10320:74:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27230,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "10268:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10268:136:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27238,
                  "nodeType": "ExpressionStatement",
                  "src": "10268:136:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "6d6f6f6e62617365",
                        "id": 27240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10440:10:98",
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
                            "id": 27242,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10462:10:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                              "typeString": "literal_string \"Moonbase\""
                            },
                            "value": "Moonbase"
                          },
                          {
                            "hexValue": "31323837",
                            "id": 27243,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10474:4:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1287_by_1",
                              "typeString": "int_const 1287"
                            },
                            "value": "1287"
                          },
                          {
                            "hexValue": "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b",
                            "id": 27244,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10480:38:98",
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
                          "id": 27241,
                          "name": "ChainData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26598,
                          "src": "10452:9:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_ChainData_$26598_storage_ptr_$",
                            "typeString": "type(struct StdChains.ChainData storage pointer)"
                          }
                        },
                        "id": 27245,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10452:67:98",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27239,
                      "name": "setChainWithDefaultRpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27286,
                      "src": "10414:25:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10414:106:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27247,
                  "nodeType": "ExpressionStatement",
                  "src": "10414:106:98"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initializeStdChains",
            "nameLocation": "7785:19:98",
            "parameters": {
              "id": 27068,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7804:2:98"
            },
            "returnParameters": {
              "id": 27069,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7815:0:98"
            },
            "scope": 27287,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 27286,
            "nodeType": "FunctionDefinition",
            "src": "10609:305:98",
            "nodes": [],
            "body": {
              "id": 27285,
              "nodeType": "Block",
              "src": "10702:212:98",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    27258
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27258,
                      "mutability": "mutable",
                      "name": "rpcUrl",
                      "nameLocation": "10726:6:98",
                      "nodeType": "VariableDeclaration",
                      "scope": 27285,
                      "src": "10712:20:98",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 27257,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "10712:6:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 27261,
                  "initialValue": {
                    "expression": {
                      "id": 27259,
                      "name": "chain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27254,
                      "src": "10735:5:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                        "typeString": "struct StdChains.ChainData memory"
                      }
                    },
                    "id": 27260,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "10741:6:98",
                    "memberName": "rpcUrl",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 26597,
                    "src": "10735:12:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10712:35:98"
                },
                {
                  "expression": {
                    "id": 27266,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 27262,
                        "name": "defaultRpcUrls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26616,
                        "src": "10757:14:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                          "typeString": "mapping(string memory => string storage ref)"
                        }
                      },
                      "id": 27264,
                      "indexExpression": {
                        "id": 27263,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27251,
                        "src": "10772:10:98",
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
                      "src": "10757:26:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 27265,
                      "name": "rpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27258,
                      "src": "10786:6:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "10757:35:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 27267,
                  "nodeType": "ExpressionStatement",
                  "src": "10757:35:98"
                },
                {
                  "expression": {
                    "id": 27272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 27268,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27254,
                        "src": "10802:5:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 27270,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10808:6:98",
                      "memberName": "rpcUrl",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26597,
                      "src": "10802:12:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "",
                      "id": 27271,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10817:2:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                        "typeString": "literal_string \"\""
                      },
                      "value": ""
                    },
                    "src": "10802:17:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 27273,
                  "nodeType": "ExpressionStatement",
                  "src": "10802:17:98"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 27275,
                        "name": "chainAlias",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27251,
                        "src": "10838:10:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 27276,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27254,
                        "src": "10850:5:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
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
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      ],
                      "id": 27274,
                      "name": "setChain",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        26842,
                        26863
                      ],
                      "referencedDeclaration": 26842,
                      "src": "10829:8:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26598_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,struct StdChains.ChainData memory)"
                      }
                    },
                    "id": 27277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10829:27:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27278,
                  "nodeType": "ExpressionStatement",
                  "src": "10829:27:98"
                },
                {
                  "expression": {
                    "id": 27283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 27279,
                        "name": "chain",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27254,
                        "src": "10866:5:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                          "typeString": "struct StdChains.ChainData memory"
                        }
                      },
                      "id": 27281,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10872:6:98",
                      "memberName": "rpcUrl",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26597,
                      "src": "10866:12:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 27282,
                      "name": "rpcUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27258,
                      "src": "10881:6:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "10866:21:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 27284,
                  "nodeType": "ExpressionStatement",
                  "src": "10866:21:98"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setChainWithDefaultRpcUrl",
            "nameLocation": "10618:25:98",
            "parameters": {
              "id": 27255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27251,
                  "mutability": "mutable",
                  "name": "chainAlias",
                  "nameLocation": "10658:10:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 27286,
                  "src": "10644:24:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27250,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10644:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27254,
                  "mutability": "mutable",
                  "name": "chain",
                  "nameLocation": "10687:5:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 27286,
                  "src": "10670:22:98",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ChainData_$26598_memory_ptr",
                    "typeString": "struct StdChains.ChainData"
                  },
                  "typeName": {
                    "id": 27253,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 27252,
                      "name": "ChainData",
                      "nameLocations": [
                        "10670:9:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26598,
                      "src": "10670:9:98"
                    },
                    "referencedDeclaration": 26598,
                    "src": "10670:9:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ChainData_$26598_storage_ptr",
                      "typeString": "struct StdChains.ChainData"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10643:50:98"
            },
            "returnParameters": {
              "id": 27256,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10702:0:98"
            },
            "scope": 27287,
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
          "id": 26572,
          "nodeType": "StructuredDocumentation",
          "src": "99:1799:98",
          "text": " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          27287
        ],
        "name": "StdChains",
        "nameLocation": "1917:9:98",
        "scope": 27288,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 98
} as const;
