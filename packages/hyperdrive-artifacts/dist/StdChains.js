export const StdChains = {
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
        "id": 32177,
        "exportedSymbols": {
            "StdChains": [
                32176
            ],
            "VmSafe": [
                40662
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:10885:148",
        "nodes": [
            {
                "id": 31458,
                "nodeType": "PragmaDirective",
                "src": "32:31:148",
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
                "id": 31460,
                "nodeType": "ImportDirective",
                "src": "65:32:148",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 32177,
                "sourceUnit": 41135,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 31459,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40662,
                            "src": "73:6:148",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 32176,
                "nodeType": "ContractDefinition",
                "src": "1899:9017:148",
                "nodes": [
                    {
                        "id": 31478,
                        "nodeType": "VariableDeclaration",
                        "src": "1933:92:148",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "1957:2:148",
                        "scope": 32176,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$40662",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 31463,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 31462,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "1933:6:148"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 40662,
                                "src": "1933:6:148"
                            },
                            "referencedDeclaration": 40662,
                            "src": "1933:6:148",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40662",
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
                                                                    "id": 31472,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "2003:17:148",
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
                                                                "id": 31471,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "1993:9:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 31473,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1993:28:148",
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
                                                        "id": 31470,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1985:7:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 31469,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1985:7:148",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 31474,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1985:37:148",
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
                                                "id": 31468,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1977:7:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint160_$",
                                                    "typeString": "type(uint160)"
                                                },
                                                "typeName": {
                                                    "id": 31467,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1977:7:148",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 31475,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1977:46:148",
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
                                        "id": 31466,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "1969:7:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_$",
                                            "typeString": "type(address)"
                                        },
                                        "typeName": {
                                            "id": 31465,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1969:7:148",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 31476,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1969:55:148",
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
                                "id": 31464,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40662,
                                "src": "1962:6:148",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$40662_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 31477,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1962:63:148",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40662",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31480,
                        "nodeType": "VariableDeclaration",
                        "src": "2032:33:148",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "stdChainsInitialized",
                        "nameLocation": "2045:20:148",
                        "scope": 32176,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 31479,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "2032:4:148",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31487,
                        "nodeType": "StructDefinition",
                        "src": "2072:93:148",
                        "nodes": [],
                        "canonicalName": "StdChains.ChainData",
                        "members": [
                            {
                                "constant": false,
                                "id": 31482,
                                "mutability": "mutable",
                                "name": "name",
                                "nameLocation": "2106:4:148",
                                "nodeType": "VariableDeclaration",
                                "scope": 31487,
                                "src": "2099:11:148",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31481,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2099:6:148",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31484,
                                "mutability": "mutable",
                                "name": "chainId",
                                "nameLocation": "2128:7:148",
                                "nodeType": "VariableDeclaration",
                                "scope": 31487,
                                "src": "2120:15:148",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 31483,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2120:7:148",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31486,
                                "mutability": "mutable",
                                "name": "rpcUrl",
                                "nameLocation": "2152:6:148",
                                "nodeType": "VariableDeclaration",
                                "scope": 31487,
                                "src": "2145:13:148",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31485,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2145:6:148",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "ChainData",
                        "nameLocation": "2079:9:148",
                        "scope": 32176,
                        "visibility": "public"
                    },
                    {
                        "id": 31496,
                        "nodeType": "StructDefinition",
                        "src": "2171:598:148",
                        "nodes": [],
                        "canonicalName": "StdChains.Chain",
                        "members": [
                            {
                                "constant": false,
                                "id": 31489,
                                "mutability": "mutable",
                                "name": "name",
                                "nameLocation": "2228:4:148",
                                "nodeType": "VariableDeclaration",
                                "scope": 31496,
                                "src": "2221:11:148",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31488,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2221:6:148",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31491,
                                "mutability": "mutable",
                                "name": "chainId",
                                "nameLocation": "2283:7:148",
                                "nodeType": "VariableDeclaration",
                                "scope": 31496,
                                "src": "2275:15:148",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 31490,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2275:7:148",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31493,
                                "mutability": "mutable",
                                "name": "chainAlias",
                                "nameLocation": "2383:10:148",
                                "nodeType": "VariableDeclaration",
                                "scope": 31496,
                                "src": "2376:17:148",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31492,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2376:6:148",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31495,
                                "mutability": "mutable",
                                "name": "rpcUrl",
                                "nameLocation": "2756:6:148",
                                "nodeType": "VariableDeclaration",
                                "scope": 31496,
                                "src": "2749:13:148",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31494,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2749:6:148",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Chain",
                        "nameLocation": "2178:5:148",
                        "scope": 32176,
                        "visibility": "public"
                    },
                    {
                        "id": 31501,
                        "nodeType": "VariableDeclaration",
                        "src": "2873:39:148",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "chains",
                        "nameLocation": "2906:6:148",
                        "scope": 32176,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31496_storage_$",
                            "typeString": "mapping(string => struct StdChains.Chain)"
                        },
                        "typeName": {
                            "id": 31500,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 31497,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "2881:6:148",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "2873:24:148",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31496_storage_$",
                                "typeString": "mapping(string => struct StdChains.Chain)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 31499,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 31498,
                                    "name": "Chain",
                                    "nameLocations": [
                                        "2891:5:148"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 31496,
                                    "src": "2891:5:148"
                                },
                                "referencedDeclaration": 31496,
                                "src": "2891:5:148",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Chain_$31496_storage_ptr",
                                    "typeString": "struct StdChains.Chain"
                                }
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31505,
                        "nodeType": "VariableDeclaration",
                        "src": "2978:48:148",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "defaultRpcUrls",
                        "nameLocation": "3012:14:148",
                        "scope": 32176,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                            "typeString": "mapping(string => string)"
                        },
                        "typeName": {
                            "id": 31504,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 31502,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "2986:6:148",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "2978:25:148",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                "typeString": "mapping(string => string)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 31503,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "2996:6:148",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31509,
                        "nodeType": "VariableDeclaration",
                        "src": "3075:44:148",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "idToAlias",
                        "nameLocation": "3110:9:148",
                        "scope": 32176,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                            "typeString": "mapping(uint256 => string)"
                        },
                        "typeName": {
                            "id": 31508,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 31506,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "3083:7:148",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3075:26:148",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                "typeString": "mapping(uint256 => string)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 31507,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "3094:6:148",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31512,
                        "nodeType": "VariableDeclaration",
                        "src": "3126:44:148",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "fallbackToDefaultRpcUrls",
                        "nameLocation": "3139:24:148",
                        "scope": 32176,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 31510,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "3126:4:148",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "value": {
                            "hexValue": "74727565",
                            "id": 31511,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3166:4:148",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "value": "true"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31564,
                        "nodeType": "FunctionDefinition",
                        "src": "3255:524:148",
                        "nodes": [],
                        "body": {
                            "id": 31563,
                            "nodeType": "Block",
                            "src": "3345:434:148",
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
                                                "id": 31527,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 31523,
                                                                "name": "chainAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 31514,
                                                                "src": "3369:10:148",
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
                                                            "id": 31522,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3363:5:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                "typeString": "type(bytes storage pointer)"
                                                            },
                                                            "typeName": {
                                                                "id": 31521,
                                                                "name": "bytes",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3363:5:148",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 31524,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3363:17:148",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 31525,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3381:6:148",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3363:24:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31526,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3391:1:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3363:29:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                                                "id": 31528,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3394:69:148",
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
                                            "id": 31520,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3355:7:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31529,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3355:109:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31530,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3355:109:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 31531,
                                            "name": "initializeStdChains",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32138,
                                            "src": "3475:19:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 31532,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3475:21:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31533,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3475:21:148"
                                },
                                {
                                    "expression": {
                                        "id": 31538,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31534,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31518,
                                            "src": "3506:5:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "baseExpression": {
                                                "id": 31535,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31501,
                                                "src": "3514:6:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31496_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 31537,
                                            "indexExpression": {
                                                "id": 31536,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31514,
                                                "src": "3521:10:148",
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
                                            "src": "3514:18:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "src": "3506:26:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 31539,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3506:26:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 31544,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 31541,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31518,
                                                        "src": "3563:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                            "typeString": "struct StdChains.Chain memory"
                                                        }
                                                    },
                                                    "id": 31542,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3569:7:148",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31491,
                                                    "src": "3563:13:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31543,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3580:1:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3563:18:148",
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
                                                                "id": 31549,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3619:49:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                                                    "typeString": "literal_string \"StdChains getChain(string): Chain with alias \"\""
                                                                },
                                                                "value": "StdChains getChain(string): Chain with alias \""
                                                            },
                                                            {
                                                                "id": 31550,
                                                                "name": "chainAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 31514,
                                                                "src": "3670:10:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "22206e6f7420666f756e642e",
                                                                "id": 31551,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3682:15:148",
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
                                                                "id": 31547,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "3602:3:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 31548,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "3606:12:148",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "3602:16:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 31552,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3602:96:148",
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
                                                    "id": 31546,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3595:6:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 31545,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3595:6:148",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 31553,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3595:104:148",
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
                                            "id": 31540,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3542:7:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31554,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3542:167:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31555,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3542:167:148"
                                },
                                {
                                    "expression": {
                                        "id": 31561,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31556,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31518,
                                            "src": "3720:5:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 31558,
                                                    "name": "chainAlias",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31514,
                                                    "src": "3754:10:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "id": 31559,
                                                    "name": "chain",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31518,
                                                    "src": "3766:5:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
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
                                                        "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                        "typeString": "struct StdChains.Chain memory"
                                                    }
                                                ],
                                                "id": 31557,
                                                "name": "getChainWithUpdatedRpcUrl",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31946,
                                                "src": "3728:25:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$31496_memory_ptr_$returns$_t_struct$_Chain_$31496_memory_ptr_$",
                                                    "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                                                }
                                            },
                                            "id": 31560,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3728:44:148",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "src": "3720:52:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 31562,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3720:52:148"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChain",
                        "nameLocation": "3264:8:148",
                        "parameters": {
                            "id": 31515,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31514,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "3287:10:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31564,
                                    "src": "3273:24:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31513,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3273:6:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3272:26:148"
                        },
                        "returnParameters": {
                            "id": 31519,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31518,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "3338:5:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31564,
                                    "src": "3325:18:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31517,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31516,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "3325:5:148"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31496,
                                            "src": "3325:5:148"
                                        },
                                        "referencedDeclaration": 31496,
                                        "src": "3325:5:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3324:20:148"
                        },
                        "scope": 32176,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 31621,
                        "nodeType": "FunctionDefinition",
                        "src": "3785:541:148",
                        "nodes": [],
                        "body": {
                            "id": 31620,
                            "nodeType": "Block",
                            "src": "3866:460:148",
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
                                                "id": 31575,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 31573,
                                                    "name": "chainId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31566,
                                                    "src": "3884:7:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31574,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3895:1:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3884:12:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e",
                                                "id": 31576,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3898:52:148",
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
                                            "id": 31572,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3876:7:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31577,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3876:75:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31578,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3876:75:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 31579,
                                            "name": "initializeStdChains",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32138,
                                            "src": "3961:19:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 31580,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3961:21:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31581,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3961:21:148"
                                },
                                {
                                    "assignments": [
                                        31583
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31583,
                                            "mutability": "mutable",
                                            "name": "chainAlias",
                                            "nameLocation": "4006:10:148",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31620,
                                            "src": "3992:24:148",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 31582,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3992:6:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31587,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 31584,
                                            "name": "idToAlias",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31509,
                                            "src": "4019:9:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                "typeString": "mapping(uint256 => string storage ref)"
                                            }
                                        },
                                        "id": 31586,
                                        "indexExpression": {
                                            "id": 31585,
                                            "name": "chainId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31566,
                                            "src": "4029:7:148",
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
                                        "src": "4019:18:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3992:45:148"
                                },
                                {
                                    "expression": {
                                        "id": 31592,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31588,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31570,
                                            "src": "4048:5:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "baseExpression": {
                                                "id": 31589,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31501,
                                                "src": "4056:6:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31496_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 31591,
                                            "indexExpression": {
                                                "id": 31590,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31583,
                                                "src": "4063:10:148",
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
                                            "src": "4056:18:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "src": "4048:26:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 31593,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4048:26:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 31598,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 31595,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31570,
                                                        "src": "4106:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                            "typeString": "struct StdChains.Chain memory"
                                                        }
                                                    },
                                                    "id": 31596,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4112:7:148",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31491,
                                                    "src": "4106:13:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31597,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4123:1:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4106:18:148",
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
                                                                "id": 31603,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "4162:45:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                                                    "typeString": "literal_string \"StdChains getChain(uint256): Chain with ID \""
                                                                },
                                                                "value": "StdChains getChain(uint256): Chain with ID "
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 31606,
                                                                        "name": "chainId",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31566,
                                                                        "src": "4221:7:148",
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
                                                                        "id": 31604,
                                                                        "name": "vm",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31478,
                                                                        "src": "4209:2:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_VmSafe_$40662",
                                                                            "typeString": "contract VmSafe"
                                                                        }
                                                                    },
                                                                    "id": 31605,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "4212:8:148",
                                                                    "memberName": "toString",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 40194,
                                                                    "src": "4209:11:148",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                                    }
                                                                },
                                                                "id": 31607,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4209:20:148",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "206e6f7420666f756e642e",
                                                                "id": 31608,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "4231:13:148",
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
                                                                "id": 31601,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "4145:3:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 31602,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4149:12:148",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4145:16:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 31609,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4145:100:148",
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
                                                    "id": 31600,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4138:6:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 31599,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4138:6:148",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 31610,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4138:108:148",
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
                                            "id": 31594,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4085:7:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31611,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4085:171:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31612,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4085:171:148"
                                },
                                {
                                    "expression": {
                                        "id": 31618,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31613,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31570,
                                            "src": "4267:5:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 31615,
                                                    "name": "chainAlias",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31583,
                                                    "src": "4301:10:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "id": 31616,
                                                    "name": "chain",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31570,
                                                    "src": "4313:5:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
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
                                                        "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                        "typeString": "struct StdChains.Chain memory"
                                                    }
                                                ],
                                                "id": 31614,
                                                "name": "getChainWithUpdatedRpcUrl",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31946,
                                                "src": "4275:25:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$31496_memory_ptr_$returns$_t_struct$_Chain_$31496_memory_ptr_$",
                                                    "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                                                }
                                            },
                                            "id": 31617,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4275:44:148",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "src": "4267:52:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 31619,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4267:52:148"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChain",
                        "nameLocation": "3794:8:148",
                        "parameters": {
                            "id": 31567,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31566,
                                    "mutability": "mutable",
                                    "name": "chainId",
                                    "nameLocation": "3811:7:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31621,
                                    "src": "3803:15:148",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 31565,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3803:7:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3802:17:148"
                        },
                        "returnParameters": {
                            "id": 31571,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31570,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "3859:5:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31621,
                                    "src": "3846:18:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31569,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31568,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "3846:5:148"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31496,
                                            "src": "3846:5:148"
                                        },
                                        "referencedDeclaration": 31496,
                                        "src": "3846:5:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3845:20:148"
                        },
                        "scope": 32176,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 31731,
                        "nodeType": "FunctionDefinition",
                        "src": "4397:1173:148",
                        "nodes": [],
                        "body": {
                            "id": 31730,
                            "nodeType": "Block",
                            "src": "4482:1088:148",
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
                                                "id": 31636,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 31632,
                                                                "name": "chainAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 31623,
                                                                "src": "4519:10:148",
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
                                                            "id": 31631,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "4513:5:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                "typeString": "type(bytes storage pointer)"
                                                            },
                                                            "typeName": {
                                                                "id": 31630,
                                                                "name": "bytes",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "4513:5:148",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 31633,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4513:17:148",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 31634,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4531:6:148",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4513:24:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31635,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4541:1:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4513:29:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                                                "id": 31637,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4556:79:148",
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
                                            "id": 31629,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4492:7:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31638,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4492:153:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31639,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4492:153:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 31644,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 31641,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31626,
                                                        "src": "4664:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 31642,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4670:7:148",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31484,
                                                    "src": "4664:13:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31643,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4681:1:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4664:18:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e",
                                                "id": 31645,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4684:61:148",
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
                                            "id": 31640,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4656:7:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31646,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4656:90:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31647,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4656:90:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 31648,
                                            "name": "initializeStdChains",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32138,
                                            "src": "4757:19:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 31649,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4757:21:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31650,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4757:21:148"
                                },
                                {
                                    "assignments": [
                                        31652
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31652,
                                            "mutability": "mutable",
                                            "name": "foundAlias",
                                            "nameLocation": "4802:10:148",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31730,
                                            "src": "4788:24:148",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 31651,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4788:6:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31657,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 31653,
                                            "name": "idToAlias",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31509,
                                            "src": "4815:9:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                "typeString": "mapping(uint256 => string storage ref)"
                                            }
                                        },
                                        "id": 31656,
                                        "indexExpression": {
                                            "expression": {
                                                "id": 31654,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31626,
                                                "src": "4825:5:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            },
                                            "id": 31655,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4831:7:148",
                                            "memberName": "chainId",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 31484,
                                            "src": "4825:13:148",
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
                                        "src": "4815:24:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4788:51:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 31679,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 31665,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 31661,
                                                                    "name": "foundAlias",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 31652,
                                                                    "src": "4877:10:148",
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
                                                                "id": 31660,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4871:5:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                    "typeString": "type(bytes storage pointer)"
                                                                },
                                                                "typeName": {
                                                                    "id": 31659,
                                                                    "name": "bytes",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4871:5:148",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 31662,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4871:17:148",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 31663,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4889:6:148",
                                                        "memberName": "length",
                                                        "nodeType": "MemberAccess",
                                                        "src": "4871:24:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 31664,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4899:1:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "4871:29:148",
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
                                                    "id": 31678,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 31669,
                                                                        "name": "foundAlias",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31652,
                                                                        "src": "4920:10:148",
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
                                                                    "id": 31668,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "4914:5:148",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 31667,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "4914:5:148",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 31670,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4914:17:148",
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
                                                            "id": 31666,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "4904:9:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 31671,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4904:28:148",
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
                                                                        "id": 31675,
                                                                        "name": "chainAlias",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31623,
                                                                        "src": "4952:10:148",
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
                                                                    "id": 31674,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "4946:5:148",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 31673,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "4946:5:148",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 31676,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4946:17:148",
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
                                                            "id": 31672,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "4936:9:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 31677,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4936:28:148",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "4904:60:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "4871:93:148",
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
                                                                "id": 31684,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5040:49:148",
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
                                                                            "id": 31687,
                                                                            "name": "chain",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 31626,
                                                                            "src": "5123:5:148",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                                                "typeString": "struct StdChains.ChainData memory"
                                                                            }
                                                                        },
                                                                        "id": 31688,
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "5129:7:148",
                                                                        "memberName": "chainId",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 31484,
                                                                        "src": "5123:13:148",
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
                                                                        "id": 31685,
                                                                        "name": "vm",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31478,
                                                                        "src": "5111:2:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_VmSafe_$40662",
                                                                            "typeString": "contract VmSafe"
                                                                        }
                                                                    },
                                                                    "id": 31686,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "5114:8:148",
                                                                    "memberName": "toString",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 40194,
                                                                    "src": "5111:11:148",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                                    }
                                                                },
                                                                "id": 31689,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5111:26:148",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "20616c726561647920757365642062792022",
                                                                "id": 31690,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5159:21:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                                                    "typeString": "literal_string \" already used by \"\""
                                                                },
                                                                "value": " already used by \""
                                                            },
                                                            {
                                                                "id": 31691,
                                                                "name": "foundAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 31652,
                                                                "src": "5202:10:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "222e",
                                                                "id": 31692,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5234:5:148",
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
                                                                "id": 31682,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "5002:3:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 31683,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5006:12:148",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5002:16:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 31693,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5002:255:148",
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
                                                    "id": 31681,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4978:6:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 31680,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4978:6:148",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 31694,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4978:293:148",
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
                                            "id": 31658,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4850:7:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31695,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4850:431:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31696,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4850:431:148"
                                },
                                {
                                    "assignments": [
                                        31698
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31698,
                                            "mutability": "mutable",
                                            "name": "oldChainId",
                                            "nameLocation": "5300:10:148",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31730,
                                            "src": "5292:18:148",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 31697,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5292:7:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31703,
                                    "initialValue": {
                                        "expression": {
                                            "baseExpression": {
                                                "id": 31699,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31501,
                                                "src": "5313:6:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31496_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 31701,
                                            "indexExpression": {
                                                "id": 31700,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31623,
                                                "src": "5320:10:148",
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
                                            "src": "5313:18:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "id": 31702,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "5332:7:148",
                                        "memberName": "chainId",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 31491,
                                        "src": "5313:26:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5292:47:148"
                                },
                                {
                                    "expression": {
                                        "id": 31707,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "delete",
                                        "prefix": true,
                                        "src": "5349:28:148",
                                        "subExpression": {
                                            "baseExpression": {
                                                "id": 31704,
                                                "name": "idToAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31509,
                                                "src": "5356:9:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                    "typeString": "mapping(uint256 => string storage ref)"
                                                }
                                            },
                                            "id": 31706,
                                            "indexExpression": {
                                                "id": 31705,
                                                "name": "oldChainId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31698,
                                                "src": "5366:10:148",
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
                                            "src": "5356:21:148",
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
                                    "id": 31708,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5349:28:148"
                                },
                                {
                                    "expression": {
                                        "id": 31721,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 31709,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31501,
                                                "src": "5388:6:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31496_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 31711,
                                            "indexExpression": {
                                                "id": 31710,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31623,
                                                "src": "5395:10:148",
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
                                            "src": "5388:18:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 31713,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31626,
                                                        "src": "5434:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 31714,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5440:4:148",
                                                    "memberName": "name",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31482,
                                                    "src": "5434:10:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 31715,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31626,
                                                        "src": "5455:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 31716,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5461:7:148",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31484,
                                                    "src": "5455:13:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 31717,
                                                    "name": "chainAlias",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31623,
                                                    "src": "5482:10:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 31718,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31626,
                                                        "src": "5502:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 31719,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5508:6:148",
                                                    "memberName": "rpcUrl",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31486,
                                                    "src": "5502:12:148",
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
                                                "id": 31712,
                                                "name": "Chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31496,
                                                "src": "5421:5:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_struct$_Chain_$31496_storage_ptr_$",
                                                    "typeString": "type(struct StdChains.Chain storage pointer)"
                                                }
                                            },
                                            "id": 31720,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "structConstructorCall",
                                            "lValueRequested": false,
                                            "nameLocations": [
                                                "5428:4:148",
                                                "5446:7:148",
                                                "5470:10:148",
                                                "5494:6:148"
                                            ],
                                            "names": [
                                                "name",
                                                "chainId",
                                                "chainAlias",
                                                "rpcUrl"
                                            ],
                                            "nodeType": "FunctionCall",
                                            "src": "5421:95:148",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "src": "5388:128:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_storage",
                                            "typeString": "struct StdChains.Chain storage ref"
                                        }
                                    },
                                    "id": 31722,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5388:128:148"
                                },
                                {
                                    "expression": {
                                        "id": 31728,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 31723,
                                                "name": "idToAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31509,
                                                "src": "5526:9:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                    "typeString": "mapping(uint256 => string storage ref)"
                                                }
                                            },
                                            "id": 31726,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 31724,
                                                    "name": "chain",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31626,
                                                    "src": "5536:5:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                        "typeString": "struct StdChains.ChainData memory"
                                                    }
                                                },
                                                "id": 31725,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5542:7:148",
                                                "memberName": "chainId",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 31484,
                                                "src": "5536:13:148",
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
                                            "src": "5526:24:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 31727,
                                            "name": "chainAlias",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31623,
                                            "src": "5553:10:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "5526:37:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 31729,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5526:37:148"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setChain",
                        "nameLocation": "4406:8:148",
                        "parameters": {
                            "id": 31627,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31623,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "4429:10:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31731,
                                    "src": "4415:24:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31622,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4415:6:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 31626,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "4458:5:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31731,
                                    "src": "4441:22:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                        "typeString": "struct StdChains.ChainData"
                                    },
                                    "typeName": {
                                        "id": 31625,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31624,
                                            "name": "ChainData",
                                            "nameLocations": [
                                                "4441:9:148"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31487,
                                            "src": "4441:9:148"
                                        },
                                        "referencedDeclaration": 31487,
                                        "src": "4441:9:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_ChainData_$31487_storage_ptr",
                                            "typeString": "struct StdChains.ChainData"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4414:50:148"
                        },
                        "returnParameters": {
                            "id": 31628,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4482:0:148"
                        },
                        "scope": 32176,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 31752,
                        "nodeType": "FunctionDefinition",
                        "src": "5641:195:148",
                        "nodes": [],
                        "body": {
                            "id": 31751,
                            "nodeType": "Block",
                            "src": "5722:114:148",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 31740,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31733,
                                                "src": "5741:10:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 31742,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31736,
                                                            "src": "5770:5:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 31743,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5776:4:148",
                                                        "memberName": "name",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 31489,
                                                        "src": "5770:10:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 31744,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31736,
                                                            "src": "5791:5:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 31745,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5797:7:148",
                                                        "memberName": "chainId",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 31491,
                                                        "src": "5791:13:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 31746,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31736,
                                                            "src": "5814:5:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 31747,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5820:6:148",
                                                        "memberName": "rpcUrl",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 31495,
                                                        "src": "5814:12:148",
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
                                                    "id": 31741,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "5753:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31748,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [
                                                    "5764:4:148",
                                                    "5782:7:148",
                                                    "5806:6:148"
                                                ],
                                                "names": [
                                                    "name",
                                                    "chainId",
                                                    "rpcUrl"
                                                ],
                                                "nodeType": "FunctionCall",
                                                "src": "5753:75:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31739,
                                            "name": "setChain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                31731,
                                                31752
                                            ],
                                            "referencedDeclaration": 31731,
                                            "src": "5732:8:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31749,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5732:97:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31750,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5732:97:148"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setChain",
                        "nameLocation": "5650:8:148",
                        "parameters": {
                            "id": 31737,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31733,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "5673:10:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31752,
                                    "src": "5659:24:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31732,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5659:6:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 31736,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "5698:5:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31752,
                                    "src": "5685:18:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31735,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31734,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "5685:5:148"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31496,
                                            "src": "5685:5:148"
                                        },
                                        "referencedDeclaration": 31496,
                                        "src": "5685:5:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5658:46:148"
                        },
                        "returnParameters": {
                            "id": 31738,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5722:0:148"
                        },
                        "scope": 32176,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 31829,
                        "nodeType": "FunctionDefinition",
                        "src": "5842:451:148",
                        "nodes": [],
                        "body": {
                            "id": 31828,
                            "nodeType": "Block",
                            "src": "5916:377:148",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        31760
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31760,
                                            "mutability": "mutable",
                                            "name": "strb",
                                            "nameLocation": "5939:4:148",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31828,
                                            "src": "5926:17:148",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 31759,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5926:5:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31765,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 31763,
                                                "name": "str",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31754,
                                                "src": "5952:3:148",
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
                                            "id": 31762,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "5946:5:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                "typeString": "type(bytes storage pointer)"
                                            },
                                            "typeName": {
                                                "id": 31761,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5946:5:148",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 31764,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5946:10:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5926:30:148"
                                },
                                {
                                    "assignments": [
                                        31767
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31767,
                                            "mutability": "mutable",
                                            "name": "copy",
                                            "nameLocation": "5979:4:148",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31828,
                                            "src": "5966:17:148",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 31766,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5966:5:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31773,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 31770,
                                                    "name": "strb",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31760,
                                                    "src": "5996:4:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 31771,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6001:6:148",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "5996:11:148",
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
                                            "id": 31769,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "5986:9:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 31768,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5990:5:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 31772,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5986:22:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5966:42:148"
                                },
                                {
                                    "body": {
                                        "id": 31821,
                                        "nodeType": "Block",
                                        "src": "6060:198:148",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    31786
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 31786,
                                                        "mutability": "mutable",
                                                        "name": "b",
                                                        "nameLocation": "6081:1:148",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 31821,
                                                        "src": "6074:8:148",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        },
                                                        "typeName": {
                                                            "id": 31785,
                                                            "name": "bytes1",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "6074:6:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes1",
                                                                "typeString": "bytes1"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 31790,
                                                "initialValue": {
                                                    "baseExpression": {
                                                        "id": 31787,
                                                        "name": "strb",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31760,
                                                        "src": "6085:4:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 31789,
                                                    "indexExpression": {
                                                        "id": 31788,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31775,
                                                        "src": "6090:1:148",
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
                                                    "src": "6085:7:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes1",
                                                        "typeString": "bytes1"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "6074:18:148"
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 31797,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        },
                                                        "id": 31793,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 31791,
                                                            "name": "b",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31786,
                                                            "src": "6110:1:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes1",
                                                                "typeString": "bytes1"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">=",
                                                        "rightExpression": {
                                                            "hexValue": "30783631",
                                                            "id": 31792,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6115:4:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_97_by_1",
                                                                "typeString": "int_const 97"
                                                            },
                                                            "value": "0x61"
                                                        },
                                                        "src": "6110:9:148",
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
                                                        "id": 31796,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 31794,
                                                            "name": "b",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31786,
                                                            "src": "6123:1:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes1",
                                                                "typeString": "bytes1"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<=",
                                                        "rightExpression": {
                                                            "hexValue": "30783741",
                                                            "id": 31795,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6128:4:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_122_by_1",
                                                                "typeString": "int_const 122"
                                                            },
                                                            "value": "0x7A"
                                                        },
                                                        "src": "6123:9:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "6110:22:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 31819,
                                                    "nodeType": "Block",
                                                    "src": "6204:44:148",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 31817,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 31813,
                                                                        "name": "copy",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31767,
                                                                        "src": "6222:4:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 31815,
                                                                    "indexExpression": {
                                                                        "id": 31814,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31775,
                                                                        "src": "6227:1:148",
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
                                                                    "src": "6222:7:148",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "id": 31816,
                                                                    "name": "b",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 31786,
                                                                    "src": "6232:1:148",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "6222:11:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 31818,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6222:11:148"
                                                        }
                                                    ]
                                                },
                                                "id": 31820,
                                                "nodeType": "IfStatement",
                                                "src": "6106:142:148",
                                                "trueBody": {
                                                    "id": 31812,
                                                    "nodeType": "Block",
                                                    "src": "6134:64:148",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 31810,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 31798,
                                                                        "name": "copy",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31767,
                                                                        "src": "6152:4:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 31800,
                                                                    "indexExpression": {
                                                                        "id": 31799,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31775,
                                                                        "src": "6157:1:148",
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
                                                                    "src": "6152:7:148",
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
                                                                            "id": 31808,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "id": 31805,
                                                                                        "name": "b",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 31786,
                                                                                        "src": "6175:1:148",
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
                                                                                    "id": 31804,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                                    "src": "6169:5:148",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_uint8_$",
                                                                                        "typeString": "type(uint8)"
                                                                                    },
                                                                                    "typeName": {
                                                                                        "id": 31803,
                                                                                        "name": "uint8",
                                                                                        "nodeType": "ElementaryTypeName",
                                                                                        "src": "6169:5:148",
                                                                                        "typeDescriptions": {}
                                                                                    }
                                                                                },
                                                                                "id": 31806,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "typeConversion",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "6169:8:148",
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
                                                                                "id": 31807,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "6180:2:148",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_32_by_1",
                                                                                    "typeString": "int_const 32"
                                                                                },
                                                                                "value": "32"
                                                                            },
                                                                            "src": "6169:13:148",
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
                                                                        "id": 31802,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6162:6:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 31801,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6162:6:148",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 31809,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6162:21:148",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "6152:31:148",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 31811,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6152:31:148"
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
                                        "id": 31781,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 31778,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31775,
                                            "src": "6038:1:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 31779,
                                                "name": "strb",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31760,
                                                "src": "6042:4:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 31780,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6047:6:148",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "6042:11:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6038:15:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31822,
                                    "initializationExpression": {
                                        "assignments": [
                                            31775
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 31775,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "6031:1:148",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 31822,
                                                "src": "6023:9:148",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 31774,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6023:7:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 31777,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 31776,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6035:1:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "6023:13:148"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 31783,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "6055:3:148",
                                            "subExpression": {
                                                "id": 31782,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31775,
                                                "src": "6055:1:148",
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
                                        "id": 31784,
                                        "nodeType": "ExpressionStatement",
                                        "src": "6055:3:148"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "6018:240:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 31825,
                                                "name": "copy",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31767,
                                                "src": "6281:4:148",
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
                                            "id": 31824,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "6274:6:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                "typeString": "type(string storage pointer)"
                                            },
                                            "typeName": {
                                                "id": 31823,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6274:6:148",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 31826,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6274:12:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 31758,
                                    "id": 31827,
                                    "nodeType": "Return",
                                    "src": "6267:19:148"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_toUpper",
                        "nameLocation": "5851:8:148",
                        "parameters": {
                            "id": 31755,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31754,
                                    "mutability": "mutable",
                                    "name": "str",
                                    "nameLocation": "5874:3:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31829,
                                    "src": "5860:17:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31753,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5860:6:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5859:19:148"
                        },
                        "returnParameters": {
                            "id": 31758,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31757,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31829,
                                    "src": "5901:13:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31756,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5901:6:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5900:15:148"
                        },
                        "scope": 32176,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 31946,
                        "nodeType": "FunctionDefinition",
                        "src": "6429:1218:148",
                        "nodes": [],
                        "body": {
                            "id": 31945,
                            "nodeType": "Block",
                            "src": "6541:1106:148",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 31847,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 31842,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31834,
                                                            "src": "6561:5:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 31843,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6567:6:148",
                                                        "memberName": "rpcUrl",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 31495,
                                                        "src": "6561:12:148",
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
                                                    "id": 31841,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6555:5:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                        "typeString": "type(bytes storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 31840,
                                                        "name": "bytes",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6555:5:148",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 31844,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6555:19:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 31845,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6575:6:148",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "6555:26:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 31846,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6585:1:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "6555:31:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31942,
                                    "nodeType": "IfStatement",
                                    "src": "6551:1068:148",
                                    "trueBody": {
                                        "id": 31941,
                                        "nodeType": "Block",
                                        "src": "6588:1031:148",
                                        "statements": [
                                            {
                                                "clauses": [
                                                    {
                                                        "block": {
                                                            "id": 31861,
                                                            "nodeType": "Block",
                                                            "src": "6665:60:148",
                                                            "statements": [
                                                                {
                                                                    "expression": {
                                                                        "id": 31859,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftHandSide": {
                                                                            "expression": {
                                                                                "id": 31855,
                                                                                "name": "chain",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 31834,
                                                                                "src": "6683:5:148",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                                                    "typeString": "struct StdChains.Chain memory"
                                                                                }
                                                                            },
                                                                            "id": 31857,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "memberLocation": "6689:6:148",
                                                                            "memberName": "rpcUrl",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": 31495,
                                                                            "src": "6683:12:148",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                                "typeString": "string memory"
                                                                            }
                                                                        },
                                                                        "nodeType": "Assignment",
                                                                        "operator": "=",
                                                                        "rightHandSide": {
                                                                            "id": 31858,
                                                                            "name": "configRpcUrl",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 31853,
                                                                            "src": "6698:12:148",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                                "typeString": "string memory"
                                                                            }
                                                                        },
                                                                        "src": "6683:27:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                            "typeString": "string memory"
                                                                        }
                                                                    },
                                                                    "id": 31860,
                                                                    "nodeType": "ExpressionStatement",
                                                                    "src": "6683:27:148"
                                                                }
                                                            ]
                                                        },
                                                        "errorName": "",
                                                        "id": 31862,
                                                        "nodeType": "TryCatchClause",
                                                        "parameters": {
                                                            "id": 31854,
                                                            "nodeType": "ParameterList",
                                                            "parameters": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 31853,
                                                                    "mutability": "mutable",
                                                                    "name": "configRpcUrl",
                                                                    "nameLocation": "6651:12:148",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 31862,
                                                                    "src": "6637:26:148",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "memory",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                        "typeString": "string"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 31852,
                                                                        "name": "string",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6637:6:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_storage_ptr",
                                                                            "typeString": "string"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "src": "6636:28:148"
                                                        },
                                                        "src": "6628:97:148"
                                                    },
                                                    {
                                                        "block": {
                                                            "id": 31938,
                                                            "nodeType": "Block",
                                                            "src": "6751:858:148",
                                                            "statements": [
                                                                {
                                                                    "assignments": [
                                                                        31867
                                                                    ],
                                                                    "declarations": [
                                                                        {
                                                                            "constant": false,
                                                                            "id": 31867,
                                                                            "mutability": "mutable",
                                                                            "name": "envName",
                                                                            "nameLocation": "6783:7:148",
                                                                            "nodeType": "VariableDeclaration",
                                                                            "scope": 31938,
                                                                            "src": "6769:21:148",
                                                                            "stateVariable": false,
                                                                            "storageLocation": "memory",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                                "typeString": "string"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 31866,
                                                                                "name": "string",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "6769:6:148",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_string_storage_ptr",
                                                                                    "typeString": "string"
                                                                                }
                                                                            },
                                                                            "visibility": "internal"
                                                                        }
                                                                    ],
                                                                    "id": 31878,
                                                                    "initialValue": {
                                                                        "arguments": [
                                                                            {
                                                                                "arguments": [
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "id": 31873,
                                                                                                "name": "chainAlias",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31831,
                                                                                                "src": "6826:10:148",
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
                                                                                            "id": 31872,
                                                                                            "name": "_toUpper",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 31829,
                                                                                            "src": "6817:8:148",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                                                                "typeString": "function (string memory) pure returns (string memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 31874,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "6817:20:148",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "hexValue": "5f5250435f55524c",
                                                                                        "id": 31875,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "kind": "string",
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "Literal",
                                                                                        "src": "6839:10:148",
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
                                                                                        "id": 31870,
                                                                                        "name": "abi",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": -1,
                                                                                        "src": "6800:3:148",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_magic_abi",
                                                                                            "typeString": "abi"
                                                                                        }
                                                                                    },
                                                                                    "id": 31871,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "memberLocation": "6804:12:148",
                                                                                    "memberName": "encodePacked",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "src": "6800:16:148",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                        "typeString": "function () pure returns (bytes memory)"
                                                                                    }
                                                                                },
                                                                                "id": 31876,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "6800:50:148",
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
                                                                            "id": 31869,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "6793:6:148",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                                                "typeString": "type(string storage pointer)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 31868,
                                                                                "name": "string",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "6793:6:148",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 31877,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "6793:58:148",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                            "typeString": "string memory"
                                                                        }
                                                                    },
                                                                    "nodeType": "VariableDeclarationStatement",
                                                                    "src": "6769:82:148"
                                                                },
                                                                {
                                                                    "condition": {
                                                                        "id": 31879,
                                                                        "name": "fallbackToDefaultRpcUrls",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31512,
                                                                        "src": "6873:24:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        }
                                                                    },
                                                                    "falseBody": {
                                                                        "id": 31902,
                                                                        "nodeType": "Block",
                                                                        "src": "7006:77:148",
                                                                        "statements": [
                                                                            {
                                                                                "expression": {
                                                                                    "id": 31900,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "leftHandSide": {
                                                                                        "expression": {
                                                                                            "id": 31893,
                                                                                            "name": "chain",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 31834,
                                                                                            "src": "7028:5:148",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                                                                "typeString": "struct StdChains.Chain memory"
                                                                                            }
                                                                                        },
                                                                                        "id": 31895,
                                                                                        "isConstant": false,
                                                                                        "isLValue": true,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": true,
                                                                                        "memberLocation": "7034:6:148",
                                                                                        "memberName": "rpcUrl",
                                                                                        "nodeType": "MemberAccess",
                                                                                        "referencedDeclaration": 31495,
                                                                                        "src": "7028:12:148",
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
                                                                                                "id": 31898,
                                                                                                "name": "envName",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31867,
                                                                                                "src": "7056:7:148",
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
                                                                                                "id": 31896,
                                                                                                "name": "vm",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31478,
                                                                                                "src": "7043:2:148",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_contract$_VmSafe_$40662",
                                                                                                    "typeString": "contract VmSafe"
                                                                                                }
                                                                                            },
                                                                                            "id": 31897,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "7046:9:148",
                                                                                            "memberName": "envString",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "referencedDeclaration": 39738,
                                                                                            "src": "7043:12:148",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                                                                "typeString": "function (string memory) view external returns (string memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 31899,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "7043:21:148",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    "src": "7028:36:148",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                                        "typeString": "string memory"
                                                                                    }
                                                                                },
                                                                                "id": 31901,
                                                                                "nodeType": "ExpressionStatement",
                                                                                "src": "7028:36:148"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "id": 31903,
                                                                    "nodeType": "IfStatement",
                                                                    "src": "6869:214:148",
                                                                    "trueBody": {
                                                                        "id": 31892,
                                                                        "nodeType": "Block",
                                                                        "src": "6899:101:148",
                                                                        "statements": [
                                                                            {
                                                                                "expression": {
                                                                                    "id": 31890,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "leftHandSide": {
                                                                                        "expression": {
                                                                                            "id": 31880,
                                                                                            "name": "chain",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 31834,
                                                                                            "src": "6921:5:148",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                                                                "typeString": "struct StdChains.Chain memory"
                                                                                            }
                                                                                        },
                                                                                        "id": 31882,
                                                                                        "isConstant": false,
                                                                                        "isLValue": true,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": true,
                                                                                        "memberLocation": "6927:6:148",
                                                                                        "memberName": "rpcUrl",
                                                                                        "nodeType": "MemberAccess",
                                                                                        "referencedDeclaration": 31495,
                                                                                        "src": "6921:12:148",
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
                                                                                                "id": 31885,
                                                                                                "name": "envName",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31867,
                                                                                                "src": "6945:7:148",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                                                    "typeString": "string memory"
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "baseExpression": {
                                                                                                    "id": 31886,
                                                                                                    "name": "defaultRpcUrls",
                                                                                                    "nodeType": "Identifier",
                                                                                                    "overloadedDeclarations": [],
                                                                                                    "referencedDeclaration": 31505,
                                                                                                    "src": "6954:14:148",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                                                                        "typeString": "mapping(string memory => string storage ref)"
                                                                                                    }
                                                                                                },
                                                                                                "id": 31888,
                                                                                                "indexExpression": {
                                                                                                    "id": 31887,
                                                                                                    "name": "chainAlias",
                                                                                                    "nodeType": "Identifier",
                                                                                                    "overloadedDeclarations": [],
                                                                                                    "referencedDeclaration": 31831,
                                                                                                    "src": "6969:10:148",
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
                                                                                                "src": "6954:26:148",
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
                                                                                                "id": 31883,
                                                                                                "name": "vm",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31478,
                                                                                                "src": "6936:2:148",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_contract$_VmSafe_$40662",
                                                                                                    "typeString": "contract VmSafe"
                                                                                                }
                                                                                            },
                                                                                            "id": 31884,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "6939:5:148",
                                                                                            "memberName": "envOr",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "referencedDeclaration": 39869,
                                                                                            "src": "6936:8:148",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 31889,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "6936:45:148",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    "src": "6921:60:148",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                                        "typeString": "string memory"
                                                                                    }
                                                                                },
                                                                                "id": 31891,
                                                                                "nodeType": "ExpressionStatement",
                                                                                "src": "6921:60:148"
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    "assignments": [
                                                                        31905
                                                                    ],
                                                                    "declarations": [
                                                                        {
                                                                            "constant": false,
                                                                            "id": 31905,
                                                                            "mutability": "mutable",
                                                                            "name": "notFoundError",
                                                                            "nameLocation": "7175:13:148",
                                                                            "nodeType": "VariableDeclaration",
                                                                            "scope": 31938,
                                                                            "src": "7162:26:148",
                                                                            "stateVariable": false,
                                                                            "storageLocation": "memory",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                                "typeString": "bytes"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 31904,
                                                                                "name": "bytes",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "7162:5:148",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                                                    "typeString": "bytes"
                                                                                }
                                                                            },
                                                                            "visibility": "internal"
                                                                        }
                                                                    ],
                                                                    "id": 31918,
                                                                    "initialValue": {
                                                                        "arguments": [
                                                                            {
                                                                                "hexValue": "4368656174436f64654572726f72",
                                                                                "id": 31908,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "string",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "7235:16:148",
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
                                                                                                "id": 31913,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": true,
                                                                                                "kind": "string",
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "Literal",
                                                                                                "src": "7277:18:148",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                                                                    "typeString": "literal_string \"invalid rpc url \""
                                                                                                },
                                                                                                "value": "invalid rpc url "
                                                                                            },
                                                                                            {
                                                                                                "id": 31914,
                                                                                                "name": "chainAlias",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31831,
                                                                                                "src": "7297:10:148",
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
                                                                                                "id": 31911,
                                                                                                "name": "abi",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": -1,
                                                                                                "src": "7260:3:148",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_magic_abi",
                                                                                                    "typeString": "abi"
                                                                                                }
                                                                                            },
                                                                                            "id": 31912,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": true,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "7264:12:148",
                                                                                            "memberName": "encodePacked",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "src": "7260:16:148",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                                "typeString": "function () pure returns (bytes memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 31915,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "7260:48:148",
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
                                                                                    "id": 31910,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                                    "src": "7253:6:148",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                                                        "typeString": "type(string storage pointer)"
                                                                                    },
                                                                                    "typeName": {
                                                                                        "id": 31909,
                                                                                        "name": "string",
                                                                                        "nodeType": "ElementaryTypeName",
                                                                                        "src": "7253:6:148",
                                                                                        "typeDescriptions": {}
                                                                                    }
                                                                                },
                                                                                "id": 31916,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "typeConversion",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "7253:56:148",
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
                                                                                "id": 31906,
                                                                                "name": "abi",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": -1,
                                                                                "src": "7211:3:148",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_abi",
                                                                                    "typeString": "abi"
                                                                                }
                                                                            },
                                                                            "id": 31907,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "7215:19:148",
                                                                            "memberName": "encodeWithSignature",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "7211:23:148",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                                                "typeString": "function (string memory) pure returns (bytes memory)"
                                                                            }
                                                                        },
                                                                        "id": 31917,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "7211:99:148",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "nodeType": "VariableDeclarationStatement",
                                                                    "src": "7162:148:148"
                                                                },
                                                                {
                                                                    "condition": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        },
                                                                        "id": 31934,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_bytes32",
                                                                                "typeString": "bytes32"
                                                                            },
                                                                            "id": 31925,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "id": 31920,
                                                                                        "name": "notFoundError",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 31905,
                                                                                        "src": "7342:13:148",
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
                                                                                    "id": 31919,
                                                                                    "name": "keccak256",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -8,
                                                                                    "src": "7332:9:148",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                    }
                                                                                },
                                                                                "id": 31921,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "7332:24:148",
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
                                                                                        "id": 31923,
                                                                                        "name": "err",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 31864,
                                                                                        "src": "7370:3:148",
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
                                                                                    "id": 31922,
                                                                                    "name": "keccak256",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -8,
                                                                                    "src": "7360:9:148",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                    }
                                                                                },
                                                                                "id": 31924,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "7360:14:148",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                }
                                                                            },
                                                                            "src": "7332:42:148",
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
                                                                            "id": 31933,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "expression": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "id": 31928,
                                                                                                "name": "chain",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31834,
                                                                                                "src": "7384:5:148",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                                                                                    "typeString": "struct StdChains.Chain memory"
                                                                                                }
                                                                                            },
                                                                                            "id": 31929,
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "7390:6:148",
                                                                                            "memberName": "rpcUrl",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "referencedDeclaration": 31495,
                                                                                            "src": "7384:12:148",
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
                                                                                        "id": 31927,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                                        "src": "7378:5:148",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                                            "typeString": "type(bytes storage pointer)"
                                                                                        },
                                                                                        "typeName": {
                                                                                            "id": 31926,
                                                                                            "name": "bytes",
                                                                                            "nodeType": "ElementaryTypeName",
                                                                                            "src": "7378:5:148",
                                                                                            "typeDescriptions": {}
                                                                                        }
                                                                                    },
                                                                                    "id": 31930,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "kind": "typeConversion",
                                                                                    "lValueRequested": false,
                                                                                    "nameLocations": [],
                                                                                    "names": [],
                                                                                    "nodeType": "FunctionCall",
                                                                                    "src": "7378:19:148",
                                                                                    "tryCall": false,
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                                        "typeString": "bytes memory"
                                                                                    }
                                                                                },
                                                                                "id": 31931,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "7398:6:148",
                                                                                "memberName": "length",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "7378:26:148",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "==",
                                                                            "rightExpression": {
                                                                                "hexValue": "30",
                                                                                "id": 31932,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "7408:1:148",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                },
                                                                                "value": "0"
                                                                            },
                                                                            "src": "7378:31:148",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bool",
                                                                                "typeString": "bool"
                                                                            }
                                                                        },
                                                                        "src": "7332:77:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        }
                                                                    },
                                                                    "id": 31937,
                                                                    "nodeType": "IfStatement",
                                                                    "src": "7328:267:148",
                                                                    "trueBody": {
                                                                        "id": 31936,
                                                                        "nodeType": "Block",
                                                                        "src": "7411:184:148",
                                                                        "statements": [
                                                                            {
                                                                                "AST": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "7497:80:148",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "arguments": [
                                                                                                            {
                                                                                                                "kind": "number",
                                                                                                                "nodeType": "YulLiteral",
                                                                                                                "src": "7534:2:148",
                                                                                                                "type": "",
                                                                                                                "value": "32"
                                                                                                            },
                                                                                                            {
                                                                                                                "name": "err",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "7538:3:148"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "add",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "7530:3:148"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "7530:12:148"
                                                                                                    },
                                                                                                    {
                                                                                                        "arguments": [
                                                                                                            {
                                                                                                                "name": "err",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "7550:3:148"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "mload",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "7544:5:148"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "7544:10:148"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "7523:6:148"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "7523:32:148"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "7523:32:148"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "documentation": "@solidity memory-safe-assembly",
                                                                                "evmVersion": "paris",
                                                                                "externalReferences": [
                                                                                    {
                                                                                        "declaration": 31864,
                                                                                        "isOffset": false,
                                                                                        "isSlot": false,
                                                                                        "src": "7538:3:148",
                                                                                        "valueSize": 1
                                                                                    },
                                                                                    {
                                                                                        "declaration": 31864,
                                                                                        "isOffset": false,
                                                                                        "isSlot": false,
                                                                                        "src": "7550:3:148",
                                                                                        "valueSize": 1
                                                                                    }
                                                                                ],
                                                                                "id": 31935,
                                                                                "nodeType": "InlineAssembly",
                                                                                "src": "7488:89:148"
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "errorName": "",
                                                        "id": 31939,
                                                        "nodeType": "TryCatchClause",
                                                        "parameters": {
                                                            "id": 31865,
                                                            "nodeType": "ParameterList",
                                                            "parameters": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 31864,
                                                                    "mutability": "mutable",
                                                                    "name": "err",
                                                                    "nameLocation": "6746:3:148",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 31939,
                                                                    "src": "6733:16:148",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "memory",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 31863,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6733:5:148",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_storage_ptr",
                                                                            "typeString": "bytes"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "src": "6732:18:148"
                                                        },
                                                        "src": "6726:883:148"
                                                    }
                                                ],
                                                "externalCall": {
                                                    "arguments": [
                                                        {
                                                            "id": 31850,
                                                            "name": "chainAlias",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31831,
                                                            "src": "6616:10:148",
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
                                                            "id": 31848,
                                                            "name": "vm",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31478,
                                                            "src": "6606:2:148",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_VmSafe_$40662",
                                                                "typeString": "contract VmSafe"
                                                            }
                                                        },
                                                        "id": 31849,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6609:6:148",
                                                        "memberName": "rpcUrl",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 40623,
                                                        "src": "6606:9:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                            "typeString": "function (string memory) view external returns (string memory)"
                                                        }
                                                    },
                                                    "id": 31851,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6606:21:148",
                                                    "tryCall": true,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                "id": 31940,
                                                "nodeType": "TryStatement",
                                                "src": "6602:1007:148"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 31943,
                                        "name": "chain",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31834,
                                        "src": "7635:5:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "functionReturnParameters": 31839,
                                    "id": 31944,
                                    "nodeType": "Return",
                                    "src": "7628:12:148"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChainWithUpdatedRpcUrl",
                        "nameLocation": "6438:25:148",
                        "parameters": {
                            "id": 31835,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31831,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "6478:10:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31946,
                                    "src": "6464:24:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31830,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6464:6:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 31834,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "6503:5:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31946,
                                    "src": "6490:18:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31833,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31832,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "6490:5:148"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31496,
                                            "src": "6490:5:148"
                                        },
                                        "referencedDeclaration": 31496,
                                        "src": "6490:5:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6463:46:148"
                        },
                        "returnParameters": {
                            "id": 31839,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31838,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31946,
                                    "src": "6527:12:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31496_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31837,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31836,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "6527:5:148"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31496,
                                            "src": "6527:5:148"
                                        },
                                        "referencedDeclaration": 31496,
                                        "src": "6527:5:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31496_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6526:14:148"
                        },
                        "scope": 32176,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 31956,
                        "nodeType": "FunctionDefinition",
                        "src": "7653:117:148",
                        "nodes": [],
                        "body": {
                            "id": 31955,
                            "nodeType": "Block",
                            "src": "7716:54:148",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 31953,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31951,
                                            "name": "fallbackToDefaultRpcUrls",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31512,
                                            "src": "7726:24:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 31952,
                                            "name": "useDefault",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31948,
                                            "src": "7753:10:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "7726:37:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31954,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7726:37:148"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFallbackToDefaultRpcUrls",
                        "nameLocation": "7662:27:148",
                        "parameters": {
                            "id": 31949,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31948,
                                    "mutability": "mutable",
                                    "name": "useDefault",
                                    "nameLocation": "7695:10:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31956,
                                    "src": "7690:15:148",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 31947,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7690:4:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7689:17:148"
                        },
                        "returnParameters": {
                            "id": 31950,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7716:0:148"
                        },
                        "scope": 32176,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 32138,
                        "nodeType": "FunctionDefinition",
                        "src": "7776:2751:148",
                        "nodes": [],
                        "body": {
                            "id": 32137,
                            "nodeType": "Block",
                            "src": "7815:2712:148",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 31959,
                                        "name": "stdChainsInitialized",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31480,
                                        "src": "7829:20:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31961,
                                    "nodeType": "IfStatement",
                                    "src": "7825:33:148",
                                    "trueBody": {
                                        "functionReturnParameters": 31958,
                                        "id": 31960,
                                        "nodeType": "Return",
                                        "src": "7851:7:148"
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 31964,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31962,
                                            "name": "stdChainsInitialized",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31480,
                                            "src": "7868:20:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 31963,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "7891:4:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "7868:27:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31965,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7868:27:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "616e76696c",
                                                "id": 31967,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8018:7:148",
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
                                                        "id": 31969,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8037:7:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                                                            "typeString": "literal_string \"Anvil\""
                                                        },
                                                        "value": "Anvil"
                                                    },
                                                    {
                                                        "hexValue": "3331333337",
                                                        "id": 31970,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8046:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_31337_by_1",
                                                            "typeString": "int_const 31337"
                                                        },
                                                        "value": "31337"
                                                    },
                                                    {
                                                        "hexValue": "687474703a2f2f3132372e302e302e313a38353435",
                                                        "id": 31971,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8053:23:148",
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
                                                    "id": 31968,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "8027:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31972,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8027:50:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31966,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "7992:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31973,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7992:86:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31974,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7992:86:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d61696e6e6574",
                                                "id": 31976,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8127:9:148",
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
                                                        "id": 31978,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8148:9:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                                                            "typeString": "literal_string \"Mainnet\""
                                                        },
                                                        "value": "Mainnet"
                                                    },
                                                    {
                                                        "hexValue": "31",
                                                        "id": 31979,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8159:1:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1_by_1",
                                                            "typeString": "int_const 1"
                                                        },
                                                        "value": "1"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                                                        "id": 31980,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8162:63:148",
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
                                                    "id": 31977,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "8138:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31981,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8138:88:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31975,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "8088:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31982,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8088:148:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31983,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8088:148:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "676f65726c69",
                                                "id": 31985,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8285:8:148",
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
                                                        "id": 31987,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8305:8:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                                                            "typeString": "literal_string \"Goerli\""
                                                        },
                                                        "value": "Goerli"
                                                    },
                                                    {
                                                        "hexValue": "35",
                                                        "id": 31988,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8315:1:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_5_by_1",
                                                            "typeString": "int_const 5"
                                                        },
                                                        "value": "5"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                                                        "id": 31989,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8318:62:148",
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
                                                    "id": 31986,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "8295:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31990,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8295:86:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31984,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "8246:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31991,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8246:145:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31992,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8246:145:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "7365706f6c6961",
                                                "id": 31994,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8440:9:148",
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
                                                        "id": 31996,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8461:9:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                                                            "typeString": "literal_string \"Sepolia\""
                                                        },
                                                        "value": "Sepolia"
                                                    },
                                                    {
                                                        "hexValue": "3131313535313131",
                                                        "id": 31997,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8472:8:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_11155111_by_1",
                                                            "typeString": "int_const 11155111"
                                                        },
                                                        "value": "11155111"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                                                        "id": 31998,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8482:63:148",
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
                                                    "id": 31995,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "8451:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31999,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8451:95:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31993,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "8401:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32000,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8401:155:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32001,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8401:155:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6f7074696d69736d",
                                                "id": 32003,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8592:10:148",
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
                                                        "id": 32005,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8614:10:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                                                            "typeString": "literal_string \"Optimism\""
                                                        },
                                                        "value": "Optimism"
                                                    },
                                                    {
                                                        "hexValue": "3130",
                                                        "id": 32006,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8626:2:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_10_by_1",
                                                            "typeString": "int_const 10"
                                                        },
                                                        "value": "10"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f",
                                                        "id": 32007,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8630:29:148",
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
                                                    "id": 32004,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "8604:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32008,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8604:56:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32002,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "8566:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32009,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8566:95:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32010,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8566:95:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6f7074696d69736d5f676f65726c69",
                                                "id": 32012,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8697:17:148",
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
                                                        "id": 32014,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8726:17:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                                                            "typeString": "literal_string \"Optimism Goerli\""
                                                        },
                                                        "value": "Optimism Goerli"
                                                    },
                                                    {
                                                        "hexValue": "343230",
                                                        "id": 32015,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8745:3:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_420_by_1",
                                                            "typeString": "int_const 420"
                                                        },
                                                        "value": "420"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f",
                                                        "id": 32016,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8750:28:148",
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
                                                    "id": 32013,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "8716:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32017,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8716:63:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32011,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "8671:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32018,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8671:109:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32019,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8671:109:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "617262697472756d5f6f6e65",
                                                "id": 32021,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8816:14:148",
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
                                                        "id": 32023,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8842:14:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                                                            "typeString": "literal_string \"Arbitrum One\""
                                                        },
                                                        "value": "Arbitrum One"
                                                    },
                                                    {
                                                        "hexValue": "3432313631",
                                                        "id": 32024,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8858:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_42161_by_1",
                                                            "typeString": "int_const 42161"
                                                        },
                                                        "value": "42161"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f617262312e617262697472756d2e696f2f727063",
                                                        "id": 32025,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8865:30:148",
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
                                                    "id": 32022,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "8832:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32026,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8832:64:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32020,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "8790:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32027,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8790:107:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32028,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8790:107:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "617262697472756d5f6f6e655f676f65726c69",
                                                "id": 32030,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8946:21:148",
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
                                                        "id": 32032,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8979:21:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                                                            "typeString": "literal_string \"Arbitrum One Goerli\""
                                                        },
                                                        "value": "Arbitrum One Goerli"
                                                    },
                                                    {
                                                        "hexValue": "343231363133",
                                                        "id": 32033,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9002:6:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_421613_by_1",
                                                            "typeString": "int_const 421613"
                                                        },
                                                        "value": "421613"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063",
                                                        "id": 32034,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9010:39:148",
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
                                                    "id": 32031,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "8969:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32035,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8969:81:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32029,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "8907:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32036,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8907:153:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32037,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8907:153:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "617262697472756d5f6e6f7661",
                                                "id": 32039,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9096:15:148",
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
                                                        "id": 32041,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9123:15:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                                                            "typeString": "literal_string \"Arbitrum Nova\""
                                                        },
                                                        "value": "Arbitrum Nova"
                                                    },
                                                    {
                                                        "hexValue": "3432313730",
                                                        "id": 32042,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9140:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_42170_by_1",
                                                            "typeString": "int_const 42170"
                                                        },
                                                        "value": "42170"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063",
                                                        "id": 32043,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9147:30:148",
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
                                                    "id": 32040,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "9113:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32044,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9113:65:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32038,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "9070:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32045,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9070:109:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32046,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9070:109:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "706f6c79676f6e",
                                                "id": 32048,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9215:9:148",
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
                                                        "id": 32050,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9236:9:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                                                            "typeString": "literal_string \"Polygon\""
                                                        },
                                                        "value": "Polygon"
                                                    },
                                                    {
                                                        "hexValue": "313337",
                                                        "id": 32051,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9247:3:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_137_by_1",
                                                            "typeString": "int_const 137"
                                                        },
                                                        "value": "137"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f706f6c79676f6e2d7270632e636f6d",
                                                        "id": 32052,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9252:25:148",
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
                                                    "id": 32049,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "9226:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32053,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9226:52:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32047,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "9189:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32054,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9189:90:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32055,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9189:90:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "706f6c79676f6e5f6d756d626169",
                                                "id": 32057,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9328:16:148",
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
                                                        "id": 32059,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9356:16:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                                                            "typeString": "literal_string \"Polygon Mumbai\""
                                                        },
                                                        "value": "Polygon Mumbai"
                                                    },
                                                    {
                                                        "hexValue": "3830303031",
                                                        "id": 32060,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9374:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_80001_by_1",
                                                            "typeString": "int_const 80001"
                                                        },
                                                        "value": "80001"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d",
                                                        "id": 32061,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9381:35:148",
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
                                                    "id": 32058,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "9346:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32062,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9346:71:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32056,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "9289:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32063,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9289:138:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32064,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9289:138:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6176616c616e636865",
                                                "id": 32066,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9463:11:148",
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
                                                        "id": 32068,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9486:11:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                                                            "typeString": "literal_string \"Avalanche\""
                                                        },
                                                        "value": "Avalanche"
                                                    },
                                                    {
                                                        "hexValue": "3433313134",
                                                        "id": 32069,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9499:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_43114_by_1",
                                                            "typeString": "int_const 43114"
                                                        },
                                                        "value": "43114"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063",
                                                        "id": 32070,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9506:39:148",
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
                                                    "id": 32067,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "9476:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32071,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9476:70:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32065,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "9437:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32072,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9437:110:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32073,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9437:110:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6176616c616e6368655f66756a69",
                                                "id": 32075,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9596:16:148",
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
                                                        "id": 32077,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9624:16:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                                                            "typeString": "literal_string \"Avalanche Fuji\""
                                                        },
                                                        "value": "Avalanche Fuji"
                                                    },
                                                    {
                                                        "hexValue": "3433313133",
                                                        "id": 32078,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9642:5:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_43113_by_1",
                                                            "typeString": "int_const 43113"
                                                        },
                                                        "value": "43113"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063",
                                                        "id": 32079,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9649:44:148",
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
                                                    "id": 32076,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "9614:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32080,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9614:80:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32074,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "9557:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32081,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9557:147:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32082,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9557:147:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "626e625f736d6172745f636861696e",
                                                "id": 32084,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9753:17:148",
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
                                                        "id": 32086,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9782:17:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                                                            "typeString": "literal_string \"BNB Smart Chain\""
                                                        },
                                                        "value": "BNB Smart Chain"
                                                    },
                                                    {
                                                        "hexValue": "3536",
                                                        "id": 32087,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9801:2:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_56_by_1",
                                                            "typeString": "int_const 56"
                                                        },
                                                        "value": "56"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267",
                                                        "id": 32088,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9805:35:148",
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
                                                    "id": 32085,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "9772:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32089,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9772:69:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32083,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "9714:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32090,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9714:137:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32091,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9714:137:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "626e625f736d6172745f636861696e5f746573746e6574",
                                                "id": 32093,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9900:25:148",
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
                                                        "id": 32095,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9949:25:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                                                            "typeString": "literal_string \"BNB Smart Chain Testnet\""
                                                        },
                                                        "value": "BNB Smart Chain Testnet"
                                                    },
                                                    {
                                                        "hexValue": "3937",
                                                        "id": 32096,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9976:2:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_97_by_1",
                                                            "typeString": "int_const 97"
                                                        },
                                                        "value": "97"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c",
                                                        "id": 32097,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9980:41:148",
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
                                                    "id": 32094,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "9939:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32098,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9939:83:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32092,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "9861:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32099,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9861:171:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32100,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9861:171:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "676e6f7369735f636861696e",
                                                "id": 32102,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10068:14:148",
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
                                                        "id": 32104,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10094:14:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                                                            "typeString": "literal_string \"Gnosis Chain\""
                                                        },
                                                        "value": "Gnosis Chain"
                                                    },
                                                    {
                                                        "hexValue": "313030",
                                                        "id": 32105,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10110:3:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_100_by_1",
                                                            "typeString": "int_const 100"
                                                        },
                                                        "value": "100"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d",
                                                        "id": 32106,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10115:29:148",
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
                                                    "id": 32103,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "10084:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32107,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10084:61:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32101,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "10042:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32108,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10042:104:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32109,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10042:104:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d6f6f6e6265616d",
                                                "id": 32111,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10182:10:148",
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
                                                        "id": 32113,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10204:10:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                                                            "typeString": "literal_string \"Moonbeam\""
                                                        },
                                                        "value": "Moonbeam"
                                                    },
                                                    {
                                                        "hexValue": "31323834",
                                                        "id": 32114,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10216:4:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1284_by_1",
                                                            "typeString": "int_const 1284"
                                                        },
                                                        "value": "1284"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b",
                                                        "id": 32115,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10222:34:148",
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
                                                    "id": 32112,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "10194:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32116,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10194:63:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32110,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "10156:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32117,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10156:102:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32118,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10156:102:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d6f6f6e7269766572",
                                                "id": 32120,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10307:11:148",
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
                                                        "id": 32122,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10330:11:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                                                            "typeString": "literal_string \"Moonriver\""
                                                        },
                                                        "value": "Moonriver"
                                                    },
                                                    {
                                                        "hexValue": "31323835",
                                                        "id": 32123,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10343:4:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1285_by_1",
                                                            "typeString": "int_const 1285"
                                                        },
                                                        "value": "1285"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b",
                                                        "id": 32124,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10349:44:148",
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
                                                    "id": 32121,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "10320:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32125,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10320:74:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32119,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "10268:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32126,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10268:136:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32127,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10268:136:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d6f6f6e62617365",
                                                "id": 32129,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10440:10:148",
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
                                                        "id": 32131,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10462:10:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                                                            "typeString": "literal_string \"Moonbase\""
                                                        },
                                                        "value": "Moonbase"
                                                    },
                                                    {
                                                        "hexValue": "31323837",
                                                        "id": 32132,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10474:4:148",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1287_by_1",
                                                            "typeString": "int_const 1287"
                                                        },
                                                        "value": "1287"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b",
                                                        "id": 32133,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10480:38:148",
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
                                                    "id": 32130,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31487,
                                                    "src": "10452:9:148",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31487_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 32134,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10452:67:148",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32128,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32175,
                                            "src": "10414:25:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32135,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10414:106:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32136,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10414:106:148"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initializeStdChains",
                        "nameLocation": "7785:19:148",
                        "parameters": {
                            "id": 31957,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7804:2:148"
                        },
                        "returnParameters": {
                            "id": 31958,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7815:0:148"
                        },
                        "scope": 32176,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 32175,
                        "nodeType": "FunctionDefinition",
                        "src": "10609:305:148",
                        "nodes": [],
                        "body": {
                            "id": 32174,
                            "nodeType": "Block",
                            "src": "10702:212:148",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        32147
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 32147,
                                            "mutability": "mutable",
                                            "name": "rpcUrl",
                                            "nameLocation": "10726:6:148",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 32174,
                                            "src": "10712:20:148",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 32146,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10712:6:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 32150,
                                    "initialValue": {
                                        "expression": {
                                            "id": 32148,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32143,
                                            "src": "10735:5:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                "typeString": "struct StdChains.ChainData memory"
                                            }
                                        },
                                        "id": 32149,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "10741:6:148",
                                        "memberName": "rpcUrl",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 31486,
                                        "src": "10735:12:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10712:35:148"
                                },
                                {
                                    "expression": {
                                        "id": 32155,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 32151,
                                                "name": "defaultRpcUrls",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31505,
                                                "src": "10757:14:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                    "typeString": "mapping(string memory => string storage ref)"
                                                }
                                            },
                                            "id": 32153,
                                            "indexExpression": {
                                                "id": 32152,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 32140,
                                                "src": "10772:10:148",
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
                                            "src": "10757:26:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 32154,
                                            "name": "rpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32147,
                                            "src": "10786:6:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "10757:35:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 32156,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10757:35:148"
                                },
                                {
                                    "expression": {
                                        "id": 32161,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 32157,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 32143,
                                                "src": "10802:5:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            },
                                            "id": 32159,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "10808:6:148",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 31486,
                                            "src": "10802:12:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "",
                                            "id": 32160,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "10817:2:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                "typeString": "literal_string \"\""
                                            },
                                            "value": ""
                                        },
                                        "src": "10802:17:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 32162,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10802:17:148"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 32164,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 32140,
                                                "src": "10838:10:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 32165,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 32143,
                                                "src": "10850:5:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 32163,
                                            "name": "setChain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                31731,
                                                31752
                                            ],
                                            "referencedDeclaration": 31731,
                                            "src": "10829:8:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31487_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 32166,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10829:27:148",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 32167,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10829:27:148"
                                },
                                {
                                    "expression": {
                                        "id": 32172,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 32168,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 32143,
                                                "src": "10866:5:148",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            },
                                            "id": 32170,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "10872:6:148",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 31486,
                                            "src": "10866:12:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 32171,
                                            "name": "rpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 32147,
                                            "src": "10881:6:148",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "10866:21:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 32173,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10866:21:148"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setChainWithDefaultRpcUrl",
                        "nameLocation": "10618:25:148",
                        "parameters": {
                            "id": 32144,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 32140,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "10658:10:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 32175,
                                    "src": "10644:24:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 32139,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10644:6:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 32143,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "10687:5:148",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 32175,
                                    "src": "10670:22:148",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$31487_memory_ptr",
                                        "typeString": "struct StdChains.ChainData"
                                    },
                                    "typeName": {
                                        "id": 32142,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 32141,
                                            "name": "ChainData",
                                            "nameLocations": [
                                                "10670:9:148"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31487,
                                            "src": "10670:9:148"
                                        },
                                        "referencedDeclaration": 31487,
                                        "src": "10670:9:148",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_ChainData_$31487_storage_ptr",
                                            "typeString": "struct StdChains.ChainData"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10643:50:148"
                        },
                        "returnParameters": {
                            "id": 32145,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10702:0:148"
                        },
                        "scope": 32176,
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
                    "id": 31461,
                    "nodeType": "StructuredDocumentation",
                    "src": "99:1799:148",
                    "text": " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    32176
                ],
                "name": "StdChains",
                "nameLocation": "1917:9:148",
                "scope": 32177,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 148
};
